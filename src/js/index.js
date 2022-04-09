//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Counter from "./component/Counter.jsx";

//render your react application

ReactDOM.render(<Counter />, document.querySelector("#app"));

/* codigo para mostrar el valor de los segundos del reloj (contador sin estado)
var seconds = 0;
function renderClock() {
	ReactDOM.render(
		<Counter seconds={seconds} />,
		document.querySelector("#app")
	);
	seconds++;
}
setInterval(renderClock, 1000);
*/
