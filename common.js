function my$(id){
		return document.getElementById(id);
	}
function my1$(class){
		return document.querySelector(class);
	}
	function setInnerText(element,text){
		//�ж�������Ƿ�֧���������
		if(typeof element.textContent=="underfind"){//��֧��
			element.innerText=text;
		}else{
			element.textContent=text;
		}
	}
	//��ȡ�����ǩ�е��ı�����
	function getInnerText(element){
		if(typeof element.textContent=="underfind"){
			return element.innerText;
		}else{
			return element.textContent;
		}
	}