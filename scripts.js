const jokesContainer = document.getElementById("jokes");
const submitbtn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

let getJokes = () => {
    console.log(jokesContainer);
    if (jokesContainer){
    jokesContainer.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        console.log(item);
        jokesContainer.textContent = `${item.joke}`;
        jokesContainer.classList.add("fade");
    });
    console.log(data);
}
}
if(submitbtn){
    submitbtn.addEventListener('click',getJokes);
    console.log("12")

}
getJokes()