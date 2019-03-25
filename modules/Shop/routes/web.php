<?php

Route::group(['prefix' => '/shop'], function() {

    Route::get('/', 'Modules\Shop\Http\Controllers\ShopController@index');

});
