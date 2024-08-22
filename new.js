document.querySelector(".button").addEventListener('click', (e) => {
  e.preventDefault();

  const firstname = document.getElementById('firstname').value;
  const lastname = document.getElementById('lastname').value;
  const male = document.getElementById('male');
  const female = document.getElementById('female');
  const department = document.getElementById('department');
  const confirm = document.getElementById('confirm-box');
  const confirmYes = document.getElementById('confirm-yes');
  const confirmCancel = document.getElementById('confirm-no');
  const dataSend = document.getElementsByClassName('form-value');

  // REGEX
  const firstnameRegex = /^[A-Za-z]{3,20}$/;
  const lastnameRegex = /^[A-Za-z]{3,20}$/;

  // CLEAR PREVIOUS ERROR
  document.querySelectorAll('.error').forEach((curElem) => {
    curElem.innerText = "";
  });

  // validate
  let isValid = true;

  // TEXT FIELD
  if(!firstnameRegex.test(firstname)){
    document.getElementById('firstnameError').innerText = "Invalid firstname!!!";
    isValid = false;
  }

  if(!lastnameRegex.test(lastname)){
    document.getElementById('lastnameError').innerText = "Invalid lastname!!!";
    isValid = false;
  }

  // Radio button GENDER
  let genderValue = "";
  if(male.checked) {
    genderValue = "Male";
  } else if(female.checked) {
    genderValue = "Female";
  } else {
    document.getElementById('genderError').innerText = "Choose Gender";
    isValid = false;
  }

  // DROPDOWN DEPARTMENT
  const dropdown = department.options[department.selectedIndex].value;
  if(dropdown == "Department"){
    document.getElementById('departmentError').innerText = "* Mandatory";
    isValid = false;
  }

  // PROGRAMS
  const checkboxes = document.querySelectorAll('.checkbox input[type="checkbox"]');
  const selectedPrograms = [];

  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      selectedPrograms.push(checkbox.value);
    }
  });

  if (selectedPrograms.length === 0) {
    document.getElementById('programError').innerText = "Select at least one Program";
    isValid = false;
  }

  // for storing value
  if (isValid) {
    const formValue = {
      Firstname: firstname,
      Lastname: lastname,
      Gender: genderValue,
      Department: dropdown,
      Programs: selectedPrograms
    };

    // FORM SUBMIT SUCCESSFUL 
    confirm.classList.add("confirm-popup");

    // YES CONFIRM BOX
    confirmYes.addEventListener('click', () => {
      console.log(formValue);

      // Reset all form fields
      Array.from(dataSend).forEach((curElem) => {
        curElem.value = "";
      });

      // Reset radio buttons
      male.checked = false;
      female.checked = false;

      // Reset dropdown
      department.selectedIndex = 0;

      // Reset checkboxes
      checkboxes.forEach(function(checkbox) {
        checkbox.checked = false;
      });

      confirm.classList.remove("confirm-popup");
    });
  }

  // CANCEL CONFIRM BOX
  confirmCancel.addEventListener('click', () => {
    confirm.classList.remove("confirm-popup");
  });
});
