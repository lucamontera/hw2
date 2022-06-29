

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
    <link rel="stylesheet" href='<?php echo e(url("css/homePageLogin.css")); ?>'>
    <script src='<?php echo e(url("js/homePageLogin.js")); ?>' defer></script>

    <title>Homepage</title>
</head>
<body>


<header>
    
    <nav>
        <div class='info-user'>
        
            <img src="" alt="" class='picture-profile'>
        
        
        </div>
        
        <div>
            <a href="<?php echo e(url('configurazioneProfiloView')); ?>">Configurazione profilo</a>
            <a href="<?php echo e(url('caricaOperaView')); ?>">Carica Opera</a>
            <a href="<?php echo e(url('curiositaView')); ?>">Curiosità</a>
            <a href="<?php echo e(url('blogView')); ?>">Blog</a>
        </div>
        
        
        
        <a href="<?php echo e(url('logout')); ?>" class='logout'>Logout</a>

        <div id="menu">
            <div></div>
            <div></div>
            <div></div>
        </div>

        
    </nav>

</header>

<section>
    <h2 class='introduction'>Scopri le utlime opere caricate su quadrando</h2>

    <div class='ricerca'>
        <input type="text" name='filtro' id='filtro' placeholder="Inserisci un tema..">
        <label>&nbsp<input type="submit" name="filtra" class='filtro_ricerca'></label>
        <label>&nbsp<input type="submit" name="filtra"  value='reset' class='filtro_ricerca' id='reset'></label>
    </div>

    <p class='divisore'></p>

</section>


<section class='works-content-utente'>

    <div class='general-work-utente'></div>
    <div class='commenti'></div>

</section>


<section id='modal-view' class='hidden'>


    <img src="../images/close.png" class='close_modale'>
    <div class='div_anteprima'>
        <div class='contenitore_totale_modale'>

            <div class='info_opera_anteprima'>
                <div class='contenitore_immagine_anteprima'>
                    <img src="" class='image_opera_anteprima'>
                </div>
            </div>

            <div class='info_opera_modale'>
                <span class='span_immagine_autore'>
                    <img src=""class='immagine_profilo_modale'>
                    <span id='username'></span>
                </span>

                <span class='info_utente_opera_modale'>
                    <img src="../images/star.png" class='star_modale'>
                    
                    <div class='div_like_modale'>
                        <img src="../images/heart_white.png" class='like_modale'>
                        <span class='number_like_modale'></span>
                    </div>

                    <div class='div_commenti'>
                        <img src="../images/sms.png" class='comment_modale' id='com'>
                        <span class='number_commenti_modale'></span>
                    </div>

                    

                </span>
            </div>

            <div class='commenti_modale'>
                <form action="<?php echo e(route('inserisciCommento')); ?>" name="commenti" method="POST" class='hidden'>
                <?php echo csrf_field(); ?>
                <input type="text" name='commento' placeholder='inserisci un commento..' class='commento' >
                <input type="text" class='hidde' name='idOpera'>
                <label>&nbsp<input type="submit" name="submit" class='button_commenti'></label>
                </form>
            </div>
        
        </div>

    </div>



    <!--

    <form action="<?php echo e(route('inserisciCommento')); ?>" name="commenti" method="POST" class='hidden'>
        <?php echo csrf_field(); ?>
    <input type="text" name='commento' placeholder='inserisci un commento..' class='commento' >
    <input type="text" class='hidde' name='idOpera'>
    <label>&nbsp<input type="submit" name="submit" class='button_commenti'></label>
    </form>
-->

</section>

<section id='modal-view-menu' class='hidden'></section>





<footer>
        <h1>Web Programming HMW1</h1>
        <address>Università degli Studi di Catania</address>
        <p> Luca Montera ( Matricola: 1000007409 ) </p>
</footer>




</body>
</html><?php /**PATH /Users/lucamontera/hw2/resources/views/homePageLogin.blade.php ENDPATH**/ ?>