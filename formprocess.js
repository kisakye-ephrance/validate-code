//name the form in htlm login i.e. form name=login
//accessing elements using the form itself;
//const access=()=>{
    //form name is login with a child name
    //const userName = document.login.name;
    //userName.focus();
//}

const access_signupform=() => {
    const userName = document.signupform.name;
    const emailID = document.signupform.email;
    const password = document.signupform.password;
    const phoneNum = document.signupform.phone;

    const registName = /^[A-Za-z]+$/;
    if (userName.value.match(registName)){
        console.log(userName.value);
        alert("right input");
        userName.style.border = "2px solid green";
    } else {
        alert("wrong input");
        userName.style.border = "2px solid red";
    }

//$ nothing more nothing less
    //^ means on the beginning of the value (the start character)
    //-range f acceptable characters
    //+one or more  characters
    //.means any character
    //()used to set boundaries of characters
    //{} used to set range (number of chgaracters expected)
    //[]take as a whole no sections

const validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\. \w{2,3})+$/;
if (validateEmail.test(emailID.value) == true) {
    alert("correct email");
    emailID.style.border = "2px solid green";
  } else {
      alert("wrong email");
      emailID.style.border = "2px solid red";
  }

  //let password = /^\w{7,12}$/;
  //if(password.value.match(password)){
        //alert("correct password")
        //password.style.border = "2px solid green";
  //} else{
      //alert("wrong passwpord")
     // password.style.border="2px dotted red";
 // }

  //const phoneNum = /^\+[0,9]{3}
};


