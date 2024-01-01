class Cronometro {

    constructor(telaMinutos, telaSegundos, telaMilisegundos) {
        this.telaMinutos = telaMinutos;
        this.telaSegundos = telaSegundos;
        this.telaMilisegundos = telaMilisegundos;
        this.btnIniciar = false;
        this.btnPause = false;
        this.btnParar = false;
        this.meuinterval = '';
        this.currentResultado = [];
    }

    rodarCronometro(minutos, segundos, milisegundos) {
        let countMilisegundos = milisegundos;
        let countSegundos = segundos;
        let coutMinutos = minutos;

        this.meuinterval = setInterval(() => {

            if(countMilisegundos < 10) {
                this.telaMilisegundos.innerText = '0'+countMilisegundos++;
            }else {
                this.telaMilisegundos.innerText = countMilisegundos++;

                if(countMilisegundos >= 99) {
                    countMilisegundos = 0;
                    countSegundos++;

                    if(countSegundos < 10) {
                        this.telaSegundos.innerText = '0'+countSegundos;
                    }else {
                        this.telaSegundos.innerText = countSegundos;

                        if(countSegundos >= 60) {
                            countSegundos = 0;
                            coutMinutos++;
                            
                            if(coutMinutos < 10) {
                                this.telaMinutos.innerText = '0'+coutMinutos;
                            }else {
                                this.telaMinutos.innerText = coutMinutos;
                                
                            }
                        }
                    }
                }
            }

        }, 10);
    }

    iniciarCronometro() {
        if(this.btnIniciar === false && this.btnPause === false && this.btnParar === false) {
            this.btnIniciar = true;
            this.btnPause = false;
            this.btnParar = false;

            this.rodarCronometro(0, 0, 0);
        }else if(this.btnIniciar === false && this.btnPause === true && this.btnParar === false) {
            this.btnIniciar = true;
            this.btnPause = false;
            this.btnParar = false;
        
            this.rodarCronometro(this.currentResultado[0]['minutos'], this.currentResultado[0]['segundos'], this.currentResultado[0]['milisegundos']);

            this.currentResultado.pop();
        }else {
            return;
        }
    }

    pausarCronometro() {
        if(this.btnIniciar === true && this.btnPause === false && this.btnParar === false) {

            this.currentResultado.push({
                minutos: +this.telaMinutos.innerText,
                segundos: +this.telaSegundos.innerText,
                milisegundos: +this.telaMilisegundos.innerText
            });

            clearInterval(this.meuinterval);
            
            this.btnIniciar = false;
            this.btnPause = true;
            this.btnParar = false;
        }else {
            return;
        }
    }

    pararCronometro() {
        clearInterval(this.meuinterval);
        this.telaMinutos.innerText = '00';
        this.telaSegundos.innerText = '00';
        this.telaMilisegundos.innerText = '00';
        this.btnIniciar = false;
        this.btnPause = false;
        this.btnParar = false;
        this.meuinterval = '';
        this.currentResultado.pop();
    }
}