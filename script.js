








// Gsap starts from here 






var main = gsap.timeline();
// first the header move upwad 
main
    .from("#header , #banner2",
        {
            opacity: 0,
            duration: 0.5,
            y: "10px",
        })
    
    .from("#hi , #banner1",

        {
            opacity: 0,
            duration: 0.8,
            y: "1000px",
        })


    
    .from(".name , #banner3",

        {
            opacity: 0,
            z: "8000rem" , 
            duration: 2,
            // y : "100px",  
        })



// gsap.from(".headings",
//     {
//         opacity: 0,
//         scale: 0.7,
//         duration: 3,
//         scrollTrigger:
//         {
//             trigger: ".headings",
//             scroller: "body",
//             start: "top 55%",
//             end: "top -35%",
//             // scrub : 1 ,   
//             // markers : true  , 

//         }
//     })

gsap.from("#page-3-heading",
    {
        opacity: 0,
        scale: 0.6,
        duration: 1.5,

        scrollTrigger:
        {
            trigger: "#page-3-heading",
            scroller: "body",
            start: "top 500rem",
            end: " top -50%",
            // scrub : 0.5 ,
            // markers: true,

        }
    })

gsap.from(".projects-inner-boxes",
    {
        opacity: 0,
        duration: 1,
        y: "50px",
        scale: 0.6,
        stagger: 0.5,
        scrollTrigger:
        {
            trigger: ".projects-inner-boxes",
            scroller: "body",
            start: "top 500rem",
            end: "top -100rem",
            // markers : true , 

        }

    })



gsap.from("#page-4-heading",
    {
        opacity: 0,
        scale: 0.6,
        duration: 1.5,

        scrollTrigger:
        {
            trigger: "#page-4-heading",
            scroller: "body",
            start: "top 500rem",
            end: " top -50%",
            // scrub : 0.5 ,
            // markers: true,

        }
    })




gsap.from(".html-section",
    {
        opacity: 0,
        duration: 1,
        y: "50px",
        scale: 0.6,
        stagger: 1,
        scrollTrigger:
        {
            trigger: ".html-section",
            scroller: "body",
            start: "top 500rem",
            end: "top -100rem",
            // markers : true , 

        }

    })
gsap.from("#additional-skill-heading",
    {
        opacity: 0,
        scale: 0.6,
        duration: 1.5,

        scrollTrigger:
        {
            trigger: "#additional-skill-heading",
            scroller: "body",
            start: "top 500rem",
            end: " top -50%",
            // scrub : 0.5 ,
            // markers: true,

        }
    })




gsap.from(".skill-set",
    {
        opacity: 0,
        duration: 1,
        x: "-800px",
        scale: 0.6,
        stagger: 0.5,
        scrollTrigger:
        {
            trigger: ".skill-set",
            scroller: "body",
            start: "top 500rem",
            end: "top -100rem",
            // markers : true , 

        }

    })





gsap.from("#page-5-heading",
    {
        opacity: 0,
        scale: 0.6,
        duration: 1,

        scrollTrigger:
        {
            trigger: "#page-5-heading",
            scroller: "body",
            start: "top 500rem",
            end: " top -50%",
            // scrub : 0.5 ,
            // markers: true,

        }
    })



gsap.from(".about-card",
    {
        opacity: 0,
        duration: 1.5,
        z: "8000px",
        scale: 0.6,
        stagger: 0.8,
        scrollTrigger:
        {
            trigger: ".about-card",
            scroller: "body",
            start: "top 600rem",
            end: "top -100rem",
            // markers: true,

        }

    })
