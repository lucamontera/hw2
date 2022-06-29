<?php

    namespace App\Http\Controllers;
    use App\Http\Controllers\Controller;
    use Illuminate\Support\Facades\DB;
    use App\Models\User;
    use Illuminate\Http\Request;
   use  App\Http\Controllers\Session;
   use Illuminate\Support\Facades\Hash;

    class RegistrazioneController extends Controller
    {
        function checkUsername($username) 
        {
            $user = DB::table('users')->where('username', $username)->first();
            
            if($user)
            {
                return ['false'=>'Username già in uso!'];
            }
            else
            {
                return ['true'=>'Username disponibile!'];
            }
        }





        function checkEmail($email) 
        {
            $user = DB::table('users')->where('email', $email)->first();
            
            if($user)
            {
                return ['false'=>'Email già in uso!'];
            }
            else
            {
                return ['true'=>'Email disponibile!'];
            }
        }



       /* function registrazione(Request $request)
        {
            // inserisco i dati dell'utente
           $nome = request('nome');
           $cognome = request('cognome');
           $dataNascita = request('data');
           $username = request('username');
           $password1 =  request('password');
           $password = request('password2');
           $email = request('email');

           if(isset($nome) && isset($cognome) && isset($dataNascita) && isset($username) && isset($password) && isset($email))
           {

                if(strcmp($password1, $password))
                {
                    DB::table('users')->insert([
            
                        'nome' => $nome,
                        'cognome' => $cognome, 
                        'dataNascita' => $dataNascita, 
                        'username' => $username,
                        'password' => $password, 
                        'email' => $email
    
                    ]);
    
                    $request->session()->put('username', $username); // inizializzo username di sessione
                    return view('ConfigurazioneProfilo');
                }

                else 
                {
                    return view('registrazione')->with("error", "LE PASSWORD NON COINCIDONO");
                }
                

            }

            else
            {
                return view('registrazione')->with("error", "Devi compilare tutti i campi!!!");
            }


        }*/






        

        public function registrazione()
        {
            $request = request();
            $error = array(); 

           $nome = request('nome');
           $cognome = request('cognome');
           $dataNascita = request('data');
           $username = request('username');
           $password1 =  request('password');
           $password = request('password2');
           $email = request('email');


            if($this->errori($request) === 0)
            {
               DB::table('users')->insert([
            
                        'nome' => $nome,
                        'cognome' => $cognome, 
                        'dataNascita' => $dataNascita, 
                        'username' => $username,
                        'password' => $password, 
                        //'password'=>bcrypt($request->$password),
                        'email' => $email
    
                    ]); 

                    $request->session()->put('username', $username); // inizializzo username di sessione
                    return view('ConfigurazioneProfilo');
                    
            }
            else
            {
               return view('registrazione')->with("error", "Compila i campi nella maniera corretta!");
            }
            
        }


        
        public function errori($count){
            
            $error = array();

            if(!preg_match('/^[a-zA-Z0-9]{1,16}$/', $count['username']))
            {
                $error[] = "Username non valido";
            }
            else
            {
                $username = User::where('username', $count['username'])->first();
                if($username !== null)
                {
                    $error[] = "Username già in uso";
                }
            }
    
            //Password
            if(strlen($count["password"]) < 8)
            {
                $error[] = "Password non valida";
            }
    
            //Conferma password
            if (strcmp($count["password"], $count["password2"]) != 0)
            {
                $error[] = "Le password non coincidono";
            }
    
            //Email
            if (!filter_var($count['email'], FILTER_VALIDATE_EMAIL))
            {
                $error[] = "Email non valida";
            } 
            else
            {
                $email = User::where('email', $count['email'])->first();
                if ($email !== null) 
                {
                    $error[] = "Email già utilizzata";
                }
            }
            return count($error);
        }

    }

?>