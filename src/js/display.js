export class Display {
    renderField () {
        for (let i = 0; i < 9; i++) {
            document.getElementById('game').innerHTML += '<div class="block"></div>';
        }
    }

    startInfo () {
        document.body.insertAdjacentHTML('afterbegin', `<span class="info"><strong>
            Let's play!</strong> <br> The first player plays 'X'. The second player plays 'X'</span>`);
    }

    announcedWinner(src) {
        document.querySelector('.info')
            .insertAdjacentHTML('afterend', `<p class="win"><strong>${src}</strong></p>`);
    }

}