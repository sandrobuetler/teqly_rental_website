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

		$('#totalTitle').val('Kosten pro Jahr: ');
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

	var lmtIsChecked = false;
	var lmtTitle = '';
	var lmtPrice = 0;
	var lmtQuantity = 0;
	var lmtSum = 0;

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

	var tnocIsChecked = false;
	var tnocTitle = '';
	var tnocPrice = 0;
	var tnocQuantity = 0;
	var tnocSum = 0;

	var twcIsChecked = false;
	var twcTitle = '';
	var twcPrice = 0;
	var twcQuantity = 0;
	var twcSum = 0;

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

		//Get the current data from Laptop Medium Performance Touch elements
		lmtIsChecked = $('#lmt').is(':checked');
		lmtTitle = $('#lmtTitle').text();
		lmtPrice = $('#lmt').val();
		lmtQuantity = $('#lmtQty').val();

		//Update order summary with Laptop Medium Performance Touch details
		if (lmtIsChecked && (lmtQuantity != 0)){
			lmtSum = (lmtPrice * 1) * (lmtQuantity * 1);
			$('#lmtSumTot').html('<a href="javascript:;" id="lmtSumTotReset"><i class="fa fa-times-circle"></i></a> ' + lmtTitle + ' x ' + lmtQuantity + '<span class="price">' + lmtSum.toFixed(2) + '</span>')
			formatItemPrice()
		} else {
			lmtSum = 0;
			clearSummaryLine('lmtSumTot');
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

		//Get the current data from Tablet ohne 4G elements
		tnocIsChecked = $('#tnoc').is(':checked');
		tnocTitle = $('#tnocTitle').text();
		tnocPrice = $('#tnoc').val();
		tnocQuantity = $('#tnocQty').val();

		//Update order summary with Tablet ohne 4G details
		if (tnocIsChecked && (tnocQuantity != 0)){
			tnocSum = (tnocPrice * 1) * (tnocQuantity * 1);
			$('#tnocSumTot').html('<a href="javascript:;" id="tnocSumTotReset"><i class="fa fa-times-circle"></i></a> ' + tnocTitle + ' x ' + tnocQuantity + '<span class="price">' + tnocSum.toFixed(2) + '</span>')
			formatItemPrice()
		} else {
			tnocSum = 0;
			clearSummaryLine('tnocSumTot');
		}

		//Get the current data from Tablet mit 4G elements
		twcIsChecked = $('#twc').is(':checked');
		twcTitle = $('#twcTitle').text();
		twcPrice = $('#twc').val();
		twcQuantity = $('#twcQty').val();

		//Update order summary with Tablet mit 4G details
		if (twcIsChecked && (twcQuantity != 0)){
			twcSum = (twcPrice * 1) * (twcQuantity * 1);
			$('#twcSumTot').html('<a href="javascript:;" id="twcSumTotReset"><i class="fa fa-times-circle"></i></a> ' + twcTitle + ' x ' + twcQuantity + '<span class="price">' + twcSum.toFixed(2) + '</span>')
			formatItemPrice()
		} else {
			twcSum = 0;
			clearSummaryLine('twcSumTot');
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
		total = dmpSum + dhpSum + lmpSum + lmtSum +lhpSum +lppSum + smpSum +shpSum +tnocSum + twcSum + mbsSum + mbaSum +mbpSum;
		total2 = dmpSum + dhpSum + lmpSum + lmtSum + lhpSum + lppSum+ smpSum +shpSum +tnocSum + twcSum + mbsSum + mbaSum +mbpSum;

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

		// Update hidden fields with Laptop Medium Performance Touch details
		$('#lmtTitleHidden').val(lmtTitle);
		$('#lmtPriceHidden').val(lmtPrice);
		$('#lmtSum').val(lmtSum);

		// Update hidden fields with Laptop High Performance details
		$('#lhpTitleHidden').val(lhpTitle);
		$('#lhpPriceHidden').val(lhpPrice);
		$('#lhpSum').val(lhpSum);

		// Update hidden fields with Laptop Peripherie Paket details
		$('#lppTitleHidden').val(lppTitle);
		$('#lppPriceHidden').val(lppPrice);
		$('#lppSum').val(lppSum);

		// Update hidden fields with Server Medium Performance details
		$('#smpTitleHidden').val(smpTitle);
		$('#smpPriceHidden').val(smpPrice);
		$('#smpSum').val(smpSum);

		// Update hidden fields with Server High Performance details
		$('#shpTitleHidden').val(shpTitle);
		$('#shpPriceHidden').val(shpPrice);
		$('#shpSum').val(shpSum);

		// Update hidden fields with Tablet ohne 4G details
		$('#tnocTitleHidden').val(tnocTitle);
		$('#tnocPriceHidden').val(tnocPrice);
		$('#tnocSum').val(tnocSum);

		// Update hidden fields with Tablet ohne 4G details
		$('#twcTitleHidden').val(twcTitle);
		$('#twcPriceHidden').val(twcPrice);
		$('#twcSum').val(twcSum);

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
			$('#lmtSumTot').html('');
			$('#lhpSumTot').html('');
			$('#lppSumTot').html('');
			$('#smpSumTot').html('');
			$('#shpSumTot').html('');
			$('#tnocSumTot').html('');
			$('#twcSumTot').html('');
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
		if (summaryLineName == 'lmtSumTot') {
			$('#lmtSumTot').html('');
		}
		if (summaryLineName == 'lhpSumTot') {
			$('#lhpSumTot').html('');
		}
		if (summaryLineName == 'lppSumTot') {
			$('#lppSumTot').html('');
		}
		if (summaryLineName == 'smpSumTot') {
			$('#smpSumTot').html('');
		}
		if (summaryLineName == 'shpSumTot') {
			$('#shpSumTot').html('');
		}
		if (summaryLineName == 'tnocSumTot') {
			$('#tnocSumTot').html('');
		}
		if (summaryLineName == 'twcSumTot') {
			$('#twcSumTot').html('');
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

		if (singleOptionName == 'lmt'){
			$('#lmt').prop('checked', true);
		}

		if (singleOptionName == 'lhp'){
			$('#lhp').prop('checked', true);
		}

		if (singleOptionName == 'lpp'){
			$('#lpp').prop('checked', true);
		}

		if (singleOptionName == 'smp'){
			$('#smp').prop('checked', true);
		}

		if (singleOptionName == 'shp'){
			$('#shp').prop('checked', true);
		}

		if (singleOptionName == 'tnoc'){
			$('#tnoc').prop('checked', true);
		}

		if (singleOptionName == 'twc'){
			$('#twc').prop('checked', true);
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
			$('#lmt').prop('checked', false);
			$('#lhp').prop('checked', false);
			$('#lpp').prop('checked', false);
			$('#smp').prop('checked', false);
			$('#shp').prop('checked', false);
			$('#tnoc').prop('checked', false);
			$('#twc').prop('checked', false);
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
		if (optionName == 'lmt') {
			$('#lmt').prop('checked', false);
		}
		if (optionName == 'lhp') {
			$('#lhp').prop('checked', false);
		}
		if (optionName == 'lpp') {
			$('#lpp').prop('checked', false);
		}
		if (optionName == 'smp') {
			$('#smp').prop('checked', false);
		}
		if (optionName == 'shp') {
			$('#shp').prop('checked', false);
		}
		if (optionName == 'tnoc') {
			$('#tnoc').prop('checked', false);
		}
		if (optionName == 'twc') {
			$('#twc').prop('checked', false);
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

	// When Laptop Medium Performance Touch is clicked
	$('#lmt').on('click', function () {
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

	// When Tablet ohne 4G is clicked
	$('#tnoc').on('click', function () {
		updateSummary();
		saveState();
		reValidateTotal();
	});

	// When Tablet mit 4G is clicked
	$('#twc').on('click', function () {
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

	// Delete Laptop Medium Performance Touch in summary list
	$('#lmtSumTot').delegate('#lmtSumTotReset', 'click', function () {
		clearSummaryLine('lmtSumTot');
		resetCheckbox('lmt');
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

	// Delete Tablet ohne 4G  in summary list
	$('#tnocSumTot').delegate('#tnocSumTotReset', 'click', function () {
		clearSummaryLine('tnocSumTot');
		resetCheckbox('tnoc');
		updateSummary();
		saveState();
		reValidateTotal();
	});

	// Delete Tablet mit 4G in summary list
	$('#twcSumTot').delegate('#twcSumTotReset', 'click', function () {
		clearSummaryLine('twcSumTot');
		resetCheckbox('twc');
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
		dmpMin = 1,
		dmpMax = 50;

	$rangeDMP.ionRangeSlider({
		skin: 'round',
		type: 'single',
		min: dmpMin,
		max: dmpMax,
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
		if (val < dmpMin) {
			val = dmpMin;
			$inputDMP.val(dmpMin);
		} else if (val > dmpMax) {
			val = dmpMax;
			$inputDMP.val(dmpMax);
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
		dhpMin = 1,
		dhpMax = 50;

	$rangeDHP.ionRangeSlider({
		skin: 'round',
		type: 'single',
		min: dhpMin,
		max: dhpMax,
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
		if (val < dhpMin) {
			val = dhpMin;
			$inputDHP.val(dhpMin);
		} else if (val > dhpMax) {
			val = dhpMax;
			$inputDHP.val(dhpMax);
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
		lmpMin = 1,
		lmpMax = 50;

	$rangeLMP.ionRangeSlider({
		skin: 'round',
		type: 'single',
		min: lmpMin,
		max: lmpMax,
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
		if (val < lmpMin) {
			val = lmpMin;
			$inputLMP.val(lmpMin);
		} else if (val > lmpMax) {
			val = lmpMax;
			$inputLMP.val(lmpMax);
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
	//      RANGE SLIDER Laptop Medium Performance Touch
	// =====================================================
	var $rangeLMT = $('#lmtRangeSlider'),
		$inputLMT = $('#lmtQty'),
		instanceLMT,
		lmtMin = 1,
		lmtMax = 50;

	$rangeLMT.ionRangeSlider({
		skin: 'round',
		type: 'single',
		min: lmtMin,
		max: lmtMax,
		from: 1,
		hide_min_max: true,
		onStart: function (data) {
			$inputLMT.prop('value', data.from);
		},
		onChange: function (data) {
			$inputLMT.prop('value', data.from);
			if (!lmtIsChecked) {
				activateSingleOption('lmt');
			}
			updateSummary();
			reValidateTotal();
			saveState();
		}
	});

	instanceLMT = $rangeLMT.data("ionRangeSlider");

	$inputLMT.on('input', function () {
		var val = $(this).prop('value');

		// Validate
		if (val < lmtMin) {
			val = lmtMin;
			$inputLMT.val(lmtMin);
		} else if (val > lmtMax) {
			val = lmtMax;
			$inputLMT.val(lmtMax);
		}

		instanceLMT.update({
			from: val
		});

		if (!lmtIsChecked) {
			activateSingleOption('lmt');
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
		lhpMin = 1,
		lhpMax = 50;

	$rangeLHP.ionRangeSlider({
		skin: 'round',
		type: 'single',
		min: lhpMin,
		max: lhpMax,
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
		if (val < lhpMin) {
			val = lhpMin;
			$inputLHP.val(lhpMin);
		} else if (val > lhpMax) {
			val = lhpMax;
			$inputLHP.val(lhpMax);
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
		lppMin = 1,
		lppMax = 100;

	$rangeLPP.ionRangeSlider({
		skin: 'round',
		type: 'single',
		min: lppMin,
		max: lppMax,
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
		if (val < lppMin) {
			val = lppMin;
			$inputLPP.val(lppMin);
		} else if (val > lppMax) {
			val = lppMax;
			$inputLPP.val(lppMax);
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
	//      RANGE SLIDER Server Medium Performance
	// =====================================================
	var $rangeSMP = $('#smpRangeSlider'),
		$inputSMP = $('#smpQty'),
		instanceSMP,
		smpMin = 1,
		smpMax = 5;

	$rangeSMP.ionRangeSlider({
		skin: 'round',
		type: 'single',
		min: smpMin,
		max: smpMax,
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
		if (val < smpMin) {
			val = smpMin;
			$inputSMP.val(smpMin);
		} else if (val > smpMax) {
			val = smpMax;
			$inputSMP.val(smpMax);
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
		shpMin = 1,
		shpMax = 5;

	$rangeSHP.ionRangeSlider({
		skin: 'round',
		type: 'single',
		min: shpMin,
		max: shpMax,
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
		if (val < shpMin) {
			val = shpMin;
			$inputSHP.val(shpMin);
		} else if (val > shpMax) {
			val = shpMax;
			$inputSHP.val(shpMax);
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
	//      RANGE SLIDER Tablet ohne 4G
	// =====================================================
	var $rangeTNOC = $('#tnocRangeSlider'),
		$inputTNOC = $('#tnocQty'),
		instanceTNOC,
		tnocMin = 1,
		tnocMax = 50;

	$rangeTNOC.ionRangeSlider({
		skin: 'round',
		type: 'single',
		min: tnocMin,
		max: tnocMax,
		from: 1,
		hide_min_max: true,
		onStart: function (data) {
			$inputTNOC.prop('value', data.from);
		},
		onChange: function (data) {
			$inputTNOC.prop('value', data.from);
			if (!tnocIsChecked) {
				activateSingleOption('tnoc');
			}
			updateSummary();
			reValidateTotal();
			saveState();
		}
	});

	instanceTNOC = $rangeTNOC.data("ionRangeSlider");

	$inputTNOC.on('input', function () {
		var val = $(this).prop('value');

		// Validate
		if (val < tnocMin) {
			val = tnocMin;
			$inputTNOC.val(tnocMin);
		} else if (val > tnocMax) {
			val = tnocMax;
			$inputTNOC.val(tnocMax);
		}

		instanceTNOC.update({
			from: val
		});

		if (!tnocIsChecked) {
			activateSingleOption('tnoc');
		}

		updateSummary();
		reValidateTotal();
		saveState();

	});

	// =====================================================
	//      RANGE SLIDER Tablet mit 4G
	// =====================================================
	var $rangeTWC = $('#twcRangeSlider'),
		$inputTWC = $('#twcQty'),
		instanceTWC,
		twcMin = 1,
		twcMax = 50;

	$rangeTWC.ionRangeSlider({
		skin: 'round',
		type: 'single',
		min: twcMin,
		max: twcMax,
		from: 1,
		hide_min_max: true,
		onStart: function (data) {
			$inputTWC.prop('value', data.from);
		},
		onChange: function (data) {
			$inputTWC.prop('value', data.from);
			if (!twcIsChecked) {
				activateSingleOption('twc');
			}
			updateSummary();
			reValidateTotal();
			saveState();
		}
	});

	instanceTWC = $rangeTWC.data("ionRangeSlider");

	$inputTWC.on('input', function () {
		var val = $(this).prop('value');

		// Validate
		if (val < twcMin) {
			val = twcMin;
			$inputTWC.val(twcMin);
		} else if (val > twcMax) {
			val = twcMax;
			$inputTWC.val(twcMax);
		}

		instanceTWC.update({
			from: val
		});

		if (!twcIsChecked) {
			activateSingleOption('twc');
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
		mbaMin = 1,
		mbaMax = dmpMax+dhpMax+lmpMax+lhpMax;

	$rangeMBA.ionRangeSlider({
		skin: 'round',
		type: 'single',
		min: mbaMin,
		max: mbaMax,
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
		if (val < mbaMin) {
			val = mbaMin;
			$inputMBA.val(mbaMin);
		} else if (val > mbaMax) {
			val = mbaMax;
			$inputMBA.val(mbaMax);
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
		mbsMin = 1,
		mbsMax = dmpMax+dhpMax+lmpMax+lhpMax;

	$rangeMBS.ionRangeSlider({
		skin: 'round',
		type: 'single',
		min: mbsMin,
		max: mbsMax,
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
		if (val < mbsMin) {
			val = mbsMin;
			$inputMBS.val(mbsMin);
		} else if (val > mbsMax) {
			val = mbsMax;
			$inputMBS.val(mbsMax);
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
		mbpMin = 1,
		mbpMax = dmpMax+dhpMax+lmpMax+lhpMax;

	$rangeMBP.ionRangeSlider({
		skin: 'round',
		type: 'single',
		min: mbpMin,
		max: mbpMax,
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
		if (val < mbpMin) {
			val = mbpMin;
			$inputMBP.val(mbpMin);
		} else if (val > mbpMax) {
			val = mbpMax;
			$inputMBP.val(mbpMax);
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
