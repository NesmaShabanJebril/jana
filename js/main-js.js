
$(document).ready(function(){
    $(".open").click(function(){
      $(".open").toggle();
	   $(".close").toggle();
	  $(".sidbar").toggleClass("active");
    });
});
$(document).ready(function(){
    $(".close").click(function(){
      $(".open").toggle();
	   $(".close").toggle();
	  $(".sidbar").toggleClass("active");
    });
});
// ============================================================================
// btn-plus and btn-minus in "#order-detail-content" table
// ============================================================================

  $('.btn-plus').on('click', function () {
    var $count = $(this).parent().find('.count');
    var val = parseInt($count.val(),10);
    $count.val(val+1);
    return false;
  });

  $('.btn-minus').on('click', function () {
    var $count = $(this).parent().find('.count');
    var val = parseInt($count.val(),10);
    if(val > 0) $count.val(val-1);
    return false;
  });
$(".heart").click(function(){
    $(this).children(".heart-none").toggleClass("display-block");
    $(this).children(".heart-block").toggleClass("display-none");
    $(this).toggleClass("fas-heart");

});
const allRanges = document.querySelectorAll(".range-wrap");
allRanges.forEach(wrap => {
  const range = wrap.querySelector(".range");
  const bubble = wrap.querySelector(".bubble");

  range.addEventListener("input", () => {
    setBubble(range, bubble);
  });
  setBubble(range, bubble);
});

function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = val;

  // Sorta magic numbers based on size of the native UI thumb
  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}