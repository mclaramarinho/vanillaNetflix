import NavbarComponent from "./components/navbar.js"


const navSlot = document.getElementById("navbar");

navSlot.appendChild(NavbarComponent())


const homeVideoPlayer = document.getElementById("home_videoplayer");
homeVideoPlayer.addEventListener("ended", (e) => {
    homeVideoPlayer.classList.add("d-none");
})
homeVideoPlayer.addEventListener("play", (e) => {
    homeVideoPlayer.classList.contains('d-none') && homeVideoPlayer.classList.remove("d-none");
})