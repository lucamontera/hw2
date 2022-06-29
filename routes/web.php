<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LinkViewController;
use App\Http\Controllers\RegistrazioneController;
use App\Http\Controllers\ConfigurazioneProfiloController;
use App\Http\Controllers\CaricaOperaController; 
use App\Http\Controllers\homePageLoginController; 
use App\Http\Controllers\CommentiController; 
use App\Http\Controllers\BlogController; 
use App\Http\Controllers\CuriositaController; 
use Illuminate\Http\Request;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*Route::get('/', function () {
    return view('blog');
});*/

/*
Route::get('/', function () {
    return view('home');
});*/
Route::get('/' ,[LinkViewController::class, 'homeView']); 




Route::get('/prova/{name}', [LoginController::class, 'checkUsername']);  // verifica dell'username
Route::post('/login', [LoginController::class, 'checkLogin'])->name('login'); //verifica credenziali per login 

Route::get('/home', [HomeController::class, 'userInfo']);


Route::get('/homeView' ,[LinkViewController::class, 'homeView']); 
Route::get('/loginView' ,[LinkViewController::class, 'loginView']); 
Route::get('/homePageLoginView' ,[LinkViewController::class, 'homePageLoginView']);
Route::get('/configurazioneProfiloView' ,[LinkViewController::class, 'configurazioneProfiloView']); 
Route::get('/curiositaView' ,[LinkViewController::class, 'curiositaView']); 
Route::get('/logout' ,[LoginController::class, 'logout']); 

//ROUTE REGISTRAZIONE


Route::get('/registrazioneView' ,[LinkViewController::class, 'registrazioneView']); 
Route::get('/registrazioneCheckUsername/{username}', [RegistrazioneController::class, 'checkUsername']); //verifica username durante la registrazione
Route::get('/registrazioneCheckEmail/{email}', [RegistrazioneController::class, 'checkEmail']); //verifica email durante la registrazione
Route::post('/registrazioneUtente', [RegistrazioneController::class, 'registrazione'])->name('registrazione'); 



//ROUTE CONFIGURAZIONE PROFILO 

Route::get('/checkLogin', [ConfigurazioneProfiloController::class, 'checkLogin']);  //verifica se l'utente è loggat
Route::get('/userDataRequest', [ConfigurazioneProfiloController::class, 'userDataRequest']);
Route::post('/configurazioneProfilo', [ConfigurazioneProfiloController::class, 'Profilo'])->name('configurazione');


//ROUTE HOME-PAGE-LOGIN 

Route::get('/homePageLoginView' ,[LinkViewController::class, 'homePageLoginView']); 
Route::get('/userDataRequest', [homePageLoginController::class, 'userDataRequest']); //carico info utente Loggato
Route::get('/allUsersOpera', [homePageLoginController::class, 'allUsersOpera']); //carico tutte le opere

Route::post('/aggiungiLike', [homePageLoginController::class, 'aggiungiLike']); //aggiunge like al post e memorizza dentro il DB 
Route::post('/rimuoviLike', [homePageLoginController::class, 'rimuoviLike']); //rimuovi like al post e cancella id dal database
Route::get('/aggiornamentoNumeroLike', [homePageLoginController::class, 'aggiornamentoNumeroLike']); //carico tutte le opere
Route::get('/checkLike', [homePageLoginController::class, 'checkLike']); //carico tutte le opere


Route::post('/aggiungiPreferito', [homePageLoginController::class, 'aggiungiPreferito']); 
Route::post('/rimuoviPreferito', [homePageLoginController::class, 'rimuoviPreferito']); 
Route::get('/checkPreferito', [homePageLoginController::class, 'checkPreferito']); 

Route::post('/anteprimaOpera', [homePageLoginController::class, 'anteprimaOpera']); 




//ROUTE CARICAMENTO OPERA
Route::get('/caricaOperaView' ,[LinkViewController::class, 'caricaOperaView']);
Route::post('/caricaOpera', [CaricaOperaController::class, 'caricamentoOpera'])->name('carica');



//CONNESSIONE A MONGODB

//Route::get('/', [CommentiController::class, 'show']);

Route::post('/caricaCommenti', [CommentiController::class, 'caricaCommenti']);
Route::post('/inserisciCommento', [CommentiController::class, 'inserisciCommento'])->name('inserisciCommento');




// ROUTE SEZIONE BLOG

Route::get('/blogView' ,[LinkViewController::class, 'blogView']); 
Route::get('/caricamentoArticoli', [BlogController::class, 'caricamentoArticoli']); //carico tutti gli articoli
Route::get('/caricaArticolo/{id}', [BlogController::class, 'caricaArticolo']); //carico tutti gli articoli


// // ROUTE SEZIONE CURIOSITA

Route::get('/ricercaQuadro/{word}' ,[CuriositaController::class, 'ricercaQuadro']); 
Route::get('/wikipediaApi/{word}' ,[CuriositaController::class, 'wikipediaApi']); 
Route::get('/artChicagoApi/{word}' ,[CuriositaController::class, 'artChicagoApi']); 