export class Info {

    startInfo () {
        document.body.insertAdjacentHTML('afterbegin', `<span class="info"><strong>
            Let's play!</strong> <br> The first player plays 'X'. The second player plays 'X'</span>`);
    }

    announcedWinner(src) {
        document.querySelector('.info')
            .insertAdjacentHTML('afterend', `<p class="win"><strong>${src}</strong></p>`);
    }

    displayScore(data) {
        document.querySelector('.info')
            .insertAdjacentHTML("afterend", `
                <p>
                    <h4>Счет</h4><br>
                    <span>${data[0]}</span>
                    <span>${data[1]}</span>
                </p>
            `)
    }

    loadScore() {
        let data = sessionStorage.getItem('score');
        if (data) {
            this.displayScore(data)
        }
    }
}