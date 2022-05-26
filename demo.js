/*console.dir(document);
console.log(document.domain);
console.log(document.title);
console.log(document.URL);
//document.title='hi';
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);
console.log(document.getElementById('head-title'));
var header=document.getElementById('head-title');
header.textContent='Nope';
header.innerText='yeppp';
header.style.borderBottom='solid 3px #000';
var titl=document.getElementsByClassName('title');
titl[0].style.fontWeight='bold';
titl[0].style.color='green';
var item=document.getElementsByClassName('list-group-item');
console.log(item);
item[2].style.backgroundColor = 'green';
for(i=0;i<item.length;i++){
    item[i].style.fontWeight='bold';
}
var li=document.getElementsByTagName('li');
console.log(li);
li[4].style.backgroundColor = 'green';
var li1=document.getElementsByClassName('list-group-item');
console.log(li1)*/
var item3=document.querySelector('.list-group-item:nth-child(3)');
item3.style.color='white';
var item2=document.querySelector('.list-group-item:nth-child(2)');
item2.style.backgroundColor='green';
var items=document.querySelectorAll('.list-group-item');
items[1].style.color='green';
var odd=document.querySelectorAll('.list-group-item:nth-child(odd)');
for(i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green'; 
}

