<?php

Route::group(['prefix' => '/tasks'], function() {

    Route::get('/', 'Modules\Tasks\Http\Controllers\TaskController@index');

});
