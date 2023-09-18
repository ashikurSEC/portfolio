let nav = document.querySelector('.navbar');

window.onscroll = () =>{
    if(document.documentElement.scrollTop > 20){
        nav.classList.add('header-scrolled');
    }else{
        nav.classList.remove("header-scrolled");
    }
}

let navBar = document.querySelectorAll(".nav-link");
let navColl = document.querySelector('.navbar-collapse.collapse');

navBar.forEach((a) =>{
    a.addEventListener('click', ()=>{
        navColl.classList.remove('show');
    })
})


// ! Programming C PDF File Show ... 

document.getElementById('downloadButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default behavior of the link

    // Get the PDF URL
    const pdfUrl = this.getAttribute('href');

    // Open a new window/tab to display the PDF
    window.open(pdfUrl, '_blank');
});

// ? My Personal CV File Show... 

document.getElementById('downloadCVButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default behavior of the link

    // Get the PDF URL
    const pdfUrl = this.getAttribute('href');

    // Open a new window/tab to display the PDF
    window.open(pdfUrl, '_blank');
});


// Email Handler....

const button = document.querySelector('button');


button.addEventListener('submit', () =>{
    const email = document.querySelector('#email').value;
    alert('Your Submitted Successfully' + email);
})