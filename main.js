let lahetys = document.getElementById('laheta');
lahetys.addEventListener('click', lahetaLomakeTarkistus);

function lahetaLomakeTarkistus(event) {
    event.preventDefault();
    let kayttajaID = document.getElementById('user_id');
    let idMsg = document.getElementById('id_msg');
    let salasana = document.getElementById('salasana');
    let nimi = document.getElementById('nimi');
    let osoite = document.getElementById('osoite');
    let maa = document.getElementById('valinta').selectedIndex;
    let maaMsg = document.getElementById('maa_msg');
    let postinro = document.getElementById('pnro');
    let postiNroMsg = document.getElementById('postinro_msg');
    let sahkoposti = document.getElementById('sposti');
    let spostiMsg = document.getElementById('sposti_msg');
    let sukupuoliM = document.getElementById('mies').checked;
    let sukupuoliN = document.getElementById('nainen').checked;
    let sukupuoliMsg = document.getElementById('sukupuoli_msg');
    let kieliS = document.getElementById('kieli_suomi').checked;
    let kieliM = document.getElementById('kieli_muu').checked;
    let kieliMsg = document.getElementById('kieli_msg');
    postiNroMsg.innerText = ''

    ValidateEmail(sahkoposti, spostiMsg);

    if (!kieliM && !kieliS) {
        kieliMsg.style.color = 'red';
        kieliMsg.innerText = '* Kieli ei valittu!';
    } else {
        kieliMsg.innerText = '';
    }

    if (!sukupuoliM && !sukupuoliN) {
        sukupuoliMsg.style.color = 'red';
        sukupuoliMsg.innerText = '* Sukupuoli ei valittu!';
    } else {
        sukupuoliMsg.innerText = '';
    }

    if (maa == 0) {
        maaMsg.style.color = 'red';
        maaMsg.innerText = '* Maa ei valittu!';
    } else {
        maaMsg.innerText = '';
    }
    if (kayttajaID.value == '') {
        kayttajaID.style.color = 'red';
        kayttajaID.value = '* vaadittu kenttä';
    } else if (kayttajaID.value.length < 6) {
        idMsg.style.color = 'red';
        idMsg.innerText = '* ID:n minimi 6 merkkiä';
    } else {
        idMsg.innerText = '';
    }
    kayttajaID.addEventListener('click', vaihdaVari);

    if (salasana.value == '') {
        salasana.style.color = 'red';
        salasana.value = '* vaadittu kenttä';
    }
    salasana.addEventListener('click', vaihdaVari);

    if (nimi.value == '') {
        nimi.style.color = 'red';
        nimi.value = '* vaadittu kenttä';
    }
    nimi.addEventListener('click', vaihdaVari);

    if (osoite.value == '') {
        osoite.style.color = 'red';
        osoite.value = '* vaadittu kenttä';
    }
    osoite.addEventListener('click', vaihdaVari);

    if (postinro.value == '') {
        postinro.style.color = 'red';
        postinro.value = '* vaadittu kenttä';
    } else if (isNaN(postinro.value) || postinro.value.length != 5) {
        postiNroMsg.style.color = 'red';
        postiNroMsg.innerText = '* postinumero täytyy olla numeroita ja 5 merkkiä pitkä'
    } else {
        postiNroMsg.innerText = ''
    }
    postinro.addEventListener('click', vaihdaVari);

    if (sahkoposti.value == '') {
        sahkoposti.style.color = 'red';
        sahkoposti.value = '* vaadittu kenttä';
    }
    sahkoposti.addEventListener('click', vaihdaVari);
}

function ValidateEmail(inputText, spostiMsg) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        return true;
    } else {
        spostiMsg.style.color = 'red';
        spostiMsg.innerText = '* Syötä sähköposti oikeassa muodossa';
        return false;
    }
}

function vaihdaVari(event) {
    event.target.style.color = 'black';
    event.target.value = '';
}

let tyhjenna = document.getElementById('tyhjenna');
tyhjenna.addEventListener('click', tyhjennaLomake);

function tyhjennaLomake(event) {
    event.preventDefault();
    document.getElementById('user_id').value = '';
    document.getElementById('user_id').style.color = 'black';
    document.getElementById('id_msg').innerText = '';
    document.getElementById('salasana').value = '';
    document.getElementById('salasana').style.color = 'black';
    document.getElementById('nimi').value = '';
    document.getElementById('nimi').style.color = 'black';
    document.getElementById('osoite').value = '';
    document.getElementById('osoite').style.color = 'black';
    document.getElementById('valinta').selectedIndex = 0;
    document.getElementById('maa_msg').innerText = '';
    document.getElementById('pnro').value = '';
    document.getElementById('pnro').style.color = 'black';
    document.getElementById('postinro_msg').innerText = ''
    document.getElementById('sposti').value = '';
    document.getElementById('sposti').style.color = 'black';
    document.getElementById('sposti_msg').innerText = '';
    document.getElementById('mies').checked = false;
    document.getElementById('nainen').checked = false;
    document.getElementById('sukupuoli_msg').innerText = '';
    document.getElementById('kieli_suomi').checked = false;
    document.getElementById('kieli_muu').checked = false;
    document.getElementById('kieli_msg').innerText = '';
    document.getElementById('lisatietoja').value = '';
}
