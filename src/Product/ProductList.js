// import { useEffect, useState } from "react";
// import Footer from "../Shared/Footer";
// import Header from "../Shared/Header";
// import axios from "axios";

// function ProductList() {

//     const [products, setProducts] = useState([]);
//     const [expandedId, setExpandedId] = useState(null);

//     useEffect(() => {

//         async function getProducts() {
//             const response = await axios.get("https://dummyjson.com/products");
//             setProducts(response.data.products);
//         }

//         getProducts();

//     }, []);

//     return (
//         <div className="container">

//             {/* Header */}
//             <div className="row">
//                 <div className="col-12 mt-4" style={{ backgroundColor: "#203E7B" }}>
//                     <Header />
//                 </div>
//             </div>

//             {/* Table Section */}
//             <div className="row mt-4 mb-5">
//                 <div className="col-12">

//                     <table className="table table-bordered table-striped">

//                         <thead className="table-dark">
//                             <tr>
//                                 <th>#</th>
//                                 <th>Title</th>
//                                 <th>Category</th>
//                                 <th>Price ($)</th>
//                                 <th>Description</th>
//                             </tr>
//                         </thead>

//                         <tbody>
//                             {
//                                 products.map((product, index) => (
//                                     <tr key={product.id}>
//                                         <td>{index + 1}</td>
//                                         <td>{product.title}</td>
//                                         <td>{product.category}</td>
//                                         <td>{product.price}</td>
//                                         <td>
//                                             {/* {product.description.substring(0, 50)}... */}
                                             
//                                                     {expandedId === product.id
//                                                         ? product.description
//                                                         : product.description.substring(0, 50) + "..."
//                                                     }

//                                                     <button
//                                                         className="btn btn-link p-0 ms-2"
//                                                         onClick={() =>
//                                                             setExpandedId(expandedId === product.id ? null : product.id)
//                                                         }
//                                                     >
//                                                         {expandedId === product.id ? "Show Less" : "Show More"}
//                                                     </button>
                                                
//                                         </td>
//                                     </tr>
//                                 ))
//                             }
//                         </tbody>

//                     </table>

//                 </div>
//             </div>

//             {/* Footer */}
//             <div className="row">
//                 <div className="col-12" style={{ backgroundColor: "#203E7B" }}>
//                     <Footer />
//                 </div>
//             </div>

//         </div>
//     );
// }

// export default ProductList;

import { useEffect, useState } from "react";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import axios from "axios";
import Layout from "../Components/Layout";

function ProductList() {

    // const pass = prompt("password")
    // if(pass = "a"){
    //     console.log("Hello")
    // }

    let [products, setProducts] = useState([]);
    const [expandedId, setExpandedId] = useState(null);

    useEffect(() => {
        console.log("ProductList loaded");

       async function getProducts(){
            var apiresponse = await axios.get("https://dummyjson.com/products");
            // setProducts(apiresponse.data.products);
            console.log(apiresponse.data.products);

            // adding new key for respone
           let data =  apiresponse.data.products.map( a =>{
                a.is_fav= false;
                return a;
            })
             setProducts(data);
        }

        getProducts();
    }, []);

    function handleFavourite(data){
        // if(data.is_fav){
        //     data.is_fav = false;
        // }else{
        //     data.is_fav = true;
        // }
        // console.log(data);
        
       let tempdata = products.map( a =>{
            if(a.id === data.id){

                if(data.is_fav == true){
                    a.is_fav = false;
                }else{
                    a.is_fav = true;
                }
            }     
            return a;  
        })

        setProducts(tempdata);

    }

    return (
         <div className="dashboard-page d-flex">
            <Layout/>
            <div
            className="card shadow-sm m-3 card-animation"
            style={{
                width: "calc(950vw - 320px)", // Adjust based on your sidebar width
                height: "95vh",
            }}
        >
            <div
                className="card-body p-3"
                style={{
                    overflow: "auto",
                }}
            >
        <div className="container">
            <div className="row">

                {/* <div className="col-12 mt-4" style={{ backgroundColor: "#203E7B" }}>
                    <Header />
                </div> */}
            </div>

                <div className="row mt-3 mb-53">
                        {
                            products.map((product) => (
                                <div className="col-3 pb-2" key={product.id}>
                                    <div className="card shadow h-100">
                                        <img src= {product.thumbnail} className="card-img-top" style={{ height: "200px", objectFit: "cover" }} />
                                            <div className="card-body">
                                                <h4 className="card-title"> { product.title } </h4>
                                                <p className="card-text"> 
                                                    {/* { product.description.substring(0, 80) }...  */}

                                                    {expandedId === product.id
                                                        ? product.description
                                                        : product.description.substring(0, 50) + "..."
                                                    }

                                                    <button
                                                        className="btn btn-link p-0 ms-2"
                                                        onClick={() =>
                                                            setExpandedId(expandedId === product.id ? null : product.id)
                                                        }
                                                    >
                                                        {expandedId === product.id ? "Show Less" : "Show More"}
                                                    </button>
                                                    </p>
                                                    <div className="card-footer">
                                                        <button className="btn btn-primary" onClick={ e => handleFavourite(product)}>
                                                            {/* <i className="i bi-heart"> </i> */}
                                                            <i
                                                                className={
                                                                    product.is_fav
                                                                        ? "bi bi-heart-fill text-danger"
                                                                        : "bi bi-heart"
                                                                }
                                                            />
                                                            
                                                        </button>
                                                    </div>
                                                    
                                              
                                            </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                <div className="row mt-5mb-5">
                        {
                            products.map((product) => (
                                <div key={product.id}>
                                    {product.title}
                                </div>
                            ))
                        }
                    </div>
            
                <div className="row mt-5mb-5">
                  {
                    products.map((product, index) => (
                        <div key={product.id}>
                           {index + 1}.  {product.title}
                        </div>
                    ))
                }
                </div>
                

                <div className="row" style={{ backgroundColor: "#203E7B" }}>
                    <Footer />
                </div>

            </div>
        </div>
         </div>
        </div>
    );
}

export default ProductList;