const nome = document.querySelector('.nome'); 
const body = document.querySelector('body'); 
nome.addEventListener('blur', prova);

function prova(event)
{

    console.log(nome.value); 

    fetch('/prova/{name}'+encodeURIComponent(nome.value)).then(onResponse).then(onJson); 


    function onResponse(response)
    {
        return response.json();  
    }
}


function onJson(json)
{
    console.log(json.ok); 

    const nomeInserito = document.createElement('h1'); 
    nomeInserito.textContent=json.ok; 

    body.appendChild(nomeInserito);    
}


fetch('/home').then(onResponse2).then(onJson2); 

function onResponse2(response)
{
    return response.json(); 
}

function onJson2(json)
{
    console.log(json);
    const username = document.querySelector('.username');
    username.textContent=json[0].username;

}
