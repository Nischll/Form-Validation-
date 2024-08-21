document.querySelector(".button").addEventListener('click', (e) => {
  e.preventDefault();


  const firstname = document.getElementById('firstname').value;
  const lastname = document.getElementById('lastname').value;
  const male = document.getElementById('male');
  const female = document.getElementById('female');
  const department = document.getElementById('department');
  const program = document.querySelectorAll('.box');

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

  // PROGRAMS
  for(i=0; i<program.length; i++){
    if(program[i].checked == true){
      isValid = true;
    }
    else {
      document.getElementById('programError').innerText = "Select atleast one Program";
      isValid = false;
    }
  };


  if (isValid) {
    alert('successful');
  }
});