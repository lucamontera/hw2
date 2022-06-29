/* ------------------ CARICAMENTO DATI UTENTE LOGGATO ------------------*/

fetch('userDataRequest').then(datiResponse).then(datiJson); 

function datiResponse(response)
{
    return response.json(); 
}

const picture_profile = document.querySelector('img'); 

function datiJson(json)
{
    picture_profile.src="data:image/jpeg;base64,"+json[0].immagineProfilo;
    const username = document.getElementById('username').textContent=json.username; 
}

/* ------------------ CARICAMENTO OPERE UTENTE ------------------*/

const contenitore_opere= document.querySelector('.general-work-utente');
fetch('allUsersOpera').then(opereResponse).then(opereJson); 

function opereResponse(response)
{
    return response.json(); 
}

function opereJson(json)
{
    let num_results = json.length;
   if(num_results !== 0)
   {
        for(let i = 0; i<num_results ; i++)
        {   

            const link = document.createElement('a'); 
            link.setAttribute( "href", "http://localhost/hw1/php/linkOpera.php", "id", json[i].idOpera);
            link.classList.add('link');

            const contenitore_opera = document.createElement('div'); 
            contenitore_opera.classList.add('contenitore_opera_totale');

            const contenitore_informazioni_opera = document.createElement('div'); 
            contenitore_informazioni_opera.classList.add('contenitore_informazioni_opera');
            
            const titolo_opera = document.createElement('h1'); 
            titolo_opera.classList.add('titolo_opera'); 
            titolo_opera.textContent = json[i].nome; 

            const info_utente_opera = document.createElement('div'); 
            info_utente_opera.classList.add('info_utente_opera'); 

            const src_immagine_profilo = document.createElement('img'); 
            src_immagine_profilo.src = "data:image/jpeg;base64,"+json[i].immagineProfiloUtente;
            src_immagine_profilo.classList.add('picture-profile_utente'); 

            const username_utente_opera = document.createElement('span'); 
            username_utente_opera.classList.add('titolo_opera');
            username_utente_opera.textContent=json[i].username; 

            const contenitore_immagine_opera = document.createElement('div'); 
            contenitore_immagine_opera.classList.add('contenitore_immagine'); 
        
            const immagine_opera = document.createElement('img');
            immagine_opera.src="data:image/jpeg;base64,"+json[i].srcImmagine;
            immagine_opera.id=json[i].idOpera;
            immagine_opera.classList.add('immagine');

            const heart = document.createElement('img');
            heart.src="images/heart_white.png"; 
            heart.classList.add('like'); 
            heart.id = json[i].idOpera;

            const star = document.createElement('img');
            star.src="../images/star.png"; 
            star.classList.add('star'); 
            star.id = json[i].idOpera;

            const comment = document.createElement('img');
            comment.src="../images/sms.png"; 
            comment.classList.add('comment'); 
            comment.id = json[i].idOpera;
            
            const span = document.createElement('span');
            span.classList.add('info_utente_opera'); 

            const like = document.createElement('span'); 
            like.textContent=json[i].likes;
            like.id=json[i].idOpera;
            like.classList.add('number_like'); 

            const div_like = document.createElement('div'); 
            div_like.classList.add('div_like');

            const filtro = document.createElement('span'); 
            filtro.id=json[i].tema;
            filtro.classList.add('hidde');

            console.log(json);

            contenitore_opere.appendChild(contenitore_opera); 
            contenitore_opera.appendChild(contenitore_immagine_opera); 
            contenitore_immagine_opera.appendChild(immagine_opera);

            contenitore_opera.appendChild(contenitore_informazioni_opera); 
            contenitore_informazioni_opera.appendChild(titolo_opera); 
            contenitore_informazioni_opera.appendChild(info_utente_opera); 

            info_utente_opera.appendChild(span);
            span.appendChild(src_immagine_profilo); 
            span.appendChild(username_utente_opera);
            info_utente_opera.appendChild(div_like);
            div_like.appendChild(filtro);
            div_like.appendChild(star); 
            div_like.appendChild(heart); 
            div_like.appendChild(like);
            div_like.appendChild(comment);
            div_like.appendChild(commenti);

            heart.addEventListener('click', prova);
            star.addEventListener('click', preferiti);
            immagine_opera.addEventListener('click', anteprima); 

            const ricerca = document.querySelector('.filtro_ricerca');
            ricerca.addEventListener('click', filtra);
            
        }
        
    }
}
/* --------------------ADD LIKE OPERE  -------------------- */
 

