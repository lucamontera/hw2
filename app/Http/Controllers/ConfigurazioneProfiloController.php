<?php

    namespace App\Http\Controllers;
    use App\Http\Controllers\Controller;
    use Illuminate\Support\Facades\DB;
    use App\Models\User;
    use Illuminate\Http\Request;
    use  App\Http\Controllers\Session;

    class configurazioneProfiloController extends Controller
    {
        function checkLogin()
        {
            $username=session()->get('username');
            
        }

        function userDataRequest()
        {
            $username=session()->get('username');
            $query= DB::table('users')->where('username', $username)->first();

            if($query)
            {
                echo json_encode($query);
            }
        }






        function Profilo(Request $request)
        {
            $request->validate([
                'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);
          
            $username=session()->get('username');

            //IMMAGINE
            $file = $request->file('image');
            $contents = $file->openFile()->fread($file->getSize());
            $immagineCodificata = base64_encode($contents); //qui ho il contenuto dell'immagine da salvare 

            $query = DB::update("UPDATE users set immagineProfilo ='$immagineCodificata' WHERE username='$username'");
            
            
            //DESCRIZIONE
            $descrizione = request('descrizione'); 
            $query2 = DB::update("UPDATE users set descrizione ='$descrizione' WHERE username='$username'");

            if(isset($query) &&  isset($query2))
            {
                return redirect('/homePageLoginView');
            }

            
                        
        }
    }
?>


