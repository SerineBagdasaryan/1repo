function changeColor(x) {
    x.style.backgroundColor = "orange";
}
function color(x) {
    x.style.backgroundColor = "green";
}

 document.getElementById('btn').onclick = function() {
	var y = document.getElementById('container2');
	y.style.visibility = "visible";
	function sendTitle(){
			document.getElementById("p").innerText = document.getElementById("description").innerHTML;
			document.getElementById("description").innerHTML = "";
	} sendTitle();
}


document.getElementById('bttn').onclick = function() {
	var inp = document.getElementById("input").value;
	var p = document.getElementById("p");    //Task One
	p.innerHTML = inp;
	p.style.visibility = "hidden";
	inp.value = "";
	// p.style.color = "green";

	function myFunction() {
		setInterval(function(){ p.style.visibility = "visible"; }, 1000);	
	}myFunction();

	

// 	var countDownDate = new Date("Sep 5, 2018 15:37:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//     // Get todays date and time
//     var now = new Date().getTime();
    
//     // Find the distance between now an the count down date
//     var distance = countDownDate - now;
    
//     // Time calculations for days, hours, minutes and seconds
   
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
//     // Output the result in an element with id="demo"
//     document.getElementById("demo").innerHTML =
//      minutes + "m " + seconds + "s ";
    
//     // If the count down is over, write some text 
//     if (distance < 0) {
//         clearInterval(x);
//         document.getElementById("demo").innerHTML = "EXPIRED";
//     }
// }, 1000);
}

var btn = document.getElementById("button");
var input = document.getElementById("myTextarea");
var y = document.getElementById('container1');
btn.addEventListener("click", function(){


	// document.getElementById("description").innerHTML = input.value;
		y.style.visibility = "visible";

			var val = "";
			if(document.getElementById("description").innerHTML === "") {
				document.getElementById("description").innerHTML = input.value;
				input.value = "";
			} else {
				val = document.getElementById("description").innerHTML;
				document.getElementById("description").innerHTML = input.value + val + " ";
				input.value = "";
			}

			if (document.getElementById("button").value == "Send For Working") {
				document.getElementById("button").value = "Your task has been sent";
				if(document.getElementById("button").value == "Your task has been sent"){
					setInterval(function(){ document.getElementById("button").value = "Send For Working"; }, 7000);
				}
			}


			
			
	function getTIMESTAMP() {
        var date = new Date();
        var weekday = new Array(7);
	    weekday[0] = "Sunday";
	    weekday[1] = "Monday";
	    weekday[2] = "Tuesday";
	    weekday[3] = "Wednesday";
	    weekday[4] = "Thursday";
	    weekday[5] = "Friday";
	    weekday[6] = "Saturday";

      var year = date.getFullYear();
      var month = ("0"+(date.getMonth()+2)).substr(-2);
      var day = ("0"+date.getDate()).substr(-2);
      var hour = ("0"+date.getHours()).substr(-2);
      var minutes = ("0"+date.getMinutes()).substr(-2);
      var seconds = ("0"+date.getSeconds()).substr(-2);

      	var time = year+"-"+month+"-"+day+" "+hour+":"+minutes+":"+seconds;
        var n = weekday[date.getDay()];
        console.log(year+"-"+month+"-"+day+" "+hour+":"+minutes+":"+seconds);
        document.getElementById("timer").value = time + " " + n;
    }getTIMESTAMP();
	

var myTime = setInterval(function getTIMEstamp() {
      var date = new Date();
      var weekday = new Array(7);
	    weekday[0] = "Sunday";
	    weekday[1] = "Monday";
	    weekday[2] = "Tuesday";
	    weekday[3] = "Wednesday";
	    weekday[4] = "Thursday";
	    weekday[5] = "Friday";
	    weekday[6] = "Saturday";

      var year = date.getFullYear();
      var month = ("0"+(date.getMonth()+1)).substr(-2);
      var day = ("0"+date.getDate()).substr(-2);
      var hour = ("0"+date.getHours()).substr(-2);
      var minutes = ("0"+date.getMinutes()).substr(-2);
      var seconds = ("0"+date.getSeconds()).substr(-2);

      var time = year+"-"+month+"-"+day+" "+hour+":"+minutes+":"+seconds;
       var n = weekday[date.getDay()];
       // console.log(year+"-"+month+"-"+day+" "+hour+":"+minutes+":"+seconds);
      document.getElementById("t").value = time + " " + n;
    }, 1000);

document.getElementById('timer1').onclick = function() {
	clearInterval(myTime);
	// var del = document.getElementById("description");
	// del.style.textDecoration = "line-through <br>";
}

}, false)


function addTask(element){
	element.innerText = input.value;
	element.classList.add("description");
	formGroupDiv.appendChild(element);
} 
