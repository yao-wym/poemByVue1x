
function isEmpty(obj){
  if(obj ==null||obj=='null'||obj==''||obj==undefined||obj==false||obj.length==0){
    return true;
  }else{
    return false;
  }
}
window.poem = {};
(function($,poem){
	$.fn.poemPost = function(url,data){
		var deferredObj = $.post(url,data,'','json');
		var doneObj = deferredObj.done;
		var failObj = deferredObj.fail;
		deferredObj.done = function(func){
			var func2 = function(res){
				if(res.code != 200){
					poemUI.toast('请求错误');
				}else{
					if(typeof func == 'function'){
						func(res.datas);
					}else{
						console.log('参数错误');
					}
				}
			};
			doneObj(func2);
			return deferredObj;
		};
		deferredObj.fail = function(func){
			var func2 = function(res){
				poemUI.toast('网络错误');
				if(typeof func == 'function'){
					func(res.datas);
				}else{
					console.log('参数错误');
				}
			};
			failObj(func2);
			return deferredObj;
		};
		return deferredObj;
	};
	$.fn.poemGet = function(url,data){
		var deferredObj = $.getJSON(url,data,'');
		var doneObj = deferredObj.done;
		var failObj = deferredObj.fail;
		deferredObj.done = function(func){
			var func2 = function(res){
				if(res.code != 200){
					poemUI.toast('请求错误');
				}else{
					if(typeof func == 'function'){
						func(res.datas);
					}else{
						console.log('参数错误');
					}
				}
			};
			doneObj(func2);
			return deferredObj;
		};
		deferredObj.fail = function(func){
			var func2 = function(res){
				poemUI.toast('网络错误');
				if(typeof func == 'function'){
					func(res.datas);
				}else{
					console.log('参数错误');
				}
			};
			failObj(func2);
			return deferredObj;
		};
		return deferredObj;
	};
	poem.saveItem = function(itemName,itemVal){
		localStorage.setItem(itemName,itemVal);
	};
	poem.getItem = function(itemName){
		localStorage.getItem(itemName);
	};
	poem.saveObj = function(itemName,itemObj){
		localStorage.save(itemName,JSON.stringify(itemObj));
	};
	poem.getObj = function(itemName){
		objStr = localStorage.get(itemName);
		return JSON.parse(objStr);
	};
	poem.client = 'ios';
})(jQuery,window.poem);