function prova(event) //funzion per aggiungere like
{

    if(event.currentTarget.src==='http://127.0.0.1:8000/images/heart_red.png')
    {
        const csrfToken = document.head.querySelector("[name~=csrf-token][content]").content;
        const formData = new FormData(); 
        const id = event.currentTarget.id; 
        event.currentTarget.src="../images/heart_white.png";
        formData.append('prova',id);

        fetch('rimuoviLike',{method:'POST' , body: formData, headers:{"X-CSRF-Token": csrfToken}}).then(aggiornamentoLike);
        //.then(likeResponse).then(likeJosn);
    }

    else
    {
        const csrfToken = document.head.querySelector("[name~=csrf-token][content]").content;
        const formData = new FormData(); 
        const id = event.currentTarget.id; 
        event.currentTarget.src="../images/heart_red.png";
        formData.append('prova',id);

        fetch('aggiungiLike',{method:'POST' , body: formData, headers:{"X-CSRF-Token": csrfToken}}).then(aggiornamentoLike);
        //then(likeResponse).then(likeJosn);  
    }
} 

/*
function likeResponse(response)
{
    return response.json(); 
}

function likeJosn(json)
{
    aggiornamentoLike(); // controlla il numero di like e lo aggiorna
}
*/






/* -------------------- CHECK LIKE OPERE  -------------------- */

fetch('checkLike').then(checkLikeResponse).then(checkLikeJson); 

function checkLikeResponse(response)
{
    return response.json(); 
}

function checkLikeJson(json)
{
    const num_results = json.length;  
    for(let i = 0; i<num_results ; i++)
    {
        const likes_img = document.querySelectorAll('.like'); 
        for(const like of likes_img )
        {
            if(like.id===encodeURI(json[i].idOpera))
            {
                like.src='../images/heart_red.png';
            }
        }
     
    }
}










/* -------------------- AGGIORNAMENTO LIKE OPERE  -------------------- */


function aggiornamentoLike()
{
    fetch('aggiornamentoNumeroLike').then(aggiornamentoLikeResponse).then(aggiornamentoLikeJson); 
}

function aggiornamentoLikeResponse(response)
{
    return response.json(); 
}

function aggiornamentoLikeJson(json)
{
    const num_results= json.length; 
    const numbers =  document.querySelectorAll('.number_like');
   
    
   for(let i = 0; i<num_results ; i++)
    {
        for(const number of numbers)
        {  
            if(number.id ===encodeURI(json[i].idOpera))
            {
                number.textContent='';
                number.textContent=encodeURIComponent(json[i].likes);

            }
        }

        //se aggiorno i like dalla modale
        const numbers_modale =  document.querySelectorAll('.number_like_modale');
        for(const number of numbers_modale)
        {  
            if(number.id ===encodeURI(json[i].idOpera))
            {
                number.textContent='';
                number.textContent=encodeURIComponent(json[i].likes); 
            }
        }
    }
}


/* -------------------- check preferiti --------------------*/ 


function preferiti(event)
{

    console.log(event.currentTarget.src);

    if(event.currentTarget.src==='../images/star_yellow')
    {
        const csrfToken = document.head.querySelector("[name~=csrf-token][content]").content;
        const formData = new FormData(); 
        const id = event.currentTarget.id; 
        
        event.currentTarget.src="../images/stars.png";
        formData.append('preferiti',id);

        fetch('rimuoviPreferito',{method:'POST' , body: formData, headers:{"X-CSRF-Token": csrfToken}}).then(preferitoResponse).then(preferitoJson); 
    }

    else
    {
        const csrfToken = document.head.querySelector("[name~=csrf-token][content]").content;

        const formData = new FormData(); 
        const id = event.currentTarget.id; 
        event.currentTarget.src="../images/star_yellow.png";
        formData.append('preferiti',id);

        fetch('aggiungiPreferito',{method:'POST' , body: formData, headers:{"X-CSRF-Token": csrfToken}}).then(preferitoResponse).then(preferitoJson); 
    }
   
} 

function preferitoResponse(response)
{
    return response.json(); 
}

function preferitoJson(json)
{

}



/* -------------------- AGGIORNAMENTO PREFERITI OPERE  -------------------- */

fetch('checkPreferito').then(checkPreferitoResponse).then(checkPreferitoJson); 

function checkPreferitoResponse(response)
{
    return response.json(); 
}

