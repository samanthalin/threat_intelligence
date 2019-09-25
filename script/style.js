$(document).ready(function(){
	$(function(){
	  // 預設顯示第一個 Tab
	  var _showTab = 0;
	  var $defaultLi = $('ul.sub_menu li').eq(_showTab).addClass('active');
	  $($defaultLi.find('a').attr('href')).siblings().hide();
	 
	  // 當 li 頁籤被點擊時...
	  // 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
	  $('ul.sub_menu li').click(function() {
	    // 找出 li 中的超連結 href(#id)
	    var $this = $(this),
	      _clickTab = $this.find('a').attr('href');
	    // 把目前點擊到的 li 頁籤加上 .active
	    // 並把兄弟元素中有 .active 的都移除 class
	    $this.addClass('active').siblings('.active').removeClass('active');
	    // 淡入相對應的內容並隱藏兄弟元素
	    $(_clickTab).stop(false, true).fadeIn().siblings().hide();
	 
	    return false;
	  }).find('a').focus(function(){
	    this.blur();
	  });
	});


	$('#ency_search_btn').click(function(){
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
	    	"info": false,
	    });
	});

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
	    	"info": false,
	    });
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
	    	"info": false,
	    });
	    var searchby = $('.model-version-select').children('option:selected').val();
	    var version_number = $('.version-number').val();
	    $('.searchby .kind').html(searchby);
	    $('.searchby .name').html(version_number);
	    $('.searchby .date').html('&nbsp;');
	});

	$('.version-search').hide();
	$('.model-version-select').on('change', function() {
	  var class_name = $(this).children('option:selected').val();
	  if (class_name == 'version'){
	  	$('.version-search').show();
	  	$('.model-search').hide();
	  }else{
	  	$('.model-search').show();
	  	$('.version-search').hide();
	  }
	});

	$('#EncyTable tr').click(function(){
		$('.list').hide();
		$('.detail').show();
		$('html, body').animate({
	        scrollTop: $(".search-bar").offset().top
	    }, 1000);
	    $('.check').removeClass('check');
	    $(this).addClass('check');
	});

	$('.detail .back').click(function(){
		$('.detail').hide();
		$('.list').show();
		$('html, body').animate({
	        scrollTop: $('table').offset().top
	    }, 1000);
	});

	$('[data-toggle="tooltip"]').tooltip();

});

$(document).ready(function(){
	$.fn.DataTable.ext.pager.numbers_length = 10;
	
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

