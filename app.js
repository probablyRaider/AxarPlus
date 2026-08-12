const scheduleData = [
  {
    direction: "IDA",
    stops: [
      "Estación Bus Málaga",
      "La Redonda",
      "Casabermeja (rotonda)",
      "Urb. Alcaide",
      "Cementerio Judío",
      "P.I. Virgen de la Candelaria",
      "Colmenar",
      "Riogordo",
      "Rotonda Polígono el Campillo"
    ],
    journeys: [
      {
        stops: {
          "Estación Bus Málaga": "08:10",
          "La Redonda": "08:30",
          "Casabermeja (rotonda)": "08:40",
          "Urb. Alcaide": "08:45",
          "Cementerio Judío": "08:50",
          "P.I. Virgen de la Candelaria": "08:55",
          "Colmenar": "09:05",
          "Riogordo": "09:14",
          "Rotonda Polígono el Campillo": "09:22"
        },
        frequency: "L-V",
        note: "No se permite el viaje entre Málaga y Casabermeja"
      },
      {
        stops: {
          "Estación Bus Málaga": "09:00",
          "La Redonda": "09:20",
          "Casabermeja (rotonda)": "09:30",
          "Urb. Alcaide": "09:34",
          "Cementerio Judío": "09:38",
          "P.I. Virgen de la Candelaria": "09:42",
          "Colmenar": "09:50",
          "Riogordo": "09:59",
          "Rotonda Polígono el Campillo": "10:04"
        },
        frequency: "L-V",
        note: ""
      },
      {
        stops: {
          "Estación Bus Málaga": "11:00",
          "La Redonda": "11:20",
          "Casabermeja (rotonda)": "11:30",
          "Urb. Alcaide": "11:33",
          "Cementerio Judío": "11:36",
          "P.I. Virgen de la Candelaria": "11:39",
          "Colmenar": "11:45",
          "Riogordo": "11:54",
          "Rotonda Polígono el Campillo": "11:59"
        },
        frequency: "sdf",
        note: ""
      },
      {
        stops: {
          "Estación Bus Málaga": "12:00",
          "La Redonda": "12:20",
          "Casabermeja (rotonda)": "12:30",
          "Urb. Alcaide": "12:34",
          "Cementerio Judío": "12:38",
          "P.I. Virgen de la Candelaria": "12:42",
          "Colmenar": "12:50",
          "Riogordo": "12:59",
          "Rotonda Polígono el Campillo": "13:04"
        },
        frequency: "L-V",
        note: ""
      },
      {
        stops: {
          "Estación Bus Málaga": "13:00",
          "La Redonda": "13:20",
          "Casabermeja (rotonda)": "13:30",
          "Urb. Alcaide": "13:34",
          "Cementerio Judío": "13:38",
          "P.I. Virgen de la Candelaria": "13:42",
          "Colmenar": "13:50",
          "Riogordo": "13:59",
          "Rotonda Polígono el Campillo": "14:04"
        },
        frequency: "L-V",
        note: "No se permite el viaje entre Málaga y Casabermeja"
      },
      {
        stops: {
          "Estación Bus Málaga": "13:10",
          "La Redonda": "13:30",
          "Casabermeja (rotonda)": "13:40",
          "Urb. Alcaide": "13:43",
          "Cementerio Judío": "13:46",
          "P.I. Virgen de la Candelaria": "13:49",
          "Colmenar": "13:55",
          "Riogordo": "14:04",
          "Rotonda Polígono el Campillo": "14:09"
        },
        frequency: "sdf",
        note: ""
      },
      {
        stops: {
          "Estación Bus Málaga": "15:00",
          "La Redonda": "15:20",
          "Casabermeja (rotonda)": "15:30",
          "Urb. Alcaide": "15:35",
          "Cementerio Judío": "15:40",
          "P.I. Virgen de la Candelaria": "15:45",
          "Colmenar": "15:55",
          "Riogordo": "16:04",
          "Rotonda Polígono el Campillo": "16:12"
        },
        frequency: "L-V",
        note: "No se permite el viaje entre Málaga y Casabermeja"
      },
      {
        stops: {
          "Estación Bus Málaga": "15:15",
          "La Redonda": "15:28",
          "Casabermeja (rotonda)": "15:50",
          "Urb. Alcaide": "15:53",
          "Cementerio Judío": "15:54",
          "P.I. Virgen de la Candelaria": "15:57",
          "Colmenar": "16:02",
          "Riogordo": "16:16",
          "Rotonda Polígono el Campillo": "16:19"
        },
        frequency: "L-V",
        note: ""
      },
      {
        stops: {
          "Estación Bus Málaga": "17:45",
          "La Redonda": "18:05",
          "Casabermeja (rotonda)": "18:15",
          "Urb. Alcaide": "18:18",
          "Cementerio Judío": "18:21",
          "P.I. Virgen de la Candelaria": "18:24",
          "Colmenar": "18:30",
          "Riogordo": "18:39",
          "Rotonda Polígono el Campillo": "18:44"
        },
        frequency: "L-V",
        note: ""
      },
      {
        stops: {
          "Estación Bus Málaga": "19:00",
          "La Redonda": "19:20",
          "Casabermeja (rotonda)": "19:30",
          "Urb. Alcaide": "19:33",
          "Cementerio Judío": "19:36",
          "P.I. Virgen de la Candelaria": "19:39",
          "Colmenar": "19:45",
          "Riogordo": "19:54",
          "Rotonda Polígono el Campillo": "19:59"
        },
        frequency: "sdf",
        note: ""
      },
      {
        stops: {
          "Estación Bus Málaga": "20:20",
          "La Redonda": "20:40",
          "Casabermeja (rotonda)": "20:50",
          "Urb. Alcaide": "20:53",
          "Cementerio Judío": "20:56",
          "P.I. Virgen de la Candelaria": "20:59",
          "Colmenar": "21:05",
          "Riogordo": "21:14",
          "Rotonda Polígono el Campillo": "21:19"
        },
        frequency: "L-V",
        note: "No se permite el viaje entre Málaga y Casabermeja"
      }
    ]
  },
  {
    direction: "VUELTA",
    stops: [
      "Rotonda Polígono el Campillo",
      "Riogordo",
      "Colmenar",
      "P.I. Virgen de la Candelaria",
      "Cementerio Judío",
      "Urb. Alcaide",
      "Casabermeja (rotonda)",
      "La Redonda",
      "Estación Bus Málaga"
    ],
    journeys: [
      {
        stops: {
          "Rotonda Polígono el Campillo": "06:54",
          "Riogordo": "06:59",
          "Colmenar": "07:08",
          "P.I. Virgen de la Candelaria": "07:18",
          "Cementerio Judío": "07:23",
          "Urb. Alcaide": "07:28",
          "Casabermeja (rotonda)": "07:33",
          "La Redonda": "07:43",
          "Estación Bus Málaga": "08:03"
        },
        frequency: "L-V",
        note: "Parada Urb. Alcaide a la demanda, reservas 951920267, www.ctmam.es hasta las 18:00 del día anterior"
      },
      {
        stops: {
          "Rotonda Polígono el Campillo": "07:39",
          "Riogordo": "07:44",
          "Colmenar": "07:53",
          "P.I. Virgen de la Candelaria": "08:03",
          "Cementerio Judío": "08:08",
          "Urb. Alcaide": "08:13",
          "Casabermeja (rotonda)": "08:18",
          "La Redonda": "08:28",
          "Estación Bus Málaga": "08:48"
        },
        frequency: "L-V",
        note: "Parada Urb. Alcaide a la demanda, reservas 951920267, www.ctmam.es hasta las 18:00 del día anterior"
      },
      {
        stops: {
          "Rotonda Polígono el Campillo": "08:39",
          "Riogordo": "08:44",
          "Colmenar": "08:53",
          "P.I. Virgen de la Candelaria": "09:03",
          "Cementerio Judío": "09:08",
          "Urb. Alcaide": "09:13",
          "Casabermeja (rotonda)": "09:18",
          "La Redonda": "09:28",
          "Estación Bus Málaga": "09:48"
        },
        frequency: "sdf",
        note: "Parada Urb. Alcaide a la demanda, reservas 951920267, www.ctmam.es hasta las 18:00 del día anterior"
      },
      {
        stops: {
          "Rotonda Polígono el Campillo": "09:14",
          "Riogordo": "09:19",
          "Colmenar": "09:28",
          "P.I. Virgen de la Candelaria": "09:38",
          "Cementerio Judío": "09:43",
          "Urb. Alcaide": "09:48",
          "Casabermeja (rotonda)": "09:53",
          "La Redonda": "10:03",
          "Estación Bus Málaga": "10:23"
        },
        frequency: "L-V",
        note: "Parada Urb. Alcaide a la demanda, reservas 951920267, www.ctmam.es hasta las 18:00 del día anterior"
      },
      {
        stops: {
          "Rotonda Polígono el Campillo": "09:59",
          "Riogordo": "10:04",
          "Colmenar": "10:13",
          "P.I. Virgen de la Candelaria": "10:23",
          "Cementerio Judío": "10:28",
          "Urb. Alcaide": "10:33",
          "Casabermeja (rotonda)": "10:38",
          "La Redonda": "10:48",
          "Estación Bus Málaga": "11:08"
        },
        frequency: "L-V",
        note: "Parada Urb. Alcaide a la demanda, reservas 951920267, www.ctmam.es hasta las 18:00 del día anterior"
      },
      {
        stops: {
          "Rotonda Polígono el Campillo": "11:59",
          "Riogordo": "12:07",
          "Colmenar": "12:16",
          "P.I. Virgen de la Candelaria": "12:26",
          "Cementerio Judío": "12:31",
          "Urb. Alcaide": "12:36",
          "Casabermeja (rotonda)": "12:41",
          "La Redonda": "12:51",
          "Estación Bus Málaga": "13:11"
        },
        frequency: "sdf",
        note: "Parada Urb. Alcaide a la demanda, reservas 951920267, www.ctmam.es hasta las 18:00 del día anterior"
      },
      {
        stops: {
          "Rotonda Polígono el Campillo": "12:59",
          "Riogordo": "13:04",
          "Colmenar": "13:13",
          "P.I. Virgen de la Candelaria": "13:23",
          "Cementerio Judío": "13:28",
          "Urb. Alcaide": "13:33",
          "Casabermeja (rotonda)": "13:38",
          "La Redonda": "13:48",
          "Estación Bus Málaga": "14:08"
        },
        frequency: "L-V",
        note: "Parada Urb. Alcaide a la demanda, reservas 951920267, www.ctmam.es hasta las 18:00 del día anterior"
      },
      {
        stops: {
          "Rotonda Polígono el Campillo": "15:39",
          "Riogordo": "15:44",
          "Colmenar": "15:53",
          "P.I. Virgen de la Candelaria": "16:03",
          "Cementerio Judío": "16:08",
          "Urb. Alcaide": "16:13",
          "Casabermeja (rotonda)": "16:18",
          "La Redonda": "16:28",
          "Estación Bus Málaga": "16:48"
        },
        frequency: "L-V",
        note: "Parada Urb. Alcaide a la demanda, reservas 951920267, www.ctmam.es hasta las 18:00 del día anterior"
      },
      {
        stops: {
          "Rotonda Polígono el Campillo": "16:54",
          "Riogordo": "16:59",
          "Colmenar": "17:08",
          "P.I. Virgen de la Candelaria": "17:18",
          "Cementerio Judío": "17:23",
          "Urb. Alcaide": "17:28",
          "Casabermeja (rotonda)": "17:33",
          "La Redonda": "17:43",
          "Estación Bus Málaga": "18:03"
        },
        frequency: "sdf",
        note: "Parada Urb. Alcaide a la demanda, reservas 951920267, www.ctmam.es hasta las 18:00 del día anterior"
      },
      {
        stops: {
          "Rotonda Polígono el Campillo": "19:09",
          "Riogordo": "19:14",
          "Colmenar": "19:23",
          "P.I. Virgen de la Candelaria": "19:33",
          "Cementerio Judío": "19:38",
          "Urb. Alcaide": "19:43",
          "Casabermeja (rotonda)": "19:48",
          "La Redonda": "19:58",
          "Estación Bus Málaga": "20:18"
        },
        frequency: "L-V",
        note: "Parada Urb. Alcaide a la demanda, reservas 951920267, www.ctmam.es hasta las 18:00 del día anterior"
      }
    ]
  }
];
const aliasStopNames = {
  "Málaga": "Estación Bus Málaga",
  "Casabermeja": "Casabermeja (rotonda)",
  "P.I. Virgen Candelaria": "P.I. Virgen de la Candelaria",
  "P.I. Virgen de la Candelaria": "P.I. Virgen de la Candelaria",
  "Estación Bus Málaga": "Estación Bus Málaga"
};

