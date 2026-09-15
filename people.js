// Single source for People and the publications search. Works also from file://.
// Move a person to the alumni group to remove them from the current-members search.
// personalUrl: null => non-clickable card. irisId: null => exact irisName fallback.
// IRIS IDs verified through its public author autocomplete on 2026-09-14.
window.ARCADES_PEOPLE = [
  {
    "id": "full",
    "label": "Full professors",
    "people": [
      {
        "name": "Valentina Casola",
        "personalUrl": "https://www.docenti.unina.it/valentina.casola",
        "irisId": "rp01716",
        "irisName": "CASOLA, VALENTINA",
        "photo": "assets/people/valentina-casola.png",
        "id": "valentina-casola"
      },
      {
        "name": "Alessandro Cilardo",
        "personalUrl": "https://www.docenti.unina.it/alessandro.cilardo",
        "irisId": "rp05105",
        "irisName": "CILARDO, ALESSANDRO",
        "photo": "assets/people/alessandro-cilardo.png",
        "id": "alessandro-cilardo"
      },
      {
        "name": "Nicola Mazzocca",
        "personalUrl": "https://www.docenti.unina.it/nicola.mazzocca",
        "irisId": "rp22065",
        "irisName": "MAZZOCCA, NICOLA",
        "photo": "assets/people/nicola-mazzocca.png",
        "id": "nicola-mazzocca"
      },
      {
        "name": "Massimiliano Rak",
        "personalUrl": "https://www.docenti.unina.it/massimiliano.rak",
        "irisId": "rp151325",
        "irisName": "RAK, Massimiliano",
        "photo": "assets/people/massimiliano-rak.png",
        "id": "massimiliano-rak"
      }
    ]
  },
  {
    "id": "associate",
    "label": "Associate professors",
    "people": [
      {
        "name": "Mario Barbareschi",
        "personalUrl": "https://www.docenti.unina.it/mario.barbareschi",
        "irisId": "rp18955",
        "irisName": "BARBARESCHI, MARIO",
        "photo": "assets/people/mario-barbareschi.png",
        "id": "mario-barbareschi"
      },
      {
        "name": "Alessandra De Benedictis",
        "personalUrl": "https://www.docenti.unina.it/alessandra.debenedictis",
        "irisId": "rp16041",
        "irisName": "DE BENEDICTIS, ALESSANDRA",
        "photo": "assets/people/alessandra-de-benedictis.png",
        "id": "alessandra-de-benedictis"
      },
      {
        "name": "Valeria Vittorini",
        "personalUrl": "https://www.docenti.unina.it/valeria.vittorini",
        "irisId": "rp02111",
        "irisName": "VITTORINI, VALERIA",
        "photo": "assets/people/valeria-vittorini.jpeg",
        "id": "valeria-vittorini"
      }
    ]
  },
  {
    "id": "emeritus",
    "label": "Emeritus professors",
    "people": [
      {
        "name": "Antonino Mazzeo",
        "personalUrl": null,
        "irisId": "rp04182",
        "irisName": "MAZZEO, ANTONINO",
        "photo": "assets/people/antonino-mazzeo.png",
        "id": "antonino-mazzeo"
      }
    ]
  },
  {
    "id": "researchers",
    "label": "Researchers",
    "people": [
      {
        "name": "Alessandra Somma",
        "personalUrl": "https://www.docenti.unina.it/alessandra.somma",
        "irisId": "rp132947",
        "irisName": "SOMMA, ALESSANDRA",
        "photo": "assets/people/alessandra-somma.png",
        "id": "alessandra-somma"
      },
      {
        "name": "Franca Rocco di Torrepadula",
        "personalUrl": "https://www.docenti.unina.it/franca.roccoditorrepadula",
        "irisId": "rp132953",
        "irisName": "ROCCO DI TORREPADULA, FRANCA",
        "photo": "assets/people/franca-rocco-di-torrepadula.png",
        "id": "franca-rocco-di-torrepadula"
      }
    ]
  },
  {
    "id": "postdoc",
    "label": "Post-doc researchers",
    "people": [
      {
        "name": "Francesco Vitale",
        "personalUrl": null,
        "irisId": "rp117641",
        "irisName": "VITALE, FRANCESCO",
        "photo": "assets/people/francesco-vitale.png",
        "id": "francesco-vitale"
      }
    ]
  },
  {
    "id": "phd",
    "label": "Current PhD students",
    "people": [
      {
        "name": "Antonio Emmanuele",
        "personalUrl": null,
        "irisId": "rp172056",
        "irisName": "EMMANUELE, ANTONIO",
        "photo": "assets/people/antonio-emmanuele.jpg",
        "topic": "PUFs / hardware security · Expected completion 31 October 2026",
        "id": "antonio-emmanuele",
        "cycle": "XXXIX",
        "supervisorId": "mario-barbareschi"
      },
      {
        "name": "Lorenzo Abate",
        "personalUrl": null,
        "irisId": null,
        "irisName": "Abate, Lorenzo",
        "photo": "assets/people/lorenzo-abate.jpg",
        "topic": "Mastering Machine Learning at the Edge",
        "id": "lorenzo-abate",
        "irisNote": "No matching authority ID verified on 2026-09-14; exact-name fallback.",
        "cycle": "XLI",
        "supervisorId": "mario-barbareschi"
      },
      {
        "name": "Debora Russo",
        "personalUrl": null,
        "irisId": "rp151443",
        "irisName": "RUSSO, DEBORA",
        "photo": "assets/people/debora-russo.jpg",
        "topic": "Research in progress",
        "id": "debora-russo",
        "cycle": "XXXIX",
        "supervisorId": "nicola-mazzocca"
      },
      {
        "name": "Manfredi Napolitano",
        "personalUrl": null,
        "irisId": null,
        "irisName": "Napolitano, Manfredi",
        "photo": "assets/people/manfredi-napolitano.png",
        "topic": "Research in progress",
        "id": "manfredi-napolitano",
        "irisNote": "No matching authority ID verified on 2026-09-14; exact-name fallback.",
        "cycle": "XXXIX",
        "supervisorId": "nicola-mazzocca"
      },
      {
        "name": "Filippo Ferrandino",
        "personalUrl": null,
        "irisId": "rp172414",
        "irisName": "FERRANDINO, FILIPPO",
        "photo": "assets/people/filippo-ferrandino.jpg",
        "topic": "Research in progress",
        "id": "filippo-ferrandino",
        "cycle": "XXXIX",
        "supervisorId": "alessandro-cilardo"
      },
      {
        "name": "Manuel Maddaluno",
        "personalUrl": null,
        "irisId": "rp166122",
        "irisName": "MADDALUNO, MANUEL",
        "photo": "assets/people/manuel-maddaluno.jpg",
        "topic": "Research in progress",
        "id": "manuel-maddaluno",
        "cycle": "XXXIX",
        "supervisorId": "alessandro-cilardo"
      },
      {
        "name": "Carmine Palmese",
        "personalUrl": null,
        "irisId": null,
        "irisName": "Palmese, Carmine",
        "photo": "assets/people/carmine-palmese.jpg",
        "topic": "Architectures for Fault-Tolerant Quantum Computing Control Stack",
        "id": "carmine-palmese",
        "irisNote": "No matching authority ID verified on 2026-09-14; exact-name fallback.",
        "cycle": "XLI",
        "supervisorId": "alessandro-cilardo"
      },
      {
        "name": "Benedetta Gaia Varriale",
        "personalUrl": null,
        "irisId": null,
        "irisName": "Varriale, Benedetta Gaia",
        "photo": "assets/people/benedetta-gaia-varriale.jpg",
        "topic": "Quality Assurance for AI-Generated Software",
        "id": "benedetta-gaia-varriale",
        "irisNote": "No matching authority ID verified on 2026-09-14; exact-name fallback.",
        "cycle": "XLI",
        "supervisorId": "alessandro-cilardo"
      },
      {
        "name": "Francesco Grimaldi",
        "personalUrl": null,
        "irisId": null,
        "irisName": "Grimaldi, Francesco",
        "photo": "assets/people/francesco-grimaldi.jpg",
        "topic": "Methods, Models and Techniques for Security of Hybrid Physical-Virtual Systems",
        "id": "francesco-grimaldi",
        "irisNote": "rp13495 belongs to a medical researcher with the same name; exclude this profile.",
        "irisExcludeIds": [
          "rp13495"
        ],
        "cycle": "XLI",
        "supervisorId": "massimiliano-rak"
      }
    ]
  },
  {
    "id": "alumni",
    "label": "Alumni",
    "people": [
      {
        "name": "Francesco Flammini",
        "personalUrl": null,
        "irisId": null,
        "irisName": null,
        "photo": null,
        "id": "francesco-flammini"
      },
      {
        "name": "Sara Romano",
        "personalUrl": null,
        "irisId": null,
        "irisName": null,
        "photo": null,
        "id": "sara-romano"
      },
      {
        "name": "Roberto Nardone",
        "personalUrl": null,
        "irisId": null,
        "irisName": null,
        "photo": null,
        "id": "roberto-nardone"
      },
      {
        "name": "Edoardo Fusella",
        "personalUrl": null,
        "irisId": null,
        "irisName": null,
        "photo": null,
        "id": "edoardo-fusella"
      },
      {
        "name": "Giovanni Cozzolino",
        "personalUrl": null,
        "irisId": null,
        "irisName": null,
        "photo": null,
        "id": "giovanni-cozzolino"
      },
      {
        "name": "Salvatore Barone",
        "personalUrl": null,
        "irisId": null,
        "irisName": null,
        "photo": null,
        "id": "salvatore-barone"
      },
      {
        "name": "Mariana Esposito",
        "personalUrl": null,
        "irisId": null,
        "irisName": null,
        "photo": null,
        "id": "mariana-esposito"
      },
      {
        "name": "Alessio Venticinque",
        "personalUrl": null,
        "irisId": null,
        "irisName": null,
        "photo": null,
        "id": "alessio-venticinque"
      },
      {
        "name": "Ermanno Battista",
        "personalUrl": null,
        "irisId": null,
        "irisName": null,
        "photo": null,
        "id": "ermanno-battista"
      },
      {
        "name": "Elisa Maini",
        "personalUrl": null,
        "irisId": null,
        "irisName": null,
        "photo": null,
        "id": "elisa-maini"
      },
      {
        "name": "Ugo Gentile",
        "personalUrl": null,
        "irisId": null,
        "irisName": null,
        "photo": null,
        "id": "ugo-gentile"
      },
      {
        "name": "Vincenzo Schiano di Cola",
        "personalUrl": null,
        "irisId": null,
        "irisName": null,
        "photo": null,
        "id": "vincenzo-schiano-di-cola"
      },
      {
        "name": "Alberto Moriconi",
        "personalUrl": null,
        "irisId": null,
        "irisName": null,
        "photo": null,
        "id": "alberto-moriconi"
      },
      {
        "name": "Camilla Papa",
        "personalUrl": null,
        "irisId": null,
        "irisName": null,
        "photo": null,
        "id": "camilla-papa"
      },
      {
        "name": "Alfio Pappalardo",
        "personalUrl": null,
        "irisId": null,
        "irisName": null,
        "photo": null,
        "id": "alfio-pappalardo"
      },
      {
        "name": "Annarita Drago",
        "personalUrl": null,
        "irisId": null,
        "irisName": null,
        "photo": null,
        "id": "annarita-drago"
      },
      {
        "name": "Lorenzo De Donato",
        "personalUrl": null,
        "irisId": null,
        "irisName": null,
        "photo": null,
        "id": "lorenzo-de-donato"
      },
      {
        "name": "Claudio De Luca",
        "personalUrl": null,
        "irisId": null,
        "irisName": null,
        "photo": null,
        "id": "claudio-de-luca"
      },
      {
        "name": "Daniele Lombardi",
        "personalUrl": null,
        "irisId": null,
        "irisName": null,
        "photo": null,
        "id": "daniele-lombardi"
      },
      {
        "name": "Luca Gallo",
        "personalUrl": null,
        "irisId": null,
        "irisName": null,
        "photo": null,
        "id": "luca-gallo"
      },
      {
        "name": "Domenico Argenziano",
        "personalUrl": null,
        "irisId": null,
        "irisName": null,
        "photo": null,
        "id": "domenico-argenziano"
      },
      {
        "name": "Mirko Gagliardi",
        "personalUrl": null,
        "irisId": null,
        "irisName": null,
        "photo": null,
        "id": "mirko-gagliardi"
      },
      {
        "name": "Innocenzo Mungiello",
        "personalUrl": null,
        "irisId": null,
        "irisName": null,
        "photo": null,
        "id": "innocenzo-mungiello"
      },
      {
        "name": "Raffaele Martino",
        "personalUrl": null,
        "irisId": null,
        "irisName": null,
        "photo": null,
        "id": "raffaele-martino"
      },
      {
        "name": "Stefano Mercogliano",
        "personalUrl": null,
        "irisId": null,
        "irisName": null,
        "photo": null,
        "id": "stefano-mercogliano"
      }
    ]
  }
];

