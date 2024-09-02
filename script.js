var cursor = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
var h4all = document.querySelectorAll("#nav h4");

document.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
        x: dets.x,
        y: dets.y
    })
    gsap.to("#cursor-blur",{
        x: dets.x,
        y: dets.y
    })
    // cursor.style.left = dets.x +"px";
    // cursor.style.top = dets.y+"px";
    // blur.style.left = dets.x+"px";
    // blur.style.top = dets.y+"px";
})


gsap.to("#nav",{
    backgroundColor: "black",
    duration: 0.5,
    height: "90px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main",{
    backgroundColor: "black",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -80%",
        scrub: 2
    }
})

gsap.from("#about-us img, #about-us-in",{
    y:50,
    opacity: 0,
    duration: 3,
    scrollTrigger:{
        trigger: "#about-us",
        scroller: "body",
        start: "top 60%",
        end: "top 50%",
        scrub: 2
    }
})