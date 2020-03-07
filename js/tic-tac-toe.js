const ticTacToe = {
    board: ['', '', '', '', '', '', '', '', ''],
    simbols: {
        options: ['X', 'O'],
        turnIndex: 0,
        change: function() {
            this.turnIndex = (this.turnIndex === 0 ? 1 : 0);
        }
    },
    containerElement: null,
    gameOver: false,
    winningSequences: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7]
    ],



    init: function(container) {
        this.containerElement = container;
    },
    play: function(position) {
        if (this.gameOver) return false;
        if (this.board[position] === '') {
            this.board[position] = this.simbols.options[this.simbols.turnIndex];
            this.draw();
            let winningSequencesIndex = this.checkWinner(this.simbols.options[this.simbols.turnIndex]);
            if (winningSequencesIndex >= 0) {
                this.gameIsOver()
            } else {
                this.simbols.change()
            }
            return true
        } else {
            return false
        }
    },

    gameIsOver: function() {
        this.gameOver = true
        console.log('Game Over')


    },

    start: function() {
        this.board.fill('');
        this.draw()
        this.gameOver = false
    },
    checkWinner: function(simbol) {
        for (i in this.winningSequences) {
            if (this.board[this.winningSequences[i][0]] == simbol &&
                this.board[this.winningSequences[i][1]] == simbol &&
                this.board[this.winningSequences[i][2]] == simbol) {

                console.log(`Sequencia vencedora : ${i}`)
                return i;
            }
        };
        return -1
    },

    draw: function() {
        let content = '';
        for (i in this.board) {
            content += '<div onclick="ticTacToe.play(' + i + ')">' + this.board[i] + '</div>';
        }
        this.containerElement.innerHTML = content;
    }

}