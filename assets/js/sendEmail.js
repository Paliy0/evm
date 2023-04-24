const form = document.querySelector("#contact-form");
const sendBtn = document.querySelector("#sendEmail");

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const name = form.querySelector("#name").value;
  const service = form.querySelector("#service").value;
  const contact = form.querySelector("#contact").value;

  if (name !== "" && service !== "" && contact !== "") {
    const mailtoLink = `mailto:contact@evminnovations.com?subject=Appointment Request&body=Name: ${name}%0D%0AService: ${service}%0D%0AContact: ${contact}`;
    window.location.href = mailtoLink;
  } else {
    alert("Please fill out all fields before sending.");
  }
});
