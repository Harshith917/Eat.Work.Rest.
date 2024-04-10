var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x - 10 + "px"
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x - 150 + "px"
    blur.style.top = dets.y - 150 + "px" 
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 1.5
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 0
        crsr.style.border = "0px solid #fff"
        crsr.style.backgroundColor = "#fff"
    })
});

// dets ->>>> in mousemove Eventlistener records where everything(situations happenning) when the mouse moves
// console.log(dets.y) -> RECORDS HOW MUCH TIME IT SPENT IN MOVING MOUSE IN VERTICAL DIRECTION 

gsap.to("#nav",{
    // y:30
    backgroundColor: "#000",
    height: "90px",
    duration: 0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller: "body",
        start: "top -10%",
        end:"top -11%",
        scrub: 2
        // scrub: true or numbers like 1 2 3 4 5...........(reverse action)
    }
})
gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -30%",
        end: "top -80%",
        scrub: 2
    }
})

gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger:{
        trigger: "#about-us",
        scroller: "body",
        start: "top 60%",
        end: "top 58%",
        scrub: 2
    }
})
// stagger does elevates the each element in the particular div according given specific time 

gsap.from(".card",{
    scale:0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger:{
        trigger: ".card",
        scroller: "body",
        start: "top 60%",
        end: "top 58%",
        scrub: 1
    }
})

gsap.from("#one",{
    y:-60,
    x:-30,
    scrollTrigger:{
        trigger:"#one",
        scroller:"body",
        start:"top 60%",
        end: "top 70%",
        scrub: 4
    }
})

gsap.from("#two",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#one",
        scroller:"body",
        start:"top 60%",
        end: "top 70%",
        scrub: 4
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 80%",
        end: "top 85%",
        scrub: 2
    }
})

// https://media.istockphoto.com/id/649356542/photo/adventurous-people-making-ascent-to-high-mountain-walking-on-glacier.jpg?b=1&s=612x612&w=0&k=20&c=r8DNwGJCM96HuLuraetmaxk2UajyN1XpwBlDC65ksmE=
// https://media.istockphoto.com/id/1253261885/photo/rider-on-motorbike.jpg?b=1&s=612x612&w=0&k=20&c=DHbD9whwjcKpBW6gElhkAh_CIeag-FlksJs3l6hFeas=
// https://media.istockphoto.com/id/1319188329/photo/woman-looking-at-mountains-of-northern-pakistan-from-window-in-the-van.jpg?b=1&s=612x612&w=0&k=20&c=1Zm-Jkr9mAxsEP4vQ3hKhtwjUo1tWOLnbFAWTTu3wwg=
// https://media.istockphoto.com/id/181013019/video/the-perfect-mountain-aerial-shot.jpg?s=640x640&k=20&c=PLZ603AQQt-tyKDLCYoJ4kAyXS8kfEt1Krrffq5Te9w=