$(function(){
//Build a variable to collect additional time
var time = 0;
var recentValue = 0;
var snd = new Audio("assets/talk.mp3");
var aah = new Audio("assets/aah.mp3");
var ooh = new Audio("assets/ooh.mp3");
//typeOfParty 

	$('#submit').on('click', function(e){
		time = 0;

		
		var typeOfParty = $('input[name="clothing"]:checked').val();
		var timeToDest = $('select option:selected').val();
		var clean = $('input[name="cleanBody"]:checked').val();
		var makeup = $('input[name="makeup"]').val();
		var procrastinate = $('input[name="procrastinate"]:checked').val();
		var arrival = $('input[name="arrival"]:checked').val();
		typeOfParty = parseInt(typeOfParty)
		timeToDest = parseInt(timeToDest);
		clean = parseInt(clean);
		makeup = parseInt(makeup);
		procrastinate = parseInt(procrastinate);
		arrival = parseInt(arrival);

	    var sel = $('input[type=checkbox]:checked').map(function(_, el) {
	        return $(el).val();
	    });
	    sel.get().forEach(function(option) {
	    	time = time + parseInt(option);
	    });

		time = time + typeOfParty + timeToDest + clean + makeup + procrastinate; 
		console.log(time);
		var hours = Math.floor(time / 60);
		var minutes = time % 60;
		console.log(hours);   
		console.log(minutes);
		$('.estimatedTime').removeClass('invisible');
		$('fieldset').addClass('invisible');
		$('.sassy').addClass('invisible');
		if (hours === 0){
			$('.estimatedTime__text').text("You need to get ready "+ time + " minutes in advance!  or dont... I dont care do whatever you want");
		}else if (hours === 1 && minutes!==0){
			$('.estimatedTime__text').text(`You need to get ready one hour and ${minutes} minutes in advance!  or dont... I dont care do whatever you want`);
		}else if (hours === 1){
			$('.estimatedTime__text').text(`You need to get ready one hour in advance!  or dont... I dont care do whatever you want`);
		}else if (hours > 1 && minutes ===0){
			$('.estimatedTime__text').text(`You need to get ready ${hours} hours in advance  or dont... I dont care do whatever you want`);
		}else{
			$('.estimatedTime__text').text(`You need to get ready ${hours} hours and ${minutes} minutes in advance  or dont... I dont care do whatever you want`);
		}
	});

//Index to quiz
	$("p a").hover(function () {
    	ooh.play();
    	console.log("hi");
});

//Click - text
//time to destination
	$('.timeToDest__button').on('click', function(){
		$(".typeOfParty").removeClass("invisible");
		$(".timeToDest").addClass("invisible");
	});
//type of party
	$('#typeOfParty--fancy').on('click', function(){
		// snd.play();
		$('.assistant').attr('src','assets/assistant--oneHand.svg');
		$('.sassy').text(`Maybe this time you wont be confused for the help.`);
		$('.sassy').removeClass('invisible');

	});
	$('#typeOfParty--casual').on('click', function(){
		// aah.play();
		$('.sassy').text(`There is a thin line between your "casual look" and looking homeless.`);
		$('.assistant').attr('src','assets/assistant--eyebrowUpAndDown.svg');
		$('.sassy').removeClass('invisible');
	});
	$('#typeOfParty--ready').on('click', function(){
		// aah.play();
		$('.sassy').text(`It's so refreshing to meet someone who doesn't care how they look!`);
		$('.sassy').removeClass('invisible');
	});
	
	$('.typeOfParty__button').on('click', function(){
		$(".clean").removeClass("invisible");
		$(".typeOfParty").addClass("invisible");
		$('.sassy').addClass("invisible");
		$('.assistant').attr('src','assets/assistant--eyebrowUpAndDown.svg');
	});
//clean
	$('#clean--clean').on('click', function(){
		$('.assistant').attr('src','assets/assistant--sick.svg')
		$('.sassy').text(`You are as disgusting as I thought`);
		$('.sassy').removeClass('invisible');
	});
	$('#clean--touchUp').on('click', function(){
		$('.assistant').attr('src','assets/assistant--eyebrowUpAndDown.svg')
		$('.sassy').text(`I didn't know you could wash off ugly`);
		$('.sassy').removeClass('invisible');
	});
	$('#clean--shower').on('click', function(){
		$('.assistant').attr('src','assets/assistant--oneHand.svg')
		$('.sassy').text(`That's a REALLY good idea`);
		$('.sassy').removeClass('invisible');
	});
	$('#clean--disgusting').on('click', function(){
		$('.assistant').attr('src','assets/assistant--oneHand.svg')
		$('.sassy').text(`I couldnt have said it better`);
		$('.sassy').removeClass('invisible');
	});
	$('.clean__button').on('click', function(){
		$(".grooming").removeClass("invisible");
		$(".clean").addClass("invisible");
		$('.sassy').addClass("invisible");
		$('.assistant').attr('src','assets/assistant--eyebrowUpAndDown.svg');
	});
//grooming
	$('#grooming--shave').on('click', function(){
		if(this.checked){
			$('.sassy').text(`I was worried you were going to go out looking like... that`);
			$('.sassy').removeClass('invisible');
			$('.assistant').attr('src','assets/assistant--eyebrowUpAndDown.svg')
		}else{
			$('.sassy').text(`Really? Not shaving?`);
			$('.assistant').attr('src','assets/assistant--sick.svg')
			$('.sassy').removeClass('invisible');
		}
	});
	$('#grooming--brushTeeth').on('click', function(){
		if(this.checked){
			$('.sassy').text(`Probably a good idea`);
			$('.sassy').removeClass('invisible');
			$('.assistant').attr('src','assets/assistant--eyebrowUpAndDown.svg')
		}else{
			$('.sassy').text(`I doubt anyone is going to talk to you anyway.`);
			$('.sassy').removeClass('invisible');
			$('.assistant').attr('src','assets/assistant--sick.svg')
		}
	});
	$('#grooming--hair').on('click', function(){
		if(this.checked){
			$('.sassy').text(`I'll bring out the weedwacker`);
			$('.sassy').removeClass('invisible');
			$('.assistant').attr('src','assets/assistant--eyebrowUpAndDown.svg')
		}else{
			$('.sassy').text(`That comb over isnt going to comb itself`);
			$('.sassy').removeClass('invisible');
			$('.assistant').attr('src','assets/assistant--angry.svg')
		}
	});
	$('.grooming__button').on('click', function(){
		$(".makeup").removeClass("invisible");
		$(".grooming").addClass("invisible");
		$('.sassy').addClass("invisible");
		$('.assistant').attr('src','assets/assistant--eyebrowUpAndDown.svg');
	});
//makeup
	// if the value is <20 then alert ok
	$("#makeup").on("input change", function() { 
		var makeupvar = $('input[name="makeup"]').val();
		if(makeupvar < 10) {
			$('.clown').attr('src','assets/littleGhost.png');
			console.log('clown');
			// var makeup = document.querySelector(".clown");
			// makeup.style.marginLeft = '0';
			$('.sassy').text(`I can't tell if you are sick or this is your "natural" look`);
			$('.sassy').removeClass('invisible');
		}else if(makeupvar < 20){
			$('.clown').attr('src','assets/secondGhost.png');
			// var makeup = document.querySelector(".clown");
			// makeup.style.marginLeft = '120px';
			$('.sassy').text(`I don't think the expression less is more applies to you`);
			$('.sassy').removeClass('invisible');
			console.log('>60');
		}else if(makeupvar < 30){
			$('.clown').attr('src','assets/ghost3.png');
			// var makeup = document.querySelector(".clown");
			// makeup.style.marginLeft = '250px';
			$('.sassy').text(`Oh wow you look beautiful!  I could hardly recognize you.`);
			$('.sassy').removeClass('invisible');
			console.log(">90");
		}else if(makeupvar >= 30){
			$('.clown').attr('src',"assets/clown.png");
			// var makeup = document.querySelector(".clown");
			// makeup.style.marginLeft = '350px';
			// makeup.style.width = '100%'
			console.log("120");
			$('.sassy').text(`Do you want me to bring out your brushes or a bucket?`);
			$('.sassy').removeClass('invisible');
		}

		var makeup = document.querySelector(".clown");
		makeup.style.t = "10%";
	});
	$('.makeup__button').on('click', function(){
		$(".procrastinate").removeClass("invisible");
		$(".makeup").addClass("invisible");
		$('.sassy').addClass("invisible");
		$('.assistant').attr('src','assets/assistant--eyebrowUpAndDown.svg');
	});
//procrastinate
	$('#procrastinate--yes').on('click', function(){
		$('.assistant').attr('src','assets/assistant--angry.svg');
		$('.sassy').text(`Maybe if you actually cared about being on time you wouldn't need my help.`);
		$('.sassy').removeClass('invisible');
		
	});
	$('#procrastinate--no').on('click', function(){
		$('.sassy').text(`Are you sure about that? I guess you are just really slow.`);
		$('.sassy').removeClass('invisible');
	});
	$('.procrastinate__button').on('click', function(){
		$(".arrival").removeClass("invisible");
		$(".procrastinate").addClass("invisible");
		$('.sassy').addClass("invisible");
		$('.assistant').attr('src','assets/assistant--eyebrowUpAndDown.svg');
	});
//arrival
	$('#arrival--ok').on('click', function(){
		$('.sassy').text(`I think your friends need to choose better friends.`);
		$('.sassy').removeClass('invisible');
		
	});
	$('#arrival--late').on('click', function(){
		$('.assistant').attr('src','assets/assistant--eyebrowUpAndDown.svg');
		$('.sassy').text(`Finally thinking about other people I see.`);
		$('.sassy').removeClass('invisible');
		
	});
});

	// $('input[name="clothing"]').on('change', function(){
	// 	console.log("final tiiim", time);
	// // });

	// $('select').on('change', function(){
	// 	var timeToDest = $('select option:selected').val();


	// 	time = time + timeToDest;
	// 	console.log("final time", time);
	// });

	// console.log(time);


	// $('form').on('submit', function(e){
	// 	e.preventDefault();
	// });

	// $('#typeOfParty--fancy').on('change',function(){

	// 	// time =- recentValue;
	// 	// recentValue = 20;
	// 	// time =+ recentValue;
	// 	// console.log(time);
	// });
	// console.log("updated time", time)
	
// 	$('#typeOfParty--casual').on('click',function(){
// 		time =- recentValue;
// 		recentValue = 10;
// 		time =+ recentValue;
// 		console.log(time);
// 	});

// 	$('#typeOfParty--ready').on('click',function(){
// 		time =- recentValue;
// 		recentValue = 0;
// 		time =+ recentValue;
// 		console.log(time);
// 	});

// //time to destination
// 	$('#typeOfParty--casual').on('click',function(){
// 		time =- recentValue;
// 		recentValue = 10;
// 		time =+ recentValue;
// 		// console.log(time);
// 	});