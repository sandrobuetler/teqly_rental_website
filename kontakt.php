<!DOCTYPE HTML>
<html>
<head>
    <?php
    include('shared/cookie.php')
    ?>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>EASIT - Kontakt</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description"
          content="Kontaktieren Sie uns direkt hier, um ein persönliches Angebot zu erhalten."/>
    <meta name="keywords"
          content="IT-Partner, Iaas, Hardware mieten, Hardware, Software, mieten, rental, Support, IT-service, Kontakt, Mieten"/>
    <meta name="author" content="TEQLY GmbH"/>

    <!-- Favicon -->
    <link href="images/easit_favicon.png" rel="shortcut icon">

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

    <div id="fh5co-contact">
        <div class="container">
            <div class="row animate-box">
                <div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
                    <h2>Kontaktieren Sie uns!</h2>
                    <p>Wir stehen Ihnen mit Rat und Tat zur Seite wenn es um IT geht! Zögern Sie nicht uns eine Mail zu
                        schreiben oder uns anzurufen.<br> Wir freuen uns auf Sie!</p>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-md-push-1 animate-box">
                    <h3>Kontaktmöglichkeiten</h3>
                    <ul class="contact-info">
                        <li><i class="icon-location"></i>EASIT.rent<br>c/o TEQLY GmbH<br>TECHNOPARK© Aargau<br> Badenerstrasse 13<br> 5200 Brugg</li>
                        <li><i class="icon-old-phone"></i><a href="tel://+41565111133">+41 56 511 11 33</a></li>
                        <li><i class="icon-mail22"></i><a href="mailto:info@easit.rent">info@easit.rent</a></li>
                    </ul>
                </div>
                <div class="col-md-7 col-md-push-1 animate-box">
                    <img src="images/easit_logo.png" width="100%" class="img-responsive img-rounded">
                </div>
            </div>
        </div>
    </div>

    <?php
    include('shared/calltoaction_testmonth.php');
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
<!-- Magnific Popup -->
<script src="js/jquery.magnific-popup.min.js"></script>
<script src="js/magnific-popup-options.js"></script>
<!-- Main -->
<script src="js/main.js"></script>

<?php
include('shared/zammadchat.php')
?>

</body>
</html>

