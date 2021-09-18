import { checkWinner } from "./checkWinner.js";

export function checkGame(step) {
    let winner = checkWinner();

    if (isStepOver(step) && winner === -1) {
        return "game ended in a draw"
    }

    if (winner === 1){
        return 'won the first player'
    }

    if (winner === 2){
        return  'won the second player'
    }
}

function isStepOver (step) {
    return (step === Number(9))
}