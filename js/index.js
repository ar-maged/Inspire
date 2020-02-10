new TypeIt('#author', {
  speed: 50,
  strings: 'Click somewhere.',
  cursorChar: '/',
}).go();

const quoteElement = document.querySelector('#quote');
const authorElement = document.querySelector('#author');

const quotes = [
  {
    text:
      'Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).',
    author: 'Mark Twain',
  },
  {
    text: 'Knowing yourself is the beginning of all wisdom.',
    author: 'Aristotle',
  },
  {
    text: 'May you live every day of your life.',
    author: 'Jonathan Swift',
  },
];

let i = 0;

setInterval(function() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = '#' + randomColor;

  const quote = quotes[i % quotes.length];

  quoteElement.textContent = '“' + quote.text + '”';

  new TypeIt('#author', {
    speed: 50,
    strings: quote.author,
    cursorChar: '/',
  }).go();

  i++;
}, 2500);