const frequencyLabels = {
  es: {
    "L-V": "Lunes ➜ Viernes",
    SDF: "Sábados, domingos y festivos"
  },
  en: {
    "L-V": "Mon # ➜ Fri",
    SDF: "Saturday, Sunday & holidays"
  },
  pt: {
    "L-V": "Seg # ➜ Sex",
    SDF: "Sábado, domingo e feriados"
  },
  ca: {
    "L-V": "Dll ➜ Dv",
    SDF: "Dissabte, diumenge i festius"
  },
  fr: {
    "L-V": "Lun # ➜ Ven",
    SDF: "Samedi, dimanche et fêtes"
  }
};

// Localized placeholder labels for the origin/destination selects
const selectPlaceholderLabels = {
  es: 'Selecciona...',
  en: 'Select...',
  pt: 'Seleciona...',
  ca: 'Selecciona...',
  fr: 'Sélectionner...'
};

const noteTranslations = {
  es: {
    "No se permite el viaje entre Málaga y Casabermeja": "No se permite el viaje entre Málaga y Casabermeja",
    "Parada Urb. Alcaide a la demanda, reservas 951920267, www.ctmam.es hasta las 18:00 del día anterior": "Parada Urb. Alcaide a la demanda, reservas 951920267, www.ctmam.es hasta las 18:00 del día anterior"
  },
  en: {
    "No se permite el viaje entre Málaga y Casabermeja": "Travel between Málaga and Casabermeja is not allowed",
    "Parada Urb. Alcaide a la demanda, reservas 951920267, www.ctmam.es hasta las 18:00 del día anterior": "Urb. Alcaide stop on request, reservations 951920267, www.ctmam.es until 18:00 the day before"
  },
  pt: {
    "No se permite el viaje entre Málaga y Casabermeja": "Não é permitido viajar entre Málaga e Casabermeja",
    "Parada Urb. Alcaide a la demanda, reservas 951920267, www.ctmam.es hasta las 18:00 del día anterior": "Paragem Urb. Alcaide a pedido, reservas 951920267, www.ctmam.es até às 18:00 do dia anterior"
  },
  ca: {
    "No se permite el viaje entre Málaga y Casabermeja": "No es permet viatjar entre Málaga i Casabermeja",
    "Parada Urb. Alcaide a la demanda, reservas 951920267, www.ctmam.es hasta las 18:00 del día anterior": "Parada Urb. Alcaide a la demanda, reserves 951920267, www.ctmam.es fins a les 18:00 del dia anterior"
  },
  fr: {
    "No se permite el viaje entre Málaga y Casabermeja": "Le trajet entre Málaga et Casabermeja n'est pas autorisé",
    "Parada Urb. Alcaide a la demanda, reservas 951920267, www.ctmam.es hasta las 18:00 del día anterior": "Arrêt Urb. Alcaide sur demande, réservations 951920267, www.ctmam.es jusqu'à 18h00 la veille"
  }
};

function translateNoteText(note) {
  if (currentLanguage === 'es') {
    return note.replace('Urb. Alcaide', 'Urb. Alcalde');
  }
  return (noteTranslations[currentLanguage] && noteTranslations[currentLanguage][note]) || note;
}

const displayLabels = {
  "Estación Bus Málaga": "Málaga (Estación Bus Málaga)",
  "Casabermeja (rotonda)": "Casabermeja",
  "Urb. Alcaide": "Urb. Alcalde",
  "P.I. Virgen de la Candelaria": "P.I. Virgen de la Candelaria",
  "Rotonda Polígono el Campillo": "Rotonda Polígono El Campillo"
};

