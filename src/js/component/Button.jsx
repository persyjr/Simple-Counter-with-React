/* codigo para aumentar o disminuir, manipulando el estado likes*/
import React, { useState, useEffect } from "react";

const Button = () => {
	var [seconds, setSeconds] = useState(0);
	useEffect(() => {
		// Actualiza el título del documento usando la API del navegador
		document.title = `You clicked ${seconds} times`;
	});
	return (
		<div>
			<h2>{seconds}</h2>
			<button onClick={() => setSeconds(seconds + 1)}>+1</button>
			<button onClick={() => setSeconds(seconds - 1)}>-1</button>
		</div>
	);
};
export default Button;
