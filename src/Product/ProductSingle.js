


function ProductSingle({ productName, updateCartName, removeCartName}) {

  
    console.log("------------------------Start---------------------------")
    console.log(productName)
    console.log("------------------------End--------------------------")


    function addToCart(){
      updateCartName();
    }
    function removeInCart(){
      removeCartName()
;    }

  return (
    <div className="col-3">
      <div className="card-shadow">
          <img
            src={productName.thumbnail}
            alt={productName.title}
           
            className="card-img"
          />
      </div>

  
    <div className="card-body">

      <h4>{productName.title}</h4>

      <p>{productName.description}</p>

      <div>
       <i className="i bi-currency-rupee"></i> <h5>${productName.price}</h5>
      </div>
            
      <p>Rating: {productName.rating}</p>
    </div>

    <div className="card-footer">
      <button className="btn-primary btn" onClick={ a => addToCart(a)}>
          Add to cart
      </button>
       <button className="btn-primary btn" onClick={ a => removeInCart(a)}>
          Remove item
      </button>

    </div>

    </div>
  );
}

export default ProductSingle;