const navSlot = document.querySelector("#navbar_details__page");


function NavbarComponent(){
    const nav = document.createElement('nav')
    nav.classList.add("navbar")
    const navHTML = `
        <div class="navbar_details__container">
            <a href="./index.html">
                <i class="fa-solid fa-chevron-left color-white font-15"></i>
            </a>  
            <a href="./index.html">
                <img src="../assets/logos/N_Logo.png" class="navbar_content__logo" />
            </a>  
        </div>       
    `
    nav.innerHTML = navHTML
    return nav
}

navSlot.appendChild(NavbarComponent());