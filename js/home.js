
$(function () {
    // 切换内容
    $('.navside').on('click', 'li', function () {
        var index = $(this).index()
        $('.demo').css('display', 'none')
        $('.mamiddle .con').eq(index).removeClass('active').siblings().addClass('active')
    })

    // 主题内容显示隐藏
    $('.exhead').on('click', '.dispaly', function () {
        $(this).parent().siblings('.excontent').toggle()
    })


    // 放大镜效果
    $('.incontent').on('mouseenter', 'img', function (e) {
        var srccon = $(this).attr('src')
        $('body').append('<div class="box"><img src="' + srccon + '" alt=""></div>')
        $('.aihao').bind('mousemove', function (e) {
            $('.box').css('left', e.clientX - 250)
            $('.box').css('top', e.clientY - 150)
            $('.aihao').bind('mouseleave', function () {
                $('.aihao').unbind('mousemove')
                $('.box').remove()
            })
        })
    })

    // 切换首页
    $('.home').bind('click', function () {
        $('.mamiddle .con').addClass('active')
        $('.demo').css('display', 'block')
    })

    // Swiper轮播
    var mySwiper = new Swiper('.swiper-container', {
        effect: 'fade', // 透明度轮播
        direction: 'horizontal', // 水平切换
        loop: true, // 循环模式选项

        autoplay: true, // 自动轮播

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            hideOnClick: true,
            hiddenClass: 'my-button-hidden',
        },
    })


    // 侧边方块
    $('.drag').each(function (index, iteam) {
        $(iteam).css('background', randomColor())
    })
    $('.drags').on('click', '.drag', function () {
        var index = $(this).index()
        $('.test').eq(index).toggle()
    })















    // 随机颜色
    function randomColor() {
        var col = "#";
        var str = '0123456789abcdefg'
        for (var i = 0; i < 6; i++) {
            var num = Math.round(Math.random() * 16)
            col += str[num]
        }
        return col
    }

})