new Vue({
    el: "#app",

    data: {
        gameInProgress: false,
        playerHealth: 100,
        monsterHealth: 100,
        logOfTurns: [],
        winnerExists: false
    },

    methods: {
        startGame() {
            this.gameInProgress = true
            this.playerHealth = 100
            this.monsterHealth = 100
            this.logOfTurns= []
            this.winnerExists = false
        },

        attack() {
            let playerAttackStrength = Math.ceil(Math.random() * 10)
            let monsterAttackStrength = Math.ceil(Math.random() * 8)
            
            this.updateHealth(playerAttackStrength, monsterAttackStrength)

            this.logOfTurns.unshift(['Player hits monster for ' + playerAttackStrength,
                'Monster hits player for ' + monsterAttackStrength])
        },

        specialAttack() {
            let playerAttackStrength = Math.ceil(Math.random() * 10)
            let monsterAttackStrength = Math.ceil(Math.random() * 6)
            
            this.updateHealth(playerAttackStrength, monsterAttackStrength)

            this.logOfTurns.unshift(['Player hits monster for ' + playerAttackStrength,
                'Monster hits player for ' + monsterAttackStrength])
        },

        heal() {
            let yourHealAmount = Math.ceil(Math.random() * 6)
            let monsterAttackStrength = Math.ceil(Math.random() * 2)

            if (this.playerHealth + yourHealAmount - monsterAttackStrength > 100) {
                this.logOfTurns.unshift(['Player heals for ' + 
                (100 - this.playerHealth + monsterAttackStrength),
                'Monster hits player for ' + monsterAttackStrength])
                
                this.playerHealth = 100
            } else {
                this.playerHealth += yourHealAmount - monsterAttackStrength

                this.logOfTurns.unshift(['Player heals for ' + yourHealAmount,
                'Monster hits player for ' + monsterAttackStrength])
            }
        },

        updateHealth(playerAttackStrength, monsterAttackStrength) {
            this.playerHealth -= monsterAttackStrength
            this.monsterHealth -= playerAttackStrength
        },

        giveUpGame() {
            this.gameInProgress = false
        },

        playerOrMonsterClass(index) {
            if (index === 0) {
              return 'player-turn'
            } else {
              return 'monster-turn'
            }
        },
    },

    watch: {
        playerHealth() {
            if (this.playerHealth <= 0 || this.monsterHealth <= 0) {
                this.winnerExists = true
                this.gameInProgress = false
            } 
        }
    }
})