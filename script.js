'use strict';

document.addEventListener("DOMContentLoaded", () => {

      const up = document.querySelector('#up');
      const back = document.querySelector('#back');

      window.addEventListener('scroll', showButton);
      up.addEventListener('click', scrollUp);

      // Displays the Top button when the user scrolls more than 100px
      function showButton() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            up.classList = "fadeIn"
            back.classList = "fadeIn"
            up.style.zIndex = "99";
            up.style.display = "block";
            back.style.display = "block";
            } else {
            up.classList = "fadeOut";
            back.classList = "fadeOut";
            up.style.zIndex = "-1";
            }
      }

      // When the user clicks on the button, scroll to the top of the document
      function scrollUp() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
      }
})