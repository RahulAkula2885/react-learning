import { useState } from "react";
import { validateEmail, validateMobile, validatePassword } from "./util";


function Form2(){

    //use state variables to update the changes as per your input

    var [email,setEmail] = useState("");
    var [name,setName] = useState("");
    var [mobile,setMobile] = useState("");
    var [password,setPassword] = useState("");
    var [checkbox,setCheckbox] = useState("");


    // error variables

    var [nameError, setNameError] = useState("");
    var [emailError, setEmailError] = useState("");
    var [mobileError, setMobileError] = useState("");
    var [passwordError, setPasswordError] = useState("");
    var [checkBoxError, setCheckBoxError] = useState("");


    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleEmailChange(event){
        setEmail( event.target.value);
    }
     function handleMobileChange(event){
        setMobile( event.target.value);
    }
     function handlePasswordChange(event){
        setPassword( event.target.value);
    }
    function handleCheckboxChange(event){
        setCheckbox( event.target.checked);
    } 

    function handleSignup(){

    // reset errors first
    setNameError("");
    setEmailError("");
    setMobileError("");
    setPasswordError("");
    setCheckBoxError("");

    let isValid = true;
        
    // Name validation
    if (!name || name.trim().length < 3) {
        //alert("Name must be at least 3 characters long");
        setNameError("Name must be at least 3 characters long");
        //return;
        isValid = false;
    }

    // Email validation
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailRegex.test(email)) {
    //     setEmailError("Please enter a valid email address");
    //     //return;
    //     isValid = false;
    // }

    if (!validateEmail(email)) {
        setEmailError("Please enter a valid email address");
        isValid = false;
    }

    // Mobile validation (10 digits)
    // const mobileRegex = /^[0-9]{10}$/;
    // if (!mobileRegex.test(mobile)) {
    //     setMobileError("Mobile number must be exactly 10 digits");
    //     //return;
    //     isValid = false;
    // }

    if (!validateMobile(mobile)) {
       setMobileError("Mobile number must be exactly 10 digits");
        isValid = false;
    }

    // Password validation
    if (password.length < 8) {
        setPasswordError("Password must be at least 8 characters long");
        //return;
        isValid = false;
    }

    // const passwordRegex =
    // /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // if (!passwordRegex.test(password)) {
    //     setPasswordError(
    //         "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character"
    //     );
    //     //return;
    //     isValid = false;
    // }

    if (!validatePassword(password)) {
       setPasswordError("Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character");
       isValid = false;
    }

    // Checkbox validation
    if (!checkbox) {
        setCheckBoxError("You must accept Terms & Conditions");
        isValid = false;
    }


    if (!isValid) return;

    console.log(name, email, password, mobile);

}

    return(
            <div className="container mt-5">

                <div className="card shadow p-4 mx-auto" style={{ maxWidth: "450px" }} >
                <h3 className="text-primary text-center mb-4"> Sign up Validation</h3>

                <div className="mb-3">
                    <label htmlFor="exampleInputName1" className="form-label">Full Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="exampleInputName1"
                        placeholder="name"
                        onChange={ event => handleNameChange(event)}
                    />
                    <div className="text-danger">{nameError}</div>
                </div>
           
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                        type="email" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp"
                        placeholder="name@example.com"
                        onChange={ event => handleEmailChange(event)}
                    />
                    <div className="text-danger">{emailError}</div>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputMobile1" className="form-label">Mobile Number</label>
                    <input 
                        type="text"
                        className="form-control" 
                        id="exampleInputMobile1" 
                        maxLength="10"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        placeholder="Mobile no"
                        onChange={ event => handleMobileChange(event)}
                    />
                    <div className="text-danger">{ mobileError }</div>
                </div>

                <div className="mb-3 ">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="exampleInputPassword1"
                        placeholder="Password"
                        onChange={ event => handlePasswordChange(event)}
                    />
                    <span id="passwordHelpInline" className="form-text">
                        Must be 8-20 characters long.
                    </span>
                    <div className="text-danger">{passwordError}</div>
                </div>

                <div className="mb-3 form-check">
                    <input 
                        type="checkbox" 
                        className="form-check-input" 
                        id="exampleCheck1"
                        onChange={handleCheckboxChange}
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">Terms & Conditions</label>
                    <div className="text-danger">{checkBoxError}</div>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSignup}>Submit</button>
                
            </div>
    </div>
    );
}
export default Form2;