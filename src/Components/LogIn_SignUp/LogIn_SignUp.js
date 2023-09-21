// import classes from './LogIn_SignUp.module.css';
import { useEffect, useState } from 'react';

import './LogIn_SignUp.css';
import Lamp from '../Lamp/Lamp'
import Navigation from '../Navigation/Navigation';

function LogIn_SignUp() {

const [pass , setPass] = useState('');
useEffect(()=>{
  const signInBtn = document.getElementById("signIn");  
  const signUpBtn = document.getElementById("signUp");  
  const fistForm = document.getElementById("form1");  
  const secondForm = document.getElementById("form2");  
  const container = document.querySelector(".container"); 
  

    signInBtn.addEventListener("click", () => {  
      container.classList.remove("right-panel-active");  
  });  
  signUpBtn.addEventListener("click", () => {  
      container.classList.add("right-panel-active");  
  });  

  // hidden eye password
// const togglePassword = document.querySelector("#togglePassword");
// const password = document.querySelector("#password");

// togglePassword.addEventListener("click", function () {
//   // toggle the type attribute
//   const type = password.getAttribute("type") === "password" ? "text" : "password";
//   password.setAttribute("type", type);
//   console.log(type)
  
//   // toggle the icon
//   this.classList.toggle("bi-eye");
// });

  fistForm.addEventListener("submit", (e) => e.preventDefault());  
  secondForm.addEventListener("submit", (e) => e.preventDefault());
});

function passwordLength(e){
  const bar = document.getElementById('passwordLength');
  var value = e.target.value;
  var length = e.target.value.length;
  bar.className='';

  // console.log(/[a-z]/.test(value) == 'true')
  // console.log(/[a-zA-Z0-9]/.test(value))

  if(length===0){
    bar.classList.remove('weak');
    bar.classList.remove('good');
    bar.classList.remove('perfect');
    setPass('');
  }
  else if(length <= 5){
    bar.classList.add('weak');
    setPass('Weak');
  }
  else if(/[a-z]/.test(value) && /[A-Z]/.test(value) && /[0-9]/.test(value) && length >= 10){
    bar.classList.add('perfect');
    setPass('Perfect');
  }
  else{
    bar.classList.add('good');
    setPass('Good');
  }
}

function togglePass(){
  const togglePassword = document.getElementById("togglePassword"); 
  const password = document.getElementById("password"); 
  const type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  console.log(type)
  
  // toggle the icon
  togglePassword.classList.toggle("bi-eye");
}
function togglePass2(){
  const togglePassword = document.getElementById("togglePassword2"); 
  const password = document.getElementById("password2"); 
  const type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  console.log(type)
  
  // toggle the icon
  togglePassword.classList.toggle("bi-eye");
}

return (
<div className='page'>
<Lamp/>
<Navigation/>
{/* <div className="container right-panel-active"> */}
<div className="container">
  {/* Sign Up */}
  <div className="container__form container--signup">
    <form action="#" className="form" id="form1" >
      <h2 className="form__title">Sign Up</h2>
      <input type="text" placeholder="Username" className="input" required/>
      <input type="email" placeholder="Email" className="input" required/>
      <input type="number" placeholder="Phone number (optional)" className='input' autoComplete="on"/><br/>
      <input type="password" placeholder="Password" className="input" id="password" onKeyUp={passwordLength} required/>
      <i className={`bi bi-eye-slash`} id="togglePassword" onClick={togglePass}></i>
      <div className='barContainer'>
        <div id='passwordLength'></div>
      </div>
      <div id='passwordState'>{pass}</div>

      <fieldset className='gender'>
        <legend><b> Gender</b></legend>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <input type="radio" name="gender" value="male" style={{cursor:'pointer'}} required />
        <label>Male</label>&nbsp;&nbsp;&nbsp;

        <input type="radio" name="gender" value="female" style={{cursor:'pointer'}}/>
        <label>Female</label>&nbsp;&nbsp;&nbsp;
      </fieldset>

      <div >
        <fieldset  className='birth'>
          <legend><b>Birthday</b></legend>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <select className='sel' >
            <option value="2004">2004</option>
            <option value="2003">2003</option>
            <option value="2002">2002</option>
            <option value="2001">2001</option>
            <option value="2000" defaultValue>2000</option>
            <option value="1999">1999</option>
            <option value="1998">1998</option>
            <option value="1997">1997</option>
            <option value="1996">1996</option>
            <option value="1995">1995</option>
            <option value="1994">1994</option>
            <option value="1993">1993</option>
            <option value="1992">1992</option>
            <option value="1991">1991</option>
            <option value="1990">1990</option>
            <option value="1989">1989</option>
            <option value="1988">1988</option>
            <option value="1987">1987</option>
            <option value="1986">1986</option>
            <option value="1985">1985</option>
            <option value="1984">1984</option>
            <option value="1983">1983</option>
            <option value="1982">1982</option>
            <option value="1981">1981</option>
            <option value="1980">1980</option>
            <option value="1979">1979</option>
            <option value="1978">1978</option>
            <option value="1977">1977</option>
            <option value="1976">1976</option>
            <option value="1975">1975</option>
            <option value="1974">1974</option>
            <option value="1973">1973</option>
            <option value="1972">1972</option>
            <option value="1971">1971</option>
            <option value="1970">1970</option>
            <option value="1969">1969</option>
            <option value="1968">1968</option>
            <option value="1967">1967</option>
            <option value="1966">1966</option>
            <option value="1965">1965</option>
            <option value="1964">1964</option>
            <option value="1963">1963</option>
            <option value="1962">1962</option>
            <option value="1961">1961</option>
            <option value="1960">1960</option>
            <option value="1959">1959</option>
            <option value="1958">1958</option>
            <option value="1957">1957</option>
            <option value="1956">1956</option>
            <option value="1955">1955</option>
            <option value="1954">1954</option>
            <option value="1953">1953</option>
            <option value="1952">1952</option>
            <option value="1951">1951</option>
            <option value="1950">1950</option>
            <option value="1949">1949</option>
            <option value="1948">1948</option>
            <option value="1947">1947</option>
            <option value="1946">1946</option>
            <option value="1945">1945</option>
            <option value="1944">1944</option>
            <option value="1943">1943</option>
            <option value="1942">1942</option>
            <option value="1941">1941</option>
            <option value="1940">1940</option>
          </select>
        </fieldset>
      </div>
      <button className="btn">Sign Up</button>
    </form>
  </div>
  {/* Sign In */}
  <div className="container__form2 container--signin">
    <form action="#" className="form" id="form2" >
      <h2 className="form__title">Sign In</h2>
      <input type="email" placeholder="Email" className="input2" />
      <input type="password" placeholder="Password" id='password2' className="input2" />
      <i className={`bi bi-eye-slash`} id="togglePassword2" onClick={togglePass2}></i>
      <a href="#forget" className="link">
        Forgot your password?
      </a>
      <button className="btn">Sign In</button>
    </form>
  </div>
  {/* Overlay */}
  <div className="container__overlay">
    <div className="overlay">
      <div className="overlay__panel overlay--left">
        <button className="btn" id="signIn">
          Sign In
        </button>
      </div>
      <div className="overlay__panel overlay--right">
        <button className="btn" id="signUp">
          Sign Up
        </button>
      </div>
    </div>
  </div>
</div>

</div>
);
  }
  
  export default LogIn_SignUp;