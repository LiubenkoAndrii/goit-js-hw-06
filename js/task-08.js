const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email === "" || password === "") {
    alert("All fields must be filled!");
  } else {
    const formData = {
      email,
      password,
    };
    console.log(formData);
    event.currentTarget.reset();
  }
}
