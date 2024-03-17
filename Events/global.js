import { ROOT_DIV } from "../Helper/const.js";
import { globalState } from "../index.js";
import { selfHighlight } from "../Render/main.js";

//highlight or not
let highlight_state = false;
let selfhighlighted = null;

function whitePawnClick(square)
{
  const piece = square.piece;
  //highlight clicked element
  if(piece == selfhighlighted)
  {
    clearSelfHighlight(selfhighlighted);
    clearHighlight();
    return;
  }
  clearSelfHighlight(selfhighlighted);
  selfHighlight(piece);
  selfhighlighted = piece;
}

function clearSelfHighlight(piece) {
  if(piece){

    document.getElementById(piece.current_position).classList.remove("selfhighlight");

    selfhighlighted = null;
  }
}

function globalEvent()
{
  ROOT_DIV.addEventListener("click", function(event) {
    const clickID = event.target.parentNode.id;
    const flatArray = globalState.flat();

    const square = (flatArray.find(el => el.id == clickID));

    if(square.piece.piece_name == "WHITE_PAWN")
    {
      whitePawnClick(square);
      
    }
    
  });
}

export {globalEvent};