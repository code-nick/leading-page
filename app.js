const hamBtn = document.querySelector(".ham-btn")
const closeBtn = document.querySelector(".close-btn")
const navSetion = document.querySelector(".section")

hamBtn.addEventListener('click', ()=>{
    console.log("hi there is ham");
    closeBtn.classList.add("dis-block")
    hamBtn.classList.add("dis-none")
    navSetion.classList.remove("dis-none")
    navSetion.classList.add("dis-block")
})
closeBtn.addEventListener('click', ()=>{
    console.log("hi there is close");
    closeBtn.classList.remove("dis-block")
    hamBtn.classList.remove("dis-none")
    navSetion.classList.remove("dis-block")
    navSetion.classList.add("dis-none")

})
