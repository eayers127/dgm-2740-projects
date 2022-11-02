function toggleMenu(){
    document.getElementById('primaryNav').classicList.toggle('open');
}
const x = document.getElementById('hamburgerButton');
x.onClick = toggleMenu;