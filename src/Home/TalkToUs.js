
function TalkToUs({message}){

    return(

        <div className="main mt-4">

            <h1 className="text-danger">
                {message}
            </h1>

            <div>
                <div className="card shadow p-4 mx-auto login-card" style={{ maxWidth: "450px" }} >
                     <h3 className="text text-center mb-4"> Talk To Us</h3>
                <div className="mb-3">
                    <label htmlFor="exampleInputName1" className="form-label">Full Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="exampleInputName1"
                        placeholder="name"
                       
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
                            />
                </div>
                <div  className="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Your Inputs</label>
                    <textarea
                         class="form-control" 
                         id="exampleFormControlTextarea1" 
                         rows="3"
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3" >Submit</button> 
            </div>
    </div>
        </div>
    );
}

export default TalkToUs;