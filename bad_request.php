<!DOCTYPE HTML>
<html>
<html lang="de">
<head>
    <?php
    include('shared/cookie.php')
    ?>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>TEQLY | Rental - Ooops 400</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description"
          content="Bei EASIT.rent finden Sie was Sie brauchen! Ausser hier, dass ist unsere HTML 400 Error Seite..."/>
    <meta name="keywords"
          content="IT-Partner, Iaas, Hardware mieten, Hardware, Software, mieten, rental, Support, IT-service, mieten, Aargau Infrmatik, KMU, Laptop mieten, Server mieten"/>
    <meta name="author" content="TEQLY GmbH"/>

    <!-- Favicon -->
    <link href="images/teqly_favicon.png" rel="shortcut icon">

    <!-- Facebook and Twitter integration -->
    <meta property="og:title" content=""/>
    <meta property="og:image" content=""/>
    <meta property="og:url" content=""/>
    <meta property="og:site_name" content=""/>
    <meta property="og:description" content=""/>
    <meta name="twitter:title" content=""/>
    <meta name="twitter:image" content=""/>
    <meta name="twitter:url" content=""/>
    <meta name="twitter:card" content=""/>

    <!-- <link href="https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,700,800" rel="stylesheet">	 -->
    <link href="https://fonts.googleapis.com/css?family=Inconsolata:400,700" rel="stylesheet">

    <!-- Animate.css -->
    <link rel="stylesheet" href="css/animate.css">
    <!-- Icomoon Icon Fonts-->
    <link rel="stylesheet" href="css/icomoon.css">
    <!-- Bootstrap  -->
    <link rel="stylesheet" href="css/bootstrap.css">
    <!-- Flexslider  -->
    <link rel="stylesheet" href="css/flexslider.css">

    <!-- Theme style  -->
    <link rel="stylesheet" href="css/styleair.css">

    <!-- Modernizr JS -->
    <script src="js/modernizr-2.6.2.min.js"></script>
    <!-- FOR IE9 below -->
    <!--[if lt IE 9]>
    <script src="js/respond.min.js"></script>
    <![endif]-->


</head>
<body>

<div class="fh5co-loader"></div>

<div id="page">
    <?php
    include('shared/navigation.php');
    ?>

    <header id="fh5co-header" class="fh5co-cover js-fullheight" role="banner">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2 text-center">
                    <div class="display-t js-fullheight">
                        <div class="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
                            <h1>400 - Bad Request!</h1>
                            <img src="images/error/teqly_502.gif" style="padding-bottom: 20px">
                            <h2>Aus irgendeinem Grund ist unser Server nicht in der Lage auf die von Ihnen gesendete Anfrage zu antworten. Der Fehler sollte verschwinden, wenn Sie auf eine andere Seite wechseln.</h2>
                            <p><a style="margin-top: 5px" class="btn btn-primary btn-lg btn-demo" href="/"></i>
                                    Startseite</a>
                                <a style="margin-top: 5px" class="btn btn-primary btn-lg btn-demo" href="pr_jahr.php">Preisrechner</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <?php
    include('shared/footer.php');
    ?>
</div>

<div class="gototop js-top">
    <a href="#" class="js-gotop"><i class="icon-arrow-up22"></i></a>
</div>

<!-- Zammad jQuery -->
<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
<!-- jQuery -->
<script src="js/jquery.min.js"></script>
<!-- jQuery Easing -->
<script src="js/jquery.easing.1.3.js"></script>
<!-- Bootstrap -->
<script src="js/bootstrap.min.js"></script>
<!-- Waypoints -->
<script src="js/jquery.waypoints.min.js"></script>
<!-- Flexslider -->
<script src="js/jquery.flexslider-min.js"></script>
<!-- Main -->
<script src="js/main.js"></script>

<?php
include('shared/zammadchat.php')
?>

</body>
</html>