function checkPreferitoJson(json)
{    
    const num_results = json.length; 
    for(let i = 0; i<num_results ; i++)
    {
        const stars_img = document.querySelectorAll('.star'); 
        for(const star of stars_img)
        {
            if(star.id===encodeURI(json[i].idOpera))
            {
                star.src='../images/star_yellow.png';
            }
        }
        
    }
}


/* -------------------- ANTEPRIMA MODALE -------------------- */

const modale = document.getElementById('modal-view'); 

function anteprima(event)
{   
    document.querySelector('footer').classList.add('hidden');
    modale.classList.remove('hidden');
    const all = document.querySelector('.works-content-utente').classList.remove('hidden');
    const all2 = document.querySelector('.contenitore_totale_modale').style.display='';

    const csrfToken = document.head.querySelector("[name~=csrf-token][content]").content;
    const formData = new FormData(); 
    const id = event.currentTarget.id; 
    formData.append('anteprima',id);

    fetch('anteprimaOpera',{method:'POST' , body: formData, headers:{"X-CSRF-Token": csrfToken}}).then(anteprimaResponse).then(anteprimaJson);  
}

function anteprimaResponse(response)
{
    return response.json(); 
}

function anteprimaJson(json)
{

    const image_opera = document.querySelector('.image_opera_anteprima'); 
    image_opera.src="data:image/jpeg;base64,"+json[0].srcImmagine; 


    const immagine_profilo_modale = document.querySelector('.immagine_profilo_modale'); 
    immagine_profilo_modale.src ="data:image/jpeg;base64,"+json[0].immagineProfilo; 

    const username = document.getElementById('username');
    username.textContent = '@'+json[0].username;


    const heart = document.querySelector('.like_modale'); 
    heart.id = json[0].idOpera;

    const commenti = document.querySelector('.comment_modale'); 
    commenti.id = json[0].idOpera;

    const star = document.querySelector('.star_modale'); 

    const numero_like = document.querySelector('.number_like_modale'); 
    numero_like.id=json[0].idOpera;
    numero_like.textContent=json[0].likes;

    const close = document.querySelector('.close_modale'); 

    console.log(commenti); 

    const funzione_commenti = document.querySelector('.div_commenti'); 
    funzione_commenti.id=json[0].idOpera;

    funzione_commenti.addEventListener('click', mostraCommenti);
    heart.addEventListener('click', prova);
    star.addEventListener('click', preferiti);
    close.addEventListener('click', closeModale); 
    //chiudo la modale

    fetch('checkLike').then(checkLikeModaleResponse).then(checkLikeModaleJson); 
    fetch('checkPreferito').then(checkPreferitoModaleResponse).then(checkPreferitoModaleJson);
}


function closeModale(event)
{
    document.querySelector('footer').classList.remove('hidden');
    const form = document.querySelector('form'); 
    const modale = document.getElementById('modal-view');
    modale.classList.add('hidden');
    modale.appendChild(form);
    form.classList.add('hidden');

    const all = document.querySelector('.works-content-utente').classList.remove('hidden');
    const commenti = document.querySelector('.commenti_modale');
    commenti.innerHTML='';   
    


    fetch('userDataRequest').then(datiResponse).then(datiJson); 
    fetch('checkPreferito').then(checkPreferitoResponse).then(checkPreferitoJson); 
    fetch('checkLike').then(checkLikeResponse).then(checkLikeJson); 
}

function mostraCommenti(event)
{ 
    const evento_id = event.currentTarget.id;
    const id = encodeURI(evento_id); 
    const formData = new FormData();
    formData.append('mostraCommenti',id);
    console.log(id);
    const csrfToken = document.head.querySelector("[name~=csrf-token][content]").content;
    fetch('caricaCommenti',{method:'POST' , body: formData, headers:{"X-CSRF-Token": csrfToken}}).then(commentiResponse).then(commentiJson);
}


function commentiResponse(response)
{
    return response.json(); 
}

