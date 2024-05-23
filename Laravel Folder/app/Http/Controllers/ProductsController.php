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

    public function addAdminItem(Request $request){
        $product = new Products();
        $product->productName = $request->productName;
        $product->price = $request->price;
        $product->productDescription = $request->productDescription;
        $product->save();
        return response()->json(['status' => 201, 'message' => 'Product added successfully']);
    }

   
}
