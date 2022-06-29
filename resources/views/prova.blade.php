
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src='{{ url("js/prova.js")}}' defer></script>
    <title>Document</title>
</head>
<body>
    <p>La versione di Laravel è {{ app()->version() }}

    <h1>Nel database ho trovato: </h1>

    <h3>CLICCAMI</h3>

<h1>Benvenuto: <span class='username'></span></h1>

    <form action="">
        <input type="text" name='nome' class='nome'>
    </form>

</p>

<?php

echo phpversion(); 

?>

</body>
</html>