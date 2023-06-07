const form = document.getElementById("form-message");
const nama = document.getElementById("nama");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // get the values from the inputs
  const namaValue = nama.value.trim();

  if (namaValue === "") {
    // show error
    // add error class
    setErrorFor(nama, "Nama tidak boleh kososng");
  } else {
    // add success class
    setSuccessFor(nama);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; // .form-control
  const small = formControl.querySelector("small");

  // add error message inside small
  small.innerText = message;

  // add error class
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
