function showCall(){
    document.querySelector(".overlay").classList.remove("d-none")
    document.querySelector(".call").classList.remove("d-none")
}
function closeCall(){
    document.querySelector(".overlay").classList.add("d-none")
    document.querySelector(".call").classList.add("d-none")
}
document.querySelector(".overlay").addEventListener('click',function(){
    closeCall()
})