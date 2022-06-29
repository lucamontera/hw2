
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href='{{ url("css/registrazione.css")}}'>
    <script src='{{ url("js/registrazione.js")}}' defer></script>

    <title>Form Registrazione</title>
</head>
<body>

<nav>
            <div id="logo">
                <span id="logo-decoration1">qua</span><span id="logo-decoration2">dra</span><span id="logo-decoration3">ndo</span>
            </div>

            <div id="link-nav">
                <a href="{{ url('homeView') }}">Home</a>
                <a href="{{ url('loginView') }}">Login</a>
            
            </div>

            <div id="menu">
                <div></div>
                <div></div>
                <div></div>
            </div>

</nav>

    <main>
    @isset ($error)
        <span class='error'>{{$error}}</span>
    @endisset
    
    <p class='intro'>Sei un <span id="logo-decoration1">cre</span><span id="logo-decoration2">ati</span><span id="logo-decoration3">vo</span>? 
    <br> Registrati su quadrando per vendere e pubblicare le tue opere o per acquistare e lasciarti ispirare</p>

   


    <form action="{{route('registrazione')}}" name="form_dati_registrazione" method="POST">
    @csrf
        <div class='align_name'>
            <span class='nome_style'>
                <label>Nome:</label>
                    <span></span>
                    <div class='text_nome'>
                        <input type="text" name="nome" id="input_nome">
                        <p class='hidden_username'></p>
                    </div>
            </span>

            <span class='cognome_style'>
                <label>Cognome:</label>
                <span></span>
                <div class='text_cognome'>
                    <input type="text" name="cognome" id="input_cognome">
                    <p class='hidden_password'></p>
                </div>
            </span>
            
        </div>
        
        <label>Data di nascita:
            <span></span>
            <div class='text_username'>
                <input type="text" name="data" id="input_data_nascita">
                <p class='hidden_username'></p>
            </div>
        </label>
            
            <label>Username: 
                <span></span>
                
                
                <div class='text_username'>
                    <input type="text" name="username" id="input_username">
                    <p class='hidden_username'></p>
                </div>
            </label>
            
            
            <div class='text_password'>
                <label>Password:</label>
                <span></span>
                <input type="password" name="password" id="input_password">
                <p class='hidden_password'></p>
            </div>

            

            <div class='text_password'>
                <label>Conferma Password:</label>
                <span></span>
                <input type="password" name="password2" id="input_password_confirm">
                <p class='hidden_password'></p>
            </div>

            <label>Email:
                <span></span>
                <div class='text_password'>
                    <input type="email" name="email" id="input_email">
                    <p class='hidden_password'></p>
                </div>
            </label>

    
            <div class='submit'>
                <label>&nbsp<input type="submit" name="submit" class='button_submit'></label>
                <span class='hidden_submit'></span>
            </div> 
        
       
        </form>
    </main>


    <section id='modal-view-menu' class='hidden'></section>
    

</body>
</html>








