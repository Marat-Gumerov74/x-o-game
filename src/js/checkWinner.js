export  function checkWinner () {
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