var click1=document.querySelector('.click1');
var click2=document.querySelector('.click2');
var click3=document.querySelector('.click3');
var p2_span=document.querySelector('.p2 .p2_span');
var span=document.querySelector('#last span');
var last_i=document.querySelector('#last i');
//选中商品或取消 并计算价格
click1.onclick=function(){
	add();
	if (num%2==0) {
		click1.style.background='url(img/click.png) no-repeat center';
		click3.style.background='url(img/click.png) no-repeat center';
		click2.style.background='url(img/click.png) no-repeat center';
		span.innerHTML='￥'+p2_span.innerHTML*count_span.innerHTML;
		last_i.innerHTML='全选 (1)';
	}
	else{
		click1.style.background='';
		click3.style.background='';
		click2.style.background='';
		span.innerHTML='￥0.00';
		last_i.innerHTML='全选 (0)';
	}
}
var num=1;
function add(){	
	num++;
}
click3.onclick=function(){
	add();
	if (num%2==0) {
		span.innerHTML='￥'+p2_span.innerHTML*count_span.innerHTML;
		click3.style.background='url(img/click.png) no-repeat center';
		click1.style.background='url(img/click.png) no-repeat center';
		click2.style.background='url(img/click.png) no-repeat center';
		last_i.innerHTML='全选 (1)';

	}
	else{
		click3.style.background='';
		click1.style.background='';
		click2.style.background='';
		span.innerHTML='￥0.00';
		last_i.innerHTML='全选 (0)';
	}
}
click2.onclick=function(){
	add();
	if (num%2==0) {
		span.innerHTML='￥'+p2_span.innerHTML*count_span.innerHTML;
		click2.style.background='url(img/click.png) no-repeat center';
		last_i.innerHTML='全选 (1)';
	}
	else{
		click2.style.background='';
		span.innerHTML='￥0.00';
		last_i.innerHTML='全选 (0)';
	}
}

var finish=document.querySelector('.finish');
var top_right_a=document.querySelector('.top_right a');
var cover_balance=document.querySelector('.cover_balance');
var balance=document.querySelector('.balance');
var addcount=document.querySelector('.addcount');
var right=document.querySelector('.right');
var count_span=document.querySelector('.count .count_span');
top_right_a.onclick=function(){
	finish.style.display='block';
	top_right_a.style.display='none';
	right.style.display='none';
	addcount.style.display='block';
	balance.style.display='none';
	cover_balance.style.display='block';
}
finish.onclick=function(){
	finish.style.display='none';
	top_right_a.style.display='block';
	right.style.display='block';
	addcount.style.display='none';
	balance.style.display='block';
	cover_balance.style.display='none';
}
//增加或减少商品数量
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
	count_span.innerHTML=a;
}
pp3.onclick=function(){
	b=b+1;
	pp2.innerHTML=b;
	a=b;
	count_span.innerHTML=b;
}
//未选中购物车商品时弹出框
var cover1=document.querySelector('.cover1');
var cover2=document.querySelector('.cover2');
var part=document.querySelector('#part');
var last=document.querySelector('#last');
var zzc=document.querySelector('#zzc');
var zzc_btn=document.querySelector('#zzc_btn');
var zzc_btn_p1=document.querySelector('.zzc_btn_p1');
var zzc_btn_p2=document.querySelector('.zzc_btn_p2');
var select_goods=document.querySelector('#select_goods');
cover2.onclick=function(){
	if (num%2==0) {
		zzc.style.display='block';
		zzc_btn.className='zzc_ani';
		setTimeout(function(){
			select_goods.classList.remove("zzc_ani");
		},1000)
	}
	else{
		select_goods.className='ani';
		setTimeout(function(){
			select_goods.classList.remove("ani");
		},2000)
	}
}
//选中商品时弹出框
var top_p=document.querySelector('#top p');
var empty=document.querySelector('#empty');
zzc_btn_p1.onclick=function(){
	zzc.style.display='none';
}
zzc_btn_p2.onclick=function(){
	zzc.style.display='none';
	part.remove(part);
	last.remove(last);
	top_p.innerHTML='购物车';
	finish.style.display='none';
	top_right_a.style.display='block';
	empty.style.display='block';
}
empty.onclick=function(){
	window.open('../mushroom/mushroom.html');
}


