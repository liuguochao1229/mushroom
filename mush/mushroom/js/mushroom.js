var center=document.querySelector('.center');
var inp=document.querySelector('.center input');
var arr=['雪地靴','帽子','围巾','连衣裙','棉服','袜子','羽绒服','外套','卫衣','毛衣'];
//获取两个大div
var _top=document.querySelector('#top');
var _hidden=document.querySelector('#hidden');
_hidden.onclick=function(){
	_hidden.style.position='fixed';
}
//点击输入框跳转到hidden；随机产生一个热词
center.onclick=function(){
	inp.placeholder=arr[parseInt(Math.random()*arr.length)];
	hinp.value=inp.placeholder;
	// _top.style.display='none';
	_hidden.style.display='block';
	hinp.focus();
}
var sea=document.querySelector('.hright a');
var cEt=document.querySelector('.cEt');
var cEt_son=document.querySelector('.cEt_son');
var hinp=document.querySelector('.hcenter input');
//获取光标边框变色
hinp.onfocus=function(){
	hinp.style.border='1px solid #ff949c';
}
//失去光标边框变色
hinp.onblur=function(){
	hinp.style.border='1px solid #aaaaaa';
}
//给历史记录插入数据到最前面
sea.onclick=function(){

	cEt_son.style.display='none';
	var span=document.createElement('span');
	cEt.appendChild(span);
	cEt.insertBefore(span,cEt.firstChild);
	span.innerHTML=hinp.value||hinp.placeholder;
	var spans=document.querySelectorAll('.cEt span');
	if (spans.length>5) {
		cEt.removeChild(cEt.lastChild);
	}
	if (hinp.value=='外套') {
		window.open('https://list.mogujie.com/wall/s?q=%E5%A4%96%E5%A5%97&ptp=m1._mf1_1239_4537.0.0.YBhNyur&acm=3.mce.1_4_11k.39084.30653.mo99JqGox1g57.p_12_hotSearchKeywordRec-mid_39084-sd_115-lc_201-mf_4537_796030-idx_0-mfs_14')
		// console.log(1);
	}else if (hinp.value=='卫衣') {
		// console.log(1);
		window.open('https://list.mogujie.com/wall/s?q=%E5%8D%AB%E8%A1%A3&ptp=m1._mf1_1239_4537.0.0.zwwyAkH')
	}else if (hinp.value=='连衣裙') {
		window.open('https://list.mogujie.com/wall/s?q=%E8%BF%9E%E8%A1%A3%E8%A3%99&ptp=m1._mf1_1239_4537.0.0.xjEkPjE')
	}
}
//删除历史记录的最后一个
var del=document.querySelector('.del');

del.onclick=function(){
	var spans=document.querySelectorAll('.cEt span');
	for(var i=0;i<spans.length;i++){
		spans[i].remove(cEt);
	}
	cEt_son.style.display='block';
}
//给热门搜索添加a标签
var cent=document.querySelector('.cent');
for(var i=0;i<10;i++){
	var a=document.createElement('a');
	cent.appendChild(a);
}
var aS=document.querySelectorAll('.cent a');
for(var i=0;i<arr.length;i++){
	aS[i].innerHTML=arr[i];
}
// aS[0].innerHTML='外套';
aS[0].style.color='#ff949c';
aS[0].onclick=function(){
	window.open('https://list.mogujie.com/wall/s?q=%E5%A4%96%E5%A5%97&ptp=m1._mf1_1239_4537.0.0.YBhNyur&acm=3.mce.1_4_11k.39084.30653.mo99JqGox1g57.p_12_hotSearchKeywordRec-mid_39084-sd_115-lc_201-mf_4537_796030-idx_0-mfs_14')
}
// aS[1].innerHTML='羽绒服';
// aS[2].innerHTML='棉服';
// aS[3].innerHTML='连衣裙';
// aS[4].innerHTML='帽子';
// aS[5].innerHTML='毛衣';
aS[5].style.color='#ff949c';
// aS[6].innerHTML='袜子';
// aS[7].innerHTML='卫衣';
// aS[8].innerHTML='围巾';
aS[8].style.color='#ff949c';
// aS[9].innerHTML='雪地靴';
//点击箭头返回首页搜索框
var _hleft=document.querySelector('.hleft');
_hleft.onclick=function(){
	// _top.style.display='block';
	_hidden.style.display='none';
	// inp.placeholder=hinp.value;
}
//倒计时	
// var back_time_span1=document.querySelector('#back_time .span1');
var back_time_span2=document.querySelector('#back_time .span2');
var back_time_span3=document.querySelector('#back_time .span3');
var back_time_p_span=document.querySelector('#back_time p span');

// var nowDate=new Date();
setInterval(function(){
	var myDate=new Date();
	var nowHours=myDate.getHours();
	var nMinutes=myDate.getMinutes();
	var nSeconds=myDate.getSeconds();
	back_time_p_span.innerHTML=add(nowHours);
	back_time_span2.innerHTML=add(59-nMinutes);
	back_time_span3.innerHTML=add(59-nSeconds);
},1000)

function add(num){
	if (num>9) {
		return num;
	}else{
		return '0'+num;
	}
}
//hot_market
var hot_market=document.querySelector('#hot_market');
for(var i=0;i<16;i++){
	var Divs=document.createElement('div');
	hot_market.appendChild(Divs);
	Divs.setAttribute('class','clone');	
}
var Divs_clone=document.querySelectorAll('#hot_market .clone');
// console.log(Divs_clone);
for(var i=0;i<Divs_clone.length;i++){
	var img=document.createElement('img');
	var p=document.createElement('p');
	
	Divs_clone[i].appendChild(img);
	Divs_clone[i].appendChild(p);
	// img.setAttribute('src','')
}
var imgs=document.querySelectorAll('.clone img');
for(var i=0;i<imgs.length;i++){
	imgs[i].src='img1/'+parseInt(i+1)+'.png';
}
var ps=document.querySelectorAll('.clone p');
var arr1=['冬季外套','温暖上新','套装','卫衣','上衣','棉鞋','连衣裙','裤子','美包','短靴','美妆','男装','内衣袜子','配饰','零食','家居百货']
for(var i=0;i<arr1.length;i++){
	ps[i].innerHTML=arr1[i];
}

