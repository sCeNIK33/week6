




// First, sign up for an account at https://themoviedb.org
// Once verified and signed-in, go to Settings and create a new
// API key; in the form, indicate that you'll be using this API
// key for educational or personal use, and you should receive
// your new key right away.
​
// For this exercise, we'll be using the "now playing" API endpoint
// https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US
​
// Note: image data returned by the API will only give you the filename;
// prepend with `https://image.tmdb.org/t/p/w500/` to get the 
// complete image URL
​
​
window.addEventListener('DOMContentLoaded', async function(event) {
  // Step 1: Construct a URL to get movies playing now from TMDB, fetch
  // data and put the Array of movie Objects in a variable called
  // movies. Write the contents of this array to the JavaScript
  // console to ensure you've got good data
  // ⬇️ ⬇️ ⬇️
  let nowPlaying= `https://api.themoviedb.org/3/movie/now_playing?api_key=db3d694f164aefeeaecbe1ceaa2f38bb&language=en-US`
​
  let response = await fetch(nowPlaying)
  //console.log(nowPlaying)
  let json = await response.json()
    //console.log(json)
  let movies = json.results
   //console.log(movies)
  let db = firebase.firestore()
  let watchedSnapshot = await db.collection('watched').get()
    // console.log(WatchedSnapshot)
  
    let watchedMovies = watchedSnapshot.docs
      // console.log(posts[0].data())
​
  // ⬆️ ⬆️ ⬆️ 
  // End Step 1
  
  // Step 2: 
  // - Loop through the Array called movies and insert HTML
  //   into the existing DOM element with the class name .movies
  // - Include a "watched" button to click for each movie
  // - Give each "movie" a unique class name based on its numeric
  //   ID field.
  // Some HTML that would look pretty good... replace with real values :)
  // <div class="w-1/5 p-4 movie-abcdefg1234567">
  //   <img src="https://image.tmdb.org/t/p/w500/moviePosterPath.jpg" class="w-full">
  //   <a href="#" class="watched-button block text-center text-white bg-green-500 mt-4 px-4 py-2 rounded">I've watched this!</a>
  // </div>
  // ⬇️ ⬇️ ⬇️
​
  
​
for ( let i=0; i<movies.length; i++) {
 
  let movie = movies[i]
  let movieId = movie.id
  let dbMovie = await db.collection('watched').doc(`${movieid}`).get()
  let dbMovieData = dbMovie.data()
    console.log(dbMovieData)
  let moviePosterPath = movie.poster_path
  let movieDOMElement = document.querySelector('.movies')
  // console.log(movieDOMElement)
  // console.log(movie)
​
  movieDOMElement.insertAdjacentHTML("beforeend",`
  <div class="w-1/5 p-4 movie-${movieId}">
    <img src="https://image.tmdb.org/t/p/w500${moviePosterPath}" class="w-full">
    <a href="#" class="watched-button block text-center text-white bg-green-500 mt-4 px-4 py-2 rounded">I've watched this!</a>
  </div>
  `)
​
  if (dbMovieData){
    let movieView = document.querySelector(`.movie-${movieId}`)
    movieView.classList.add('opacity-20')
  }
​
​
  let watchedButton = document.querySelector(`.movie-${movieId}`)
  watchedButton.addEventListener(`click`, async function(event){
    event.preventDefault()
​
    let movieView = document.querySelector(`.movie-${movieId}`)
    // console.log(movieView)
    movieView.classList.add('opacity-20')
    await db.collection('watched').doc(`${movieId}`).set({ })
​
  })
}
​
  // ⬆️ ⬆️ ⬆️ 
  // End Step 2
​
  // Step 3: 
  // - Attach an event listener to each "watched button"
  // - Be sure to prevent the default behavior of the button
  // - When the "watched button" is clicked, changed the opacity
  //   of the entire "movie" by using .classList.add('opacity-20')
  // - When done, refresh the page... does the opacity stick?
  // - Bonus challenge: add code to "un-watch" the movie by
  //   using .classList.contains('opacity-20') to check if 
  //   the movie is watched. Use .classList.remove('opacity-20')
  //   to remove the class if the element already contains it.
  // ⬇️ ⬇️ ⬇️
  
  // let watchedButtons = document.querySelectorAll(`.watched-button`)
  //   watchedButtons.addEventListener(`click`, async function(event){
  //     event.preventDefault()
  //     document.querySelector(.movie-movieid)
​
​
​
    // })
​
​
  //let button = document.querySelector(`.post`)
  //button.addEventListener(`click`, async function(event){
​
  })
