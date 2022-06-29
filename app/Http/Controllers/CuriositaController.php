<?php
    namespace App\Http\Controllers;
    use App\Http\Controllers\Controller;
    use Illuminate\Support\Facades\DB;
    use App\Models\User;
    use Illuminate\Http\Request;
    use  App\Http\Controllers\Session;

    class CuriositaController extends Controller
    {
        public function ricercaQuadro($word)
        {
            //const rest_url = 'https://api.unsplash.com/search/photos/?language=en&client_id=' +client_id + '&query=' +ricerca_value;

            $unsplash_endpoint = "https://api.unsplash.com/search/photos/?language=en&client_id="; 
            $unsplash_key = 'K3L_XE4sHkzUbEMUyYzEt3uOSXwXILH9qJr8DK2ZcMU'; 
            $q = urlencode($word); 
            $curl = curl_init(); 
            $api_url = $unsplash_endpoint . $unsplash_key . "&query=" . $q; 
            curl_setopt($curl, CURLOPT_URL, $api_url); 
            curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1); 
            $result = curl_exec($curl); 
            curl_close($curl); 
            print_r($result); 
        }


        public function wikipediaApi($word)
        {
            //const urlWikipedia = 'https://en.wikipedia.org/w/api.php?action=query&prop=extracts&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=1&exchars=2000&gsrsearch='

            $wikipedia_endpoint = 'https://en.wikipedia.org/w/api.php?action=query&prop=extracts&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=1&exchars=3000&gsrsearch='; 
            $q = urlencode($word); 
            $curl = curl_init(); 
            $api_url = $wikipedia_endpoint . $q; 
            curl_setopt($curl, CURLOPT_URL, $api_url); 
            curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1); 
            $result = curl_exec($curl); 
            curl_close($curl); 
            print_r($result); 
        }


        public function artChicagoApi($word)
        {

            $urlArtChicago_endopint = 'https://api.artic.edu/api/v1/artworks/search?query[term][is_public_domain]=true&fields=id,title,artist_display,image_id,artist_id&q=';
            $q = urlencode($word); 
            $curl = curl_init(); 
            $api_url = $urlArtChicago_endopint . $q; 
            curl_setopt($curl, CURLOPT_URL, $api_url); 
            curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1); 
            $result = curl_exec($curl); 
            curl_close($curl); 
            print_r($result); 
        }













    }
?>