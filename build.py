#!/usr/bin/env python3
"""Genera dist/ con SOLO los días ya desbloqueados.
  python3 build.py              -> build público (fecha real, UTC-6)
  python3 build.py --day 5      -> simula que hoy es el día 5 de diciembre
  python3 build.py --preview    -> build local con los 24 días + chatReference (NO subir)
"""
import argparse, json, re, shutil, subprocess, sys
from datetime import datetime, timezone, timedelta
from pathlib import Path

ROOT = Path(__file__).parent
YEAR = 2026
H53 = r"""const h53=(str,seed=0)=>{let h1=0xdeadbeef^seed,h2=0x41c6ce57^seed;for(let i=0,ch;i<str.length;i++){ch=str.charCodeAt(i);h1=Math.imul(h1^ch,2654435761);h2=Math.imul(h2^ch,1597334677);}h1=Math.imul(h1^(h1>>>16),2246822507)^Math.imul(h2^(h2>>>13),3266489909);h2=Math.imul(h2^(h2>>>16),2246822507)^Math.imul(h1^(h1>>>13),3266489909);return 4294967296*(2097151&h2)+(h1>>>0);};"""

def node(js, *args):
    return subprocess.check_output(["node", "-e", js, *args], text=True)

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--day", type=int)
    ap.add_argument("--preview", action="store_true")
    a = ap.parse_args()

    cfg = json.loads((ROOT / "private/config.json").read_text(encoding="utf-8"))
    raw = node("const fs=require('fs');eval(fs.readFileSync(process.argv[1],'utf8')+';console.log(JSON.stringify({days:CALENDAR_DAYS,notes:WAIT_NOTES}))')",
               str(ROOT / "private/days.js"))
    data = json.loads(raw)

    now = datetime.now(timezone(timedelta(hours=-6)))  # Nicaragua / CST
    if a.preview:
        up, nov = 24, 30
    elif a.day:
        up, nov = a.day, 30
    elif (now.year, now.month) < (YEAR, 11):
        up, nov = 0, 0
    elif (now.year, now.month) == (YEAR, 11):
        up, nov = 0, now.day
    elif (now.year, now.month) == (YEAR, 12):
        up, nov = min(now.day, 24), 30
    else:
        up, nov = 24, 30

    days = [d for d in data["days"] if d["day"] <= up]
    notes = [n for n in data["notes"] if n["d"] <= nov]
    if not a.preview:
        for d in days:
            d.pop("chatReference", None)

    dist = ROOT / "dist"
    if dist.exists():
        shutil.rmtree(dist)
    (dist / "media").mkdir(parents=True)

    gate = node(H53 + "console.log(h53(process.argv[1].trim().toLowerCase()))", cfg["gate_code"]).strip()
    html = (ROOT / "src/index.template.html").read_text(encoding="utf-8")
    html = html.replace("__NTFY_TOPIC__", cfg["ntfy_topic"]).replace("__GATE_HASH__", gate)
    (dist / "index.html").write_text(html, encoding="utf-8")
    (dist / "data.js").write_text("window.ADVENT_DATA=" + json.dumps({"days": days, "notes": notes}, ensure_ascii=False) + ";", encoding="utf-8")

    # media: solo lo que usan los días publicados + la música de fondo
    wanted = {"media/navidad-soft.mp3"}
    for d in days:
        for k in ("imageUrl", "audioUrl"):
            if d.get(k):
                wanted.add(d[k])
    for rel in wanted:
        src = ROOT / "private" / rel
        if src.exists():
            (dist / rel).parent.mkdir(parents=True, exist_ok=True)
            shutil.copy(src, dist / rel)
        elif rel != "media/navidad-soft.mp3":
            print(f"aviso: falta private/{rel}", file=sys.stderr)

    print(f"OK → dist/  ({len(days)} días, {len(notes)} cartitas, fecha {now:%Y-%m-%d %H:%M} UTC-6)")

main()
