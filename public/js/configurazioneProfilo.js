function anteprimaImmagine(event)
{

 const immagine_anteprima = document.querySelector('#anteprima');
 const src = URL.createObjectURL(event.target.files[0]);
 immagine_anteprima.classList.remove('hidden');
 immagine_anteprima.classList.add('circle')

 console.log(event.currentTarget.files);

 immagine_anteprima.src=src;

    
}





fetch('/userDataRequest').then(datiResponse).then(datiJson);  //carico i dati dell'utente loggato

function datiResponse(response)
{
    return response.json(); 
}

const picture_profile = document.querySelector('.picture-profile'); 
const username = document.getElementById('username'); 

function datiJson(json)
{
    console.log(json);

    username.textContent='@'+json[0].username;
    console.log(username.textContent);
    picture_profile.src="data:image/jpeg;base64,"+json[0].immagineProfilo;
}




/* -------------------- MENU MOBILE -------------------- */

const menu = document.getElementById('menu'); 

menu.addEventListener('click', mostraMenu);

function mostraMenu(event)
{
    const modale_menu = document.getElementById('modal-view-menu');
    modale_menu.classList.remove('hidden'); 
    
    const all = document.querySelector("main").classList.add('hidden');
    const all2 = document.querySelector("footer").classList.add('hidden');

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
    div_link.appendChild(carica_opera);
    div_link.appendChild(curiosità);
    div_link.appendChild(blog);
    div_link.appendChild(logout);

    close.addEventListener('click', closeModaleMenu); 
}


function closeModaleMenu(event)
{
    const all = document.querySelector("main").classList.remove('hidden');
    const all2 = document.querySelector("footer").classList.remove('hidden');
    const modale_menu = document.querySelector('#modal-view-menu');
    modale_menu.innerHTML='';
    modale_menu.classList.add('hidden');
}





