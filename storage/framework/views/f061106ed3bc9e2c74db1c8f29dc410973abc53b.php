<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href='<?php echo e(url("css/login.css")); ?>'>
    <script src='<?php echo e(url("js/login.js")); ?>' defer></script>
    <title>Login</title>
</head>
<body>


<nav>
    <div id="menu">
        <div></div>
        <div></div>
        <div></div>
    </div>

</nav>


<main>

    <div class='login_info'>
        
        <a href="<?php echo e(url('homeView')); ?>">
            <h1 id="logo">  
                <span id="logo-decoration1">qua</span><span id="logo-decoration2">dra</span><span id="logo-decoration3">ndo</span>
            </h1>
        </a>

        <p>Scopri il mondo della creatività <br> digitale e metti in mostra la tua.</p>

        <img src="http://localhost/hw1/images/sfondo.jpg" alt="">
    
    </div>

    

    <div class='login_form'>
        <p>Accedi su quadrando</p>
        
        <?php if(isset($error)): ?>
        <span class='error'><?php echo e($error); ?></span>
        <?php endif; ?>

        <form action="<?php echo e(route('login')); ?>" name="form_dati" method="post">
        <?php echo csrf_field(); ?>
        
            <label>Username:</label>
            
            <div class='text_username'>
                <input type="text" name="username" id="input_username">
                <p class='hidden_username'></p>
            </div>
   
            <label>Password:</label>
            <div class='text_password'>
                <input type="password" name="password" id="input_password">
                <p class='hidden_password'></p>
            </div>

            <div class='submit'>
                <label>&nbsp<input type="submit" name="submit" class='button_submit'></label>
            </div>

        </form>
        <a class='link_registrazione' href="<?php echo e(url('registrazioneView')); ?>">Registrati</a>
    </div>

    
</main>

<section id='modal-view-menu' class='hidden'></section>


</body>
</html>

<?php /**PATH /Users/lucamontera/hw2/resources/views/login.blade.php ENDPATH**/ ?>