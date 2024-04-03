
NavbarComponent()

function NavbarComponent(){
    const navSlot = document.querySelector("#navbar");
    const nav = document.createElement('nav')
    nav.classList.add( "navbar")
    const navHTML = `
        <a href="./index.html">
            <img src="../assets/logos/N_Logo.png" class="navbar_content__logo" />
        </a>

        <div class="navbar_menu__container_mobile">
            <div class="navbar_menu__navigate" id="navbar_menu__navigate">
                <button class="">Navigate</button>
                <i class="fa-solid fa-sort-down font-white row"></i>
            </div>
    
            <ul id="navigate_dropdown__container" class="hidden">
                <li>
                    <a class="navbar_menu__button" href="./html/index.html">Home</a>
                </li>
                <li>
                    <a class="navbar_menu__button" href="./html/all.html?tv-shows">TV Shows</a>
                </li>
                <li>
                    <a class="navbar_menu__button" href="./html/all.html?movies">Movies</a>
                </li>
                <li>
                    <a class="navbar_menu__button" href="./html/my-list.html">My List</a>
                </li>
            </ul>
        </div>

        <div class="navbar_menu__container">
            <a class="navbar_menu__button" href="./html/index.html">Home</a>
            <a class="navbar_menu__button" href="./html/all.html?tv-shows">TV Shows</a>
            <a class="navbar_menu__button" href="./html/all.html?movies">Movies</a>
            <a class="navbar_menu__button" href="./html/my-list.html">My List</a>
        </div>

        <div class="navbar_action__container">
            <div>
                <input type="text" id="search_bar" class="hidden" placeholder="Search for titles...">
                <i class="fa-solid fa-magnifying-glass navbar_action__icon font-12" id="navbar_search__icon"></i>
            </div>

            <i class="fa-regular fa-bell navbar_action__icon font-12"></i>

            <div class="navbar_profile__button navbar_action__icon">
                <img src="../assets/netflix-profile-pic.jpg" class="navbar_profile__pic" />
                <i class="fa-solid fa-sort-down font-white row"></i>
            </div>
        </div>
    `
    nav.innerHTML = navHTML;
    navSlot.appendChild(nav);

    const searchBtn = document.getElementById("navbar_search__icon");
    const searchBar = document.getElementById("search_bar");

    searchBtn.addEventListener("mouseup", e =>{
        searchBar.classList.toggle("hidden")
    })

    const navigateBtn = document.getElementById("navbar_menu__navigate");
    const navigateDD = document.getElementById("navigate_dropdown__container");

    navigateBtn.addEventListener("mouseup", e =>{
        navigateDD.classList.toggle("hidden")
    })
}
