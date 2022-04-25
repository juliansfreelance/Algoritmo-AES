import AesCtr from './aes-ctr.js';
const criptoBtn = document.querySelector('.criptoBtn');
const resetCriptoBtn = document.querySelector('.resetCriptoBtn');
const cleanCriptoBtn = document.querySelector('.cleanCriptoBtn');

const loaderCripto = document.querySelector('.loaderCripto');
const respuestaCripto = document.querySelector('.respuestaCripto');

const errorNBits = document.querySelector('.errorNBits');
const errorPassword = document.querySelector('.errorPassword');
const errorPlaintxt = document.querySelector('.errorPlaintxt');



document.addEventListener('DOMContentLoaded', function (event) {
    cleanCriptoBtn.addEventListener('click', () => {
        cleanCriptoBtn.disabled = true;
        loaderCripto.classList.remove('hidden');
        document.querySelector('#claveCifrado').value = "";
        document.querySelector('#textoPlano').value = "";
        // document.querySelector('#128cr').checked = true;
        loaderCripto.classList.add('hidden');
        resetCriptoBtn.classList.add('hidden');
        respuestaCripto.classList.add('hidden');
        document.querySelector('#textoCifradoPlano').innerHTML = '';
        criptoBtn.disabled = false;
        criptoBtn.classList.remove('hidden');
        cleanCriptoBtn.disabled = false;
    });
    criptoBtn.addEventListener('click', () => {
        criptoBtn.disabled = true;
        loaderCripto.classList.remove('hidden');
        errorNBits.classList.add('hidden');
        errorPassword.classList.add('hidden');
        errorPlaintxt.classList.add('hidden');

        const nBits = parseInt(document.querySelector('input[name="sizeKey"]:checked').value);
        const password = document.querySelector('#claveCifrado').value;
        const plaintxt = document.querySelector('#textoPlano').value;

        if (password == '') {
            errorPassword.classList.remove('hidden');
        }
        if (plaintxt == '') {
            errorPlaintxt.classList.remove('hidden');
        }
        if (nBits == '' || password == '' || plaintxt == ''){
            criptoBtn.disabled = false;
            loaderCripto.classList.add('hidden');
        }
        else {
            const t1 = performance.now();
            const encrtext = AesCtr.encrypt(plaintxt, password, nBits);
            const t2 = performance.now();
            document.querySelector('#textoCifradoPlano').innerHTML = encrtext;
            document.querySelector('#tiempoCifrado').innerHTML = (t2 - t1).toFixed(3) + 'ms';
            loaderCripto.classList.add('hidden');
            criptoBtn.classList.add('hidden');
            respuestaCripto.classList.remove('hidden');
            resetCriptoBtn.classList.remove('hidden');
        }
    });
    resetCriptoBtn.addEventListener('click', () => {
        resetCriptoBtn.disabled = true;
        loaderCripto.classList.remove('hidden');
        errorNBits.classList.add('hidden');
        errorPassword.classList.add('hidden');
        errorPlaintxt.classList.add('hidden');

        const nBits = parseInt(document.querySelector('input[name="sizeKey"]:checked').value);
        const password = document.querySelector('#claveCifrado').value;
        const plaintxt = document.querySelector('#textoPlano').value;

        if (password == '') {
            errorPassword.classList.remove('hidden');
        }
        if (plaintxt == '') {
            errorPlaintxt.classList.remove('hidden');
        }
        if (nBits == '' || password == '' || plaintxt == '') {
            criptoBtn.disabled = false;
            loaderCripto.classList.add('hidden');
        }
        else {
            const t1 = performance.now();
            const encrtext = AesCtr.encrypt(plaintxt, password, nBits);
            const t2 = performance.now();
            document.querySelector('#textoCifradoPlano').innerHTML = encrtext;
            document.querySelector('#tiempoCifrado').innerHTML = (t2 - t1).toFixed(3) + 'ms';
            loaderCripto.classList.add('hidden');
            resetCriptoBtn.disabled = false;
            respuestaCripto.classList.remove('hidden');
            resetCriptoBtn.classList.remove('hidden');
        }
    });
});