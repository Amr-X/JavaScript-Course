const addMovieModal = document.getElementById('add-modal');
const addMovieModalButton = document.querySelector('header button');
const backdrop =document.getElementById('backdrop');
const cancelAddMovieButton = document.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userLists = document.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const movies =[];

const toggleBackdrop =()=>{
    backdrop.classList.toggle('visible');
}

const toggleMovieModal = ()=>{
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
}

const clearInputs =()=>{
    for(const usrList of userLists){
        usrList.value = '';
    }
}

const cancelAddMovie =()=>{
    toggleMovieModal();
    clearInputs();
}

const updateUI = ()=>{
    if(movies.length===0){
        entryTextSection.style.display='block';
    }
    else{
        entryTextSection.style.display='none';
    }
}

const renderMoviveList = (title,image,rating)=> {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element'
    newMovieElement.innerHTML =`
    <div class="movie-element__image">
    <img src="${image}" alt="${title}">  
    </div>
    <div class="movie-element__info">   
    <h2>${title}</h2>
    <p>${rating}/5 starts</p>
    </div>`

    const theMovieList = document.getElementById('movie-list');
    theMovieList.append(newMovieElement);
}
const confirmAddMovie =()=>{
    const titleValue=userLists[0].value;
    const imageValue=userLists[1].value;
    const ratingValue=userLists[2].value;
    if (titleValue.trim()===''||imageValue.trim()===''||ratingValue<1||ratingValue>5){
        alert('Please enter valid input (rating between 1 , 5)')
        return;
    }

    const newMovie ={
        title:titleValue,
        image:imageValue,
        rating:ratingValue
    };
    movies.push(newMovie);
    console.log(movies);
    toggleMovieModal();
    clearInputs();
    renderMoviveList(titleValue,imageValue,ratingValue);
    updateUI();
}

addMovieModalButton.addEventListener('click',toggleMovieModal);
backdrop.addEventListener('click',toggleMovieModal);
cancelAddMovieButton.addEventListener('click',cancelAddMovie);
confirmAddMovieButton.addEventListener('click',confirmAddMovie);