/* =====================================================================
   CARTITAS DE ESPERA (24 al 30 de noviembre).
   ===================================================================== */
const WAIT_NOTES = [
 { d:24, title:"Bienvenida, bonita", text:`Sé que te hubiera gustado un calendario de adviento de maquillaje y no pude dártelo. Así que hice este, a mi manera y con todo el cariño del mundo 💗\n\nTodavía faltan unos días para el 1, pero mientras tanto: pasa por el tocador, atrapa regalitos y vuelve cada día por una cartita.` },
 { d:25, title:"Nuestras desveladas", text:`Me encantan nuestras llamadas hasta las tantas, el ruido de tu teclado, tu risa de fondo y esos "¿sigues ahí?". Gracias por quedarte despierta conmigo, nooboo 🌙` },
 { d:26, title:"Misión de hoy", text:`Ve al tocador, píntate a tu gusto y guarda tu look. Quiero saber qué labios y qué sombras elegirías para Navidad 💄` },
 { d:27, title:"Dato curioso", text:`Tu risa (sí, esa de "JDLAKAJA") es de mis sonidos favoritos. Guárdame una para cuando abras el día 1.` },
 { d:28, title:"Pequeña confesión", text:`Me emociona más verte abrir esto que cualquier regalo que haya dado. Tú sigue picándole a lo que está bloqueado, que yo me divierto 😌` },
 { d:29, title:"Faltan dos días", text:`Spoiler: hay vales, hay cartas, hay risas, hay recuerdos nuestros y hasta una canción con guitarra. No digo más.` },
 { d:30, title:"Mañana empieza todo", text:`Ve a dormir temprano (sé que no lo harás) y abre el día 1 apenas amanezca. Te amo, nooboo 💗` }
];

/* =====================================================================
   CALENDAR_DAYS: edita aquí todo el contenido.
   type: "romantic" | "funny" | "coupon"
   chatReference: SOLO lo ves tú (en Modo Vista Previa): fecha/hora del .txt para buscar fotos/audios.
   imageUrl / audioUrl: opcionales (rutas locales tipo "media/dia3.jpg"). Vacíos = ilustración automática.
   link: opcional {url, text}. En los "coupon", el title es el nombre del vale.
   ===================================================================== */
