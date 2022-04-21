<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Vielen Dank für Ihre Anfrage!">
    <meta name="author" content="UWS">
    <title>TEQLY | Rental - Preisrechner (Jahr)</title>

    <!-- Favicon -->
    <link href="../images/teqly_favicon.png" rel="shortcut icon">

    <!-- Google Fonts - Poppins, Karla -->
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Karla:300,400,500,600,700" rel="stylesheet">

    <!-- Font Awesome CSS -->
    <link href="../vendor/fontawesome/css/all.min.css" rel="stylesheet">

    <!-- Custom Font Icons -->
    <link href="../vendor/icomoon/css/iconfont.min.css" rel="stylesheet">

    <!-- Vendor CSS -->
    <link href="../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="../vendor/animate/css/animate.min.css" rel="stylesheet">
    <link href="../vendor/dmenu/css/menu.css" rel="stylesheet">
    <link href="../vendor/hamburgers/css/hamburgers.min.css" rel="stylesheet">
    <link href="../vendor/mmenu/css/mmenu.min.css" rel="stylesheet">
    <link href="../vendor/range-slider/css/ion.rangeSlider.css" rel="stylesheet">
    <link href="../vendor/magnific-popup/css/magnific-popup.css" rel="stylesheet">
    <link href="../vendor/float-labels/css/float-labels.min.css" rel="stylesheet">

    <!-- Main CSS -->
    <link href="../css/style.css" rel="stylesheet">

</head>

<body onLoad="setTimeout('delayedRedirect()', 5000)">

<?php

/* Setup PHPMailer
==================================== */

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);

/* Setup
==================================== */

require 'phpinvoice/phpinvoice.php';

$order = new phpinvoice('purple', 'A4', 'CHF'); // Put '&euro;' or 'CHF' etc. instead of '$'

$timestamp = time();
$default_option = 'Select';
$errors = '';

// Setup Seller Details
$seller_name = 'EASIT.rent';
$seller_address = 'c/o TEQLY GmbH' . '<br/>' . 'TECHNOPARK Aargau' . '<br/>' . 'Badenerstrasse 13' . '<br/>' . '5200 Brugg';
$seller_notice = 'Alle Preise unverbindlich, inkl. MwSt. & exkl. Setup-/Konfigurations-/Zusatzkosten';

/* Validate User Inputs
==================================== */

// Name
if ($_POST['username'] != '') {

    // Sanitizing
    $_POST['username'] = filter_var($_POST['username'], FILTER_SANITIZE_STRING);

    if ($_POST['username'] == '') {
        $errors .= 'Geben Sie bitte einen Namen an.<br/>';
    }
} else {
    // Required to fill
    $errors .= 'Geben Sie bitte einen Namen an.<br/>';
}

// Email
if ($_POST['email'] != '') {

    // Sanitizing
    $_POST['email'] = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

    // After sanitization validation is performed
    $_POST['email'] = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);

    if ($_POST['email'] == '') {
        $errors .= 'Geben Sie bitte eine gültige E-Mail Adresse ein.<br/>';
    }
} else {
    // Required to fill
    $errors .= 'Geben Sie bitte eine E-Mail Adresse ein.<br/>';
}

// Phone
if ($_POST['phone'] != '') {

    // Sanitizing
    $_POST['phone'] = filter_var($_POST['phone'], FILTER_SANITIZE_STRING);

    // After sanitization validation is performed
    $pattern_phone = array('options' => array('regexp' => '/^\+{41}[0-9]+$/'));
    $_POST['phone'] = filter_var($_POST['phone'], FILTER_SANITIZE_STRING);

    if ($_POST['phone'] == '') {
        $errors .= 'Geben Sie bitte eine gültige Telefonnummer im Format +41 12 345 67 89 ein.<br/>';
    }
}

// Address
if ($_POST['address'] != '') {

    // Sanitizing
    $_POST['address'] = filter_var($_POST['address'], FILTER_SANITIZE_STRING);

    if ($_POST['address'] == '') {
        $errors .= 'Bitte geben Sie eine gültige Adresse ein.<br/>';
    }
}

