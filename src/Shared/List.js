import Footer from "./Footer";
import Header from "./Header";

function List(){

    return (

        <div className="main">
              <div className="col-12 mt-3">
                    <Header/>
                </div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Header/>
                </div>

                <div className="col-12">
                    <h1>In-demand course for quick job</h1>
                </div>




                <div className="col-12">
                    <Footer/>
                </div>

            </div>

        </div>
        <div className="col-12 mt-3">
                    <Footer/>
                </div>
        
</div>
    );
}

export default List;