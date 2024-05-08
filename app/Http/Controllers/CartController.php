<?php

namespace App\Http\Controllers;

use App\Models\Products;
use App\Models\Cart;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;

class CartController extends Controller{

    public function addToCart(Request $request){
        $productCart = new Cart();
        $productCart->product_id = $request->product_id;
        $productCart->productName = $request->productName;
        $productCart->price = $request->price;
        $productCart->productDescription = $request->productDescription;
        $productCart->save();
        return response()->json(['status' => 201, 'message' => 'Product added successfully']);
    }

    public function viewCart(){
        $cartItems = Cart::all();
    
        $totalPrice = 0;
    
        foreach ($cartItems as $item) {
            $totalPrice += $item->price; // Assuming there is a price field in your cart table
        }
    
        $formattedCartItems = $cartItems->map(function ($item) {
            return [
                'id' => $item->id,
                'productName' => $item->productName,
                'price' => $item->price,
            ];
        });
    
        return response()->json([
            'cartItems' => $formattedCartItems,
            'totalItems' => count($cartItems),
            'totalPrice' => $totalPrice,
        ]);
    }
    

    public function updateCartItem(Request $request, $productId){
        // Validate request
        $request->validate([
            'quantity' => 'required|integer|min:1',
        ]);

        // Retrieve cart items from session or database
        // Example: $cartItems = session('cart');

        // Find the item in the cart and update its quantity
        // Example:
        // foreach ($cartItems as $key => $item) {
        //     if ($item['id'] == $productId) {
        //         $cartItems[$key]['quantity'] = $request->input('quantity');
        //         break;
        //     }
        // }

        // Update cart items in session or database
        // Example: session(['cart' => $cartItems]);

        return response()->json(['message' => 'Cart item updated']);
    }

    public function removeFromCart($productId){

        $cartItem = Cart::find($productId);
    
        if (!$cartItem) {
            return response()->json(['message' => 'Cart item not found'], 404);
        }
    
        $cartItem->delete();
    
        return response()->json(['message' => 'Cart item removed']);
    }
    
}
