// js code
// document.getElementById("js-btn").addEventListener("click", () => {
//   alert("JS compiles!!");
// });

const imageArray = [
  "images/circle1.jpg",
  "images/circle2.jpg",
  "images/circle3.jpg",
  "images/circle4.jpg",
  "images/cube1.jpg",
  "images/cube2.jpg",
  "images/octogon1.jpg",
  "images/octogon2.jpg",
  "images/rhombi1.jpg",
  "images/rhombi2.jpg",
  "images/square1.jpg",
  "images/square2.jpg",
  "images/star1.jpg",
  "images/star2.jpg",
  "images/star3.jpg",
  "images/star4.jpg",
  "images/triangle1.jpg",
  "images/triangle2.jpg",
  "images/triangle3.jpg",
  "images/triangle4.jpg",

      ];



// jquery code


$(document).ready(function(){
  function ResetGame(){
    console.log("reset game fired");
  }

  // shuffle array. get 8 once shuffled.
  const subArr = imageArray.sort(()=>0.5 - Math.random()).slice(0,18);
  // double up the array so there are two of each card. shuffle again.
  const gameArr = [...subArr, ...subArr].sort(()=>0.5 - Math.random());
  $(gameArr).each(function(i, e){
    $("#images").append(`<div class="img-card col-3  col-md-2"><img src='./${e}' alt='shape' /></div>`)
  })
  $("#reset").on('click', function(){
    ResetGame();
  })
  
});