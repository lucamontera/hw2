fetch('/userDataRequest').then(datiResponse).then(datiJson);  //carico i dati dell'utente loggato

function datiResponse(response)
{
    return response.json(); 
}

const picture_profile = document.querySelector('.picture-profile'); 

function datiJson(json)
{
    console.log(json);
    picture_profile.src="data:image/jpeg;base64,"+json[0].immagineProfilo;
}


//MENU MOBILE 


const menu = document.getElementById('menu'); 

menu.addEventListener('click', mostraMenu);

function mostraMenu(event)
{
    const modale_menu = document.querySelector('#modal-view-menu');
    modale_menu.classList.remove('hidden'); 

    document.querySelector('footer').classList.add('hidden'); 
    
    const div_link = document.createElement('div'); 
    div_link.classList.add('div_link');
    

    const home = document.createElement('a'); 
    home.textContent='home'; 
    home.setAttribute('href', "/homePageLoginView");
    home.classList.add('link_menu');

    const curiosità = document.createElement('a'); 
    curiosità.textContent='Curiosità'; 
    curiosità.setAttribute('href', "/curiositaView");
    curiosità.classList.add('link_menu');

    const configurazione_profilo = document.createElement('a'); 
    configurazione_profilo.textContent='Carica Opera'; 
    configurazione_profilo.setAttribute('href', "/caricaOperaView");
    configurazione_profilo.classList.add('link_menu');

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
    div_link.appendChild(configurazione_profilo);
    div_link.appendChild(curiosità);
    div_link.appendChild(blog);
    div_link.appendChild(logout);

    close.addEventListener('click', closeModaleMenu); 
}


function closeModaleMenu(event)
{
    const modale_menu = document.querySelector('#modal-view-menu');
    document.querySelector('footer').classList.remove('hidden'); 
    modale_menu.innerHTML='';
    modale_menu.classList.add('hidden');
}
