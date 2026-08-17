export const urlUbicacion =
	'https://www.google.com/maps/search/?api=1&query=Templo%20de%20Nuestra%20Se%C3%B1ora%20de%20las%20Mercedes%2C%2011%20avenida%20y%205a%20calle%2C%20zona%201%2C%20Ciudad%20de%20Guatemala';

export const enlacesNav = [
	{ texto: 'Inicio', destino: '#inicio' },
	{ texto: 'Historia', destino: '#historia' },
	{ texto: 'La imagen', destino: '#imagen' },
	{ texto: 'Ficha técnica', destino: '#ficha' },
	{ texto: 'Tradición', destino: '#tradicion' },
	{ texto: 'Procesión', destino: '#procesion' },
	{ texto: 'Visítanos', destino: '#visitanos' },
];

export const etiquetasHero = ['Viernes Santo', 'Consagrada en 1717', 'Devoción desde 1654'];

export const hitosHistoria = [
	{
		fecha: '1654',
		titulo: 'El encargo de la talla',
		descripcion:
			'Los cofrades de la Merced encomiendan la imagen «en blanco» al maestro escultor Mateo de Zúñiga, por un costo de 65 pesos.',
	},
	{
		fecha: '1655',
		titulo: '27 de marzo — encarnación',
		descripcion:
			'Joseph de la Serda concluye la encarnación y el colorido de la imagen, que es colocada solemnemente en su capilla.',
	},
	{
		fecha: '1717',
		titulo: '5 de agosto — consagración',
		descripcion:
			'El obispo Juan Bautista Álvarez y Toledo consagra la imagen: la primera consagración de una escultura sagrada en todo el continente americano.',
	},
	{
		fecha: '1721',
		titulo: 'Patrón Jurado de la Ciudad',
		descripcion:
			'El Ayuntamiento la declara oficialmente Patrón Jurado, un título que conserva hasta hoy.',
	},
	{
		fecha: '1773–76',
		titulo: 'Los terremotos de Santa Marta',
		descripcion:
			'Las procesiones se suspenden tras el desastre; la imagen no vuelve a salir a las calles sino hasta 1776.',
	},
	{
		fecha: '1778',
		titulo: 'Traslado a la Nueva Guatemala',
		descripcion:
			'Con el traslado de la capital, la devoción se establece en la Nueva Guatemala de la Asunción, donde permanece hoy.',
	},
	{
		fecha: 'Hoy',
		titulo: 'Culto ininterrumpido',
		descripcion:
			'La Asociación de Devotos de Jesús Nazareno de la Merced (JDLM) da continuidad a más de tres siglos de tradición y organiza la Cuaresma y Semana Santa capitalinas.',
	},
];

export const filasFichaTecnica = [
	{ termino: 'Advocación', valor: 'Jesús Nazareno de la Merced' },
	{ termino: 'Templo', valor: 'Nuestra Señora de las Mercedes' },
	{ termino: 'Dirección', valor: '5.ª calle 11-73, zona 1, Ciudad de Guatemala' },
	{ termino: 'Escultor', valor: 'Mateo de Zúñiga (talla encargada en 1654)' },
	{ termino: 'Encarnador', valor: 'Joseph de la Serda (27 de marzo de 1655)' },
	{
		termino: 'Consagración',
		valor: '5 de agosto de 1717 — primera imagen consagrada en América',
	},
	{
		termino: 'Título',
		valor: 'Patrón Jurado y protector de la ciudad (18 de febrero de 1721)',
	},
	{ termino: 'Día procesional', valor: 'Viernes Santo' },
	{ termino: 'Hora de salida', valor: '2:00 a. m.' },
	{ termino: 'Hora de entrada', valor: '2:30 p. m. (14:30 h)' },
	{
		termino: 'Marcha oficial — Viernes Santo',
		valor: '«Señor Pequé», de Joaquín Santa María y Vigil (1927)',
	},
	{ termino: 'Marcha oficial — La Reseña', valor: '«La Reseña», de Mónico de León' },
	{ termino: 'Anda procesional', valor: '86 brazos, madera de caoba (desde 2013)' },
	{
		termino: 'Asociación',
		valor: 'Asociación de Devotos de Jesús Nazareno de la Merced (JDLM)',
	},
];

export const leyendas = [
	{
		titulo: 'El sudor del Nazareno',
		descripcion:
			'Una antigua tradición oral asegura que la imagen suda durante su largo recorrido de Viernes Santo, un gesto que los devotos leen como señal de su presencia viva entre la multitud.',
	},
	{
		titulo: 'La mano anónima',
		descripcion:
			'La memoria popular cuenta que fue un ayudante sordomudo de Mateo de Zúñiga quien talló el rostro de la imagen, un relato que envuelve de misterio la autoría de esta obra colonial.',
	},
	{
		titulo: 'El coronel de la Merced',
		descripcion:
			'El expresidente Rafael Carrera confirió a la imagen el grado militar honorario de coronel, gesto que refleja el peso simbólico que ha tenido en la vida cívica de la ciudad.',
	},
];

export const recorridoProcesion = [
	{
		fecha: '2:00',
		titulo: 'Salida del templo',
		descripcion: 'Templo de Nuestra Señora de las Mercedes',
	},
	{ fecha: '3:20', titulo: 'Parque Colón' },
	{ fecha: '5:40', titulo: 'Parque Jocotenango' },
	{ fecha: '7:35', titulo: 'Parque El Sauce' },
	{ fecha: '9:30', titulo: 'Templo Santa Catalina' },
	{ fecha: '10:25', titulo: 'Templo Santa Teresa' },
	{ fecha: '12:00', titulo: 'Catedral Metropolitana' },
	{ fecha: '14:30', titulo: 'Entrada al templo' },
];

export const seccionesFooter = [
	{
		titulo: 'La imagen',
		enlaces: [
			{ texto: 'La imagen', destino: '#imagen' },
			{ texto: 'Ficha técnica', destino: '#ficha' },
			{ texto: 'Historia', destino: '#historia' },
		],
	},
	{
		titulo: 'Tradición',
		enlaces: [
			{ texto: 'Tradición y leyenda', destino: '#tradicion' },
			{ texto: 'Procesión', destino: '#procesion' },
			{ texto: 'Visítanos', destino: '#visitanos' },
		],
	},
	{
		titulo: 'Asociación',
		enlaces: [
			{ texto: 'Asociación de Devotos (JDLM)', destino: '#visitanos' },
			{ texto: 'Ver ubicación del templo', destino: urlUbicacion },
			{ texto: 'Cuaresma y Semana Santa', destino: '#procesion' },
		],
	},
];