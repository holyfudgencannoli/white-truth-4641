export function renderCart(): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="stylesheet" href="../css/style.css">
    <meta charset="UTF-8">
    <title>Page title</title>
</head>
<body>
    <nav id="navbar" class="navbar navbar-expand-lg">
        <div class="container d-flex">
            <a class="nav-link text-center" href="#"><h1 id="navtitle">American Chic</h1></a>
            <ul class="navlist justify-content-between m-3">
                <a class="navlink" href="">Home |</a>
                <a href="">Gallery |</a>
                <a href="">My Account |</a>
                <a id="cart" href="/cart">My Cart</a>
            </ul>
        </div>
    </nav>
    <br>
    <div id="cart-content" class="container">
        <h1 class="text-center">YOUR CART</h1>
        <div class="row text-center">
            <h4>These are the contents of your cart.</h4>
        </div>
        <div class="store-item-tile col-md-6">
            <div class="row">
                <div class="col-sm-5">
                    <div class="store-item-photo">
                        <img class="img-responsive" src="../imgs/pic1.jpg" alt="Item">
                    </div>
                    <div class="store-item-price">{{price_large}} <span></span></div>
                </div>
            <div class="store-item-description col-sm-7">
                <h3 class="store-item-title text-left">{{name}}</h3>
                <p class="store-item-details text-left">{{description}}</p>
            </div>
        </div>
        <hr class="visible-xs">
    </div>

    <div>
        <div>
            <div>
                
            </div>
        </div>
    </div>
    
    <script src="../js/jquery-3.6.0.min.js"></script>
    <script src="../js/bootstrap.bundle.min.js"></script>
    <script src="../js/script.js"></script>
    <script src="../js/cart-function.js"></script>
    <script src="../js/cart.js"></script>
    
</body>
</html>

  `;
}
