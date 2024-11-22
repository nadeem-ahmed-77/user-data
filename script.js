
  
  var nameData = false;
  var emailData = false;
  var passData = false;
  var cityData = false;
  var genderData = false;
    
  function inputValid(e) {
    if (e.target.value.length < 5) {
      e.target.nextElementSibling.innerText = 'Name must have at least 5 characters';
      e.target.nextElementSibling.style.display = 'block';
      return;
    }
    e.target.nextElementSibling.style.display = 'none';
    nameData = true;
  }
  
  
    
  function inputEmail(e) {
    
    e.target.nextElementSibling.style.display = 'none';
    
    var regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    var emailInp = document.getElementById("email").value;

    
      if(!emailInp.match(regex)){ 
       e.target.nextElementSibling.innerText = 'Invalid Email address';
       e.target.nextElementSibling.style.display = 'block';
 
       return;
    }
          
      e.target.nextElementSibling.style.display = 'none';
      emailData = true; 
    }

    
     
  function inputPass(e) {
    if (e.target.value.length < 9) {
      e.target.nextElementSibling.innerText = 'Password must have at least 8 characters';
      e.target.nextElementSibling.style.display = 'block';
    
      return;  
    }
    e.target.nextElementSibling.style.display = 'none';
    passsData = true;  

}
   var passShow = document.getElementById('show');

    function togglePasswordVisibility() {
    if (passShow.type === "password") {
        passShow.type = "text";
    } else {
        passShow.type = "password";
    }
    
}
       

function checkForSelection(e) {
  
    if (document.getElementById("states").selectedIndex === 0) { // selectedIndex 0 is the option that should not be selected
    alert("Please select a state.");
    cityData = true;
    return;
  }

}
  
      function validateRadios(e) {
      
      var radios = document.getElementsByName("gender"); // array of radio btns
      
    
      for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
        // console.log(radios[i].value) // selected radio tn value
          return ;
        }
      }
      alert("Please check one.");
       genderData = true;
  
    
    }
  
    
    let users = [];
  
    class UserData {
      constructor(name,  email, pass, city, gender) {
        this.name = name;
        this.email = email;
        this.pass = pass;
        this.city = city;
        this.gender = gender;
      }

      
      displayData() {
        return `
          <span><strong>Name:</strong> ${this.name},</span>
          <span><strong>Email:</strong> ${this.email},</span>
          <span><strong>Password:</strong> ${this.pass},</span>
          <span><strong>City:</strong> ${this.city},</span>
          <span><strong>Gender:</strong> ${this.gender},</span>
        `;
      }
    }
  
    
    function submitData(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    const city = document.getElementById('states').value;
    const gender1 = document.querySelector('input[name="gender"]:checked').value;
    
    const user = new UserData(name, email, pass, city, gender1);
    const resultDiv = document.getElementById('result');
    
    
    // resultDiv.innerHTML = ` <h3>Form Submitted Successfully</h3> ${user.displayData()} `;
    
      
      users = [...users, user];
    
         
      let allUsersData = `<h3>Form Submitted Successfully</h3>`;
      users.forEach((u, index) => {
        allUsersData += `<div><h4>User ${index + 1}</h4>${u.displayData()}</div>`;
      });
    
      resultDiv.innerHTML = allUsersData;
    }

  
  
  
    // nameData = false;
    // emailData = false;
    // passData = false;
    // cityData = false;
    // genderData = false;
  
    // name = '';
    // email = '';
    // pass = '';
    // city = '';
    // gneder1 = '';
   
    