const contactForm = document.getElementById("contact-form");
let name1 = document.getElementById("nameSurname");
let email = document.getElementById("email");
let message = document.getElementById("message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = {
    name: name1.value,
    email: email.value,
    message: message.value,
  };
  console.log(formData);

  fetch(
    "https://inthecasualmailserver.herokuapp.com",
    {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    },
    
  ).then(()=>{
      name1.value = "";
      email.value = "";
      message.value = "";
      alert("Mesajınız başarıyla bize ulaştı!");
  }).catch(err => {
      console.log(err);
      name1.value = "";
      email.value = "";
      message.value = "";
      alert("Bir Sorun Oluştu!");
  })
});
