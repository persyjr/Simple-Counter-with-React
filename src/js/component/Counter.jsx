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

/* codigo para mostrar el valor de los segundos del reloj
let Counter = (props) => {
	return <div>{props.seconds}</div>;
};
export default Counter;
*/
