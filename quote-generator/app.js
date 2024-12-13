const APIURL = "https://quotes-api-self.vercel.app/quote";

const quoteSpace = document.querySelector(".quote-space");
const writerName = document.querySelector(".writer-name");

async function getQuote(url) {
  const res = await fetch(url);
  let data = await res.json();

  quoteSpace.innerHTML = `"${data.quote}"`;
  writerName.innerHTML = `- ${data.author}`;

  // console.log(data);
}

function tweet() {
  window.open(`https://twitter.com/intent/tweet?text=${quoteSpace.innerHTML}`, "Tweet Window", "width=600, height=300p");
}