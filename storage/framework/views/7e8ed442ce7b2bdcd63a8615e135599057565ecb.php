<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href='<?php echo e(url("css/homePage.css")); ?>'>
    <script src='<?php echo e(url("js/home.js")); ?>' defer></script>
    
    <title>HomePage</title>
</head>
<body>
    <header>
        <nav>
            <div id="logo">
                <span id="logo-decoration1">qua</span><span id="logo-decoration2">dra</span><span id="logo-decoration3">ndo</span>
            </div>

            <div id="link-nav">
                
                <a href="<?php echo e(url('loginView')); ?>">Login</a>
            </div>

            <div id="menu">
                <div></div>
                <div></div>
                <div></div>
            </div>

        </nav>
    
    <div class="content">

        <div class="area_logo">
            <h1 id="logo">  
                <span id="logo-decoration1">qua</span>
                <span id="logo-decoration2">dra</span>
                <span id="logo-decoration3">ndo</span>
            </h1>
        </div>

        <div class="area_txt">
            <p>Registrati su quadrando per condividere le tue opere con tutto il mondo!</p>
            <a href="<?php echo e(url('registrazioneView')); ?>">Registrati subito</a>
            <a href="<?php echo e(url('loginView')); ?>" class='login'>Login</a>
            
        </div>
        
    </div>
    </header>


    <section id='modal-view-menu' class='hidden'></section>



</body>
</html>
<?php /**PATH /Users/lucamontera/hw2/resources/views/home.blade.php ENDPATH**/ ?>