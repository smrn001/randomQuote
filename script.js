const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";
// const api_url = "https://api.quotable.io/random?tags=technology,famous-quotes";

async function getQuote() {
  const response = await fetch(api_url);
  const data = await response.json();
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}

getQuote();
