const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;
  const pickedCards = []
  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here

      if (!card.classList.contains("turned") && !card.classList.contains("blocked")) {
        card.classList.toggle("turned")
        pickedCards.push(card)


        if (pickedCards.length === 2) {
          const card1 = pickedCards[0];
          const card2 = pickedCards[1];

          const isPair = memoryGame.checkIfPair(card1, card2);

          if (!isPair) {
            setTimeout(() => {
              // Flip back the cards after a short delay (you can adjust the delay as needed)
              card1.classList.remove("turned");
              card2.classList.remove("turned");
            }, 1000);
          } else {
            card1.classList.toggle("blocked");
            card2.classList.toggle("blocked");
          }
          // Check if the game is finished
          if (memoryGame.checkIfFinished()) {
            // Display a message or perform any other actions for game completion
            alert('You won!!!');
          }

          // Clear the array of picked cards for the next round
          pickedCards.length = 0;

        }


      }

      console.log(`Card clicked: ${card}`);
    });
  });
});
