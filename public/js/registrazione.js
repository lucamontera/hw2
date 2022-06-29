// verifico la completezza dei campi 

const form = document.forms['form_dati_registrazione']; 
form.addEventListener('submit', controlloDati); 
const errori = document.querySelectorAll('input');

const span = document.getElementsByClassName('hidden_submit');
const button = document.querySelector('.button_submit'); 

function controlloDati(event)
{
    span[0].innerHTML='';
    if(form.nome.value.length === 0 || form.cognome.value.length === 0 || form.password.value.length === 0)
    {
        alert('compilare tutti i campi!'); 
        event.preventDefault(); 
    
        for(const errore of errori)
        {
            
            errore.classList.add('errore') ;
        }

        button.classList.remove('errore');
        
        
        const text_alert = document.createElement('h3');
        text_alert.textContent = '*compilare tutti i campi';
        text_alert.classList.add('text_errore');

        span[0].appendChild(text_alert);
    }

}


for(const errore of errori)
{
    errore.addEventListener('blur', checkForm);
}


function checkForm(event)
{  
   const evento = event.currentTarget; 
   
   if(evento.value.length !==0)
   {
        evento.classList.remove('errore');  
        evento.classList.add('confirm'); 
   }

   else
   {
        evento.classList.remove('confirm');  
        evento.classList.add('errore');
   }
}

/* ------------------------ check nome -----------------------*/

const input_nome = document.getElementById('input_nome');
input_nome.addEventListener('blur', checkNome);

function checkNome(event)
{
    if(input_nome.value.length === 0)
    {
        form_dati_registrazione.nome.classList.add('errore'); 
        input_nome.parentNode.parentNode.querySelector('span').textContent = 'Inserisci un nome!'; 
        input_nome.parentNode.parentNode.querySelector('span').classList.add('text_errore'); 
    }

    else
    {
        input_nome.classList.remove('errore'); 
        input_nome.parentNode.parentNode.querySelector('span').innerHTML=''; 
    }
}



/* ------------------------ CHECK COGNOME -----------------------*/

const input_cognome = document.getElementById('input_cognome');
input_cognome.addEventListener('blur', checkCognome);

function checkCognome(event)
{
    if(input_cognome.value.length === 0)
    {
        form_dati_registrazione.cognome.classList.add('errore'); 
        input_cognome.parentNode.parentNode.querySelector('span').textContent = 'Inserisci un cognome!'; 
        input_cognome.parentNode.parentNode.querySelector('span').classList.add('text_errore'); 
    }

    else
    {
        input_cognome.classList.remove('errore'); 
        input_cognome.parentNode.parentNode.querySelector('span').innerHTML=''; 
    }
}

/* ------------------------ CHECK DATA NASCITA -----------------------*/


const input_data = document.getElementById('input_data_nascita');
input_data.addEventListener('blur', checkData);

function checkData(event)
{
    if(input_data.value.length === 0)
    {
        form_dati_registrazione.data.classList.add('errore'); 
        input_data.parentNode.parentNode.querySelector('span').textContent = 'Inserisci la tua data di nascita!'; 
        input_data.parentNode.parentNode.querySelector('span').classList.add('text_errore'); 
    }

    else
    {
        input_data.classList.remove('errore'); 
        input_data.parentNode.parentNode.querySelector('span').innerHTML=''; 
    }
}

/* ------------------------ check password -----------------------*/

const input = document.getElementById('input_password');
input.addEventListener('blur', checkPassword);
const password = document.getElementById('input_password');
//input.addEventListener('blur', checkPasswordConfirm);

function checkPassword(event) {
	   
    if(input.value.length <=8 ||  input.value.length ===0)
    {
        form_dati_registrazione.password.classList.remove('confirm');
        form_dati_registrazione.password.classList.add('errore');
        input.parentNode.querySelector('span').textContent = 'password troppo corta o non valida!'; 
        input.parentNode.querySelector('span').classList.add('text_errore');

        console.log('password troppo corta');
    }

    if(input.value.length >= 8)
    {
        form_dati_registrazione.password.classList.remove('errore');
        input.parentNode.querySelector('span').innerHTML =''; 
    }
}



