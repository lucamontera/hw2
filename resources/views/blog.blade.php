<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href='{{ url("css/blog.css")}}'>
    <script src='{{ url("js/blog.js")}}' defer></script>
    <title>Blog</title>
</head>
<body>
    
<header>
    
    <nav>
        <div class='info-user'>
            <a href="{{ url('configurazioneProfiloView') }}" class='config'><img src="" alt="" class='picture-profile'></a>
        </div>
        
        <div>
            <a href="{{ url('homePageLoginView') }}">home</a>
            <a href="{{ url('configurazioneProfiloView') }}">Configurazione Profilo</a>
            <a href="{{ url('caricaOperaView') }}">Carica Opera</a>
            <a href="{{ url('curiositaView') }}">Curiosità</a>
        </div>
        
        <a href="{{ url('logout') }}" class='logout'>Logout</a>

        <div id="menu">
                <div></div>
                <div></div>
                <div></div>
        </div>
    </nav>



    <div class='intro'>
        <div class='intro-title'>
            <div class='intro-title2'>
                <h1>Benvenuto nella sezione blog</h1>
                <p>All'interno troverai numerosi articoli su tutto ciò che riguarda l'arte digitale e non solo.</p>
            </div>
        </div>

        <div class='intro-img'>
            <img src="../images/blog.png" class='img-blog'>
        </div>
    </div>

    <img src="../images/arrow.svg" class='arrow'>


</header>



<section class='articoli-blog'></section>

<section id='modal-view' class='hidden'></section>

<section id='modal-view-menu' class='hidden'></section>



</body>
</html>