import { useEffect, useState } from "react";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import axios from "axios";
import Layout from "../Components/Layout";
import HeaderNav from "../Shared/HeaderNav";
import toast from "react-hot-toast"; //function
import ProductSingleRedux from "./ProductSingleRedux";
import { useSelector, useDispatch } from "react-redux";


function ProductListRedux() {

    // const pass = prompt("password")
    // if(pass = "a"){
    //     console.log("Hello")
    // }

    let counter = useSelector((state) => state.counter.value);

    const noOfCartItemsRedux = useSelector(
    (state) => state.cart.items.length
);
   

    console.log("Redux Count:", counter);
    console.log("Redux Cart Count:", noOfCartItemsRedux);

    let [products, setProducts] = useState([]);
    const [expandedId, setExpandedId] = useState(null);
    let [noOfCartItems,setNoOfCartItems] = useState(0);


    function updateCart(){
      // setNoOfCartItems(noOfCartItems + 1);   
      toast.success("Added Item")
    }
    function removeCart(){
        if(noOfCartItems <= 0){
            toast.error("No Items found");
        }else{
         setNoOfCartItems(noOfCartItems - 1); 
         toast.success("Removed Item")
        }
    }

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
             <HeaderNav/>
            <div className="row">

                {/* <div className="col-12 mt-4" style={{ backgroundColor: "#203E7B" }}>
                    <Header />
                </div> */}
            </div>
            <div>
                CART:- {noOfCartItemsRedux} 
            </div>


                {/* <div className="row mt-5mb-5">
                        {
                            products.map((product) => (
                                <div key={product.id}>
                                    {product.title}
                                </div>
                            ))
                        }
                    </div> */}
            
                <div className="row mt-5mb-5">
                  {
                    products.map((product, index) => (
                        
                        <div key={product.id}>
                           {index + 1}.  {product.title}
                           // mapping to product Single page
                            <ProductSingleRedux productName = {product}  updateCartName ={updateCart} removeCartName ={removeCart}/>
                           
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

export default ProductListRedux;