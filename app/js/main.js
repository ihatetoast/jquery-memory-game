// js code
// document.getElementById("js-btn").addEventListener("click", () => {
//   alert("JS compiles!!");
// });

const imageArray = [
  "shape1",
  "shape2",
  "shape3",
  "shape4",
  "shape5",
  "shape6",
  "shape7",
  "shape8",
  "shape9",
  "shape10",
  "shape11",
  "shape12",
  "shape13",
  "shape14",
  "shape15",
  "shape16",
  "shape17",
  "shape18",
  "shape19",
  "shape20",
      ];



// jquery code
let imgName1 = "";
let divId = "";
let currentImg="";

$(document).ready(function(){

 
 function shuffleImages(){
  console.log("shuffleImages is fired");
 // duplicate imageArray
  const workingImgArr = [...imageArray]
  // shuffle and then take 12 (or whatever)
  const subArr = workingImgArr.sort(()=>0.5 - Math.random()).slice(0,12);
  // double up the array so there are two of each card. shuffle again.
  const gameArr = [...subArr, ...subArr].sort(()=>0.5 - Math.random());
  $(gameArr).each(function(i, e){
      $("#images").append(`<div id=${i}-${e} class="img-card" ><img src='./images/${e}.jpg' alt='shape' class="card-img"/></div>`)
      
    })
 }
 
// CHECK IF THE CARDS MATCH. 
// IF THEY DO, KEEP THEM SHOWING. IF THEY DO NOT, HIDE

function showCard(){
 
  const id=$(this).attr("id");
  if($(`#${id} img`).is(":hidden")){
    $(`#${id} img`).css("display", "block");

    if(!imgName1){
      divId = id;
      imgName1 = $(`#${id} img`).attr('src');
    } else{
      currentImg = $(`#${id} img`).attr('src');
    }
    console.log(`divId is ${divId}`);
    console.log(`imgName1 is ${imgName1}`);
    console.log(`currentImg is ${currentImg}`);
    
  }
}

  // RESET GAME: RESHUFFLE AND HIDE CARDS
  function ResetGame(){
    console.log("reset game fired");
    // $(".card-img").css("display", "none");
    $("#images").empty();
    shuffleImages();
  }

  
  shuffleImages();

  $("#reset").on('click', function(){
    ResetGame();
  });
  $("#images div").click(showCard)

  
});