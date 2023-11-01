(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]=EMAIL;ftypes[0]=merge;,fnames[1]=FNAME;ftypes[1]=merge;,fnames[2]=LNAME;ftypes[2]=merge;,fnames[3]=ADDRESS;ftypes[3]=merge;,fnames[4]=PHONE;ftypes[4]=merge;,fnames[5]=BIRTHDAY;ftypes[5]=merge;false}(jQuery));var $mcj = jQuery.noConflict(true);

document.querySelector('.menu-button').addEventListener('click', function () {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('menu-active');
});

const submenuParent = document.querySelector('.submenu-parent');
submenuParent.addEventListener('mouseenter', function () {
  const submenu = this.querySelector('.submenu');
  submenu.classList.toggle('submenu-active');
});

const mainMenuItems = document.querySelectorAll('.menu > ul > li > a');
mainMenuItems.forEach(function (menuItem) {
  menuItem.addEventListener('click', function () {
    const menu = document.querySelector('.menu');
    menu.classList.remove('menu-active');
  });
});

const subMenuItems = document.querySelectorAll('.submenu a');
subMenuItems.forEach(function (subMenuItem) {
  subMenuItem.addEventListener('click', function () {
    const menu = document.querySelector('.menu');
    menu.classList.remove('menu-active');
  });
});

 document.addEventListener("DOMContentLoaded", function() {
  var flashButton = document.querySelector('.flash-button');
  if (flashButton) {
    // Start the animation
    flashButton.classList.add('flashing');

    // Stop the animation after 10 seconds (10000 milliseconds)
    setTimeout(function() {
      flashButton.classList.remove('flashing');
    }, 10000);
  }

  var flashButton2 = document.querySelector('.flash-button2');
  if (flashButton2) {
    // Start the animation
    flashButton2.classList.add('flashing');

    // Stop the animation after 10 seconds (10000 milliseconds)
    setTimeout(function() {
      flashButton2.classList.remove('flashing');
    }, 10000);
  }
});

  document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('mobile-popup').style.display = 'none';
  });

