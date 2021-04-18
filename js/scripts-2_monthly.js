(function ($) {

	"use strict";

	// =====================================================
	//      PRELOADER
	// =====================================================
	$(window).on("load", function () {
		'use strict';
		$('[data-loader="circle-side"]').fadeOut(); // will first fade out the loading animation
		$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
		var $hero = $('.hero-home .content');
		var $hero_v = $('#hero_video .content ');
		$hero.find('h3, p, form').addClass('fadeInUp animated');
		$hero.find('.btn-1').addClass('fadeIn animated');
		$hero_v.find('.h3, p, form').addClass('fadeInUp animated');
		$(window).scroll();
	})

	// =====================================================
	//      BACK TO TOP BUTTON
	// =====================================================
	function scrollToTop() {
		$('html, body').animate({ scrollTop: 0 }, 500, 'easeInOutExpo');
	}

	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 100) {
			$('#toTop').fadeIn('slow');
		} else {
			$('#toTop').fadeOut('slow');
		}
	});

	$('#toTop').on('click', function () {
		scrollToTop();
		return false;
	});

	// =====================================================
	//      NAVBAR
	// =====================================================
	$(window).on('scroll load', function () {

		if ($(window).scrollTop() >= 1) {
			$('.main-header').addClass('active');
		} else {
			$('.main-header').removeClass('active');
		}

	});

	// =====================================================
	//      STICKY SIDEBAR SETUP
	// =====================================================
	$('#mainContent, #sidebar').theiaStickySidebar({
		additionalMarginTop: 90
	});

	// =====================================================
	//      CALCULATOR ELEMENTS
	// =====================================================

	// Function to format item prices usign priceFormat plugin
	function formatItemPrice() {
		$('.price').priceFormat({
			prefix: 'CHF ',
			centsSeparator: '.',
			thousandsSeparator: "'"
		});
	}

	// Function to format total price usign priceFormat plugin
	function formatTotalPrice() {
		$('#total').priceFormat({
			prefix: 'CHF ',
			centsSeparator: '.',
			thousandsSeparator: "'"
		});
		/*
		$('#totalFollowing').priceFormat({
			prefix: 'CHF ',
			centsSeparator: '.',
			thousandsSeparator: '`'
		});
		*/

	}

	// Function to set total title and price initially
	function setTotalOnStart() {

		$('#totalTitle').val('Kosten pro Monat: ');
		$('#total').val('CHF 0.00');

		/*
		$('#totalFollowingTitle').val('Kosten Folgejahr: ');
		$('#totalFollowing').val('CHF 0.00');
		 */
	}

	// Variables for calculation

	var dmpIsChecked = false;
	var dmpTitle = '';
	var dmpPrice = 0;
	var dmpQuantity = 0;
	var dmpSum = 0;

	var dhpIsChecked = false;
	var dhpTitle = '';
	var dhpPrice = 0;
	var dhpQuantity = 0;
	var dhpSum = 0;

	var lmpIsChecked = false;
	var lmpTitle = '';
	var lmpPrice = 0;
	var lmpQuantity = 0;
	var lmpSum = 0;

	var lhpIsChecked = false;
	var lhpTitle = '';
	var lhpPrice = 0;
	var lhpQuantity = 0;
	var lhpSum = 0;

	var lppIsChecked = false;
	var lppTitle = '';
	var lppPrice = 0;
	var lppQuantity = 0;
	var lppSum = 0;

	var sspIsChecked = false;
	var sspTitle = '';
	var sspPrice = 0;
	var sspQuantity = 0;
	var sspSum = 0;

	var smpIsChecked = false;
	var smpTitle = '';
	var smpPrice = 0;
	var smpQuantity = 0;
	var smpSum = 0;

	var shpIsChecked = false;
	var shpTitle = '';
	var shpPrice = 0;
	var shpQuantity = 0;
	var shpSum = 0;

	var tcsIsChecked = false;
	var tcsTitle = '';
	var tcsPrice = 0;
	var tcsQuantity = 0;
	var tcsSum = 0;

	var tcpIsChecked = false;
	var tcpTitle = '';
	var tcpPrice = 0;
	var tcpQuantity = 0;
	var tcpSum = 0;

	var mbaIsChecked = false;
	var mbaTitle = '';
	var mbaPrice = 0;
	var mbaQuantity = 0;
	var mbaSum = 0;

	var mbsIsChecked = false;
	var mbsTitle = '';
	var mbsPrice = 0;
	var mbsQuantity = 0;
	var mbsSum = 0;

	var mbpIsChecked = false;
	var mbpTitle = '';
	var mbpPrice = 0;
	var mbpQuantity = 0;
	var mbpSum = 0;

	var total = 0;
	var total2 = 0;

	// Function to manage the calculations and update summary
	function updateSummary() {

		//Get the current data from Desktop Medium Performance elements
		dmpIsChecked = $('#dmp').is(':checked');
		dmpTitle = $('#dmpTitle').text();
		dmpPrice = $('#dmp').val();
		dmpQuantity = $('#dmpQty').val();

		//Update order summary with Desktop Medium Performance details
		if (dmpIsChecked && (dmpQuantity != 0)){
			dmpSum = (dmpPrice * 1) * (dmpQuantity * 1);
			$('#dmpSumTot').html('<a href="javascript:;" id="dmpSumTotReset"><i class="fa fa-times-circle"></i></a> ' + dmpTitle + ' x ' + dmpQuantity + '<span class="price">' + dmpSum.toFixed(2) + '</span>')
			formatItemPrice()
		} else {
			dmpSum = 0;
			clearSummaryLine('dmpSumTot');
		}

		//Get the current data from Desktop High Performance elements
		dhpIsChecked = $('#dhp').is(':checked');
		dhpTitle = $('#dhpTitle').text();
		dhpPrice = $('#dhp').val();
		dhpQuantity = $('#dhpQty').val();

		//Update order summary with Desktop High Performance details
		if (dhpIsChecked && (dhpQuantity != 0)){
			dhpSum = (dhpPrice * 1) * (dhpQuantity * 1);
			$('#dhpSumTot').html('<a href="javascript:;" id="dhpSumTotReset"><i class="fa fa-times-circle"></i></a> ' + dhpTitle + ' x ' + dhpQuantity + '<span class="price">' + dhpSum.toFixed(2) + '</span>')
			formatItemPrice()
		} else {
			dhpSum = 0;
			clearSummaryLine('dhpSumTot');
		}

		//Get the current data from Laptop Medium Performance elements
		lmpIsChecked = $('#lmp').is(':checked');
		lmpTitle = $('#lmpTitle').text();
		lmpPrice = $('#lmp').val();
		lmpQuantity = $('#lmpQty').val();

		//Update order summary with Laptop Medium Performance details
		if (lmpIsChecked && (lmpQuantity != 0)){
			lmpSum = (lmpPrice * 1) * (lmpQuantity * 1);
			$('#lmpSumTot').html('<a href="javascript:;" id="lmpSumTotReset"><i class="fa fa-times-circle"></i></a> ' + lmpTitle + ' x ' + lmpQuantity + '<span class="price">' + lmpSum.toFixed(2) + '</span>')
			formatItemPrice()
		} else {
			lmpSum = 0;
			clearSummaryLine('lmpSumTot');
		}

		//Get the current data from Laptop High Performance elements
		lhpIsChecked = $('#lhp').is(':checked');
		lhpTitle = $('#lhpTitle').text();
		lhpPrice = $('#lhp').val();
		lhpQuantity = $('#lhpQty').val();

		//Update order summary with Laptop High Performance details
		if (lhpIsChecked && (lhpQuantity != 0)){
			lhpSum = (lhpPrice * 1) * (lhpQuantity * 1);
			$('#lhpSumTot').html('<a href="javascript:;" id="lhpSumTotReset"><i class="fa fa-times-circle"></i></a> ' + lhpTitle + ' x ' + lhpQuantity + '<span class="price">' + lhpSum.toFixed(2) + '</span>')
			formatItemPrice()
		} else {
			lhpSum = 0;
			clearSummaryLine('lhpSumTot');
		}

		//Get the current data from Laptop Peripherie Paket elements
		lppIsChecked = $('#lpp').is(':checked');
		lppTitle = $('#lppTitle').text();
		lppPrice = $('#lpp').val();
		lppQuantity = $('#lppQty').val();

		//Update order summary with Laptop Peripherie Paket details
		if (lppIsChecked && (lppQuantity != 0)){
			lppSum = (lppPrice * 1) * (lppQuantity * 1);
			$('#lppSumTot').html('<a href="javascript:;" id="lppSumTotReset"><i class="fa fa-times-circle"></i></a> ' + lppTitle + ' x ' + lppQuantity + '<span class="price">' + lppSum.toFixed(2) + '</span>')
			formatItemPrice()
		} else {
			lppSum = 0;
			clearSummaryLine('lppSumTot');
		}

		//Get the current data from Server Standard Performance elements
		sspIsChecked = $('#ssp').is(':checked');
		sspTitle = $('#sspTitle').text();
		sspPrice = $('#ssp').val();
		sspQuantity = $('#sspQty').val();

		//Update order summary with Server Standard Performance details
		if (sspIsChecked && (sspQuantity != 0)){
			sspSum = (sspPrice * 1) * (sspQuantity * 1);
			$('#sspSumTot').html('<a href="javascript:;" id="sspSumTotReset"><i class="fa fa-times-circle"></i></a> ' + sspTitle + ' x ' + sspQuantity + '<span class="price">' + sspSum.toFixed(2) + '</span>')
			formatItemPrice()
		} else {
			sspSum = 0;
			clearSummaryLine('sspSumTot');
		}

		//Get the current data from Server Medium Performance elements
		smpIsChecked = $('#smp').is(':checked');
		smpTitle = $('#smpTitle').text();
		smpPrice = $('#smp').val();
		smpQuantity = $('#smpQty').val();

		//Update order summary with Server Medium Performance details
		if (smpIsChecked && (smpQuantity != 0)){
			smpSum = (smpPrice * 1) * (smpQuantity * 1);
			$('#smpSumTot').html('<a href="javascript:;" id="smpSumTotReset"><i class="fa fa-times-circle"></i></a> ' + smpTitle + ' x ' + smpQuantity + '<span class="price">' + smpSum.toFixed(2) + '</span>')
			formatItemPrice()
		} else {
			smpSum = 0;
			clearSummaryLine('smpSumTot');
		}

		//Get the current data from Server High Performance elements
		shpIsChecked = $('#shp').is(':checked');
		shpTitle = $('#shpTitle').text();
		shpPrice = $('#shp').val();
		shpQuantity = $('#shpQty').val();

		//Update order summary with Server High Performance details
		if (shpIsChecked && (shpQuantity != 0)){
			shpSum = (shpPrice * 1) * (shpQuantity * 1);
			$('#shpSumTot').html('<a href="javascript:;" id="shpSumTotReset"><i class="fa fa-times-circle"></i></a> ' + shpTitle + ' x ' + shpQuantity + '<span class="price">' + shpSum.toFixed(2) + '</span>')
			formatItemPrice()
		} else {
			shpSum = 0;
			clearSummaryLine('shpSumTot');
		}

		//Get the current data from TEQLY Cloud Standard elements
		tcsIsChecked = $('#tcs').is(':checked');
		tcsTitle = $('#tcsTitle').text();
		tcsPrice = $('#tcs').val();
		tcsQuantity = $('#tcsQty').val();

		//Update order summary with TEQLY Cloud Standard details
		if (tcsIsChecked && (tcsQuantity != 0)){
			tcsSum = (tcsPrice * 1) * (tcsQuantity * 1);
			$('#tcsSumTot').html('<a href="javascript:;" id="tcsSumTotReset"><i class="fa fa-times-circle"></i></a> ' + tcsTitle + ' x ' + tcsQuantity + '<span class="price">' + tcsSum.toFixed(2) + '</span>')
			formatItemPrice()
		} else {
			tcsSum = 0;
			clearSummaryLine('tcsSumTot');
		}

		//Get the current data from TEQLY Cloud Premium elements
		tcpIsChecked = $('#tcp').is(':checked');
		tcpTitle = $('#tcpTitle').text();
		tcpPrice = $('#tcp').val();
		tcpQuantity = $('#tcpQty').val();

		//Update order summary with TEQLY Cloud Premium details
		if (tcpIsChecked && (tcpQuantity != 0)){
			tcpSum = (tcpPrice * 1) * (tcpQuantity * 1);
			$('#tcpSumTot').html('<a href="javascript:;" id="tcpSumTotReset"><i class="fa fa-times-circle"></i></a> ' + tcpTitle + ' x ' + tcpQuantity + '<span class="price">' + tcpSum.toFixed(2) + '</span>')
			formatItemPrice()
		} else {
			tcpSum = 0;
			clearSummaryLine('tcpSumTot');
		}

		//Get the current data from M365 Apps elements
		mbaIsChecked = $('#mba').is(':checked');
		mbaTitle = $('#mbaTitle').text();
		mbaPrice = $('#mba').val();
		mbaQuantity = $('#mbaQty').val();

		//Update order summary with M365 Apps details
		if (mbaIsChecked && (mbaQuantity != 0)){
			mbaSum = (mbaPrice * 1) * (mbaQuantity * 1);
			$('#mbaSumTot').html('<a href="javascript:;" id="mbaSumTotReset"><i class="fa fa-times-circle"></i></a> ' + mbaTitle + ' x ' + mbaQuantity + '<span class="price">' + mbaSum.toFixed(2) + '</span>')
			formatItemPrice()
		} else {
			mbaSum = 0;
			clearSummaryLine('mbaSumTot');
		}

		//Get the current data from M365 Standard elements
		mbsIsChecked = $('#mbs').is(':checked');
		mbsTitle = $('#mbsTitle').text();
		mbsPrice = $('#mbs').val();
		mbsQuantity = $('#mbsQty').val();

		//Update order summary with M365 Standard details
		if (mbsIsChecked && (mbsQuantity != 0)){
			mbsSum = (mbsPrice * 1) * (mbsQuantity * 1);
			$('#mbsSumTot').html('<a href="javascript:;" id="mbsSumTotReset"><i class="fa fa-times-circle"></i></a> ' + mbsTitle + ' x ' + mbsQuantity + '<span class="price">' + mbsSum.toFixed(2) + '</span>')
			formatItemPrice()
		} else {
			mbsSum = 0;
			clearSummaryLine('mbsSumTot');
		}

		//Get the current data from M365 Premium elements
		mbpIsChecked = $('#mbp').is(':checked');
		mbpTitle = $('#mbpTitle').text();
		mbpPrice = $('#mbp').val();
		mbpQuantity = $('#mbpQty').val();

		//Update order summary with M365 Standard details
		if (mbpIsChecked && (mbpQuantity != 0)){
			mbpSum = (mbpPrice * 1) * (mbpQuantity * 1);
			$('#mbpSumTot').html('<a href="javascript:;" id="mbpSumTotReset"><i class="fa fa-times-circle"></i></a> ' + mbpTitle + ' x ' + mbpQuantity + '<span class="price">' + mbpSum.toFixed(2) + '</span>')
			formatItemPrice()
		} else {
			mbpSum = 0;
			clearSummaryLine('mbpSumTot');
		}


		// Update total in order summary
		total = dmpSum + dhpSum + lmpSum + lhpSum +lppSum + sspSum + smpSum +shpSum +tcsSum + tcpSum + mbsSum + mbaSum +mbpSum;
		total2 = dmpSum + dhpSum + lmpSum + lhpSum + lppSum+ sspSum + smpSum +shpSum +tcsSum + tcpSum + mbsSum + mbaSum +mbpSum;

		$('#total').val(total.toFixed(2));
		formatTotalPrice();
		$('#totalFollowing').val(total2.toFixed(2));
		formatTotalPrice();

	}

	// Function to save actual values with updating the hidden fields
	function saveState() {

		// Update hidden fields with Desktop Medium Performance details
		$('#dmpTitleHidden').val(dmpTitle);
		$('#dmpPriceHidden').val(dmpPrice);
		$('#dmpSum').val(dmpSum);

		// Update hidden fields with Desktop High Performance details
		$('#dhpTitleHidden').val(dhpTitle);
		$('#dhpPriceHidden').val(dhpPrice);
		$('#dhpSum').val(dhpSum);

		// Update hidden fields with Laptop Medium Performance details
		$('#lmpTitleHidden').val(lmpTitle);
		$('#lmpPriceHidden').val(lmpPrice);
		$('#lmpSum').val(lmpSum);

		// Update hidden fields with Laptop High Performance details
		$('#lhpTitleHidden').val(lhpTitle);
		$('#lhpPriceHidden').val(lhpPrice);
		$('#lhpSum').val(lhpSum);

		// Update hidden fields with Laptop Peripherie Paket details
		$('#lppTitleHidden').val(lppTitle);
		$('#lppPriceHidden').val(lppPrice);
		$('#lppSum').val(lppSum);

		// Update hidden fields with Server Standard Performance details
		$('#sspTitleHidden').val(sspTitle);
		$('#sspPriceHidden').val(sspPrice);
		$('#sspSum').val(sspSum);

		// Update hidden fields with Server Medium Performance details
		$('#smpTitleHidden').val(smpTitle);
		$('#smpPriceHidden').val(smpPrice);
		$('#smpSum').val(smpSum);

		// Update hidden fields with Server High Performance details
		$('#shpTitleHidden').val(shpTitle);
		$('#shpPriceHidden').val(shpPrice);
		$('#shpSum').val(shpSum);

		// Update hidden fields with TEQLY Cloud Standard details
		$('#tcsTitleHidden').val(tcsTitle);
		$('#tcsPriceHidden').val(tcsPrice);
		$('#tcsSum').val(tcsSum);

		// Update hidden fields with TEQLY Cloud Premium details
		$('#tcpTitleHidden').val(tcpTitle);
		$('#tcpPriceHidden').val(tcpPrice);
		$('#tcpSum').val(tcpSum);

		// Update hidden fields with M365 Apps details
		$('#mbaTitleHidden').val(mbaTitle);
		$('#mbaPriceHidden').val(mbaPrice);
		$('#mbaSum').val(mbaSum);

		// Update hidden fields with M365 Standard details
		$('#mbsTitleHidden').val(mbsTitle);
		$('#mbsPriceHidden').val(mbsPrice);
		$('#mbsSum').val(mbsSum);

		// Update hidden fields with M365 Premium details
		$('#mbpTitleHidden').val(mbpTitle);
		$('#mbpPriceHidden').val(mbpPrice);
		$('#mbpSum').val(mbpSum);

		// Update hidden field total
		$('#totalDue').val(total);
		$('#totalFollowingDue').val(total2);

	}

	// Function to clear line in order summary
	function clearSummaryLine(summaryLineName) {

		if (summaryLineName == 'all') {
			$('#dmpSumTot').html('');
			$('#dhpSumTot').html('');
			$('#lmpSumTot').html('');
			$('#lhpSumTot').html('');
			$('#lppSumTot').html('');
			$('#sspSumTot').html('');
			$('#smpSumTot').html('');
			$('#shpSumTot').html('');
			$('#tcsSumTot').html('');
			$('#tcpSumTot').html('');
			$('#mbaSumTot').html('');
			$('#mbsSumTot').html('');
			$('#mbpSumTot').html('');
		}
		if (summaryLineName == 'dmpSumTot') {
			$('#dmpSumTot').html('');
		}
		if (summaryLineName == 'dhpSumTot') {
			$('#dhpSumTot').html('');
		}
		if (summaryLineName == 'lmpSumTot') {
			$('#lmpSumTot').html('');
		}
		if (summaryLineName == 'lhpSumTot') {
			$('#lhpSumTot').html('');
		}
		if (summaryLineName == 'lppSumTot') {
			$('#lppSumTot').html('');
		}
		if (summaryLineName == 'sspSumTot') {
			$('#sspSumTot').html('');
		}
		if (summaryLineName == 'smpSumTot') {
			$('#smpSumTot').html('');
		}
		if (summaryLineName == 'shpSumTot') {
			$('#shpSumTot').html('');
		}
		if (summaryLineName == 'tcsSumTot') {
			$('#tcsSumTot').html('');
		}
		if (summaryLineName == 'tcpSumTot') {
			$('#tcpSumTot').html('');
		}
		if (summaryLineName == 'mbaSumTot') {
			$('#mbaSumTot').html('');
		}
		if (summaryLineName == 'mbsSumTot') {
			$('#mbsSumTot').html('');
		}
		if (summaryLineName == 'mbpSumTot') {
			$('#mbpSumTot').html('');
		}
			}

	// Function to activate a given checkbox
	function activateSingleOption(singleOptionName) {

		if (singleOptionName == 'dmp'){
			$('#dmp').prop('checked', true);
		}

		if (singleOptionName == 'dhp'){
			$('#dhp').prop('checked', true);
		}

		if (singleOptionName == 'lmp'){
			$('#lmp').prop('checked', true);
		}

		if (singleOptionName == 'lhp'){
			$('#lhp').prop('checked', true);
		}

		if (singleOptionName == 'lpp'){
			$('#lpp').prop('checked', true);
		}

		if (singleOptionName == 'ssp'){
			$('#ssp').prop('checked', true);
		}

		if (singleOptionName == 'smp'){
			$('#smp').prop('checked', true);
		}

		if (singleOptionName == 'shp'){
			$('#shp').prop('checked', true);
		}

		if (singleOptionName == 'tcs'){
			$('#tcs').prop('checked', true);
		}

		if (singleOptionName == 'tcp'){
			$('#tcp').prop('checked', true);
		}

		if (singleOptionName == 'mba'){
			$('#mba').prop('checked', true);
		}

		if (singleOptionName == 'mbs'){
			$('#mbs').prop('checked', true);
		}

		if (singleOptionName == 'mbp'){
			$('#mbp').prop('checked', true);
		}
	}

	// Function to reset the given checkbox
	function resetCheckbox(optionName) {

		if (optionName == 'all') {
			$('#dmp').prop('checked', false);
			$('#dhp').prop('checked', false);
			$('#lmp').prop('checked', false);
			$('#lhp').prop('checked', false);
			$('#lpp').prop('checked', false);
			$('#ssp').prop('checked', false);
			$('#smp').prop('checked', false);
			$('#shp').prop('checked', false);
			$('#tcs').prop('checked', false);
			$('#tcp').prop('checked', false);
			$('#mba').prop('checked', false);
			$('#mbs').prop('checked', false);
			$('#mbp').prop('checked', false);
		}
		if (optionName == 'dmp') {
			$('#dmp').prop('checked', false);
		}
		if (optionName == 'dhp') {
			$('#dhp').prop('checked', false);
		}
		if (optionName == 'lmp') {
			$('#lmp').prop('checked', false);
		}
		if (optionName == 'lhp') {
			$('#lhp').prop('checked', false);
		}
		if (optionName == 'lpp') {
			$('#lpp').prop('checked', false);
		}
		if (optionName == 'ssp') {
			$('#ssp').prop('checked', false);
		}
		if (optionName == 'smp') {
			$('#smp').prop('checked', false);
		}
		if (optionName == 'shp') {
			$('#shp').prop('checked', false);
		}
		if (optionName == 'tcs') {
			$('#tcs').prop('checked', false);
		}
		if (optionName == 'tcp') {
			$('#tcp').prop('checked', false);
		}
		if (optionName == 'mba') {
			$('#mba').prop('checked', false);
		}
		if (optionName == 'mbs') {
			$('#mbs').prop('checked', false);
		}
		if (optionName == 'mbp') {
			$('#mbp').prop('checked', false);
		}
	}

	// Function to re-validate total price
	function reValidateTotal() {

		$('#total').parsley().validate();
		/*
		$('#totalFollowing').parsley().validate();
		 */
	}

	// Set total title and price initially
	setTotalOnStart();

	// When Desktop Medium Performance is clicked
	$('#dmp').on('click', function () {
		updateSummary();
		saveState();
		reValidateTotal();
	});

	// When Desktop High Performance is clicked
	$('#dhp').on('click', function () {
		updateSummary();
		saveState();
		reValidateTotal();
	});

	// When Laptop Medium Performance is clicked
	$('#lmp').on('click', function () {
		updateSummary();
		saveState();
		reValidateTotal();
	});

	// When Laptop High Performance is clicked
	$('#lhp').on('click', function () {
		updateSummary();
		saveState();
		reValidateTotal();
	});

	// When Laptop Peripherie Paket is clicked
	$('#lpp').on('click', function () {
		updateSummary();
		saveState();
		reValidateTotal();
	});

	// When Server Standard Performance is clicked
	$('#ssp').on('click', function () {
		updateSummary();
		saveState();
		reValidateTotal();
	});

	// When Server Medium Performance is clicked
	$('#smp').on('click', function () {
		updateSummary();
		saveState();
		reValidateTotal();
	});

	// When Server High Performance is clicked
	$('#shp').on('click', function () {
		updateSummary();
		saveState();
		reValidateTotal();
	});

	// When TEQLY Cloud Standard is clicked
	$('#tcs').on('click', function () {
		updateSummary();
		saveState();
		reValidateTotal();
	});

	// When TEQLY Cloud Standard is clicked
	$('#tcp').on('click', function () {
		updateSummary();
		saveState();
		reValidateTotal();
	});

	// When M365 Apps is clicked
	$('#mba').on('click', function () {
		updateSummary();
		saveState();
		reValidateTotal();
	});

	// When M365 Standard is clicked
	$('#mbs').on('click', function () {
		updateSummary();
		saveState();
		reValidateTotal();
	});

	// When M365 Premium is clicked
	$('#mbp').on('click', function () {
		updateSummary();
		saveState();
		reValidateTotal();
	});

	// Delete Desktop Medium Performance in summary list
	$('#dmpSumTot').delegate('#dmpSumTotReset', 'click', function () {
		clearSummaryLine('dmpSumTot');
		resetCheckbox('dmp');
		updateSummary();
		saveState();
		reValidateTotal();
	});

	// Delete Desktop High Performance in summary list
	$('#dhpSumTot').delegate('#dhpSumTotReset', 'click', function () {
		clearSummaryLine('dhpSumTot');
		resetCheckbox('dhp');
		updateSummary();
		saveState();
		reValidateTotal();
	});

	// Delete Laptop Medium Performance in summary list
	$('#lmpSumTot').delegate('#lmpSumTotReset', 'click', function () {
		clearSummaryLine('lmpSumTot');
		resetCheckbox('lmp');
		updateSummary();
		saveState();
		reValidateTotal();
	});

	// Delete Laptop High Performance in summary list
	$('#lhpSumTot').delegate('#lhpSumTotReset', 'click', function () {
		clearSummaryLine('lhpSumTot');
		resetCheckbox('lhp');
		updateSummary();
		saveState();
		reValidateTotal();
	});

	// Delete Laptop Peripherie Paket in summary list
	$('#lppSumTot').delegate('#lppSumTotReset', 'click', function () {
		clearSummaryLine('lppSumTot');
		resetCheckbox('lpp');
		updateSummary();
		saveState();
		reValidateTotal();
	});

	// Delete Server Standard Performance in summary list
	$('#sspSumTot').delegate('#sspSumTotReset', 'click', function () {
		clearSummaryLine('sspSumTot');
		resetCheckbox('ssp');
		updateSummary();
		saveState();
		reValidateTotal();
	});

	// Delete Server Medium Performance in summary list
	$('#smpSumTot').delegate('#smpSumTotReset', 'click', function () {
		clearSummaryLine('smpSumTot');
		resetCheckbox('smp');
		updateSummary();
		saveState();
		reValidateTotal();
	});

	// Delete Server High Performance in summary list
	$('#shpSumTot').delegate('#shpSumTotReset', 'click', function () {
		clearSummaryLine('shpSumTot');
		resetCheckbox('shp');
		updateSummary();
		saveState();
		reValidateTotal();
	});

	// Delete TEQLY Cloud Standard  in summary list
	$('#tcsSumTot').delegate('#tcsSumTotReset', 'click', function () {
		clearSummaryLine('tcsSumTot');
		resetCheckbox('tcs');
		updateSummary();
		saveState();
		reValidateTotal();
	});

	// Delete TEQLY Cloud Premium in summary list
	$('#tcpSumTot').delegate('#tcpSumTotReset', 'click', function () {
		clearSummaryLine('tcpSumTot');
		resetCheckbox('tcp');
		updateSummary();
		saveState();
		reValidateTotal();
	});

	// Delete M365 Apps  in summary list
	$('#mbaSumTot').delegate('#mbaSumTotReset', 'click', function () {
		clearSummaryLine('mbaSumTot');
		resetCheckbox('mba');
		updateSummary();
		saveState();
		reValidateTotal();
	});

	// Delete M365 Standard  in summary list
	$('#mbsSumTot').delegate('#mbsSumTotReset', 'click', function () {
		clearSummaryLine('mbsSumTot');
		resetCheckbox('mbs');
		updateSummary();
		saveState();
		reValidateTotal();
	});

	// Delete M365 Premium in summary list
	$('#mbpSumTot').delegate('#mbpSumTotReset', 'click', function () {
		clearSummaryLine('mbpSumTot');
		resetCheckbox('mbp');
		updateSummary();
		saveState();
		reValidateTotal();
	});

	// If reset is clicked, set the selected item to default
	$('#resetBtn').on('click', function () {
		clearSummaryLine('all');
		resetCheckbox('all');
		updateSummary();
		scrollToTop();
	});

	// =====================================================
	//      RANGE SLIDER Desktop Medium Performance
	// =====================================================
	var $rangeDMP = $('#dmpRangeSlider'),
		$inputDMP = $('#dmpQty'),
		instanceDMP,
		min = 1,
		max = 50;

	$rangeDMP.ionRangeSlider({
		skin: 'round',
		type: 'single',
		min: min,
		max: max,
		from: 1,
		hide_min_max: true,
		onStart: function (data) {
			$inputDMP.prop('value', data.from);
		},
		onChange: function (data) {
			$inputDMP.prop('value', data.from);
			if (!dmpIsChecked) {
				activateSingleOption('dmp');
			}
			updateSummary();
			reValidateTotal();
			saveState();
		}
	});

	instanceDMP = $rangeDMP.data("ionRangeSlider");

	$inputDMP.on('input', function () {
		var val = $(this).prop('value');

		// Validate
		if (val < min) {
			val = min;
			$inputDMP.val(min);
		} else if (val > max) {
			val = max;
			$inputDMP.val(max);
		}

		instanceDMP.update({
			from: val
		});

		if (!dmpIsChecked) {
			activateSingleOption('dmp');
		}

		updateSummary();
		reValidateTotal();
		saveState();

	});

	// =====================================================
	//      RANGE SLIDER Desktop High Performance
	// =====================================================
	var $rangeDHP = $('#dhpRangeSlider'),
		$inputDHP = $('#dhpQty'),
		instanceDHP,
		min = 1,
		max = 50;

	$rangeDHP.ionRangeSlider({
		skin: 'round',
		type: 'single',
		min: min,
		max: max,
		from: 1,
		hide_min_max: true,
		onStart: function (data) {
			$inputDHP.prop('value', data.from);
		},
		onChange: function (data) {
			$inputDHP.prop('value', data.from);
			if (!dhpIsChecked) {
				activateSingleOption('dhp');
			}
			updateSummary();
			reValidateTotal();
			saveState();
		}
	});

	instanceDHP = $rangeDHP.data("ionRangeSlider");

	$inputDHP.on('input', function () {
		var val = $(this).prop('value');

		// Validate
		if (val < min) {
			val = min;
			$inputDHP.val(min);
		} else if (val > max) {
			val = max;
			$inputDHP.val(max);
		}

		instanceDHP.update({
			from: val
		});

		if (!dhpIsChecked) {
			activateSingleOption('dhp');
		}

		updateSummary();
		reValidateTotal();
		saveState();

	});

	// =====================================================
	//      RANGE SLIDER Laptop Medium Performance
	// =====================================================
	var $rangeLMP = $('#lmpRangeSlider'),
		$inputLMP = $('#lmpQty'),
		instanceLMP,
		min = 1,
		max = 50;

	$rangeLMP.ionRangeSlider({
		skin: 'round',
		type: 'single',
		min: min,
		max: max,
		from: 1,
		hide_min_max: true,
		onStart: function (data) {
			$inputLMP.prop('value', data.from);
		},
		onChange: function (data) {
			$inputLMP.prop('value', data.from);
			if (!lmpIsChecked) {
				activateSingleOption('lmp');
			}
			updateSummary();
			reValidateTotal();
			saveState();
		}
	});

	instanceLMP = $rangeLMP.data("ionRangeSlider");

	$inputLMP.on('input', function () {
		var val = $(this).prop('value');

		// Validate
		if (val < min) {
			val = min;
			$inputLMP.val(min);
		} else if (val > max) {
			val = max;
			$inputLMP.val(max);
		}

		instanceLMP.update({
			from: val
		});

		if (!lmpIsChecked) {
			activateSingleOption('lmp');
		}

		updateSummary();
		reValidateTotal();
		saveState();

	});

	// =====================================================
	//      RANGE SLIDER Laptop High Performance
	// =====================================================
	var $rangeLHP = $('#lhpRangeSlider'),
		$inputLHP = $('#lhpQty'),
		instanceLHP,
		min = 1,
		max = 50;

	$rangeLHP.ionRangeSlider({
		skin: 'round',
		type: 'single',
		min: min,
		max: max,
		from: 1,
		hide_min_max: true,
		onStart: function (data) {
			$inputLHP.prop('value', data.from);
		},
		onChange: function (data) {
			$inputLHP.prop('value', data.from);
			if (!lhpIsChecked) {
				activateSingleOption('lhp');
			}
			updateSummary();
			reValidateTotal();
			saveState();
		}
	});

	instanceLHP = $rangeLHP.data("ionRangeSlider");

	$inputLHP.on('input', function () {
		var val = $(this).prop('value');

		// Validate
		if (val < min) {
			val = min;
			$inputLHP.val(min);
		} else if (val > max) {
			val = max;
			$inputLHP.val(max);
		}

		instanceLHP.update({
			from: val
		});

		if (!lhpIsChecked) {
			activateSingleOption('lhp');
		}

		updateSummary();
		reValidateTotal();
		saveState();

	});

	// =====================================================
	//      RANGE SLIDER Laptop Peripherie Paket
	// =====================================================
	var $rangeLPP = $('#lppRangeSlider'),
		$inputLPP = $('#lppQty'),
		instanceLPP,
		min = 1,
		max = 50;

	$rangeLPP.ionRangeSlider({
		skin: 'round',
		type: 'single',
		min: min,
		max: max,
		from: 1,
		hide_min_max: true,
		onStart: function (data) {
			$inputLPP.prop('value', data.from);
		},
		onChange: function (data) {
			$inputLPP.prop('value', data.from);
			if (!lppIsChecked) {
				activateSingleOption('lpp');
			}
			updateSummary();
			reValidateTotal();
			saveState();
		}
	});

	instanceLPP = $rangeLPP.data("ionRangeSlider");

	$inputLPP.on('input', function () {
		var val = $(this).prop('value');

		// Validate
		if (val < min) {
			val = min;
			$inputLPP.val(min);
		} else if (val > max) {
			val = max;
			$inputLPP.val(max);
		}

		instanceLPP.update({
			from: val
		});

		if (!lppIsChecked) {
			activateSingleOption('lpp');
		}

		updateSummary();
		reValidateTotal();
		saveState();

	});

	// =====================================================
	//      RANGE SLIDER Server Standard Performance
	// =====================================================
	var $rangeSSP = $('#sspRangeSlider'),
		$inputSSP = $('#sspQty'),
		instanceSSP,
		min = 1,
		max = 10;

	$rangeSSP.ionRangeSlider({
		skin: 'round',
		type: 'single',
		min: min,
		max: max,
		from: 1,
		hide_min_max: true,
		onStart: function (data) {
			$inputSSP.prop('value', data.from);
		},
		onChange: function (data) {
			$inputSSP.prop('value', data.from);
			if (!sspIsChecked) {
				activateSingleOption('ssp');
			}
			updateSummary();
			reValidateTotal();
			saveState();
		}
	});

	instanceSSP = $rangeSSP.data("ionRangeSlider");

	$inputSSP.on('input', function () {
		var val = $(this).prop('value');

		// Validate
		if (val < min) {
			val = min;
			$inputSSP.val(min);
		} else if (val > max) {
			val = max;
			$inputSSP.val(max);
		}

		instanceSSP.update({
			from: val
		});

		if (!sspIsChecked) {
			activateSingleOption('ssp');
		}

		updateSummary();
		reValidateTotal();
		saveState();

	});

	// =====================================================
	//      RANGE SLIDER Server Medium Performance
	// =====================================================
	var $rangeSMP = $('#smpRangeSlider'),
		$inputSMP = $('#smpQty'),
		instanceSMP,
		min = 1,
		max = 10;

	$rangeSMP.ionRangeSlider({
		skin: 'round',
		type: 'single',
		min: min,
		max: max,
		from: 1,
		hide_min_max: true,
		onStart: function (data) {
			$inputSMP.prop('value', data.from);
		},
		onChange: function (data) {
			$inputSMP.prop('value', data.from);
			if (!smpIsChecked) {
				activateSingleOption('smp');
			}
			updateSummary();
			reValidateTotal();
			saveState();
		}
	});

	instanceSMP = $rangeSMP.data("ionRangeSlider");

	$inputSMP.on('input', function () {
		var val = $(this).prop('value');

		// Validate
		if (val < min) {
			val = min;
			$inputSMP.val(min);
		} else if (val > max) {
			val = max;
			$inputSMP.val(max);
		}

		instanceSMP.update({
			from: val
		});

		if (!smpIsChecked) {
			activateSingleOption('smp');
		}

		updateSummary();
		reValidateTotal();
		saveState();

	});

	// =====================================================
	//      RANGE SLIDER Server High Performance
	// =====================================================
	var $rangeSHP = $('#shpRangeSlider'),
		$inputSHP = $('#shpQty'),
		instanceSHP,
		min = 1,
		max = 10;

	$rangeSHP.ionRangeSlider({
		skin: 'round',
		type: 'single',
		min: min,
		max: max,
		from: 1,
		hide_min_max: true,
		onStart: function (data) {
			$inputSHP.prop('value', data.from);
		},
		onChange: function (data) {
			$inputSHP.prop('value', data.from);
			if (!shpIsChecked) {
				activateSingleOption('shp');
			}
			updateSummary();
			reValidateTotal();
			saveState();
		}
	});

	instanceSHP = $rangeSHP.data("ionRangeSlider");

	$inputSHP.on('input', function () {
		var val = $(this).prop('value');

		// Validate
		if (val < min) {
			val = min;
			$inputSHP.val(min);
		} else if (val > max) {
			val = max;
			$inputSHP.val(max);
		}

		instanceSHP.update({
			from: val
		});

		if (!shpIsChecked) {
			activateSingleOption('shp');
		}

		updateSummary();
		reValidateTotal();
		saveState();

	});

	// =====================================================
	//      RANGE SLIDER TEQLY Cloud Standard
	// =====================================================
	var $rangeTCS = $('#tcsRangeSlider'),
		$inputTCS = $('#tcsQty'),
		instanceTCS,
		min = 1,
		max = 5;

	$rangeTCS.ionRangeSlider({
		skin: 'round',
		type: 'single',
		min: min,
		max: max,
		from: 1,
		hide_min_max: true,
		onStart: function (data) {
			$inputTCS.prop('value', data.from);
		},
		onChange: function (data) {
			$inputTCS.prop('value', data.from);
			if (!tcsIsChecked) {
				activateSingleOption('tcs');
			}
			updateSummary();
			reValidateTotal();
			saveState();
		}
	});

	instanceTCS = $rangeTCS.data("ionRangeSlider");

	$inputTCS.on('input', function () {
		var val = $(this).prop('value');

		// Validate
		if (val < min) {
			val = min;
			$inputTCS.val(min);
		} else if (val > max) {
			val = max;
			$inputTCS.val(max);
		}

		instanceTCS.update({
			from: val
		});

		if (!tcsIsChecked) {
			activateSingleOption('tcs');
		}

		updateSummary();
		reValidateTotal();
		saveState();

	});

	// =====================================================
	//      RANGE SLIDER TEQLY Cloud Premium
	// =====================================================
	var $rangeTCP = $('#tcpRangeSlider'),
		$inputTCP = $('#tcpQty'),
		instanceTCP,
		min = 1,
		max = 10;

	$rangeTCP.ionRangeSlider({
		skin: 'round',
		type: 'single',
		min: min,
		max: max,
		from: 1,
		hide_min_max: true,
		onStart: function (data) {
			$inputTCP.prop('value', data.from);
		},
		onChange: function (data) {
			$inputTCP.prop('value', data.from);
			if (!tcpIsChecked) {
				activateSingleOption('tcp');
			}
			updateSummary();
			reValidateTotal();
			saveState();
		}
	});

	instanceTCP = $rangeTCP.data("ionRangeSlider");

	$inputTCP.on('input', function () {
		var val = $(this).prop('value');

		// Validate
		if (val < min) {
			val = min;
			$inputTCP.val(min);
		} else if (val > max) {
			val = max;
			$inputTCP.val(max);
		}

		instanceTCP.update({
			from: val
		});

		if (!tcpIsChecked) {
			activateSingleOption('tcp');
		}

		updateSummary();
		reValidateTotal();
		saveState();

	});

	// =====================================================
	//      RANGE SLIDER M365 Apps
	// =====================================================
	var $rangeMBA = $('#mbaRangeSlider'),
		$inputMBA = $('#mbaQty'),
		instanceMBA,
		min = 1,
		max = 10;

	$rangeMBA.ionRangeSlider({
		skin: 'round',
		type: 'single',
		min: min,
		max: max,
		from: 1,
		hide_min_max: true,
		onStart: function (data) {
			$inputMBA.prop('value', data.from);
		},
		onChange: function (data) {
			$inputMBA.prop('value', data.from);
			if (!mbaIsChecked) {
				activateSingleOption('mba');
			}
			updateSummary();
			reValidateTotal();
			saveState();
		}
	});

	instanceMBA = $rangeMBA.data("ionRangeSlider");

	$inputMBA.on('input', function () {
		var val = $(this).prop('value');

		// Validate
		if (val < min) {
			val = min;
			$inputMBA.val(min);
		} else if (val > max) {
			val = max;
			$inputMBA.val(max);
		}

		instanceMBA.update({
			from: val
		});

		if (!mbaIsChecked) {
			activateSingleOption('mba');
		}

		updateSummary();
		reValidateTotal();
		saveState();

	});

	// =====================================================
	//      RANGE SLIDER M365 Standard
	// =====================================================
	var $rangeMBS = $('#mbsRangeSlider'),
		$inputMBS = $('#mbsQty'),
		instanceMBS,
		min = 1,
		max = 10;

	$rangeMBS.ionRangeSlider({
		skin: 'round',
		type: 'single',
		min: min,
		max: max,
		from: 1,
		hide_min_max: true,
		onStart: function (data) {
			$inputMBS.prop('value', data.from);
		},
		onChange: function (data) {
			$inputMBS.prop('value', data.from);
			if (!mbsIsChecked) {
				activateSingleOption('mbs');
			}
			updateSummary();
			reValidateTotal();
			saveState();
		}
	});

	instanceMBS = $rangeMBS.data("ionRangeSlider");

	$inputMBS.on('input', function () {
		var val = $(this).prop('value');

		// Validate
		if (val < min) {
			val = min;
			$inputMBS.val(min);
		} else if (val > max) {
			val = max;
			$inputMBS.val(max);
		}

		instanceMBS.update({
			from: val
		});

		if (!mbsIsChecked) {
			activateSingleOption('mbs');
		}

		updateSummary();
		reValidateTotal();
		saveState();

	});

	// =====================================================
	//      RANGE SLIDER M365 Premium
	// =====================================================
	var $rangeMBP = $('#mbpRangeSlider'),
		$inputMBP = $('#mbpQty'),
		instanceMBP,
		min = 1,
		max = 10;

	$rangeMBP.ionRangeSlider({
		skin: 'round',
		type: 'single',
		min: min,
		max: max,
		from: 1,
		hide_min_max: true,
		onStart: function (data) {
			$inputMBP.prop('value', data.from);
		},
		onChange: function (data) {
			$inputMBP.prop('value', data.from);
			if (!mbpIsChecked) {
				activateSingleOption('mbp');
			}
			updateSummary();
			reValidateTotal();
			saveState();
		}
	});

	instanceMBP = $rangeMBP.data("ionRangeSlider");

	$inputMBP.on('input', function () {
		var val = $(this).prop('value');

		// Validate
		if (val < min) {
			val = min;
			$inputMBP.val(min);
		} else if (val > max) {
			val = max;
			$inputMBP.val(max);
		}

		instanceMBP.update({
			from: val
		});

		if (!mbpIsChecked) {
			activateSingleOption('mbp');
		}

		updateSummary();
		reValidateTotal();
		saveState();

	});


	// =====================================================
	//      FORM LABELS
	// =====================================================
	new FloatLabels('#personalDetails', {
		style: 1
	});

	// =====================================================
	//      FORM INPUT VALIDATION
	// =====================================================

	// Quantity inputs
	$('.qty-input').on('keypress', function (event) {
		if (event.which != 8 && isNaN(String.fromCharCode(event.which))) {
			event.preventDefault();
		}
	});

	$('#optionGroup1Qty').on('keypress', function () {
		selectedItem1Title = $('#optionGroup1List option:selected').text();
		if (selectedItem1Title == chooseItemText) {
			$('#alertModal1').modal();
		}
	});

	$('#optionGroup2Qty').on('keypress', function () {
		selectedItem2Title = $('#optionGroup2List option:selected').text();
		if (selectedItem2Title == chooseItemText) {
			$('#alertModal2').modal();
		}
	});

	$('#optionGroup3Qty').on('keypress', function () {
		selectedItem3Title = $('#optionGroup3List option:selected').text();
		if (selectedItem3Title == chooseItemText) {
			$('#alertModal3').modal();
		}
	});


	// Empty order validation
	window.Parsley.addValidator('emptyOrder', {
		validateString: function (value) {
			return value !== '$ 0.00';
		},
		messages: {
			en: 'Order is empty.'
		}
	});

	// Whole form validation
	$('#orderForm').parsley();

	// Clear parsley empty elements
	if ('#orderForm'.length > 0) {
		$('#orderForm').parsley().on('field:success', function () {
			$('ul.parsley-errors-list').not(':has(li)').remove();
		});
	}

})(window.jQuery);
