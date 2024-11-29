function showContactDiv(){
    document.querySelector(".reservation-div").classList.add("d-none")
    document.querySelector(".contact-doctor-div").classList.remove("d-none")
    document.querySelector(".reservation-doctor-btn").classList.remove("green-color")
    document.querySelector(".reservation-doctor-btn").classList.add("text-black-50")
    document.querySelector(".contact-doctor-btn").classList.remove("text-black-50")
    document.querySelector(".contact-doctor-btn").classList.add("green-color")
}
function showReservationDiv(){
    document.querySelector(".contact-doctor-div").classList.add("d-none")
    document.querySelector(".reservation-div").classList.remove("d-none")
    document.querySelector(".reservation-doctor-btn").classList.add("green-color")
    document.querySelector(".reservation-doctor-btn").classList.remove("text-black-50")
    document.querySelector(".contact-doctor-btn").classList.add("text-black-50")
    document.querySelector(".contact-doctor-btn").classList.remove("green-color")
}
function setLanguage(language, flagUrl) {
    document.getElementById('selectedLanguage').textContent = language;
    document.getElementById('selectedFlag').src = flagUrl;
};
function showSearchInput(){
    document.querySelector(".search-icon").classList.add("d-none")
    document.querySelector(".search-input").classList.remove("d-none")
}


        // Function to hide the search input and show the search icon
        function hideSearchInput() {
            document.querySelector(".search-icon").classList.remove("d-none");
            document.querySelector(".search-input").classList.add("d-none");
        }
    // Add click event listener to the search icon to show the search input
    document.querySelector(".search-icon").addEventListener("click", function(event) {
        event.stopPropagation(); // Prevent click event from propagating to the document
        showSearchInput();
    });

    // Add click event listener to the document to hide the search input
    document.addEventListener("click", function(event) {
        const searchInput = document.querySelector(".search-input");
        const searchIcon = document.querySelector(".search-icon");
        if (!searchInput.contains(event.target) && !searchIcon.contains(event.target)) {
            hideSearchInput();
        }
    });

    // Prevent clicks inside the search input from hiding it
    document.querySelector(".search-input").addEventListener("click", function(event) {
        event.stopPropagation();
    });