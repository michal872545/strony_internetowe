"use strict";

let avatar = document.getElementById("avatar");
let name = document.getElementById("name");
let desc = document.getElementById("description");
let toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", function(){
    // document.body.classList.remove("hero");
    // document.body.classList.add("villain");
    let isHero = document.body.classList.contains("hero");
    if (isHero) {
        document.body.classList.replace("hero", "villain");
        name.textContent = "Shadow Villain";
        desc.textContent = "Tryb: Villain";
        avatar.src = "https://api.dicebear.com/9.x/adventurer/svg?seed=cbab"
        avatar.style.borderColor = "#ef4444"
        toggleBtn.textContent = "Wróć do bohatera"
    }
    else{   
        document.body.classList.remove("villain");
        document.body.classList.add("hero"); 
        name.textContent = "Felix Hero";
        desc.textContent = "Tryb: Hero";
        avatar.src = "https://api.dicebear.com/9.x/adventurer/svg?seed=Felix"
        avatar.style.borderColor = "#3b82f6"
        toggleBtn.textContent = "Zmień tryb"
    }
    
});
