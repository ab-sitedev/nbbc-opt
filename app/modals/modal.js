// Get background
var back = document.getElementById('back');

// Get interactive tiles
var sqAbout = document.getElementById('sq-about');
var sqConnect = document.getElementById('sq-connect');
var sqArchive = document.getElementById('sq-archive');
var sqContact = document.getElementById('sq-contact');

// Get specific modals (initially set to display: none;)
var modAbout = document.getElementById('modAbout');
var modConnect = document.getElementById('modConnect');
var modArchive = document.getElementById('modArchive');
var modContact = document.getElementById('modContact');

// Get close button
var btnCloseAbout = document.getElementById('modCloseAbout');
var btnCloseConnect = document.getElementById('modCloseConnect');
var btnCloseArchive = document.getElementById('modCloseArchive');
var btnCloseContact = document.getElementById('modCloseContact');

// Sets modals to display: unset
sqAbout.onclick = function() {
    console.log('You clicked the About button');

    modAbout.classList.add('visible');
    modAbout.classList.remove('invisible');
    back.classList.add('visible');
    back.classList.remove('invisible');
}

sqConnect.onclick = function() {
    console.log('You clicked the Connect button');

    modConnect.classList.add('visible');
    modConnect.classList.remove('invisible');
    back.classList.add('visible');
    back.classList.remove('invisible');
}

sqArchive.onclick = function() {
    console.log('You clicked the Archive button');

    modArchive.classList.add('visible');
    modArchive.classList.remove('invisible');
    back.classList.add('visible');
    back.classList.remove('invisible');
}

sqContact.onclick = function() {
    console.log('You clicked the Contact button');

    modContact.classList.add('visible');
    modContact.classList.remove('invisible');
    back.classList.add('visible');
    back.classList.remove('invisible');
}

// Close modal when Close button is clicked
btnCloseAbout.onclick = function() {
    console.log('You clicked the close button');

    modAbout.classList.remove('visible');
    modAbout.classList.add('invisible');
    modConnect.classList.remove('visible');
    modConnect.classList.add('invisible');
    modArchive.classList.remove('visible');
    modArchive.classList.add('invisible');
    modContact.classList.remove('visible');
    modContact.classList.add('invisible');

    back.classList.remove('visible');
    back.classList.add('invisible');
}

btnCloseConnect.onclick = function() {
    console.log('You clicked the close button');

    modAbout.classList.remove('visible');
    modAbout.classList.add('invisible');
    modConnect.classList.remove('visible');
    modConnect.classList.add('invisible');
    modArchive.classList.remove('visible');
    modArchive.classList.add('invisible');
    modContact.classList.remove('visible');
    modContact.classList.add('invisible');

    back.classList.remove('visible');
    back.classList.add('invisible');
}

btnCloseArchive.onclick = function() {
    console.log('You clicked the close button');

    modAbout.classList.remove('visible');
    modAbout.classList.add('invisible');
    modConnect.classList.remove('visible');
    modConnect.classList.add('invisible');
    modArchive.classList.remove('visible');
    modArchive.classList.add('invisible');
    modContact.classList.remove('visible');
    modContact.classList.add('invisible');

    back.classList.remove('visible');
    back.classList.add('invisible');
}

btnCloseContact.onclick = function() {
    console.log('You clicked the close button');

    modAbout.classList.remove('visible');
    modAbout.classList.add('invisible');
    modConnect.classList.remove('visible');
    modConnect.classList.add('invisible');
    modArchive.classList.remove('visible');
    modArchive.classList.add('invisible');
    modContact.classList.remove('visible');
    modContact.classList.add('invisible');

    back.classList.remove('visible');
    back.classList.add('invisible');
}

// Close modal when background is clicked
back.onclick = function() {
    console.log('You clicked the background');
    
    modAbout.classList.remove('visible');
    modAbout.classList.add('invisible');
    modConnect.classList.remove('visible');
    modConnect.classList.add('invisible');
    modArchive.classList.remove('visible');
    modArchive.classList.add('invisible');
    modContact.classList.remove('visible');
    modContact.classList.add('invisible');

    back.classList.remove('visible');
    back.classList.add('invisible');
}