​
  // ⬆️ ⬆️ ⬆️ 
  // End Step 3
​
  // Step 4: 
  // - Properly configure Firebase and Firebase Cloud Firestore
  // - Inside your "watched button" event listener, you wrote in
  //   step 3, after successfully setting opacity, persist data
  //   for movies watched to Firebase.
  // - The data could be stored in a variety of ways, but the 
  //   easiest approach would be to use the TMDB movie ID as the
  //   document ID in a "watched" Firestore collection.
  // - Hint: you can use .set({}) to create a document with
  //   no data – in this case, the document doesn't need any data;
  //   if a TMDB movie ID is in the "watched" collection, the 
  //   movie has been watched, otherwise it hasn't.
  // - Modify the code you wrote in Step 2 to conditionally
  //   make the movie opaque if it's already watched in the 
  //   database.
  // - Hint: you can use if (document) with no comparison
  //   operator to test for the existence of an object.







// First, sign up for an account at https://themoviedb.org
// Once verified and signed-in, go to Settings and create a new
// API key; in the form, indicate that you'll be using this API
// key for educational or personal use, and you should receive
// your new key right away.
​
// For this exercise, we'll be using the "now playing" API endpoint
// https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US
​
// Note: image data returned by the API will only give you the filename;
// prepend with `https://image.tmdb.org/t/p/w500/` to get the 
// complete image URL
​
​
window.addEventListener('DOMContentLoaded', async function(event) {
  // Step 1: Construct a URL to get movies playing now from TMDB, fetch
  // data and put the Array of movie Objects in a variable called
  // movies. Write the contents of this array to the JavaScript
  // console to ensure you've got good data
  // ⬇️ ⬇️ ⬇️
  let nowPlaying= `https://api.themoviedb.org/3/movie/now_playing?api_key=db3d694f164aefeeaecbe1ceaa2f38bb&language=en-US`
​
  let response = await fetch(nowPlaying)
  //console.log(nowPlaying)
  let json = await response.json()
    //console.log(json)
  let movies = json.results
   //console.log(movies)
  let db = firebase.firestore()
  let watchedSnapshot = await db.collection('watched').get()
    // console.log(WatchedSnapshot)
  
    let watchedMovies = watchedSnapshot.docs
      // console.log(posts[0].data())
​
  // ⬆️ ⬆️ ⬆️ 
  // End Step 1
  
  // Step 2: 
  // - Loop through the Array called movies and insert HTML
  //   into the existing DOM element with the class name .movies
  // - Include a "watched" button to click for each movie
  // - Give each "movie" a unique class name based on its numeric
  //   ID field.
  // Some HTML that would look pretty good... replace with real values :)
  // <div class="w-1/5 p-4 movie-abcdefg1234567">
  //   <img src="https://image.tmdb.org/t/p/w500/moviePosterPath.jpg" class="w-full">
  //   <a href="#" class="watched-button block text-center text-white bg-green-500 mt-4 px-4 py-2 rounded">I've watched this!</a>
  // </div>
  // ⬇️ ⬇️ ⬇️
​
  
​
for ( let i=0; i<movies.length; i++) {
 
  let movie = movies[i]
  let movieId = movie.id
  let dbMovie = await db.collection('watched').doc(`${movieid}`).get()
  let dbMovieData = dbMovie.data()
    console.log(dbMovieData)
  let moviePosterPath = movie.poster_path
  let movieDOMElement = document.querySelector('.movies')
  // console.log(movieDOMElement)
  // console.log(movie)
​
  movieDOMElement.insertAdjacentHTML("beforeend",`
  <div class="w-1/5 p-4 movie-${movieId}">
    <img src="https://image.tmdb.org/t/p/w500${moviePosterPath}" class="w-full">
    <a href="#" class="watched-button block text-center text-white bg-green-500 mt-4 px-4 py-2 rounded">I've watched this!</a>
  </div>
  `)
​
  if (dbMovieData){
    let movieView = document.querySelector(`.movie-${movieId}`)
    movieView.classList.add('opacity-20')
  }
​
​
  let watchedButton = document.querySelector(`.movie-${movieId}`)
  watchedButton.addEventListener(`click`, async function(event){
    event.preventDefault()
​
    let movieView = document.querySelector(`.movie-${movieId}`)
    // console.log(movieView)
    movieView.classList.add('opacity-20')
    await db.collection('watched').doc(`${movieId}`).set({ })
​
  })
}
​
  // ⬆️ ⬆️ ⬆️ 
  // End Step 2
​
  // Step 3: 
  // - Attach an event listener to each "watched button"
  // - Be sure to prevent the default behavior of the button
  // - When the "watched button" is clicked, changed the opacity
  //   of the entire "movie" by using .classList.add('opacity-20')
  // - When done, refresh the page... does the opacity stick?
  // - Bonus challenge: add code to "un-watch" the movie by
  //   using .classList.contains('opacity-20') to check if 
  //   the movie is watched. Use .classList.remove('opacity-20')
  //   to remove the class if the element already contains it.
  // ⬇️ ⬇️ ⬇️
  
  // let watchedButtons = document.querySelectorAll(`.watched-button`)
  //   watchedButtons.addEventListener(`click`, async function(event){
  //     event.preventDefault()
  //     document.querySelector(.movie-movieid)
​
​
​
    // })
​
​
  //let button = document.querySelector(`.post`)
  //button.addEventListener(`click`, async function(event){
​
  })
