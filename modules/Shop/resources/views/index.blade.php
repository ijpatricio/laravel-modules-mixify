<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <link rel="stylesheet" href="{{ mix('/css/app.css', 'modules/tasks') }}">

</head>
<body>
    <div id="app">
        <h1> Shop </h1>
    </div>
    <script src="{{ mix('/js/index.js', 'modules/shop') }}"></script>
</body>
</html>
