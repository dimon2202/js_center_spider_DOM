'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const way = (wall.clientWidth - spider.clientWidth) / 2;

spider.style.left = way + 'px';
spider.style.top = way + 'px';
