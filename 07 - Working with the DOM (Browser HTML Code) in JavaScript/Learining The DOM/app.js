const section = document.getElementById("section-id");
const button = document.getElementById('Btn-id');


section.className='red-bg'
button.addEventListener('click',()=>{
    // one way
    // if(section.className === 'red-bg visible')
    // {
    //     section.className = 'red-bg invisible';
    // }else{
    //     section.className = 'red-bg visible';
    // }

    //or another.
    section.classList.toggle('invisible');

})