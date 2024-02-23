class Studente {

    static matricolaProg = 0;

    constructor(nome, cognome, eta) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.matricola = Studente.matricolaProg;
        Studente.matricolaProg += 1;
    }

    isMaggior() {
        esito = false;

        if(eta>=18) {
            esito = true;
        }

        return esito;
    }

    toString() {
        return "Nome: " + this.nome + "\nCognome: " + this.cognome + "\nEta: " + this.eta + "\nMatricola: " + this.matricola;
    }
}

function nuovoStud() {
    newStud = new Studente(document.getElementById("nome").value, document.getElementById("cognome").value, document.getElementById("eta").value);
    studenti.push(newStud);
    popolaSelect();
}

function popolaSelect() {
    const select = document.getElementById("selectStud");

    select.innerHTML = '';

    studenti.forEach(studenteTemp => {
        const option = document.createElement('option');
        option.text = studenteTemp.nome + ' ' + studenteTemp.cognome;
        select.add(option);
    });
}

let studenti = [];