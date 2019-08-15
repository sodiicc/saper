let fieldLength;

let loose = document.createElement('div');
loose.className = 'saper-loose';
loose.innerText = 'GAME OVER';
loose.style.display = 'none';
document.body.appendChild(loose);

let win = document.createElement('div');
win.className = 'saper-win';
win.innerText = 'YOU WIN';
win.style.display = 'none'
document.body.appendChild(win);

let container = document.getElementById('saper');
container.style.opacity = '0'

let startButton = document.getElementsByClassName('new-game')[0];

let numOfBombs = document.getElementsByClassName('number-of-bombs')[0];
console.log('numOfBombs', numOfBombs)

startButton.onclick = (() => {

  bombCount = '0';
  realBombCount = 0;

  if (loose.style.display === 'block') {
    loose.style.display = 'none'
  }
  if (win.style.display === 'block') {
    win.style.display = 'none'
  }

  container.style.opacity = '1'
  container.style.margin = '10px auto'
  console.log('fieldLength', fieldLength)
  let go = document.querySelectorAll('#saper>div');
  if (go) {

    go.forEach(element => {
      element.remove();
    });

  }

  startGame()

});

function startGame() {

  fieldLength = +document.getElementsByClassName('enter-length')[0].value;

  container.style.width = `${fieldLength * 60}px`;

  for (let i = 0; i < fieldLength * fieldLength; i++) {

    let square = document.createElement('div');
    if (Math.random() < (1 / 6)) {
      square.className = 'bomb-field';
    } else {
      square.className = 'saper-field';
    };
    container.appendChild(square);
    square.id = i;

    square.addEventListener('contextmenu', function (e) {
      e.preventDefault();

      if (square.innerText === 'bomb') {
        square.innerText = '';
        square.style.backgroundColor = ''
        bombCount--;
        if (e.target.className === 'bomb-field') {
          realBombCount--
        }
        numOfBombs.innerText = `${bombCount}/${bombs.length}`;
      }

      else if (square.innerText !== 'bomb' && bombCount < bombs.length) {
        square.innerText = 'bomb';
        square.style.backgroundColor = '#faa'
        if (bombCount < bombs.length) {
          bombCount++;

        }
        numOfBombs.innerText = `${bombCount}/${bombs.length}`;

        if (e.target.className === 'bomb-field') {
          realBombCount++
        }
      };

      if (realBombCount === bombs.length) {
        win.style.display = 'block'
      }
      return false;
    }, false);

  };
  numOfBombs.innerText = `${bombCount}/${bombs.length}`
}

let bombs = document.getElementsByClassName('bomb-field');
let bombCount = 0;
let realBombCount = 0;






let countBomb;

container.onclick = ((e) => {

  let a = +e.target.id;
  let el = e.target;
  numOfBombs.innerText = `${bombCount}/${bombs.length}`

  if (el.className === 'bomb-field') {
    el.style.backgroundColor = 'red';
    loose.style.display = 'block'
    for (let i = 0; i < bombs.length; i++) {
      bombs[i].style.backgroundColor = 'red'
    }
  } else {

    findBomb(a, el, 0)
  }

});



