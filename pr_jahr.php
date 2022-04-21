<!DOCTYPE html>
<html lang="de">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>EASIT - Preisrechner (Jahr)</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description"
          content="Transparenz ist uns wichtig, auch beim Preis! Stellen Sie sich hier im Preisrechner Ihr Wunschsetup zusammen und erhalten gleich eine erste Preisschätzung. In diesem Rechner werden die Preise bei jährlicher Verrechnung angezeigt."/>
    <meta name="keywords"
          content="IT-Partner, Iaas, Hardware mieten, Hardware, Software, mieten, rental, Support, IT-service"/>
    <meta name="author" content="TEQLY GmbH"/>

    <!-- Favicon -->
    <link href="images/teqly_favicon.png" rel="shortcut icon">

    <!-- Google Fonts - Poppins, Karla -->
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Karla:300,400,500,600,700" rel="stylesheet">

    <!-- Font Awesome CSS -->
    <link href="vendor/fontawesome/css/all.min.css" rel="stylesheet">

    <!-- Custom Font Icons -->
    <link href="vendor/icomoon/css/iconfont.min.css" rel="stylesheet">

    <!-- Vendor CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="vendor/animate/css/animate.min.css" rel="stylesheet">
    <link href="vendor/range-slider/css/ion.rangeSlider.css" rel="stylesheet">
    <link href="vendor/magnific-popup/css/magnific-popup.css" rel="stylesheet">
    <link href="vendor/float-labels/css/float-labels.min.css" rel="stylesheet">

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
    <link rel="stylesheet" href="css/style.css">

    <!-- Modernizr JS -->
    <script src="js/modernizr-2.6.2.min.js"></script>
    <!-- FOR IE9 below -->
    <!--[if lt IE 9]>
    <script src="js/respond.min.js"></script>
    <![endif]-->

</head>

<body>

