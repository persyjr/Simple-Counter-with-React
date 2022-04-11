/* codigo para aumentar o disminuir, manipulando el estado likes
import React, { useState } from "react";

const Counter = () => {
	var [seconds, setSeconds] = useState(0);
	return (
		<div>
			<h2>{seconds}</h2>
			<button onClick={() => setSeconds(seconds + 1)}>+1</button>
			<button onClick={() => setSeconds(seconds - 1)}>-1</button>
		</div>
	);
};
export default Counter;
*/

/* codigo para mostrar el valor de los segundos del reloj*/

import React from "react";
let Counter = (props) => {
	return <div class="clockcounter">{props.valor}</div>;
};

export default Counter;
