<?php

namespace App\Http\Controllers;

use App\Models\Products;
use App\Models\Cart;
use Illuminate\Http\Request;

class CartController extends Controller{

    public function addToCart(Request $request){
        $request->validate([
            'productId' => 'required|exists:products,id',
        ]);

        $productId = $request->input('productId');
        $product = Products::findOrFail($productId);

        $cartItem = new Cart();
        $cartItem->product_id = $product->id;
        $cartItem->product_name = $product->productName;
        $cartItem->price = $product->price;

        $cartItem->save();

        return response()->json(['message' => 'Product added to cart', 'item' => $cartItem]);
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
        // Retrieve cart items from session or database
        // Example: $cartItems = session('cart');

        // Find the item in the cart and remove it
        // Example:
        // foreach ($cartItems as $key => $item) {
        //     if ($item['id'] == $productId) {
        //         unset($cartItems[$key]);
        //         break;
        //     }
        // }

        // Update cart items in session or database
        // Example: session(['cart' => $cartItems]);

        return response()->json(['message' => 'Cart item removed']);
    }
}
