$(document).ready(function() {

const fieldCodes = [
  'W', 'U', 'B', 'R', 'G'
];

const cardTypes = [
  'terre',
  'creature',
  'incantesimi',
  'artefatti',
  'instantanei',
  'stregonerie'
];

const powerValues = [1, 2, 3, 4, 5];

// Abbiamo creato un oggetto di oggetti, come riferimento
// di una edizione. Se ad esempio scrivo editions['SP']
// allora otterrò tutto un oggetto che descrive
// con più dettagli l'edizione.
// come oggetto di oggetti, può essere navigato solo con il for-in
const editions = {

  'BL': {
      edition: 'Boolean',
      rarity: 'blue'
  },

  'SP': {
      edition: 'Special',
      rarity: 'red'
  }

}


const cards = [
  // carta 1
  {
  cardName: 'Grizzly Bears',

  cost: {
    genericCostNumber: 1,
    costFields: [
      // colors array con riferimento a fieldCodes
      fieldCodes[0],  // 'W',  - un suo riferimento
      fieldCodes[2]   // 'B'
    ],
  },

  picture: 'images/i.png',
  cardType: cardTypes[1],
  cardObject: 'Bear',

  editionType: editions['BL'],

  description: 'Lorem ipsum',
  story: 'Naltro Lorem Ipsum',

  score: {
    power: 2,  // filtrarlo per power
    toughness: 2
  }

  },
  {
    // carta 2
    cardName: 'Sviluppatore guerriero',
    cost: {
      genericCostNumber: 3,
      costFields: [
        // colors array con riferimento a fieldCodes
        fieldCodes[2],
        fieldCodes[3]
      ],
    },

    picture: 'images/g.png',  // da inserire immagine
    cardType: cardTypes[1],
    cardObject: 'Bear',

    editionType: editions['BL'],

    description: 'Lo sviluppatore guerriero spezza i byte in bit!',
    story: 'Lo sviluppatore guerriero è una forma di essere umano evoluto.',

    score: {
      power: 5,  
      toughness: 3
    }

    },
    {
      // carta 3
      cardName: 'Mewtwo',
      cost: {
        genericCostNumber: 6,
        costFields: [
          // colors array con riferimento a fieldCodes
          fieldCodes[2],
          fieldCodes[3]
        ],
      },

      picture: 'images/g.png',  // da inserire immagine
      cardType: cardTypes[1],
      cardObject: 'Bear',

      editionType: editions['BL'],

      description: 'Lo sviluppatore guerriero spezza i byte in bit!',
      story: 'Lo sviluppatore guerriero è una forma di essere umano evoluto.',

      score: {
        power: 5,
        toughness: 3
      }
      },
]

 console.log(cards);

  function filterByPower(powerValue, array){
    return filteredArray = array.filter((element)=>{
      return element.score.power === powerValue
    });
  };


  function render(DOMElementId, array) {
    const cardListHTMLElement = document.getElementById(DOMElementId);

    array.forEach((element) => {

      cardListHTMLElement.innerHTML += `<li>${element.cardName}</li>`
    });
  };


  function renderSelect(DOMElementId, array) {
    const select = document.getElementById(DOMElementId);

    array.forEach((element) => {
      console.log(element);
      select.innerHTML += `<option value="${element}">${element} </option>`;
      });
      console.log(select);
      console.log(array);
  }


    render('lista-carte', cards);
    renderSelect('powerSelect', powerValues);
    renderSelect('typeSelect', cardTypes);

    //eventi da registrare
    $('#powerSelect').change(function () {
      const selectValue = parseInt($(this).val());
      const filteredArray = filterByPower(selectValue, cards);
      render('listaCarte', filteredArray)
    });
});