const informationTranslations = {
  es: {
    independenceTitle: "Proyecto independiente y no oficial",
    independenceLead: "Axar+ es un proyecto personal, independiente y sin ánimo de lucro, realizado “por amor al arte” para facilitar la consulta de horarios y la planificación de viajes.",
    independenceDetails: "Esta página no es una web oficial del Consorcio de Transporte Metropolitano del Área de Málaga. No está afiliada, asociada, patrocinada, gestionada, respaldada ni representa al Consorcio, a la Junta de Andalucía, a otra institución pública ni a ninguna empresa o entidad privada relacionada con el transporte.",
    openSourceTitle: "Código abierto y autoría",
    openSourceDescription: "Este proyecto se desarrolla como software de código abierto. Su código fuente puede consultarse y estudiarse públicamente; cualquier reutilización debe respetar la licencia aplicable y reconocer siempre la autoría original.",
    authorLabel: "Autor:", repositoryLabel: "Repositorio:",
    travelTitle: "¿Con qué puedo viajar?",
    travelDescription: "Los horarios mostrados corresponden a los servicios indicados, pero los medios de pago y títulos aceptados dependen de las condiciones oficiales de cada servicio. Antes de viajar, consulta siempre la información vigente del operador y del Consorcio.",
    transportCardTitle: "Tarjeta de Transporte Metropolitano de Andalucía",
    transportCardDescription: "Es una tarjeta monedero sin contacto utilizada en los transportes públicos integrados en los Consorcios de Transporte Metropolitano de Andalucía, cuando el servicio correspondiente la admita.",
    transportCardLink: "Información oficial de la Tarjeta de Transporte Metropolitano de Andalucía",
    consortiumLink: "Consorcio de Transporte Metropolitano del Área de Málaga",
    faresLink: "Tarifas y títulos vigentes del Consorcio de Málaga",
    youngTitle: "Tarjeta Joven de Transporte",
    youngDescription: "Existe una Tarjeta Joven de Transporte de Andalucía que puede ofrecer condiciones o bonificaciones específicas a las personas jóvenes que cumplan los requisitos oficiales. No todas las personas pueden utilizarla ni todos los servicios aplican necesariamente las mismas condiciones.",
    youngConditions: "Los requisitos, la validez, las bonificaciones y los servicios incluidos pueden cambiar. Consulta siempre las páginas oficiales antes de solicitarla o utilizarla.",
    youngAndalusiaLink: "Información oficial de la Tarjeta Joven de Transporte de Andalucía",
    youngMalagaLink: "Tarjeta Joven del Consorcio de Transporte Metropolitano del Área de Málaga",
    otherMethodsTitle: "Otros métodos de viaje",
    otherMethodsDescription: "Según el servicio concreto, pueden existir otras modalidades vigentes, como el billete sencillo, tarjetas o títulos del Consorcio, la Tarjeta Joven de Transporte u otros títulos. Su disponibilidad, aceptación y condiciones no son iguales en todos los servicios; verifica siempre las condiciones oficiales antes de viajar.",
    scheduleNoticeTitle: "Aviso sobre los horarios",
    scheduleNoticeDescription: "Los horarios de Axar+ tienen finalidad exclusivamente informativa y esta página no es una fuente oficial de horarios. Comprueba la información oficial antes de realizar el viaje, especialmente ante cambios de horario, festivos, incidencias, modificaciones temporales o cambios en tarifas y títulos de transporte."
  },
  en: {
    independenceTitle: "Independent, unofficial project",
    independenceLead: "Axar+ is an independent, non-profit personal project created “for the love of it” to make timetable consultation and trip planning easier.",
    independenceDetails: "This is not an official website of the Metropolitan Transport Consortium of the Málaga Area. It is not affiliated with, associated with, sponsored, managed, endorsed by or representative of the Consortium, the Regional Government of Andalusia, any other public institution, or any private company or organisation related to transport.",
    openSourceTitle: "Open source and authorship",
    openSourceDescription: "This project is developed as open-source software. Its source code can be publicly consulted and studied; any reuse must comply with the applicable licence and always acknowledge the original authorship.",
    authorLabel: "Author:", repositoryLabel: "Repository:",
    travelTitle: "How can I travel?",
    travelDescription: "The displayed timetables refer to the indicated services, but accepted payment methods and tickets depend on each service's official conditions. Before travelling, always check the current information from the operator and the Consortium.",
    transportCardTitle: "Andalusia Metropolitan Transport Card",
    transportCardDescription: "It is a contactless stored-value card used on public transport integrated into Andalusia's Metropolitan Transport Consortia, when accepted by the relevant service.",
    transportCardLink: "Official information on the Andalusia Metropolitan Transport Card",
    consortiumLink: "Metropolitan Transport Consortium of the Málaga Area",
    faresLink: "Current fares and tickets of the Málaga Consortium",
    youngTitle: "Youth Transport Card",
    youngDescription: "There is an Andalusia Youth Transport Card that may offer specific conditions or discounts to young people who meet the official requirements. Not everyone can use it, and not every service necessarily applies the same conditions.",
    youngConditions: "Requirements, validity, discounts and included services may change. Always consult the official pages before applying for or using it.",
    youngAndalusiaLink: "Official information on the Andalusia Youth Transport Card",
    youngMalagaLink: "Youth Card of the Metropolitan Transport Consortium of the Málaga Area",
    otherMethodsTitle: "Other travel methods",
    otherMethodsDescription: "Depending on the specific service, other current options may exist, such as a single ticket, Consortium cards or tickets, the Youth Transport Card or other passes. Their availability, acceptance and conditions are not the same on every service; always check the official conditions before travelling.",
    scheduleNoticeTitle: "Timetable notice",
    scheduleNoticeDescription: "Axar+ timetables are for information purposes only, and this page is not an official timetable source. Check official information before travelling, especially for timetable changes, public holidays, incidents, temporary alterations, or changes to fares and tickets."
  },
  pt: {
    independenceTitle: "Projeto independente e não oficial",
    independenceLead: "Axar+ é um projeto pessoal, independente e sem fins lucrativos, realizado “por amor à arte” para facilitar a consulta de horários e o planeamento de viagens.",
    independenceDetails: "Esta página não é um site oficial do Consórcio de Transporte Metropolitano da Área de Málaga. Não é afiliada, associada, patrocinada, gerida, apoiada nem representa o Consórcio, a Junta de Andaluzia, outra instituição pública ou qualquer empresa ou entidade privada relacionada com o transporte.",
    openSourceTitle: "Código aberto e autoria",
    openSourceDescription: "Este projeto é desenvolvido como software de código aberto. O seu código-fonte pode ser consultado e estudado publicamente; qualquer reutilização deve respeitar a licença aplicável e reconhecer sempre a autoria original.",
    authorLabel: "Autor:", repositoryLabel: "Repositório:",
    travelTitle: "Com que posso viajar?",
    travelDescription: "Os horários apresentados correspondem aos serviços indicados, mas os meios de pagamento e títulos aceites dependem das condições oficiais de cada serviço. Antes de viajar, consulta sempre a informação atual do operador e do Consórcio.",
    transportCardTitle: "Cartão de Transporte Metropolitano da Andaluzia",
    transportCardDescription: "É um cartão sem contacto com saldo, utilizado nos transportes públicos integrados nos Consórcios de Transporte Metropolitano da Andaluzia, quando o serviço correspondente o aceitar.",
    transportCardLink: "Informação oficial do Cartão de Transporte Metropolitano da Andaluzia",
    consortiumLink: "Consórcio de Transporte Metropolitano da Área de Málaga",
    faresLink: "Tarifas e títulos em vigor do Consórcio de Málaga",
    youngTitle: "Cartão Jovem de Transporte",
    youngDescription: "Existe um Cartão Jovem de Transporte da Andaluzia que pode oferecer condições ou descontos específicos a jovens que cumpram os requisitos oficiais. Nem todas as pessoas o podem utilizar, nem todos os serviços aplicam necessariamente as mesmas condições.",
    youngConditions: "Os requisitos, a validade, os descontos e os serviços incluídos podem mudar. Consulta sempre as páginas oficiais antes de o pedir ou utilizar.",
    youngAndalusiaLink: "Informação oficial do Cartão Jovem de Transporte da Andaluzia",
    youngMalagaLink: "Cartão Jovem do Consórcio de Transporte Metropolitano da Área de Málaga",
    otherMethodsTitle: "Outros métodos de viagem",
    otherMethodsDescription: "Consoante o serviço concreto, podem existir outras modalidades em vigor, como bilhete simples, cartões ou títulos do Consórcio, o Cartão Jovem de Transporte ou outros títulos. A disponibilidade, aceitação e condições não são iguais em todos os serviços; verifica sempre as condições oficiais antes de viajar.",
    scheduleNoticeTitle: "Aviso sobre os horários",
    scheduleNoticeDescription: "Os horários da Axar+ têm uma finalidade exclusivamente informativa e esta página não é uma fonte oficial de horários. Confirma a informação oficial antes de viajar, especialmente perante alterações de horários, feriados, incidências, modificações temporárias ou alterações de tarifas e títulos de transporte."
  },
  ca: {
    independenceTitle: "Projecte independent i no oficial",
    independenceLead: "Axar+ és un projecte personal, independent i sense ànim de lucre, fet “per amor a l'art” per facilitar la consulta d'horaris i la planificació de viatges.",
    independenceDetails: "Aquesta pàgina no és un web oficial del Consorci de Transport Metropolità de l'Àrea de Màlaga. No està afiliada, associada, patrocinada, gestionada, avalada ni representa el Consorci, la Junta d'Andalusia, cap altra institució pública ni cap empresa o entitat privada relacionada amb el transport.",
    openSourceTitle: "Codi obert i autoria",
    openSourceDescription: "Aquest projecte es desenvolupa com a programari de codi obert. El seu codi font es pot consultar i estudiar públicament; qualsevol reutilització ha de respectar la llicència aplicable i reconèixer sempre l'autoria original.",
    authorLabel: "Autor:", repositoryLabel: "Repositori:",
    travelTitle: "Amb què puc viatjar?",
    travelDescription: "Els horaris mostrats corresponen als serveis indicats, però els mitjans de pagament i títols acceptats depenen de les condicions oficials de cada servei. Abans de viatjar, consulta sempre la informació vigent de l'operador i del Consorci.",
    transportCardTitle: "Targeta de Transport Metropolità d'Andalusia",
    transportCardDescription: "És una targeta moneder sense contacte utilitzada en els transports públics integrats als Consorcis de Transport Metropolità d'Andalusia, quan el servei corresponent l'admeti.",
    transportCardLink: "Informació oficial de la Targeta de Transport Metropolità d'Andalusia",
    consortiumLink: "Consorci de Transport Metropolità de l'Àrea de Màlaga",
    faresLink: "Tarifes i títols vigents del Consorci de Màlaga",
    youngTitle: "Targeta Jove de Transport",
    youngDescription: "Hi ha una Targeta Jove de Transport d'Andalusia que pot oferir condicions o bonificacions específiques a les persones joves que compleixin els requisits oficials. No totes les persones la poden utilitzar ni tots els serveis apliquen necessàriament les mateixes condicions.",
    youngConditions: "Els requisits, la validesa, les bonificacions i els serveis inclosos poden canviar. Consulta sempre les pàgines oficials abans de sol·licitar-la o utilitzar-la.",
    youngAndalusiaLink: "Informació oficial de la Targeta Jove de Transport d'Andalusia",
    youngMalagaLink: "Targeta Jove del Consorci de Transport Metropolità de l'Àrea de Màlaga",
    otherMethodsTitle: "Altres mètodes de viatge",
    otherMethodsDescription: "Segons el servei concret, poden existir altres modalitats vigents, com el bitllet senzill, targetes o títols del Consorci, la Targeta Jove de Transport o altres títols. La disponibilitat, acceptació i condicions no són iguals en tots els serveis; verifica sempre les condicions oficials abans de viatjar.",
    scheduleNoticeTitle: "Avís sobre els horaris",
    scheduleNoticeDescription: "Els horaris d'Axar+ tenen una finalitat exclusivament informativa i aquesta pàgina no és una font oficial d'horaris. Comprova la informació oficial abans de viatjar, especialment davant canvis d'horaris, festius, incidències, modificacions temporals o canvis en tarifes i títols de transport."
  },
  fr: {
    independenceTitle: "Projet indépendant et non officiel",
    independenceLead: "Axar+ est un projet personnel, indépendant et sans but lucratif, réalisé « par amour de l'art » afin de faciliter la consultation des horaires et la planification des trajets.",
    independenceDetails: "Cette page n'est pas un site officiel du Consorcio de Transporte Metropolitano del Área de Málaga. Elle n'est ni affiliée, ni associée, ni sponsorisée, ni gérée, ni soutenue par le Consorcio, la Junta de Andalucía, une autre institution publique ou une entreprise ou entité privée liée aux transports, et ne les représente pas.",
    openSourceTitle: "Code ouvert et paternité",
    openSourceDescription: "Ce projet est développé comme logiciel open source. Son code source peut être consulté et étudié publiquement ; toute réutilisation doit respecter la licence applicable et toujours reconnaître la paternité originale.",
    authorLabel: "Auteur :", repositoryLabel: "Dépôt :",
    travelTitle: "Avec quoi puis-je voyager ?",
    travelDescription: "Les horaires affichés correspondent aux services indiqués, mais les moyens de paiement et titres acceptés dépendent des conditions officielles de chaque service. Avant de voyager, consultez toujours les informations à jour de l'opérateur et du Consorcio.",
    transportCardTitle: "Carte de transport métropolitain d'Andalousie",
    transportCardDescription: "Il s'agit d'une carte sans contact à solde rechargeable utilisée dans les transports publics intégrés aux Consorcios de Transport Métropolitain d'Andalousie, lorsque le service concerné l'accepte.",
    transportCardLink: "Informations officielles sur la Carte de transport métropolitain d'Andalousie",
    consortiumLink: "Consorcio de Transporte Metropolitano del Área de Málaga",
    faresLink: "Tarifs et titres en vigueur du Consorcio de Málaga",
    youngTitle: "Carte Jeune de Transport",
    youngDescription: "Il existe une Carte Jeune de Transport d'Andalousie qui peut offrir des conditions ou des réductions spécifiques aux jeunes remplissant les conditions officielles. Tout le monde ne peut pas l'utiliser et tous les services n'appliquent pas nécessairement les mêmes conditions.",
    youngConditions: "Les conditions requises, la validité, les réductions et les services inclus peuvent changer. Consultez toujours les pages officielles avant de la demander ou de l'utiliser.",
    youngAndalusiaLink: "Informations officielles sur la Carte Jeune de Transport d'Andalousie",
    youngMalagaLink: "Carte Jeune du Consorcio de Transporte Metropolitano del Área de Málaga",
    otherMethodsTitle: "Autres modes de voyage",
    otherMethodsDescription: "Selon le service concerné, d'autres modalités en vigueur peuvent exister, comme le billet simple, des cartes ou titres du Consorcio, la Carte Jeune de Transport ou d'autres titres. Leur disponibilité, leur acceptation et leurs conditions ne sont pas les mêmes pour tous les services ; vérifiez toujours les conditions officielles avant de voyager.",
    scheduleNoticeTitle: "Avertissement sur les horaires",
    scheduleNoticeDescription: "Les horaires d'Axar+ sont fournis à titre informatif uniquement et cette page n'est pas une source officielle d'horaires. Vérifiez les informations officielles avant de voyager, notamment en cas de changements d'horaires, jours fériés, incidents, modifications temporaires ou changements de tarifs et de titres de transport."
  }
};

