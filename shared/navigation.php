<?php $uri = $_SERVER['REQUEST_URI']; ?>
<nav id="menu" class="fh5co-nav" role="navigation">
    <div class="top-menu">
        <div class="container">
            <div class="row">
                <IMG SRC="../images/teqly_rental_logo.png" ALT="TEQLY | Rental Logo" HEIGHT=50 align="left">
                <div class="col-xs-10 text-right menu-1">
                    <ul style="font-family: 'Inconsolata' !important;">
                        <li style="margin: -10px" class="<?php $r = ($uri == "/") ? 'active' : '';
                        echo $r ?>"><a href="../">Start</a></li>
                        <li style="margin: -10px" class="<?php $r = ($uri == "/vorteile.php") ? 'active' : '';
                        echo $r ?>"><a href="../vorteile.php">Vorteile</a></li>
                        <li style="margin: -10px"
                            class="has-dropdown <?php $r = ($uri == "/hardware.php" || $uri == "/hw_desktop.php" || $uri == "/hw_laptop.php" || $uri == "/hw_server.php") ? 'active' : '';
                            echo $r ?>">
                            <a href="../hardware.php">Hardware</a>
                            <ul class="dropdown">
                                <li><a href="../hw_desktop.php">Desktop's</a></li>
                                <li><a href="../hw_laptop.php">Laptops's</a></li>
                                <li><a href="../hw_server.php">Server</a></li>
                            </ul>
                        </li>
                        <li style="margin: -10px !important;"
                            class="has-dropdown <?php $r = ($uri == "/software.php" || $uri == "/sw_teqlycloud.php" || $uri == "/sw_microsoft.php") ? 'active' : '';
                            echo $r ?>">
                            <a href="../software.php">Software</a>
                            <ul class="dropdown">
                                <li><a href="../sw_teqlycloud.php">TEQLY|Cloud</a></li>
                                <li><a href="../sw_microsoft.php">Microsoft365</a></li>
                            </ul>
                        </li>
                        <li style="margin: -10px !important;"
                            class="has-dropdown <?php $r = ($uri == "/swissmade.php" || $uri == "/swiss_teqly.php" || $uri == "/swiss_axxiv.php" || $uri == "/swiss_primecomputer.php") ? 'active' : '';
                            echo $r ?>">
                            <a href="../swissmade.php">Swiss Made</a>
                            <ul class="dropdown">
                                <li><a href="../swiss_teqly.php">TEQLY</a></li>
                                <li><a href="../swiss_primecomputer.php">Prime Computer</a></li>
                                <li><a href="../swiss_axxiv.php">axxiv</a></li>
                            </ul>
                        </li>
                        <li style="margin: -10px !important;"
                            class="<?php $r = ($uri == "/kontakt.php") ? 'active' : '';
                            echo $r ?>"><a href="../kontakt.php">Kontakt</a></li>
                        <li class="btn-cta"><a href="../pr_jahr.php"><span>Preisrechner</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</nav>