// Message
if ($_POST['message'] != '') {

    // Sanitizing
    $_POST['message'] = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

    if ($_POST['message'] == '') {
        $errors .= 'Schreiben Sie bitte ein gültige Nachricht.<br/>';
    }
}

/* Validate Hidden Inputs
==================================== */

function sanitizePostTitle($postName, $invalidMessage)
{

    if ($_POST[$postName] != '') {

        // Sanitizing
        $_POST[$postName] = filter_var($_POST[$postName], FILTER_SANITIZE_STRING);

        if ($_POST[$postName] == '') {
            return $invalidMessage . '<br/>';
        }

    }
    return '';
}

function validatePostValue($postValue, $invalidMessage)
{

    if ($_POST[$postValue] != '') {

        // Sanitizing
        $_POST[$postValue] = filter_var($_POST[$postValue], FILTER_SANITIZE_STRING);

        // After sanitization validation is performed
        if ($_POST[$postValue] != '0') {
            $_POST[$postValue] = filter_var($_POST[$postValue], FILTER_VALIDATE_FLOAT);
        }

        if ($_POST[$postValue] == '') {
            return $invalidMessage . '<br/>';
        }

    }
    return '';
}

function validatePostTotal($postValue, $invalidMessage)
{

    if ($_POST[$postValue] != '') {

        if (!filter_var($_POST[$postValue], FILTER_VALIDATE_FLOAT)) {
            return $invalidMessage . '<br/>';
        }

    }
    return '';
}

// DMP
$errors .= sanitizePostTitle('dmpTitle', 'Fehler beim Namen! (DMP)');
$errors .= validatePostValue('dmpPrice', 'Fehler beim Preis! (DMP)');
$errors .= validatePostValue('dmpGroupQty', 'Fehler bei der Anzahl! (DMP)');

// DHP
$errors .= sanitizePostTitle('dhpTitle', 'Fehler beim Namen! (DHP)');
$errors .= validatePostValue('dhpPrice', 'Fehler beim Preis! (DHP)');
$errors .= validatePostValue('dhpGroupQty', 'Fehler bei der Anzahl! (DHP)');

// LMP
$errors .= sanitizePostTitle('lmpTitle', 'Fehler beim Namen! (LMP)');
$errors .= validatePostValue('lmpPrice', 'Fehler beim Preis! (LMP)');
$errors .= validatePostValue('lmpGroupQty', 'Fehler bei der Anzahl! (LMP)');

// LMT
$errors .= sanitizePostTitle('lmtTitle', 'Fehler beim Namen! (LMT)');
$errors .= validatePostValue('lmtPrice', 'Fehler beim Preis! (LMT)');
$errors .= validatePostValue('lmtGroupQty', 'Fehler bei der Anzahl! (LMT)');

// LHP
$errors .= sanitizePostTitle('lhpTitle', 'Fehler beim Namen! (LHP)');
$errors .= validatePostValue('lhpPrice', 'Fehler beim Preis! (LHP)');
$errors .= validatePostValue('lhpGroupQty', 'Fehler bei der Anzahl! (LHP)');

// LPP
$errors .= sanitizePostTitle('lppTitle', 'Fehler beim Namen! (LPP)');
$errors .= validatePostValue('lppPrice', 'Fehler beim Preis! (LPP)');
$errors .= validatePostValue('lppGroupQty', 'Fehler bei der Anzahl! (LPP)');

// SMP
$errors .= sanitizePostTitle('smpTitle', 'Fehler beim Namen! (SMP)');
$errors .= validatePostValue('smpPrice', 'Fehler beim Preis! (SMP)');
$errors .= validatePostValue('smpGroupQty', 'Fehler bei der Anzahl! (SMP)');

