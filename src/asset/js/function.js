
function isEmpty(obj){
  if(obj ==null||obj=='null'||obj==''||obj==undefined||obj==false||obj.length==0){
    return true;
  }else{
    return false;
  }
}
window.poem = {};
(function($,poem){
	$.extend({
		poemGet : function(url,data){
		var deferredObj = $.getJSON(url,data,'');
		var doneObj = deferredObj.done;
		var failObj = deferredObj.fail;
		deferredObj.done = function(func){
			var func2 = function(res){
				if(res.code != 200){
					poemUI.toast('请求错误');
				}else{
					if(typeof func == 'function'){
						console.log(JSON.stringify(res.datas));
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
					console.log(JSON.stringify(res.datas));
					func(res.datas);
				}else{
					console.log('参数错误');
				}
			};
			failObj(func2);
			return deferredObj;
		};
		return deferredObj;
	},
	poemPost : function(url,data){
		var deferredObj = $.post(url,data,'','json');
		var doneObj = deferredObj.done;
		var failObj = deferredObj.fail;
		deferredObj.done = function(func){
			var func2 = function(res){
				if(res.code != 200){
					poemUI.toast('请求错误');
				}else{
					if(typeof func == 'function'){
						console.log(JSON.stringify(res.datas));
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
					console.log(JSON.stringify(res.datas));
					func(res.datas);
				}else{
					console.log('参数错误');
				}
			};
			failObj(func2);
			return deferredObj;
		};
		return deferredObj;
	},
	isEmpty:function(obj){
	  if(obj ==null||obj=='null'||obj==''||obj==undefined||obj==false||obj.length==0){
	    return true;
	  }else{
	    return false;
		}
	}
});
	poem.saveItem = function(itemName,itemVal){
		localStorage.setItem(itemName,itemVal);
	};
	poem.getItem = function(itemName){
		return localStorage.getItem(itemName);
	};
	poem.saveObj = function(itemName,itemObj){
		localStorage.setItem(itemName,JSON.stringify(itemObj));
	};
	poem.getObj = function(itemName){
		objStr = localStorage.getItem(itemName);
		return JSON.parse(objStr);
	};
	poem.getPos = function(pos){
  		var posArr = pos.split(',');
		return {
		    'lat':posArr[0],
		    'lon':posArr[1]
		}
	};
	poem.client = 'ios';
})(jQuery,window.poem);