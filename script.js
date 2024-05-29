function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  document.querySelectorAll('.img-wrapper').forEach(item => {
    item.addEventListener('click', function() {
        const description = this.getAttribute('data-description');
        const descriptionBox = document.getElementById('description-box');
        descriptionBox.textContent = description;
    });
});


$(document).ready(function() {
  $('.img-wrapper').click(function() {
      $(this).addClass('animate');
      setTimeout(function() {
          $('.img-wrapper').removeClass('animate');
      }, 1000); // Adjust timing as needed
  });
});


$(document).ready(function() {
  $('.img-wrapper').click(function() {
      $(this).addClass('animate');
      setTimeout(function() {
          $('.img-wrapper').removeClass('animate');
      }, 1000); // Adjust timing as needed
  });
});
