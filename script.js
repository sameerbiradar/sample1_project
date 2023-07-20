var crsr =document.querySelector("#cursor")
var blur =document.querySelector("#cursor-blur")



document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px "
    crsr.style.top = dets.y+"px "
    blur.style.left = dets.x-100+"px "
    blur.style.top = dets.y-100+"px "
    

})






gsap.to("#nav",{
    backgroundColor : "#c6d1d1",
    height:"90px",
    duration:1,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        //markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
       // markers:true,
        start:"top -30%",
        end:"top -80%",
        scrub:1,

    }

})