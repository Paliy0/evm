document
  .getElementById("sendEmail")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form from submitting normally

    let name = document.getElementById("name").value;
    let service = document.getElementById("service").value;
    let contact = document.getElementById("contact").value;

    let data = { name: name, service: service, contact: contact };

    fetch("/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Email sent successfully");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was an error processing your request");
      });
  });
