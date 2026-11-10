/* =====================================
   CINÉVERSE - JAVASCRIPT
===================================== */

// 1. OMDb API KEY

const OMDB_API_KEY = "a4843aa8";


// 2. MOVIE DATABASE
// Title, Language, Genre, Category, Year, Rating, Price, IMDb ID

const movies = [

    // FEATURED ENGLISH ANIMATION AND FAMILY MOVIES

    ["Wish Dragon","English","Animation","Hollywood",2021,7.2,160,"tt5562070"],
    ["Miraculous: Ladybug & Cat Noir, The Movie","English","Animation","Hollywood",2023,6.1,160,"tt10364034"],
    ["Sing","English","Animation","Hollywood",2016,7.1,150,"tt3470600"],
    ["Charlie and the Chocolate Factory","English","Fantasy","Hollywood",2005,6.7,150,"tt0367594"],
    ["Wonka","English","Fantasy","Hollywood",2023,6.9,170,"tt6166392"],
    ["Kung Fu Panda","English","Animation","Hollywood",2008,7.6,150,"tt0441773"],
    ["Hotel Transylvania","English","Animation","Hollywood",2012,7.0,150,"tt0837562"],

    ["Frozen","English","Animation","Hollywood",2013,7.4,160,"tt2294629"],
    ["Frozen II","English","Animation","Hollywood",2019,6.8,160,"tt4520988"],
    ["Coco","English","Animation","Hollywood",2017,8.4,160,"tt2380307"],
    ["Inside Out","English","Animation","Hollywood",2015,8.1,160,"tt2096673"],
    ["Inside Out 2","English","Animation","Hollywood",2024,7.5,170,"tt22022452"],
    ["Zootopia","English","Animation","Hollywood",2016,8.0,160,"tt2948356"],
    ["Ratatouille","English","Animation","Hollywood",2007,8.1,150,"tt0382932"],
    ["Finding Nemo","English","Animation","Hollywood",2003,8.2,150,"tt0266543"],
    ["Toy Story","English","Animation","Hollywood",1995,8.3,150,"tt0114709"],
    ["Moana","English","Animation","Hollywood",2016,7.6,160,"tt3521164"],
    ["Despicable Me","English","Animation","Hollywood",2010,7.6,150,"tt1323594"],
    ["The Incredibles","English","Animation","Hollywood",2004,8.0,150,"tt0317705"],
    ["How to Train Your Dragon","English","Animation","Hollywood",2010,8.1,160,"tt0892769"],
    ["The Wild Robot","English","Animation","Hollywood",2024,8.2,170,"tt29623480"],
    ["Puss in Boots: The Last Wish","English","Animation","Hollywood",2022,7.8,160,"tt3915174"],
    ["The Super Mario Bros. Movie","English","Animation","Hollywood",2023,7.0,160,"tt6718170"],
    ["Despicable Me 2","English","Animation","Hollywood",2013,7.3,150,"tt1690953"],
    ["The Croods","English","Animation","Hollywood",2013,7.2,150,"tt0481499"],

    // OTHER HOLLYWOOD MOVIES

    ["The Intern","English","Comedy","Hollywood",2015,7.1,150,"tt2361509"],
    ["The Pursuit of Happyness","English","Drama","Hollywood",2006,8.0,150,"tt0454921"],
    ["The Truman Show","English","Drama","Hollywood",1998,8.2,150,"tt0120382"],
    ["Hidden Figures","English","Drama","Hollywood",2016,7.8,160,"tt4846340"],
    ["Wonder","English","Drama","Hollywood",2017,7.9,150,"tt2543472"],
    ["Paddington 2","English","Comedy","Hollywood",2017,7.8,150,"tt4468740"],
    ["The Martian","English","Sci-Fi","Hollywood",2015,8.0,180,"tt3659388"],
    ["Interstellar","English","Sci-Fi","Hollywood",2014,8.7,180,"tt0816692"],
    ["The Parent Trap","English","Comedy","Hollywood",1998,6.7,150,"tt0120783"],
    ["Jumanji: Welcome to the Jungle","English","Adventure","Hollywood",2017,6.9,160,"tt2283362"],
    ["Night at the Museum","English","Adventure","Hollywood",2006,6.5,150,"tt0477347"],

    // INDIAN MOVIES

    ["3 Idiots","Hindi","Comedy","Indian",2009,8.4,160,"tt1187043"],
    ["Taare Zameen Par","Hindi","Drama","Indian",2007,8.3,150,"tt0986264"],
    ["Zindagi Na Milegi Dobara","Hindi","Drama","Indian",2011,8.2,160,"tt1562872"],
    ["Chhichhore","Hindi","Comedy","Indian",2019,8.3,150,"tt9052870"],
    ["English Vinglish","Hindi","Drama","Indian",2012,7.8,150,"tt2181931"],
    ["Bajrangi Bhaijaan","Hindi","Drama","Indian",2015,8.1,160,"tt3863552"],
    ["Dangal","Hindi","Drama","Indian",2016,8.3,160,"tt5074352"],
    ["Queen","Hindi","Comedy","Indian",2013,8.1,150,"tt3322420"],

    // TAMIL MOVIES

    ["96","Tamil","Romance","Tamil",2018,8.5,160,"tt7019842"],
    ["Sita Ramam","Tamil","Romance","Tamil",2022,8.5,160,"tt20850406"],
    ["Thiruchitrambalam","Tamil","Comedy","Tamil",2022,7.9,160,"tt15744586"],
    ["Good Night","Tamil","Comedy","Tamil",2023,7.8,150,"tt25405440"],

    // MALAYALAM MOVIES

    ["Bangalore Days","Malayalam","Drama","Malayalam",2014,8.3,160,"tt3668162"],
    ["Ustad Hotel","Malayalam","Drama","Malayalam",2012,8.2,150,"tt2218988"],
    ["Hridayam","Malayalam","Romance","Malayalam",2022,8.0,160,"tt11375428"],
    ["Sudani from Nigeria","Malayalam","Comedy","Malayalam",2018,8.2,150,"tt7691572"],
    ["Premam","Malayalam","Romance","Malayalam",2015,8.3,150,"tt4679210"],
    ["Ohm Shanthi Oshaana","Malayalam","Romance","Malayalam",2014,7.7,150,"tt3517192"],
    ["Sarvam Maya","Malayalam","Comedy","Malayalam",2025,7.7,160,"tt32362695"],
    // ANIME

    ["Spirited Away","Japanese","Animation","Anime",2001,8.6,160,"tt0245429"],
    ["Your Name","Japanese","Romance","Anime",2016,8.4,160,"tt5311514"],
    ["Suzume","Japanese","Animation","Anime",2022,7.6,160,"tt16428256"],
    ["Howl's Moving Castle","Japanese","Fantasy","Anime",2004,8.2,160,"tt0347149"],
    ["A Silent Voice","Japanese","Drama","Anime",2016,8.1,160,"tt5323662"],
    ["Ponyo","Japanese","Animation","Anime",2008,7.6,150,"tt0876563"],
    ["My Neighbor Totoro","Japanese","Animation","Anime",1988,8.1,150,"tt0096283"]
];


