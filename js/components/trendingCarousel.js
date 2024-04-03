import {top10List} from "../lists/top10.js";

const trendingCarouselEl = document.getElementById('trending_now__container');

function TitleCardTop10(){
    top10List.map((t, i) => {
        const viewbox1 = i === 0 ? -20 : 0; 
        const tracker = document.getElementById("carousel_track");

        const new_card = document.createElement('a');

        new_card.classList.add('carousel_item__container')
        if (i === 9){
            new_card.classList.add('rank_10__container')
        }
        
        new_card.setAttribute("href", ('./html/details.html?tvid='+t.id))

        new_card.innerHTML = `
                    <svg id="rank-${i+1}" viewBox="${viewbox1} 0 70 154" class="carousel_item__number">
                        <path stroke="#595959" stroke-linejoin="square" stroke-width="4" d="${t.rankImgPath}"></path>
                    </svg>

                    <img class="carousel_item__img" src="../assets/top10/tn/${t.thumbnailUrl}" alt="">
                `
        tracker.append(new_card)
    })
}

function TrendingCarousel(){
    const div = document.createElement('div');

    div.innerHTML = `
        <h1>Top 10 TV Shows Today</h1>

        <div class="carousel">
            <span id="carousel_controller__prev" class="carousel_controller__prev carousel_controller trend_carousel">
                <i class="fa-solid fa-chevron-left"></i>
            </span>

            <div class="carousel_track" id="carousel_track"></div>
            
            <span id="carousel_controller__next" class="carousel_controller__next carousel_controller trend_carousel">
                <i class="fa-solid fa-chevron-right"></i>
            </span>
        </div>
    `

    return div
} 


trendingCarouselEl.append(TrendingCarousel());
TitleCardTop10()
const track = document.getElementById("carousel_track");

document.getElementById("carousel_controller__next").addEventListener("mouseup", e =>{
    document.getElementById("carousel_track").scrollBy((track.scrollWidth/4), 0)
})
document.getElementById("carousel_controller__prev").addEventListener("mouseup", e =>{
    document.getElementById("carousel_track").scroll(-(track.offsetWidth/4), 0)
})