const contactForm = document.getElementById('contact-form');
let name1 = document.getElementById("nameSurname");
let email = document.getElementById("email");
let message = document.getElementById("message");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let formData ={ 
        name: name1.value,
        email: email.value,
        message: message.value,
    }
    console.log(formData);
   

    let xhr = new XMLHttpRequest();
    xhr.open('GET',"/");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.onload=function() {
        console.log(xhr.responseText);
        if(xhr.responseText == "success"){
            alert("email sent successfully")
            name1.value = '';
            email.value = '';
            message.value = '';
        }else{
            alert("something went wrong")
        }
    }
    xhr.send(JSON.stringify(formData))

    
})