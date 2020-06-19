$(document).ready(function(){
	
	//Encyclopedia/Release Note切換
	$(function(){
	  var _showTab = 0;
	  var $defaultLi = $('ul.sub_menu li').eq(_showTab).addClass('active');
	  $($defaultLi.find('a').attr('href')).siblings().hide();
	  $('ul.sub_menu li').click(function() {
	    var $this = $(this),
	      _clickTab = $this.find('a').attr('href');
	    $this.addClass('active').siblings('.active').removeClass('active');
	    $(_clickTab).stop(false, true).fadeIn().siblings().hide();
	    return false;
	  }).find('a').focus(function(){
	    this.blur();
	  });
	});

	//menu
	$('.menu .card-body li a').attr('target','_blank');
	//menu-open
	$('.hamburger').click(function(){
		$('.menu').toggleClass('menu-open');
		$('header').toggleClass('menu-open');
		$('.content').toggleClass('menu-open');
		$('footer').toggleClass('menu-open');
	});
	//menu-close
	$('.menu-close-btn').click(function(){
		$('.menu-open').removeClass('menu-open');
	});

	//APP Patrol search switch
	$('input[type=radio][name=searchBy]').click(function() {
	    var value = $(this).val();
	    $(value).show();
	    $(value).siblings().hide();
	});
	$('#app .release-note .version-table a').click(function() {
		var show = $(this).attr('href');
		$('#app .content-wrap').removeClass('show');
		$(show).addClass('show');
		return false;
	});

	//Encyclopedia-table
	$('#vm #ency_search_btn').click(function(){
		
		$('.detail').hide();
		$('.encyclopedia .intro').hide();
		$('.encyclopedia .list').show();
		$('#EncyTable').dataTable({
			"destroy": true,
	    	"scrollX": true,
	    	"lengthChange": false,
	    	"ordering": false,
	    	"searching": false,
	    	"pageLength": 20,
	    	"info": true,
	    	"pagingType": 'full_numbers',
	    	"language": {
			    "paginate": {
			      "previous": "<i class='fas fa-angle-left'></i>",
			      "next": "<i class='fas fa-angle-right'></i>",
			      "first": "<i class='fas fa-angle-double-left'></i>",
			      "last": "<i class='fas fa-angle-double-right'></i>",
			    },
		  	},
		  	"columns": [
			    { "width": "30%" },
			    { "width": "55%" },
			    { "width": "15%" },
			  ]
	    });
	    $("#encyclopedia .dataTables_info").insertAfter("#encyclopedia .dataTables_paginate");
	    var wdth = $(window).width();
	    if (wdth <= 320){
	    	var description = $('#vm #EncyTable tbody tr td:nth-child(2)')
	    	var $len = 30;
	    	$(description).each(function(){
		        if($(this).text().length > $len){
		            var text = $(this).text().substring(0,$len-1)+"...";
		            $(this).text(text);
		        }
		    });

	    }else{
	    	var description = $('#vm #EncyTable tbody tr td:nth-child(2)')
	    	var $len = 100;
	    	$(description).each(function(){
		        if($(this).text().length > $len){
		            var text = $(this).text().substring(0,$len-1)+"...";
		            $(this).text(text);
		        }
		    });
	    }
	});

	$('#id #ency_search_btn').click(function(){
		$('.detail').hide();
		$('.encyclopedia .intro').hide();
		$('.encyclopedia .list').show();
		
		$('#EncyTable').dataTable({
			"destroy": true,
	    	"scrollX": true,
	    	"lengthChange": false,
	    	"ordering": false,
	    	"searching": false,
	    	"pageLength": 20,
	    	"info": true,
	    	"pagingType": 'full_numbers',
	    	"language": {
			    "paginate": {
			      "previous": "<i class='fas fa-angle-left'></i>",
			      "next": "<i class='fas fa-angle-right'></i>",
			      "first": "<i class='fas fa-angle-double-left'></i>",
			      "last": "<i class='fas fa-angle-double-right'></i>",
			    },
		  	},
		  	"columns": [
			    { "width": "30%" },
			    { "width": "110px" },
			    { "width": "40%" },
			    { "width": "100px" },
			  ]
	    });

	    $("#encyclopedia .dataTables_info").insertAfter("#encyclopedia .dataTables_paginate");

	    //RWD
	    var wdth = $(window).width();

	    if (wdth <= 767){
	    	var description = $('#id #EncyTable tbody tr td:nth-child(3)');
	    	var $len = 30;
	    	$(description).each(function(){
		        if($(this).text().length > $len){
		            var text = $(this).text().substring(0,$len-1)+"...";
		            $(this).text(text);
		        }
		    });

	    }else{
	    	var description = $('#id #EncyTable tbody tr td:nth-child(3)');
	    	var $len = 100;
	    	$(description).each(function(){
		        if($(this).text().length > $len){
		            var text = $(this).text().substring(0,$len-1)+"...";
		            $(this).text(text);
		        }
		    });
	    }
	});

	$('#app #ency_search_btn_name').click(function(){
		
		$('#search-by-name .detail').hide();
		$('#search-by-name .ency-container .name-list').show();
		$('#EncyTableName').dataTable({
			"destroy": true,
	    	"scrollX": true,
	    	"lengthChange": false,
	    	"ordering": false,
	    	"searching": false,
	    	"pageLength": 20,
	    	"info": true,
	    	"pagingType": 'full_numbers',
	    	"language": {
			    "paginate": {
			      "previous": "<i class='fas fa-angle-left'></i>",
			      "next": "<i class='fas fa-angle-right'></i>",
			      "first": "<i class='fas fa-angle-double-left'></i>",
			      "last": "<i class='fas fa-angle-double-right'></i>",
			    },
		  	},
		  	"columns": [
			    { "width": "40%" },
			    { "width": "20%" },
			    { "width": "40%" },
			  ]
	    });

	    $("#encyclopedia .dataTables_info").insertAfter("#encyclopedia .dataTables_paginate");
	});

	$('#app #search-by-cat .cat a').click(function(){
		
		$('#search-by-cat .detail').hide();
		$('#search-by-cat .ency-container .search-cat-list').show();
		$('#EncyTableCat').dataTable({
			"destroy": true,
	    	"scrollX": true,
	    	"lengthChange": false,
	    	"ordering": false,
	    	"searching": false,
	    	"pageLength": 20,
	    	"info": true,
	    	"pagingType": 'full_numbers',
	    	"language": {
			    "paginate": {
			      "previous": "<i class='fas fa-angle-left'></i>",
			      "next": "<i class='fas fa-angle-right'></i>",
			      "first": "<i class='fas fa-angle-double-left'></i>",
			      "last": "<i class='fas fa-angle-double-right'></i>",
			    },
		  	},
		  	"columns": [
			    { "width": "40%" },
			    { "width": "20%" },
			    { "width": "40%" },
			  ]
	    });

	    $("#encyclopedia .dataTables_info").insertAfter("#encyclopedia .dataTables_paginate");

	    var catName = $(this).find('.cat-name').text();
	    var wdth = $(window).innerWidth();
	    if (wdth > 1200){
	    	$('#app .search-switch .switch .selected-cat').css('display','inline-block');
	    }else{
	    	$('#app .search-switch .switch .selected-cat').css('display','flex');
	    }
	    
	    $('#app .search-switch .switch .selected-cat .text').html(catName);
	    $('#app #search-by-cat .cat-list').hide();

	    return false;
	});

	$('#app .search-switch .selected-cat .text').click(function() {
		$('#app #search-by-cat .cat-list').toggle();
	});

	//ReleaseNote-table
	$('#model_search_btn').click(function(){
		$('.release-note .intro').hide();
		$('.release-note .list').show();
		$('#ReleTable').dataTable({
			"destroy": true,
	    	"scrollX": true,
	    	"lengthChange": false,
	    	"ordering": false,
	    	"searching": false,
	    	"pageLength": 20,
	    	"info": true,
	    	"pagingType": 'full_numbers',
	    	"language": {
			    "paginate": {
			      "previous": "<i class='fas fa-angle-left'></i>",
			      "next": "<i class='fas fa-angle-right'></i>",
			      "first": "<i class='fas fa-angle-double-left'></i>",
			      "last": "<i class='fas fa-angle-double-right'></i>",
			    },
		  	}
	    });
	    $("#release_note .dataTables_info").insertAfter("#release_note .dataTables_paginate");
	    var searchby = $('.model-version-select').children('option:selected').val();
	    var model = $('.model-select').children('option:selected').val();
	    var date = $('.date-picker').text();
	    $('.searchby .kind').html(searchby);
	    $('.searchby .name').html(model);
	    $('.searchby .date').html(date);
	});

	$('#version_search_btn').click(function(){
		$('.release-note .intro').hide();
		$('.release-note .list').show();
		$('#ReleTable').dataTable({
			"destroy": true,
	    	"scrollX": true,
	    	"lengthChange": false,
	    	"ordering": false,
	    	"searching": false,
	    	"pageLength": 20,
	    	"info": true,
	    	"pagingType": 'full_numbers',
	    	"language": {
			    "paginate": {
			      "previous": "<i class='fas fa-angle-left'></i>",
			      "next": "<i class='fas fa-angle-right'></i>",
			      "first": "<i class='fas fa-angle-double-left'></i>",
			      "last": "<i class='fas fa-angle-double-right'></i>",
			    },
		  	}
	    });
	    $("#release_note .dataTables_info").insertAfter("#release_note .dataTables_paginate");
	    var searchby = $('.model-version-select').children('option:selected').val();
	    var version_number = $('.version-number').val();
	    $('.searchby .kind').html(searchby);
	    $('.searchby .name').html(version_number);
	    $('.searchby .date').html('&nbsp;');
	});

	$('.version-search').hide();
	$('.model-version-select select').on('change', function() {
	  var class_name = $(this).children('option:selected').val();
	  if (class_name == 'Version'){
	  	$('.version-search').show();
	  	$('.model-search').hide();
	  }else{
	  	$('.model-search').show();
	  	$('.version-search').hide();
	  }
	});

	$('#EncyTable tbody tr').click(function(){
		$('.list').hide();
		$('.detail').show();
		$('html, body').animate({
	        scrollTop: $(".search-bar").offset().top
	    }, 1000);
	    $('.check').removeClass('check');
	    $(this).addClass('check');
	});

	$('#id .detail .back').click(function(){
		$('.detail').hide();
		$('.list').show();
		$('html, body').animate({
	        scrollTop: $('table').offset().top
	    }, 1000);
	});
	$('#vm .detail .back').click(function(){
		$('.detail').hide();
		$('.list').show();
		$('html, body').animate({
	        scrollTop: $('table').offset().top
	    }, 1000);
	});

	$('#id .detail .back_text').click(function(){
		$('.detail').hide();
		$('.list').show();
		$('html, body').animate({
	        scrollTop: $('table').offset().top
	    }, 1000);
	});
	$('#vm .detail .back_text').click(function(){
		$('.detail').hide();
		$('.list').show();
		$('html, body').animate({
	        scrollTop: $('table').offset().top
	    }, 1000);
	});

	$('#EncyTableName tbody tr').click(function(){
		$('#search-by-name .name-list').hide();
		$('#search-by-name .detail').show();
	    $('.check').removeClass('check');
	    $(this).addClass('check');
	});

	$('#EncyTableCat tbody tr').click(function(){
		$('#search-by-cat .search-cat-list').hide();
		$('#search-by-cat .detail').show();
	    $('.check').removeClass('check');
	    $(this).addClass('check');
	});

	$('#search-by-name .detail .back').click(function(){
		$('#search-by-name .detail').hide();
		$('#search-by-name .name-list').show();
	});

	$('#search-by-name .detail .back_text').click(function(){
		$('#search-by-name .detail').hide();
		$('#search-by-name .name-list').show();
		return false;
	});

	$('#EncyTableName tbody tr').click(function(){
		$('#search-by-name .name-list').hide();
		$('#search-by-name .detail').show();
	    $('.check').removeClass('check');
	    $(this).addClass('check');
	});

	$('#search-by-name .detail .back').click(function(){
		$('#search-by-name .detail').hide();
		$('#search-by-name .name-list').show();
	});

	$('#search-by-name .detail .back_text').click(function(){
		$('#search-by-name .detail').hide();
		$('#search-by-name .name-list').show();
		return false;
	});

	$('#search-by-cat .detail .back').click(function(){
		$('#search-by-cat .detail').hide();
		$('#search-by-cat .search-cat-list').show();
	});

	$('#search-by-cat .detail .back_text').click(function(){
		$('#search-by-cat .detail').hide();
		$('#search-by-cat .search-cat-list').show();
		return false;
	});



	$('.paginate_button').click(function(){
		// $('html, body').animate({
	 //        scrollTop: $('.breadcrumbs').offset().top
	 //    }, 1000);
	 alert('click');
	});

	$('[data-toggle="tooltip"]').tooltip();
	$('.selectpicker').selectpicker({
		dropupAuto: false, 
		//mobile: true,
	});

	$('.drp-buttons button').wrap('<div class="right"></div>');
	//footer-year
	var currentYear = (new Date).getFullYear();
	$(".current-year").text( (new Date).getFullYear() );

	$('.footer-column .more-btn').click(function() {
		$('.more').toggleClass('open');
		$('.more').toggleClass('close');
		$(this).toggle();
		$('.less-btn').toggle();
	});

	$('.footer-column .less-btn').click(function() {
		$('.more').toggleClass('open');
		$('.more').toggleClass('close');
		$(this).toggle();
		$('.more-btn').toggle();
	});

	$('.footer-column li a').attr({
		target: '_blank',
	});

	$('.social-media li a').attr({
		target: '_blank',
	});

	$('nav .desktop-menu a').attr({
		target: '_blank',
	});

	$('.gotop').click(function(){
		$('html, body').animate({
	        scrollTop: 0,
	    }, 500);
	    return false;
	});

});