// 3. CONVERT MOVIE DATA

const movieList = movies.map((m,i)=>({
    id:i+1,
    title:m[0],
    language:m[1],
    genre:m[2],
    category:m[3],
    year:m[4],
    rating:m[5],
    price:m[6],
    imdbId:m[7]
}));


// 4. HTML ELEMENTS

const movieGrid = document.getElementById("movieGrid");
const searchInput = document.getElementById("searchInput");
const languageFilter = document.getElementById("languageFilter");
const genreFilter = document.getElementById("genreFilter");
const emptyState = document.getElementById("emptyState");
const modalContainer = document.getElementById("modalContainer");


// 5. BOOKING DATA

let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
let occupiedSeats = JSON.parse(localStorage.getItem("occupiedSeats")) || {};

let currentMovie = null;
let selectedSeats = [];
let selectedShowtime = "";


// 6. POSTER PLACEHOLDER

function getPoster(movie) {
    return "https://placehold.co/400x600/111827/D4AF37?text=" +
        encodeURIComponent(movie.title);
}


// 7. LOAD POSTERS USING IMDb IDs

async function loadMoviePoster(movie,poster,card) {

    const cacheKey = "poster_" + movie.imdbId;
    const cached = localStorage.getItem(cacheKey);

    if(cached) {
        poster.src = cached;
        return true;
    }

    if(!OMDB_API_KEY || OMDB_API_KEY === "YOUR_NEW_API_KEY") {
        console.error("Please add your new OMDb API key.");
        return false;
    }

    try {

        const url =
            `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${movie.imdbId}`;

        const response = await fetch(url);
        const data = await response.json();

        if(data.Response === "True" &&
           data.Poster &&
           data.Poster !== "N/A") {

            localStorage.setItem(cacheKey,data.Poster);
            poster.src = data.Poster;
            return true;

        } else {
            console.log("Poster unavailable:",movie.title,data.Error);
            card.remove();
            updateEmptyState();
            return false;
        }

    } catch(error) {
        console.error("Poster loading failed:",movie.title,error);
        card.remove();
        updateEmptyState();
        return false;
    }
}


