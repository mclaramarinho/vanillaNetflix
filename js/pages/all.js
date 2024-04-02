import { movies } from "../lists/movies.js";
import { tvShows } from "../lists/tvShows.js";


const typeMedia = window.location.href.split('?')[1]
const list = typeMedia === 'tv-shows' ? tvShows : movies;

ListAll()

function ListAll(){
    const mainCointainerEl = document.getElementById("list_all__container");

    mainCointainerEl.innerHTML = `
        <h1>${typeMedia === 'movies' ? 'Movies' : 'Tv Shows'}</h1>
        <div id="movie_list__container" class="movie_list__container"></div>
    `
    TitleCardList(list, typeMedia)

}

function TitleCardList(list, movieOrTv){
    
    list.map((t, i) => {

        const new_card = document.createElement('a');

        new_card.classList.add('movie_item__container')
        const filename = typeMedia === 'movies' ? 'movie' : 'tvShow';

        console.log(filename);

        new_card.setAttribute("href", `./details.html?${filename}&id=${t.id}`)

        console.log(new_card.getAttribute("href"));

        new_card.innerHTML = `
                    <img class="normal_carousel__img" id="${movieOrTv}-${i}-img" src="../assets/${t.thumbnailUrl}" alt="">
                    <div class="carousel_item__info">
                        <p><i class="fa-regular fa-calendar"></i> ${t.year}</p>
                        <p><i class="fa-solid fa-stopwatch"></i> ${filename === 'movie' ? t.duration : (t.seasons + ' seasons')}</p>
                    </div>
                `
        const listContainer = document.getElementById("movie_list__container");

        listContainer.append(new_card)

        const currentImg = document.getElementById(`${movieOrTv}-${i}-img`);
        currentImg.addEventListener("mouseenter", e => {
            currentImg.classList.toggle('hovered_img')
        })
        currentImg.addEventListener("mouseleave", e => {
            currentImg.classList.toggle('hovered_img')
        })
    })
}