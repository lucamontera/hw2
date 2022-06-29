<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blog;
use Illuminate\Support\Facades\DB;


class BlogController extends Controller
{
    function caricamentoArticoli()
    {
        $query = Blog::all(); 
        return json_encode($query);
    }

    function caricaArticolo($id)
    {
        //$query = Blog::where('_id' == $id)->get(); 
        $query = Blog::where('_id',  "$id")->get(); 
        return json_encode($query);    
    }
}

?>