​
  // ⬆️ ⬆️ ⬆️ 
  // End Step 3
​
  // Step 4: 
  // - Properly configure Firebase and Firebase Cloud Firestore
  // - Inside your "watched button" event listener, you wrote in
  //   step 3, after successfully setting opacity, persist data
  //   for movies watched to Firebase.
  // - The data could be stored in a variety of ways, but the 
  //   easiest approach would be to use the TMDB movie ID as the
  //   document ID in a "watched" Firestore collection.
  // - Hint: you can use .set({}) to create a document with
  //   no data – in this case, the document doesn't need any data;
  //   if a TMDB movie ID is in the "watched" collection, the 
  //   movie has been watched, otherwise it hasn't.
  // - Modify the code you wrote in Step 2 to conditionally
  //   make the movie opaque if it's already watched in the 
  //   database.
  // - Hint: you can use if (document) with no comparison
  //   operator to test for the existence of an object.


  //     ////
// //     let movieId=(`${json.results[i].id}`)
// //     //let docRef=await db.collection(`movies`).doc(`${movieId}`).set({})
// // let movieClicked= document.querySelector(`.watched-${json.results[i].id}` )
// // console.log(movieClicked)
// // movieClicked.addEventListener('click', async function(event){
// //   //if(document.querySelector(`.watched-${json.results[i].id}`).classList.contains(`opacity-20`))
// // if((await db.collection('movies').doc('${json.results[i].id').data())==`watched`)
// //   {
// //     document.querySelector(`.watched-${json.results[i].id}`).classList.remove(`opacity-20`)
// //   docRef=await db.collection(`movies`).doc(`${movieId}`).set({})}
// //   else{document.querySelector(`.watched-${json.results[i].id}`).classList.add(`opacity-20`)
// // //let docRef=await db.collection(`movies`).doc(`${movieId}`).set({})
// //  docRef=await db.collection(`movies`).doc(`${movieId}`).update({text: `watched`})
// //     console.log(docRef)

// // let temp=await db.collection('movies').doc(`${movieId}`).get()
// // console.log(temp)
// // console.log(temp.data())
// // if(temp.data().text!= null)  {
// // }

// // if(temp.data()) {...}