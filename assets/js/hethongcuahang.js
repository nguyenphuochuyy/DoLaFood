
$(document).ready(function (){
  var public_spreadsheet_url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRPNCj5me4-UQdDlH9jYnvjMRzy_e_ivxr72s1WE_ATxkSHAc8r7_MA_BmocldULJasQjxRe1-oFRBG/pub?output=csv";
  var data;
  Papa.parse(public_spreadsheet_url, {
    header: true,
    download: true,
    dynamicTyping: true,
    complete: function(results) {
      var result = results.data;
      var dataFix = result;
      showlocation();		
      $('.store-list .store-url').click(function(){
        var urls = $(this).attr('data-url');
        $('.store-list').removeClass('active');
        $(this).closest('.store-list').addClass("active");
        $('.wrapcontact').addClass('d-none');
        $('.pagebody').removeClass('d-none');
        $('.pagebody iframe').attr('src',urls);
      });



      /*Theo thành phố*/
      var citytarget = '';

      $('.group-city select').on('change', function (e) {


        var optionSelected = $("option:selected", this);
        var valueSelected = this.value;
        citytarget = this.value;
        if (valueSelected != 'ALL') {
          $('.store-list').addClass('d-none');
          $('.store-list').each(function(){
            if (valueSelected === $(this).attr('data-local') ) {
              $(this).removeClass('d-none');
            } 
          }); 
          $('#district').removeAttr('disabled');
          showDistrict();
          removeDuplicate3();
        } else {
          $('#district').attr('disabled', 'disabled');
          $('.store-list').removeClass('d-none');
          $('.group-district select').html('<option value="ALL">Chọn quận/huyện</option>');

        }

      });


      /*Theo quận huyện*/
      $('.group-district select').on('change', function (e) {
        var oSelected = $("option:selected", this);
        var oSelectedCity = $("option:selected", '.group-city select');
        var oSelectedProduct = $("option:selected", '.group-product select');
        var oSelectedStore = $("option:selected", '.group-store select');
        $(this).attr("selected", "selected");
        var valSelected = oSelected.data('district');
        var valueSelected = oSelected.val();
        var valCity = oSelected.data('local');
        var valProduct = oSelected.data('product');
        var valStore = oSelected.data('store');
        var valSelectedProduct = oSelectedCity.data('product');
        var valSelectedCity = oSelectedCity.val();
        var valSelectedStore = oSelectedStore.val();

        if (valueSelected != 'ALL') {
          $('.store-list').addClass('d-none');

          $('.store-list').each(function(){
            console.log('test' + valCity)
            if (valSelected === $(this).attr('data-district') && valCity === $(this).attr('data-local') ) {
              $(this).removeClass('d-none');
            } 
          }); 
          $('#district').removeAttr('disabled');
        } else {
          console.log('check' + valSelectedCity);
          $('.store-list').each(function(){
            if (valSelectedCity === $(this).attr('data-local') ) {
              $(this).removeClass('d-none');
            }
          }); 
        }
      });

      function showlocation(local){	
        var cityString = "";
        dataFix.forEach(function(data){
          let datasdt = data.sdt.toString();
          let result = datasdt.replace('#', '');
          cityString += '<div data-local="'+ data.city +'" data-district="'+ data.district +'" class="store-list">'
            +				'<span class="name-cuahang">'+data.name+'</span>'
            +				'<span class="store-name" ><b><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11.0008 0C6.60743 0 3.0332 3.57423 3.0332 7.96752C3.0332 13.4197 10.1634 21.4239 10.467 21.762C10.7521 22.0796 11.2499 22.079 11.5346 21.762C11.8381 21.4239 18.9683 13.4197 18.9683 7.96752C18.9683 3.57423 15.3941 0 11.0008 0ZM11.0008 11.9762C8.79037 11.9762 6.99213 10.1779 6.99213 7.96752C6.99213 5.75712 8.79041 3.95888 11.0008 3.95888C13.2111 3.95888 15.0094 5.75717 15.0094 7.96757C15.0094 10.178 13.2111 11.9762 11.0008 11.9762Z" fill="#949494"/></svg></b> '+data.address+'</span>'
            +				'<span class="store-phone"><b><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none"><g clip-path="url(#clip0_690_883)"><path d="M18.0945 14.616C16.8259 13.531 15.5385 12.8737 14.2854 13.9571L13.5372 14.6119C12.9898 15.0872 11.972 17.3081 8.03667 12.7811C4.10219 8.25986 6.44354 7.5559 6.99179 7.08468L7.7441 6.42907C8.99058 5.34322 8.52018 3.97627 7.62117 2.56917L7.07866 1.71688C6.17556 0.313051 5.19214 -0.6089 3.94238 0.475314L3.26711 1.06536C2.71475 1.46774 1.17079 2.77569 0.796277 5.26045C0.345545 8.24183 1.7674 11.6559 5.02496 15.4019C8.27842 19.1495 11.4639 21.032 14.4813 20.9992C16.989 20.9721 18.5035 19.6265 18.9772 19.1372L19.6549 18.5464C20.9014 17.463 20.1269 16.3599 18.8575 15.2724L18.0945 14.616Z" fill="#949494"/></g><defs><clipPath id="clip0_690_883"><rect width="21" height="21" fill="white"/></clipPath></defs></svg></b> <a title="'+result+'" class="phone-url" href="tel:'+result+'">'+result+'</a></span>'
            +				'<a href="javascript:void(0)" class="store-url" title="Chỉ đường" data-url="'+data.url+'"><b><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none"><path d="M11.102 17L9.68591 9.31409L2 7.89796L18 1L11.102 17Z" stroke="black" stroke-miterlimit="10"/></svg></b>Chỉ đường</a>'
            +			'</div>	';
        })	
        $('.info-store').html(cityString);
      } 


      function showDistrict(local) {
        var district = "";
        var citys = citytarget;
        dataFix.forEach(function(data){

          if (data.city === citys) {

            district += '<option data-local="'+data.city+'"data-district="'+data.district+'" value="'+data.city+'" class="district-list">'
              +				'<span class="district-name">'+data.district+'</span>'
              +			'</option>';
          }
        })	
        $('#district').html('<option value="ALL">Chọn quận/huyện</option>' + district);
      }

      function removeDuplicate() {
        var map = {};
        $('#product option').each(function () {
          if (map[$(this).attr('data-product')]) {
            $(this).remove()
          }
          map[$(this).attr('data-product')] = true;
        })
      }
      function removeDuplicate2() {
        var map = {};
        $('#city option').each(function () {
          if (map[$(this).attr('data-local')]) {
            $(this).remove()
          }
          map[$(this).attr('data-local')] = true;
        })
      }

      function removeDuplicate3() {
        var map = {};
        $('#district option').each(function () {
          if (map[$(this).attr('data-district')]) {
            $(this).remove()
          }
          map[$(this).attr('data-district')] = true;
        })
      }

      function awe_convertVietnamese(str) { 
        str= str.toUpperCase();
        str= str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
        str= str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
        str= str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
        str= str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
        str= str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
        str= str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
        str= str.replace(/đ/g,"d"); 
        str= str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,"-");
        str= str.replace(/-+-/g,"-");
        str= str.replace(/^\-+|\-+$/g,""); 
        return str; 
      }
    }
  });
});




function myFunctionName() {		
  var input_Name = document.getElementById("myName");
  var filter = input_Name.value.toUpperCase();
  var table_danhmuc = document.getElementById("info-store");				
  var ul = table_danhmuc.getElementsByClassName("store-list");

  for (var i = 0; i < ul.length; i++) {

    var a = ul[i].getElementsByClassName("name-cuahang")[0];
    var typ = document.createAttribute("class");
    console.log(ul[i]);
    if (a) {

      var txtValue_dm = a.textContent || a.innerText;
      if (txtValue_dm.toUpperCase().indexOf(filter) > -1) {
        ul[i].style.display = "block";		
      } else {
        ul[i].style.display = "none";
        
      }
    }       
  }
}




