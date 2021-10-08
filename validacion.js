let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let numCard = /^[0-9]{10,15}$/;
    let numCVC = /^[0-9]{3}$/;
    let numAm = /^[0-9]{1,15}$/;
    let numFName = /^[a-zA-Z\s]+$/;
    let numCity = /^[a-zA-Z\s]+$/;
    let numState = /^[0-9]{10,15}$/;
    let numPostalCode = /^[0-9]{7}$/;
    let numMensaje = /^[a-zA-Z\s]+$/;


    



    if(!numCard.test(form.card.value)){
        form.card.classList.add('is-invalid');
        form.card.style.background = "#ffb6c1";
    } else{
        form.card.classList.remove('is-invalid');
        form.card.style.background = "none";
    };

    if(!numCVC.test(form.cvc.value)){
        form.cvc.classList.add('is-invalid');
        form.cvc.style.background = "#ffb6c1";
    } else{
        form.cvc.classList.remove('is-invalid');
        form.cvc.style.background = "none";
    };
    if(!numAm.test(form.amount.value)){
        form.amount.classList.add('is-invalid');
        form.amount.style.background = "#ffb6c1";
    } else{
        form.amount.classList.remove('is-invalid');
        form.amount.style.background = "none";
    };
     if(!numFName.test(form.firstname.value)){
        form.firstname.classList.add('is-invalid');
        form.firstname.style.background = "#ffb6c1";
    } else{
        form.firstname.classList.remove('is-invalid');
        form.firstname.style.background = "none";
    };
     if(!numFName.test(form.lastname.value)){
        form.lastname.classList.add('is-invalid');
        form.lastname.style.background = "#ffb6c1";
    } else{
        form.lastname.classList.remove('is-invalid');
        form.lastname.style.background = "none";
    }; 
     if(!numCity.test(form.city.value)){
        form.city.classList.add('is-invalid');
        form.city.style.background = "#ffb6c1";
    } else{
        form.city.classList.remove('is-invalid');
        form.city.style.background = "none";
    }; 

    if(!numPostalCode.test(form.postal.value)){
        form.postal.classList.add('is-invalid');
        form.postal.style.background = "#ffb6c1";
    } else{
        form.postal.classList.remove('is-invalid');
        form.postal.style.background = "none";
    };

    if(!numMensaje.test(form.message.value)){
        form.message.classList.add('is-invalid');
        form.message.style.background = "#ffb6c1";
    } else{
        form.message.classList.remove('is-invalid');
        form.message.style.background = "none";
    };
    let x = document.querySelector("#state");
    if (x.value == ""){
        form.state.classList.add('is-invalid');
        form.state.style.background = "#ffb6c1";
    } else {
        form.state.classList.remove('is-invalid');
        form.state.style.background = "none";
    };
   

});

