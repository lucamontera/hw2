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
}


/* ------------------  HEADER ------------------*/

document.querySelector("header").scrollIntoView({behavior: 'smooth'});

const arrow = document.querySelector('.arrow'); 
arrow.addEventListener('click', scroll); 

function scroll(event)
{
    document.getElementById("here").scrollIntoView({behavior: 'smooth'});
}


fetch('caricamentoArticoli').then(blogResponse).then(blogJson); 

function blogResponse(response)
{
    return response.json();
}

function blogJson(json)
{
    const numero_risultati = json.length; 
    console.log(json); 

    const h1 = document.createElement('h1'); 
    h1.textContent = 'Ecco gli ultimi articoli:'; 
    h1.id = 'here'; 

    const p = document.createElement('p'); 
    p.textContent='Cliccane uno per leggerne il contenuto';
    
    articoli_blog.appendChild(h1); 
    h1.appendChild(p); 
    

    for(i = 0; i<numero_risultati; i++)
    {

        const id_articolo = json[i]._id; 

        const articoli_blog  = document.querySelector('.articoli-blog');

        const h1 = document.createElement('h1'); 
        h1.textContent = 'Ecco gli ultimi articoli:'; 
        h1.id = 'here'; 

        const p = document.createElement('p'); 
        p.textContent='Cliccane uno per leggerne il contenuto'; 

        const blog_container = document.createElement('div');
        blog_container.classList.add('blog-container');  

        const article = document.createElement('div');
        article.classList.add('article'); 

        const info = document.createElement('div');
        info.classList.add('info'); 

        const title_articolo = document.createElement('title-articolo');

        const span1 = document.createElement('span');
        span1.setAttribute('id', 'title-decoration1');

        const span2 = document.createElement('span');
        span2.id='title-decoration2'; 

        const span3 = document.createElement('span');
        span3.id='title-decoration3';

        const intro_articolo = document.createElement('intro-articolo');
        intro_articolo.classList.add('intro-articolo');

        const link = document.createElement('a');
        link.textContent='scopri di più'; 
        link.classList.add('show-more'); 
        link.id = id_articolo; 
        
        const blog_img = document.createElement('img'); 
        blog_img.classList.add('blog-img'); 
        blog_img.src= "data:image/jpeg;base64,"+json[i].img; 

        const contenuto_titolo =json[i].titolo; 
        const titolo1 = contenuto_titolo.substring(0,2); 
        const titolo2 = contenuto_titolo.substring(2,4);
        const titolo3 = contenuto_titolo.substring(4,);

        span1.textContent=titolo1;
        span2.textContent=titolo2;
        span3.textContent=titolo3; 

        intro_articolo.textContent = json[i].intro; 
        
        articoli_blog.appendChild(blog_container); 
        blog_container.appendChild(article); 

        article.appendChild(info);
        info.appendChild(title_articolo);
        title_articolo.append(span1); 
        title_articolo.append(span2);
        title_articolo.append(span3);   
        info.appendChild(intro_articolo); 
        info.appendChild(link); 
        article.appendChild(blog_img);  


        link.addEventListener('click' ,anteprimaArticolo);
    }
}




/* -------------------- MODALE -------------------- */


const articoli_blog  = document.querySelector('.articoli-blog');

function anteprimaArticolo(event)
{

    articoli_blog.innerHTML=''; 

    const back =  document.createElement('img'); 
    back.classList.add('arrow_back'); 
    back.src = '../images/arrow.svg'; 
    
    articoli_blog.append(back); 
    back.addEventListener('click', chiudiModale);
    const id = event.currentTarget.id;
    console.log(id); 
    
    fetch('caricaArticolo/' + encodeURIComponent(id)).then(articoloResponse).then(articoloJson); 
}


function articoloResponse(response)
{
    return response.json(); 
}

