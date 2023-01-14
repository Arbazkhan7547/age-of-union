gsap.registerPlugin(ScrollTrigger); 
 function show(){
    
        // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
      });
      // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
      locoScroll.on("scroll", ScrollTrigger.update);
      
      // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
      ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
          return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
          return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
      });
      // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
      ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
      
      // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
      ScrollTrigger.refresh();
    } 
function Animation1(){
    gsap.to("#fs",{
        height:0,
        delay:1,
        ease:Expo.easeInout,
        duration:.5,
        onComplete:function(){
             gsap.to("#part1",{
                opacity:1,
                duration:.5,
                ease:Expo.easeInout,
                pin:true
             })
            gsap.to("#nav",{
                y:10,
                opacity:1,
                ease:Expo.easeInout,
                duration:.2,
                pin:true
            })
            gsap.to("#part1 .vr,#part1 .vr2",{
                width:"98%",
                ease:Expo.easeInout,
                duration:.5,
                pin:true
            })
            gsap.to("#part1 .hr",{
                height:"92vh",
               ease:Expo.easeInout,
               duration:.5,
               pin:true
           })
           gsap.to("#part1 .hr2",{
            height:"18vh",
            ease:Expo.easeInout,
            duration:.5,
            pin:true
          })
        }
    })
    
}
function video(){
    document.querySelector("#play")
    .addEventListener("click",function(){
        document.querySelector("#video").play();
    })
    document.querySelector("#play1")
    .addEventListener("click",function(){
        document.querySelector("#video1").play();
    })
}
function Animation3(){
    gsap.to("#part3 .i1",{
        scrollTrigger:{
            scroller:"#main",
            trigger:".i1",
            start:"top 10%"
            },
        y:20,
        opacity:1,
        ease:Expo.easeInout,
        duration:1
    })
    
    gsap.to("#part3 .i2",{
        scrollTrigger:{
            scroller:"#main",
            trigger:".i1",
            start:"top 10%"
            },
        y:20,
        opacity:1,
        ease:Expo.easeInout,
        duration:1
    })
    gsap.to("#part3 .line .vr",{
        scrollTrigger:{
          scroller:"#main",
          trigger:"#part3 .line .vr",
          start:"top 90%"
        },
         height:"100%",
        ease:Expo.easeInout,
        duration:.5
    })
    gsap.to("#part3 .line .hr",{
        scrollTrigger:{
          scroller:"#main",
          trigger:"#part3 .line .hr",
          start:"top 90%"
        },
        width:"98%",
        ease:Expo.easeInout,
        duration:.5
    })
   
}
function Animation2(){
    gsap.to("#part2 .line .hr",{
        scrollTrigger:{
          scroller:"#main",
          trigger:"#part2 .line .hr",
          start:"top 90%"
        },
        width:"98%",
        ease:Expo.easeInout,
        duration:.5
    })
    gsap.to("#part2 .line .vr",{
        scrollTrigger:{
          scroller:"#main",
          trigger:"#part2 .line .vr",
          start:"top 90%"
        },
         height:"150px",
        ease:Expo.easeInout,
        duration:.5
    })
    gsap.to(" #part2>h1",{
        scrollTrigger:{
            scroller:"#main",
            trigger:"#part2 h1",
            start:"top 50%"
          },
        opacity:1,
        ease:Expo.easeInout,
        duration:1
    })
    gsap.to(" #part2>h2",{
        scrollTrigger:{
            scroller:"#main",
            trigger:"#part2 h1",
            start:"top 50%"
          },
        opacity:1,
        ease:Expo.easeInout,
        duration:.5
    })
    gsap.to("#part2 .videodiv",{
        scrollTrigger:{
            scroller:"#main",
            trigger:"#part2 .videodiv",
            start:"top 50%"
          },
        opacity:1,
        ease:Expo.easeInout,
        duration:.5
    })
}
function Animation4(){
    gsap.to("#part4 #video1,#part4 #play1",{
        scrollTrigger:{
         scroller:"#main",
         trigger:"#part4 #video1",
         start:"top 10%"
        },
        opacity:1,
        ease:Expo.easeInout,
        duration:.5
    })
}
function Animation5(){
    gsap.to("#part5 video,#part5 h1",{
        scrollTrigger:{
         scroller:"#main",
         trigger:"#part5",
         start:"top 10%"
        },
        display:"initial",
        stagge:.3,
        ease:Expo.easeInout,
        duration:.5
    })
}
function Animation6(){
    gsap.to("#part6>h1,.row1,.row2",{
        scrollTrigger:{
         scroller:"#main",
         trigger:"#part6",
         start:"top 10%"
        },
        opacity:1,
        stagge:.2,
        ease:Expo.easeInout,
        duration:.5
    })
}
function Animation7(){
    gsap.to("#part7 h1,.rows",{
        scrollTrigger:{
         scroller:"#main",
         trigger:"#part7",
         start:"top 10%"
        },
        opacity:1,
        stagge:.2,
        ease:Expo.easeInout,
        duration:.5
    })
}

show();
video();
Animation1();
Animation2();
Animation3();
Animation4();
Animation5();
Animation6();
Animation7();
// Animation8();



