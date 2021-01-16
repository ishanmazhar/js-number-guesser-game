let startBtn = document.getElementById('start-btn');

		startBtn.addEventListener('click', myFunc);

    	function myFunc() {
			function getRandomInt(min, max) {
    			min = Math.ceil(min);
    			max = Math.floor(max);
    			return Math.floor(Math.random() * (max - min) + min);
    		}
   			var rand = getRandomInt(1, 10)

			for(let i = 0; i < 3; i++) {
                var userInput = parseInt(prompt('Input the number from 1 to 10 (inclusive) you have guessed'
                    + '\n' + "Insert 0 (zero) to end the game")); 
				console.log(userInput);

				if(isNaN(userInput)){
                    alert('Pleasue insert a number from 1 to 10 inclusive!'
                    + '\n' + "Insert 0 (zero) to end the game");
				}
				if (userInput < rand && userInput > 0) { 
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
                else if (userInput == 0) {
					result = "Game Terminated!"; 
					alert(result);
					return;
				} 
			}

			if(userInput < rand || userInput > rand || isNaN(userInput)) {
				alert("You Lost! Try Again!"); 
			}
    	}