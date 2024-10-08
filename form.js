document.querySelector(".button").addEventListener('click', (e) => {
  e.preventDefault();


  const firstname = document.getElementById('firstname').value;
  const lastname = document.getElementById('lastname').value;
  const male = document.getElementById('male');
  const female = document.getElementById('female');
  const department = document.getElementById('department');
  const program = document.querySelector('.checkbox');
  const confirm = document.getElementById('confirm-box');
  const confirmYes = document.getElementById('confirm-yes');
  const confirmCancel = document.getElementById('confirm-no');
  const dataSend = document.getElementsByClassName('form-value');
  // REGEX
  const firstnameRegex = /^[A-za-z]{3,20}$/;
  const lastnameRegex = /^[A-za-z]{3,20}$/;



 
  // CLEAR PREVIOUS ERROR
  document.querySelectorAll('.error').forEach((curElem) => {
    curElem.innerText = "";
  });

  // validate
  let isValid = true;

    // TEXT FIELD
  if(!firstnameRegex.test(firstname)){
    document.getElementById('firstnameError').innerText = "Invalid !!!";
    isValid = false;
  };

  if(!lastnameRegex.test(lastname)){
    document.getElementById('lastnameError').innerText = "Invalid !!!";
    isValid = false;
  };

  // Radio button GENDER
  if(male.checked == false && female.checked == false) {
    document.getElementById('genderError').innerText = "Select atleast one";
    isValid = false;
  };

  // DROPDOWN DEPARTMENT
  const dropdown = department.options[department.selectedIndex].value;
  if(dropdown == "Department"){
    document.getElementById('departmentError').innerText = "* Mandatory";
    isValid = false;
  };


  // for storing value
  let formValue = [];


  // PROGRAMS
  const checkboxes = document.querySelectorAll('.checkbox input[type="checkbox"]');

  let isChecked = false;
  
  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
        isChecked = true;
        formValue[checkbox.name] = checkbox.value;
    }
  });

  if(!isChecked) {
    document.getElementById('programError').innerText = "Choose atleast one Program";
    isValid = false;
  }
  



  

  // FORM SUBMIT SUCCESSFUL 
  if (isValid) {
    confirm.classList.add("confirm-popup");
  };

  // YES CONFIRM BOX
  confirmYes.addEventListener('click', () => {
    Array.from(dataSend).forEach((curElem) => {
      formValue.values(curElem.value);
      console.log(formValue);
    });
    Array.from(dataSend).forEach((curElem) => {
      curElem.value = "";
    });
    confirm.classList.remove("confirm-popup");
  })


  // CANCEL CONFIRM BOX
  confirmCancel.addEventListener('click', () => {
    confirm.classList.remove("confirm-popup");
  });
  
});