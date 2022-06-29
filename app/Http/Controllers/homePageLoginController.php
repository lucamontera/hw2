<?php

    namespace App\Http\Controllers;
    use App\Http\Controllers\Controller;
    use Illuminate\Support\Facades\DB;
    use App\Models\User;
    use Illuminate\Http\Request;
    use  App\Http\Controllers\Session;

    class homePageLoginController extends Controller
    {

        public function userDataRequest()
        {
            $username=session()->get('username');

            $query= DB::select("SELECT nome,cognome,dataNascita,username,email,immagineProfilo,descrizione,numeroOpereCaricate FROM users where username='$username'"); 

            return json_encode($query);
        }



        public function allUsersOpera()
        {
            $username=session()->get('username');

            $query= DB::select("SELECT o.*, immagineProfilo FROM operas o join users u on o.username=u.username");

            for( $i = 0; $i<sizeof($query); $i++ )
            {
                $output[] = array(

                    'idOpera'=>$query[$i]->idOpera,
                    'username'=>$query[$i]->username,
                    'nome'=>$query[$i]->nome,
                    'tema'=>$query[$i]->tema,
                    'descrizione'=>$query[$i]->descrizione,
                    'prezzo'=>$query[$i]->prezzo,
                    'dimensioni'=>$query[$i]->dimensioni,
                    'srcImmagine'=>$query[$i]->srcImmagine,
                    'likes'=>$query[$i]->likes,
                    'commenti'=>$query[$i]->commenti,
                    'immagineProfiloUtente'=>$query[$i]->immagineProfilo
                );
            }

            return json_encode($output);
           
        }


        public function aggiungiLike(Request $request)
        {
            $idOpera=request('prova'); //recupero l'id dell'immagine a cui voglio devo aggiungere il like
            $username=session()->get('username');

            $query1 = DB::select("SELECT * FROM likes WHERE username ='$username' and idOpera = '$idOpera'"); 

            if($query1)
            {
                return ['like già inserito all opera con id: ' => $idOpera];
            }
            else
            {
                $query = DB::insert("INSERT INTO likes VALUES (0, '$idOpera', '$username')"); 
                return ['like aggiunto all opera con id: ' => $idOpera];
            }
        }


        public function rimuoviLike(Request $request)
        {
            $idOpera=request('prova'); 
            $username=session()->get('username');
            $query = DB::delete("DELETE FROM likes where username = '$username' and idOpera = '$idOpera'"); 
            
            return ['like rimosso all opera con id: ' => $idOpera];
        }



        public function aggiornamentoNumeroLike()
        {
            $idOpera=request('prova'); //recupero l'id dell'immagine a cui voglio devo aggiungere il like
            $username=session()->get('username');
            $query = DB::select("SELECT * FROM operas"); 

            return $query;
            
        }

        public function checkLike()
        {
            $username=session()->get('username');
            $query = DB::select("SELECT idOpera FROM likes WHERE username = '$username'");
            
            return $query; 
        }








        /*------------------ PREFERITI FUNZIONI ------------------*/

        public function aggiungiPreferito(Request $request)
        {
            $idOpera=request('preferiti');
            $username=session()->get('username');
            
            $query1 = DB::select("SELECT * FROM preferitos WHERE username ='$username' and idOpera = '$idOpera'"); 

            if($query1)
            {
                return ['Preferito già inserito all opera con id: ' => $idOpera];
                
            }
            else
            {
                $query = DB::insert("INSERT INTO preferitos VALUES (0, '$idOpera', '$username')"); 
                return ['Preferito aggiunto all opera con id: ' => $idOpera];
            }
        }

        public function rimuoviPreferito(Request $request)
        {
            $idOpera=request('prova'); 
            $username=session()->get('username');
            $query = DB::delete("DELETE FROM preferitos where username = '$username' and idOpera = '$idOpera'"); 
            
            return ['preferito rimosso all opera con id: ' => $idOpera];
        }


        public function checkPreferito()
        {
            $username=session()->get('username');
            $query = DB::select("SELECT * FROM preferitos where username = '$username'"); 
            return $query; 
        }


        /*------------------ ANTEPRIMA MODALE DELL'OPERA ------------------*/

        public function anteprimaOpera(Request $request)
        {
            $idOpera = request('anteprima');
            
            $query = DB::select("SELECT o.*, u.immagineProfilo FROM operas o JOIN users u on o.username=u.username where idOpera = '$idOpera'"); 
            return $query; 
        }


        

    }



    













?>