$(document).ready(function(){

	var wdth = $(window).width();
	if (wdth >= 768){
		$.fn.DataTable.ext.pager.numbers_length = 10;
	}else{
		$.fn.DataTable.ext.pager.numbers_length = 5;
	}
	
	
	$(function() {

	    var start = moment().subtract(6, 'days');
	    var end = moment();
	    var earliest = moment().subtract(1, 'years');

	    function cb(start, end) {
	        $('.date-picker span').html(start.format('YYYY/MM/DD') + ' ~ ' + end.format('YYYY/MM/DD'));
	    }

	    $('.date-picker').daterangepicker({
	        opens: 'left',
	        startDate: start,
	        endDate: end,
	        ranges: {
	           'Today': [moment(), moment()],
	           'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
	           'Last 7 Days': [moment().subtract(6, 'days'), moment()],
	           'Last 30 Days': [moment().subtract(29, 'days'), moment()],
	           // 'This Month': [moment().startOf('month'), moment().endOf('month')],
	           'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
	        },
	        maxSpan: {
		        'days': 30
		    },
		    maxDate: end,
		    minDate: earliest,
	    }, cb);

	    cb(start, end);
	});
});

$(window).scroll(function() {
    var top = $(this).scrollTop();
    if ( top < 20 ){
    	$('nav').addClass('full');
    } else{
    	$('nav').removeClass('full');
    }
});

$(window).scroll(function() {
    var top = $(this).scrollTop();
    if ( top > 0 ){
    	$('.gotop').fadeIn();
    } else{
    	$('.gotop').fadeOut();
    }
});
