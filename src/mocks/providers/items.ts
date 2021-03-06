import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
    items: Item[] = [];

    constructor() {
        let items = [
            {
                "nombreComun": "Jaguar",
                "urlFoto": "assets/thumbnails/jaguar.png",
                "descripcion": "es el felino más grande de América y el tercero en el mundo (después del león y el tigre). El peso de un jaguar adulto va de 45 a 130 kg, la longitud desde la nariz a la punta de la cola es de 1.70 a 2.30 m. Su pelaje es color café amarillento con manchas negras de forma irregular (llamadas rosetas), pero algunos pueden ser negros con manchas del mismo color. A pesar de su apariencia pesada, el jaguar es muy ágil, corre y nada grandes distancias.",
                "nombreCientifico": "Panthera Onca",
                "habitat": "se distribuye desde las selvas tropicales del sureste de México, hasta el Río Bravo en el Golfo y en la Sierra Madre Occidental de la costa del Pacífico, hasta los límites con Belice y Guatemala",
                "longevidad": "hasta 20 años",
                "razonPeligro": "principalmente por la pérdida de su hábitat natural en favor del hombre y la cacería de los mismos.",
                "cantidadEspecies": "4000",
                "autorFoto": "Kevin Schafer"
            },
            {
                "nombreComun": "Axolote",
                "urlFoto": "assets/thumbnails/axolote.jpg",
                "descripcion": "es una salamandra que conserva rasgos como si fuera una larva incluso ya adulta. Su tamaño promedio es de 15 cm, pero puede llegar hasta los 30cm. Normalmente son negros o cafés, pero hay especies albinas. Se alimenta de larvas de insectos, molluscos y algunos peces pequeños.",
                "nombreCientifico": "Ambystoma mexicanum",
                "habitat": "los canales de Xochimilco.",
                "longevidad": "hasta 15 años",
                "razonPeligro": "contaminación, drenado del agua, comercio ilegal, venta como alimento exótico, introducción de depredadores",
                "cantidadEspecies": "100",
                "autorFoto": "National Geographic"
            },
            {
                "nombreComun": "Manatí del Caribe",
                "urlFoto": "assets/thumbnails/manati.jpg",
                "descripcion": "se le conoce como \"vaca de mar\" por ser el único mamífero marino herbívoro. Puede llegar a medir 4.5 m de largo. Nace pesando 500 kilos y su peso máximo es de 1. 5 toneladas. Es un animal tímido y pocas veces se deja ver en libertad. Posee un sistema auditivo muy desarrollado y se comunican a través de “chillidos”. Come entre 30 y 50 kilos de plantas por día.",
                "nombreCientifico": "Trichechus manatus",
                "habitat": "vive en el sureste del país. Se distribuye en ríos, sistemas lagunares y bahías desde Veracruz hasta Quintana Roo, incluidos cenotes y caletas.",
                "longevidad": "en estado salvaje hasta 25 años. En cautiverio hasta 60 años.",
                "razonPeligro": "modificación de su hábitat costero y lagunar, presencia de plaguicidas e hidrocarburos en los cuerpos de agua, depredación, redes de pesca mal colocadas, etc.",
                "cantidadEspecies": "entre 1,000 y 2,250",
                "autorFoto": "EFE"
            },
            {
                "nombreComun": "Lobo mexicano",
                "urlFoto": "assets/thumbnails/lobito.png",
                "descripcion": "posee un cuerpo relativamente esbelto, patas alargadas y acojinadas. Su pelaje es corto, más abundante en la espalda y alrededor de los hombros. Tiene un color marrón amarillento con tintes negros y grisáceos. La cola es alargada y está cubierta con pelaje denso. Los adultos pueden medir entre 1 y 1.8 metros de longitud.Puede pesar entre 20 y 40 kilos.",
                "nombreCientifico": "Canis lupus baileyi",
                "habitat": "está extinto en estado salvaje, pero habitaba bosques montañosos, de encinos y de coníferas, pastizales, e incluso desiertos. Estaba adaptado a climas templados, semiáridos y secos esteparios.",
                "longevidad": "en estado salvaje de 5 a 9 años. En cautiverio 15 años",
                "razonPeligro": "la cacería de la especie y la reducción de sus presas.",
                "cantidadEspecies": "350",
                "autorFoto": "UNAM"
            },
            {
                "nombreComun": "Oso negro",
                "urlFoto": "assets/thumbnails/osito.png",
                "descripcion": "el macho puede llegar a medir entre 1.4 y 2 m de largo y pesar hasta 400 kg, mientras que la hembra alcanza como máximo los 1.4 m de largo y 120 kg.  Principalmente solitario, excepto cuando se reúne para aparearse y cuando una hembra se desplaza con sus crías. Normalmente tiene hábitos crepusculares. En sitios con abundancia de alimento, se puede reunir en grupos numerosos que se organizan por jerarquías.Tiene una dieta principalmente omnívora.",
                "nombreCientifico": "Ursus americanus Pallas",
                "habitat": "bosques templados y de coníferas en los estados de Sonora, Chihuahua, Coahuila, Nuevo León y Durango",
                "longevidad": "20 años en estado silvestre y 30 en cautiverio",
                "razonPeligro": "cacería y destrucción de su hábitat",
                "cantidadEspecies": "desconocida",
                "autorFoto": "WWF"
            },
            {
                "nombreComun": "Vaquita marina",
                "urlFoto": "assets/thumbnails/vaquita.jpg",
                "descripcion": "mamífero marino más amenazado del mundo. Es un cetáceo que mide 150cm y pesa solamente 50 kilos. Se comunica gracias a la ecolocación (sonidos agudos); son tan tímidas que salen poco a la superficie y por lo mismo es difícil saber cuántas quedan. Normalmente son solitarias.",
                "nombreCientifico": "Phocoena sinus",
                "habitat": "Golfo de California",
                "longevidad": "hasta 20 años",
                "razonPeligro": "pesca ilegal y legal, limitada distribución geográfica y baja tasa reproductiva.",
                "cantidadEspecies": "60",
                "autorFoto": "Greenpeace"
            },
            {
                "nombreComun": "Tortuga caguama",
                "urlFoto": "assets/thumbnails/tortuga.jpg",
                "descripcion": "como no puede controlar su temperatura en invierno migra a aguas tropicales, cerca de arrecifes de coral o lagunas. En su caparazón habitan parásito y organismos como algas y percebes. Mide de 70 a 95 cm y puede pesar entre 80 y 200 kilos. Su alimentación principal son medusas, erizos de mar y camarones, pero también pued comer plantas marinas.",
                "nombreCientifico": "Caretta caretta",
                "habitat": "Océano Pacífico, Atlántico e Índico. Desde Japón migran hasta Baja California.",
                "longevidad": "Hasta 100 años",
                "razonPeligro": "captura accidental en redes, desarrollo costero, contaminación.",
                "cantidadEspecies": "50000",
                "autorFoto": "Fundación UNAM"
            },
            {
                "nombreComun": "Tapir centroamericano",
                "urlFoto": "assets/thumbnails/tapirBebe.jpg",
                "descripcion": "es el mamífero terrestre más grande del sureste de México, con distintiva nariz en forma de trompa. Tiende a ser solitario y puede tener actividad tanto diurna como nocturna. Puede alcanzar un peso de hasta 300 kilogramos. Es hervíboro, por lo que juega un papel importante en la dinámica de los bosques tropicales donde habita al ser un importante dispersor de semillas.",
                "nombreCientifico": "Tapirus bairdii",
                "habitat": "bosques tropicales húmedos y el bosque mesófilo de montaña, principalmente en los estados de Chiapas, Oaxaca, Campeche y Quintana Roo.",
                "longevidad": "25 años",
                "razonPeligro": "caza y deforestación",
                "cantidadEspecies": "desconocida",
                "autorFoto": "National Geographic"
            },
            {
                "nombreComun": "Mariposa monarca",
                "urlFoto": "assets/thumbnails/mariposa.jpg",
                "descripcion": "insecto perteneciente a la orden de los lepidepteros o alas escamosas por su traducción etimologica. Tienen una longuevidad superior a otras mariposas que ronda en un promedio de 24 días, en cambio ellas llegan a vivir 9 meses.  Son de vital importancia para el proceso de polinizacion en los bosques que habitán. Migran en invierno al sur del continente Americano a estados como California o paises como México, logrando viajar de 2 mil a 4mil kilometros solo de ida.",
                "nombreCientifico": "Danaus plexippus Linneo",
                "habitat": "región Occidental de Norteamerica en Estados Unidos, Canadá. Centro de México: estado de Michoacan y en frontera con Estado de México.",
                "longevidad": "9 meses",
                "razonPeligro": "el uso de pesticidas por la expanción residencial en la zona Norteamericana, ha reducido el crecimiento del algodoncillo, planta donde depositan sus huevecillos.",
                "cantidadEspecies": "200000",
                "autorFoto": "México Desconocido"
            },
            {
                "nombreComun": "Ocelote",
                "urlFoto": "assets/thumbnails/ocelote.jpg",
                "descripcion": "gato mediano manchado, con patas relativamente cortas y cola corta. Mide de 70-100 cm. Pesa entre 5,5 y 16 kg.  El iris es de color marrón, rojo-amarillo o dorado, las pupilas se contraen en forma de rendijas verticales.  El pelaje es corto y suave, formando dos remolinos en el hombro, la línea de pelo en el cuello se dirige hacia la corona de la cabeza.",
                "nombreCientifico": "Leopardus pardalis",
                "habitat": "áreas costeras del Pacífico y del Golfo del México, desde Tamaulipas hasta la península de Yucatán; por el occidente desde de Sonora hasta el sur del país. Vive en bosques.",
                "longevidad": "de 13 a 17 años",
                "razonPeligro": "la cacería indiscriminada y  la pérdida de su hábitat por la deforestación.",
                "cantidadEspecies": "150",
                "autorFoto": "Notimex"
            },
            {
                "nombreComun": "Guacamaya roja",
                "urlFoto": "assets/thumbnails/guacamaya.jpg",
                "descripcion": "ocupa el cuarto lugar en tamaño entre las 17 especies de guacamayas en América. Los adultos miden 85-96 cm de cabeza a cola y pesan  un poco más que 1 kg, su alas miden en promedio 41 cm, y la cola 53 cm. En lo general su plumaje es del color rojo escarlata, amarillo y azul.",
                "nombreCientifico": "Ara Macao",
                "habitat": "selvas de Chiapas frontera con Guatemala y en Oaxaca frontera con Chiapas.",
                "longevidad": "de 30 a 40 años",
                "razonPeligro": "deforestación, trafico ilegal, es una de las especies más cotizadas y el saqueo de ejemplares continúa.",
                "cantidadEspecies": "menos de 200 en vida libre en las selvas del país.",
                "autorFoto": "24Morelos"
            },
            {
                "nombreComun": "Águila real",
                "urlFoto": "assets/thumbnails/aguilaReal.jpg",
                "descripcion": "se distingue por su pico robusto y ganchudo y por tener plumas en las patas hasta la mitad del tarso. Son de color café oscuro con el vientre un poco claro en la base. Las hembras son mayores que los machos, ya que miden de 75 cm a 1 m de longitud. Sus alas pueden llegar a medir hasta 2.30 m. En México ha sido el símbolo del escudo nacional originado a partir de la fundación de Tenochtitlán.",
                "nombreCientifico": "Aquila chrysaetos",
                "habitat": "zonas áridas, semiáridas y montañosas con bosques templados, en los estados de Baja California, Sonora, Chihuahua, Coahuila, Nuevo León, Tamaulipas, Sinaloa, Durango, Jalisco, Aguascalientes, Zacatecas, San Luis Potosí, Guanajuato, Querétaro y Oaxaca.",
                "longevidad": "en cautiverio hasta 46 años y en estado silvestre hasta 32 años.",
                "razonPeligro": "cacería ilegal, incremento de actividades forestales, abandono de zonas de reproducción como resultado de perturbación humana, tráfico ilegal para su venta como mascotas o para cetrería, y envenenamiento directo o por plaguicidas.",
                "cantidadEspecies": "menos de 70 parejas",
                "autorFoto": "Guillermo Fernández"
            },
            {
                "nombreComun": "Mono araña",
                "urlFoto": "assets/thumbnails/monoArana.jpg",
                "descripcion": "es un mono ágil y de extremidades largas, de ahí el origen de su nombre. Mide de 35 a 75 cm y pesa de 5 a 9 kg. Su cola mide de 60 a 92 cm y la usa para equilibrarse al caminar. Es amigable y muy sociable: pasa gran parte del día en grupos. Emite una gran variedad de sonidos parecidos a los ladridos de perro, gritos de humano o relinchos de caballo.",
                "nombreCientifico": "Ateles geoffroyi",
                "habitat": "vive en las zonas más altas de los bosques tropicales. Se encuentra en Campeche, Chiapas, Oaxaca, Quintana Roo, Tabasco, Tamaulipas y Veracruz.",
                "longevidad": "hasta 20 años",
                "razonPeligro": "la destrucción de los bosques tropicales, los incendios forestales, la cacería ilegal para consumir su carne, y su venta como mascotas por los pobladores locales.",
                "cantidadEspecies": "no se sabe cuántos hay actualmente, pero se cree que sus poblaciones disminuyeron 50% en los últimos 45 años.",
                "autorFoto": "WWF"
            },
            {
                "nombreComun": "Perrito de la pradera",
                "urlFoto": "assets/thumbnails/perritos.jpg",
                "descripcion": "es una ardilla terrestre, conocida como perrito por sus llamados parecidos a ladridos. Su cuerpo es robusto y su cola relativamente corta y peluda. Miden de 38 a 44 cm de largo. Su peso es de aproximadamente 1 a 1.5 kg. Es social y vive en colonias organizadas en clanes o familias. Es diurno y activo desde el amanecer. No hiberna, pero si almacena grasa para el invierno. Excava complejas madrigueras que tienen túneles y cámaras conectados entre sí.",
                "nombreCientifico": "Cynomys mexicanus",
                "habitat": "climas desérticos y semidesérticos en los estados de Nuevo León, Coahuila, San Luis Potosí y Zacatecas",
                "longevidad": "7 años",
                "razonPeligro": "exterminio indiscriminado por parte de los agricultores, quienes los consideraban una plaga para los cultivos",
                "cantidadEspecies": "desconocido",
                "autorFoto": "SEMARNAT"
            },
            {
                "nombreComun": "Teporingo",
                "urlFoto": "assets/thumbnails/teporingo.jpg",
                "descripcion": "es el conejo más pequeño de México. La hembra es ligeramente más grande que el macho, de largo mide 23 a 32 cm y pesa un promedio de 476 gr. Es hervíboro, aunque puede llegar a practicar la coprofagia.",
                "nombreCientifico": "Romerolagus diazi",
                "habitat": "montañas centrales del Eje Neovolcánico Transversal: sur y oriente del Valle de México",
                "longevidad": "7-9 años",
                "razonPeligro": "expansión de las áreas urbanas y agrícolas",
                "cantidadEspecies": "6488",
                "autorFoto": "UNAM"
            }
        ];

        for (let item of items) {
            this.items.push(new Item(item));
        }
    }

    query(params?: any) {
        if (!params) {
            return this.items;
        }

        return this.items.filter((item) => {
            for (let key in params) {
                let field = item[key];
                if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                    return item;
                } else if (field == params[key]) {
                    return item;
                }
            }
            return null;
        });
    }
}