// SHP
$errors .= sanitizePostTitle('shpTitle', 'Fehler beim Namen! (SHP)');
$errors .= validatePostValue('shpPrice', 'Fehler beim Preis! (SHP)');
$errors .= validatePostValue('shpGroupQty', 'Fehler bei der Anzahl! (SHP)');

// TNoC
$errors .= sanitizePostTitle('tnocTitle', 'Fehler beim Namen! (TNOC)');
$errors .= validatePostValue('tnocPrice', 'Fehler beim Preis! (TNOC)');
$errors .= validatePostValue('tnocGroupQty', 'Fehler bei der Anzahl! (TNOC)');

// TWC
$errors .= sanitizePostTitle('twcTitle', 'Fehler beim Namen! (TWC)');
$errors .= validatePostValue('twcPrice', 'Fehler beim Preis! (TWC)');
$errors .= validatePostValue('twcGroupQty', 'Fehler bei der Anzahl! (TWC)');

// MBA
$errors .= sanitizePostTitle('mbaTitle', 'Fehler beim Namen! (MBA)');
$errors .= validatePostValue('mbaPrice', 'Fehler beim Preis! (MBA)');
$errors .= validatePostValue('mbaGroupQty', 'Fehler bei der Anzahl! (MBA)');

// MBS
$errors .= sanitizePostTitle('mbsTitle', 'Fehler beim Namen! (MBS)');
$errors .= validatePostValue('mbsPrice', 'Fehler beim Preis! (MBS)');
$errors .= validatePostValue('mbsGroupQty', 'Fehler bei der Anzahl! (MBS)');

// MBP
$errors .= sanitizePostTitle('mbpTitle', 'Fehler beim Namen! (MBP)');
$errors .= validatePostValue('mbpPrice', 'Fehler beim Preis! (MBP)');
$errors .= validatePostValue('mpbGroupQty', 'Fehler bei der Anzahl! (MBP)');


