import { ROOT_DIV } from "../Helper/const.js";
import { globalState } from "../index.js";
import { renderHighlight } from "../Render/main.js";
import { clearHighlight } from "../Render/main.js";

//highlight or not
let highlight_state = false;

function whitePawnClick({piece})
{
  const current_pos = piece.current_position;
  const flatArray = globalState.flat();
    //initial position
    if(current_pos[1] == "2")
    {
      const highlightSquareIDs = [
        `${current_pos[0]}${Number(current_pos[1])+1}`,
        `${current_pos[0]}${Number(current_pos[1])+2}`
      ];

      highlightSquareIDs.forEach((highlight) => 
      {
        globalState.forEach((row) => {
          row.forEach((element) => {
            if(element.id == highlight) {
            element.highlight = true;
            console.log(element);
            }
          });
        });

        if(highlight_state) clearHighlight();
        renderHighlight(highlight);
        highlight_state = true;
      
    });

  }
  console.log(globalState);
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
    console.log(globalState);
    
  });
}

export {globalEvent};