const translations = {
  es: {
    pageTitle: "Axar+ | Planifica tu viaje",
    brandLabel: "Axar+",
    heroTitle: "Axar+ · Planifica tus viajes con claridad",
    heroSubtitle: "Busca horarios actualizados y planifica tu viaje con una <strong>web clara</strong>, <strong>rápida</strong> y <strong>fácil</strong>.",
    navHome: "Inicio",
    navGallery: "Galería",
    navInfo: "Información",
    navFaq: "FAQ",
    navContact: "Contacto",
    languageLabel: "🌍 Español",
    languageMenuAria: "Seleccionar idioma",
    footerCredit: "Axar+ creado por <a href=\"https://github.com/probablyraider\" target=\"_blank\" rel=\"noopener noreferrer\">@probablyraider</a> en <a href=\"https://github.com/probablyraider\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a>.",
    searchTitle: "Encuentra tu viaje",
    searchDescription: "Selecciona el origen y el destino para ver los horarios disponibles en ambas direcciones.",
    originLabel: "Origen",
    destinationLabel: "Destino",
    searchButton: "Buscar",
    resetButton: "Reiniciar",
    dayFilterLabel: "Día de servicio",
    statusSelect: "Selecciona origen y destino para ver los horarios.",
    statusSame: "El origen y el destino deben ser diferentes.",
    statusNoDirect: "No se encontraron horarios directos de {origin} a {destination}. Prueba con otra dirección o selecciona una parada diferente.",
    statusShowing: "Mostrando {count} horario(s) de {origin} a {destination}.",
    tableDeparture: "Salida",
    tableArrival: "Llegada",
    tableDays: "Días",
    tableNotes: "Observaciones",
    galleryTitle: "Galería de destinos",
    galleryDescription: "Conoce algunos de los lugares más bonitos que puedes visitar en la ruta.",
    galleryCard1Title: "Málaga",
    galleryCard1Text: "Comienza en la estación de autobuses y disfruta de la ciudad antes de salir hacia el valle.",
    galleryCard2Title: "Pueblos de la ruta",
    galleryCard2Text: "Descubre paradas, miradores y pueblos con encanto a lo largo del recorrido.",
    galleryCard3Title: "Casabermeja",
    galleryCard3Text: "Escapa del bullicio y conoce su centro tradicional, ideal para una excursión de medio día.",
    galleryCard4Title: "Riogordo",
    galleryCard4Text: "Descubre uno de los últimos pueblos de la ruta antes de volver a Málaga.",
    infoTitle: "Información",
    infoDescription: "Axar+ es una guía moderna para consultar horarios y planificar tus desplazamientos con claridad.",
    infoFeature1: "Consulta horarios directos y compara rutas en una sola vista.",
    infoFeature2: "Visualiza días de servicio y observaciones importantes.",
    infoFeature3: "Próximamente podremos añadir alertas en tiempo real con un backend actualizado.",
    faqTitle: "Preguntas frecuentes",
    faqQuestion1: "¿Puedo consultar varias rutas desde la misma web?",
    faqAnswer1: "Sí. Axar+ te ayuda a comparar horarios y encontrar la opción más útil según tu recorrido.",
    faqQuestion2: "¿Los horarios están actualizados?",
    faqAnswer2: "Los horarios se basan en los datos de la línea. Para actualización automática recomendamos usar un backend que refresque los datos desde la web oficial.",
    faqQuestion3: "¿Puedo traducir la página a otros idiomas?",
    faqAnswer3: "Sí. Usa los botones en la parte superior para cambiar entre español, inglés, portugués, catalán y francés.",
    contactTitle: "Contacto",
    contactDescription: "¿Tienes una sugerencia para Axar+ o quieres colaborar? Escríbenos y te responderemos pronto.",
    contactEmailLabel: "Correo",
    contactGitHubLabel: "GitHub"
  },
  en: {
    pageTitle: "Axar+ | Plan your journey",
    brandLabel: "Axar+",
    heroTitle: "Axar+ · Plan your journeys with clarity",
    heroSubtitle: "Search updated schedules and plan your route with a <strong>clear</strong>, <strong>fast</strong> and <strong>easy</strong> web experience.",
    navHome: "Home",
    navGallery: "Gallery",
    navInfo: "Info",
    navFaq: "FAQ",
    navContact: "Contact",
    languageLabel: "🌍 English",
    languageMenuAria: "Select language",
    footerCredit: "Axar+ created by <a href=\"https://github.com/probablyraider\" target=\"_blank\" rel=\"noopener noreferrer\">@probablyraider</a> on <a href=\"https://github.com/probablyraider\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a>.",
    searchTitle: "Find your trip",
    searchDescription: "Select origin and destination to see available schedules.",
    originLabel: "Origin",
    destinationLabel: "Destination",
    searchButton: "Search",
    resetButton: "Reset",
    dayFilterLabel: "Service day",
    statusSelect: "Select origin and destination to view schedules.",
    statusSame: "Origin and destination must be different.",
    statusNoDirect: "No direct schedules found from {origin} to {destination}. Try another route.",
    statusShowing: "Showing {count} schedule(s) from {origin} to {destination}.",
    tableDeparture: "Departure",
    tableArrival: "Arrival",
    tableDays: "Days",
    tableNotes: "Notes",
    galleryTitle: "Destination gallery",
    galleryDescription: "Discover the beautiful places you can reach along the route.",
    galleryCard1Title: "Málaga",
    galleryCard1Text: "Start at the bus station and enjoy the city before heading into the valley.",
    galleryCard2Title: "Route villages",
    galleryCard2Text: "Explore stops, viewpoints and towns with character across the journey.",
    galleryCard3Title: "Casabermeja",
    galleryCard3Text: "Escape the bustle and explore its traditional center on a half-day trip.",
    galleryCard4Title: "Riogordo",
    galleryCard4Text: "Discover one of the last villages on the route before returning to Málaga.",
    infoTitle: "Information",
    infoDescription: "Axar+ is a modern guide to checking schedules and planning your journeys with clarity.",
    infoFeature1: "Check direct departures and compare routes in one view.",
    infoFeature2: "View service days and important travel notes.",
    infoFeature3: "Soon we can add real-time alerts with an updated backend.",
    faqTitle: "Frequently asked questions",
    faqQuestion1: "Can I check multiple routes from the same website?",
    faqAnswer1: "Yes. Axar+ helps you compare schedules and find the best option for your trip.",
    faqQuestion2: "Are the schedules up to date?",
    faqAnswer2: "Schedules are based on line data. For automatic updates, we recommend a backend that refreshes from the official website.",
    faqQuestion3: "Can I translate the page to other languages?",
    faqAnswer3: "Yes. Use the buttons at the top to switch between Spanish, English, Portuguese, Catalan and French.",
    contactTitle: "Contact",
    contactDescription: "Have a suggestion for Axar+ or want to collaborate? Write to us and we will reply soon.",
    contactEmailLabel: "Email",
    contactGitHubLabel: "GitHub"
  },
  pt: {
    pageTitle: "Axar+ | Planeia a tua viagem",
    brandLabel: "Axar+",
    heroTitle: "Axar+ · Planeia as tuas viagens com clareza",
    heroSubtitle: "Procura horários atualizados e planeia o teu percurso com uma experiência de <strong>web clara</strong>, <strong>rápida</strong> e <strong>fácil</strong>.",
    navHome: "Início",
    navGallery: "Galeria",
    navInfo: "Informação",
    navFaq: "FAQ",
    navContact: "Contacto",
    languageLabel: "🌍 Português",
    languageMenuAria: "Selecionar idioma",
    footerCredit: "Axar+ criado por <a href=\"https://github.com/probablyraider\" target=\"_blank\" rel=\"noopener noreferrer\">@probablyraider</a> no <a href=\"https://github.com/probablyraider\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a>.",
    searchTitle: "Encontra a tua viagem",
    searchDescription: "Seleciona origem e destino para ver os horários disponíveis.",
    originLabel: "Origem",
    destinationLabel: "Destino",
    searchButton: "Pesquisar",
    resetButton: "Reiniciar",
    dayFilterLabel: "Dia de serviço",
    statusSelect: "Seleciona origem e destino para ver os horários.",
    statusSame: "A origem e o destino devem ser diferentes.",
    statusNoDirect: "Não foram encontrados horários diretos de {origin} para {destination}. Tenta outra rota.",
    statusShowing: "Mostrando {count} horário(s) de {origin} para {destination}.",
    tableDeparture: "Saída",
    tableArrival: "Chegada",
    tableDays: "Dias",
    tableNotes: "Notas",
    galleryTitle: "Galeria de destinos",
    galleryDescription: "Descobre alguns dos locais mais bonitos que podes visitar ao longo da rota.",
    galleryCard1Title: "Málaga",
    galleryCard1Text: "Começa na estação de autocarros e explora a cidade antes de seguir para o vale.",
    galleryCard2Title: "Aldeias da rota",
    galleryCard2Text: "Explora paragens, miradouros e aldeias com encanto ao longo do percurso.",
    galleryCard3Title: "Casabermeja",
    galleryCard3Text: "Escapa ao bulício e conhece o centro tradicional numa excursão de meio dia.",
    galleryCard4Title: "Riogordo",
    galleryCard4Text: "Descobre uma das últimas aldeias da rota antes de voltar a Málaga.",
    infoTitle: "Informação",
    infoDescription: "Axar+ é uma guia moderna para consultar horários e planear os teus deslocamentos com clareza.",
    infoFeature1: "Consulta horários diretos e compara rotas numa só vista.",
    infoFeature2: "Vê os dias de serviço e observações importantes.",
    infoFeature3: "Em breve podemos adicionar alertas em tempo real com um backend atualizado.",
    faqTitle: "Perguntas frequentes",
    faqQuestion1: "Posso consultar várias rotas na mesma página?",
    faqAnswer1: "Sim. A Axar+ ajuda-te a comparar horários e a encontrar a melhor opção para o teu percurso.",
    faqQuestion2: "Os horários estão atualizados?",
    faqAnswer2: "Os horários baseiam-se nos dados da linha. Para atualização automática recomendamos um backend que atualize a partir do site oficial.",
    faqQuestion3: "Posso traduzir a página para outros idiomas?",
    faqAnswer3: "Sim. Usa os botões na parte superior para mudar entre espanhol, inglês, português, catalão e francês.",
    contactTitle: "Contacto",
    contactDescription: "Tens uma sugestão para a Axar+ ou queres colaborar? Escreve-nos e responderemos em breve.",
    contactEmailLabel: "Email",
    contactGitHubLabel: "GitHub"
  },
  ca: {
    pageTitle: "Axar+ | Planifica el teu viatge",
    brandLabel: "Axar+",
    heroTitle: "Axar+ · Planifica els teus viatges amb claredat",
    heroSubtitle: "Cerca horaris actualitzats i planifica el teu recorregut amb una <strong>web clara</strong>, <strong>ràpida</strong> i <strong>fàcil</strong>.",
    navHome: "Inici",
    navGallery: "Galeria",
    navInfo: "Informació",
    navFaq: "FAQ",
    navContact: "Contacte",
    languageLabel: "🌍 Català",
    languageMenuAria: "Selecciona l'idioma",
    footerCredit: "Axar+ creat per <a href=\"https://github.com/probablyraider\" target=\"_blank\" rel=\"noopener noreferrer\">@probablyraider</a> a <a href=\"https://github.com/probablyraider\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a>.",
    searchTitle: "Troba el teu viatge",
    searchDescription: "Selecciona origen i destinació per veure els horaris disponibles.",
    originLabel: "Origen",
    destinationLabel: "Destinació",
    searchButton: "Cerca",
    resetButton: "Reiniciar",
    dayFilterLabel: "Dia de servei",
    statusSelect: "Selecciona origen i destinació per veure els horaris.",
    statusSame: "L'origen i la destinació han de ser diferents.",
    statusNoDirect: "No s'han trobat horaris directes de {origin} a {destination}. Prova amb una altra ruta.",
    statusShowing: "Mostrant {count} horari(s) de {origin} a {destination}.",
    tableDeparture: "Sortida",
    tableArrival: "Arribada",
    tableDays: "Dies",
    tableNotes: "Observacions",
    galleryTitle: "Galeria de destinacions",
    galleryDescription: "Coneix alguns dels llocs més bonics que pots visitar al llarg de la ruta.",
    galleryCard1Title: "Màlaga",
    galleryCard1Text: "Comença a l'estació d'autobusos i gaudeix de la ciutat abans d'anar cap a la vall.",
    galleryCard2Title: "Pobles de la ruta",
    galleryCard2Text: "Descobreix parades, miradors i pobles amb encant al llarg del recorregut.",
    galleryCard3Title: "Casabermeja",
    galleryCard3Text: "Escapa del bullici i descobreix el seu centre tradicional en una excursió de mig dia.",
    galleryCard4Title: "Riogordo",
    galleryCard4Text: "Descobreix un dels últims pobles de la ruta abans de tornar a Màlaga.",
    infoTitle: "Informació",
    infoDescription: "Axar+ és una guia moderna per consultar horaris i planificar els teus desplaçaments amb claredat.",
    infoFeature1: "Consulta horaris directes i compara rutes en una sola vista.",
    infoFeature2: "Visualitza dies de servei i observacions importants.",
    infoFeature3: "Properament podrem afegir alertes en temps real amb un backend actualitzat.",
    faqTitle: "Preguntes freqüents",
    faqQuestion1: "Puc consultar diverses rutes des de la mateixa web?",
    faqAnswer1: "Sí. Axar+ et ajuda a comparar horaris i trobar l'opció més útil segons el teu recorregut.",
    faqQuestion2: "Els horaris estan actualitzats?",
    faqAnswer2: "Els horaris es basen en les dades de la línia. Per a una actualització automàtica recomanem un backend que refresqui des del web oficial.",
    faqQuestion3: "Puc traduir la pàgina a altres idiomes?",
    faqAnswer3: "Sí. Utilitza els botons a la part superior per canviar entre espanyol, anglès, portuguès, català i francès.",
    contactTitle: "Contacte",
    contactDescription: "Tens una suggerència per Axar+ o vols col·laborar? Escriu-nos i respondrem aviat.",
    contactEmailLabel: "Correu",
    contactGitHubLabel: "GitHub"
  },
  fr: {
    pageTitle: "Axar+ | Planifiez votre voyage",
    brandLabel: "Axar+",
    heroTitle: "Axar+ · Planifiez vos trajets avec clarté",
    heroSubtitle: "Recherchez des horaires à jour et planifiez votre parcours avec une expérience <strong>claire</strong>, <strong>rapide</strong> et <strong>simple</strong>.",
    navHome: "Accueil",
    navGallery: "Galerie",
    navInfo: "Infos",
    navFaq: "FAQ",
    navContact: "Contact",
    languageLabel: "🌍 Français",
    languageMenuAria: "Sélectionner la langue",
    footerCredit: "Axar+ créé par <a href=\"https://github.com/probablyraider\" target=\"_blank\" rel=\"noopener noreferrer\">@probablyraider</a> sur <a href=\"https://github.com/probablyraider\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a>.",
    searchTitle: "Trouvez votre trajet",
    searchDescription: "Sélectionnez l'origine et la destination pour voir les horaires disponibles.",
    originLabel: "Origine",
    destinationLabel: "Destination",
    searchButton: "Chercher",
    resetButton: "Réinitialiser",
    dayFilterLabel: "Jour de service",
    statusSelect: "Sélectionnez origine et destination pour voir les horaires.",
    statusSame: "L'origine et la destination doivent être différentes.",
    statusNoDirect: "Aucun horaire direct trouvé de {origin} à {destination}. Essayez un autre itinéraire.",
    statusShowing: "Affichage de {count} horaire(s) de {origin} à {destination}.",
    tableDeparture: "Départ",
    tableArrival: "Arrivée",
    tableDays: "Jours",
    tableNotes: "Observations",
    galleryTitle: "Galerie des destinations",
    galleryDescription: "Découvrez les plus beaux endroits à visiter le long du parcours.",
    galleryCard1Title: "Málaga",
    galleryCard1Text: "Commencez à la gare routière et profitez de la ville avant de partir vers la vallée.",
    galleryCard2Title: "Villages de la route",
    galleryCard2Text: "Explorez les arrêts, points de vue et villages charmants le long du trajet.",
    galleryCard3Title: "Casabermeja",
    galleryCard3Text: "Évadez-vous du tumulte et découvrez son centre traditionnel lors d'une excursion.",
    galleryCard4Title: "Riogordo",
    galleryCard4Text: "Découvrez l'un des derniers villages de la route avant de revenir à Malaga.",
    infoTitle: "Informations",
    infoDescription: "Axar+ est un guide moderne pour consulter les horaires et planifier vos déplacements avec clarté.",
    infoFeature1: "Consultez les départs directs et comparez les itinéraires en un seul endroit.",
    infoFeature2: "Affichez les jours de service et les observations importantes.",
    infoFeature3: "Bientôt, nous pourrons ajouter des alertes en temps réel avec un backend mis à jour.",
    faqTitle: "Questions fréquentes",
    faqQuestion1: "Puis-je consulter plusieurs itinéraires depuis le même site ?",
    faqAnswer1: "Oui. Axar+ vous aide à comparer les horaires et à trouver la meilleure option pour votre trajet.",
    faqQuestion2: "Les horaires sont-ils à jour ?",
    faqAnswer2: "Les horaires sont basés sur les données de la ligne. Pour une mise à jour automatique, nous recommandons un backend qui rafraîchit depuis le site officiel.",
    faqQuestion3: "Puis-je traduire la page dans d'autres langues ?",
    faqAnswer3: "Oui. Utilisez les boutons en haut pour passer entre espagnol, anglais, portugais, catalan et français.",
    contactTitle: "Contact",
    contactDescription: "Vous avez une suggestion pour Axar+ ou souhaitez collaborer ? Écrivez-nous et nous répondrons bientôt.",
    contactEmailLabel: "Email",
    contactGitHubLabel: "GitHub"
  }
};

