<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use Illuminate\Http\Request;
use  App\Http\Controllers\Session;

class LinkViewController extends Controller
    {
        function loginView()
        {
            $username=session()->get('username');
            if($username != null)
            { 
               //return redirect('/homePageLoginView'); 
               return view('homePageLogin');
            }
            else
            {
                return view('login')->with('csrf_token', csrf_token()); 
                //return redirect('/loginView');
            }
            
        }

        function registrazioneView()
        {
            $username=session()->get('username');

            if ($username != null) 
            {
                return view('homePageLogin');
                //return redirect('/homePageLoginView');
            }
            else
            {
                return view('registrazione');
                //return redirect('/registrazioneView')->with('csrf_token', csrf_token()); 
            }
            
        }

        function caricaOperaView()
        {
            $username=session()->get('username');

            if ($username != null) 
            {
                return view('caricaOpera');
                //return redirect('/caricaOperaView')->with('csrf_token', csrf_token());
            }

            else
            {
                return view('login');
                //return redirect('/loginView');
            } 

        }

        function homeView()
        {
            $username=session()->get('username');

            if ($username ==! null) 
            {
                return view('homePageLogin');
                //return redirect('/homePageLoginView');
            }
            else
            {
                return view('home');
                //return redirect('/homeView');
            }
        }

        public function homePageLoginView()
        {
            $username=session()->get('username');

            if ($username == null) 
            {
                return view('login')->with('csrf_token', csrf_token()); 
                //return redirect('/loginView')->with('csrf_token', csrf_token());
            }

            else
            {
                return view('homePageLogin');
                //return redirect('/homePageLoginView');
            }
          
        }


        public function configurazioneProfiloView()
        {
            $username=session()->get('username');

            if ($username == null) 
            {
                return view('login')->with('csrf_token', csrf_token());
                //return redirect('/loginView');
            }

            else
            {
                return view('configurazioneProfilo');
                //return redirect('/configurazioneProfiloView');
            }
        }

        public function blogView()
        {
            $username=session()->get('username');

            if ($username == null) 
            {
                return view('login')->with('csrf_token', csrf_token());
                //return redirect('/loginView');
            }

            else
            {
                return view('blog');
                //return redirect('/configurazioneProfiloView');
            }
        }


        public function curiositaView()
        {
            $username=session()->get('username');

            if ($username == null) 
            {
                return view('login')->with('csrf_token', csrf_token());
                //return redirect('/loginView');
            }

            else
            {
                return view('curiosita');
                //return redirect('/configurazioneProfiloView');
            }
        }
    }

?>