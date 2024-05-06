<?php

namespace Database\Seeders;

use App\Models\Products;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Products::create([
            'productName'=>'Biogesic',
            'price' => 3,
            'productDescription' => 'Kapitbahay'
        ]);
        Products::create([
            'productName'=>'Diatabs',
            'price' => 8,
            'productDescription' => 'Ignacio'
        ]);
        Products::create([
            'productName'=>'Tiki tiki',
            'price' => 2,
            'productDescription' => 'Galang'
        ]);
        Products::create([
            'productName'=>'Celine',
            'price' => 12,
            'productDescription' => 'Lagmay'
        ]);
        Products::create([
            'productName'=>'Bioflu',
            'price' => 33,
            'productDescription' => 'Larracas'
        ]);
        Products::create([
            'productName'=>'Alaxan',
            'price' => 3,
            'productDescription' => 'Ferrer'
        ]);
        Products::create([
            'productName'=>'Solmux',
            'price' => 12,
            'productDescription' => '123123'
        ]);
        Products::create([
            'productName'=>'Robitussin',
            'price' => 13,
            'productDescription' => 'qwerqwer'
        ]);
        Products::create([
            'productName'=>'Advil',
            'price' => 12,
            'productDescription' => 'Alcen'
        ]);
        Products::create([
            'productName'=>'Aspirin',
            'price' => 20,
            'productDescription' => 'Kapitbahay'
        ]);
    }
}
