# Calendario de Adviento — publicación día por día

**El repo DEBE ser PRIVADO** (contiene `private/` con todos los mensajes).

## Estructura
- `private/days.js`  → todos los mensajes (24 días + cartitas). Edita aquí.
- `private/config.json` → topic de ntfy (suscríbete a ESE nombre en la app) y código secreto.
- `private/media/` → fotos/audios (`media/dia3.jpg`, `media/navidad-soft.mp3`, …). Solo se publican los de días ya abiertos.
- `src/index.template.html` → la página. `build.py` → genera `dist/`.

## Probar en tu PC
- `python3 build.py --preview` y abre `dist/index.html` (muestra los 24 días + notas chatReference). **No subir ese dist.**
- `python3 build.py --day 5` simula que hoy es 5 de diciembre.
- Modo Piojo: toca el título 7 veces rápido → escribe el código.

## Publicar (Vercel, gratis, repo privado)
1. Sube el repo (privado) a GitHub e impórtalo en Vercel (usa `vercel.json`, ya configurado).
2. Vercel → Settings → Git → **Deploy Hooks** → crea uno → copia la URL.
3. GitHub → Settings → Secrets → Actions → `VERCEL_DEPLOY_HOOK` = esa URL.
4. El workflow redeploya todos los días a las 00:10 (hora Nicaragua) y publica el día nuevo.

## Notas de seguridad
- Los días futuros NO existen en el sitio público (ni mensajes, ni títulos, ni fotos).
- El topic de ntfy sigue visible en el código del sitio; es aleatorio, pero ella podría leerlo.
- El código secreto solo va como hash; aun así, el modo Piojo público no revela nada que no esté ya publicado.
