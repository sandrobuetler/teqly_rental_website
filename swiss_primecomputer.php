<!DOCTYPE HTML>
<html>
<head>
    <?php
    include('shared/cookie.php')
    ?>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>EASIT - Prime Computer</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Prime Computer ist ein St. Galler Mini PC und Server Produzent."/>
    <meta name="keywords"
          content="IT-Partner, Iaas, Hardware mieten, Hardware, Software, mieten, rental, Support, IT-service"/>
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

    <div id="fh5co-about">
        <div class="container">
            <div class="row animate-box">
                <div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
                    <h2>Prime Computer</h2>
                    <p>Prime Computer ist überzeugt, dass IT-Hardware nachhaltig produziert und eingesetzt werden muss.
                        Bei der Produktion der Prime Computer Produkte spielen ökologische und soziale Aspekte deshalb
                        eine zentrale Rolle. Im Betrieb steht Energieeffizienz und eine möglichst lange Lebensdauer
                        ihrer PCs und Server im Vordergrund. Aus diesen Gründen haben sie ihre langlebigen,
                        wartungsarmen und sparsamen Mini-PCs und Server entwickelt. Die lüfterlose Bauweise und der
                        Einsatz von hochwertigen und exakt aufeinander abgestimmten Komponenten, erlaubt eine besonders
                        kompakte Bauweise und verleiht ihren PCs und Servern höchste Zuverlässigkeit.</p>
                    <p><a class="btn btn-primary btn-lg btn-demo" href="https://primecomputer.ch" target="_blank"></i>
                            Website</a></p>
                </div>
            </div>
            <div class="row animate-box">
                <div class="col-md-6 col-md-offset-3 text-center heading-section">
                    <h3>Swiss Made</h3>
                    <p>Die Produkte der Prime Computer AG werden in der Schweiz, am Hauptsitz in St. Gallen, entwickelt
                        und assembliert. Jeder PC und Server wird hier einzeln getestet, bevor er ausgeliefert wird. Die
                        Prime Computer AG verwendet Komponenten von namhaften Firmen wie Intel, Samsung und
                        Kingston.</p>
                </div>
            </div>

            <div class="row row-bottom-padded-md">
                <div class="col-md-12 text-center animate-box">
                    <p><img src="images/swissmade/primecomputer/teqly_sm_primecomputer_mood.png"
                            alt="Bild aus der Montage der Prime Computer AG" class="img-responsive img-rounded"
                            width="100%"></p>
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
<!-- Main -->
<script src="js/main.js"></script>

<?php
include('shared/zammadchat.php')
?>

</body>
</html>

