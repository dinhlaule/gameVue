new Vue({
	el: '#app',
	data: {
		playerHealth: 100,
		monsterHealth: 100,
		gameIsRunning: false
	},
	methods: {
		startGame: function() {
			this.gameIsRunning = !this.gameIsRunning;
			this.playerHealth = 100;
			this.monsterHealth = 100;
		},
		attack: function() {
			if (this.checkPlayerOptions()) {
				return;
			}
			this.playerHealth -= this.inputDamage(25, 15);

			this.monsterHealth -= this.inputDamage(26, 16);
		},
		specialAttack: function() {
			if (this.checkPlayerOptions()) {
				return;
			}
			this.playerHealth -= this.inputDamage(80, 50);

			this.monsterHealth -= this.inputDamage(90, 55);
		},
		heal: function() {
			if (this.playerHealth > 70) {
				return false;
			} else {
				this.playerHealth += 15;
			}
		},
		giveUp: function() {
			this.gameIsRunning = false;
			alert("You lost!");
			this.playerHealth = 100;
			this.monsterHealth = 100;
		},
		inputDamage: function(maxDamage, minDamage) {
			return Math.random((maxDamage + minDamage)/2) + 4;
		},
		checkPlayerOptions: function() {
			if (this.monsterHealth <= 0) {
				if(confirm('You won! New game?')) {
					this.startGame();
				} else {
					this.gameIsRunning = false;
				}
				return true;
			} else if (this.playerHealth <= 0) {
				if(confirm('You lost! New game?')) {
					this.startGame();
				} else {
					this.gameIsRunning = false;
				}
				return true;
			}
			return;
		}
	}
});