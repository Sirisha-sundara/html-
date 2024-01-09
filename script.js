const quotesContainer = document.getElementById("quote");
const submitbtn = document.getElementById("btn");
const url = "https://api.quotable.io/random";

let getQuote = () => {
    console.log(quotesContainer)
    if (quotesContainer){
    quotesContainer.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then((item) => {
        console.log(item);
        quotesContainer.textContent = `${item.joke}`;
        quotesContainer.classList.add("fade");
    });
    console.log(data);
}
}
if(submitbtn){
    submitbtn.addEventListener("click", getQuote);
    console("13");

}
getQuote()   