function commentiJson(json)
{
    console.log('il json è: ');
    console.log(json);
    let num_results = json.length;
    const div_commenti = document.querySelector('.commenti_modale');

   if(num_results !== 0)
   {
        for(let i = 0; i<num_results ; i++)
        {   
            const div_contenitore_commento = document.createElement('div'); 
            div_contenitore_commento.classList.add('contenitore_commento');

            const contenitore_immagine_username = document.createElement('div'); 
            contenitore_immagine_username.classList.add('contenitore_immagine_username');

            const immagine_profilo = document.createElement('img'); 
            immagine_profilo.classList.add('picture_profile_utente_modale');
            immagine_profilo.src="data:image/jpeg;base64,"+json[i].immagineProfilo;

            const username = document.createElement('h6'); 
            username.textContent=json[i].username; 
            username.classList.add('username_commenti_modale'); 

            const span = document.createElement('span'); 
            span.classList.add('contenitore_username');

            const contenuto_commento = document.createElement('p'); 
            contenuto_commento.textContent=json[i].contenuto; 

            div_commenti.appendChild(div_contenitore_commento);
            div_contenitore_commento.appendChild(contenitore_immagine_username);
            contenitore_immagine_username.appendChild(immagine_profilo); 
            contenitore_immagine_username.appendChild(username);  
            div_contenitore_commento.appendChild(contenuto_commento);
        }
    }

    const idOpera = document.querySelector('.comment_modale');
    console.log('idOpera presa in considerazione: '+idOpera.id); 


    const form = document.querySelector('form'); 
    form.classList.remove('hidden'); 

    form.setAttribute('id', idOpera.id); 

    const opera = document.querySelector('form[name=commenti] input[name=idOpera]');
    //const opera = document.querySelector('.hidde'); 
    opera.setAttribute("value", idOpera.id);
    div_commenti.appendChild(form);
}

function inserimentoCommento(event)
{
    console.log('aggiungo commento all opera con id: ' +event.currentTarget.id); 
}

function checkLikeModaleResponse(response)
{
    return response.json(); 
}

function checkLikeModaleJson(json)
{
    const num_results = json.length; 
    for(let i = 0; i<num_results ; i++)
    {
        const likes_img = document.querySelectorAll('.like_modale'); 
        for(const like of likes_img )
        {
            if(like.id===encodeURI(json[i].idOpera))
            {
                like.src='../images/heart_red.png';
            }
        }

    }
}



function checkPreferitoModaleResponse(response)
{
    return response.json(); 
}

function checkPreferitoModaleJson(json)
{    
    const num_results = json.length; 
    for(let i = 0; i<num_results ; i++)
    {
        const stars_img = document.querySelectorAll('.star_modale'); 
        for(const star of stars_img)
        {
            if(star.id===encodeURI(json[i].idOpera))
            {
                star.src='../images/star_yellow.png';
            }
        }
        
    }
}







//MENU MOBILE 


const menu = document.getElementById('menu'); 

menu.addEventListener('click', mostraMenu);

function mostraMenu(event)
{
    const modale_menu = document.getElementById('modal-view-menu');
    modale_menu.classList.remove('hidden'); 
    
    const all = document.querySelector(".general-work-utente").style.display ='none'; 

    const div_link = document.createElement('div'); 
    div_link.classList.add('div_link');
    
    const configurazioneProfilo = document.createElement('a'); 
    configurazioneProfilo.textContent='Configurazione Profilo'; 
    configurazioneProfilo.setAttribute('href', "/configurazioneProfiloView");
    configurazioneProfilo.classList.add('link_menu');

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
    div_link.appendChild(configurazioneProfilo);
    div_link.appendChild(carica_opera);
    div_link.appendChild(curiosità);
    div_link.appendChild(blog);
    div_link.appendChild(logout);

    close.addEventListener('click', closeModaleMenu); 
}


function closeModaleMenu(event)
{
    const all = document.querySelector(".general-work-utente").style.display ='flex';
    const modale_menu = document.querySelector('#modal-view-menu');
    modale_menu.innerHTML='';
    modale_menu.classList.add('hidden');
}







/* -------------------- FILTRO RICERCA -------------------- */


function filtra(event)
{

    const opere = document.querySelectorAll('.div_like'); 
    const div_opere = document.querySelector('.contenitore_opera_totale'); 

    const input = document.getElementById('filtro');

    console.log(encodeURI(input.value)); 

    for(const opera of opere)
    {
        const prova = opera.childNodes[0].id;

        

        if(encodeURI(prova) !== encodeURI(input.value))
        {
            //prova.classList.add('hidde');
            //opera.parentElement.parentElement.parentElement.classList.add('hidden');   
            opera.parentElement.parentElement.parentElement.style.display = 'none';
            console.log( opera.parentElement.parentElement.parentElement);    
        }        
    }
}

const reset_filtro = document.getElementById('reset');
reset_filtro.addEventListener('click', annullaFiltro);

function annullaFiltro(event)
{

    const opere = document.querySelectorAll('.contenitore_opera_totale');
   
    for(const opera of opere)
    {
       opera.style.display='flex';
    }
}
