// const userInput ='last name'
// const person = {
//     // first name: 'amr',
//     'first name': 'amr',
//     // userInput : 'khaled', // wrong.
//     that will make the key called userInput
//     //I want it to be the last name as user entered
//     [userInput]:'khaled', // as is it looks the thing inside userInputs
//     age: 10,
//     hobbies: ['sports,coding'],
//     greet: function (){alert('hi')},
//     1.3 :'hello'
// };
// console.log(person);
// person.greet();
// person.isAdmin =true; // adds more to the object!
// // how to access the value with the key?
// with square bracket
// console.log(person['first name']);// should be string NOTE!
// console.log(person['1.3']);
// //can't do (person.first name) wrong

//Working with the app.
// this is the Global Window, Which has all objects like making functions in the global scope,
// those functions are methods for the this keyword which is the window global
const addMovieButton = document.getElementById('add-movie-btn');
const  searchButton = document.getElementById('search-btn');
const movies = [];


const renderMovie=(filter ='')=>{


    const movieList = document.getElementById('movie-list');
    if(movies.length===0){
        movieList.classList.remove('visible')
        return; //exit out if no movies (deleted or no input for them)
        // Don't continue
    }else{
        movieList.classList.add('visible');
    }
    //this way is not ideal but just for learning
    movieList.innerHTML = ``

    const filteredMovies = !filter? movies: movies.filter(movie=>movie.info.title.includes(filter));

    filteredMovies.forEach((movie)=>{
        const movieEl =document.createElement('li');
        let{getFormattedTitle}=movie; //pulling out the getFormattedTitle in a variable(function)
        getFormattedTitle =getFormattedTitle.bind(movie);
        let text =getFormattedTitle()+ " - "
        for (const key in movie.info){
            if (key!=='title'){
                text+= `${key}: ${movie.info[key]}`
            }
        }
        movieEl.textContent = text;
        movieList.append(movieEl)
    })
}

const addMovieHandler=()=>{
    const title = document.getElementById('title').value;
    const extraNameValue = document.getElementById('extra-name').value;
    const extraValueValue = document.getElementById('extra-value').value;

    if(title.trim()===''||extraValueValue.trim()===''||extraNameValue.trim()===''){
        alert('Invalid');
        return;
    }
    const newMovie = {
        info:{
            title, // nice trick
            [extraNameValue]:extraValueValue
        },
        id:Math.random().toString(),
        getFormattedTitle(){
            return this.info.title.toUpperCase(); // refers to object this = newMovie
        }
    };
    movies.push(newMovie);
    renderMovie();
}
const searchHandler =()=>{
    const filterInput = document.getElementById('filter-title').value;
    renderMovie(filterInput);
}



addMovieButton.addEventListener('click',addMovieHandler);
searchButton.addEventListener('click',searchHandler)