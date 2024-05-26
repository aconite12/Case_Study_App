<?php

use App\Http\Controllers\auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\productsController;
use App\Http\Controllers\CartController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/login', [LoginController::class, 'handleLogin']);
Route::post('/register', [RegisterController::class, 'register']);

Route::get('/products', [productsController::class, 'productlist']);

Route::prefix('cart')->group(function () {
    Route::post('/add', [CartController::class, 'addToCart']);
    // Route::post('/adminAddItem', [CartController::class, 'adminAddItem']);
    Route::get('/', [CartController::class, 'viewCart']);
    Route::put('/{productId}', [CartController::class, 'updateCartItem']);
    Route::delete('/{productId}', [CartController::class, 'removeFromCart']);
});

Route::prefix('products')->group(function () {

    Route::post('/adminAddItem', [productsController::class, 'addAdminItem']);
    Route::get('/', [ProductsController::class, 'productList']);
    Route::get('/{id}', [ProductsController::class, 'getProductDetails']);
    Route::put('/adminUpdateItem/{productId}', [productsController::class, 'adminUpdateItem']);
    Route::delete('/{productId}', [productsController::class, 'adminRemoveItem']);
});