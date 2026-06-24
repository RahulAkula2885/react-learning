import { useState } from "react";



function Signup(){

    //use state variables to update the changes as per your input

    var [email,setEmail] = useState("");
    var [name,setName] = useState("");
    var [mobile,setMobile] = useState("");
    var [password,setPassword] = useState("");


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

    function handleSignup(){
        console.log(name,email,password,mobile);
    }

    return(
            <div className="container mt-5">

                <div className="card shadow p-4 mx-auto" style={{ maxWidth: "450px" }} >
                <h3 className="text-primary text-center mb-4"> Sign up</h3>

                <div className="mb-3">
                    <label htmlFor="exampleInputName1" className="form-label">Full Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="exampleInputName1"
                        placeholder="name"
                        onChange={ event => handleNameChange(event)}
                    />
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
                </div>

                <div className="mb-3 form-check">
                    <input 
                        type="checkbox" 
                        className="form-check-input" 
                        id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">Terms & Conditions</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSignup}>Submit</button>
                
            </div>
    </div>
    );
}

export default Signup;