function handleFormSubmit (event) {

    event.preventDefault()
   // console.log(event);

    //console.log(document)
    const emailInput = document.getElementById ("email") 
    const messageInput = document.getElementById ("message")

    
    //console.log(emailInput);
    const isEmailValid = emailInput.value !== '' && emailInput.validity.typeMismatch
    
    console.log(isEmailValid);

    let isMessageValid = false;
     if (messageInput.value !== '') {
        isMessageValid = true
     } else {
        isMessageValid = false
     }

     console.log ({isMessageValid})
   
}