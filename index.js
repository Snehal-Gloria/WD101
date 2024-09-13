const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const dob = document.getElementById("dob");
const acceptTerms = document.getElementById("acceptTerms");

const validateDOB = () =>{
    
}
dob.addEventListener("input", validateDOB);

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

const saveUser = (e) => {
    e.preventDefault();

    const entry = {
        name: name.value,
        email: email.value,
        password: password.value,
        dob: dob.value,
        acceptTerms: acceptTerms.checked,
    };
    userEntries.push(entry);
    console.log(userEntries);

    localStorage.setItem("user-entries", JSON.stringify(userEntries));
    display();
};

document.getElementById('user-form').addEventListener("submit", saveUser);

//form.reset();
display();
