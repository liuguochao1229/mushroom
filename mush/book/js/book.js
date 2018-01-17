var mgpt_div4_t2=document.querySelector('.mgpt_div4 .t2');
var mgpt_div5_t2=document.querySelector('.mgpt_div5 .t2');
// var nowDate=new Date();
setInterval(function(){
	var myDate=new Date();
	var nowHours=myDate.getHours();
	var nMinutes=myDate.getMinutes();
	var nSeconds=myDate.getSeconds();
	mgpt_div4_t2.innerHTML='剩余'+'01'+':'+add(59-nMinutes)+':'+add(59-nSeconds);
	mgpt_div5_t2.innerHTML='剩余'+'02'+':'+add(59-nMinutes)+':'+add(59-nSeconds);
},1000)

function add(num){
	if (num>9) {
		return num;
	}else{
		return '0'+num;
	}
}



//add goods
var pp1=document.querySelector('.pp1');
var pp2=document.querySelector('.pp2');
var pp3=document.querySelector('.pp3');
var a=1;
var b=1;
pp1.onclick=function(){
	if (a<2) {
		a=2;
	}
	a=a-1;
	pp2.innerHTML=a;
	b=a;
	
	
}
pp3.onclick=function(){
	b=b+1;
	pp2.innerHTML=b;
	a=b;
}

var none=document.querySelector('.none');
var addgoods=document.querySelector('#addgoods');
var book_last_f=document.querySelector('.book_last_f');
var book_last_s=document.querySelector('.book_last_s');
none.onclick=function(){
	addgoods.style.bottom='-460px';
}
book_last_f.onclick=function(){
	addgoods.style.bottom='0';
	addgoods.style.zIndex=1000;
}
book_last_s.onclick=function(){
	addgoods.style.bottom='0';
	addgoods.style.zIndex=1000;
}
var quick_divs=document.querySelectorAll('#quick div');
var quick=document.querySelector('#quick');
var qq=document.querySelector('.qq');

var zzc=document.querySelector('#zzc');
zzc.onclick=function(){
	for(var i=0;i<quick_divs.length;i++){
		quick_divs[i].style.bottom=0;
		quick_divs[i].style.opacity=0;
	}
	zzc.style.display='none';
	qq.style.display='block';
	qq.style.zIndex=1000;
}
qq.onclick=function(){
	for(var i=0;i<quick_divs.length;i++){
		quick_divs[i].style.opacity=1;
	}
	zzc.style.display='block';
	qq.style.display='none';
	qq.style.zIndex=0;
	quick_divs[0].style.bottom=0;
	quick_divs[1].style.bottom='26%';
	quick_divs[2].style.bottom='45%';
	quick_divs[3].style.bottom='64%';
	quick_divs[4].style.bottom='83%';
}
quick_divs[0].onclick=function(){
	for(var i=0;i<quick_divs.length;i++){
		quick_divs[i].style.bottom=0;
		quick_divs[i].style.opacity=0;
	}
	zzc.style.display='none';
	qq.style.display='block';
	qq.style.zIndex=1000;
}

var ww=document.querySelector('.ww');
var ee=document.querySelector('.ee');
window.addEventListener("scroll",function(e){
	var t =document.documentElement.scrollTop||document.body.scrollTop;
	if(t >= 500){
		ee.style.opacity=1;
		qq.style.bottom='36%';
		ww.style.bottom='27%';
		quick.style.bottom='36%';
	}else{
		
		ee.style.opacity='0';
		qq.style.bottom='27%';
		ww.style.bottom='18%';
		quick.style.bottom='27%';
	}
});
