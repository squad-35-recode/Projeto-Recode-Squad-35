const areaCadastro = document.getElementById("formCadastro");
const nomeCadastro = document.getElementById('nomeCadastro');
const emailCadastro = document.getElementById("emailCadastro");
// const senha1 = document.getElementById("senha1Cadastro").value;
// const senha2 = document.getElementById("senha2Cadastro").value;
const validar = function validarInputs() { };


const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

// areaCadastro.addEventListener('submit', e => {
//     e.preventDefault();
//     validarInputs();
// });

// const setError2 = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success')
// };

// const setSuccess2 = element => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// };

// const validateInputsRegister = () => {
//     const valorNomeCadastro = nomeCadastro.value.trim();
//     const valorEmailCadastro = emailCadastro.value.trim();
//     const valorSenha1 = senha1.value.trim();
//     const valorSenha2 = senha2.value.trim();
//     const nomePadrao = /^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/;

//     // Validação de E-mail
//     if (valorEmailCadastro === "") {
//         setError2(valorEmailCadastro, "Insira seu e-mail");
//     } else if (!isValidEmail(valorEmailCadastro)) {
//         setError2(valorEmailCadastro, "Insira um e-mail válido");
//     } else {
//         setSuccess2(valorEmailCadastro);
//     };

//     // Validação de Senhas
//     if (valorSenha1 === "") {
//         setError2(valorSenha1, "Insira uma senha");
//     } else if (valorSenha1.length < 8) {
//         setError2(valorSenha1, "A senha deve ter no mínimo 8 caracteres");
//     } else {
//         setSuccess2(valorSenha1);
//     };

//     if (valorSenha2 === "") {
//         setError2(valorSenha2, "Por favor, confirme sua senha");
//     } else if (valorSenha2 !== valorSenha1) {
//         setError2(valorSenha2, "As senhas não coincidem");
//     } else {
//         setSuccess2(valorSenha2);
//     };

//     if (valorNomeCadastro === "") {
//         setError2(valorNomeCadastro, "Insira seu nome e sobrenome");
//     } else if (!valorNomeCadastro.match(nomePadrao)){
//         setError2(valorNomeCadastro, "Nome e/ou Sobrenome Inválidos");
//     } else {
//         setSuccess2(valorNomeCadastro);
//     };

// }


// else {
//     // Realize a verificação de igualdade dos campos de senha
//     const senha1 = form.querySelector('#senha1Cadastro');
//     const senha2 = form.querySelector('#senha2Cadastro');

//     if (senha2 !== senha1) {
//         event.preventDefault();
//         event.stopPropagation();
//         displayPasswordError(form, "As senhas não coincidem. Insira novamente!");
//         senha1.classList.add('is-invalid'); // Adiciona classe de erro do Bootstrap
//         senha2.classList.add('is-invalid'); // Adiciona classe de erro do Bootstrap
//     } else {
//         senha1.classList.remove('is-invalid'); // Remove classe de erro do Bootstrap
//         senha2.classList.remove('is-invalid'); // Remove classe de erro do Bootstrap
//     }
// }

(function () {
    'use strict'
    const forms = document.querySelectorAll('.requires-validation')
    Array.from(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

const senha1 = document.getElementById('senha1Cadastro');
const senha2 = document.getElementById('senha2Cadastro');
const senhasIncoDiv = document.getElementById('senhasInco');

// Adicione um evento 'input' aos campos de senha para verificar enquanto o usuário digita
senha1.addEventListener('input', verificarSenhas);
senha2.addEventListener('input', verificarSenhas);

function verificarSenhas() {
    if (senha1.value === senha2.value) {
        senha1.classList.remove('is-invalid');
        senha2.classList.remove('is-invalid');
        senha1.classList.add('is-valid');
        senha2.classList.add('is-valid');
        senhasIncoDiv.textContent = ''; // Limpa a mensagem de erro
    } else {
        senha1.classList.remove('is-valid');
        senha2.classList.remove('is-valid');
        senha1.classList.add('is-invalid');
        senha2.classList.add('is-invalid');
        senhasIncoDiv.textContent = 'As senhas não coincidem.'; // Mostra mensagem de erro
    }
}

function limparCampos() {
    document.getElementById("formCadastro").reset();
}


