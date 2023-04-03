# code-challenge3
# Flatdango Movie House
This is a JavaScript code that retrieves data from a local server using the fetch API and then creates a movie list on a webpage. The code starts with a fetch request to retrieve data from the URL http://localhost:3000/films.

The then() method is used to handle the response from the server in JSON format. The retrieved data is passed to the movieList() function, which creates a list of movies on the webpage.

Inside the movieList() function, a forEach() method is used to loop through each film object in the films array. A new li element is created for each film, and the title of the film is inserted into the h2 element inside the li element.

An event listener is added to each movie element to listen for a click event. When the user clicks on a movie, a new li element is created with an id attribute equal to the id of the film object. The new li element contains a movie card with details such as the title, poster, runtime, showtime, description, capacity, and tickets sold.

A Buy Ticket button is also included in the movie card, which is associated with an event listener to check if there are available tickets. If there are available tickets, the number of sold tickets is incremented by one, and the details of the remaining tickets are updated. The data is also updated on the server using a PATCH request.

If there are no available tickets, an alert message is displayed, and the Sold Out message is added to the movie element. The code ends with the closing of the event listeners and the loops.
# Author:Lincoln Muraguri
# year[2023] author[L.M.M]