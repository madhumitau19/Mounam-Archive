const enter=document.getElementById("enter");
const intro=document.getElementById("intro");
const main=document.getElementById("main");
intro.classList.remove("hide");
main.classList.add("hide");
enter.addEventListener("click", ()=> {
    intro.classList.add("hide");
    main.classList.remove("hide");
})