let currentLanguage = 'es';
let selectedDayFilter = 'all';
const LANGUAGE_STORAGE_KEY = 'axar-language';
const SPLASH_STORAGE_KEY = 'axar-splash-seen';

function shouldShowSplash() {
  try {
    return !localStorage.getItem(SPLASH_STORAGE_KEY);
  } catch (error) {
    return true;
  }
}

function markSplashSeen() {
  try {
    localStorage.setItem(SPLASH_STORAGE_KEY, 'true');
  } catch (error) {
    console.warn('No se pudo guardar el estado de la pantalla de carga.', error);
  }
}

function loadSavedLanguage() {
  try {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (savedLanguage && translations[savedLanguage]) {
      currentLanguage = savedLanguage;
    }
  } catch (error) {
    console.warn('No se pudo cargar el idioma guardado.', error);
  }
}

function t(key, variables) {
  const message = (translations[currentLanguage] && translations[currentLanguage][key]) || translations.es[key] || key;
  if (!variables) return message;
  return Object.keys(variables).reduce((text, variable) => text.replace(new RegExp(`\\{${variable}\\}`, 'g'), variables[variable]), message);
}

function applyTranslations() {
  document.title = t('pageTitle');
  document.querySelectorAll('[data-i18n]').forEach(node => {
    const key = node.getAttribute('data-i18n');
    if (key && t(key) !== null) {
      // footerCredit and heroSubtitle contain HTML markup (<a>, <strong>) so set innerHTML for them
      if (key === 'footerCredit' || key === 'heroSubtitle') {
        node.innerHTML = t(key);
      } else {
        node.textContent = t(key);
      }
    }
  });

  document.querySelectorAll('[data-info-i18n]').forEach(node => {
    const key = node.getAttribute('data-info-i18n');
    const message = informationTranslations[currentLanguage]?.[key] || informationTranslations.es[key];
    if (message) {
      node.textContent = message;
    }
  });

  const originSelect = document.getElementById('origin');
  const destinationSelect = document.getElementById('destination');
  const langMenu = document.getElementById('langMenu');

  if (originSelect) {
    originSelect.setAttribute('aria-label', t('originLabel'));
  }
  if (destinationSelect) {
    destinationSelect.setAttribute('aria-label', t('destinationLabel'));
  }
  if (langMenu) {
    langMenu.setAttribute('aria-label', t('languageMenuAria'));
  }
}

