$(document).ready(function() {


  $(".img-download").click(function(){
    window.print()
  })



  setTimeout(function(){
    $(".popup-out").fadeOut(500)
  },3000)


  $(".exeit-chat").click(function(){
    $(".popup-chat").fadeOut(500)
  })

  $(".chat-elment").click(function(e){
    e.stopPropagation()
  })


  $(".chat-dics").click(function(e){
    $(".popup-chat").fadeIn(500)
    e.stopPropagation()
  })

  $(".chat-send").click(function() {
    let valueinput = document.querySelector(".chat-input")

    if (valueinput.value === "") {
    } else {
      let valuechat = $(".chat-input").val()
      $(".chat-contact").before(`<div class="chat-content">
      <div class="chat-text">
      <p>${valuechat}</p>
      </div>
      <span class="chat-time chat-time-2">10pm</span>
      </div>`)
    }


    valueinput.value = ""
  })



  $(".chat-file").on("change",function(){

  // let imgfile =   $(this).val().slice(12)

  let reader = new FileReader();
    reader.addEventListener("load",function() {
    upload_img = reader.result      
  $(".chat-contact").before(`<div class="chat-content">
  <img class="chat-imgfile" src="${upload_img}"/>
  </div>`)
})
reader.readAsDataURL(this.files[0])
  })



  $(".popup-dics-box").click(function(e){
    e.stopPropagation()
  })
 
  $(".dics-exeit").click(function() {
    $(".popup-dics").fadeOut(500)
  })
  
  $(".button-dics-2").click(function(e) {
    $(".popup-dics").fadeIn(500)
    e.stopPropagation()

  })


  $(".input-img-2").on("change",function(_e) {
    let reader = new FileReader();
    reader.addEventListener("load",function() {
      upload_img = reader.result      
    $(".prof-popup").attr("src",`${upload_img}`)
    $(".poup-image-item").attr("src",$(".prof-popup").attr("src"))



    })

    reader.readAsDataURL(this.files[0])


  })

  $(".prof-popup").click(function(e){
    $(".popup-box-2").fadeIn(500)
    e.stopPropagation()
  })
  $(".poup-image-item").click(function(e){
    e.stopPropagation()
  })

  $(".popup-exeit").click(function(){
    $(".popup-box-2").fadeOut(500)
  })

  $(".photo-file").on("change",function(){
    // let photo =  $(this).val().slice(12)
    // $(".seatting-img").attr("src",`image/${photo}`)

    let reader = new FileReader();
    reader.addEventListener("load",function() {
      upload_img = reader.result      
    $(".seatting-img").attr("src",`${upload_img}`)

  })

  reader.readAsDataURL(this.files[0])

  })




  $(".setting-item").click(function(e) {
    e.preventDefault()
    $(this).parent().parent().fadeOut()
  })

  $(".img-seateng").click(function(){
    $(this).siblings(".link-seting").fadeIn()
  })


  $(document).click(function(){
    $(".popup").fadeOut(500)
    $(".popup-box-2").fadeOut(500)
    $(".popup-dics").fadeOut(500)
    $(".popup-chat").fadeOut(500)
  })


  $(".popup-box").click(function(e){
    e.stopPropagation()
  })  

  // $(".inhert-table").click(function(e) {
  //   $(".popup").fadeIn(500)
  //   e.stopPropagation()
  //   e.preventDefault()
  // })

  $(".inhert-table-2").click(function(e) {
    e.stopPropagation()
  })


  $("body").on("click",".img-download-2",function(){
    window.print()
  })




  $(".content-static").click(function(e) {
    $(".popup").fadeIn(500)
    e.stopPropagation()
  })

  
  $(".content-item").click(function(e) {
    $(".popup").fadeIn(500)
    e.stopPropagation()
  })


  $(".exeit").click(function(){
    $(".popup").fadeOut(500)
  })



  $(".button-slider").click(function(e) {
    $(".popup-slider").fadeIn()
    $(".slider").addClass("slider-show")
    $(".slider").removeClass("slider-hide")
    e.stopPropagation()
  })

  $(".popup-slider").click(function(){
  $(".slider").addClass("slider-hide")
  $(".popup-slider").fadeOut()
  })


  $(".slider").click(function(e) {
    e.stopPropagation()
  })


  $(".gallery-photo-2 img").click(function(e){
    $(this).addClass("active-img").siblings().removeClass("active-img")
    console.log(e.currentTarget.dataset.img)
    $(".gallery-photo").attr("src",e.currentTarget.dataset.img)
  })




  $(".table-click").click(function(e){
    e.preventDefault()
    $(".popup").fadeIn(500)
  })



  $(".table-select").click(function(e){
    e.preventDefault()
  })





  


  $(".eye-password").click(function() {
    $(this).toggleClass("fa-eye-slash  fa-eye")

    if ($(this).hasClass("fa-eye")) {
      $(".form-control").attr("type","text")
    } else {
      $(".form-control").attr("type","password")
    }
 

  })


  $(".span-radio-2").click(function(){

    $(".append-form").after(`   
 
    <div class="appendto-form-2">
    <div class="row">
    <div class="col-lg-6">
        <form class="form-content">
            <label>سؤال متكرر عن المنتج</label>
            <input class="form-control" type="text" placeholder="برجاء ادخال السؤال">
        </form>
    </div>
    <div class="col-lg-6">
        <form class="form-content">
            <label>الاجابه</label>
            <input class="form-control" type="text" placeholder="برجاء ادخال اجابه السؤال">
        </form>
    </div>
    </div>
          <span class="exeit-form">x</span>
    </div>

`)  
  })


  $(".span-radio-2").click(function(){

    $(".after-form").after(`   
 
    <div class="after-form-2 mb-3">
    <div class="row">
        <div class="col-lg-6">
            <form class="form-content">
                <label>سعر التحميل قبل العرض</label>
                <input class="form-control" type="text" placeholder="برجاء ادخال سعر التوصيل">
            </form>
        </div>
        <div class="col-lg-6">
            <form class="form-content">
                <label>سعر التوصيل بعد العرض</label>
                <input class="form-control" type="text" placeholder="برجاء ادخال سعر التوصيل">
            </form>
        </div>
    </div>
           
    <span class="exeit-form">x</span>

</div>

`)  
  })
 

  $(`body`).on("click",".exeit-form",function(){
    $(this).parent().fadeOut()
  })



  $(".chat-input").on("keyup",function(e){
    let keyinput = e.keyCode
    if (keyinput === 13) {
      console.log("dsa")
      let valueinput = document.querySelector(".chat-input")

      if (valueinput.value === "") {
      } else {
        let valuechat = $(".chat-input").val()
        $(".chat-contact").before(`<div class="chat-content">
        <div class="chat-text">
        <p>${valuechat}</p>
        </div>
        <span class="chat-time chat-time-2">10pm</span>
        </div>`)
      }
  
  
      valueinput.value = ""
    }
  })




  // data table



  $(".no-footer .row:first-child").addClass("gallery-main gallery-main-2")

  $(".gallery-main").removeClass("row")


  // number-select 


  // $(".dataTables_length").addClass("number-select number-select-table")

  $(".dataTables_length").parent().addClass("number-select-table")
  $(".number-select-table").removeClass("col-sm-12 col-md-6")


  $(".dataTables_length label").html(`
  <div class="number-select number-select-table">
  <p>اظهار العدد</p>
  <div class="coustem-selector">
      <select class="select-control select-control-2">
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
          <option value="">6</option>
          <option value="">7</option>
          <option value="">8</option>
          <option value="">9</option>
          <option value="">10</option>
          <option value="">11</option>
          <option value="">12</option>
      </select>
  </div>
</div>
  `)





  // input search 


  $(".form-control-sm").addClass("input-search")

  // $(".form-control-sm").parent().parent().addClass("search-content")

  $(".form-control-sm").parent().parent().parent().addClass("form-search form-search-2 form-search-table")

  $(".search-elment").removeClass("col-sm-12 col-md-6")

  $(".input-search").after(`
  <button type="submit" class="button-search"><i class="fa-solid fa-magnifying-glass"></i></button>
  `)


  


  $(".form-search-table label").addClass("search-content")









  // function selectall(select) {
  //   $(select).on("change",function(e) {
  //     $(select).css("background",e.currentTarget.value)
  //   })
  // }
  
  // selectall(document.querySelector(".select-table"))
  // selectall(document.querySelector(".select-table-2"))
  // selectall(document.querySelector(".select-table-3"))
  // selectall(document.querySelector(".select-table-4"))
  // selectall(document.querySelector(".select-table-5"))
  // selectall(document.querySelector(".select-table-6"))
  // selectall(document.querySelector(".select-table-7"))

  

  $(`#example`).on("change",`.select-table`,function(e) {
    $(this).css("background",e.currentTarget.value)
  })

  $(`#example`).on("change",`.select-table-2`,function(e) {
    $(this).css("background",e.currentTarget.value)
  })

  $(`#example`).on("change",`.select-table-3`,function(e) {
    $(this).css("background",e.currentTarget.value)
  })
  $(`#example`).on("change",`.select-table-4`,function(e) {
    $(this).css("background",e.currentTarget.value)
  })

  $(`#example`).on("change",`.select-table-5`,function(e) {
    $(this).css("background",e.currentTarget.value)
  })
  $(`#example`).on("change",`.select-table-6`,function(e) {
    $(this).css("background",e.currentTarget.value)
  })
  $(`#example`).on("change",`.select-table-7`,function(e) {
    $(this).css("background",e.currentTarget.value)
  })

  $(".file-photo").on("change",function() {
    console.log(this.value)
      let reader = new FileReader();
    reader.addEventListener("load",function() {
    upload_img = reader.result      

    $(".file-photo").parent().after(`
    <div class="items ">
    <div class="item">
        <a href="${upload_img}" data-fancybox="gallery"><img class="fance-photo" src="${upload_img}" alt=""></a>
    </div>
  </div>
    `)
  })

  reader.readAsDataURL(this.files[0])


})


})