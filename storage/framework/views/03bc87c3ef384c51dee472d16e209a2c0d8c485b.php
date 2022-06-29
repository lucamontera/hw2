<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
    <link rel="stylesheet" href='<?php echo e(url("css/caricaOpera.css")); ?>'>
    <script src='<?php echo e(url("js/caricaOpera.js")); ?>' defer></script>
    
    <title>Document</title>
</head>
<body>
    
<header>
    
    <nav>
        <div class='info-user'>
        
        <img src="" alt="" class='picture-profile'>
        <a href="http://localhost/hw1/php/profiloUtente.php" class='username'></a></div>
        
        <div>
        <div>
            <a href="<?php echo e(url('homePageLoginView')); ?>">Home</a>
            <a href="<?php echo e(url('configurazioneProfiloView')); ?>">Configurazione profilo</a>
            <a href="<?php echo e(url('curiositaView')); ?>">curiosità</a>
            <a href="<?php echo e(url('blogView')); ?>">Blog</a>
        </div>
        </div>
        
        
        
        <a href="<?php echo e(url('/logout')); ?>" class='logout'>Logout</a>

        <div id="menu">
                <div></div>
                <div></div>
                <div></div>
        </div>
    </nav>

</header>
<main>
    
    <p class='intro'>Carica un' <span id="logo-decoration1">op</span><span id="logo-decoration2">e</span><span id="logo-decoration3">ra</span>
    <br>per farla apprezzare online o per metterla in vendita!</p>

    <form action="<?php echo e(route('carica')); ?>" name="form_dati_opera" method="POST" enctype='multipart/form-data'>
    <?php echo csrf_field(); ?>  
        <div class='align_name'>
            <span class='nome_style'>
                <label>Nome:</label>   
                <input type="text" name="nome" id="input_nome"> 
            </span>

            <span class='cognome_style'>
                <label>Tema:</label>
                    <input type="text" name="tema" id="input_tema">
                </div>
            </span>
            
        </div>

        <div class='align_name'>
            <span class='nome_style'>
                <label>Prezzo:</label>   
                <input type="number" name="prezzo" id="input_prezzo"> 
            </span>

            <span class='cognome_style'>
                <label>Dimensioni</label>
                    <input type="text" name="dimensioni" id="input_dimensioni">
                </div>
            </span>
            
        </div>


        <div class='align_name'>
            <span class='nome_style'>
                <label>Carica l'immagine della tua opera:
                    <input type="file" name="image" id="input_picture" onchange="anteprimaImmagine(event)">
                </label>
            </span>

        <span class='cognome_style'>
            <label>Descrizione:</label>
            <input type="text" name="descrizione" id="input_descrizione">
        </span>
        
        
        </div>
        
        <div class='submit'>
            <label>&nbsp<input type="submit" name="submit" class='button_submit'></label>
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
<?php /**PATH /Users/lucamontera/hw2/resources/views/caricaOpera.blade.php ENDPATH**/ ?>