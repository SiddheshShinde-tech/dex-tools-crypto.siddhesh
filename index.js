function sidebarClose() {
    console.log('close sidebar');
    document.querySelector(".sidebar").classList.add("close");
}

function sidebarOpen()
{
    console.log('open sidebar');
    document.querySelector(".sidebar").classList.remove("close");
}
