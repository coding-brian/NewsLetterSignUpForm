function isModile(){
    return window.innerWidth <= 375;
}

document.addEventListener('DOMContentLoaded',function(){
    if(isModile){
        const banner=document.body.querySelector('.banner')
        banner.src="../assets/images/illustration-sign-up-mobile.svg"
    }
})