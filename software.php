<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>TEQLY | Rental - Software</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description"
          content="Wenn die Grundausstattung unserer Konfigurationen nicht Ihren Anforderungen entspricht, bieten wir Ihnen verschiede Zusatzlösungen an."/>
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

    <div id="fh5co-portfolio">
        <div class="container">
            <div class="row animate-box">
                <div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
                    <h2>Zusätzliche Software</h2>
                    <p>Zwar kommen alle unsere Client Geräte mit vorinstalliertem Office, wenn Sie aber zusätzlich
                        weitere Microsoft Programme oder eine sichere Schweizer Cloud Lösung suchen, können wir Ihnen
                        auch diese Wünsche erfüllen.<br>Falls Sie spezielle Anforderungen an Ihre Software haben,
                        kontaktieren Sie uns gerne
                        unverbindlich. Wir unterbreiten Ihnen gerne auch ein Angebot ausserhalb unseres Standard
                        Sortiments. Gerne unterstützen wir Sie auch bei der Implementation von komplexeren Programmen
                        wie z.B. CAD-Software oder OnPremise ERP- und Buchhaltungssystemen.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="fh5co-portfolio animate-box">
                        <a href="sw_teqlycloud.php">
                            <div class="portfolio-entry"
                                 style="background-image: url(images/teqly_cloud.png);"></div>
                            <div class="portfolio-text">
                                <h3>TEQLY | Cloud</h3>
                                <p style="color: #0b0b0b">Wieso sich bei einem Cloudanbieter einmieten, wenn Sie auch
                                    Ihre eigene Cloud haben können? Mit TEQLY | Cloud bieten wir Ihnen die Möglichkeit
                                    günstig, sicher & effizient eine eigene Cloudinfrastruktur zu betreiben.</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="fh5co-portfolio animate-box">
                        <a href="sw_microsoft.php">
                            <div class="portfolio-entry"
                                 style="background-image: url(images/teqly_microsoft.png);"></div>
                            <div class="portfolio-text">
                                <h3>Microsoft365</h3>
                                <p style="color: #0b0b0b">Word, Excel & Powerpoint kennen uns schätzen wir alle, aber
                                    Microsoft365 hat viel mehr zu bieten: Entdecken Sie Teams, Publisher, SharePoint
                                    oder OneDrive. Arbeiten Sie und Ihr Team dezentraler und effizienter.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <?php
    include('shared/calltoaction.php');
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

