const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const dob = document.getElementById("dob");
const acceptTerms = document.getElementById("acceptTerms");

const today = new Date();
const minAge = 18;
const maxAge = 55;

const minDate = new Date(
  today.getFullYear() - maxAge,
  today.getMonth(),
  today.getDate()
);

const maxDate = new Date(
  today.getFullYear() - minAge,
  today.getMonth(),
  today.getDate()
);

const formatDate = (date) => date.toISOString().split("T")[0];

dob.setAttribute("min", formatDate(minDate));
dob.setAttribute("max", formatDate(maxDate));

dob.addEventListener("input", () => {
  const dobValue = new Date(dob.value);

 if (dobValue < minDate || dobValue > maxDate) {
    dob.setCustomValidity("Date of birth must be between 18 and 55 years old.");
  } else {
    dob.setCustomValidity("");
  }
  dob.reportValidity();
});

acceptTerms.addEventListener("input", () => {
  if (!acceptTerms.checked) {
    acceptTerms.setCustomValidity("You must accept the terms and conditions.");
  } else {
    acceptTerms.setCustomValidity("");
  }
  acceptTerms.reportValidity();
});


const retrieveEntries = () => {
    let entries = localStorage.getItem('user-entries');
    if(entries){
        //console.log(JSON.parse(entries))
        entries = JSON.parse(entries);
    }
    else{
        entries = [];
        console.log("No user entries found.");
    }
    return entries;
};

const display = () =>{
    const entries = retrieveEntries();
    const tableEntries = entries.map((entry) => {
    
    const nameCell = `<td class = "border border-gray-300 px-4 py-2">${entry.name}</td>`;
    const emailCell = `<td class = "border border-gray-300 px-4 py-2">${entry.email}</td>`;
    const passwordCell = `<td class = "border border-gray-300 px-4 py-2">${entry.password}</td>`;
    const dobCell = `<td class = "border border-gray-300 px-4 py-2">${entry.dob}</td>`;
    const acceptTermsCell = `<td class = "border border-gray-300 px-4 py-2">${entry.acceptTerms}</td>`;
    
    const row  = `<tr>
        ${nameCell} ${emailCell} ${passwordCell} ${dobCell} ${acceptTermsCell}
    <tr>`;
    return row;
    }).join("\n");

    document.getElementById("user-entries").innerHTML = tableEntries;

}

let userEntries = retrieveEntries();

const submit = (e) => {
    e.preventDefault();

    const entry = {
        name: name.value,
        email: email.value,
        password: password.value,
        dob: dob.value,
        acceptTerms: acceptTerms.checked,
    };
    userEntries.push(entry);
    //console.log(userEntries);

    localStorage.setItem("user-entries", JSON.stringify(userEntries));
    display();
    document.getElementById("user-form").reset();
};

document.getElementById('user-form').addEventListener("submit", submit);

display();
