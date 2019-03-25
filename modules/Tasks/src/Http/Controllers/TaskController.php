<?php

namespace Modules\Tasks\Http\Controllers;

class TaskController
{
    public function index()
    {
        return view('tasks::index');
    }
}
