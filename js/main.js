const btn = document.querySelector('#dice-btn');
const adviceText = document.querySelector('#advice-text');
const adviceTitle = document.querySelector('#advice-title');
const dice = document.querySelector('#dice');

btn.addEventListener("click", setData)


async function setData() {
    dice.classList.add('animate');
    btn.classList.add('disabled')
    setTimeout(async () => {

        const slip_id = Math.floor(Math.random() * (150 - 1)) + 1;
        const res = await fetch(`https://api.adviceslip.com/advice/${slip_id}`);
        const json = await res.json();
        adviceTitle.innerHTML = json.slip.id;
        adviceText.innerHTML = json.slip.advice;
        dice.classList.remove('animate');
        btn.classList.remove('disabled')
    }, 2000);
}