// 8. UPDATE EMPTY MESSAGE

function updateEmptyState() {
    emptyState.style.display =
        movieGrid.children.length === 0 ? "block" : "none";
}


// 9. DISPLAY MOVIES

function displayMovies(list=movieList) {

    movieGrid.innerHTML = "";

    emptyState.style.display =
        list.length === 0 ? "block" : "none";

    list.forEach(movie=>{

        const card = document.createElement("div");
        card.className = "movie-card";

        const poster = document.createElement("img");
        poster.className = "movie-poster";
        poster.src = getPoster(movie);
        poster.alt = movie.title;

        const rating = document.createElement("span");
        rating.className = "movie-rating";
        rating.textContent = "★ " + movie.rating;

        const details = document.createElement("div");
        details.className = "movie-details";

        details.innerHTML = `
            <h3>${movie.title}</h3>
            <p>${movie.year} · ${movie.language} · ${movie.genre}</p>
            <h4>From ₹${movie.price}</h4>
            <button class="book-btn">BOOK TICKETS</button>
        `;

        details.querySelector(".book-btn").addEventListener(
            "click",
            ()=>openMovie(movie)
        );

        card.append(poster,rating,details);
        movieGrid.appendChild(card);

        loadMoviePoster(movie,poster,card);
    });
}


// 10. SEARCH AND FILTER

function filterMovies() {

    const search = searchInput.value.toLowerCase();
    const language = languageFilter.value;
    const genre = genreFilter.value;

    const activeCategory =
        document.querySelector(".category-btn.active");

    const category = activeCategory
        ? activeCategory.dataset.category
        : "all";

    const filtered = movieList.filter(movie=>{

        return (
            movie.title.toLowerCase().includes(search) &&
            (language==="all" || movie.language===language) &&
            (genre==="all" || movie.genre===genre) &&
            (category==="all" || movie.category===category)
        );
    });

    displayMovies(filtered);
}

searchInput.addEventListener("input",filterMovies);
languageFilter.addEventListener("change",filterMovies);
genreFilter.addEventListener("change",filterMovies);

document.querySelectorAll(".category-btn").forEach(button=>{

    button.addEventListener("click",()=>{

        document.querySelectorAll(".category-btn").forEach(btn=>{
            btn.classList.remove("active");
        });

        button.classList.add("active");
        filterMovies();
    });
});


// 11. OPEN BOOKING POPUP

