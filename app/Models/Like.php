<?php

namespace App\Models; 

use illuminate\Database\Eloquent\Model; 

class Like extends Model
{
    public function Opera()
    {
        return $this->belongsTo(Opera::class);
    }
    
    public function User()
    {
        return $this->belongsTo(User::class);
    }
}


?>