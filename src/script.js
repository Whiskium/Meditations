//获取当前时间
var d = new Date(),
    h = d.getHours()
if (h >= 6 && h <= 21) {
    $('#skin').attr('href','src/style-white.css')
}

//获取 [0,x] 区间一个随机整数
function randint(x) {
    return Math.floor(Math.random() * (x + 1))
}

//载入文本库
var repoIndex = randint(0)
document.writeln(`<script src="src/repos/repo${repoIndex}.js"></script>`)

//注入内容
$(function(){
    //载入文本
    var itemIndex = `s${randint(4)}`,//最大值 49
        item      = repo[itemIndex]
    $('#sentence').text(repo[itemIndex].sent)
    $('#source span').html(repo[itemIndex].src)
    $('#author').text(repo[itemIndex].au)
})
console.log('script.js 加载成功')