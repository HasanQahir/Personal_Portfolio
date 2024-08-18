let hoveringOver = false;
let activeAnims = false;
// Cycle through programming languages in one direction
function devTitle() {
    const langs = document.getElementsByClassName('knownLang')
    const langBlock = document.getElementById('blockLang');
    let beforeLang = langs[0];
    let afterLang = langs[1];

    // Timer ensures the transition can resolve before they disappear
    if (!hoveringOver || !activeAnims) {
    beforeLang.classList.add('invisible')
    afterLang.classList.remove('invisible')
    setTimeout(() => {
    langBlock.removeChild(beforeLang);
    langBlock.appendChild(beforeLang);
    }, 500);
    }

    // console.log('lang before: ', beforeLang.textContent)
    // console.log('lang after: ', afterLang.textContent)
}

const rotatingLangs = document.getElementById('blockLang');
const arrow = document.getElementById('expandTitleOption');
let currentInterval;

rotatingLangs.addEventListener('mouseover', () => {
    hoveringOver = true;
    arrow.classList.add('animateArrow');
    setTimeout(arrow.classList.remove('animateArrow'), 500);
    currentInterval = setInterval(() => {
        arrow.classList.add('animateArrow');
        setTimeout(arrow.classList.remove('animateArrow'), 500);
    }, 1000);
});

rotatingLangs.addEventListener('mouseout', (currentInterval) => {
    hoveringOver = false;
    clearInterval(currentInterval)
    arrow.classList.remove('animateArrow');

});

arrow.addEventListener('mouseover', () => {
    hoveringOver = true;
    arrow.classList.add('animateArrow');
    setTimeout(arrow.classList.remove('animateArrow'), 500);
    currentInterval = setInterval(() => {
        arrow.classList.add('animateArrow');
        setTimeout(arrow.classList.remove('animateArrow'), 500);
    }, 1000);
});
arrow.addEventListener('mouseout', () => {
    hoveringOver = false;
    clearInterval(currentInterval)
    arrow.classList.remove('animateArrow');

});

const langTimer = setInterval(devTitle, 2500);

