// black pieces
function blackPawn(current_position) {
  return {
    current_position,
    img: "Assets/Black/pawn.svg",
    piece_name: "BLACK_PAWN",
  };
}
function blackBishop(current_position) {
  return {
    current_position,
    img: "Assets/Black/bishop.svg",
    piece_name: "BLACK_BISHOP",
  };
}
function blackKnight(current_position) {
  return {
    current_position,
    img: "Assets/Black/knight.svg",
    piece_name: "BLACK_KNIGHT",
  };
}
function blackKing(current_position) {
  return {
    current_position,
    img: "Assets/Black/king.svg",
    piece_name: "BLACK_KING",
  };
}
function blackQueen(current_position) {
  return {
    current_position,
    img: "Assets/Black/queen.svg",
    piece_name: "BLACK_QUEEN",
  };
}
function blackRook(current_position) {
  return {
    current_position,
    img: "Assets/Black/rook.svg",
    piece_name: "BLACK_ROOK",
  };
}

// white pieces
function whitePawn(current_position) {
  return {
    current_position,
    img: "Assets/White/pawn.svg",
    piece_name: "WHITE_PAWN",
  };
}
function whiteRook(current_position) {
  return {
    current_position,
    img: "Assets/White/rook.svg",
    piece_name: "WHITE_ROOK",
  };
}
function whiteKnight(current_position) {
  return {
    current_position,
    img: "Assets/White/knight.svg",
    piece_name: "WHITE_KNIGHT",
  };
}
function whiteBishop(current_position) {
  return {
    current_position,
    img: "Assets/White/bishop.svg",
    piece_name: "WHITE_BISHOP",
  };
}
function whiteQueen(current_position) {
  return {
    current_position,
    img: "Assets/White/queen.svg",
    piece_name: "WHITE_QUEEN",
  };
}
function whiteKing(current_position) {
  return {
    current_position,
    img: "Assets/White/king.svg",
    piece_name: "WHITE_KING",
  };
}

export {
  blackPawn,
  blackBishop,
  blackKing,
  blackQueen,
  blackKnight,
  blackRook,
  whitePawn,
  whiteBishop,
  whiteKing,
  whiteQueen,
  whiteKnight,
  whiteRook,
};