<div id="page" style="background: white !important">
    <?php
    include('shared/navigation.php');
    ?>
    <main>
        <!-- Order  -->
        <div class="order">
            <div class="container">
                <h1 style="text-align: center">Preisrechner</h1>
                <p style="text-align: center">Rechnen Sie hier einfach die Jahres- oder Monatskosten für Ihre
                    IT-Infrastruktur aus. Profitieren
                    auch Sie von moderner, schweizer Hardware und professionellem Support zum
                    Fixpreis. Zögern Sie nicht eine Konfiguration anzufragen. Gerne gehen wir auch auf spezifische
                    Anforderungen ein, senden Sie uns einfach unverbindlich eine Nachricht.</p>
                <div class="row">
                    <div class="col-lg-12" align="center">
                        <a href="pr_monat.php">
                            <button type="button" name="clacChange" id="clacChange"
                                    class="btn-form-func btn-form-func-alt-color">
                                <span class="btn-form-func-content">Monatspreise anzeigen</span>
                                <span class="icon"><i class="fa fa-arrow-right" aria-hidden="true"></i></span>
                            </button>
                        </a>
                    </div>
                </div>
                <!-- Form -->
                <!-- Form -->
                <form method="POST" id="orderForm" name="orderForm" action="php/send_order_2_attached_pdf.php">
                    <div class="row">
                        <div class="col-lg-8" id="mainContent">
                            <!-- Calculator Area -->
                            <div id="desktopGroup" class="row option-box">
                                <div class="option-box-header">
                                    <h3>Desktop's</h3>
                                    <p>
                                        Mit unseren Standard Kondigurationen "Medium" ("M") und "High" ("H") können Sie
                                        die Anforderungen von 90% aller Office Software abdecken. Falls Sie spezielle
                                        Anforderungen (z.B. CAD- oder Grafik-Arbeitsplätze) haben, unterbreiten wir
                                        Ihnen gerne ein passendes Angebot mit entsprechender Hardware.<br>
                                        <a href="hw_desktop.php#fh5co-portfolio" class="option-box-link">Finden Sie hier
                                            heraus
                                            welche Ausführung die Richtige für Sie ist.</a>
                                    </p>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <input type="hidden" id="dmpTitleHidden" name="dmpTitle"
                                           value="Desktop Medium Performance"/>
                                    <input type="hidden" id="dmpPriceHidden" name="dmpPrice" value="0"/>
                                    <input type="checkbox" id="dmp" class="inp-cbx" name="dmp" value="1059.00"/>
                                    <label class="cbx" for="dmp">
											<span>
												<svg width="12px" height="10px" viewbox="0 0 12 10">
													<polyline points="1.5 6 4.5 9 10.5 1"></polyline>
												</svg>
											</span>
                                        <span id="dmpTitle">Desktop <strong>"M"</strong> | 1'059.-</span>
                                    </label>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="row">
                                        <div class="col-8">
                                            <input id="dmpRangeSlider" type="text" value=""/>
                                        </div>
                                        <div class="col-4">
                                            <input id="dmpQty" type="text" class="qty-input form-control"
                                                   name="dmpGroupQty"
                                                   value="0"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <input type="hidden" id="dhpTitleHidden" name="dhpTitle"
                                           value="Desktop High Performance"/>
                                    <input type="hidden" id="dhpPriceHidden" name="dhpPrice" value="0"/>
                                    <input type="checkbox" id="dhp" class="inp-cbx" name="dhp" value="1209.00"/>
                                    <label class="cbx" for="dhp">
											<span>
												<svg width="12px" height="10px" viewbox="0 0 12 10">
													<polyline points="1.5 6 4.5 9 10.5 1"></polyline>
												</svg>
											</span>
                                        <span id="dhpTitle">Desktop <strong>"H"</strong> | 1'209.-</span>
                                    </label>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="row">
                                        <div class="col-8">
                                            <input id="dhpRangeSlider" type="text" value=""/>
                                        </div>
                                        <div class="col-4">
                                            <input id="dhpQty" type="text" class="qty-input form-control"
                                                   name="dhpGroupQty"
                                                   value="0"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="laptopGroup" class="row option-box">
                                <div class="option-box-header">
                                    <h3>Laptops's</h3>
                                    <p>
                                        Mit unseren Standard Laptopkonfigurationen "Medium" ("M"), "Medium Touch" ("MT") und "High" ("H")
                                        können Sie die Anforderungen von 90% aller Office Software abdecken. Falls Sie
                                        spezielle Anforderungen (z.B. CAD- oder Grafik-Arbeitsplätze) haben,
                                        unterbreiten wir Ihnen gerne ein passendes Angebot mit entsprechender
                                        Hardware.<br>
                                        Optional bieten wir Ihnen noch das Peripherie Paket an, damit Sie mit Ihrem
                                        Laptop noch produktiver sein können. Pro gebuchtes Peripherie Paket erhalten
                                        Sie: Eine Docking Station für den Laptop, einen zusätzlichen Bildschirm und ein
                                        kabelloses Maus & Tastatur-Set.<br>
                                        <a href="hw_laptop.php#fh5co-portfolio" class="option-box-link">Finden Sie hier
                                            heraus
                                            welche Ausführung die Richtige für Sie ist.</a>
                                    </p>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <input type="hidden" id="lmpTitleHidden" name="lmpTitle"
                                           value="Laptop Medium Performance"/>
                                    <input type="hidden" id="lmpPriceHidden" name="lmpPrice" value="0"/>
                                    <input type="checkbox" id="lmp" class="inp-cbx" name="lmp" value="729.00"/>
                                    <label class="cbx" for="lmp">
											<span>
												<svg width="12px" height="10px" viewbox="0 0 12 10">
													<polyline points="1.5 6 4.5 9 10.5 1"></polyline>
												</svg>
											</span>
                                        <span id="lmpTitle">Laptop <strong>"M"</strong> | 729.-</span>
                                    </label>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="row">
                                        <div class="col-8">
                                            <input id="lmpRangeSlider" type="text" value=""/>
                                        </div>
                                        <div class="col-4">
                                            <input id="lmpQty" type="text" class="qty-input form-control"
                                                   name="lmpGroupQty"
                                                   value="0"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <input type="hidden" id="lmtTitleHidden" name="lmtTitle"
                                           value="Laptop Medium Performance Touch"/>
                                    <input type="hidden" id="lmtPriceHidden" name="lmtPrice" value="0"/>
                                    <input type="checkbox" id="lmt" class="inp-cbx" name="lmt" value="989.00"/>
                                    <label class="cbx" for="lmt">
											<span>
												<svg width="12px" height="10px" viewbox="0 0 12 10">
													<polyline points="1.5 6 4.5 9 10.5 1"></polyline>
												</svg>
											</span>
                                        <span id="lmtTitle">Laptop <strong>"MT"</strong> | 989.-</span>
                                    </label>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="row">
                                        <div class="col-8">
                                            <input id="lmtRangeSlider" type="text" value=""/>
                                        </div>
                                        <div class="col-4">
                                            <input id="lmtQty" type="text" class="qty-input form-control"
                                                   name="lmtGroupQty"
                                                   value="0"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <input type="hidden" id="lhpTitleHidden" name="lhpTitle"
                                           value="Laptop High Performance"/>
                                    <input type="hidden" id="lhpPriceHidden" name="lhpPrice" value="0"/>
                                    <input type="checkbox" id="lhp" class="inp-cbx" name="lhp" value="1489.00"/>
                                    <label class="cbx" for="lhp">
											<span>
												<svg width="12px" height="10px" viewbox="0 0 12 10">
													<polyline points="1.5 6 4.5 9 10.5 1"></polyline>
												</svg>
											</span>
                                        <span id="lhpTitle">Laptop <strong>"H"</strong> | 1'489.-</span>
                                    </label>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="row">
                                        <div class="col-8">
                                            <input id="lhpRangeSlider" type="text" value=""/>
                                        </div>
                                        <div class="col-4">
                                            <input id="lhpQty" type="text" class="qty-input form-control"
                                                   name="lhpGroupQty"
                                                   value="0"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <input type="hidden" id="lppTitleHidden" name="lppTitle"
                                           value="Laptop Peripherie Paket"/>
                                    <input type="hidden" id="lppPriceHidden" name="lppPrice" value="0"/>
                                    <input type="checkbox" id="lpp" class="inp-cbx" name="lpp" value="349.00"/>
                                    <label class="cbx" for="lpp">
											<span>
												<svg width="12px" height="10px" viewbox="0 0 12 10">
													<polyline points="1.5 6 4.5 9 10.5 1"></polyline>
												</svg>
											</span>
                                        <span id="lppTitle"><strong>Peripherie Paket</strong>  | 349.-</span>
                                    </label>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="row">
                                        <div class="col-8">
                                            <input id="lppRangeSlider" type="text" value=""/>
                                        </div>
                                        <div class="col-4">
                                            <input id="lppQty" type="text" class="qty-input form-control"
                                                   name="lppGroupQty"
                                                   value="0"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="serverGroup" class="row option-box">
                                <div class="option-box-header">
                                    <h3>Server</h3>
                                    <p>
                                        Mit unseren Standard Serverkonfigurationen "Medium" ("M") und
                                        "High" ("H") können Sie die Anforderungen von 90% aller KMU
                                        abdecken. Falls Sie spezielle Anforderungen haben, unterbreiten wir Ihnen gerne ein passendes
                                        Angebot mit entsprechender Hardware.<br>
                                        <a href="hw_server.php#fh5co-portfolio" class="option-box-link">Finden Sie hier
                                            heraus
                                            welche Ausführung die Richtige für Sie ist.</a>
                                    </p>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <input type="hidden" id="smpTitleHidden" name="smpTitle"
                                           value="Server Medium Performance"/>
                                    <input type="hidden" id="smpPriceHidden" name="smpPrice" value="0"/>
                                    <input type="checkbox" id="smp" class="inp-cbx" name="smp" value="2889.00"/>
                                    <label class="cbx" for="smp">
											<span>
												<svg width="12px" height="10px" viewbox="0 0 12 10">
													<polyline points="1.5 6 4.5 9 10.5 1"></polyline>
												</svg>
											</span>
                                        <span id="smpTitle">Server <strong>"M"</strong> | 2'889.-</span>
                                    </label>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="row">
                                        <div class="col-8">
                                            <input id="smpRangeSlider" type="text" value=""/>
                                        </div>
                                        <div class="col-4">
                                            <input id="smpQty" type="text" class="qty-input form-control"
                                                   name="smpGroupQty"
                                                   value="0"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <input type="hidden" id="shpTitleHidden" name="shpTitle"
                                           value="Server High Performance"/>
                                    <input type="hidden" id="shpPriceHidden" name="shpPrice" value="0"/>
                                    <input type="checkbox" id="shp" class="inp-cbx" name="shp" value="3559.00"/>
                                    <label class="cbx" for="shp">
											<span>
												<svg width="12px" height="10px" viewbox="0 0 12 10">
													<polyline points="1.5 6 4.5 9 10.5 1"></polyline>
												</svg>
											</span>
                                        <span id="shpTitle">Server <strong>"H"</strong> | 3'559.-</span>
                                    </label>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="row">
                                        <div class="col-8">
                                            <input id="shpRangeSlider" type="text" value=""/>
                                        </div>
                                        <div class="col-4">
                                            <input id="shpQty" type="text" class="qty-input form-control"
                                                   name="shpGroupQty"
                                                   value="0"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tabletGroup" class="row option-box">
                                <div class="option-box-header">
                                    <h3>Tablets</h3>
                                    <p>
                                        Mit unseren Standard Tabletkonfigurationen "Tablet ohne 4G" und
                                        "Tablet mit 4G" haben Sie Ihr mobiles Büro immer dabei. Falls Sie spezielle Anforderungen haben, unterbreiten wir Ihnen gerne ein passendes
                                        Angebot mit entsprechender Hardware.<br>
                                        <a href="hw_tablet.php#fh5co-portfolio" class="option-box-link">Finden Sie hier
                                            heraus
                                            welche Ausführung die Richtige für Sie ist.</a>
                                    </p>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <input type="hidden" id="tcsTitleHidden" name="tncTitle"
                                           value="Tablet ohne 4G"/>
                                    <input type="hidden" id="tncPriceHidden" name="tncPrice" value="0"/>
                                    <input type="checkbox" id="tnc" class="inp-cbx" name="tnc" value="799.00"/>
                                    <label class="cbx" for="tnc">
											<span>
												<svg width="12px" height="10px" viewbox="0 0 12 10">
													<polyline points="1.5 6 4.5 9 10.5 1"></polyline>
												</svg>
											</span>
                                        <span id="tncTitle">Tablet <strong>ohne 4G</strong> | 799.-</span>
                                    </label>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="row">
                                        <div class="col-8">
                                            <input id="tncRangeSlider" type="text" value=""/>
                                        </div>
                                        <div class="col-4">
                                            <input id="tncQty" type="text" class="qty-input form-control"
                                                   name="tncGroupQty"
                                                   value="0"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <input type="hidden" id="twcTitleHidden" name="twcTitle"
                                           value="Tablet mit 4G"/>
                                    <input type="hidden" id="twcPriceHidden" name="twcPrice" value="0"/>
                                    <input type="checkbox" id="twc" class="inp-cbx" name="twc" value="1159.00"/>
                                    <label class="cbx" for="twc">
											<span>
												<svg width="12px" height="10px" viewbox="0 0 12 10">
													<polyline points="1.5 6 4.5 9 10.5 1"></polyline>
												</svg>
											</span>
                                        <span id="twcTitle">Tablet <strong>mit 4G</strong> | 1'159.-</span>
                                    </label>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="row">
                                        <div class="col-8">
                                            <input id="twcRangeSlider" type="text" value=""/>
                                        </div>
                                        <div class="col-4">
                                            <input id="twcQty" type="text" class="qty-input form-control"
                                                   name="twcGroupQty"
                                                   value="0"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="microsoftGroup" class="row option-box">
                                <div class="option-box-header">
                                    <h3>Microsoft</h3>
                                    <p>
                                        Alle unsere Geräte werde mit einer vorinstallierten Version von Office 2019
                                        ausgeliefert, die Sie ohne Aufpreis nutzen können. Falls Sie die Cloud Dienste
                                        von Microsoft wie zum Beispiel OneDrive, MS Teams, SharePoint oder Exchange
                                        nutzen möchten bieten wir Ihnen hier die entsprechenden Lizenzen an. Als
                                        Microsoft Partner können wir Ihnen auf Wunsch die Cloud Produkte des Windows
                                        Konzerns direkt auf der von uns gemieteten Hardware installieren und einrichten.<br>
                                        Die Preise verstehen sich pro Account/User, also Sie benötigen pro Person eine
                                        Lizenz.<br>
                                        <a href="sw_microsoft.php#fh5co-portfolio" class="option-box-link">Erfahren Sie
                                            hier was alles mit Microsoft365 möglich ist.</a>
                                    </p>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <input type="hidden" id="mbaTitleHidden" name="mbaTitle"
                                           value="Microsoft365 Business Apps"/>
                                    <input type="hidden" id="mbaPriceHidden" name="mbaPrice" value="0"/>
                                    <input type="checkbox" id="mba" class="inp-cbx" name="mba" value="14.00"/>
                                    <label class="cbx" for="mba">
											<span>
												<svg width="12px" height="10px" viewbox="0 0 12 10">
													<polyline points="1.5 6 4.5 9 10.5 1"></polyline>
												</svg>
											</span>
                                        <span id="mbaTitle">MS365 <strong>"Apps"</strong> | 14.-</span>
                                    </label>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="row">
                                        <div class="col-8">
                                            <input id="mbaRangeSlider" type="text" value=""/>
                                        </div>
                                        <div class="col-4">
                                            <input id="mbaQty" type="text" class="qty-input form-control"
                                                   name="mbaGroupQty"
                                                   value="0"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <input type="hidden" id="mbsTitleHidden" name="mbsTitle"
                                           value="Microsoft365 Business Standard"/>
                                    <input type="hidden" id="mbsPriceHidden" name="mbsPrice" value="0"/>
                                    <input type="checkbox" id="mbs" class="inp-cbx" name="mbs" value="16.00"/>
                                    <label class="cbx" for="mbs">
											<span>
												<svg width="12px" height="10px" viewbox="0 0 12 10">
													<polyline points="1.5 6 4.5 9 10.5 1"></polyline>
												</svg>
											</span>
                                        <span id="mbsTitle">MS365 <strong>"Standard"</strong> | 16.-</span>
                                    </label>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="row">
                                        <div class="col-8">
                                            <input id="mbsRangeSlider" type="text" value=""/>
                                        </div>
                                        <div class="col-4">
                                            <input id="mbsQty" type="text" class="qty-input form-control"
                                                   name="mbsGroupQty"
                                                   value="0"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <input type="hidden" id="mbpTitleHidden" name="mbpTitle"
                                           value="Microsoft365 Business Premium"/>
                                    <input type="hidden" id="mbpPriceHidden" name="mbpPrice" value="0"/>
                                    <input type="checkbox" id="mbp" class="inp-cbx" name="mbp" value="25.00"/>
                                    <label class="cbx" for="mbp">
											<span>
												<svg width="12px" height="10px" viewbox="0 0 12 10">
													<polyline points="1.5 6 4.5 9 10.5 1"></polyline>
												</svg>
											</span>
                                        <span id="mbpTitle">MS365 <strong>"Premium"</strong> | 25.-</span>
                                    </label>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="row">
                                        <div class="col-8">
                                            <input id="mbpRangeSlider" type="text" value=""/>
                                        </div>
                                        <div class="col-4">
                                            <input id="mbpQty" type="text" class="qty-input form-control"
                                                   name="mbpGroupQty"
                                                   value="0"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="addonsGroup" class="row option-box">
                                <div class="option-box-header">
                                    <h3>Setup- & Zusatzkosten</h3>
                                    <p>
                                        Beim erstmaligen erstellen Ihrer Konfiguration verrechnen wir Ihnen eine
                                        Setupgebühr. Diese ist abhängig von Ihren individuellen Software Wünschen und
                                        der komplexität des Setups. Die Höhe dieser Gebühren können wir Ihnen nach der
                                        ersten Besprechung nennen. Gerne können Sie uns auch schon vorab mit uns Kontakt
                                        aufnehmen und die Setupkosten abklären.<br>
                                        Falls Sie spezielle Anforderungen an die Konfiguration haben oder Spezielle
                                        Hardware wünschen, unterbreiten wir Ihnen gerne ein passendes Angebot. Zögern
                                        Sie nicht uns zu kontaktieren.
                                    </p>
                                </div>
                            </div>
                            <!-- Calculator Area End -->
                            <!-- Personal Details -->
                            <div id="personalDetails" class="row contact-box">
                                <div class="contact-box-header">
                                    <h3>Kontaktdaten</h3>
                                    <p>Sie sind nur noch wenige Klicks von Ihrem Persönlichen Angebot entfernt.
                                        Übermitteln Sie uns Ihre Kontaktdaten und wir werden uns so schnell wie möglich
                                        bei Ihnen melden und Ihnen ein Angebot unterbreiten.</p>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <label for="userName">Vor- & Nachname</label>
                                        <input id="userName" class="form-control" name="username" type="text" required/>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <label for="email">E-Mail</label>
                                        <input id="email" class="form-control" name="email" type="email" required/>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <label for="phone">Telefon</label>
                                        <input id="phone" class="form-control" name="phone" type="text" required/>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <label for="address">Firma</label>
                                        <input id="address" class="form-control" name="address" type="text"/>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="inputMessage">Bemerkungen</label>
                                        <textarea class="form-control" id="inputMessage" name="message"></textarea>
                                    </div>
                                </div>
                            </div>
                            <!-- Personal Details End -->
                        </div>
                        <div class="col-lg-4" id="sidebar">
                            <!-- Order Container -->
                            <div id="orderContainer" class="theiaStickySidebar">
                                <div class="row">
                                    <div class="col-md-12">
                                        <input type="hidden" id="dmpSum" name="dmpSumHidden" value="0"/>
                                        <input type="hidden" id="dhpSum" name="dmpSumHidden" value="0"/>
                                        <input type="hidden" id="lmpSum" name="lmpSumHidden" value="0"/>
                                        <input type="hidden" id="lmtSum" name="lmtSumHidden" value="0"/>
                                        <input type="hidden" id="lhpSum" name="lhpSumHidden" value="0"/>
                                        <input type="hidden" id="lppSum" name="lppSumHidden" value="0"/>
                                        <input type="hidden" id="smpSum" name="smpSumHidden" value="0"/>
                                        <input type="hidden" id="shpSum" name="shpSumHidden" value="0"/>
                                        <input type="hidden" id="tncSum" name="tncSumHidden" value="0"/>
                                        <input type="hidden" id="twcSum" name="twcSumHidden" value="0"/>
                                        <input type="hidden" id="mbaSum" name="mbaSumHidden" value="0"/>
                                        <input type="hidden" id="mbsSum" name="mbsSumHidden" value="0"/>
                                        <input type="hidden" id="mbpSum" name="mbpSumHidden" value="0"/>

                                        <h3>Kostenschätzung:</h3>
                                        <ul id="orderSumList">
                                            <li id="dmpSumTot"></li>
                                            <li id="dhpSumTot"></li>
                                            <li id="lmpSumTot"></li>
                                            <li id="lmtSumTot"></li>
                                            <li id="lhpSumTot"></li>
                                            <li id="lppSumTot"></li>
                                            <li id="smpSumTot"></li>
                                            <li id="shpSumTot"></li>
                                            <li id="tncSumTot"></li>
                                            <li id="twcSumTot"></li>
                                            <li id="mbaSumTot"></li>
                                            <li id="mbsSumTot"></li>
                                            <li id="mbpSumTot"></li>

                                        </ul>
                                        <div class="row total-container">
                                            <div class="col-6 p-0">
                                                <input type="text" id="totalTitle" class="summaryInput1"
                                                       name="totallabel" value="" disabled/>
                                            </div>
                                            <div class="col-6 p-0">
                                                <input type="text" id="total" class="summaryInput" name="total"
                                                       value="0" data-parsley-errors-container="#totalError"
                                                       data-parsley-empty-order=""
                                                       disabled/>
                                            </div>
                                        </div>
                                        <div id="totalError"></div>
                                    </div>
                                </div>
                                <div class="row footer">
                                    <div class="col-lg-12 text-center">
                                        <small>Alle Preise unverbindlich & inkl. 7.7% MwSt.</small>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <input type="checkbox" id="cbx" class="inp-cbx" name="terms" value="yes"
                                                   required/>
                                            <label class="cbx terms" for="cbx">
													<span>
														<svg width="12px" height="10px" viewbox="0 0 12 10">
															<polyline points="1.5 6 4.5 9 10.5 1"></polyline>
														</svg>
													</span>
                                                <span><a href="https://teqly.ch/legal.html#datenschutz"
                                                         class="terms-link" target="_blank">Datenschutzerklärung</a> akzeptieren.</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <button type="submit" name="submit" class="btn-form-func">
                                            <span class="btn-form-func-content">GRATIS Testmonat anfragen</span>
                                            <span class="icon"><i class="fa fa-check" aria-hidden="true"></i></span>
                                        </button>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <button type="submit" name="submit" class="btn-form-func">
                                            <span class="btn-form-func-content">Anfrage senden</span>
                                            <span class="icon"><i class="fa fa-check" aria-hidden="true"></i></span>
                                        </button>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <button type="button" name="reset" id="resetBtn"
                                                class="btn-form-func btn-form-func-alt-color">
                                            <span class="btn-form-func-content">Auswahl zurücksetzen</span>
                                            <span class="icon"><i class="fa fa-times" aria-hidden="true"></i></span>
                                        </button>
                                    </div>
                                </div>
                                <div class="row footer">
                                    <div class="col-lg-12 text-center">
                                        <small>&copy; <?= date("Y"); ?> by TEQLY GmbH</small>
                                    </div>
                                </div>
                            </div>
                            <!-- Order Container End -->
                        </div>
                    </div>
                </form>
                <!-- Form End -->
            </div>
        </div>
        <!-- Order End -->
    </main>
    <!-- Main End -->

    <?php
    include('shared/calltoaction.php');
    include('shared/footer.php');
    ?>
