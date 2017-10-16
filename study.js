//$(el).addClass(className);

//ie8 classList有多个属性（添加、检测、删除）
if (el.classList)
	el.classList.add(className);
else
	el.className += ' ' + className;
//ie10
el.classList.add(className);

//---------------

//$(el).after(htmlString);

//ie8可以选择多个位置
el.insertAdjacentHTML('afterend', htmlString);

//---------------

//$(parent).append(el);

//ie8
parent.appendChild(el);

//---------------

//$(el).children();

//ie8
var children = [];
for (var i = el.children.length; i--;) {
	// Skip comment nodes on IE8
	if (el.children[i].nodeType != 8)
		children.unshift(el.children[i]);
}

//ie9
el.children

//innerHTML 设置或获取位于对象起始和结束标签内的 HTML
//outerHTML 设置或获取对象及其内容的 HTML 形式
//innerText 设置或获取位于对象起始和结束标签内的文本

//---------------

//$('.my #awesome selector');

//ie8
document.querySelectorAll('.my #awesome selector');

//---------------

//$(el).attr('tabindex');

//ie8
el.getAttribute('tabindex');

//-----------------------

//$(el).next();

//nextSibling属性返回元素节点之后的兄弟节点（包括文本节点、注释节点即回车、换行、空格、文本等等）； 
//nextElementSibling属性只返回元素节点之后的兄弟元素节点（不包括文本节点、注释节点）；
// 也有多个位置

//----------------------

//getBoundingClientRect()
//这个方法返回一个矩形对象，包含四个属性：left、top、right和bottom。分别表示元素各边与页面上边和左边的距离。

//----------------------

//$(el).remove();

//ie8
el.parentNode.removeChild(el);

//------------------

//$(el).attr('tabindex', 3);

//ie8
el.setAttribute('tabindex', 3);

//-------------------

//$(el).on(eventName, eventHandler);

//ie9
el.addEventListener(eventName, eventHandler);

//---------------------------

//$.inArray(item, array);

//ie8
function indexOf(array, item) {
	for (var i = 0; i < array.length; i++) {
		if (array[i] === item)
			return i;
	}
	return -1;
}

indexOf(array, item);

//ie9
array.indexOf(item);

//--------------

//$.isArray(arr); 检验是不是数组

//ie8
isArray = Array.isArray || function(arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
}

isArray(arr);

//ie9
Array.isArray(arr);

//----------------------

//$(el).css(ruleName);

//ie8

getComputedStyle(el)[ruleName];