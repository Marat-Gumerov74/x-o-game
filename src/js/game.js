import { Display } from "./display.js";

export class Game {
    constructor() {
        this.step = 0;
        this.resultGame = null;
        this.display = new Display();
        this.start();
    }

    start() {
        this.display.renderField();
        this.display.startInfo();
        this.onListen();
    }

    checkGame(step) {
        let winner = this.checkWinner();
        const isStepOver = (step) => step === Number(9)
        let result = (isStepOver(step) && winner === -1)?
                        "game ended in a draw":
                     (winner === 1)?
                         'won the first player':
                     (winner === 2)?
                         'won the second player':
                         'error'

        this.resultGame = result;
    }

    checkWinner () {
        let allblock = document.querySelectorAll('.block');
        let winner;
        if (
            (allblock[0].innerHTML==="X" && allblock[1].innerHTML==="X" && allblock[2].innerHTML === 'X') ||
            (allblock[3].innerHTML==="X" && allblock[4].innerHTML==="X" && allblock[5].innerHTML === 'X') ||
            (allblock[6].innerHTML==="X" && allblock[7].innerHTML==="X" && allblock[8].innerHTML === 'X') ||
            (allblock[0].innerHTML==="X" && allblock[3].innerHTML==="X" && allblock[6].innerHTML === 'X') ||
            (allblock[1].innerHTML==="X" && allblock[4].innerHTML==="X" && allblock[7].innerHTML === 'X') ||
            (allblock[2].innerHTML==="X" && allblock[5].innerHTML==="X" && allblock[8].innerHTML === 'X') ||
            (allblock[0].innerHTML==="X" && allblock[4].innerHTML==="X" && allblock[8].innerHTML === 'X') ||
            (allblock[0].innerHTML==="X" && allblock[4].innerHTML==="X" && allblock[8].innerHTML === 'X') ||
            (allblock[6].innerHTML==="X" && allblock[4].innerHTML==="X" && allblock[2].innerHTML === 'X')
        )
        {
            winner = 1;
        } else if (
            (allblock[0].innerHTML==="O" && allblock[1].innerHTML==="O" && allblock[2].innerHTML==="O" ) ||
            (allblock[3].innerHTML==="O" && allblock[4].innerHTML==="O" && allblock[5].innerHTML==="O" ) ||
            (allblock[6].innerHTML==="O" && allblock[7].innerHTML==="O" && allblock[8].innerHTML==="O" ) ||
            (allblock[0].innerHTML==="O" && allblock[3].innerHTML==="O" && allblock[6].innerHTML==="O" ) ||
            (allblock[1].innerHTML==="O" && allblock[4].innerHTML==="O" && allblock[7].innerHTML==="O" ) ||
            (allblock[2].innerHTML==="O" && allblock[5].innerHTML==="O" && allblock[8].innerHTML==="O" ) ||
            (allblock[0].innerHTML==="O" && allblock[4].innerHTML==="O" && allblock[8].innerHTML==="O" ) ||
            (allblock[6].innerHTML==="O" && allblock[4].innerHTML==="O" && allblock[2].innerHTML==="O" )
        ) {
            winner = 2;
        } else {
            winner = -1;
        }
        return winner;
    }

    onStep(event) {
        this.checkGame(this.step);
        if (event.target.className === 'block' && !this.resultGame && event.target.innerHTML === "") {
            if(this.step % 2 === 0) {
                event.target.innerHTML = 'X';
            } else {
                event.target.innerHTML = 'O';
            }
            this.step += 1;
            this.checkGame(this.step);
            if (this.resultGame) {
                this.offListen();
                this.display.announcedWinner(this.resultGame);
            }
        }
    }

    onListen() {
        document.getElementById('game')
            .addEventListener('click', this.onStep );
    }

    offListen() {
        document.getElementById('game').removeEventListener('click', this.onStep)
    }



// код из index.js который я хочу переработать в классе в game
    //     let step = this.step;
    //
    //     let onStep = function (event) {
    //         let game = this.checkGame(step);
    //         let result = this.resultGame;
    //         if (event.target.className === 'block' && !resultGame && event.target.innerHTML === "") {
    //             if(step % 2 === 0) {
    //                 event.target.innerHTML = 'X';
    //             } else {
    //                 event.target.innerHTML = 'O';
    //             }
    //             step++;
    //             this.step = step;
    //             this.resultGame = this.checkGame(step);
    //             if (this.resultGame) {
    //                 document.getElementById('game').removeEventListener('click', onStep)
    //                 this.announcedWinner(this.resultGame);
    //             }
    //         }
    //     }
    //
    // document.getElementById('game')
    //     .addEventListener('click',  onStep );
    // }

}