function setLanguageButtons() {
  document.querySelectorAll('.lang-btn').forEach(button => {
    button.classList.toggle('active', button.dataset.lang === currentLanguage);
  });
  const toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.textContent = t('languageLabel');
  }
}

function closeLanguageMenu() {
  const picker = document.querySelector('.language-picker');
  const menu = document.getElementById('langMenu');
  const toggle = document.getElementById('langToggle');
  if (picker) {
    picker.classList.remove('open');
  }
  if (menu) {
    menu.hidden = true;
  }
  if (toggle) {
    toggle.setAttribute('aria-expanded', 'false');
  }
}

function toggleLanguageMenu() {
  const picker = document.querySelector('.language-picker');
  const menu = document.getElementById('langMenu');
  const toggle = document.getElementById('langToggle');
  if (!picker || !menu || !toggle) return;

  const open = !picker.classList.contains('open');
  picker.classList.toggle('open', open);
  menu.hidden = !open;
  toggle.setAttribute('aria-expanded', String(open));
}

function updateSelectPlaceholders() {
  const originSelect = document.getElementById('origin');
  const destinationSelect = document.getElementById('destination');
  const placeholderText = selectPlaceholderLabels[currentLanguage] || 'Select...';
  if (originSelect && originSelect.options && originSelect.options.length) {
    const opt = originSelect.options[0];
    if (opt && opt.value === '') {
      opt.textContent = placeholderText;
    }
  }
  if (destinationSelect && destinationSelect.options && destinationSelect.options.length) {
    const opt2 = destinationSelect.options[0];
    if (opt2 && opt2.value === '') {
      opt2.textContent = placeholderText;
    }
  }
}

