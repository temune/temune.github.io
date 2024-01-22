(function(){
  	let urlParams = new URLSearchParams(window.location.search);
	let id = urlParams.get('u');
    let mbot = /bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex/i.test(navigator.userAgent);
    if(id) {
        if(mbot) location.replace('https://ara.hrosc.com/item/temune.github.io/'+id);
        else location.href = 'https://ara.hrosc.com/item/temune.github.io/go/'+id+'/';
    }
})();
