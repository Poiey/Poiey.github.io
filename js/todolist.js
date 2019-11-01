// 添加元素
$('.top').on('click', '.btn', function () {
    if (!$('.txt').val()) {
        return
    }
    var oMain = '<div class="main"><input type="checkbox" class="check"><div class="first">' + $('.txt').val() + '</div><div class="right"><div class="bianji">编辑</div><div class="shanchu">删除</div></div></div>'
    $('.top .con').append(oMain)
    $('.txt').val('')
    // 全选
    if ($('.checks').prop('checked')) {
        $('.main input').prop('checked', true)
    }
})
// 删除元素
$('.top').on('click', '.shanchu', function () {
    $(this).parent().parent().remove()
})
// 编辑元素
$('.top').on('click', '.bianji', function () {
    var concom = $(this).parent().siblings('.first').text()
    var newInput = '<input type="text" class="second">'
    $(newInput).replaceAll($(this).parent().siblings('.first'))
    $(this).parent().siblings('.second').val(concom)
    $(this).parent().siblings('.second').focus()
    $($(this).parent().siblings('.second')).blur(function () {
        var content = $('.second').val()
        var oDiv = '<div class="first">' + content + '</div>'
        $(oDiv).replaceAll('.second')
    })
})
//子选项全选
$('.con').on('click','.main input',function(){
    var arrCon = []
    $('.main input').each(function(index,val){
        if($(val).prop('checked')){
            arrCon.push('a')
        }else{
            arrCon.push('b')
        }
    })
    if(arrCon.includes('b')){
        $('.checks').prop('checked',false)
    }else{
        $('.checks').prop('checked',true)
    }
})
//全选项全选
$('.add').on('click','.checks',function(){
    if($(this).prop('checked')){
        $('.check').prop('checked',true)
    }else{
        $('.check').prop('checked',false)
    }
})
//已处理项事件
$('.add').on('click','.chuli',function(){
    $('.main .check:checked').each(function(index,iteam){
            var chCon = $(this).siblings('.first').text()
            var chDiv = '<div class="main"><input type="checkbox" class="check"><div class="first">' +chCon+ '</div><div class="right"><div class="bianji">编辑</div><div class="shanchu">删除</div></div></div>'
            $('.bommain .con').append(chDiv)
            $(this).parent().remove()
    })
})
//全选删除
$('.add').on('click','.dele',function(){
    $('.main .check:checked').each(function(index,iteam){
            $(this).parent().remove()
    })
})
















