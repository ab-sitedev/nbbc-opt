// Get background
var back = document.getElementById('back');

// Get interactive tiles
var sq = document.querySelector(".topLevel").querySelectorAll(".sq");

// Get modals (initially set to display: none;)
var modal = document.querySelector(".topLevel").querySelectorAll(".modal");

// Get close buttons
var closeBtn = document.querySelector(".topLevel").querySelectorAll(".closeModal");

// Sets modals to display: unset
sq.onclick = function() {
    console.log('You clicked an interactive tile');

    modal.classList.add('visible');
    modal.classList.remove('invisible');
    back.classList.add('visible');
    back.classList.remove('invisible');
}