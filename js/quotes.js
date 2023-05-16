const quotes = [
  {
    quote: "The journey of a thousand miles begins with a single step.",
    author: "Lao Tzu",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "Don’t judge each day by the harvest you reap but by the seeds that you plant.",
    author: "Robert Louis Stevenson",
  },
  {
    quote:
      "The most important thing is to enjoy your life - to be happy - it’s all that matters.",
    author: "Audrey Hepburn",
  },
  {
    quote:
      "The more that you read, the more things you will know. The more that you learn, the more places you’ll go.",
    author: "Dr. Seuss",
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "The person who says it cannot be done should not interrupt the person who is doing it.",
    author: "Chinese proverb",
  },
  {
    quote:
      "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    quote:
      "The person who moves a mountain begins by carrying away small stones. ",
    author: "Confucius",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
