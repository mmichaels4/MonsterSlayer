new Vue({
    el: "#app",

    data: {
        gameInProgress: false,
        yourHealth: 100,
        monsterHealth: 100,
        logOfTurns: []
    },

    computed: {
        yourHealthbar() {
            return {
                width: this.yourHealth+'%',
                height: 40+'px',
                backgceilColor: '#eee',
                margin: 'auto',
                transition: 'width '+ 500 + 'ms'
            }
        },

        monsterHealthbar() {

        }

    },

    methods: {
        startGame() {
            this.gameInProgress = true
            this.yourHealth = 100
            this.monsterHealth = 100
        },

        attack() {
            let yourAttackStrength = Math.ceil(Math.random() * 10)
            let monsterAttackStrength = Math.ceil(Math.random() * 8)
            
            this.yourHealth -= monsterAttackStrength
            this.monsterHealth -= yourAttackStrength

            this.logOfTurns.unshift(['Player hits monster for ' + yourAttackStrength,
                'Monster hits player for ' + monsterAttackStrength])
        },

        specialAttack() {
            let yourAttackStrength = Math.ceil(Math.random() * 10)
            let monsterAttackStrength = Math.ceil(Math.random() * 6)
            
            this.yourHealth -= monsterAttackStrength
            this.monsterHealth -= yourAttackStrength

            this.logOfTurns.unshift(['Player hits monster for ' + yourAttackStrength,
                'Monster hits player for ' + monsterAttackStrength])
        },

        heal() {
            let yourHealAmount = Math.ceil(Math.random() * 6)
            let monsterAttackStrength = Math.ceil(Math.random() * 2)
            
            this.yourHealth += (yourHealAmount - monsterAttackStrength)

            this.logOfTurns.unshift(['Player heals for ' + yourHealAmount,
                'Monster hits player for ' + monsterAttackStrength])

        },

        giveUpGame() {
            this.gameInProgress = false
            this.logOfTurns = []
        },

        playerOrMonsterClass(index) {
            if (index === 0) {
              return 'player-turn'
            } else {
              return 'monster-turn'
            }
          }

    },

    watch: {

    }
})