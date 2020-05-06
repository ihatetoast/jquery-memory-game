
	const imageArray = [
        "images/circle1.jpeg",
        "images/circle2.jpeg",
        "images/circle3.jpeg",
        "images/circle4.jpeg",
        "images/cube1.jpeg",
        "images/cube2.jpeg",
        "images/octogon1.jpeg",
        "images/octogon2.jpeg",
        "images/rhombi1.jpeg",
        "images/rhombi2.jpeg",
        "images/square1.jpeg",
		"images/square2.jpeg",
		"images/star1.jpeg",
        "images/star2.jpeg",
        "images/star3.jpeg",
		"images/star4.jpeg",
		"images/triangle1.jpeg",
        "images/triangle2.jpeg",
        "images/triangle3.jpeg",
		"images/triangle4.jpeg",

					  ];
	
	$(document).ready(function(){
		console.log(imageArray.length);

        const shuffledSubArr = imageArray.sort(()=>0.5 - Math.random()).slice(0,8);
       const gameArr = [...shuffledSubArr, ...shuffledSubArr]
        console.log(shuffledSubArr);
        console.log(gameArr);
	});