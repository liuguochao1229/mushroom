//获取标签
var box=document.querySelector('#box')
var divs=document.querySelectorAll('#box ._box');
var omos=document.querySelectorAll('.omo div')
//定义变量index=0只显示一个div；
var index=0;
//先调用一次从1开始；
test(0);
//给定时器命名方便调用
var timer;
function test(a){
	//遍历div并隐藏
	for(var i=0;i<divs.length;i++){
		divs[i].style.display='none';
		omos[i].style.background='white';
	}
	//只显示一个div
	divs[a].style.display='block';
	omos[a].style.background='gray';
}
time();//调用定时器
function time(){
	timer=setInterval(function(){
		index++;
		if (index>2) {
			index=0;
		}
		test(index);
	},1000)
}
// //鼠标放在div上清除定时器
// box.onmouseover=function(){
// 	clearInterval(timer);
// }
// //鼠标离开div调用定时器
// box.onmouseout=function(){
// 	time();
// }

// for(var k=0;k<omos.length;k++){
// 	omos[k].index=k;
// 	omos[k].onmouseover=function(){
// 		test(this.index)
// 		}
// }
// var omo=document.querySelector('.omo');
// omo.onmouseover=function(){
// 	clearInterval(timer);
// }
// omo.onmouseout=function(){
// 	time();
// }