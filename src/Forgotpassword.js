
function ForgotPassword(){
    return(

        <div className="container mt-5">
               <div className="card shadow p-4 mx-auto" style={{ maxWidth: "450px" }} >
                <h3 className="text-primary text-center mb-4"> Forgot Password</h3>

            
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
               
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </div>
    );
}

export default ForgotPassword;