// Continue if NO errors found after validation
if (!$errors) {

    // Customer Details
    $customer_name = $_POST['username'];
    $customer_mail = $_POST['email'];
    $customer_phone = $_POST['phone'];
    $customer_address = $_POST['address'];
    $customer_message = $_POST['message'];

    // Handle empty customer inputs
    if (empty($customer_phone)) {
        $customer_phone = 'Telefonnummer n.v.';
    }
    if (empty($customer_address)) {
        $customer_address = 'Firma n.v.';
    }
    if (empty($customer_message)) {
        $customer_message = 'Es wurden keine Bemerkungen hinterlasssen.';
    }

    // DMP
    $selected_dmp = $_POST['dmp'];
    $selected_dmp_title = $_POST['dmpTitle'];
    $selected_dmp_price = $_POST['dmpPrice'];
    $dmp_qty = $_POST['dmpGroupQty'];

    // DHP
    $selected_dhp = $_POST['dhp'];
    $selected_dhp_title = $_POST['dhpTitle'];
    $selected_dhp_price = $_POST['dhpPrice'];
    $dhp_qty = $_POST['dhpGroupQty'];

    // LMP
    $selected_lmp = $_POST['lmp'];
    $selected_lmp_title = $_POST['lmpTitle'];
    $selected_lmp_price = $_POST['lmpPrice'];
    $lmp_qty = $_POST['lmpGroupQty'];

    // LMT
    $selected_lmt = $_POST['lmt'];
    $selected_lmt_title = $_POST['lmtTitle'];
    $selected_lmt_price = $_POST['lmtPrice'];
    $lmt_qty = $_POST['lmtGroupQty'];

    // LHP
    $selected_lhp = $_POST['lhp'];
    $selected_lhp_title = $_POST['lhpTitle'];
    $selected_lhp_price = $_POST['lhpPrice'];
    $lhp_qty = $_POST['lhpGroupQty'];

    // LPP
    $selected_lpp = $_POST['lpp'];
    $selected_lpp_title = $_POST['lppTitle'];
    $selected_lpp_price = $_POST['lppPrice'];
    $lpp_qty = $_POST['lppGroupQty'];

    // SMP
    $selected_smp = $_POST['smp'];
    $selected_smp_title = $_POST['smpTitle'];
    $selected_smp_price = $_POST['smpPrice'];
    $smp_qty = $_POST['smpGroupQty'];

    // SHP
    $selected_shp = $_POST['shp'];
    $selected_shp_title = $_POST['shpTitle'];
    $selected_shp_price = $_POST['shpPrice'];
    $shp_qty = $_POST['shpGroupQty'];

    // TNOC
    $selected_tnoc = $_POST['tnoc'];
    $selected_tnoc_title = $_POST['tnocTitle'];
    $selected_tnoc_price = $_POST['tnocPrice'];
    $tnoc_qty = $_POST['tnocGroupQty'];

    // TWC
    $selected_twc = $_POST['twc'];
    $selected_twc_title = $_POST['twcTitle'];
    $selected_twc_price = $_POST['twcPrice'];
    $twc_qty = $_POST['twcGroupQty'];

    // MBA
    $selected_mba = $_POST['mba'];
    $selected_mba_title = $_POST['mbaTitle'];
    $selected_mba_price = $_POST['mbaPrice'];
    $mba_qty = $_POST['mbaGroupQty'];

    // MBS
    $selected_mbs = $_POST['mbs'];
    $selected_mbs_title = $_POST['mbsTitle'];
    $selected_mbs_price = $_POST['mbsPrice'];
    $mbs_qty = $_POST['mbsGroupQty'];

    // MBP
    $selected_mbp = $_POST['mbp'];
    $selected_mbp_title = $_POST['mbpTitle'];
    $selected_mbp_price = $_POST['mbpPrice'];
    $mbp_qty = $_POST['mbpGroupQty'];

    /* Order Generation
    ==================================== */

    // Header Settings
    $order->setLogo('phpinvoice/templates/purple/easit_logo.png');
    $order->setReference('ANFRAGE-' . $timestamp);
    $order->setDate(date('d, M, Y', time()));

    $order->setFrom(array($seller_name, $seller_address));
    $order->setTo(array($customer_name, $customer_address));

    // Adding Items (name, description, amount, vat, price, discount) only if selected
    if (isset($selected_dmp)) {
        $order->addItem($selected_dmp_title, 'Desktop Medium Performance', $dmp_qty, "7.7%", $selected_dmp_price, false);
    }
    if (isset($selected_dhp)) {
        $order->addItem($selected_dhp_title, 'Desktop High Performance', $dhp_qty, "7.7%", $selected_dhp_price, false);
    }
    if (isset($selected_lmp)) {
        $order->addItem($selected_lmp_title, 'Laptop Medium Performance', $lmp_qty, "7.7%", $selected_lmp_price, false);
    }
    if (isset($selected_lmt)) {
        $order->addItem($selected_lmt_title, 'Laptop Medium Performance Touch', $lmt_qty, "7.7%", $selected_lmt_price, false);
    }
    if (isset($selected_lhp)) {
        $order->addItem($selected_lhp_title, 'Laptop High Performance', $lhp_qty, "7.7%", $selected_lhp_price, false);
    }
    if (isset($selected_lpp)) {
        $order->addItem($selected_lpp_title, 'Laptop Peripherie Paket', $lpp_qty, "7.7%", $selected_lpp_price, false);
    }
    if (isset($selected_smp)) {
        $order->addItem($selected_smp_title, 'Server Medium Performance', $smp_qty, "7.7%", $selected_smp_price, false);
    }
    if (isset($selected_shp)) {
        $order->addItem($selected_shp_title, 'Server High Performance', $shp_qty, "7.7%", $selected_shp_price, false);
    }
    if (isset($selected_tnoc)) {
        $order->addItem($selected_tnoc_title, 'Tablet ohne 4G', $tnoc_qty, "7.7%", $selected_tnoc_price, false);
    }
    if (isset($selected_twc)) {
        $order->addItem($selected_twc_title, 'Tablet mit 4G', $twc_qty, "7.7%", $selected_twc_price, false);
    }
    if (isset($selected_mba)) {
        $order->addItem($selected_mba_title, 'Microsoft365 Apps', $mba_qty, "7.7%", $selected_mba_price, false);
    }
    if (isset($selected_mbs)) {
        $order->addItem($selected_mbs_title, 'Microsoft365 Standard', $mbs_qty, "7.7%", $selected_mbs_price, false);
    }
    if (isset($selected_mbp)) {
        $order->addItem($selected_mbp_title, 'Microsoft365 Premium', $mbp_qty, "7.7%", $selected_mbp_price, false);
    }

    // Add Totals
    $order->addTotal("Kosten pro Jahr", $order->items_total);

    // Add Title
    $order->addTitle($seller_notice . '<br/><br/>');

    // Add Paragraph
    $order->addTitle('Kontaktdaten Kunde:');
    $order->addParagraph('E-Mail: ' . $customer_mail);
    $order->addParagraph('Telefon: ' . $customer_phone . '<br/><br/>');
    $order->addParagraph('<strong>Nachricht:</strong> ' . '<br />' . $customer_message);

    // Set Footer Note
    $order->setFooternote('Dieses Dokument wurde automatisch generiert.');

    // Render
    $order->render('phpinvoice/pdf/teqly_anfrage_' . $timestamp . '.pdf', 'F');

    /* Mail Sending
    ==================================== */

    try {

        // Set Sender
        $mail->setFrom('noreply@easit.rent', 'EASIT.rent');

        // Set Reply-to Address
        $mail->addReplyTo('info@easit.rent', 'EASIT.rent');

        // Set Recipients
        $mail->addAddress('info@easit.rent', 'TEAM EASIT');
        $mail->addAddress($customer_mail, $customer_name_formatted);

        // Set Subject
        $mail->Subject = 'Ihre Anfrage bei EASIT.rent';

        // Get HTML Mail Template
        $email_html = file_get_contents('phpmailer/email.html');

        // Set HTML Content
        $body = str_replace(array('customerName'), array($customer_name), $email_html);
        $mail->MsgHTML($body);

        // Attach Invoice
        $file = 'phpinvoice/pdf/teqly_anfrage_' . $timestamp . '.pdf';
        $mail->addAttachment($file);

        $mail->send();

    } catch (Exception $e) {

        echo 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo;

    } finally { // Clean Up

        $files = glob('phpinvoice/pdf/*');

        foreach ($files as $file) {
            if (is_file($file))
                unlink($file);
        }
    }

    // Success Page
    echo '<div id="success">';
    echo '<div class="icon icon-order-success svg">';
    echo '<svg width="72px" height="72px">';
    echo '<g fill="none" stroke="#02b843" stroke-width="2">';
    echo '<circle cx="36" cy="36" r="35" style="stroke-dasharray:240px, 240px; stroke-dashoffset: 480px;"></circle>';
    echo '<path d="M17.417,37.778l9.93,9.909l25.444-25.393" style="stroke-dasharray:50px, 50px; stroke-dashoffset: 0px;"></path>';
    echo '</g>';
    echo '</svg>';
    echo '</div>';
    echo '<h4>Vielen Dank für Ihre Anfrage. Sie wurde erfolgreich übermittelt.</h4>';
    echo '<small>Wir haben Ihnen eine Bestätigungsnachricht geschickt. Überprüfen Sie Ihre Mailbox.</small>';
    echo '</div>';
    echo '<script src="../js/redirect.js"></script>';

} else {

    // Error Page
    echo '<div style="color: #e9431c">' . $errors . '</div>';
    echo '<div id="success">';
    echo '<h4>Ups, da hatt etwas nicht geklappt!</h4>';
    echo '<a class="animated-link" href="../index.php">Zurück zur Startseite</small>';
    echo '</div>';

}

?>
<!-- END PHP -->

</body>
</html>
