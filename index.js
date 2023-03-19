let btn=document.getElementById('btn');
let output=document.getElementById('output')

let quotes =
[
    '“Things get done only if the data we gather can inform and inspire those in a position to make a difference.”-Dr. Mike Schmoker',
    '“Torture the data, and it will confess to anything.”-Ronald Coase',
    '“Data is the new oil.”-Clive Humby',
    '“All models are wrong but some are useful.”-George E.P Box',
    '“If we have data, lets look at data. If all we have are opinions, lets go with mine.”-Jim L Barksdale',
    '“Intuition is thinking that you know without knowing why you do.”-Daniel Kahneman',
    '“In God we trust. All others bring data.”-Barry Beracha',
    '“Errors using inadequate data are much less than those using no data at all.”-Charles Babbage',
    '“You can have data without information, but you cannot have information without data.”-Daniel Keys Moran',
];

btn.addEventListener('click', function(){

    randomQuote=quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote
})

const faqs= document.querySelectorAll("#faq");

faqs.forEach((faq) =>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('active');
    });
});


const buttons = document.querySelectorAll('button');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )


// const buttons = document.querySelectorAll("[data-carousel-button]")

// buttons.forEach(button =>{
//     button.addEventListener("click",()=>{
//         const offset = button.dataset.carouselButton === "next" ? 1 : -1
//         const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

//         const ActiveSlide = slides.querySelector("[data-active]")
//         let NewIndex = [...slides.children].indexOf(ActiveSlide) + offset
//         if (NewIndex < 0) NewIndex = slides.children.length-1
//         if (NewIndex >= slides.children.length) NewIndex=0

//         slides.children[NewIndex].dataset.active = true
//         delete ActiveSlide.dataset.active
//     })
// })

const submitform = e =>{
    let name = document.getElementById('fname').value;
    email= document.getElementById('semail').value;
    mobileno= document.getElementById('mno').value;
    query= document.getElementById('myquery').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    formData.push({name,email,mobileno,query});
    localStorage.setItem('formData',JSON.stringify(formData));
    dispData();
    e.preventDefault();
} 