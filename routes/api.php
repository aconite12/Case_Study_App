<?php

use App\Http\Controllers\ProductsController;
use App\Http\Controllers\CartController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/products', [productsController::class, 'productlist']);

Route::prefix('cart')->group(function () {
    Route::post('/add', [CartController::class, 'addToCart']);
    Route::get('/', [CartController::class, 'viewCart']);
    Route::put('/{productId}', [CartController::class, 'updateCartItem']);
    Route::delete('/{productId}', [CartController::class, 'removeFromCart']);
});