function updateLanguage(lang) {
  currentLanguage = lang;
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  } catch (error) {
    console.warn('No se pudo guardar el idioma seleccionado.', error);
  }
  setLanguageButtons();
  applyTranslations();
  // Update placeholder text without wiping user selections
  updateSelectPlaceholders();
  if (typeof handleSearch === 'function') {
    handleSearch();
  }
  closeLanguageMenu();
}

function normalizeStop(name) {
  return aliasStopNames[name] || name;
}

function displayStopName(name) {
  return displayLabels[name] || name;
}

function getStopOptions() {
  const orderedStops = [];
  scheduleData.forEach(section => {
    section.stops.forEach(stop => {
      const normalized = normalizeStop(stop);
      if (!orderedStops.includes(normalized)) {
        orderedStops.push(normalized);
      }
    });
  });
  return orderedStops;
}

function getJourneyList(origin, destination) {
  const normalizedOrigin = normalizeStop(origin);
  const normalizedDestination = normalizeStop(destination);
  const journeys = [];

  scheduleData.forEach(section => {
    const startIndex = section.stops.indexOf(normalizedOrigin);
    const endIndex = section.stops.indexOf(normalizedDestination);

    // A journey is valid only in the physical direction of this service.
    // This prevents mixing IDA and VUELTA services.
    if (startIndex >= 0 && endIndex > startIndex) {
      section.journeys.forEach(journey => {
        const frequency = journey.frequency.toUpperCase();
        if (selectedDayFilter !== 'all' && frequency !== selectedDayFilter) {
          return;
        }
        const departure = journey.stops[normalizedOrigin];
        const arrival = journey.stops[normalizedDestination];

        if (departure && arrival) {
          journeys.push({
            direction: section.direction,
            departure,
            arrival,
            frequency: frequencyLabels[currentLanguage][frequency] || frequency,
            note: journey.note.trim(),
            origin: normalizedOrigin,
            destination: normalizedDestination
          });
        }
      });
    }
  });

  return journeys;
}

function renderStatus(message, isError = false) {
  const status = document.getElementById('status');
  status.textContent = message;
  status.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
  status.style.color = '#f8fafc';
  status.style.borderColor = 'rgba(255, 255, 255, 0.12)';
}

