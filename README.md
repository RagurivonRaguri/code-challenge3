# code-challenge3
# Flatdango Movie House
The deliverables are related to a movie ticket booking application. As a user of this application, I can see movie details of the first movie such as its poster, title, runtime, showtime, and available tickets when the page loads. The number of tickets available is calculated by subtracting the number of tickets sold from the total capacity of the theater. To retrieve the film data, a GET request needs to be made to the endpoint '/films/1'. The example response given shows the JSON format of the data retrieved.

Additionally, I can also see a menu of all movies on the left side of the page in the 'ul#films' element when the page loads. This list can be styled by adding the classes 'film item' to each 'li' element. There is a hardcoded placeholder 'li' element in the 'ul#films' element, which can be removed using JavaScript or directly editing the HTML file. To retrieve film data for this list, a GET request to the endpoint '/films' needs to be made. The example response shows an array of JSON objects containing movie details for each movie.

Lastly, as a user, I can buy a ticket for a movie by clicking the 'Buy Ticket' button. Upon clicking, the number of available tickets should decrease on the frontend. However, if there are no available tickets for the show, I should not be able to buy a ticket. This ensures that tickets are not oversold, and users do not face any inconvenience.
# Author:Lincoln Muraguri
# year[2023] author[L.M.M]