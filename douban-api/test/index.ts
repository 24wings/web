/// <reference path="../../node_modules/@types/jquery/index.d.ts"/>
$.ajax({
    url: 'https://api.douban.com/v2/book/1220562',
    success(rtn) {
        console.log(rtn);
    }
})