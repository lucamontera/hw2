const menu = document.getElementById('menu'); 

menu.addEventListener('click', mostraMenu);

function mostraMenu(event)
{
    const modale_menu = document.getElementById('modal-view-menu');
    modale_menu.classList.remove('hidden'); 
    
   const all = document.querySelector("header").classList.add('hidden');

    const div_link = document.createElement('div'); 
    div_link.classList.add('div_link');
    
    const login = document.createElement('a'); 
    login.textContent='Login'; 
    login.setAttribute('href', "/loginView");
    login.classList.add('link_menu');

    const registrazione = document.createElement('a'); 
    registrazione.textContent='registrazione'; 
    registrazione.setAttribute('href', "/registrazioneView");
    registrazione.classList.add('link_menu');

    const close = document.createElement('img'); 
    close.src="../images/close.png";
    close.classList.add('close_modale');

    modale_menu.appendChild(close); 
    modale_menu.appendChild(div_link); 
    div_link.appendChild(login);
    div_link.appendChild(registrazione);

    close.addEventListener('click', closeModaleMenu); 
}


function closeModaleMenu(event)
{
    const all2 = document.querySelector("header").classList.remove('hidden')
    const modale_menu = document.querySelector('#modal-view-menu');
    modale_menu.innerHTML='';
    modale_menu.classList.add('hidden');
}