function openMovie(movie) {

    currentMovie = movie;
    selectedSeats = [];
    selectedShowtime = "";

    modalContainer.innerHTML = `
        <div class="modal-overlay" onclick="closeModal(event)">

            <div class="modal-content" onclick="event.stopPropagation()">

                <button class="modal-close" onclick="closeModal()">×</button>

                <h2>Book Your Tickets</h2>

                <div class="popup-movie">
                    <img id="popupPoster" src="${getPoster(movie)}">

                    <div>
                        <h3>${movie.title}</h3>
                        <p>${movie.year} · ${movie.language}</p>
                        <p>⭐ ${movie.rating}</p>
                        <p>Ticket price: ₹${movie.price}</p>
                    </div>
                </div>

                <h3>Select Show Time</h3>

                <div class="showtimes">
                    ${["10:00 AM","1:30 PM","4:30 PM","7:30 PM"].map(time=>
                        `<button type="button" onclick="selectShowtime(this,'${time}')">${time}</button>`
                    ).join("")}
                </div>

                <h3>Select Your Seats</h3>

                <div class="screen">SCREEN</div>

                <div class="seat-container" id="seatContainer"></div>

                <p class="seat-legend">
                    🟩 Available &nbsp;
                    🟥 Booked &nbsp;
                    🟨 Selected
                </p>

                <h3 id="totalPrice">Total: ₹0</h3>

                <button class="confirm-btn" onclick="checkout()">
                    CONTINUE TO BOOKING
                </button>

            </div>
        </div>
    `;

    modalContainer.style.display = "block";

    loadMoviePoster(
        movie,
        document.getElementById("popupPoster"),
        document.querySelector(".popup-movie")
    );

    createSeats();
}


// 12. SELECT SHOWTIME

function selectShowtime(button,time) {

    selectedShowtime = time;
    selectedSeats = [];

    document.querySelectorAll(".showtimes button").forEach(btn=>{
        btn.classList.remove("active");
    });

    button.classList.add("active");

    createSeats();
    updateTotal();
}


// 13. CLOSE POPUP

function closeModal(event) {

    if(
        !event ||
        event.target.classList.contains("modal-overlay") ||
        event.target.classList.contains("modal-close")
    ) {
        modalContainer.innerHTML = "";
        modalContainer.style.display = "none";
    }
}


// 14. SEAT STORAGE KEY

function getSeatKey() {
    return currentMovie.title + "_" + selectedShowtime;
}


// 15. CREATE SEATS

function createSeats() {

    const container =
        document.getElementById("seatContainer");

    if(!container) return;

    container.innerHTML = "";

    const rows = ["A","B","C","D","E"];
    const booked = occupiedSeats[getSeatKey()] || [];

    rows.forEach(row=>{

        const rowDiv = document.createElement("div");
        rowDiv.className = "seat-row";

        for(let i=1;i<=8;i++){

            const name = row+i;
            const seat = document.createElement("button");

            seat.type = "button";
            seat.className = "seat";
            seat.textContent = name;

            if(booked.includes(name)) {
                seat.classList.add("booked");
                seat.disabled = true;
            } else {
                seat.addEventListener("click",()=>{
                    toggleSeat(name);
                });
            }

            if(selectedSeats.includes(name)) {
                seat.classList.add("selected");
            }

            rowDiv.appendChild(seat);
        }

        container.appendChild(rowDiv);
    });
}


// 16. SELECT AND DESELECT SEATS

function toggleSeat(name) {

    if(!selectedShowtime) {
        alert("Please select a showtime first!");
        return;
    }

    if(selectedSeats.includes(name)) {

        selectedSeats = selectedSeats.filter(s=>s!==name);

    } else {

        if(selectedSeats.length>=6) {
            alert("Maximum 6 seats allowed.");
            return;
        }

        selectedSeats.push(name);
    }

    createSeats();
    updateTotal();
}


// 17. UPDATE PRICE

function updateTotal() {

    const total = selectedSeats.length * currentMovie.price;

    const element = document.getElementById("totalPrice");

    if(element) {
        element.textContent = "Total: ₹" + total;
    }
}


// 18. CHECKOUT

