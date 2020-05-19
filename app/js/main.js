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
let moves = 0;
let pairsMatched = 0;
let message = '';
let subArr = [];
$(document).ready(function(){

 
 function shuffleImages(){
  $("#images div").detach();
 // duplicate imageArray
  const workingImgArr = [...imageArray]
  // shuffle and then take 12 (or whatever)
  subArr = workingImgArr.sort(()=>0.5 - Math.random()).slice(0,2);
  // double up the array so there are two of each card. shuffle again.
  const gameArr = [...subArr, ...subArr].sort(()=>0.5 - Math.random());
  console.log(subArr.length);
  $(gameArr).each(function(i, e){
      $("#images").append(`<div id=${i}-${e} class="img-card" ><img src='./images/${e}.jpg' alt='shape' class="card-img"/></div>`)
      
    })
    $("#images div").click(showCard);
 }
 
// SHOW CARDS & CHECK IF THE CARDS MATCH. 
// IF THEY DO, KEEP THEM SHOWING. IF THEY DO NOT, HIDE
function showCard(){
  let id=$(this).attr("id");
  if($(`#${id} img`).is(":hidden")){
    $(`#${id} img`).css("display", "block");

    if(!imgName1){
      divId = id;
      imgName1 = $(`#${id} img`).attr('src');
      console.log("imgName1 is", imgName1);
    } else{
      let currentImg = $(`#${id} img`).attr('src');
      console.log("currentImg is", currentImg);
      if(imgName1 !== currentImg){
        setTimeout(()=>{
          $(`#${id} img`).css("display", "none");
          $(`#${divId} img`).css("display", "none");
        divId = "";
        imgName1 = "";
        message = ""
        $("#message").text(message);
        }, 600);
        message = "not a match!"
        $("#message").text(message);
        $("#message").text(message);
        setTimeout(()=>{
          message = ""
          $("#message").text(message);
        }, 610);
        moves++;
      } else{
        pairsMatched++;
        divId = "";
        imgName1 = "";
        moves++;
        if(pairsMatched === subArr.length){
          message = `All pairs matched in ${moves} moves! Game over.`
          $("#message").text(message);
          
        } else {
          message = "A match!"
          $("#message").text(message);
          setTimeout(()=>{
            message = ""
            $("#message").text(message);
          }, 610);
        }
      }
     
      $("#moves").text(moves);    

    }  
   
  }
  console.log(`pairsMatched is ${pairsMatched}`);
}

  // RESET GAME: RESHUFFLE AND HIDE CARDS
  function ResetGame(){
   
    imgName1 = "";
    divId = "";
    moves = 0;
    pairsMatched = 0;
    message = '';
   
    $("#moves").text(moves);
    
    shuffleImages();
    // $("#images div").click(showCard);
   
   
  }

  
  shuffleImages();

  $("#reset").click(ResetGame);
  // $("#images div").click(showCard);
 
  
});