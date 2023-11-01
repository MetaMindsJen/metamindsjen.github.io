	<script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script><script type="text/javascript">(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]=EMAIL;ftypes[0]=merge;,fnames[1]=FNAME;ftypes[1]=merge;,fnames[2]=LNAME;ftypes[2]=merge;,fnames[3]=ADDRESS;ftypes[3]=merge;,fnames[4]=PHONE;ftypes[4]=merge;,fnames[5]=BIRTHDAY;ftypes[5]=merge;false}(jQuery));var $mcj = jQuery.noConflict(true);</script>

<script>
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

</script>
<script>
  document.addEventListener("DOMContentLoaded", function() {
    var flashButton = document.querySelector('.flash-button');

    // Start the animation
    flashButton.classList.add('flashing');

    // Stop the animation after 20 seconds
    setTimeout(function() {
      flashButton.classList.remove('flashing');
    }, 10000);
  });
</script>
<script>
  document.addEventListener("DOMContentLoaded", function() {
    var flashButton2 = document.querySelector('.flash-button2');

    // Start the animation
    flashButton2.classList.add('flashing');

    // Stop the animation after 20 seconds
    setTimeout(function() {
      flashButton2.classList.remove('flashing');
    }, 10000);
  });
</script>
	<script>
  document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('mobile-popup').style.display = 'none';
  });
</script>
