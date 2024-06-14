const porthead =document.querySelector('.porthead');
const openMenu =document.querySelector('.openMenu');
const closeMenu =document.querySelector('.closeMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show() {
    porthead.style.display='flex';
    porthead.style.right= '0';
}

function close() {
    porthead.style.right= '-100%';
    }