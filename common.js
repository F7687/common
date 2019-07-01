function my$(id){
		return document.getElementById(id);
	}
function my1$(class){
		return document.querySelector(class);
	}
	function setInnerText(element,text){
		//判断浏览器是否支持这个属性
		if(typeof element.textContent=="underfind"){//不支持
			element.innerText=text;
		}else{
			element.textContent=text;
		}
	}
	//获取任意标签中的文本内容
	function getInnerText(element){
		if(typeof element.textContent=="underfind"){
			return element.innerText;
		}else{
			return element.textContent;
		}
	}