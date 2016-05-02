
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

var poemUI = {
    toast:function(msg){
        var toast = document.createElement('div');
        toast.innerHTML = `${msg}`;

        toast.style.position = 'fixed';
        toast.style.left = '50%';
        toast.style.zIndex = 2016;
        toast.style.bottom = '1.5rem';
        toast.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
        toast.style.color = 'fff'
        toast.style.width = 'auto';
        toast.style.padding = '.3rem 0.8rem';
        toast.style.borderRadius = '20px';
        toast.style.transform = 'translateX(-50%)';
        toast.style.textAlign = 'center';
        toast.style.transition = 'all .5s';
        toast.style.opacity = '0';

        document.getElementById('app-container').appendChild(toast);
        setTimeout(function () {
            toast.style.opacity = '1';
            toast.style.bottom = '2rem'
        }, 10)

        setTimeout(function () {
            toast.style.opacity = '0'
        }, 1000)
    },
    comfirm:function(msg){
        var flag = comfirm(msg);
        if(flag == true){

        }else{

        }
    }
}