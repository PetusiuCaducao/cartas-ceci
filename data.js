// Dedicatorias para Ceci. Cada carta: id (carpeta en fotos/), nombre que se
// ve en el sobre, firma, párrafos del texto y número de fotos (fotos/<id>/01.jpg…).
// Un párrafo con "\n" dentro se pinta con saltos de línea.
window.CARTAS = [
  {
    id: "alvaro",
    nombre: "Álvaro",
    firma: "Álvaro",
    fotos: 1,
    pies: ["21 de febrero de 2026, Plaza del Castillo, Pamplona"],
    texto: [
      "Echando la vista atrás, y teniendo en cuenta lo tarde que nos conocimos en Pamplona, estoy convencido de que los dos tenemos la sensación de haber construido una amistad muy sólida. Y, sobre todo, una amistad que ha sabido mantenerse hasta hoy, a pesar de que durante el último año y medio tú te has presentado a una oposición y yo estoy en camino de presentarme a otra. Ambos sabemos lo difícil que es compaginar algo así con la vida personal de cada uno, y por eso valoro todavía más que sigamos estando igual de cerca.",
      "Gracias por ser como eres y por tantos buenos momentos. Ojalá sigamos así durante muchos años más.",
      "Feliz cumpleaños, Cecilia. Un abrazote."
    ]
  },
  {
    id: "cris",
    nombre: "Cris",
    firma: "Cris",
    fotos: 3,
    texto: [
      "Querida Ceci, quién me iba a decir que aquel día, al acercarme a preguntaros a ti y a Diana mientras veíais una clase online, iba a conocer a una de las personas más importantes que me llevaría de esta carrera. Desde entonces empezamos a hablar, a llevarnos, a quedarnos juntas… y, sin darnos cuenta, construimos una amistad que ha llegado hasta aquí.",
      "Es verdad que hubo una etapa en la que dejamos de llevarnos, pero me alegra muchísimo que la vida nos haya dado la oportunidad de retomar nuestra amistad y seguir compartiendo tantos momentos juntas.",
      "Hemos llegado hasta el final de una carrera que nos ha costado sudor, lágrimas, esfuerzo y muchísimas horas, pero también risas, momentos inolvidables y recuerdos que me voy a llevar para siempre.",
      "Y aunque ahora cada una haya tomado su camino, tú te hayas ido a otra ciudad a trabajar y yo también empiece una nueva etapa, tengo claro que la distancia no va a hacer que nos separemos. Porque después de todo lo que hemos vivido juntas, sé que vamos a seguir estando la una para la otra, aunque ya no podamos vernos cada día como antes.",
      "Gracias por haber formado parte de este camino y, sobre todo, por seguir formando parte de mi vida. Me alegro muchísimo de haberte conocido aquel día y de que, de una simple pregunta en una clase online, haya nacido una amistad tan importante para mí.",
      "Por muchos años más, muchos reencuentros y muchas historias que todavía nos quedan por vivir. Acabamos la carrera juntas y nuestra amistad siempre seguirá. ❤️",
      "Te quiero muchísimo, Ceci."
    ]
  },
  {
    id: "gadea",
    nombre: "Gadea",
    firma: "Gadea",
    fotos: 1,
    texto: ["Hola cecisexyyyy muchas felicidaaaadeeesss"]
  },
  {
    id: "isabel",
    nombre: "Isabel",
    firma: "Isabel",
    fotos: 1,
    texto: [
      "Una persona divertida, con ganas de que todos disfruten. Es admirable cómo a pesar de haber estado preparándote un examen como el EIR eres capaz de volcarte a las personas que tienes a tu alrededor. Gracias porque el año pasado, fuiste una de las personas especiales que conocí, una de las personas con la que más he podido disfrutar y desconectar.",
      "Te mereces lo mejor y como siempre das lo máximo, estoy segura de que lo vas a conseguir.",
      "¡Me quedo con ganas de que vuelvas por Pamplona!"
    ]
  },
  {
    id: "jimena",
    nombre: "Jimena",
    firma: "Te quiere, Jimena M.",
    fotos: 7,
    texto: [
      "Se dice por ahí que, cuando alguien está tan presente en tu vida, se acaba colando en historias o momentos que ni siquiera tienen que ver con ella. Siempre me ha hecho ilusión que nos acordemos de la otra hasta en los sitios más inesperados de la vida, dícese una redacción del cole, o una anécdota que cuento en un grupo de amigos, que puede que ni siquiera te conozca.",
      "Me gusta mucho rezar. Rezar por las cosas. Rezar por la gente. Por los cercanos, y por los que no lo son (aunque siempre una tira para casa…). Tú eres alegría pura. De esas personas con las que la vida parece un poco más ligera. Rezo mucho para que Dios te cuide. Cuide que seas tan risueña y tan inocente!!!!!! Rezo para que cuide ese don que tienes, precisamente de cuidar. Porque aunque no siempre tengas para ti (o no quieras tenerlo), estás pendiente de que todo a tu alrededor esté bien. Rezo porque sigas siendo capaz de ayudar y dar tanto de ti a los demás. Pero pido también para que no cargues contigo todo el peso.",
      "Quiero que sigas siendo la persona que eres, que buena falta hace gente fuerte para acompañar a quienes pasan por momentos difíciles, y sigas teniendo ese corazón tan especial que quiere dedicar su vida a ello.",
      "No tengo ninguna duda de que los niños con los que trabajarás a lo largo de tu vida (y a los que cuidarás desde casa) tendrán una suerte inmensa de encontrarte en su camino. Gracias por todos los recuerdos, por todas las anécdotas, redacciones, risas, momentos y confidencialidades; y por ser hogar incluso cuando no nos vemos ni hablamos tanto como nos gustaría.",
      "Felices 23, Ceci.\nQué suerte tengo!!!!!!"
    ]
  },
  {
    id: "marina",
    nombre: "Marina",
    firma: "Marina",
    fotos: 1,
    texto: [
      "Muchas felicidades Cecils!!!",
      "Ay qué ilusión hacer esto, voy a intentar hacerlo lo mejor posible porque este es tu love language, no el mío. Intrusismo laboral.",
      "No tenemos muchas fotos, pero esta me encanta porque la siento súper natural y me transmite cómo me lo paso contigo. El hacer planes, comer juntas en casa o en cualquier sitio, irnos de ruta al campo, ruta de pintxos o ver una peli (me encanta ver pelis contigo). Si es que cualquier cosa, qué te voy a contar. Qué suerte y qué afortunada me siento de haber coincidido contigo. Eres tan guay, hasta con tus mental breakdowns. La mejor.",
      "Oye esto es como que muy difícil, ¿no? No sé cómo lo haces, Dios es que lo tuyo es un don, yo soy más de darte abrazos y regalarte cosas, pero no se me da muy allá el expresar lo TANTÍSIMO que te quiero. Por no decir todas las cosas que te agradezco y las que me has enseñado. No eres consciente. No sabía que me gustaba que me regalaran flores hasta que me regalaste tú, lo cual es loco, porque realmente no entendía cómo a la gente le hacía ilusión o le gustaba.",
      "Pero bueno, espero que me sigas enseñando tantas cosas, sigamos viviendo mucho juntas, y nos sigamos queriendo tanto como nos queremos (y que te lo pases súper guay en tu cumple).",
      "TE AMO"
    ]
  },
  {
    id: "martita",
    nombre: "Martita",
    firma: "Martita",
    fotos: 10,
    texto: [
      "Por ser la persona que siempre ha estado y que siempre estará.\nPor toda una vida de recuerdos a tu lado.\nPorque me siento demasiado afortunada por tenerte en mi vida.",
      "Millones de felicidades Ceci, sigue evolucionando hacia la preciosa mujer en la que te estás convirtiendo —y que ya eres— conmigo a tu lado :)",
      "¡¡¡¡Te quiero muchísimo!!!!"
    ]
  },
  {
    id: "mer",
    nombre: "Mer",
    firma: "Mer",
    fotos: 1,
    texto: [
      "Cecilia!!!! Muchísimas felicidades!!! Hoy es un día de mucha alegría!!!! Qué bien que nacieras y gracias por ser la buena amiga que eres!!",
      "Agradecerte cada rato que hemos pasado juntas, cada llamada, un pequeño café, la cena de pizzas en el piso, cuando quedamos con Pedro y le conocimos!! También gracias por mantener siempre ese humor que hace que el ambiente esté siempre animado, y por cuidar tan bien a las personas como haces!!! Desde luego que eres irremplazable!!",
      "Muchas gracias Ceci!!! Espero que disfrutes del día de tu cumpleaños como mereces con los que te quieren!! Y gracias por este año!!!",
      "Un abrazo,"
    ]
  },
  {
    id: "orre",
    nombre: "Orre",
    firma: "Orre",
    fotos: 1,
    texto: [
      "Muchísimas felicidades Cecilia!!!!!",
      "No sé cómo empezar este texto, no sé qué decirte que tú no sepas ya. Cecilia eres un solecito, una persona que brilla con luz propia. Eres preciosa (por dentro y por fuera), siempre estás llena de energía y contagias tus ganas de vivir.",
      "Has sido una sorpresa en mi vida, pero déjame decirte que una sorpresa maravillosa. Tienes un corazón enorme, y haces muy feliz a mucha gente, no sabes la ilusión que me hizo cuando me llamaste por mi cumpleaños, sé que es una tontería, pero es muy importante para mí, haces sentir muy querida a la gente. Ojalá volvamos a hacer algún viaje juntas, como el de Grecia (siendo compis de cuarto, aunque mejor sin armarios atascados que amenacen con dejarte sin ropa). Ojalá poder verte más y hacer más cosas (aunque estés en Asturias).",
      "Tienes que avisarme cuando vengas por Pamplona :), y tenemos que hablar más por mensaje, aunque sea. No sabes todas las veces que he pensado qué estarías haciendo y por a o por b no me ha dado la vida para escribirte.",
      "Por cerrar un poco esto (que no sé cuánto puedo extenderme), repetirte que muchísimas felicidades. Gracias por formar parte de mi vida, gracias por traer tanto cariño y ser una fuerza tan arrolladora. Eres fantástica, ojalá nunca cambies y nunca me faltes. Se te quiere muchísimo, YO te quiero muchísimo. Un beso guapísima, a ver si celebramos pronto tu cumple, a ver si vienes a Pamplona para ello <3"
    ]
  },
  {
    id: "patri",
    nombre: "Patri",
    firma: "Con amor, Patricia",
    posdata: "Eres mi persona, no hace falta decir más.",
    fotos: 2,
    texto: [
      "Dicen que las ciudades se miden en kilómetros, pero la distancia pierde todo su sentido cuando te das cuenta de que hay personas que se han mudado a vivir para siempre en tu interior. Han pasado seis años desde aquel primer día de carrera y, aunque los mapas nos hayan puesto en esquinas distintas del tablero, seguimos siendo exactamente las mismas: dos amigas compartiendo risas, secretos y momentos de vida.",
      "Me emociona verte sonreír, verte plena y notar cómo la vida te abraza fuerte con ese amor tan bonito que has encontrado, porque tu felicidad es, sin duda, la mía. Qué afortunada soy de tener a mi mayor confidente, a mi consejera de cabecera y a la hermana que la vida eligió regalarme por el camino. No sé qué haría sin ti.",
      "Aunque a veces el mundo corra demasiado y pasen los días sin darnos cuenta, sé que nuestro hilo invisible no se rompe nunca. Me enorgullece decir que tus hijos aquí tendrán a alguien que los querrá con locura, como si fueran de mi propia sangre, porque para mí, eres familia.",
      "Gracias por ser mi roca, por estar siempre y por enseñarme que hay personas que se quedan a vivir en el alma. ¡Feliz cumpleaños, amiga! Brindo por ti hoy y siempre. Por muchos años más celebrando a tu lado."
    ]
  },
  {
    id: "primaisabel",
    nombre: "Prima Isabel",
    firma: "Te adora, Isabel",
    fotos: 1,
    texto: [
      "Mi Ceci ❤️",
      "Hoy es un día muy muy especial, y no sabes lo feliz que me hace poder verte crecer y formar parte de ella. Parece mentira lo rápido que pasa el tiempo, porque para mí siempre vas a tener un poquito de esa niña pequeña a la que me dan ganas de cuidar, abrazar y proteger de todo lo malo que pueda pasarle.",
      "Quiero que sepas que, aunque pasen los años, cambies, crezcas (aunque mantengas pelazo, perra) y la vida nos lleve por caminos diferentes, siempre voy a estar aquí para ti. Para escucharte cuando necesites desahogarte, para celebrar tus alegrías como si fueran mías, para secarte las lágrimas cuando algo te duela y para recordarte lo increíble que eres cuando tú misma te olvides de ello.",
      "Ojalá nunca pierdas esa esencia tan tuya que te hace especial, porque el mundo necesita personas como tú.",
      "Si hay algo que quiero que tengas siempre presente es que no importa la edad que cumplas ni lo mayor que te hagas, para mí siempre vas a ser mi pequeña, y siempre voy a sentir ese amor tan especial que se tiene por alguien de la familia, pero que va mucho más allá de compartir sangre. Porque eres mi prima, sí, pero también eres una personita a la que quiero ver feliz, cumplir sus sueños y comerse el mundo entero.",
      "No sé si algún día serás consciente de lo mucho que te quiero, pero espero que la vida me dé muchísimos años para demostrártelo.",
      "Feliz cumpleaños, mi niña bonita. 🤍 Nunca olvides lo especial que eres, lo muchísimo que vales y lo afortunada que me siento de tenerte en mi vida.",
      "Siempre voy a estar para ti, en cada etapa, en cada cambio y en cada nuevo capítulo de tu vida."
    ]
  },
  {
    id: "segoviaali",
    nombre: "Segovia y Ali",
    // La despedida ya dice de quién es, así que no lleva firma aparte.
    firma: "",
    fotos: 4,
    texto: [
      "Hola Ceciiii. Muchas gracias por estar siempre presente. Ya es coincidencia eh! Primero A Coruña, luego Zamora, luego Pamplona y ahora Asturias !!! ¿Qué será lo siguiente?",
      "Un muy fuerte abrazo de parte de Javier y Alicia !!!"
    ]
  },
  {
    id: "victoria",
    nombre: "Victoria",
    firma: "Victoria",
    fotos: 9,
    texto: [
      "Qué buena suerte el día que te fuiste a vivir con Patri cuando comenzamos nuestra época universitaria. Con lo distintas que somos en muchas cosas, da gusto lo bien que conectamos siempre, ya sea para marcarnos una excursión por Navarra o un viaje a Grecia. Da gusto coincidir con gente como tú: alegre, graciosa, trabajadora y siempre dispuesta a echar un cable a quien lo necesite.",
      "Me alegro un montón de haberte conocido y de seguir compartiendo esta amistad a pesar de la distancia. ¡Feliz cumpleaños Cecilia! Y que toda esa buena energía que proyectas te vuelva como te mereces."
    ]
  },
  {
    // Siempre la última carta, fuera del orden alfabético.
    id: "pedro",
    nombre: "Pedro",
    firma: "Pedro",
    fotos: 11,
    texto: [
      "Hola mi amor,",
      "Quién me iba a decir que el chico que fue a tu cumple como el \"amigo gay\" 365 días más tarde sería tu novio. Pues que sepas que aunque sea tu cumple, y se suponga que la que tienes que recibir regalos eres tú, el mejor regalo de todo el mundo lo tengo yo.",
      "Siempre digo que este va a ser mi año, llevaré como 10 diciéndolo, y siempre fijándome en las cosas banales, ponerme fuerte, ser más guapete, sacar mejores notas... pero tú me has enseñado que este sí que es mi año, porque aunque me esté poniendo fuertote, más guapete, y más \"listillo\" eso no es nada comparado con haber encontrado a mi otra mitad.",
      "Me haces mejor persona, contigo me puedo sentir vulnerable, haces que mi corazón viva abierto, y eso me permite disfrutar las pequeñas cosas y observar los pequeños detalles. Voy por la calle y cuando pienso en ti se me iluminan los ojos. Aún me acuerdo de cuando te compré un ramo de flores y te lo llevé al hospi, una señora se puso a hablar conmigo diciéndome que tenía un ramo súper bonito, y no me pudo hacer más ilusión decir que era para mi novia.",
      "Eres sin duda la mejor persona que he conocido, amable, detallista, entregada. Se dice que una pareja o te suma o te resta, y tú es que no puedes sumar más. Aunque sea a veces un poco cabezoncillo, me encanta que me empujes a ser mejor. Porque tú eres la mejor, que no se te olvide. Y no lo digo yo, lo dice la gente que te rodea, tu familia, tus amigos, incluso tus compis de trabajo dicen lo buenísima enfermera que eres, y eso se traslada a la vida cotidiana.",
      "Tengo muchísimas ganas de vivir mi vida junto a ti, de formar una familia y de crecer juntos. Pero también me muero de ganas de vivir el presente, ya que aunque estemos \"a distancia\", eso me hace quererte más.",
      "Gracias por ser mi compañera, mi amor, mi apoyo y mi todo. No hay texto alguno que explique lo mucho que te amo y lo importante que eres para mí. Por favor no dejes nunca de ser como eres, que eres perfecta.",
      "Te quiero ahora y siempre,"
    ]
  }
];
