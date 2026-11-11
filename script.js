
/* =====================================
   CINÉVERSE - JAVASCRIPT
   Optimised OMDb API Requests
===================================== */

// 1. OMDb API KEY

const OMDB_API_KEY = "6067e88a";


// 2. MOVIE DATABASE
// Title, Language, Genre, Category, Year, Rating, Price, IMDb ID

const movies = [

    // ANIMATION AND FAMILY MOVIES

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

    // ACTION MOVIES

    ["The Dark Knight","English","Action","Hollywood",2008,9.0,180,"tt0468569"],
    ["Inception","English","Action","Hollywood",2010,8.8,180,"tt1375666"],

    // THRILLER MOVIES

    ["Knives Out","English","Thriller","Hollywood",2019,7.9,170,"tt8946378"],
    ["Get Out","English","Thriller","Hollywood",2017,7.8,170,"tt5052448"],
    ["Gone Girl","English","Thriller","Hollywood",2014,8.1,170,"tt2267998"],
    ["Shutter Island","English","Thriller","Hollywood",2010,8.2,170,"tt1130884"],
    ["The Girl on the Train","English","Thriller","Hollywood",2016,6.5,160,"tt3631112"],
    ["The Sixth Sense","English","Thriller","Hollywood",1999,8.2,160,"tt0167404"],
    ["The Others","English","Thriller","Hollywood",2001,7.6,160,"tt0230600"],
    ["Searching","English","Thriller","Hollywood",2018,7.6,160,"tt7668870"],
    ["Joker","English","Thriller","Hollywood",2019,8.3,180,"tt7286456"],

    // HORROR MOVIES

    ["IT","English","Horror","Hollywood",2017,7.3,170,"tt1396484"],
    ["IT Chapter Two","English","Horror","Hollywood",2019,6.5,170,"tt7349950"],
    ["The Nun","English","Horror","Hollywood",2018,5.3,160,"tt5814060"],
    ["The Nun II","English","Horror","Hollywood",2023,5.6,170,"tt10160976"],
    ["The Conjuring","English","Horror","Hollywood",2013,7.5,170,"tt1457767"],
    ["Annabelle Comes Home","English","Horror","Hollywood",2019,5.9,160,"tt8350360"],
    ["The Exorcist","English","Horror","Hollywood",1973,8.1,160,"tt0070047"],
    ["The Black Phone","English","Horror","Hollywood",2021,6.9,170,"tt7144666"],
    ["Smile","English","Horror","Hollywood",2022,6.5,170,"tt15474916"],
    ["The Ring","English","Horror","Hollywood",2002,7.1,160,"tt0298130"],
    ["Scream","English","Horror","Hollywood",1996,7.4,160,"tt0117571"],
    ["Scream VI","English","Horror","Hollywood",2023,6.5,170,"tt17663992"],
    ["Final Destination","English","Horror","Hollywood",2000,6.7,160,"tt0195714"],

    // SPIDER-MAN AND MARVEL MOVIES

    ["Spider-Man","English","Action","Hollywood",2002,7.4,180,"tt0145487"],
    ["The Avengers","English","Action","Hollywood",2012,8.0,190,"tt0848228"],
    ["Avengers: Age of Ultron","English","Action","Hollywood",2015,7.3,190,"tt2395427"],
    ["Captain America: The First Avenger","English","Action","Hollywood",2011,6.9,180,"tt0458339"],
    ["Avengers: Endgame","English","Action","Hollywood",2019,8.4,200,"tt4154796"],
    ["Doctor Strange in the Multiverse of Madness","English","Action","Hollywood",2022,6.9,190,"tt9419884"],
    ["Thor","English","Action","Hollywood",2011,7.0,180,"tt0800369"],
    ["Guardians of the Galaxy","English","Action","Hollywood",2014,8.0,180,"tt2015381"],
    ["Guardians of the Galaxy Vol. 2","English","Action","Hollywood",2017,7.6,180,"tt3896198"],
    ["Deadpool","English","Action","Hollywood",2016,8.0,180,"tt1431045"],
    ["Black Widow","English","Action","Hollywood",2021,6.7,180,"tt3480822"],

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


    ["Comali","Tamil","Comedy","Tamil",2019,6.9,160,"tt10554198"],
    ["Doctor","Tamil","Comedy","Tamil",2021,7.4,170,"tt11934846"],
    ["Vada Chennai","Tamil","Crime","Tamil",2018,8.4,170,"tt5959980"],
    ["Sarpatta Parambarai","Tamil","Drama","Tamil",2021,8.5,170,"tt11580854"],
    ["Anbe Sivam","Tamil","Drama","Tamil",2003,8.6,160,"tt0367495"],
    ["Kaaka Muttai","Tamil","Comedy","Tamil",2014,8.0,150,"tt3973410"],

    // MALAYALAM MOVIES

    ["Bangalore Days","Malayalam","Drama","Malayalam",2014,8.3,160,"tt3668162"],
    ["Ustad Hotel","Malayalam","Drama","Malayalam",2012,8.2,150,"tt2218988"],
    ["Hridayam","Malayalam","Romance","Malayalam",2022,8.0,160,"tt11375428"],
    ["Premam","Malayalam","Romance","Malayalam",2015,8.3,150,"tt4679210"],
    ["Ohm Shanthi Oshaana","Malayalam","Romance","Malayalam",2014,7.7,150,"tt3517192"],
    ["Guruvayoor Ambalanadayil","Malayalam","Comedy","Malayalam",2024,6.8,170,"tt26758372"],
    ["Minnal Murali","Malayalam","Action","Malayalam",2021,7.8,170,"tt7268738"],
    ["Aavesham","Malayalam","Action","Malayalam",2024,7.8,170,"tt26660021"],
    ["Manjummel Boys","Malayalam","Thriller","Malayalam",2024,8.2,170,"tt24268454"],
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

const movieList = movies.map((m, i) => ({
    id: i + 1,
    title: m[0],
    language: m[1],
    genre: m[2],
    category: m[3],
    year: m[4],
    rating: m[5],
    price: m[6],
    imdbId: m[7],
    runtime: "Loading duration..."
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


// 7. API REQUEST CONTROL

const today = new Date().toDateString();

const quotaKey = "omdb_quota_" + today;

let quotaReached =
    localStorage.getItem(quotaKey) === "true";

const loadingMovies = new Set();
const posterQueue = [];
const queuedMovies = new Set();

let activeRequests = 0;

const MAX_REQUESTS = 2;


// 8. UPDATE MOVIE DURATION

function updateMovieRuntime(movie) {

    const runtimeElement =
        document.getElementById("runtime-" + movie.id);

    if (runtimeElement) {
        runtimeElement.textContent = movie.runtime;
    }

    const popupRuntime =
        document.getElementById("popupRuntime");

    if (
        currentMovie &&
        currentMovie.id === movie.id &&
        popupRuntime
    ) {
        popupRuntime.textContent =
            "Duration: " + movie.runtime;
    }
}


// 9. FETCH MOVIE POSTER

async function loadMoviePoster(movie, poster) {

    const posterKey = "poster_" + movie.imdbId;
    const runtimeKey = "runtime_" + movie.imdbId;

    const checkedKey =
        "omdb_checked_" + today + "_" + movie.imdbId;

    const cachedPoster =
        localStorage.getItem(posterKey);

    const cachedRuntime =
        localStorage.getItem(runtimeKey);

    // Use cached poster
    if (cachedPoster) {
        poster.src = cachedPoster;
    }

    // Use cached runtime
    if (cachedRuntime) {
        movie.runtime = cachedRuntime;
        updateMovieRuntime(movie);
    }

    // Already have the poster
    if (cachedPoster) {
        return;
    }

    // Already checked this movie today
    if (localStorage.getItem(checkedKey)) {
        return;
    }

    // Daily limit already reached
    if (quotaReached) {
        return;
    }

    // Prevent duplicate requests
    if (loadingMovies.has(movie.imdbId)) {
        return;
    }

    loadingMovies.add(movie.imdbId);

    try {

        const url =
            `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${movie.imdbId}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("HTTP error: " + response.status);
        }

        const data = await response.json();

        // Stop all requests if quota is exhausted
        if (data.Error === "Request limit reached!") {

            quotaReached = true;

            localStorage.setItem(quotaKey, "true");

            console.warn("OMDb daily limit reached.");

            return;
        }

        // Invalid API key
        if (data.Error === "Invalid API key!") {

            quotaReached = true;

            console.error("Invalid OMDb API key.");

            return;
        }

        // Mark the movie as checked today
        localStorage.setItem(checkedKey, "true");

        if (data.Response === "True") {

            if (
                data.Poster &&
                data.Poster !== "N/A"
            ) {

                localStorage.setItem(
                    posterKey,
                    data.Poster
                );

                poster.src = data.Poster;
            }

            if (
                data.Runtime &&
                data.Runtime !== "N/A"
            ) {

                movie.runtime = data.Runtime;

                localStorage.setItem(
                    runtimeKey,
                    data.Runtime
                );

            } else {

                movie.runtime = "Duration unavailable";
            }

        } else {

            movie.runtime = "Duration unavailable";

            console.log(
                "Movie unavailable:",
                movie.title,
                data.Error
            );
        }

    } catch (error) {

        console.error(
            "OMDb loading failed:",
            movie.title,
            error
        );

    } finally {

        loadingMovies.delete(movie.imdbId);

        updateMovieRuntime(movie);
    }
}


// 10. POSTER REQUEST QUEUE

function processPosterQueue() {

    while (
        activeRequests < MAX_REQUESTS &&
        posterQueue.length > 0 &&
        !quotaReached
    ) {

        const item = posterQueue.shift();

        queuedMovies.delete(item.movie.imdbId);

        activeRequests++;

        loadMoviePoster(
            item.movie,
            item.poster
        ).finally(() => {

            activeRequests--;

            processPosterQueue();
        });
    }
}


// 11. ADD MOVIE TO POSTER QUEUE

function queuePoster(movie, poster) {

    const posterKey = "poster_" + movie.imdbId;

    const checkedKey =
        "omdb_checked_" + today + "_" + movie.imdbId;

    // Cached poster: no request needed
    const cachedPoster =
        localStorage.getItem(posterKey);

    if (cachedPoster) {
        poster.src = cachedPoster;
        return;
    }

    // Already checked today
    if (localStorage.getItem(checkedKey)) {
        return;
    }

    // Daily quota exhausted
    if (quotaReached) {
        return;
    }

    // Already queued
    if (queuedMovies.has(movie.imdbId)) {
        return;
    }

    queuedMovies.add(movie.imdbId);

    posterQueue.push({
        movie: movie,
        poster: poster
    });

    processPosterQueue();
}


// 12. LAZY LOADING OBSERVER

const posterObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const movie =
                    entry.target.movieData;

                const poster =
                    entry.target.querySelector(".movie-poster");

                if (movie && poster) {
                    queuePoster(movie, poster);
                }

                posterObserver.unobserve(entry.target);
            }

        });

    },
    {
        rootMargin: "200px"
    }
);


// 13. UPDATE EMPTY MESSAGE

function updateEmptyState() {

    emptyState.style.display =
        movieGrid.children.length === 0
            ? "block"
            : "none";
}


// 14. DISPLAY MOVIES

function displayMovies(list = movieList) {

    // Stop observing old cards
    posterObserver.disconnect();

    // Clear pending requests that haven't started
    posterQueue.length = 0;
    queuedMovies.clear();

    movieGrid.innerHTML = "";

    emptyState.style.display =
        list.length === 0 ? "block" : "none";

    list.forEach(movie => {

        const card = document.createElement("div");
        card.className = "movie-card";

        const poster = document.createElement("img");

        poster.className = "movie-poster";
        poster.src = getPoster(movie);
        poster.alt = movie.title;

        poster.onerror = function () {

            this.onerror = null;
            this.src = getPoster(movie);

        };

        const cachedPoster =
            localStorage.getItem(
                "poster_" + movie.imdbId
            );

        if (cachedPoster) {
            poster.src = cachedPoster;
        }

        const cachedRuntime =
            localStorage.getItem(
                "runtime_" + movie.imdbId
            );

        if (cachedRuntime) {
            movie.runtime = cachedRuntime;
        }

        const rating = document.createElement("span");

        rating.className = "movie-rating";
        rating.textContent = "★ " + movie.rating;

        const details = document.createElement("div");

        details.className = "movie-details";

        details.innerHTML = `
            <h3>${movie.title}</h3>

            <p>
                ${movie.year} · ${movie.language} · ${movie.genre}
            </p>

            <p id="runtime-${movie.id}">
                ${movie.runtime}
            </p>

            <h4>From ₹${movie.price}</h4>

            <button class="book-btn">BOOK TICKETS</button>
        `;

        details.querySelector(".book-btn").addEventListener(
            "click",
            () => openMovie(movie)
        );

        card.append(poster, rating, details);

        card.movieData = movie;

        movieGrid.appendChild(card);

        // Observe card instead of immediately requesting poster
        posterObserver.observe(card);

    });

    updateEmptyState();
}


// 15. SEARCH AND FILTER

function filterMovies() {

    const search =
        searchInput.value.toLowerCase();

    const language =
        languageFilter.value;

    const genre =
        genreFilter.value;

    const activeCategory =
        document.querySelector(
            ".category-btn.active[data-category]"
        );

    const category = activeCategory
        ? activeCategory.dataset.category
        : "all";

    const filtered = movieList.filter(movie => {

        return (
            movie.title.toLowerCase().includes(search) &&
            (language === "all" || movie.language === language) &&
            (genre === "all" || movie.genre === genre) &&
            (category === "all" || movie.category === category)
        );

    });

    displayMovies(filtered);
}

searchInput.addEventListener("input", filterMovies);
languageFilter.addEventListener("change", filterMovies);
genreFilter.addEventListener("change", filterMovies);


// 16. CATEGORY BUTTONS

document.querySelectorAll(
    ".category-btn[data-category]"
).forEach(button => {

    button.addEventListener("click", () => {

        document.querySelectorAll(
            ".category-btn[data-category]"
        ).forEach(btn => {
            btn.classList.remove("active");
        });

        document.querySelectorAll(
            ".genre-btn"
        ).forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        genreFilter.value = "all";

        filterMovies();

    });

});


// 17. GENRE BUTTONS

document.querySelectorAll(".genre-btn").forEach(button => {

    button.addEventListener("click", () => {

        document.querySelectorAll(
            ".genre-btn"
        ).forEach(btn => {
            btn.classList.remove("active");
        });

        document.querySelectorAll(
            ".category-btn[data-category]"
        ).forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        genreFilter.value =
            button.dataset.genre;

        filterMovies();

    });

});


// 18. OPEN BOOKING POPUP

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

                    <img id="popupPoster"
                        src="${getPoster(movie)}"
                        alt="${movie.title}">

                    <div>
                        <h3>${movie.title}</h3>

                        <p>${movie.year} · ${movie.language}</p>

                        <p>Genre: ${movie.genre}</p>

                        <p id="popupRuntime">
                            Duration: ${movie.runtime}
                        </p>

                        <p>⭐ ${movie.rating}</p>

                        <p>Ticket price: ₹${movie.price}</p>
                    </div>

                </div>

                <h3>Select Show Time</h3>

                <div class="showtimes">

                    ${["10:00 AM", "1:30 PM", "4:30 PM", "7:30 PM"].map(time =>
                        `<button type="button"
                            onclick="selectShowtime(this,'${time}')">
                            ${time}
                        </button>`
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

    const popupPoster =
        document.getElementById("popupPoster");

    const cachedPoster =
        localStorage.getItem(
            "poster_" + movie.imdbId
        );

    if (cachedPoster) {

        popupPoster.src = cachedPoster;

    } else {

        queuePoster(movie, popupPoster);

    }

    createSeats();
}


// 19. SELECT SHOWTIME

function selectShowtime(button, time) {

    selectedShowtime = time;

    selectedSeats = [];

    document.querySelectorAll(
        ".showtimes button"
    ).forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    createSeats();

    updateTotal();
}


// 20. CLOSE POPUP

function closeModal(event) {

    if (
        !event ||
        event.target.classList.contains("modal-overlay") ||
        event.target.classList.contains("modal-close")
    ) {

        modalContainer.innerHTML = "";

        modalContainer.style.display = "none";
    }
}


// 21. SEAT STORAGE KEY

function getSeatKey() {

    return currentMovie.title + "_" + selectedShowtime;

}


// 22. CREATE SEATS

function createSeats() {

    const container =
        document.getElementById("seatContainer");

    if (!container) return;

    container.innerHTML = "";

    const rows = ["A", "B", "C", "D", "E"];

    const booked =
        occupiedSeats[getSeatKey()] || [];

    rows.forEach(row => {

        const rowDiv = document.createElement("div");

        rowDiv.className = "seat-row";

        for (let i = 1; i <= 8; i++) {

            const name = row + i;

            const seat = document.createElement("button");

            seat.type = "button";

            seat.className = "seat";

            seat.textContent = name;

            if (booked.includes(name)) {

                seat.classList.add("booked");

                seat.disabled = true;

            } else {

                seat.addEventListener("click", () => {
                    toggleSeat(name);
                });

            }

            if (selectedSeats.includes(name)) {

                seat.classList.add("selected");

            }

            rowDiv.appendChild(seat);

        }

        container.appendChild(rowDiv);

    });

}


// 23. SELECT AND DESELECT SEATS

function toggleSeat(name) {

    if (!selectedShowtime) {

        alert("Please select a showtime first!");

        return;
    }

    if (selectedSeats.includes(name)) {

        selectedSeats =
            selectedSeats.filter(s => s !== name);

    } else {

        if (selectedSeats.length >= 6) {

            alert("Maximum 6 seats allowed.");

            return;
        }

        selectedSeats.push(name);
    }

    createSeats();

    updateTotal();
}


// 24. UPDATE PRICE

function updateTotal() {

    const total =
        selectedSeats.length * currentMovie.price;

    const element =
        document.getElementById("totalPrice");

    if (element) {

        element.textContent = "Total: ₹" + total;

    }
}


// 25. CHECKOUT

function checkout() {

    if (!selectedShowtime) {

        alert("Please select a showtime!");

        return;
    }

    if (selectedSeats.length === 0) {

        alert("Please select your seats!");

        return;
    }

    const total =
        selectedSeats.length * currentMovie.price;

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


// 26. CONFIRM BOOKING

function confirmBooking(event) {

    event.preventDefault();

    const name =
        document.getElementById("customerName").value.trim();

    const email =
        document.getElementById("customerEmail").value.trim();

    if (!name || !email) return;

    const key = getSeatKey();

    if (!occupiedSeats[key]) {

        occupiedSeats[key] = [];

    }

    if (
        selectedSeats.some(
            seat => occupiedSeats[key].includes(seat)
        )
    ) {

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

    localStorage.setItem(
        "bookings",
        JSON.stringify(bookings)
    );

    localStorage.setItem(
        "occupiedSeats",
        JSON.stringify(occupiedSeats)
    );

    showConfirmation(booking);

}


// 27. BOOKING CONFIRMATION

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


// 28. MY BOOKINGS

function showBookings() {

    if (bookings.length === 0) {

        modalContainer.innerHTML = `
            <div class="modal-overlay" onclick="closeModal(event)">

                <div class="modal-content" onclick="event.stopPropagation()">

                    <button class="modal-close" onclick="closeModal()">×</button>

                    <h2>My Bookings</h2>

                    <p>No bookings yet!</p>

                </div>
            </div>
        `;

    } else {

        const cards = bookings.map(booking => `

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
            <div class="modal-overlay" onclick="closeModal(event)">

                <div class="modal-content" onclick="event.stopPropagation()">

                    <button class="modal-close" onclick="closeModal()">×</button>

                    <h2>My Bookings</h2>

                    ${cards}

                </div>
            </div>
        `;
    }

    modalContainer.style.display = "block";

}


// 29. MY BOOKINGS BUTTON

document.getElementById("myBookingsLink").addEventListener(
    "click",
    event => {

        event.preventDefault();

        showBookings();

    }
);


// 30. START WEBSITE

displayMovies();
