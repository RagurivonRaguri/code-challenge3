fetch('http://localhost:3000/films')
  .then(res => res.json())
  .then(data => movieList(data));

function movieList(films) {
  const listOfMovies = document.querySelector('#list-container');
  films.forEach(film => {
    const movie = document.createElement('li');
    movie.innerHTML = `
      <div class="card-body">
        <h2>${film.title}</h2>
        <p><p>
      </div>
    `;
    listOfMovies.appendChild(movie);

    movie.addEventListener('click', e => {
      e.preventDefault();

      const movieContainer = document.querySelector('#movie-container');
      movieContainer.innerHTML = '';

      const movieCard = document.createElement('li');
      movieCard.setAttribute('id', film.id);
      movieCard.innerHTML = `
        <div id="card">
          <h1 id="title">${film.title}</h1>
          <img class="card-img" src="${film.poster}">
          <div id="movieDetails">
            <p>Total time: ${film.runtime} minutes</p>
            <p>Showtime: ${film.showtime}</p>
            <p>About: ${film.description}</p>
            <p>Capacity: ${film.capacity}</p>
            <p>Tickets sold: ${film.tickets_sold}</p>
            <button id="btn">Buy Ticket</button>
          </div>
        </div>
      `;
      movieContainer.appendChild(movieCard);
      const button = movieCard.querySelector('#btn');
         button.addEventListener('click', () => {
           if (film.tickets_sold < film.capacity) {
           film.tickets_sold += 1;
           const soldTickets = movieCard.querySelector('#movieDetails p:nth-of-type(2)');
           soldTickets.textContent = `Tickets sold: ${film.tickets_sold}`;

           const remainingTickets = document.createElement('p');
          remainingTickets.textContent = `Remaining tickets: ${film.capacity - film.tickets_sold}`;
            movieCard.querySelector('#movieDetails').appendChild(remainingTickets);

    fetch(`http://localhost:3000/films/${film.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tickets_sold: film.tickets_sold })
       })
       .then(res => res.json())
        } else {
           alert('Sorry, Fully Booked');
           const soldOut = movie.querySelector('p');
           soldOut.textContent=`Sold Out!`
           movie.appendChild(soldOut);
        }
     }); 
    });
  });
}


