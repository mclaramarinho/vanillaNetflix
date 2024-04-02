const homeVideoSectionEl = document.getElementById("video_section");

function HomeVideoSection(){
    const sectEl = document.createElement("section");
    sectEl.classList.add("video_section");
    sectEl.innerHTML = `
    <div class="overlay"></div>
            
    <img id="video_poster" class="video_poster d-block" src="../assets/thumbnails/the-blacklist.png" alt="">
    
    <video autoplay id="home_videoplayer" class="video_player d-none">
        <source src="../assets/trailers/the-blacklist-trailer.mp4" type="video/mp4" />
    </video>
    
    <div class="show_title__container">
        <div class="show_title__inner">
            <img src="../assets/logos/The-Blacklist-Logo.webp" alt="">
            <p>After turning himself in, a brilliant fugitive offers to help the FBI bag other baddies, but only if rookie profiler Elizabeth Keen is his partner.</p>
            <div class="action_buttons__container">
                <div class="action_button watch_button__container">
                    <i class="fa-solid fa-play"></i>
                    <a href="">Assistir</a>
                </div>
                <div class="action_button moreinfo_button__container">
                    <i class="bi bi-info-circle"></i>
                    <a href="">More Info</a>
                </div>
            </div>
        </div>
    </div>`;
    return sectEl
}

homeVideoSectionEl.append(HomeVideoSection())


const homeVideoPlayer = document.getElementById("home_videoplayer");
const homeVideoPoster = document.getElementById("video_poster");


homeVideoPlayer.addEventListener("play", (e) => {
    homeVideoPlayer.classList.contains('d-none') && homeVideoPlayer.classList.remove("d-none");
    
    homeVideoPoster.classList.contains('d-block') && homeVideoPoster.classList.remove("d-block");
    homeVideoPoster.classList.add("d-none");
})


homeVideoPlayer.addEventListener("ended", (e) => {
    homeVideoPlayer.classList.add("d-none");

    homeVideoPoster.classList.add("d-block");
    homeVideoPoster.classList.contains('d-none') && homeVideoPoster.classList.remove("d-none")
})