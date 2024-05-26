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
    public function getProductDetails($id)
    {
        $product = Products::find($id);
        if (!$product) {
            return response()->json(['status' => 404, 'message' => 'Product not found'], 404);
        }
    
        return response()->json(['status' => 200, 'data' => $product]);
    }
    
    public function addAdminItem(Request $request){
        $product = new Products();
        $product->productName = $request->productName;
        $product->price = $request->price;
        $product->productDescription = $request->productDescription;
        $product->save();
        return response()->json(['status' => 201, 'message' => 'Product added successfully']);
    }

    public function adminUpdateItem(Request $request, $productId)
{
    $product = Products::find($productId);
    if ($product) {
        $product->productName = $request->input('productName');
        $product->price = $request->input('price');
        $product->productDescription = $request->input('productDescription');
        $product->save();

        return response()->json(['status' => 200, 'message' => 'Product updated successfully']);
    } else {
        return response()->json(['status' => 404, 'message' => 'Product not found']);
    }
}


    public function adminRemoveItem($productId){
        
        $product = Products::find($productId);
        
        if (!$product) {
            return response()->json(['message' => 'Cart item not found'], 404);
        }
        
        $product->delete();
        
        return response()->json(['message' => 'Cart item removed']);
    }

}
