const addMovieButton = document.querySelector('header button');
const modal = document.getElementById('add-modal');
const backdrop = document.getElementById('backdrop');
const cancelButton = modal.querySelector('.btn--passive');
const addButton = cancelButton.nextElementSibling
const movieInputs = modal.querySelectorAll('input');
const entrySection = document.getElementById('entry-text');
const movieList = document.getElementById('movie-list');
const deleteModal = document.getElementById('delete-modal');
const movies = [];

const toggleBackdropHandler = () => {
    backdrop.classList.toggle('visible');
}
const cancelMovieDeletion =()=>{
    toggleBackdropHandler();
    deleteModal.classList.remove('visible');
}
const closeMovieModalHandler = () => {
    modal.classList.remove('visible');

}
const showMovieModalHandler = () => {
    modal.classList.add('visible');
    toggleBackdropHandler();
}
const renderUI =()=>{
    // if there is movies in the array set the display or the entry section to none
    if(movies.length===0){
        return;
    }
    entrySection.style.display = 'none';
}
const deleteMovie =(movieId)=>{
    let movieIndex=0;
    for(const movie of movies){
        if(movie.id===movieId){
            break
        }else{
            movieIndex++
        }
    }
    movies.splice(movieIndex,1)
    const movieList = document.getElementById('movie-list');
    movieList.children[movieIndex].remove(); //not fully supported
    //movieList.removeChild(movieList.children[movieIndex]);
}
const deleteMovieHandler =(movieId)=>{
    deleteModal.classList.add('visible');
    toggleBackdropHandler();
    // deleteMovie();
}
const movieRender=(id,titleValue,imageValue,ratingValue)=>{
    // this shouldn't be a global Object, so you can have more than one list created not the same one
    const movieListItem = document.createElement("li");
    movieListItem.className='movie-element';
    movieListItem.innerHTML=`
    <div class="movie-element__image">
    <img src="${imageValue}" alt="${titleValue}">
    </div>
    <div class="movie-element__info">
    <h2>${titleValue}</h2>
    <p>${ratingValue}</p>
    </div>`;
    movieListItem.addEventListener('click',deleteMovieHandler.bind(null,id))
    //adds the created list to the Ul(movieList)
    movieList.append(movieListItem);

}
const clearInputs =()=>{
    //for more dynamic
    for (const input of movieInputs){
        input.value= "";
    }

    // also works
    // movieInputs[0].value= "";
    // movieInputs[1].value= "";
    // movieInputs[2].value= "";
}
const cancelAddMovieHandler = () => {
    closeMovieModalHandler();
    clearInputs();
}
const backdropCancelHandler =()=>{
    closeMovieModalHandler();
    cancelMovieDeletion();

}
const addingMovieHandler = () => {
    // Saving Input
    const titleValue = movieInputs[0].value;
    const imageValue = movieInputs[1].value;
    const ratingValue = movieInputs[2].value;
    // checks for validate
    if (titleValue.trim() === "" ||
        imageValue.trim() === "" ||
        ratingValue.trim() === "" ||
        parseInt(ratingValue) > 5 || parseInt(ratingValue) < 1) {
        alert('Invalid Input! Rating should be between 1 and 5');
        return;
    }
    const movieObject = {
        id :Math.random().toString(),
        Title: titleValue,
        imgUrl: imageValue,
        Rating: ratingValue
    }
    movies.push(movieObject);
    console.log(movies)
    renderUI();
    clearInputs();
    closeMovieModalHandler();
    toggleBackdropHandler();
    movieRender(movieObject.id,titleValue,imageValue,ratingValue);
}

addMovieButton.addEventListener('click',
    showMovieModalHandler);
cancelButton.addEventListener('click',
    cancelAddMovieHandler);
addButton.addEventListener('click',
    addingMovieHandler);
backdrop.addEventListener('click',backdropCancelHandler);