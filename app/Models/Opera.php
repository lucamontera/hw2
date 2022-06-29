<?php

namespace App\Models; 

use illuminate\Database\Eloquent\Model; 

class Opera extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
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