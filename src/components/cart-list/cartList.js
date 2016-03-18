var Vue = require('vue');
function getArticleList() {
	$.getJSON(ARTICLE_LIST_API, {
		param1: 'value1'
	}, function(json, textStatus) {
		/*optional stuff to do after success */
		// alert(JSON.stringify(json));
		var cartVue = new Vue({
			el: '#cart-list-view',
		});
		cartVue.$test = "aa";
	});
}
getArticleList();