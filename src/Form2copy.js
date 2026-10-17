import { useState } from "react";
import { validateEmail, validateMobile, validatePassword } from "./util";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


function Form2(){

    //use state variables to update the changes as per your input

    var [email,setEmail] = useState("");
    var [name,setName] = useState("");
    var [mobile,setMobile] = useState("");
    var [password,setPassword] = useState("");
    var [checkbox,setCheckbox] = useState("");
    var [countryCode, setCountryCode] = useState("");
    var [phone, setPhone] = useState("");


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

    function handleCountryCodeChange(event) {
        setCountryCode(event.target.value);
    }

    function handleSignup(e){
    
    e.preventDefault(); // stops page reload

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

    if (!validateEmail(email)) {
        setEmailError("Please enter a valid email address");
        isValid = false;
    }

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

    console.log(name, email, password, countryCode , mobile, phone);

}

    return(
        <form onSubmit={handleSignup}>
            <div className="container mt-5">

                <div className="card shadow p-4 mx-auto" style={{ maxWidth: "450px" }} >
                <h3 className="text-primary text-center mb-4"> Sign up Validation form2copy</h3>

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
                    <div className="row g-2 ">

                        <div className="col-12 col-md-4">
                            <label className="form-label">Country Code</label>

                            <select
                                className="form-select"
                                value={countryCode}
                                onChange={handleCountryCodeChange}
                            >
                                <option value="+93">🇦🇫 +93 (Afghanistan)</option>
                                <option value="+355">🇦🇱 +355 (Albania)</option>
                                <option value="+213">🇩🇿 +213 (Algeria)</option>
                                <option value="+61">🇦🇺 +61 (Australia)</option>
                                <option value="+43">🇦🇹 +43 (Austria)</option>
                                <option value="+880">🇧🇩 +880 (Bangladesh)</option>
                                <option value="+32">🇧🇪 +32 (Belgium)</option>
                                <option value="+55">🇧🇷 +55 (Brazil)</option>
                                <option value="+1">🇨🇦 +1 (Canada)</option>
                                <option value="+86">🇨🇳 +86 (China)</option>
                                <option value="+45">🇩🇰 +45 (Denmark)</option>
                                <option value="+20">🇪🇬 +20 (Egypt)</option>
                                <option value="+358">🇫🇮 +358 (Finland)</option>
                                <option value="+33">🇫🇷 +33 (France)</option>
                                <option value="+49">🇩🇪 +49 (Germany)</option>
                                <option value="+91">🇮🇳 +91 (India)</option>
                                <option value="+62">🇮🇩 +62 (Indonesia)</option>
                                <option value="+39">🇮🇹 +39 (Italy)</option>
                                <option value="+81">🇯🇵 +81 (Japan)</option>
                                <option value="+60">🇲🇾 +60 (Malaysia)</option>
                                <option value="+52">🇲🇽 +52 (Mexico)</option>
                                <option value="+977">🇳🇵 +977 (Nepal)</option>
                                <option value="+31">🇳🇱 +31 (Netherlands)</option>
                                <option value="+64">🇳🇿 +64 (New Zealand)</option>
                                <option value="+234">🇳🇬 +234 (Nigeria)</option>
                                <option value="+47">🇳🇴 +47 (Norway)</option>
                                <option value="+92">🇵🇰 +92 (Pakistan)</option>
                                <option value="+63">🇵🇭 +63 (Philippines)</option>
                                <option value="+48">🇵🇱 +48 (Poland)</option>
                                <option value="+7">🇷🇺 +7 (Russia)</option>
                                <option value="+966">🇸🇦 +966 (Saudi Arabia)</option>
                                <option value="+65">🇸🇬 +65 (Singapore)</option>
                                <option value="+27">🇿🇦 +27 (South Africa)</option>
                                <option value="+82">🇰🇷 +82 (South Korea)</option>
                                <option value="+34">🇪🇸 +34 (Spain)</option>
                                <option value="+94">🇱🇰 +94 (Sri Lanka)</option>
                                <option value="+46">🇸🇪 +46 (Sweden)</option>
                                <option value="+41">🇨🇭 +41 (Switzerland)</option>
                                <option value="+66">🇹🇭 +66 (Thailand)</option>
                                <option value="+90">🇹🇷 +90 (Turkey)</option>
                                <option value="+44">🇬🇧 +44 (UK)</option>
                                <option value="+1">🇺🇸 +1 (USA)</option>
                                <option value="+84">🇻🇳 +84 (Vietnam)</option>
                            </select>
                        </div>

                        <div className="col-12 col-md-8">
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

                    </div>
                </div>
                {/* <div className="mb-3">
                    <PhoneInput
                        country={"in"}   // default country (India)
                        value={phone}
                        onChange={(value) => setPhone(value)}
                    />

                </div> */}

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
                {/* <button type="submit" className="btn btn-primary" onClick={handleSignup}>Submit</button> */}
                <button type="submit" className="btn btn-primary">Submit</button>
                
            </div>
    </div>
    </form>
    );
}
export default Form2;