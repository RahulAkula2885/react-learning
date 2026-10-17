import { useEffect, useState } from "react";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import axios from "axios";


function Product(){

    const [producData, setProductData] = useState("");

    useEffect(() => {

        async function APICall() {
            let apiResponse = await axios.get("https://dummyjson.com/products/1") //https://jsonplaceholder.typicode.com/posts
                .then((response) => {
                    setProductData(response.data);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });    
        }
        APICall();
    }, []);

    console.log("Product Data:", producData);

    return(
        <div className="container-fluid" style={{ padding: "20px" }}>
            <div className="row" style={{ backgroundColor: "#203E7B" }}>
                <Header/>
            </div>

            <div className="row">
                <div className="col-md-12">
                    {
                        producData ? (
                            <div>
                                <h2>Product Details</h2>
                                <p><strong>ID:</strong> {producData.id}</p>
                                <p><strong>Title:</strong> {producData.title}</p>
                                <p><strong>Description:</strong> {producData.description}</p>
                                <p><strong>Price:</strong> ${producData.price}</p>
                                <p><strong>Brand:</strong> {producData.brand}</p>
                                <p><strong>Category:</strong> {producData.category}</p>
                                <p><strong>Rating:</strong> {producData.rating} <i className="bi bi-star-fill" style={{ color: "gold" }}></i> </p> 
                                <p><strong>Stock:</strong> {producData.stock}</p>
                                <p><strong>Discount Percentage:</strong> {producData.discountPercentage}%</p>
                                <p><strong>Thumbnail:</strong></p>
                                <img src={producData.thumbnail} alt={producData.title} style={{ maxWidth: "200px" }} />
                                {
                                producData.images  && (
                                    <div>
                                        <p><strong>Images:</strong></p>
                                        {producData.images.map((image, index) => (
                                            <img key={index} src={image} alt={`${producData.title} ${index + 1}`} style={{ maxWidth: "200px", marginRight: "10px" }} />
                                        ))}
                                    </div>
                                )   
                                 }
                            </div>
                        ) : (
                            <p>Loading product data...</p>
                        )   
                    }
                </div>
            </div>

            <div className="row" style={{ backgroundColor: "#203E7B" }}>
                <Footer/>
            </div>

        </div>
    )
}

export default Product;