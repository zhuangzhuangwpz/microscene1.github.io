var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    //Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)
    loop: true,
    //控制切换屏幕是否循环,false不循环,true循环

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        //下一个
        prevEl: '.swiper-button-prev',
        //上一个
    },

   /*
    // 如果需要滚动条
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    */
})
