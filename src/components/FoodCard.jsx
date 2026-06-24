 function FoodCard({name,price,image,addToCart}){


return (

<div className="card shadow rounded-4 overflow-hidden h-100">


<img
src={image}
className="card-img-top"
height="220"
/>


<div className="card-body text-center">


<h4>
{name}
</h4>


<h5 className="text-danger">
₹{price}
</h5>


<button
className="btn btn-danger rounded-pill"
onClick={()=>addToCart({name,price})}
>

Add Cart 🛒

</button>


</div>


</div>

)

}


export default FoodCard;