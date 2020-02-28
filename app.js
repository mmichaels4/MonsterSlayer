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
            let yourAttackStrength = Math.ceil(Math.random() * 10)
            let monsterAttackStrength = Math.ceil(Math.random() * 8)
            
            this.playerHealth -= monsterAttackStrength
            this.monsterHealth -= yourAttackStrength

            this.logOfTurns.unshift(['Player hits monster for ' + yourAttackStrength,
                'Monster hits player for ' + monsterAttackStrength])
        },

        specialAttack() {
            let yourAttackStrength = Math.ceil(Math.random() * 10)
            let monsterAttackStrength = Math.ceil(Math.random() * 6)
            
            this.playerHealth -= monsterAttackStrength
            this.monsterHealth -= yourAttackStrength

            this.logOfTurns.unshift(['Player hits monster for ' + yourAttackStrength,
                'Monster hits player for ' + monsterAttackStrength])
        },

        heal() {
            let yourHealAmount = Math.ceil(Math.random() * 6)
            let monsterAttackStrength = Math.ceil(Math.random() * 2)
            
            this.playerHealth += (yourHealAmount - monsterAttackStrength)

            this.logOfTurns.unshift(['Player heals for ' + yourHealAmount,
                'Monster hits player for ' + monsterAttackStrength])

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