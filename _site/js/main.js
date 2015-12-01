$('.nav').localScroll();
var $btnCollapse = $('.btn-collapse-expand')
var $social = $('.social');
$btnCollapse.on('click', function () {
    $social.toggleClass('js-collapse');    
});;

var $nav = $('.nav');
var $navBtn = $('.nav-btn');

$navBtn.on('click', function () {
  $nav.toggleClass('is-open');
});