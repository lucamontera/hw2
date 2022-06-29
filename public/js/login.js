// verifico la completezza dei campi 

const form = document.forms['form_dati']; 
form.addEventListener('submit', controlloDati); 

function controlloDati(event)
{
    if(form.username.value.length == 0 || form.password.value.length == 0)
    {
        console.log('ciao');
        alert('compilare tutti i campi!'); 

        event.preventDefault(); 

        console.log('compila i campi');
    }
}



/* -------------------- controllo username utente -------------------- */

const input_username = document.getElementById('input_username'); 
input_username.addEventListener('blur',controlloUsername); 
const messaggio_errore_username = document.querySelector('.hidden_username');
function controlloUsername(event)
{
    console.log(input_username.value);

    messaggio_errore_username.innerHTML=''; 
    if(input_username.value.length === 0)
    {

        console.log(event.currentTarget.value); 
        const errore = document.createElement('p'); 
        errore.textContent = "Inserisci l'username corretto"; 
        errore.classList.add('errore'); 
        messaggio_errore_username.appendChild(errore);
    }
    else
    {
        fetch('/prova/'+encodeURIComponent(event.currentTarget.value)).then(onResponse).then(onJson); 
    }

}


function onResponse(response)
{
    return response.json(); 
}


function onJson(json)
{
    console.log(json); 
}



/* -------------------- controllo password utente -------------------- */

const input_password = document.getElementById('input_password'); 
input_password.addEventListener('blur',controlloPassword,); 
const messaggio_errore_password = document.querySelector('.hidden_password');

function controlloPassword(event)
{
    messaggio_errore_password.innerHTML = ''; 

    if(input_username.value.length === 0)
    {
        const errore = document.createElement('p');
        errore.textContent = "Inserisci la password corretta"; 
        errore.classList.add('errore'); 
        messaggio_errore_password.appendChild(errore);
    }
}






//MENU MOBILE 


const menu = document.getElementById('menu'); 

menu.addEventListener('click', mostraMenu);

function mostraMenu(event)
{
    const modale_menu = document.querySelector('#modal-view-menu');
    modale_menu.classList.remove('hidden'); 
    
    const div_link = document.createElement('div'); 
    div_link.classList.add('div_link');
    

    const home = document.createElement('a'); 
    home.textContent='Home'; 
    home.setAttribute('href', "/homeView");
    home.classList.add('link_menu');

    const registrazione = document.createElement('a'); 
    registrazione.textContent='Registrazione'; 
    registrazione.setAttribute('href', "/registrazioneView");
    registrazione.classList.add('link_menu');


    const close = document.createElement('img'); 
    close.src="../images/close.png";
    close.classList.add('close_modale');

    modale_menu.appendChild(close); 
    modale_menu.appendChild(div_link); 
    div_link.appendChild(home); 
    div_link.appendChild(registrazione); 


    close.addEventListener('click', closeModaleMenu); 
}


function closeModaleMenu(event)
{
    const modale_menu = document.querySelector('#modal-view-menu');
    modale_menu.innerHTML='';
    modale_menu.classList.add('hidden');
}