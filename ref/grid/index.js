
const menuIcon = document.querySelector(".menu-icon");
let navStatus = false;

const sideBar = document.querySelector(".sidebar");


menuIcon.addEventListener("click", (e) => {
        navStatus = !navStatus
        if(navStatus) {
            menuIcon.innerHTML = `<i class="fa-solid fa-xmark menu-icon"></i>`;

            sideBar.style.gridColumnStart = "1"
            sideBar.style.gridColumnEnd = "5"
        }
        else if(!navStatus) {
            menuIcon.innerHTML = `<i class="fa-solid fa-bars menu-icon"></i>`
            sideBar.style.gridColumnStart = "1"
            sideBar.style.gridColumnEnd = "2"
        }
});

