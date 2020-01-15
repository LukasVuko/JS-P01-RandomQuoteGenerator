/******************************************
project 1 - A Random Quote Generator
******************************************/

// Quotes array

let quotes = [
  {
    quote: 'Insert quote here',
    source: 'Lukas Vukovich',
    citation: 'Downtown Toronto',
    year: 2021,
    tag: 'Funny'
  },
  {
    quote: 'Insert quote here2',
    source: 'Lukas Vukovich2',
    citation: 'Downtown Toronto2',
    year: 2022,
    tag: 'Politics'
  },
  {
    quote: 'Insert quote here3',
    source: 'Lukas Vukovich3',
    citation: 'Downtown Toronto3',
    year: 2023,
    tag: 'Technology'
  },
  {
    quote: 'Insert quote here4',
    source: 'Lukas Vukovich4',
    citation: 'Downtown Toronto4',
    year: 2024,
    tag: 'Economics'
  },
  {
    quote: 'Insert quote here5',
    source: 'Lukas Vukovich5',
    citation: 'Downtown Toronto5',
    year: 2025,
    tag: 'Dark'
  }
];

// Gets a random quote

function getRandomQuote() {
  let randomNum = Math.floor(Math.random() * quotes.length) + 1;
  return quotes[randomNum - 1];
}

// Prints a random quote to the page
var colorTimer = setInterval(printQuote, 20000);

function printQuote() {
  let quote = getRandomQuote();
  let html = '';

  html = '<p class="quote">' + quote.quote + '</p>';
  html += '<p class="source">' + quote.source;
  if (quote.citation) {
    html += '<span class="citation">' + quote.citation + '</span>';
  }
  if (quote.year) {
    html += '<span class="year">' + quote.year + '</span>';
  }
  if (quote.tag) {
    html += '<span class="tag">' + quote.tag + '</span>';
  }
  html += '</p>';

  document.getElementById('quote-box').innerHTML = html;
  setColor();

  colorTimer = clearInterval(colorTimer);
  colorTimer = setInterval(printQuote, 20000);
}

// Click the event listener to print to the page

document
  .getElementById('load-quote')
  .addEventListener('click', printQuote, false);

// Helpers
function getRandomColor() {
  let red = Math.floor(Math.random() * 255) + 1;
  let green = Math.floor(Math.random() * 255) + 1;
  let blue = Math.floor(Math.random() * 255) + 1;
  return 'rgb(' + red + ',' + green + ',' + blue + ')';
}
function setColor() {
  document.getElementsByTagName(
    'body'
  )[0].style.backgroundColor = getRandomColor();
}
