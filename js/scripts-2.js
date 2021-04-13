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
	//      MOBILE MENU
	// =====================================================
	var $menu = $("nav#menu").mmenu({
		"extensions": ["pagedim-black", "theme-dark"], // "theme-dark" can be changed to: "theme-white"
		counters: true,
		keyboardNavigation: {
			enable: true,
			enhance: true
		},
		navbar: {
			title: 'MENU'
		},
		navbars: [{ position: 'bottom', content: ['<a href="#">© 2021 Costy</a>'] }]
	},
		{
			// configuration
			clone: true,
		});
	var $icon = $("#hamburger");
	var API = $menu.data("mmenu");
	$icon.on("click", function () {
		API.open();
	});
	API.bind("open:finish", function () {
		setTimeout(function () {
			$icon.addClass("is-active");
		}, 100);
	});
	API.bind("close:finish", function () {
		setTimeout(function () {
			$icon.removeClass("is-active");
		}, 100);
	});

	// =====================================================
	//      FAQ NICE SCROLL
	// =====================================================
	var position;

	$('a.nice-scroll-faq').on('click', function (e) {
		e.preventDefault();
		position = $($(this).attr('href')).offset().top - 125;
		$('body, html').animate({
			scrollTop: position
		}, 500, 'easeInOutExpo');
	});

	$('ul#faqNav li a').on('click', function () {
		$('ul#faqNav li a.active').removeClass('active');
		$(this).addClass('active');
	});

	// =====================================================
	//      FAQ ACCORDION
	// =====================================================
	function toggleChevron(e) {
		$(e.target).prev('.card-header').find('i.indicator').toggleClass('icon-minus icon-plus');
	}
	$('.faq-accordion').on('hidden.bs.collapse shown.bs.collapse', toggleChevron);

	// =====================================================
	//      GALLERY
	// =====================================================
	// Single Image
	$('#openImage1').magnificPopup({
		items: {
			src: 'img/gallery/1.jpg',
			title: 'Image related to Option Single 1'
		},
		type: 'image',
		fixedContentPos: false,
	});

	$('#openSimpleMailSummaryImage').magnificPopup({
		items: {
			src: 'img/presentation/simple-mail-summary.jpg',
			title: 'Simple Mail Summary'
		},
		type: 'image',
		fixedContentPos: false,
	});

	// Single Video
	$('#openVideo1').magnificPopup({
		items: {
			src: 'https://vimeo.com/158520582'
		},
		type: 'iframe',
		fixedContentPos: false,
	});

	// Image Gallery
	$('#openGallery1').magnificPopup({
		items: [
			{
				src: 'img/gallery/1.jpg',
				title: 'Image related to Option 1.1'
			},
			{
				src: 'img/gallery/2.jpg',
				title: 'Image related to Option 1.2'
			},
			{
				src: 'img/gallery/3.jpg',
				title: 'Image related to Option 1.3'
			}
		],
		gallery: {
			enabled: true
		},
		type: 'image',
		fixedContentPos: false,
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

	var lhpIsChecked = false;
	var lhpTitle = '';
	var lhpPrice = 0;
	var lhpQuantity = 0;
	var lhpSum = 0;

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

		// Update total in order summary
		total = dmpSum + dhpSum + lmpSum + lhpSum + sspSum + smpSum +shpSum;
		total2 = dmpSum + dhpSum + lmpSum + lhpSum + sspSum + smpSum +shpSum;

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
			$('#sspSumTot').html('');
			$('#smpSumTot').html('');
			$('#shpSumTot').html('');
			$('#systemabbildSumTot').html('');
			$('#option1SingleSum').html('');
			$('#option2SingleSum').html('');
			$('#option3SingleSum').html('');
			$('#extraOption1Sum').html('');
			$('#extraOption2Sum').html('');
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
		if (summaryLineName == 'sspSumTot') {
			$('#sspSumTot').html('');
		}
		if (summaryLineName == 'smpSumTot') {
			$('#smpSumTot').html('');
		}
		if (summaryLineName == 'shpSumTot') {
			$('#shpSumTot').html('');
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

		if (singleOptionName == 'ssp'){
			$('#ssp').prop('checked', true);
		}

		if (singleOptionName == 'smp'){
			$('#smp').prop('checked', true);
		}

		if (singleOptionName == 'shp'){
			$('#shp').prop('checked', true);
		}
	}

	// Function to reset the given checkbox
	function resetCheckbox(optionName) {

		if (optionName == 'all') {
			$('#dmp').prop('checked', false);
			$('#dhp').prop('checked', false);
			$('#lmp').prop('checked', false);
			$('#lhp').prop('checked', false);
			$('#ssp').prop('checked', false);
			$('#smp').prop('checked', false);
			$('#shp').prop('checked', false);
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
		if (optionName == 'ssp') {
			$('#ssp').prop('checked', false);
		}
		if (optionName == 'smp') {
			$('#smp').prop('checked', false);
		}
		if (optionName == 'shp') {
			$('#shp').prop('checked', false);
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
	//      RANGE SLIDER 1
	// =====================================================
	var $range = $('#option1SingleRangeSlider'),
		$input = $('#option1SingleQty'),
		instance,
		min = 1,
		max = 100;

	$range.ionRangeSlider({
		skin: 'round',
		type: 'single',
		min: min,
		max: max,
		from: 50,
		hide_min_max: true,
		onStart: function (data) {
			$input.prop('value', data.from);
		},
		onChange: function (data) {
			$input.prop('value', data.from);
			if (!singleOption1IsChecked) {
				activateSingleOption('option1Single');
			}
			updateSummary();
			reValidateTotal();
			saveState();
		}
	});

	instance = $range.data("ionRangeSlider");

	$input.on('input', function () {
		var val = $(this).prop('value');

		// Validate
		if (val < min) {
			val = min;
			$input.val(min);
		} else if (val > max) {
			val = max;
			$input.val(max);
		}

		instance.update({
			from: val
		});

		if (!singleOption1IsChecked) {
			activateSingleOption('option1Single');
		}

		updateSummary();
		reValidateTotal();
		saveState();

	});

	/*
	// =====================================================
	//      RANGE SLIDER 2
	// =====================================================
	var $range2 = $('#option2SingleRangeSlider'),
		$input2 = $('#option2SingleQty'),
		instance2,
		min2 = 0,
		max2 = 50;

	$range2.ionRangeSlider({
		skin: 'round',
		type: 'single',
		min: min2,
		max: max2,
		from: 25,
		step: 5,
		hide_min_max: true,
		onStart: function (data) {
			$input2.prop('value', data.from);
		},
		onChange: function (data) {
			$input2.prop('value', data.from);
			if (!singleOption2IsChecked) {
				activateSingleOption('option2Single');
			}
			updateSummary();
			reValidateTotal();
			saveState();
		}
	});

	instance2 = $range2.data("ionRangeSlider");

	$input2.on('input', function () {
		var val2 = $(this).prop('value');

		// Validate
		if (val2 < min2) {
			val2 = min2;
			$input2.val(min2);
		} else if (val2 > max2) {
			val2 = max2;
			$input2.val(max2);
		}

		instance2.update({
			from: val2
		});

		if (!singleOption2IsChecked) {
			activateSingleOption('option2Single');
		}

		updateSummary();
		reValidateTotal();
		saveState();

	});

	// =====================================================
	//      RANGE SLIDER 3
	// =====================================================
	var $range3 = $('#option3SingleRangeSlider'),
		$input3 = $('#option3SingleQty'),
		instance3,
		min3 = 0,
		max3 = 100;

	$range3.ionRangeSlider({
		skin: 'round',
		type: 'single',
		min: min3,
		max: max3,
		from: 50,
		step: 10,
		hide_min_max: true,
		onStart: function (data) {
			$input3.prop('value', data.from);
		},
		onChange: function (data) {
			$input3.prop('value', data.from);
			if (!singleOption3IsChecked) {
				activateSingleOption('option3Single');
			}
			updateSummary();
			reValidateTotal();
			saveState();
		}
	});

	instance3 = $range3.data("ionRangeSlider");

	$input3.on('input', function () {
		var val3 = $(this).prop('value');

		// Validate
		if (val3 < min3) {
			val3 = min3;
			$input3.val(min3);
		} else if (val3 > max3) {
			val3 = max3;
			$input3.val(max3);
		}

		instance3.update({
			from: val3
		});

		if (!singleOption3IsChecked) {
			activateSingleOption('option3Single');
		}

		updateSummary();
		reValidateTotal();
		saveState();

	});
	*/

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
