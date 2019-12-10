// F1 Standings Section

// Drivers Standings 

// Mercedes

var ham = {
  x: ['L.Hamilton'],
  y: [413],
  type: 'bar',
  text: 413,
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    opacity: 0.7
  }
};

var bot = {
  x: ['V.Bottas'],
  y: [326],
  type: 'bar',
  text: 326,
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    opacity: 0.7
  }
};


// Ferrari

var vet = {
  x: ['S.Vettel'],
  y: [240],
  type: 'bar',
  text: 240,
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    opacity: 0.7
  }
};

var lec = {
  x: ['C.Leclerc'],
  y: [264],
  type: 'bar',
  text: 264,
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    opacity: 0.7
  }
};


// Red Bull 

var ver = {
  x: ['M.Verstappen'],
  y: [278],
  type: 'bar',
  text: 278,
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    opacity: 0.7
  }
};

var alb = {
  x: ['A.Albon'],
  y: [92],
  type: 'bar',
  text: 92,
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    opacity: 0.7
  }
};


// Mclaren

var sai = {
  x: ['C.Sainz'],
  y: [96],
  type: 'bar',
  text: 96,
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    opacity: 0.7
  }
};

var nor = {
  x: ['L.Norris'],
  y: [49],
  type: 'bar',
  text: 49,
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    opacity: 0.7
  }
};


// Renault

var ric = {
  x: ['D.Ricciardo'],
  y: [54],
  type: 'bar',
  text: 54,
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    opacity: 0.7
  }
};

var hul = {
  x: ['N.Hulkenberg'],
  y: [37],
  type: 'bar',
  text: 37,
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    opacity: 0.7
  }
};


// Toro Rosso

var gas = {
  x: ['P.Gasly'],
  y: [95],
  type: 'bar',
  text: 95,
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    opacity: 0.7
  }
};

var kvy = {
  x: ['D.Kvyat'],
  y: [37],
  type: 'bar',
  text: 37,
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    opacity: 0.7
  }
};

// Racing Point

var per = {
  x: ['S.Perez'],
  y: [52],
  type: 'bar',
  text: 52,
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    opacity: 0.7
  }
};

var str = {
  x: ['L.Stroll'],
  y: [21],
  type: 'bar',
  text: 21,
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    opacity: 0.7
  }
};

// Alfa Romero

var rai = {
  x: ['K.Räikkönen'],
  y: [43],
  type: 'bar',
  text: 43,
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    opacity: 0.7
  }
};

var gio = {
  x: ['A.Giovinazzi'],
  y: [14],
  type: 'bar',
  text: 14,
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    opacity: 0.7
  }
};


// Haas

var gro = {
  x: ['R.Grojean'],
  y: [8],
  type: 'bar',
  text: 8,
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    opacity: 0.7
  }
};

var mag = {
  x: ['K.Magnussen'],
  y: [20],
  type: 'bar',
  text: 20,
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    opacity: 0.7
  }
};

// Williams


var rus = {
  x: ['G.Russell'],
  y: [0],
  type: 'bar',
  text: 0,
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    opacity: 0.7
  }
};

var kub = {
  x: ['R.Kubica'],
  y: [1],
  type: 'bar',
  text: 1,
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    opacity: 0.7
  }
};

// Change Order
var data = [ham, bot, ver, lec, vet, sai, gas, alb, ric, per, 
  nor, rai,  kvy, hul, str, mag, gio, gro, kub, rus ];



var layout = {
  font: {
    size: 18,
    color: '#000000',
  },
  showlegend: false,
  plot_bgcolor:"#ededed",
  colorway: [
    // Hamilton
    '#46d2be',

    // Bottas
    '#46d2be',
    
    // Verstappen
    '#3d78fa',

    // Leclerc 
    '#dc3730',

    // Vettel
    '#dc3730',

    // Sainz
    '#fc893a',

    // Gasly
    '#4999fa',

    // Albon
    '#3d78fa',

    // Ricciardo
    '#fce93e',

    // Perez
    '#f596c8',

    // Norris
    '#fc893a',

    // Raikonnen
    '#9b241f',

    // Kvyat
    '#4999fa',

    // Hulkenberg
    '#fce93e',

    // Stroll
    '#f596c8',

    // Magnussen
    '#bd9e56',

    // Giovinazzi
    '#9b241f',

    // Grosjean
    '#bd9e56',

    // Kubica
    '#cdd1e4',

    // Russell
    '#cdd1e4'
  
  ],

  margin: {
    l: 0,
    t: 0,
    r: 0,
    b: 0
  },
  yaxis: {
    automargin: true
  },
  xaxis: {
    automargin: true
  }
};

// Make chart responsive by adding: {responsive: true}
Plotly.newPlot('chart_drivers', data, layout, {
  responsive: true
});

// .................................................................



// Constructor Standings Section

// Mercedes

var mer = {
  x: ['Mercedes'],
  y: [739],
  type: 'bar',
  text: 739,
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    opacity: 0.7,
  }
};


// Ferrari

var fer = {
  x: ['Ferrari'],
  y: [504],
  type: 'bar',
  text: 504,
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    opacity: 0.7
  }
};


// Red Bull

var red = {
  x: ['Red Bull Racing '],
  y: [417],
  type: 'bar',
  text: 417,
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    opacity: 0.7
  }
};


// Mclaren

var mcl = {
  x: ['Mclaren'],
  y: [145],
  type: 'bar',
  text: 145,
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    opacity: 0.7
  }
};


// Renault

var ren = {
  x: ['Renault'],
  y: [91],
  type: 'bar',
  text: 91,
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    opacity: 0.7
  }
};


//  Toro Rosso

var tor = {
  x: ['Toro Rosso'],
  y: [85],
  type: 'bar',
  text: 85,
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    opacity: 0.7
  }
};


// Racing Point

var rac = {
  x: ['Racing Point'],
  y: [73],
  type: 'bar',
  text: 73,
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    opacity: 0.7
  }
};


// Alfa Romero

var alf = {
  x: ['Alfa Romeo'],
  y: [57],
  type: 'bar',
  text: 57,
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    opacity: 0.7
  }
};


// Haas

var haa = {
  x: ['Haas'],
  y: [28],
  type: 'bar',
  text: 28,
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    opacity: 0.7
  }
};


// Williams

var wil = {
  x: ['Williams'],
  y: [1],
  type: 'bar',
  text: 1,
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    opacity: 0.7
  }
};


var data = [mer, fer, red, mcl, ren, tor, rac, alf, haa, wil];

// Hide the trace legends on the top right of chart
var secondlayout = {
  font: {
    size: 18,
    color: '#000000',
  },
  showlegend: false,
  plot_bgcolor:"#ededed",
  colorway: [
    
    // Mercedes
    '#46d2be', 
    
    // Ferrari
    '#dc3730', 
    
    // Red Bull 
    '#3d78fa',
    
    // Mclaren
    '#fc893a',
    
    // Renault
    '#fce93e',
    
    // Toro Rosso
    '#4999fa', 
    
    // Racing Point
    '#f596c8',
    
    // Alfa Romero
    '#9b241f',
    
    // Haas
    '#bd9e56',
    
    // Williams
    '#cdd1e4'
  ],

  margin: {
    l: 0,
    t: 0,
    r: 0,
    b: 0
  },
  yaxis: {
    automargin: true
  },
  xaxis: {
    automargin: true
  }
};

// Make chart responsive by adding: {responsive: true}
Plotly.newPlot('chart_constructor', data, secondlayout, {
  responsive: true
});