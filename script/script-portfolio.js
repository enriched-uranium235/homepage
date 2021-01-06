'use strict';

const lang = document.querySelector('html').lang;

if(lang ===  'ja') {
    document.querySelector('option[value="portfolio.html"]').selected = true;
} else if(lang === 'en') {
    document.querySelector('option[value="portfolio-en.html"]').selected = true;
} 

document.getElementById('form').select.onchange = function() {
    location.href = document.getElementById('form').select.value;
}

$(document).ready(function() {
    $('#open_nav').on('click', function() {
        $('#wrapper, #nav').toggleClass('show');
    });
});