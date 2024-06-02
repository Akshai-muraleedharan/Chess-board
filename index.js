
const chessContainer = document.getElementById('chess_square_holder');

const btnEl = document.querySelector('button');







async function chessSquare() {

  // The loop is to create div for dom 

  for (let i = 0; i <= 63; i++) {
    let div = document.createElement('div')
    div.className = "chess_squares"
    chessContainer.appendChild(div)

  }
  //  The querySelector is to take div from dom 
  const squares = document.querySelectorAll('.chess_squares')
  let square_item 
  //  The forEach method is take div elements from nodelist array
  squares.forEach((item, index) => {
    square_item = item;
    let index_number = index + 1;
    
  // The condition is used for set color to the chess square
    if (index_number <= 8) {
      square_item.classList.add('background_odd')
    }
    else if (index_number >= 9 && index_number <= 16) {
      square_item.classList.add('background_even')
    }
    else if (index_number >= 17 && index_number <= 24) {
      square_item.classList.add('background_odd')
    }
    else if (index_number >= 25 && index_number <= 32) {
      square_item.classList.add('background_even')
    }
    else if (index_number >= 33 && index_number <= 40) {
      square_item.classList.add('background_odd')
    }
    else if (index_number >= 41 && index_number <= 48) {
      square_item.classList.add('background_even')
    }
    else if (index_number >= 49 && index_number <= 56) {
      square_item.classList.add('background_odd')
    }
    else if (index_number >= 57 && index_number <= 64) {
      square_item.classList.add('background_even')
    }

  })
  

}





chessSquare()