/* ------------------------ check confirm password -----------------------*/

const input_confirm = document.getElementById('input_password_confirm');
input_confirm.addEventListener('blur', checkPasswordConfirm); 


function checkPasswordConfirm(event)
{
    const input_value = encodeURIComponent(input.value);
    const input_confirm_value = encodeURIComponent(input_confirm.value);
    
    if(input_confirm_value != 0 && input_value !=0 && input_confirm_value.length >= 8 && input_value.length >= 8 && input_confirm_value===input_value)
    {
        console.log('ok password');
       
        
        form_dati_registrazione.password2.classList.remove('errore');
        form_dati_registrazione.password2.classList.add('confirm');
    
        input_confirm.parentNode.querySelector('span').textContent = 'Password ok!'; 
        input_confirm.parentNode.querySelector('span').classList.add('confirm_text');

        form_dati_registrazione.password.classList.remove('errore');
        input.parentNode.querySelector('span').innerHTML ='';
    }
    
    else
    {
        form_dati_registrazione.password2.classList.remove('confirm');
        form_dati_registrazione.password.classList.remove('confirm');

        form_dati_registrazione.password2.classList.add('errore');
        form_dati_registrazione.password.classList.add('errore');

        input_confirm.parentNode.querySelector('span').textContent = 'Le password non corrispondono!'; 
        input_confirm.parentNode.querySelector('span').classList.add('text_errore');

    }
    
    
    /*if(input_confirm_value != 0 && input_value != 0 && input_confirm_value >= 8 && input_value >= 8 )
    {
        if(input_confirm_value === input_value)
        {
            console.log('ok password');
       
        
            form_dati_registrazione.password2.classList.remove('errore');
            form_dati_registrazione.password2.classList.add('confirm');
        
            input_confirm.parentNode.querySelector('span').textContent = 'Password ok!'; 
            input_confirm.parentNode.querySelector('span').classList.add('confirm_text');

            form_dati_registrazione.password.classList.remove('errore');
            input.parentNode.querySelector('span').innerHTML ='';
        }
        
    }
    else
    {
        form_dati_registrazione.password2.classList.add('errore');
        form_dati_registrazione.password.classList.add('errore');

        input_confirm.parentNode.querySelector('span').textContent = 'Le password non corrispondono!'; 
        input_confirm.parentNode.querySelector('span').classList.add('text_errore');

    }*/
}








/* ------------------------ CHECK USERNAME -----------------------*/


const input_username = document.getElementById('input_username'); 
input_username.addEventListener('blur', checkUsername);

function checkUsername(event)
{
    if(input_username.value.length === 0)
    {
        form_dati_registrazione.username.classList.add('errore'); 
        form_dati_registrazione.username.classList.remove('confirm'); 
        input_username.parentNode.parentNode.querySelector('span').textContent = 'Inserisci un username!'; 
        input_username.parentNode.parentNode.querySelector('span').classList.remove('confirm_text'); 
        input_username.parentNode.parentNode.querySelector('span').classList.add('text_errore'); 
    }

    else
    {
        console.log(event.currentTarget.value);
        fetch('/registrazioneCheckUsername/'+encodeURIComponent(event.currentTarget.value)).then(usernameResponse).then(usernameJson);
    }
}


function usernameResponse(response)
{
    return response.json(); 
}


function usernameJson(json)
{
    console.log(json);

    if(json.true)
    {
        console.log('usalo');
        input_username.parentNode.parentNode.querySelector('span').innerHTML=''; 

        form_dati_registrazione.username.classList.add('confirm'); 
        input_username.parentNode.parentNode.querySelector('span').textContent =json.true; 
        input_username.parentNode.parentNode.querySelector('span').classList.add('confirm_text'); 
    }

    else
    {
        console.log('non disponibile');
        input_username.parentNode.parentNode.querySelector('span').innerHTML=''; 
        form_dati_registrazione.username.classList.add('errore'); 
        input_username.parentNode.parentNode.querySelector('span').textContent =json.false;
        input_username.parentNode.parentNode.querySelector('span').classList.remove('confirm_text');
        input_username.parentNode.parentNode.querySelector('span').classList.remove('text_errore');
        form_dati_registrazione.username.classList.remove('confirm');
        form_dati_registrazione.username.classList.add('errore');  
        input_username.parentNode.parentNode.querySelector('span').classList.add('text_errore'); 
    }
}