function checkout() {

    if(!selectedShowtime) {
        alert("Please select a showtime!");
        return;
    }

    if(selectedSeats.length===0) {
        alert("Please select your seats!");
        return;
    }

    const total = selectedSeats.length * currentMovie.price;

    modalContainer.innerHTML = `
        <div class="modal-overlay" onclick="closeModal(event)">

            <div class="modal-content" onclick="event.stopPropagation()">

                <button class="modal-close" onclick="closeModal()">×</button>

                <h2>Complete Your Booking</h2>

                <form id="bookingForm">

                    <label>Your Name</label>
                    <input type="text" id="customerName"
                        placeholder="Enter your name" required>

                    <label>Email Address</label>
                    <input type="email" id="customerEmail"
                        placeholder="Enter your email" required>

                    <p><strong>Movie:</strong> ${currentMovie.title}</p>
                    <p><strong>Showtime:</strong> ${selectedShowtime}</p>
                    <p><strong>Seats:</strong> ${selectedSeats.join(", ")}</p>
                    <p><strong>Total:</strong> ₹${total}</p>

                    <button type="submit" class="confirm-btn">
                        CONFIRM BOOKING
                    </button>

                </form>
            </div>
        </div>
    `;

    document.getElementById("bookingForm").addEventListener(
        "submit",
        confirmBooking
    );
}


// 19. CONFIRM BOOKING

function confirmBooking(event) {

    event.preventDefault();

    const name =
        document.getElementById("customerName").value.trim();

    const email =
        document.getElementById("customerEmail").value.trim();

    if(!name || !email) return;

    const key = getSeatKey();

    if(!occupiedSeats[key]) {
        occupiedSeats[key] = [];
    }

    if(selectedSeats.some(seat=>occupiedSeats[key].includes(seat))) {

        alert("One of your selected seats has already been booked.");
        openMovie(currentMovie);
        return;
    }

    const booking = {
        id: Date.now(),
        name: name,
        email: email,
        movie: currentMovie.title,
        showtime: selectedShowtime,
        seats: [...selectedSeats],
        total: selectedSeats.length * currentMovie.price,
        date: new Date().toLocaleString()
    };

    occupiedSeats[key].push(...selectedSeats);
    bookings.push(booking);

    localStorage.setItem("bookings",JSON.stringify(bookings));
    localStorage.setItem("occupiedSeats",JSON.stringify(occupiedSeats));

    showConfirmation(booking);
}


// 20. BOOKING CONFIRMATION

function showConfirmation(booking) {

    modalContainer.innerHTML = `
        <div class="modal-overlay">

            <div class="modal-content confirmation">

                <h2>🎉 Booking Confirmed!</h2>

                <p>Your tickets have been booked successfully.</p>

                <hr style="margin:20px 0;border-color:#66552e">

                <p><strong>Booking ID:</strong> ${booking.id}</p>
                <p><strong>Name:</strong> ${booking.name}</p>
                <p><strong>Movie:</strong> ${booking.movie}</p>
                <p><strong>Showtime:</strong> ${booking.showtime}</p>
                <p><strong>Seats:</strong> ${booking.seats.join(", ")}</p>
                <p><strong>Total:</strong> ₹${booking.total}</p>
                <p><strong>Date:</strong> ${booking.date}</p>

                <button class="confirm-btn" onclick="closeModal()">
                    DONE
                </button>

            </div>
        </div>
    `;
}


// 21. MY BOOKINGS

function showBookings() {

    if(bookings.length===0) {

        modalContainer.innerHTML = `
            <div class="modal-overlay">
                <div class="modal-content">

                    <button class="modal-close" onclick="closeModal()">×</button>

                    <h2>My Bookings</h2>
                    <p>No bookings yet!</p>

                </div>
            </div>
        `;

    } else {

        const cards = bookings.map(booking=>`

            <div class="booking-card">

                <h3>${booking.movie}</h3>
                <p>Booking ID: ${booking.id}</p>
                <p>Name: ${booking.name}</p>
                <p>Showtime: ${booking.showtime}</p>
                <p>Seats: ${booking.seats.join(", ")}</p>
                <p>Total: ₹${booking.total}</p>
                <p>Date: ${booking.date}</p>

            </div>

        `).join("");

        modalContainer.innerHTML = `
            <div class="modal-overlay">
                <div class="modal-content">

                    <button class="modal-close" onclick="closeModal()">×</button>

                    <h2>My Bookings</h2>

                    ${cards}

                </div>
            </div>
        `;
    }

    modalContainer.style.display = "block";
}


// 22. MY BOOKINGS BUTTON

document.getElementById("myBookingsLink").addEventListener("click",event=>{

    event.preventDefault();
    showBookings();

});


// 23. START WEBSITE

displayMovies();