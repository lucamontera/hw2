<?php

    namespace App\Http\Controllers;
    use App\Http\Controllers\Controller;
    use Illuminate\Support\Facades\DB;
    use App\Models\User;
    use Illuminate\Http\Request;
    use  App\Http\Controllers\Session;
    use Illuminate\Support\Facades\Hash;

    class LoginController extends Controller
    {
        public function checkUsername($name) 
        {
        
            $user = DB::table('users')->where('username', $name)->first();
       
            if($user)
            {
                return ['ok' =>$user->nome];
            }
            else
            {
                return ['Username Errato!'];
            }

        }

        public function checkLogin(Request $request) 
        {

            
            $password = request('password'); 
            $username = request('username'); 

    
            $user = DB::table('users')->where('username', request('username'))->first();
            $user_password = DB::table('users')->where('password', $password)->first();
            
            

            /*$passwordHash = ($user->password);        
            if(Hash::check($password, $passwordHash))
            {
                echo 'ok';
            }*/
        
            if(isset($user) && isset($user_password))
            {
                $request->session()->put('id', $user->idUtente); //inizializzo id sessione
                $request->session()->put('username', $user->username); // inizializzo username di sessione
                return view('HomePageLogin');
            }
            else
            {
                $errore = ['Username o password errati!']; 
                return view('login')->with("error", "Username e/o Password errati");
            }
         
        }


        public function logout()
        {
            session()->flush();
            return view('home');
        }
    }





?>