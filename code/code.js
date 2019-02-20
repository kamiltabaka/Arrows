const button = document.querySelector(".hoverView");

const allLook = document.querySelectorAll(".fontStyle");
const allTime = document.querySelectorAll(".time");

const thirdArrow = document.querySelector(".fa-lock");
const fifthArrow = document.querySelector(".fa-asterisk");

button.addEventListener("click", () => {
    button.classList.toggle("buttonEffect");
    thirdArrow.classList.toggle("hoverAnimationNone");
    fifthArrow.classList.toggle("hoverAnimationSteps");

    allLook.forEach(oneLook => {
        oneLook.classList.toggle("fontStyle");
        oneLook.classList.toggle("hoverEffect");
    });
    allTime.forEach(oneTime => {
        oneTime.classList.toggle("hoverTimeEffect")
    });
});