<?php
/*
namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;


    protected $fillable = [
        'idUtente',
        'nome',
        'cognome',
        'dataNascita',
        'username',
        'password',
        'email',
        'immagineProfilo',
        'descrizione',
        'numeroOpereCaricate',
        'numeroPost'
    ];

    
    protected $hidden = [
        'password',
        'remember_token',
    ];

   
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
*/


namespace App\Models; 

use illuminate\Database\Eloquent\Model; 

class User extends Model
{
    protected $table = 'users'; 

    public function opere()
    {
        return $this->hasMany(Opera::class);
    }

    public function likes()
    {
        return $this->hasMany(Like::class);
    }

    public function preferito()
    {
        return $this->hasMany(Preferito::class);
    }




    
}





?>

