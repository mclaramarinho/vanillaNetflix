export default function NavbarComponent(){
    const nav = document.createElement('nav')
    const colsPerButton = 10/buttons.length;
    const navHTML = `
    <nav class="p-fixed top-0 navbar">
        <div class="row px-2 py-1 navbar_row">
            <div class="col-8 navbar_column">
                <div class="row navbar_column__row">
                    <div class="col-2">
                        <img src="../../assets/logos/N_Logo.png" class="navbar_content__logo" />
                    </div>
                    ${buttons.map(item => 
                        `<a class="col-${colsPerButton} navbar_content__button" href="/html/${item.href}.html">${item.title}</a>`
                    )}
                </div>
            </div>

            <div class="col-4 navbar_column">
                <div class="row navbar_column__row justify-end">

                    <i class="fa-solid fa-magnifying-glass navbar_action__icon font-12"></i>
                    
                    <i class="fa-regular fa-bell navbar_action__icon font-12"></i>
                    
                    <div class="col-1 navbar_action__icon">
                        <div class="row justify-space-between">
                            <div class="col-8">
                                <img src="../../assets/netflix-profile-pic.jpg" class="navbar_profile__pic" />
                            </div>
                            <div class="col-4">
                                <i class="fa-solid fa-sort-down font-white row"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    `
    nav.innerHTML = navHTML
    return nav
}


const buttons = [
    {
        title: 'Home',
        href: 'home'
    },
    {
        title: 'TV Shows',
        href: 'tv-shows'
    },
    {
        title: 'Movies',
        href: 'movies'
    },
    {
        title: 'New & Popular',
        href: 'new-and-popular'
    },
    {
        title: 'My List',
        href: 'home'
    },
    {
        title: 'Browse by Languages',
        href: 'browse-by-languages'
    }, 
]
