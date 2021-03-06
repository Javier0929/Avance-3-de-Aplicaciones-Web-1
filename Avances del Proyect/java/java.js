// Java de la portada
	/* Flecha de direccion de imagenes */
	/* Esta funcion se llama cuando la persona hace click en la fecha derecha del carousel para navegar a la derecha */

	function App() {}

window.onload = function (event) {
    var app = new App();
    window.app = app;
};

App.prototype.processingButton = function(event) {
    const btn = event.currentTarget;
    const slickList = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector('#track');
    const slick = track.querySelectorAll('.slick');

    const slickWidth = slick[0].offsetWidth;
    
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == ""  ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

    btn.dataset.button == "button-prev" ? prevAction(leftPosition,slickWidth,track) : nextAction(leftPosition,trackWidth,listWidth,slickWidth,track)
}

let prevAction = (leftPosition,slickWidth,track) => {
    if(leftPosition > 0) {
        console.log("entro 2")
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
}

let nextAction = (leftPosition,trackWidth,listWidth,slickWidth,track) => {
    if(leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    }
}
// Java del Inicio de Secion
	const form = document.querySelector("form");
	eField = form.querySelector(".email"),
	eInput = eField.querySelector("input"),
	pField = form.querySelector(".password"),
	pInput = pField.querySelector("input");
	form.onsubmit = (e)=>{
	e.preventDefault(); //preventing from form submitting
	//if email and password is blank then add shake class in it else call specified function
	(eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
	(pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();
	setTimeout(()=>{ //remove shake class after 500ms
		eField.classList.remove("shake");
		pField.classList.remove("shake");
	}, 500);
	eInput.onkeyup = ()=>{checkEmail();} //calling checkEmail function on email input keyup
	pInput.onkeyup = ()=>{checkPass();} //calling checkPassword function on pass input keyup
	function checkEmail(){ //checkEmail function
		let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
		if(!eInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
		eField.classList.add("error");
		eField.classList.remove("valid");
		let errorTxt = eField.querySelector(".error-txt");
		//if email value is not empty then show please enter valid email else show Email can't be blank
		(eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
		}else{ //if pattern matched then remove error and add valid class
		eField.classList.remove("error");
		eField.classList.add("valid");
		}
	}
	function checkPass(){ //checkPass function
		if(pInput.value == ""){ //if pass is empty then add error and remove valid class
		pField.classList.add("error");
		pField.classList.remove("valid");
		}else{ //if pass is empty then remove error and add valid class
		pField.classList.remove("error");
		pField.classList.add("valid");
		}
	}
	//if eField and pField doesn't contains error class that mean user filled details properly
	if(!eField.classList.contains("error") && !pField.classList.contains("error")){
		window.location.href = form.getAttribute("action"); //redirecting user to the specified url which is inside action attribute of form tag
	}
	}

