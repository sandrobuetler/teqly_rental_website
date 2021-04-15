<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>TEQLY | Rental - Swiss Made</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description"
          content="Kaufen Sie Hardware und Support Made in Switzerland. Erfahren Sie hier mehr über unsere Partner und Lieferanten."/>
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
                    <h2>Swiss Made</h2>
                    <p>Uns ist es wichtig, dass Sie wissen woher die Produkte und Dienstleistungen, die Sie einkaufen,
                        kommen. Angefangen bei uns: Wer steckt eigentlich hinter TEQLY?<br> Aber da hören wir nicht auf,
                        wir informieren Sie immer transparent über unsere lokalen und regionalen Lieferanten und
                        Partner.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="fh5co-portfolio animate-box">
                        <a href="swiss_teqly.php">
                            <div class="portfolio-entry"
                                 style="background-image: url(images/teqly_sm_teqly.png);"></div>
                            <div class="portfolio-text">
                                <h3>TEQLY</h3>
                                <p style="color: #0b0b0b">Wir sind Ihr innovativer IT-Partner aus dem Kanton Aargau.
                                    Setzen auch Sie auf unseren Service und werden Sie Teil unserer wachsenden
                                    Kunden-Community!</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="fh5co-portfolio animate-box">
                        <a href="swiss_primecomputer.php">
                            <div class="portfolio-entry"
                                 style="background-image: url(images/teqly_sm_primecomputer.png);"></div>
                            <div class="portfolio-text">
                                <h3>Prime Computer</h3>
                                <p style="color: #0b0b0b">Die Prime Computer AG entwickelt und assembliert ihre Produkte
                                    am Hauptsitz in St. Gallen. Die nachhaltige Entwicklung und Nutzung von
                                    IT-Komponenten stehen im Fokus.</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="fh5co-portfolio animate-box">
                        <a href="swiss_axxiv.php">
                            <div class="portfolio-entry"
                                 style="background-image: url(images/teqly_sm_axxiv.png);"></div>
                            <div class="portfolio-text">
                                <h3>axxiv</h3>
                                <p style="color: #0b0b0b">axxiv ist die Eigenmarke der Littlebit Technology AG aus Zug.
                                    Massenware sucht man im axxiv Portfolio vergebens, alle Geräte werden "on Demand"
                                    produziert.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="fh5co-started">
        <div class="overlay"></div>
        <div class="container">
            <div class="row animate-box">
                <div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
                    <h2>Noch Fragen?<br> Stellen Sie sie uns!</h2>
                    <p>Wir sind für Sie da! Für Fragen, Bestellungen oder Anregungen erreichen Sie uns via Mail, Chat
                        und Telefon.</p>
                    <p><a href="kontakt.php" class="btn btn-default btn-lg">Kontaktieren Sie uns!</a></p>
                </div>
            </div>
        </div>
    </div>

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

<!-- Zammad Chat -->
<script src="https://support.teqly.app/assets/chat/chat.min.js"></script>
<script>
    $(function() {
        new ZammadChat({
            title: '<strong>Wir beantworten Ihre Fragen gerne im Chat!</strong>',
            background: '#DD356E',
            fontSize: '12px',
            flat: true,
            chatId: 1
        });
    });
</script>

</body>
</html>
