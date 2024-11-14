// URL of the JSON data
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

// Select the cards container
const cards = document.querySelector('#cards');

// Function to fetch prophet data
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets); 
    displayProphets(data.prophets); 
}

// Function to display each prophet's data
const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        console.log(`Firstname: ${prophet.name}, Lastname: ${prophet.lastname}`);

        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let birthDate = document.createElement('p');
        let deathDate = document.createElement('p');
        let lengthOfService = document.createElement('p');
        let order = document.createElement('p');
        let birthplace = document.createElement('p');
        let numOfChildren = document.createElement('p');
        let portrait = document.createElement('img');

        // Fill in the full name and image attributes
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthDate.textContent = `Born: ${prophet.birthdate}`;
        deathDate.textContent = `Died: ${prophet.death}`;
        lengthOfService.textContent = `Length of Service: ${prophet.length} years`;
        order.textContent = `Order: ${prophet.order}`;
        birthplace.textContent = `Birthplace: ${prophet.birthplace}`;
        numOfChildren.textContent = `Number of Children: ${prophet.numofchildren}`;
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Append the full name and portrait to the card, then card to cards div
        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(deathDate);
        card.appendChild(lengthOfService);
        card.appendChild(order);
        card.appendChild(birthplace);
        card.appendChild(numOfChildren);
        card.appendChild(portrait);
        cards.appendChild(card);
    });
};

// Call the function to fetch and display data
getProphetData();