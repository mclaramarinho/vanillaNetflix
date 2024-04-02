import {tvShows} from '../lists/tvShows.js'
import {movies} from '../lists/movies.js'

const params = window.location.href.split('?')[1].split("&")

const typeMedia = params[0]
const id = params[1].split('=')[1]

const titleData = typeMedia === 'tvShow' ? findTvShow() : findMovie();

let casting = "";
titleData.starring && titleData.starring.map(name => casting += `${name},`);


MovieDetails() 

function MovieDetails(){
    const detailsPageEl = document.getElementById("details__page");

    const movieContainerEl = document.createElement('div');
    movieContainerEl.setAttribute("class", "movie_details__container");

    movieContainerEl.innerHTML = `
                <img src="../assets/${titleData.posterUrl}" alt="">
                <div id="movie_info__container">
                    <h1>${titleData.title}</h1>
                    <div id="small_info__container">
                        <div id="year_info__container" class="small_info">
                            <i class="fa-regular fa-calendar"></i>
                            <p>${titleData.year}</p>
                        </div>

                        <div id="time_info__container" class="small_info">
                            <i class="fa-solid fa-stopwatch"></i>
                            <p style="text-wrap: nowrap;">${typeMedia === 'tvShow' ? titleData.seasons + ' seasons' : titleData.duration}</p>
                        </div>

                        <!-- <div id="rating_info__container">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div> -->
                    </div>

                    <div class="chip">${typeMedia === 'tvShow' ? 'tv show' : 'movie'}</div>

                    <p class="font-12"><b>Director: </b>${titleData.director}</p>
                    <p class="font-12"><b>Starring: </b>${casting.slice(0, casting.length-2)}</p>

                    <p class="font-12">${titleData.synopsis}</p>
                    
                    <div id="movie_details__actions">
                        <i class="fa-solid fa-triangle-exclamation"></i>
                        <i class="fa-regular fa-heart"></i>
                        <a target="_blank" href="${titleData.trailerURL}">Ver Trailer <i class="fa-solid fa-chevron-right"></i></a>
                    </div>
                </div>
                <div id="comments_container">
                    <h1>Reviews</h1>
                    
                    <p>No reviews at the moment</p>
                    <form action="" id="comment_input__area">
                        <textarea name="" id="comment" cols="30" rows="10" placeholder="Write a review"></textarea>
                    </form>
                    <a href="" id="submit_button"><i class="fa-regular fa-comment-dots"></i> Submit</a>
                </div>
            </div>
    `;
    detailsPageEl.append(movieContainerEl)
}

function TvShowDetails(){
    const detailsPageEl = document.getElementById("details__page");

    const tvShowContainerEl = document.createElement('div');
    tvShowContainerEl.setAttribute("class", "movie_details__container");

    tvShowContainerEl.innerHTML = `
                <img src="../assets/${titleData.posterUrl}" alt="">
                <div id="movie_info__container">
                    <h1>${titleData.title}</h1>
                    <div id="small_info__container">
                        <div class="small_info">
                            <i class="fa-regular fa-calendar"></i>
                            <p>${titleData.year}</p>
                        </div>

                        <div class="small_info">
                            <i class="fa-solid fa-stopwatch"></i>
                            <p>${titleData.seasons}</p>
                        </div>

                        <!-- <div id="rating_info__container">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div> -->
                    </div>
                    <div class="chip">tv show</div>
                    <p class="font-12"><b>Director: </b>${titleData.director}</p>
                    <p class="font-12"><b>Starring: </b>${casting.slice(0, casting.length-2)}</p>

                    <p class="font-12">${titleData.synopsis}</p>
                    
                    <div id="movie_details__actions">
                        <i class="fa-solid fa-triangle-exclamation"></i>
                        <i class="fa-regular fa-heart"></i>
                        <a target="_blank" href="${titleData.trailerURL}">Ver Trailer <i class="fa-solid fa-chevron-right"></i></a>
                    </div>
                </div>
                <div id="comments_container">
                    <h1>Reviews</h1>
                    
                    <p>No reviews at the moment</p>
                    <form action="" id="comment_input__area">
                        <textarea name="" id="comment" cols="30" rows="10" placeholder="Write a review"></textarea>
                    </form>
                    <a href="" id="submit_button"><i class="fa-regular fa-comment-dots"></i> Submit</a>
                </div>
            </div>
    `;
    detailsPageEl.append(tvShowContainerEl)
}


function findTvShow(){
    return tvShows.filter(item => item.id === id)[0] || undefined;
}

function findMovie(){
    return movies.filter(item => item.id === id)[0] || undefined;
}
