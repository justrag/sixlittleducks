import React from 'react';
//const diceFaces = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;' ];
const diceFaces = ["\u2680","\u2681","\u2682","\u2683","\u2684","\u2685",];
const Roller = ({roll}) => (
  <h1 className="roller">Roll: {diceFaces[roll - 1]}
  </h1>
  );
export default Roller;

/*
// https://codepen.io/jllodra/pen/hlsqv
function stopstart() {
  if(stopped) {
    stopped = false;
    t = setInterval(change, 100); 
  } else {
    clearInterval(t);
    stopped = true;
  }
  
}
*/