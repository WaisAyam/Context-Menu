const context_Menu = document.querySelector('.wrapper');
const share_menu = context_Menu.querySelector('.share-menu');
const share_menu_one = context_Menu.querySelector('.share-menu-one');
const share_menu_two = context_Menu.querySelector('.share-menu-two');

document.addEventListener('contextmenu', (e) => { 
    e.preventDefault();
    context_Menu.style.visibility = 'visible';

    let x = e.offsetX;
    let y = e.offsetY;
    context_Menu.style.left = x + 'px';
    context_Menu.style.top = y + 'px';

    let window_width = window.innerWidth;
    let window_height = window.innerHeight;
    let context_Menu_width = context_Menu.offsetWidth;
    let context_Menu_height = context_Menu.offsetHeight;

    if (x > (window_width - context_Menu_width - share_menu.offsetWidth)) { 
        share_menu.style.left = '-200px';
        share_menu_one.style.left = '-200px';
        share_menu_two.style.left = '-200px';
    }else{
        share_menu.style.left = '';
        share_menu.style.right = '-200px';
        share_menu_one.style.left = '';
        share_menu_one.style.right = '-200px';
        share_menu_two.style.left = '';
        share_menu_two.style.right = '-200px';
    }

    x = x > window_width - context_Menu_width ? window_width - context_Menu_width: x; 
    y = y > window_height - context_Menu_height ? window_height - context_Menu_height: y;
});

document.addEventListener('click', () => {
    context_Menu.style.visibility = 'hidden';
});
