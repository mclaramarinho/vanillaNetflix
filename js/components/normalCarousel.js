import { movies } from "../lists/movies.js";
import { tvShows } from "../lists/tvShows.js";


const tvShowCarouselContainerEl = document.getElementById('tv_shows__container');
const moviesCarouselContainerEl = document.getElementById('movies_container');


function TitleCardList(list, movieOrTv){
    
    list.map((t, i) => {
        const tracker = document.getElementById(`${movieOrTv}_carousel__track`);

        const new_card = document.createElement('a');

        new_card.classList.add('carousel_item__container')
        const filename = movieOrTv === 'movies' ? 'movie' : 'tvShow';

        new_card.setAttribute("href", `./details.html?${filename}&id=${t.id}`)

        new_card.innerHTML = `
                <div>
                    <img class="normal_carousel__img" id="${movieOrTv}-${i}-img" src="../assets/${t.thumbnailUrl}" alt="">
                    <div class="carousel_item__info">
                        <p><i class="fa-regular fa-calendar"></i> ${t.year}</p>
                        <p><i class="fa-solid fa-stopwatch"></i> ${filename === 'movie' ? t.duration : (t.seasons + ' seasons')}</p>
                    </div>
                </div>
                `
        tracker.append(new_card)

        const currentImg = document.getElementById(`${movieOrTv}-${i}-img`);
        currentImg.addEventListener("mouseenter", e => {
            currentImg.classList.toggle('hovered_img')
        })
        currentImg.addEventListener("mouseleave", e => {
            currentImg.classList.toggle('hovered_img')
        })
    })
}

function NormalCarousel(props){
    const div = document.createElement('div');

    const {sectionTitle, titlesList, componentToAppend, movieOrTv} = props;

    div.innerHTML = `
        <h1>${sectionTitle}</h1>
        <div class="carousel">
            <span id="${movieOrTv}_carousel_controller__prev" class="carousel_controller__prev carousel_controller">
                <i class="fa-solid fa-chevron-left"></i>
            </span>

            <div class="normal_carousel_track carousel_track" id="${movieOrTv}_carousel__track"></div>
            
            <span id="${movieOrTv}_carousel_controller__next" class="carousel_controller__next carousel_controller">
                <i class="fa-solid fa-chevron-right"></i>
            </span>
        </div>
    `;
    componentToAppend.append(div);
    TitleCardList(titlesList, movieOrTv);
    
    const track = document.getElementById(`${movieOrTv}_carousel__track`);

    document.getElementById(`${movieOrTv}_carousel_controller__next`).addEventListener("mouseup", e =>{
        track.scrollBy((track.scrollWidth/4), 0)
    })
    document.getElementById(`${movieOrTv}_carousel_controller__prev`).addEventListener("mouseup", e =>{
        track.scrollBy(-(track.scrollWidth/4), 0)
    })
}

const moviesProps = {
    sectionTitle: "Mindblowing Movies",
    titlesList: movies,
    componentToAppend: moviesCarouselContainerEl,
    movieOrTv: "movies"
}

const tvShowsProps = {
    sectionTitle: "Critically Acclaimed US TV Dramas",
    titlesList: tvShows,
    componentToAppend: tvShowCarouselContainerEl,
    movieOrTv: "tv-shows"
}

NormalCarousel(moviesProps)
NormalCarousel(tvShowsProps)





