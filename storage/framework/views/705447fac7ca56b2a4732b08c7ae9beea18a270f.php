<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
    <link rel="stylesheet" href='<?php echo e(url("css/configurazioneProfilo.css")); ?>'>
    <script src='<?php echo e(url("js/configurazioneProfilo.js")); ?>' defer></script>
    <title>Configurazione Profilo</title>
</head>
<body>


<nav>
        <div class='info-user'>
        
            <img src="" alt="" class='picture-profile'>
        
        
        </div>
        
        <div>
            <a href="<?php echo e(url('homePageLoginView')); ?>">Home</a>
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

<main>

<div  class='intro'>
    <div class='ciao'>
        <h1>Ciao: <span class='color' id='username'>inserisci username</span></h1>
        <p>Completa il tuo profilo!</p> 
        <span class='color'></span>  
    </div>

    <img src="" class='hidden' id='anteprima'>    

    
</div>

    <form action="<?php echo e(route('configurazione')); ?>" name="form_dati_configurazione" method="POST" enctype="multipart/form-data" id='form'>
    <?php echo csrf_field(); ?>
    <label>Carica un'immagine del profilo
        <input type="file" name="image" id="input_picture" onchange="anteprimaImmagine(event)" >
    </label>


    <label>Racconta qualcosa di te:</label>
    <input type="text" name="descrizione" id="input_descrizione" class='descrizione'>
    

    <div class='submit'>
        <label>&nbsp<input type="submit" name="submit" value='Upload' class='button_submit'></label>
        <span class='hidden_submit'></span>
    </div> 

    </form>
</main>

<section id='modal-view-menu' class='hidden'></section>

<footer>
        <h1>Web Programming HMW1</h1>
        <address>Università degli Studi di Catania</address>
        <p> Luca Montera ( Matricola: 1000007409 ) </p>
</footer>

</body>
</html>
<?php /**PATH /Users/lucamontera/hw2/resources/views/ConfigurazioneProfilo.blade.php ENDPATH**/ ?>