function articoloJson(json)
{
    console.log(json); 

    const section_articolo  = document.createElement('section'); 
    section_articolo.classList.add('section_articolo'); 
    
    const articolo = document.createElement('div'); 
    articolo.classList.add('articolo'); 

    const immagineCopertina = document.createElement('img'); 
    immagineCopertina.classList.add('immagine-copertina'); 
    immagineCopertina.src = "data:image/jpeg;base64,"+json[0].img;
    
    const data = document.createElement('span'); 
    data.textContent ='Pubblicato il: ' +json[0].dataCreazione; 
    data.classList.add('data');  

    console.log(data);
     
    const titolo = document.createElement('h1'); 
    titolo.classList.add('titolo'); 
    titolo.textContent=json[0].titolo; 

    const paragrafo1 = document.createElement('p'); 
    paragrafo1.classList.add('paragrafo');
    paragrafo1.textContent = json[0].contenuto.paragrafo1; 

    const paragrafo2 = document.createElement('p'); 
    paragrafo2.classList.add('paragrafo');
    paragrafo2.textContent = json[0].contenuto.paragrafo2; 

    const paragrafo3 = document.createElement('p'); 
    paragrafo3.classList.add('paragrafo');
    paragrafo3.textContent = json[0].contenuto.paragrafo3; 

    articoli_blog.style.backgroudImage = "data:image/jpeg;base64,"+json[0].pattern;

    articoli_blog.appendChild(section_articolo); 

    section_articolo.append(articolo); 

    
    articolo.appendChild(immagineCopertina); 
    articolo.appendChild(data); 
    articolo.appendChild(titolo); 
    articolo.appendChild(paragrafo1); 
    articolo.appendChild(paragrafo2);
    articolo.appendChild(paragrafo3);  


}




function chiudiModale(event)
{
    articoli_blog.innerHTML=''; 
    fetch('caricamentoArticoli').then(blogResponse).then(blogJson); 
}




//MENU MOBILE 


const menu = document.getElementById('menu'); 

menu.addEventListener('click', mostraMenu);

function mostraMenu(event)
{

    document.querySelector('.articoli-blog').classList.add('hidden');

    const modale_menu = document.getElementById('modal-view-menu');
    modale_menu.classList.remove('hidden'); 
    
    const div_link = document.createElement('div'); 
    div_link.classList.add('div_link');
    
    const home = document.createElement('a'); 
    home.textContent='home'; 
    home.setAttribute('href', "/homePageLoginView");
    home.classList.add('link_menu');

    const configurazione_profilo = document.createElement('a'); 
    configurazione_profilo.textContent='Configurazione profilo'; 
    configurazione_profilo.setAttribute('href', "/configurazioneProfiloView");
    configurazione_profilo.classList.add('link_menu');

    const carica_opera = document.createElement('a'); 
    carica_opera.textContent='Carica Opera'; 
    carica_opera.setAttribute('href', "/caricaOperaView");
    carica_opera.classList.add('link_menu');

    const curiosità = document.createElement('a'); 
    curiosità.textContent='Curiosità'; 
    curiosità.setAttribute('href', "/curiositaView");
    curiosità.classList.add('link_menu');

    const logout = document.createElement('a'); 
    logout.textContent='Logout'; 
    curiosità.setAttribute('href', "/logout");
    logout.classList.add('link_menu');

    const close = document.createElement('img'); 
    close.src="../images/close.png";
    close.classList.add('close_modale');

    modale_menu.appendChild(close); 
    modale_menu.appendChild(div_link); 
    div_link.appendChild(home);
    div_link.appendChild(configurazione_profilo);
    div_link.appendChild(carica_opera);
    div_link.appendChild(curiosità);
    div_link.appendChild(logout);

    close.addEventListener('click', closeModaleMenu); 
}


function closeModaleMenu(event)
{
    document.querySelector('.articoli-blog').classList.remove('hidden');
    const modale_menu = document.querySelector('#modal-view-menu');
    modale_menu.innerHTML='';
    modale_menu.classList.add('hidden');
}











