<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Commenti;

use Illuminate\Support\Facades\DB;
use App\Models\User;

class CommentiController extends Controller
{
    public function show()
    {    
       // $query = Commenti::all(); 

        $username=session()->get('username');
        
        $query = Commenti::where('usernameUtente', $username)->get();
        
        $num_risultati = sizeof($query);

        for($i=0; $i<sizeof($query) ; $i++)
        {

            $output[] = array(

                'username'=>$query[$i]->usernameUtente,
                'contenuto'=>$query[$i]->contenuto,
            );
        }

        return json_encode($output); 
    }



    public function caricaCommenti(Request $request)
    {
        $idOpera=request('mostraCommenti');
        
        $query = Commenti::where('idOpera', $idOpera)->get();
        return json_encode($query); 


    }



    public function inserisciCommento(Request $request)
    {
        $contenuto = request('commento');         
        $idOpera = request('idOpera'); 
        $username=session()->get('username');

       // $immagineProfilo= DB::select("SELECT immagineProfilo FROM users where username='$username'");


        $users = DB::table('users')->select('immagineProfilo')
                ->where('username', $username)
                ->first();

        $immagineProfilo = $users->immagineProfilo; //prendo l'immagine del profilo dell'utente che inserisce il commento

     // echo json_encode($users);


        //inserisco un nuovo commento
        $commento = new Commenti();
        $commento->username = $username; 
        $commento->contenuto = $contenuto; 
        $commento->idOpera = $idOpera; 
        $commento->immagineProfilo = $immagineProfilo;
        $commento->save();
    
        return redirect('homePageLoginView');
        

    }
 
}

?>