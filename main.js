$('.tit .btn').click(function(e){
    e.preventDefault();

    $('.nav').slideToggle();
    $('.tit .btn').toggleClass("open")


    if($('.tit .btn').hasClass('open')){//open이라는 클래스 명이 있다면~
        //A.attr(B) --> A요소안에 있는 B속성을 가져와라는 뜻
        //A.attr(B,C) --> A요소안에 있는 B속성을 C로 바꿔라는 뜻
        //$('.tit .btn').find('i') ==> find = (css에서 띄어쓰기의 의미와 유사). 내자손중에서 i라는 class명을 찾아라
        $('.tit .btn').find('i').attr("class","fas fa-chevron-up")
        
    }else{
        $('.tit .btn').find('i').attr("class","fas fa-chevron-down")
    }
    //console.log("작동확인")
})

/* slick */
$(document).ready(function(){
    $('.slider').slick({
       arrows:true,
       dots:true,
       autoplay:true
    });
});
$('.slider').slick('setPosition');

lightGallery(document.getElementById('lightGallery'), {
    plugins:[lgThumbnail],
});