function findBomb(x, elem, countBomb) {
  countBomb = 0;
  elem.name = 'checked';
  console.log('elem.name', elem.name)



  if (x === 0) {
    let a = document.getElementById(`1`);
    let b = document.getElementById(`${fieldLength + 1}`);
    let c = document.getElementById(`${fieldLength}`)

    if (a.className === 'bomb-field') { countBomb++ };
    if (b.className === 'bomb-field') { countBomb++ };
    if (c.className === 'bomb-field') { countBomb++ };

    if (countBomb === 0) {
      if (a.name != 'checked') findBomb(1, a, 0);
      if (b.name != 'checked') findBomb((fieldLength + 1), b, 0);
      if (c.name != 'checked') findBomb(fieldLength, c, 0);
      // 
    }

  }
  else if (x === (fieldLength - 1)) {

    let a = document.getElementById(`${fieldLength - 2}`);
    let b = document.getElementById(`${2 * fieldLength - 1}`);
    let c = document.getElementById(`${2 * fieldLength - 2}`);

    if (a.className === 'bomb-field') { countBomb++ };
    if (b.className === 'bomb-field') { countBomb++ };
    if (c.className === 'bomb-field') { countBomb++ };

    if (countBomb == 0) {

      if (a.name != 'checked') findBomb((fieldLength - 2), a, 0);
      if (b.name != 'checked') findBomb((2 * fieldLength - 1), b, 0);
      if (c.name != 'checked') findBomb((2 * fieldLength - 2), c, 0);

    }

  }

  else if (x === (fieldLength * (fieldLength - 1))) {

    let a = document.getElementById(`${x + 1}`);
    let b = document.getElementById(`${x - fieldLength}`);
    let c = document.getElementById(`${x - fieldLength + 1}`);

    if (a.className === 'bomb-field') { countBomb++ };
    if (b.className === 'bomb-field') { countBomb++ };
    if (c.className === 'bomb-field') { countBomb++ };

    if (countBomb == 0) {

      if (a.name != 'checked') findBomb((x + 1), a, 0);
      if (b.name != 'checked') findBomb((x - fieldLength), b, 0);
      if (c.name != 'checked') findBomb((x - fieldLength + 1), c, 0);

    }

  }

  else if (x === (fieldLength * fieldLength - 1)) {

    let a = document.getElementById(`${x - 1}`);
    let b = document.getElementById(`${x - fieldLength}`);
    let c = document.getElementById(`${x - fieldLength - 1}`);

    if (a.className === 'bomb-field') { countBomb++ };
    if (b.className === 'bomb-field') { countBomb++ };
    if (c.className === 'bomb-field') { countBomb++ };

    if (countBomb == 0) {

      if (a.name != 'checked') findBomb((x - 1), a, 0);
      if (b.name != 'checked') findBomb((x - fieldLength), b, 0);
      if (c.name != 'checked') findBomb((x - fieldLength - 1), c, 0);

    }

  }

  else if (x < fieldLength - 1 && x !== 0) {

    let a = document.getElementById(`${x - 1}`);
    let b = document.getElementById(`${x + 1}`);
    let c = document.getElementById(`${x + fieldLength - 1}`);
    let d = document.getElementById(`${x + fieldLength}`);
    let e = document.getElementById(`${x + fieldLength + 1}`);

    if (a.className !== 'saper-field') { countBomb++ };
    if (b.className !== 'saper-field') { countBomb++ };
    if (c.className !== 'saper-field') { countBomb++ };
    if (d.className !== 'saper-field') { countBomb++ };
    if (e.className !== 'saper-field') { countBomb++ };

    if (countBomb == 0) {

      if (a.name != 'checked') findBomb((x - 1), a, 0);
      if (b.name != 'checked') findBomb((x + 1), b, 0);
      if (c.name != 'checked') findBomb((x + fieldLength - 1), c, 0);
      if (d.name != 'checked') findBomb((x + fieldLength), d, 0);
      if (e.name != 'checked') findBomb((x + fieldLength + 1), e, 0);

    }


  }

  else if (x > fieldLength * (fieldLength - 1) && x !== fieldLength - 1) {

    let a = document.getElementById(`${x - 1}`);
    let b = document.getElementById(`${x + 1}`);
    let c = document.getElementById(`${x - fieldLength - 1}`);
    let d = document.getElementById(`${x - fieldLength}`);
    let e = document.getElementById(`${x - fieldLength + 1}`);

    if (a.className === 'bomb-field') { countBomb++ };
    if (b.className === 'bomb-field') { countBomb++ };
    if (c.className === 'bomb-field') { countBomb++ };
    if (d.className === 'bomb-field') { countBomb++ };
    if (e.className === 'bomb-field') { countBomb++ };

    if (countBomb == 0) {

      if (a.name != 'checked') findBomb((x - 1), a, 0);
      if (b.name != 'checked') findBomb((x + 1), b, 0);
      if (c.name != 'checked') findBomb((x - fieldLength - 1), c, 0);
      if (d.name != 'checked') findBomb((x - fieldLength), d, 0);
      if (e.name != 'checked') findBomb((x - fieldLength + 1), e, 0);

    }
    // 
  }

  else if (x % fieldLength === 0) {

    let a = document.getElementById(`${x + 1}`);
    let b = document.getElementById(`${x + fieldLength}`);
    let c = document.getElementById(`${x - fieldLength}`);
    let d = document.getElementById(`${x + fieldLength + 1}`);
    let e = document.getElementById(`${x - fieldLength + 1}`);

    if (a.className === 'bomb-field') { countBomb++ };
    if (b.className === 'bomb-field') { countBomb++ };
    if (c.className === 'bomb-field') { countBomb++ };
    if (d.className === 'bomb-field') { countBomb++ };
    if (e.className === 'bomb-field') { countBomb++ };

    if (countBomb == 0) {

      if (a.name != 'checked') findBomb((x + 1), a, 0);
      if (b.name != 'checked') findBomb((x + fieldLength), b, 0);
      if (c.name != 'checked') findBomb((x - fieldLength), c, 0);
      if (d.name != 'checked') findBomb((x + fieldLength + 1), d, 0);
      if (e.name != 'checked') findBomb((x - fieldLength + 1), e, 0);

    }

  }

  else if ((x + 1) % fieldLength === 0) {

    let a = document.getElementById(`${x - 1}`);
    let b = document.getElementById(`${x + fieldLength}`);
    let c = document.getElementById(`${x - fieldLength}`);
    let d = document.getElementById(`${x + fieldLength - 1}`);
    let e = document.getElementById(`${x - fieldLength - 1}`);

    if (a.className === 'bomb-field') { countBomb++ };
    if (b.className === 'bomb-field') { countBomb++ };
    if (c.className === 'bomb-field') { countBomb++ };
    if (d.className === 'bomb-field') { countBomb++ };
    if (e.className === 'bomb-field') { countBomb++ };

    if (countBomb == 0) {

      if (a.name != 'checked') findBomb((x - 1), a, 0);
      if (b.name != 'checked') findBomb((x + fieldLength), b, 0);
      if (c.name != 'checked') findBomb((x - fieldLength), c, 0);
      if (d.name != 'checked') findBomb((x + fieldLength - 1), d, 0);
      if (e.name != 'checked') findBomb((x - fieldLength - 1), e, 0);

    }
  } else {

    let a = document.getElementById(`${x + 1}`);
    let b = document.getElementById(`${x - 1}`);
    let c = document.getElementById(`${x + fieldLength}`);
    let d = document.getElementById(`${x - fieldLength}`);
    let e = document.getElementById(`${x + fieldLength + 1}`);
    let f = document.getElementById(`${x - fieldLength + 1}`);
    let g = document.getElementById(`${x + fieldLength - 1}`);
    let h = document.getElementById(`${x - fieldLength - 1}`);

    if (a.className === 'bomb-field') { countBomb++ };
    if (b.className === 'bomb-field') { countBomb++ };
    if (c.className === 'bomb-field') { countBomb++ };
    if (d.className === 'bomb-field') { countBomb++ };
    if (e.className === 'bomb-field') { countBomb++ };
    if (f.className === 'bomb-field') { countBomb++ };
    if (g.className === 'bomb-field') { countBomb++ };
    if (h.className === 'bomb-field') { countBomb++ };

    if (countBomb == 0) {

      if (a.name != 'checked') { findBomb((x + 1), a, 0); }

      if (b.name != 'checked') { findBomb((x - 1), b, 0); }

      if (c.name != 'checked') { findBomb((x + fieldLength), c, 0); }

      if (d.name != 'checked') { findBomb((x - fieldLength), d, 0); }

      if (e.name != 'checked') { findBomb((x + fieldLength + 1), e, 0); }

      if (f.name != 'checked') { findBomb((x - fieldLength + 1), f, 0); }

      if (g.name != 'checked') { findBomb((x + fieldLength - 1), g, 0); }

      if (h.name != 'checked') { findBomb((x - fieldLength - 1), h, 0); }


    }

  }
  if (countBomb != 0) {
    elem.innerText = `${countBomb}`;
    elem.style.backgroundColor = '#bca'
  } else if (elem.className === 'bomb-field') {
    elem.style.backgroundColor = 'red';

  } else {
    elem.style.backgroundColor = 'rgb(160, 216, 128)';
  }

}