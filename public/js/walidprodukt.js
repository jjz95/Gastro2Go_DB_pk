function walidprodukt(){
var x = document.getElementById("wnazwa").value;
    if (x == "") {
        wnazwa.style.borderColor = 'red';
        wnazwa.focus();
        nazwa_error.textContent = "Pole Nazwa jest wymagane!";
        nazwa_error.style.color = 'red';
        return false;
    }
    else {
        nazwa_error.textContent = "";
        wnazwa.style.borderColor = '';
        wnazwa.focus();
    }
    var nameReg = /^([a-zA-Z]{2,})?$/;
    if (!nameReg.test(document.getElementById("wnazwa").value)) {
        wnazwa.style.borderColor = 'red';
        wnazwa.focus();
        nazwa_error.textContent = "Pole Nazwa musi zawierać same litery!";
        nazwa_error.style.color = 'red';
        return false;
    }
    else {
        nazwa_error.textContent = "";
        wnazwa.style.borderColor = '';
        wnazwa.focus();
    }

var x = document.getElementById("wtyp").value;
    if (x == "") {
        wtyp.style.borderColor = 'red';
        wtyp.focus();
        typ_error.textContent = "Pole Typ jest wymagane!";
        typ_error.style.color = 'red';
        return false;
    }
    else {
        typ_error.textContent = "";
        wtyp.style.borderColor = '';
        wtyp.focus();
    }
    var typReg = /^([a-zA-Z]{2,})?$/;
    if (!typReg.test(document.getElementById("wtyp").value)) {
        wtyp.style.borderColor = 'red';
        wtyp.focus();
        typ_error.textContent = "Pole Typ musi zawierać same litery!";
        typ_error.style.color = 'red';
        return false;
    }
    else {
        typ_error.textContent = "";
        wtyp.style.borderColor = '';
        wtyp.focus();
    }

var x = document.getElementById("wtyp").value;
    if (x == "") {
        wtyp.style.borderColor = 'red';
        wtyp.focus();
        typ_error.textContent = "Pole Typ jest wymagane!";
        typ_error.style.color = 'red';
        return false;
    }
    else {
        typ_error.textContent = "";
        wtyp.style.borderColor = '';
        wtyp.focus();
    }
    var typReg = /^([a-zA-Z]{2,})?$/;
    if (!typReg.test(document.getElementById("wtyp").value)) {
        wtyp.style.borderColor = 'red';
        wtyp.focus();
        typ_error.textContent = "Pole Typ musi zawierać same litery!";
        typ_error.style.color = 'red';
        return false;
    }
    else {
        typ_error.textContent = "";
        wtyp.style.borderColor = '';
        wtyp.focus();
    }

    var x = document.getElementById("wwaga").value;
    if (x == "") {
        wwaga.style.borderColor = 'red';
        wwaga.focus();
        waga_error.textContent = "Pole Waga jest wymagane!";
        waga_error.style.color = 'red';
        return false;
    }
    else {
        waga_error.textContent = "";
        wwaga.style.borderColor = '';
        wwaga.focus();
    }
    var wagaReg = /^-?\d*\.?\d*$/;
    if (!wagaReg.test(document.getElementById("wwaga").value)) {
        wwaga.style.borderColor = 'red';
        wwaga.focus();
        waga_error.textContent = "Pole Waga musi zawierać same cyfry!";
        waga_error.style.color = 'red';
        return false;
    }
    else {
        waga_error.textContent = "";
        wwaga.style.borderColor = '';
        wwaga.focus();
    }

    var x = document.getElementById("wcena").value;
    if (x == "") {
        wcena.style.borderColor = 'red';
        wcena.focus();
        cena_error.textContent = "Pole Cena jest wymagane!";
        cena_error.style.color = 'red';
        return false;
    }
    else {
        cena_error.textContent = "";
        wcena.style.borderColor = '';
        wcena.focus();
    }
    var cenaReg = /^-?\d*\.?\d*$/;
    if (!cenaReg.test(document.getElementById("wcena").value)) {
        wcena.style.borderColor = 'red';
        wcena.focus();
        cena_error.textContent = "Pole Cena musi zawierać same litery!";
        cena_error.style.color = 'red';
        return false;
    }
    else {
        cena_error.textContent = "";
        wcena.style.borderColor = '';
        wcena.focus();
    }

}