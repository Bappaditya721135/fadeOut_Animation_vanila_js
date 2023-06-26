// fade link animation 


const parent = document.querySelector(".nav-bar")

const fadeInOut = (e, opacity) => {
    if(e.target.classList.contains("links")) {
        const link = e.target;
        const siblings = [...link.closest(".nav-links").querySelectorAll(".links")]
        const logo = document.querySelector(".logo")
        siblings.forEach(el => {
            if(el !== link) {
                el.style.opacity = `${opacity}`
            }
        })
        logo.style.opacity = `${opacity}`
    }
}

parent.addEventListener("mouseover", (e) => {
    fadeInOut(e, 0.5)
})

parent.addEventListener("mouseout", (e) => {
    fadeInOut(e, 1)
})