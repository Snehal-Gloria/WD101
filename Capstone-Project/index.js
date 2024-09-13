const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const dob = document.getElementById("dob");
const acceptTerms = document.getElementById("acceptTerms");

const saveUser=(e)=>{
    e.preventDefault();
    const entry = {
        name: name.value,
        email: email.value,
        password = password.value,
        dob: dob.value
    }
}
document.getElementById('user-form').userForm.addEventListener("submit", saveUser);

