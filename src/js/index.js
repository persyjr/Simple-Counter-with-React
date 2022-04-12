//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Counter from "./component/Counter.jsx";
import Button from "./component/Button.jsx";

//render your react application

/* codigo para mostrar counter likes renderizar 
ReactDOM.render(<Counter />, document.querySelector("#app"));
*/
/* codigo para mostrar el valor de los segundos del reloj (contador sin estado)*/

var seconds = 0;
var segundos = 0;

function renderClock() {
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(seconds / 3600);
	var days = Math.floor(seconds / 86400);
	if (segundos == 60) {
		segundos = 0;
	} else {
		segundos = segundos + 1;
	}

	ReactDOM.render(
		<div class="bigcounter">
			<div>
				<i class="far fa-clock"></i>
			</div>
			<Counter valor={days} />
			<Counter valor={hours} class="clockcounter" />
			<Counter valor={minutes} class="clockcounter" />
			<Counter valor={segundos} class="clockcounter" />
			<Button />
		</div>,
		document.querySelector("#app")
	);
	seconds++;
}
setInterval(renderClock, 1000);