</div>
<!-- Page End -->

<!-- Back to top button -->
<div class="gototop js-top">
    <a href="#" class="js-gotop"><i class="icon-arrow-up22"></i></a>
</div>
<!-- jQuery -->
<!-- jQuery Easing -->
<!-- Vendor Javascript Files -->
<script src="vendor/jquery/jquery.min.js"></script>
<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
<script src="vendor/easing/js/easing.min.js"></script>
<script src="vendor/parsley/js/parsley.min.js"></script>
<script src="vendor/nice-select/js/jquery.nice-select.min.js"></script>
<script src="vendor/range-slider/js/ion.rangeSlider.min.js"></script>
<script src="vendor/price-format/js/jquery.priceformat.min.js"></script>
<script src="vendor/theia-sticky-sidebar/js/ResizeSensor.min.js"></script>
<script src="vendor/theia-sticky-sidebar/js/theia-sticky-sidebar.min.js"></script>
<script src="vendor/magnific-popup/js/jquery.magnific-popup.min.js"></script>
<script src="vendor/float-labels/js/float-labels.min.js"></script>

<!-- jQuery Easing -->
<script src="js/jquery.easing.1.3.js"></script>
<!-- Bootstrap -->
<script src="js/bootstrap.min.js"></script>
<!-- Waypoints -->
<script src="js/jquery.waypoints.min.js"></script>
<!-- Flexslider -->
<script src="js/jquery.flexslider-min.js"></script>
<!-- Main -->

<!-- Main Javascript File -->
<script src="js/scripts-2.js"></script>
<script src="js/main.js"></script>

<?php
include('shared/zammadchat.php')
?>


</body>

</html>
