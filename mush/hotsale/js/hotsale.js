//hot_sale
var hot_sale=document.querySelector('#hot_sale');
for(var i=0;i<12;i++){
	var Divs=document.createElement('div');
	hot_sale.appendChild(Divs);
	Divs.setAttribute('class','clone');	
}
var Divs_clone=document.querySelectorAll('#hot_sale .clone');
for(var i=0;i<Divs_clone.length;i++){
	var img=document.createElement('img');
	var p=document.createElement('p');
	
	Divs_clone[i].appendChild(img);
	Divs_clone[i].appendChild(p);
}
var imgs=document.querySelectorAll('.clone img');
for(var i=0;i<imgs.length;i++){
	imgs[i].src='img/'+parseInt(i+1)+'.png';
}
//放大
var ind=0;
// scale(0);
function scale(a){
	for(var i=0;i<imgs.length;i++){
		imgs[i].style.transform='scale(1)';
	}
	imgs[a].style.transform='scale(1.3)';
}

for(var i=0;i<imgs.length;i++){
	imgs[i].ind=i;
	imgs[i].onclick=function(){
		scale(this.ind);
	}
}



var ps=document.querySelectorAll('.clone p');
var arr1=['七月新品','斜挎包','双肩包','旅行箱','链条包','单肩包','钱包','迷你包','手提包','草编包','果冻包','男包']
for(var i=0;i<arr1.length;i++){
	ps[i].innerHTML=arr1[i];
}

//hot_sale
var hot_popule=document.querySelector('#hot_popule');
for(var i=0;i<4;i++){
	var Divs=document.createElement('div');
	hot_popule.appendChild(Divs);
	Divs.setAttribute('class','popule');	
}
var Divs_popule=document.querySelectorAll('#hot_popule .popule');
// console.log(Divs_clone);
for(var i=0;i<Divs_popule.length;i++){
	var img=document.createElement('img');
	var p=document.createElement('p');
	
	Divs_popule[i].appendChild(img);
	Divs_popule[i].appendChild(p);
	// img.setAttribute('src','')
}
var hot_imgs=document.querySelectorAll('.popule img');
for(var i=0;i<hot_imgs.length;i++){
	hot_imgs[i].src='img/'+parseInt(i+1)+'.png';
}
var hot_ps=document.querySelectorAll('.popule p');
var arr2=['迷你清仓','低至3折','买一送一','特价小包']
for(var i=0;i<arr2.length;i++){
	hot_ps[i].innerHTML=arr2[i];
}

//items
var items=document.querySelector('#items');
for(var i=0;i<5;i++){
	var Divs=document.createElement('div');
	items.appendChild(Divs);
	Divs.setAttribute('class','items_son');	
}
var items_son=document.querySelectorAll('#items .items_son');
console.log(items_son);
var arr3=['精选','斜挎包','双肩包','手提包','单肩包']
for(var i=0;i<arr3.length;i++){
	items_son[i].innerHTML=arr3[i];
}
var index=0;
test(0);
function test(a){
	for(var i=0;i<items_son.length;i++){
		items_son[i].style.background='#ff0077';
		items_son[i].style.color='white';
	}
	items_son[a].style.background='white';
	items_son[a].style.color='#ff5777';
}

for(var i=0;i<items_son.length;i++){
	items_son[i].index=i;
	items_son[i].onclick=function(){
		test(this.index);
	}
}


var r=0;
window.onload=function(){
	r=items.offsetTop;
}
// var r=items.offsetTop;
window.addEventListener("scroll",function(e){
	var t =document.documentElement.scrollTop||document.body.scrollTop;
	if(t>=r){
		items.style.position='fixed';
		items.style.top=0;
		ee.style.opacity=0;
		qq.style.bottom='18%';
		quick.style.bottom='18%';
	}else{
		items.style.position='static';
		ee.style.opacity=1;
		qq.style.bottom='28%';
		quick.style.bottom='28%';
	}
});
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
	quick.style.zIndex=1000;
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
	quick.style.zIndex=0;
}

var ee=document.querySelector('.ee');