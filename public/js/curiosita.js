fetch('/userDataRequest').then(datiResponse).then(datiJson);  //carico i dati dell'utente loggato

function datiResponse(response)
{
    return response.json(); 
}

const picture_profile = document.querySelector('.picture-profile'); 

function datiJson(json)
{
    picture_profile.src="data:image/jpeg;base64,"+json[0].immagineProfilo;
}
   // rest_url = 'https://api.unsplash.com/photos/?client_id=K3L_XE4sHkzUbEMUyYzEt3uOSXwXILH9qJr8DK2ZcMU&rome'

/* ------------------------- CARICAMENTO DINAMICO ------------------------- */

const api1 = document.querySelector('.api1');
api1.classList.add('hidden1');

const api2 = document.querySelector('.api2');
api2.classList.add('hidden1'); 
 
const header = document.querySelector('header'); 

const creaQuadro =  document.querySelector('.showApi1'); 
creaQuadro.addEventListener('click', mostraApi1); 

const scopriCuriosita = document.querySelector('.showApi2'); 
scopriCuriosita.addEventListener('click', mostraApi2);


function mostraApi1(event)
{
    const scelta = event.currentTarget; 

    api1.classList.remove('hidden1');
    api1.classList.add('api1');
    api2.classList.add('hidden1');
    
    const sectionRisultati = document.querySelector('#sezione2'); 
    sectionRisultati.classList.remove('hidden1');

    event.currentTarget.addEventListener('click', deselectMostraApi1);
    event.currentTarget.removeEventListener('click', mostraApi1);
}

function deselectMostraApi1(event)
{
    const scelta = event.currentTarget; 
    api1.classList.add('hidden1'); 

    event.currentTarget.addEventListener('click', mostraApi1);
    event.currentTarget.removeEventListener('click', deselectMostraApi1);

    const allChildren = document.querySelector("#sezione2").childNodes;

    for(let i=0; i < allChildren.length; i++) 
    {
        allChildren[i].classList.add('hidden1');
    }

    anteprima.innerHTML='';
}

const anteprima2 = document.querySelector('#risultatoWikipedia');
const anteprima3 = document.querySelector('#risultato_api3'); 

function mostraApi2(event)
{
    api2.classList.remove('hidden1'); 
    api2.classList.add('api2');
    api1.classList.add('hidden1');

    event.currentTarget.addEventListener('click', deselectMostraApi2);
    event.currentTarget.removeEventListener('click', mostraApi2);

}

function deselectMostraApi2(event)
{
    const scelta = event.currentTarget; 
    api2.classList.add('hidden1'); 

    event.currentTarget.addEventListener('click', mostraApi2);
    event.currentTarget.removeEventListener('click', deselectMostraApi2);



    const allChildren = document.querySelector("#risultatoWikipedia").childNodes;
    const allChildren2 = document.querySelector('#risultato_api3').childNodes;

    for(let i=0; i < allChildren.length; i++) 
    {
        allChildren[i].classList.add('hidden1');
    }
    
    anteprima2.innerHTML='';


    for(let i = 0 ; i < allChildren2.length ; i++)
    {
        allChildren2[i].classList.add('hidden1'); 
    }

    anteprima3.innerHTML = ''; 
}

   
/* ------------------------- API PER UNSPLASH ------------------------- */

 
const client_id = 'K3L_XE4sHkzUbEMUyYzEt3uOSXwXILH9qJr8DK2ZcMU'; 
// per utilizzare unsplash ho bisogno di una chiave 

const cerca = document.querySelector('form'); 
cerca.addEventListener('submit', ricercaQuadro);


function ricercaQuadro(event)
{
    event.preventDefault(); 

    const input_ricerca = document.querySelector('#tema');
    const ricerca_value = encodeURIComponent(input_ricerca.value);

    //preparo la richiesta 

    fetch('ricercaQuadro/' +encodeURI(ricerca_value)).then(onResponse).then(onJson); 
}


function onResponse(response)
{
    return response.json(); 
}


function onJson(json)
{

   let num_results = json.total; 


   if(num_results > 5)
   {
       num_results = 5; 
   }

   const sezione = document.querySelector('#sezione2');
   sezione.innerHTML = '';

   if(num_results !== 0)
   {
         

        const contenitore_risultati = document.createElement('div'); 
        contenitore_risultati.classList.add('contenitore-risultati');

        for(let i = 0; i<num_results ; i++)
        {
            let image_src = json.results[i].urls.raw; 

            const contenitore = document.createElement('div'); 
            contenitore.classList.add('contenitore-immagine');
            contenitore.id = i;
            
             

            const image = document.createElement('img'); 
            //image.id = [i];
            image.src = image_src ;
            image.classList.add('immagine');

            sezione.appendChild(contenitore); 
            contenitore.appendChild(image);
            
            image.addEventListener('click', anteprimaQuadro);
        } 
   }


}





/* -------------------- funzione anteprima quadro --------------------*/



const anteprima = document.querySelector('#risultato'); 