const CALENDAR_DAYS = [
 { day:1, type:"romantic", title:"Primera ventanita",
   chatReference:"Sin foto obligatoria. Idea opcional: tu foto con la vela, 31/10/2026 11:22 p. m. (Multimedia omitido).",
   message:`Hola, amor 🎄

Hoy empieza diciembre y yo empiezo mi misión: darte una sorpresa cada día hasta Nochebuena. No porque lo necesites, sino porque a mí me encanta verte feliz aunque sea a través de una pantalla.

Si querías un calendario de maquillaje y no pude dártelo, este lo hice yo, con lo que tengo: cartas, risas, vales y recuerdos nuestros. Prepárate, nooboo: hay cosas que todavía no sabes (sí, ya sé que eso te desespera 😌).`, imageUrl:"", audioUrl:"" },

 { day:2, type:"funny", title:"Expediente oficial: la paciencia de Piojo",
   chatReference:"Texto: 16/9/2026 5:36 p. m. a 5:39 p. m. (los cinco 'Decime' y el 'no sirvo para sorpresas'). Sin multimedia necesaria.",
   message:`📋 EXPEDIENTE #001
Sujeto: nooboo, jefa absoluta de la relación.

Evidencia: 16 de septiembre, 5:36 p. m. Cinco "Decime" seguidos en menos de un minuto, amenaza de dejarme de hablar y cero piedad con la sorpresa de las flores.

Resultado: Piojo sobrevivió, las flores llegaron y tú "no sirves para las sorpresas" (tus palabras).

Conclusión oficial: probar mi paciencia es tu deporte favorito, y yo siempre vuelvo a inscribirme.`, imageUrl:"", audioUrl:"" },

 { day:3, type:"romantic", title:"Flores amarillas",
   chatReference:"Fotos del ramo: 16/9/2026 7:08 p. m., 7:12 p. m. y 7:13 p. m. (Multimedia omitido). Página de girasoles: 21/9/2026 10:28 p. m.",
   message:`Ese 16 de septiembre no iba a dejar que no recibieras flores amarillas. Estaba feliz de haberlo logrado… aunque tú ya te habías dado cuenta de todo, porque a ti es imposible esconderte una sorpresa.

Todavía me hace reír que lo primero que preguntaste fue cómo te las ibas a llevar en el bus. Así eres: piensas hasta en cómo cuidar un ramo antes de tenerlo en las manos.

Y el 21 de septiembre te hice una página donde las flores explotan al tocarlas. Sigo con ganas de hacerte cosas así.`,
   link:{ url:"https://rdanielparra.github.io/21Septiembre/", text:"🌻 Volver a ver la página del 21 de septiembre" }, imageUrl:"", audioUrl:"" },

 { day:4, type:"coupon", title:"Vale: tú eliges el mapa en Valorant",
   chatReference:"Referencia: 11/8/2026 1:13 a. m. ('Odio este mapa, no sé cómo pickear acá'). Sin multimedia.",
   message:`🎮 Este vale te da el poder absoluto de elegir el mapa en Valorant. Y no solo eso: también el agente que Piojo tendrá que jugar.

Piojo no podrá decir "odio este mapa" (aunque lo piense y le duela el alma).

Válido una vez, sin quejas y sin el clásico "es que aquí no sé cómo pickear".`, imageUrl:"", audioUrl:"" },

 { day:5, type:"romantic", title:"Alerta Amber (me asusté)",
   chatReference:"Texto: 24/10/2026 1:17 p. m. a 5:17 p. m. ('Estás viva amor?', 'Alerta Amber', 'estás comiendo tu gelatina?'). Fotos: 24/10/2026 4:46 p. m. y 4:56 p. m. (Multimedia omitido).",
   message:`Ese 24 de octubre desaparecías, y yo mandando mensajes: "¿Estás viva?", "¿Tas bien?", hasta que amenacé con sonar la alerta Amber (sí, exagerado).

Luego supe que tenías fiebre y que ni ganas de comer tenías. Lo único que quise fue cuidarte desde lejos, con una gelatina por mensaje y un "descansa lo más que puedas".

Siempre estaré a un mensaje, bonita. Y si algún día no contestas, la alerta Amber vuelve a sonar.`, imageUrl:"", audioUrl:"" },

 { day:6, type:"funny", title:"Valorant, edición 'me confunden'",
   chatReference:"Capturas: 11/8/2026 1:05 a. m., 1:07 a. m. y 1:08 a. m. (Multimedia omitido). También 'la ganamos': 11/8/2026 10:59 p. m.",
   message:`🎯 Noche del 11 de agosto, 1:05 a. m.

Tú: "Yo llevo 2 kills."
Yo: "El Chamber lleva 4 y es oro 3."
Tú: "Me hicieron mrd… no pusieron murito, pipipi."

Yo, con mi ego eterno y mi odio al doble centinela, perdiendo contigo en equipo y feliz.

Esa misma noche, horas después, ganaron la compe. Mi respuesta oficial: "That's my girl."`, imageUrl:"", audioUrl:"" },

 { day:7, type:"romantic", title:"Soy difícil",
   chatReference:"Texto: 27/10/2026 1:01 a. m. a 1:03 a. m. ('soy difícil, déjame' / '¿por qué me gustaría lo fácil?').",
   message:`Una madrugada me dijiste: "soy difícil, déjame". Y yo te contesté: "¿por qué me gustaría lo fácil?".

Sigue siendo verdad. Me gusta tu carácter, que me pongas a prueba, que me digas que no cuando toca y me regales una sonrisa cuando menos lo espero.

Lo difícil contigo vale cada intento, amor.`, imageUrl:"", audioUrl:"" },

 { day:8, type:"coupon", title:"Vale: noche de pelis y snacks con temática de Snoopy",
   chatReference:"Referencia opcional: planes de anime (16/11/2026 7:07 p. m. 'veamos Nana el finde'). Sin multimedia.",
   message:`🍿 Vale por una noche de pelis y snacks con temática de Snoopy.

Tú eliges la película, los snacks tienen que ser dignos de una navidad cozy y yo llevo la paciencia (la traigo cargada).

Si en medio se cuela un capítulo de anime en Crunchy, el vale se estira sin costo extra.`, imageUrl:"", audioUrl:"" },

 { day:9, type:"funny", title:"Misión secreta: buscar el token",
   chatReference:"Texto: 16/11/2026 2:35 p. m. a 2:36 p. m. ('¿te enojas si me toca el token?' / 'Te mato' / 'Te bloqueo desde ahorita').",
   message:`🔎 FORTNITE · 16 de noviembre, 2:35 p. m.

Yo, inocente: "¿Te enojas si me toca el token?"
Tú: "Te mato."
Tú, otra vez: "Te bloqueo desde ahorita."
Yo: "¿Qué hago tons? :c"

Misión del día: buscar el token.
Dificultad: no pelearme con la jefa.
Recompensa: seguir vivo y con acceso a tu chat.

Spoiler: si lo encuentro, juro que era para ti.`, imageUrl:"", audioUrl:"" },

 { day:10, type:"romantic", title:"Nuestras desveladas",
   chatReference:"Texto: 11/8/2026 11:42 p. m. a 11:47 p. m. ('no me gustan las sleepy calls, tbh'), 18/10/2026 2:13 a. m., 27/10/2026 3:56 a. m. ('a mis 6 am').",
   message:`El 11 de agosto me dijiste que no te gustaban las sleepy calls, tbh. Mírate ahora: "ya me iré a mimir, se me cierran los ojitos" a las 3 de la mañana y yo diciendo "solo cinco minutitos más".

Me encantan nuestras llamadas hasta las tantas, el ruido de tu teclado, tu risa de fondo y esos "¿sigues ahí?".

Y lo que más me gusta es que, aunque se nos cierren los ojitos, ninguno quiere colgar primero.`, imageUrl:"", audioUrl:"" },

 { day:11, type:"romantic", title:"Yo sé",
   chatReference:"Texto: 8/10/2026 11:02 p. m. ('Yo sé, descansa'), 9/10/2026 10:05 p. m. ('Yo sé'), 21/11/2026 12:16 a. m. ('Yo también animal').",
   message:`Hay algo que hago todos los días: decirte "te amo". Y hay algo que haces tú: contestar "yo sé", como toda una jefa. 😌

Me encanta. Porque detrás de ese "yo sé" hay una niña que sabe que la quiero, y que me quiere de vuelta aunque a veces lo disfrace de "más te vale".

Así que hoy toca otra vez: te amo, amor. Y no hace falta que contestes. Ya sé tu respuesta.`, imageUrl:"", audioUrl:"" },

 { day:12, type:"coupon", title:"Vale: ganar una discusión automáticamente",
   chatReference:"Sin multimedia. Chiste interno: ella manda en las peleas.",
   message:`⚖️ Vale para ganar una discusión automáticamente (aunque ya mandes siempre).

Instrucciones: al empezar, di "canjeo el vale". Piojo pondrá cara de derrota digna, dirá "tienes razón" y fingirá que no lo tenía planeado.

Válido una vez. No aplica si Piojo realmente tiene razón (broma, sí aplica).`, imageUrl:"", audioUrl:"" },

 { day:13, type:"romantic", title:"Tu risa",
   chatReference:"Audios/videos con risa: 19/11/2026 12:29 a. m. (Video note omitted), 10/11/2026 7:46 a. m. (Video note omitted), 16/11/2026 8:29 a. m. (Video note omitted).",
   message:`Me encanta cómo te ríes. Aunque sea escrita, un "JDLAKAJA" tuyo ya me contagia la sonrisa; por llamada es peor: no puedo estar serio ni aunque quiera.

Tu risa es de las que se pegan: empiezas tú y terminamos los dos sin saber de qué. Si pudiera guardar un sonido para siempre, sería ese.

Gracias por reírte conmigo, babe (y de mí, que también cuenta).`, imageUrl:"", audioUrl:"" },

 { day:14, type:"funny", title:"Piojo, tu bloc de notas oficial",
   chatReference:"Texto: 29/9/2026 7:36 a. m. a 10:06 a. m. ('2 objetivos smart', 'bloc de notas', 'Canadá'). Capturas: 29/9/2026 9:55 a. m. (Multimedia omitido).",
   message:`📝 29 de septiembre, 7:36 a. m.: te mando "2 objetivos smart" sin contexto.
Tú: "¿Y tengo cara de ser bloc de notas o qué?"
Mi defensa: "Eras el chat más cercano que tenía."

Ese mismo día:
Yo: "Sácame de la uni."
Tú: "A mí del trabajo."
Yo: "Vámonos a Canadá, a jugar hockey y a ver las cataratas."

La oferta sigue en pie. Tú pones el abrigo, yo pongo el hockey (malísimo).`, imageUrl:"", audioUrl:"" },

 { day:15, type:"coupon", title:"Vale: un deseo sin quejas de Piojo",
   chatReference:"Sin multimedia. Chiste interno: su 'dame chance'.",
   message:`🧞 Vale por un deseo sin quejas de Piojo.

Pide lo que quieras (razonable… o no tanto). Piojo lo cumplirá sin "¿es en serio?", sin "dame chance" y sin hacerse el dormido.

Limitaciones: ninguna que no puedas convencerme de ignorar.`, imageUrl:"", audioUrl:"" },

 { day:16, type:"romantic", title:"Mi plantita",
   chatReference:"Texto: 10/11/2026 9:19 a. m. a 9:20 a. m. ('Ven y duerme en mi pecho', 'Soy una plantita, requiero atención'). Foto: 9:19 a. m. y 9:20 a. m. (Multimedia omitido).",
   message:`Una mañana me escribiste: "soy una plantita, requiero atención".

Aquí hay atención de sobra, nooboo. Este día es solo para regarte de cariño: un abrazo largo, palabras bonitas y una promesa. Aunque me gane el sueño (casi siempre me gana), voy a levantarme a contestarte.

Y sí: ven y duerme en mi pecho cuando quieras. Ahí tienes lugar reservado.`, imageUrl:"", audioUrl:"" },

 { day:17, type:"funny", title:"Ingeniera del apagar y encender",
   chatReference:"Capturas: 19/10/2026 11:38 a. m. y 11:45 a. m. (Multimedia omitido). Texto: 19/10/2026 6:02 p. m. y 23/11/2026 11:19 a. m. a 1:31 p. m.",
   message:`💻 Día de auditoría: el escáner congelado y la laptop trabada. Tú: "Ya pude. Soy pro."

Mi diagnóstico de ingeniero experto: apágalo y préndelo, o dale un leve golpe. Dos soluciones oficiales y cero títulos.

Después la plataforma de tu trabajo se cayó y estuve "con ingenieros hablándolo". La solución final fue el caché.

Veredicto: eres una crack, una fiera, un mastodonte. Y si el ing te falla, Piojo se ofrece como soporte técnico remoto. Tarifa: abrazos.`, imageUrl:"", audioUrl:"" },

 { day:18, type:"coupon", title:"Vale: flores a pedido",
   chatReference:"Texto: 21/11/2026 12:45 a. m. ('Si me das flores te mando un beso') y 18/10/2026 4:26 p. m. a 4:31 p. m. (naturales o limpiapipas).",
   message:`💐 Un día dijiste: "si me das flores te mando un beso". Piojo tomó nota.

Este vale te da un ramo a pedido: lirios, girasoles o lo que se te antoje. Naturales, de limpiapipas o de crochet, como tú prefieras.

Lo del beso queda a tu criterio, jefa.`, imageUrl:"", audioUrl:"" },

 { day:19, type:"romantic", title:"Sin palabras",
   chatReference:"Fotos: 3/11/2026 4:51 p. m. y 5:00 p. m. (Multimedia omitido). Texto largo: 3/11/2026 6:13 p. m. Poema: 16/10/2026 9:36 a. m. (fotos 9:25 a. m. y 9:26 a. m.).",
   message:`El 3 de noviembre te escribí "estoy sin palabras". Y luego, aun así, me salieron un montón.

Tus ojos grandes y brillantes, tu carita, tu cabello tan bonito, esa forma en que te ves aunque no te lo creas. Verte se siente más bonito que el sol de invierno.

Hoy lo repito sin pena: eres lo más hermoso que me ha pasado, amor. Y todavía me quedo sin palabras.`, imageUrl:"", audioUrl:"" },

 { day:20, type:"coupon", title:"Vale: un detalle de Keroppi (o Sanrio)",
   chatReference:"Texto: 14/8/2026 4:24 p. m. a 6:33 p. m. (la tienda que nos dejó en visto; 'Sanrio y cosas bonitas y rosadas'). 4/11/2026 3:23 p. m. (Keroppi, Multimedia omitido) y 5:01 p. m.",
   message:`🐸 El 14 de agosto te pregunté tus gustos y me dijiste: "personajes de Sanrio y cosas bonitas y rosadas". Lo anoté con letras doradas.

Aquella vez la tienda me dejó en visto (pésimo servicio, cero estrellas). Este vale repara el daño: un detalle de Keroppi, o del personaje de Sanrio que tú elijas.

Válido cuando Piojo cobre y la vida de adulto lo permita, pero con muchísimo amor.`, imageUrl:"", audioUrl:"" },

 { day:21, type:"coupon", title:"Vale: una canción con guitarra a tu elección",
   chatReference:"No viene del chat. Graba una nota de voz o un video corto tocando y ponlo en audioUrl (por ejemplo media/guitarra.mp3).",
   message:`🎸 Vale por una canción tocada con mi guitarra, la que tú pidas.

Ya te he cantado "Vámonos a Marte" y "Te quiero tanto" de Kevin Kaarl. Este vale es para que elijas la siguiente.

Prometo afinar antes (mucho, aunque no garantizo nada).`, imageUrl:"", audioUrl:"" },

 { day:22, type:"romantic", title:"Flores efímeras",
   chatReference:"Texto: 18/10/2026 4:26 p. m. a 4:36 p. m. Fotos: 18/10/2026 4:35 p. m. y 4:36 p. m.; lirios 19/10/2026 6:04 p. m. (Multimedia omitido).",
   message:`Una tarde discutimos (con cariño) si eran mejores las flores eternas o las naturales. Yo defendí que las naturales son bonitas porque así nacieron, y que son efímeras, lo que nos hace apreciar su belleza.

Me dijiste que en otra vida fuiste abeja o colibrí. Yo te contesté que fuiste la más hermosa de todas, y lo sostengo.

Contigo lo siento al revés: bonito como lo natural, pero con raíces de las que no se secan.`, imageUrl:"", audioUrl:"" },

 { day:23, type:"romantic", title:"Vámonos a Marte",
   chatReference:"Texto: 21/11/2026 12:24 a. m. a 1:41 a. m. ('Daría lo que fuera por poder estar ahí a tu lado'). Graba una nota de voz o video tocando 'Vámonos a Marte' o 'Te quiero tanto' y pónlo en audioUrl.",
   message:`A veces agarro mi guitarra y toco "Vámonos a Marte" y "Te quiero tanto", las mismas que te he cantado. No soy músico: solo alguien que quiere que sepas lo que siente cuando no encuentra otras palabras.

Una madrugada te escribí: "daría lo que fuera por poder estar ahí a tu lado". Lo sigo diciendo en serio. Aunque sea para ver una peli en silencio, o para que me mandes a callar con un "cálmate".

Mientras llega ese día, nuestras pantallas hacen el trabajo. Y mi lugar favorito sigue teniendo tu nombre.`, imageUrl:"", audioUrl:"" },

 { day:24, type:"romantic", title:"Nochebuena",
   chatReference:"Texto: 9/11/2026 12:17 a. m. ('TEY AAAMOOPR' transmitiendo), 7/11/2026 1:59 a. m. ('Adore You'), 27/10/2026 6:01 p. m., 21/11/2026 2:00 a. m., 23/11/2026 8:22 p. m. Foto final sugerida: la que más te guste de ustedes dos.",
   message:`Feliz Nochebuena, amor 🎄

Quise regalarte un calendario de adviento de maquillaje y no pude, así que hice uno con lo único que me sobra: tiempo pensando en ti.

Me puse a contar en nuestro chat, desde el 3 de agosto. Te escribí "te amo" al menos 42 veces, "amor" más de 100 y te dije preciosa, hermosa o bonita casi 40. Y eso sin contar lo que se me queda en las llamadas.

Te escribí que me pareces hermosa siempre, "no importa el estilo, forma o como te veas". Que eres la mujer que amo y que quiero darte todo lo que te mereces, aunque no terminaría de dártelo todo en esta vida. Que Adore You refleja muy bien mi forma de amarte. Y que siempre estaré a un mensaje.

Tú me lo dijiste a tu manera: con tus "tqm", con tu "yo también, animal" y aquella vez que me gritaste "te amo" transmitiendo en Valorant, para que yo supiera.

Te amo por tu risa, por ser difícil, por probar mi paciencia, por tus flores, por cómo te ríes de mí y conmigo, por las noches en que se nos olvida dormir. Tú mandas en todo, bonita. Menos en esto: que te amo. Ahí mando yo.

Y sé que vas a contestar "yo sé". 💗

Feliz Navidad, la joya más hermosa de toda Nicaragua.`, imageUrl:"", audioUrl:"" }
];