/* ------------------------ CHECK EMAIL -----------------------*/


const input_email = document.getElementById('input_email'); 
input_email.addEventListener('blur', checkEmail);

function checkEmail(event)
{
    if(input_email.value.length === 0)
    {
        form_dati_registrazione.email.classList.add('errore'); 
        form_dati_registrazione.email.classList.remove('confirm'); 
        input_email.parentNode.parentNode.querySelector('span').textContent = "Inserisci un'email!"; 
        input_email.parentNode.parentNode.querySelector('span').classList.remove('confirm_text'); 
        input_email.parentNode.parentNode.querySelector('span').classList.add('text_errore'); 
    }

    else
    {
        fetch('/registrazioneCheckEmail/'+encodeURIComponent(event.currentTarget.value)).then(emailResponse).then(emailJson);
    }
}


function emailResponse(response)
{
    return response.json(); 
}


function emailJson(json)
{
    console.log(json);

    if(json.true)
    {
        console.log('usalo');
        input_email.parentNode.parentNode.querySelector('span').innerHTML=''; 
        form_dati_registrazione.email.classList.add('confirm'); 
        input_email.parentNode.parentNode.querySelector('span').textContent =json.true; 
        input_email.parentNode.parentNode.querySelector('span').classList.add('confirm_text'); 
    }

    else
    {
        console.log('non disponibile');
        input_email.parentNode.parentNode.querySelector('span').innerHTML=''; 
        form_dati_registrazione.email.classList.add('errore'); 
        input_email.parentNode.parentNode.querySelector('span').textContent =json.false;
        input_email.parentNode.parentNode.querySelector('span').classList.remove('confirm_text');
        input_email.parentNode.parentNode.querySelector('span').classList.add('text_errore');
        form_dati_registrazione.email.classList.remove('confirm');
        form_dati_registrazione.email.classList.add('errore');  
        input_email.parentNode.parentNode.querySelector('span').classList.add('text_errore'); 
    }
}






/* -------------------- MENU MOBILE -------------------- */

const menu = document.getElementById('menu'); 

menu.addEventListener('click', mostraMenu);

function mostraMenu(event)
{
    const modale_menu = document.getElementById('modal-view-menu');
    modale_menu.classList.remove('hidden'); 
    
    const all = document.querySelector("main").classList.add('hidden');
    //const all2 = document.querySelector("footer").classList.add('hidden');

    const div_link = document.createElement('div'); 
    div_link.classList.add('div_link');
    
    const home = document.createElement('a'); 
    home.textContent='home'; 
    home.setAttribute('href', "/homeView");
    home.classList.add('link_menu');

    const login = document.createElement('a'); 
    login.textContent='Login'; 
    login.setAttribute('href', "/loginView");
    login.classList.add('link_menu');

    const carica_opera = document.createElement('a'); 
    carica_opera.textContent='Carica Opera'; 
    carica_opera.setAttribute('href', "/caricaOperaView");
    carica_opera.classList.add('link_menu');

    const blog = document.createElement('a'); 
    blog.textContent='Blog'; 
    blog.setAttribute('href', "/blogView");
    blog.classList.add('link_menu');

    const logout = document.createElement('a'); 
    logout.textContent='Logout'; 
    logout.setAttribute('href', "/logout");
    logout.classList.add('link_menu');

    const close = document.createElement('img'); 
    close.src="../images/close.png";
    close.classList.add('close_modale');

    modale_menu.appendChild(close); 
    modale_menu.appendChild(div_link); 
    div_link.appendChild(home);
    div_link.appendChild(login);
    close.addEventListener('click', closeModaleMenu); 
}


function closeModaleMenu(event)
{
    const all = document.querySelector("main").classList.remove('hidden');
    //const all2 = document.querySelector("footer").classList.remove('hidden');
    const modale_menu = document.querySelector('#modal-view-menu');
    modale_menu.innerHTML='';
    modale_menu.classList.add('hidden');
}
