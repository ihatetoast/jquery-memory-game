// js code
// document.getElementById("js-btn").addEventListener("click", () => {
//   alert("JS compiles!!");
// });

const imageArray = [
  "circle1",
  "circle2",
  "circle3",
  "circle4",
  "cube1",
  "cube2",
  "octogon1",
  "octogon2",
  "rhombi1",
  "rhombi2",
  "square1",
  "square2",
  "star1",
  "star2",
  "star3",
  "star4",
  "triangle1",
  "triangle2",
  "triangle3",
  "triangle4",
      ];



// jquery code


$(document).ready(function(){

  // duplicate imageArray
  const workingImgArr = [...imageArray]
  // shuffle and then take 12 (or whatever)
  const subArr = workingImgArr.sort(()=>0.5 - Math.random()).slice(0,12);
  // double up the array so there are two of each card. shuffle again.
  const gameArr = [...subArr, ...subArr].sort(()=>0.5 - Math.random());
 

  $(gameArr).each(function(i, e){
    $("#images").append(`<div id=${e} class="img-card" ><img src='./images/${e}.jpg' alt='shape' class="card-img"/></div>`)
  })

  // RESET GAME: RESHUFFLE AND HIDE CARDS
  function ResetGame(){
    console.log("reset game fired");
    $(".card-img").css("display", "none")
  }

  
  // $(".card-img").css("visibility", "hidden")
  $("#reset").on('click', function(){
    ResetGame();
  })
  
});