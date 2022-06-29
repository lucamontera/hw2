<?php
    namespace App\Http\Controllers;
    use App\Http\Controllers\Controller;
    use Illuminate\Support\Facades\DB;
    use App\Models\User;
    use Illuminate\Http\Request;
    use  App\Http\Controllers\Session;




    class HomeController extends Controller
    {
        function userInfo()
        {
            $id=session()->get('id');
            $user = DB::table('users')->where('idUtente', $id)->get();
            echo $user;
        }



    }
?>