function renderResults(origin, destination, journeys) {
  const results = document.getElementById('results');
  results.innerHTML = '';

  if (!origin || !destination) {
    renderStatus(t('statusSelect'));
    return;
  }

  if (origin === destination) {
    renderStatus(t('statusSame'), true);
    return;
  }

  if (!journeys.length) {
    renderStatus(t('statusNoDirect', {
      origin: displayStopName(origin),
      destination: displayStopName(destination)
    }), true);
    return;
  }

  renderStatus(t('statusShowing', {
    count: journeys.length,
    origin: displayStopName(origin),
    destination: displayStopName(destination)
  }));

  const table = document.createElement('table');
  table.className = 'responsive-table';
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  const headers = [t('tableDeparture'), t('tableArrival'), t('tableDays'), t('tableNotes')];
  headers.forEach(text => {
    const th = document.createElement('th');
    th.textContent = text;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');

  journeys.forEach(journey => {
    const row = document.createElement('tr');

    const departureCell = document.createElement('td');
    departureCell.textContent = journey.departure;
    departureCell.setAttribute('data-label', t('tableDeparture'));
    row.appendChild(departureCell);

    const arrivalCell = document.createElement('td');
    arrivalCell.textContent = journey.arrival;
    arrivalCell.setAttribute('data-label', t('tableArrival'));
    row.appendChild(arrivalCell);

    const freqCell = document.createElement('td');
    freqCell.textContent = journey.frequency;
    freqCell.setAttribute('data-label', t('tableDays'));
    row.appendChild(freqCell);

    const noteCell = document.createElement('td');
    noteCell.className = 'note-cell';
    noteCell.setAttribute('data-label', t('tableNotes'));
    if (journey.note) {
      const notePill = document.createElement('span');
      notePill.className = 'note-pill';
      notePill.textContent = translateNoteText(journey.note.trim());
      noteCell.appendChild(notePill);
    } else {
      noteCell.textContent = '';
    }
    row.appendChild(noteCell);

    tbody.appendChild(row);
  });

  table.appendChild(tbody);

  // Wrap table in a horizontally-scrollable container (fallback for narrow screens)
  const scrollWrap = document.createElement('div');
  scrollWrap.className = 'table-scroll';
  scrollWrap.appendChild(table);
  results.appendChild(scrollWrap);
}

function populateStops() {
  const origin = document.getElementById('origin');
  const destination = document.getElementById('destination');
  if (!origin || !destination) return;

  const stops = getStopOptions();
  origin.innerHTML = '';
  destination.innerHTML = '';

  // Insert a blank placeholder so users must choose origin/destination explicitly
  const placeholderText = selectPlaceholderLabels[currentLanguage] || 'Select...';
  const placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.textContent = placeholderText;
  placeholder.disabled = true;
  placeholder.selected = true;

  origin.appendChild(placeholder.cloneNode(true));
  destination.appendChild(placeholder.cloneNode(true));

  stops.forEach(stop => {
    const option = document.createElement('option');
    option.value = stop;
    option.textContent = displayStopName(stop);
    origin.appendChild(option.cloneNode(true));
    destination.appendChild(option.cloneNode(true));
  });

  // Do not pre-select any real stop; user must pick both origin and destination
}

function handleSearch() {
  const originEl = document.getElementById('origin');
  const destinationEl = document.getElementById('destination');
  if (!originEl || !destinationEl) return;

  const origin = originEl.value;
  const destination = destinationEl.value;
  const journeys = getJourneyList(origin, destination);
  renderResults(origin, destination, journeys);
}

function handleReset() {
  populateStops();
  setDayFilter('all');
  const results = document.getElementById('results');
  if (results) {
    results.innerHTML = '';
  }
  renderStatus(t('statusSelect'));
}

function setDayFilter(filter) {
  selectedDayFilter = filter;
  document.querySelectorAll('[data-day-filter]').forEach(button => {
    const isActive = button.dataset.dayFilter === filter;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

window.addEventListener('DOMContentLoaded', () => {
  if (window.location.hash) {
    history.replaceState(null, '', window.location.pathname + window.location.search);
  }
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

  const splashScreen = document.getElementById('splash-screen');
  const SPLASH_DURATION_MS = 2000; // show splash for 2 seconds on each page load

  // Use a global timeout id so multiple events don't create overlapping timers
  if (!window.__splashTimeoutId) window.__splashTimeoutId = null;

  function showSplashOnce() {
    if (!splashScreen) return;
    // If already showing, clear previous timeout to avoid loops
    if (window.__splashTimeoutId) {
      clearTimeout(window.__splashTimeoutId);
      window.__splashTimeoutId = null;
    }

    // Only add loading if not already present
    if (!document.body.classList.contains('loading')) {
      document.body.classList.add('loading');
    }
    // ensure 'loaded' removed so CSS transitions run
    document.body.classList.remove('loaded');

    window.__splashTimeoutId = setTimeout(() => {
      document.body.classList.add('loaded');
      document.body.classList.remove('loading');
      // hide the element after transition (avoid reflow loops)
      if (splashScreen) {
        splashScreen.style.visibility = 'hidden';
        splashScreen.style.opacity = '0';
        // also remove from flow after a short delay
        setTimeout(() => {
          if (splashScreen && splashScreen.parentNode) splashScreen.style.display = 'none';
        }, 650);
      }
      window.__splashTimeoutId = null;
    }, SPLASH_DURATION_MS);
  }

  if (splashScreen) {
    showSplashOnce();
  } else {
    document.body.classList.add('loaded');
  }

  // Ensure splash shows when page is restored from bfcache (back/forward cache)
  window.addEventListener('pageshow', (e) => {
    if (e.persisted) {
      const s = document.getElementById('splash-screen');
      // show only if not already visible
      if (s && !document.body.classList.contains('loading') && !document.body.classList.contains('loaded')) {
        // bring back visible state then hide again after timeout
        s.style.display = '';
        s.style.visibility = '';
        s.style.opacity = '';
        showSplashOnce();
      }
    }
  });

  loadSavedLanguage();
  populateStops();
  applyTranslations();
  setLanguageButtons();

  const searchButton = document.getElementById('searchButton');
  const resetButton = document.getElementById('resetButton');
  const swapButton = document.getElementById('swapButton');
  const origin = document.getElementById('origin');
  const destination = document.getElementById('destination');
  const langToggle = document.getElementById('langToggle');

  document.querySelectorAll('[data-day-filter]').forEach(button => {
    button.addEventListener('click', () => {
      setDayFilter(button.dataset.dayFilter);
      handleSearch();
    });
  });

  if (searchButton) {
    searchButton.addEventListener('click', handleSearch);
  }
  if (resetButton) {
    resetButton.addEventListener('click', handleReset);
  }

  // Swap origin and destination values when swapButton is clicked
  if (swapButton) {
    swapButton.addEventListener('click', () => {
      const originEl = document.getElementById('origin');
      const destinationEl = document.getElementById('destination');
      if (!originEl || !destinationEl) return;

      // Attempt to swap by selectedIndex first (works when both selects share same options)
      try {
        const oIndex = originEl.selectedIndex;
        const dIndex = destinationEl.selectedIndex;
        originEl.selectedIndex = Math.min(dIndex, originEl.options.length - 1);
        destinationEl.selectedIndex = Math.min(oIndex, destinationEl.options.length - 1);
      } catch (e) {
        // Fallback: swap by value
        const oValue = originEl.value;
        originEl.value = destinationEl.value || oValue;
        destinationEl.value = oValue;
      }

      // Trigger change handlers and update results
      originEl.dispatchEvent(new Event('change', { bubbles: true }));
      destinationEl.dispatchEvent(new Event('change', { bubbles: true }));
      if (typeof handleSearch === 'function') {
        handleSearch();
      }
    });
  }

  if (origin) {
    origin.addEventListener('change', handleSearch);
  }
  if (destination) {
    destination.addEventListener('change', handleSearch);
  }

  if (langToggle) {
    langToggle.addEventListener('click', event => {
      event.stopPropagation();
      toggleLanguageMenu();
    });
  }

  document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', () => {
      const { lang } = button.dataset;
      if (lang && lang !== currentLanguage) {
        updateLanguage(lang);
      }
    });
  });

  document.addEventListener('click', event => {
    if (!event.target.closest('.language-picker')) {
      closeLanguageMenu();
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeLanguageMenu();
    }
  });

  const originInit = document.getElementById('origin');
  const destinationInit = document.getElementById('destination');
  if (originInit && destinationInit && originInit.value && destinationInit.value) {
    handleSearch();
  }
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(registration => {
        console.log('Service Worker registered:', registration.scope);
      })
      .catch(error => {
        console.warn('Service Worker registration failed:', error);
      });
  });
}
