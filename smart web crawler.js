let str='java'
let links=document.links;
let href;
Array.from(links).forEach(function(element){
    href=element.href;
    console.log(href)
})