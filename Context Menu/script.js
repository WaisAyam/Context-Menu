const context_Menu = document.querySelector('.wrapper');//1
const share_menu = context_Menu.querySelector('.share-menu');//5
const share_menu_one = context_Menu.querySelector('.share-menu-one');//5.1
const share_menu_two = context_Menu.querySelector('.share-menu-two');//5.1

document.addEventListener('contextmenu', (e) => { //1
    // console.log(e);//1
    e.preventDefault();//1.1
    context_Menu.style.visibility = 'visible';//1.1

    let x = e.offsetX;//2
    let y = e.offsetY;//2
    // console.log(x, y);//2
    context_Menu.style.left = x + 'px';//3
    context_Menu.style.top = y + 'px';//3

    let window_width = window.innerWidth;//4
    let window_height = window.innerHeight;//4
    // console.log( window_width, window_height)//4
    let context_Menu_width = context_Menu.offsetWidth;//4
    let context_Menu_height = context_Menu.offsetHeight;//4
    // console.log(context_Menu_width, context_Menu_height)//4

    if (x > (window_width - context_Menu_width - share_menu.offsetWidth)) { //5
        share_menu.style.left = '-200px';//5
        share_menu_one.style.left = '-200px';//5.1
        share_menu_two.style.left = '-200px';//5.1
    }else{
        share_menu.style.left = '';//5
        share_menu.style.right = '-200px';//5
        share_menu_one.style.left = '';//5.1
        share_menu_one.style.right = '-200px';//5.1
        share_menu_two.style.left = '';//5.1
        share_menu_two.style.right = '-200px';//5.1
    }

    x = x > window_width - context_Menu_width ? window_width - context_Menu_width: x; //6
    y = y > window_height - context_Menu_height ? window_height - context_Menu_height: y;//6
});

document.addEventListener('click', () => {//1.2
    context_Menu.style.visibility = 'hidden';//1.2
});