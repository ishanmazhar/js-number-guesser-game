let startBtn = document.getElementById('start-btn');

		startBtn.addEventListener('click', myFunc);

    	function myFunc() {
			function getRandomInt(min, max) {
    			min = Math.ceil(min);
    			max = Math.floor(max);
    			return Math.floor(Math.random() * (max - min) + min);
    		}
   			var rand = getRandomInt(1, 5)

			for(let i = 0; i < 3; i++) {
				var userInput = parseInt(prompt('Input the number from 1 to 5 (inclusive) you have guessed'));
				console.log(userInput);

				if(isNaN(userInput)){
					alert('Pleasue insert a number from 1 to 5 inclusive!');
				}
				if (userInput < rand) {
   					var result = "Correct answer is greater!";
				   	alert(result);
				   	console.log(`rand = ${rand}`);
   				} else if(userInput > rand) {
   					result = "Correct answer is smaller!";
					alert(result);
					console.log(`rand = ${rand}`);
   				} else if (userInput == rand) {
					result = "You win!!";
					alert(result);
					return;
				} 
			}

			if(userInput < rand || userInput > rand || isNaN(userInput)) {
				alert("You Lose!");
			}
    	}