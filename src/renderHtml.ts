export function renderHtml(content: string) {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <!-- PASTE INTO OUTERMOST FOLDER. NONE OF THE LOCATIONS HAVE BEEN MODIFIED. PLUG N PLAY -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="https://store.area77seven.com/style.css">
    <meta charset="UTF-8">
    <title>Page title</title>
</head>
<body>
    <nav id="navbar" class="navbar navbar-expand-lg container-fluid">
        <div class=" ">
            <a class="nav-link" href="#"><h1 class="text-center m-3" id="navtitle">American Chic</h1></a>
        </div>
        <div class="text-right">
            <ul class="navlist justify-content-between m-3">
                <a class="navlink" href="">Home |</a>
                <a href="">Gallery |</a>
                <a href="assets/pages/account.html">My Account |</a>
                <a id="cart" href="assets/pages/cart.html">My Cart</a>
            </ul>
        </div>
    </nav>
    <br>
    <div class="container-fluid text-center">
        <div id="title" class="row">
            <h3>Welcome to the Home of American Chic!</h3>
            <p>Take a look through our gallery and contact us when you find what you're looking for</p>
        </div>
    </div>
    <div id="main-content" class="container text-center">
        <div class="row">
            <div id="gallery"></div>
        </div>
    </div>
    <div>
        <div>
            <div>
                
            </div>
        </div>
    </div>
    
    <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <script src="https://store.area77seven.com/js/script.js"></script>
    <script src="https://store.area77seven.com/js/cart-function.js"></script>
    
</body>
</html>

`;
}
