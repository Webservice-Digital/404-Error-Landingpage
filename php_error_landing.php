<?php
// Check if the user has switched the mode
if (isset($_GET['mode']) && $_GET['mode'] === 'night') {
    $mode = 'night';
} elseif (isset($_GET['mode']) && $_GET['mode'] === 'hacking') {
    $mode = 'hacking';
} else {
    $mode = 'day';
}

// Set the appropriate CSS file based on the mode
$cssFile = '';
switch ($mode) {
    case 'night':
        $cssFile = 'styles/night.css';
        break;
    case 'hacking':
        $cssFile = 'styles/hacking.css';
        break;
    default:
        $cssFile = 'styles/day.css';
        break;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>404 Error - Page Not Found</title>
    <link rel="stylesheet" href="<?php echo $cssFile; ?>">
    <style>
        /* Add additional customizations here */
    </style>
</head>
<body>
    <div class="container">
        <h1>404 Error - Page Not Found</h1>
        <p>Oops! The page you are looking for could not be found.</p>
        <p>Please check the URL or go back to the <a href="/">homepage</a>.</p>

        <form action="/report-error" method="post">
            <label for="error-description">Error Description:</label><br>
            <textarea id="error-description" name="error-description" rows="4" cols="50"></textarea><br>
            <input type="submit" value="Submit Error Report">
        </form>

        <div class="search-bar">
            <form action="/search" method="get">
                <input type="text" id="search-query" name="q" placeholder="Search...">
                <button type="submit">Search</button>
            </form>
        </div>

        <div class="mode-switch">
            <a href="?mode=day">Day Mode</a> |
            <a href="?mode=night">Night Mode</a> |
            <a href="?mode=hacking">Hacking Mode</a>
        </div>

        <div class="suggestions">
            <h3>Popular Pages</h3>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/contact">Contact Us</a></li>
            </ul>
        </div>

        <div class="navigation">
            <h3>Navigation</h3>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul>
        </div>
    </div>
</body>
</html>
