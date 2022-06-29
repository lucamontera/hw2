<?php

    namespace App\Http\Controllers;
    use App\Http\Controllers\Controller;
    use Illuminate\Support\Facades\DB;
    use App\Models\Opera;
    use Illuminate\Http\Request;
    use  App\Http\Controllers\Session;

    class CaricaOperaController extends Controller
    {
        function caricamentoOpera(Request $request)
        {
            
           $username=session()->get('username');

            //IMMAGINE
            $file = $request->file('image');
            $contents = $file->openFile()->fread($file->getSize());
            $immagineCodificata = base64_encode($contents); //qui ho il contenuto dell'immagine da salvare 

            $nome = request('nome'); 
            $tema = request('tema'); 
            $descrizione = request('descrizione'); 
            $prezzo = request('prezzo');
            $dimensioni = request('dimensioni'); 
            
            
            $query = DB::insert("INSERT INTO operas VALUES(0, '$username', '$nome', '$tema', '$descrizione', $prezzo, '$dimensioni','$immagineCodificata', 0,0)");
            
            if(isset($query))
            {
                return redirect('/homePageLoginView');
            }

        }

        
    }

?>