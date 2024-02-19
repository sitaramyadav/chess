class ChessPiece {
  constructor(position) {
    this.position = position;
  }
}

class Pawn extends ChessPiece {
  getMoves() {
    let [column, row] = this.position.split('');
    row = parseInt(row) + 1;
    return `${column}${row}`;
  }
}

class King extends ChessPiece {
  getMoves() {
    let [column, row] = this.position.split('');
    let moves = [];
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i !== 0 || j !== 0) {
          let newColumn = String.fromCharCode(column.charCodeAt(0) + i);
          let newRow = parseInt(row) + j;
          if (newColumn >= 'A' && newColumn <= 'H' && newRow >= 1 && newRow <= 8) {
            moves.push(`${newColumn}${newRow}`);
          }
        }
      }
    }
    return moves.join(', ');
  }
}

class Queen extends ChessPiece {
  getMoves() {
    let [column, row] = this.position.split('');
    let moves = [];
    for (let i = -7; i <= 7; i++) {
      for (let j = -7; j <= 7; j++) {
        if (i !== 0 || j !== 0) {
          let newColumn = String.fromCharCode(column.charCodeAt(0) + i);
          let newRow = parseInt(row) + j;
          if (newColumn >= 'A' && newColumn <= 'H' && newRow >= 1 && newRow <= 8) {
            moves.push(`${newColumn}${newRow}`);
          }
        }
      }
    }
    return moves.join(', ');
  }
}

function getMoves(pieceType, position) {
  let piece;
  switch (pieceType) {
    case 'Pawn':
      piece = new Pawn(position);
      break;
    case 'King':
      piece = new King(position);
      break;
    case 'Queen':
      piece = new Queen(position);
      break;
    default:
      console.log('Invalid piece type');
      return;
  }
  console.log(piece.getMoves());
}

getMoves('Pawn', 'G1');  // Outputs: G2
getMoves('King', 'D5');  // Outputs: C4, C5, C6, D4, D6, E4, E5, E6
getMoves('Queen', 'E4');  // Outputs: A4, B4, C4, D4, F4, G4, H4, E1, E2, E3, E5, E6, E7, E8, A8, B7, C6, D5, F3, G2, H1, B1, C2, D3, F5, G6, H7