function anteprimaQuadro(event)
{

    anteprima.innerHTML = ''; 

    const quadro = event.currentTarget; 
    quadro.id = 'selezionato'; 

    const source_anteprima = quadro.src;   // recupero il source dell'immagine selezionata

    const testo = document.createElement('h1'); 
    testo.textContent = 'ecco la tua anteprima:'
    testo.classList.add('testo');

    const box_anteprima = document.createElement('div'); 
    box_anteprima.classList.add('cornice-anteprima');


    const immagine_anteprima = document.createElement('img');
    immagine_anteprima.src = source_anteprima;
    immagine_anteprima.classList.add('immagine-anteprima'); 


    const acquista = document.createElement('button');
    acquista.textContent='scarica';
    acquista.classList.add('button');

    anteprima.appendChild(testo);
    anteprima.appendChild(box_anteprima); 
    box_anteprima.appendChild(immagine_anteprima);
    anteprima.appendChild(acquista);  
}






/* -------------------- API 2 Wikipedia --------------------*/



const ricerca2 = document.querySelector('#api2art'); 
ricerca2.addEventListener('submit', ricercaArtista);
ricerca2.addEventListener('submit', ricercaOpere);

function ricercaArtista(event)
{
    event.preventDefault(); 
    
    const input_ricerca2 = document.querySelector('#nome_artista');
    const ricerca2_value = encodeURIComponent(input_ricerca2.value);


    fetch('wikipediaApi/' +encodeURI(ricerca2_value)).then(onResponse).then(onJson2); 
}


function onJson2(json)
{


    const ricerca_wikipedia = document.querySelector('#risultatoWikipedia'); 

    ricerca_wikipedia.innerHTML = ''; 

    const page = json.query.pages;
	const pageid = Object.keys(json.query.pages)[0];
	const t = page[pageid].extract;
    const titolo = page[pageid].title;

    const contenitore_ricerca_api2 = document.createElement('div');
    contenitore_ricerca_api2.classList.add('contenitoreApi2');

    const titolo_ricerca = document.createElement('h1'); 
    titolo_ricerca.textContent=titolo;
    titolo_ricerca.style.color='white'; 
    titolo_ricerca.style.textTransform = 'uppercase'

    const html = t; 
    const p3 = document.createElement('p');
    //p3.classList.add(); 
    p3.innerHTML = html; 
    const text = p3.textContent ||p3.innerText || ""; // mi permette di pulire il testo. Questa funzione mi serve in quanto la ricerca di wikipedia mi ritorna un formato html con <> /p ....
    
    ricerca_wikipedia.appendChild(contenitore_ricerca_api2);
    contenitore_ricerca_api2.appendChild(titolo_ricerca);
    contenitore_ricerca_api2.appendChild(p3);  

}

/* -------------------- API 3 INSTITUTE OF ART CHIGAGO --------------------*/


function ricercaOpere(event)
{
    event.preventDefault(); 
    
    const input_ricerca2 = document.querySelector('#nome_artista');
    const ricerca2_value = encodeURIComponent(input_ricerca2.value);

    fetch('artChicagoApi/'+ encodeURI(ricerca2_value)).then(onResponse).then(onJson3);
}

const url_chigago = 'https://www.artic.edu/iiif/2/'

function onJson3(json)
{
    let numero_risultati = json.data.length; 

    const risultato_api3 = document.querySelector('#risultato_api3'); 
    risultato_api3.innerHTML = '';  

    

    const image_id = json.data[0].image_id; 

    const titolo_raccolta_opere = document.createElement('h1'); 
    titolo_raccolta_opere.textContent = 'Raccolta Opere: '; 

    risultato_api3.appendChild(titolo_raccolta_opere); 

    const contenitore_opere = document.createElement('div'); 
    contenitore_opere.classList.add('contenitoreRisultatoApi3'); 

    for(let i = 0; i<numero_risultati ; i++)
    {
        const image_id = json.data[i].image_id; 
        const src_image_artist = url_chigago + image_id + '/full/843,/0/default.jpg'; 
        const titolo_opera = json.data[i].title; 

        

        const contenitore_opera_totale = document.createElement('div'); 
        contenitore_opera_totale.classList.add('contenitore_opera_totale'); 

        const contenitore_opera= document.createElement('div'); 
        contenitore_opera.classList.add('contenitore-immagine');
        contenitore_opera.id = i; 

        const opera= document.createElement('img'); 
        opera.src = src_image_artist; 
        opera.classList.add('immagine'); 

        const titolo = document.createElement('h2'); 
        titolo.textContent = titolo_opera; 
        titolo.classList.add('titolo_opera'); 

        risultato_api3.appendChild(contenitore_opere);
        contenitore_opere.appendChild(contenitore_opera_totale); 
        contenitore_opera_totale.appendChild(contenitore_opera); 
        contenitore_opera.appendChild(opera); 
        contenitore_opera_totale.appendChild(titolo);  
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
    

    const configurazioneProfilo = document.createElement('a'); 
    configurazioneProfilo.textContent='Configurazione Profilo'; 
    configurazioneProfilo.setAttribute('href', "/configurazioneProfiloView");
    configurazioneProfilo.classList.add('link_menu');

    const home = document.createElement('a'); 
    home.textContent='home'; 
    home.setAttribute('href', "/homePageLoginView");
    home.classList.add('link_menu');

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
    div_link.appendChild(configurazioneProfilo);
    div_link.appendChild(carica_opera);
    div_link.appendChild(blog);
    div_link.appendChild(logout);

    close.addEventListener('click', closeModaleMenu); 
}


function closeModaleMenu(event)
{
    const modale_menu = document.querySelector('#modal-view-menu');
    modale_menu.innerHTML='';
    modale_menu.classList.add('hidden');
}