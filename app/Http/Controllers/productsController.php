<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;

class productsController extends Controller
{
    public function productlist(Request $request){
        $product = new Products();
        $products = $product->all();
        return response()->json(['status' => 200, 'data' => $products]);
    }
}
