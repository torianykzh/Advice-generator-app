const advId = document.getElementById("adv-id")
const advText = document.getElementById("adv-text")
const btn = document.querySelector('.btn')
const divider = document.querySelector(".divider")

async function getAdvise(){
    const res = await fetch("https://api.adviceslip.com/advice").then(res => res.json()).then(res => showAdvise(res)).catch(err => console.log(`error ${err}`)); 
}

function showAdvise(data){
    advId.innerText = `ADVICE # ${data.slip.id}`
    advText.innerText = `"${data.slip.advice}"`

}

btn.addEventListener('click', getAdvise)
document.addEventListener("DOMContentLoaded", getAdvise())
