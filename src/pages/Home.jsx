 import {Link} from "react-router-dom";
import hero from "../assets/hero.avif";


function Home(){

return (

<div className="text-center">


<h1 className="display-3 fw-bold">
🍔 Foodie's Paradise
</h1>


<p className="lead">
Delicious food delivered to your doorstep
</p>



<img
src={hero}
className="img-fluid rounded-5 shadow my-4"
style={{maxHeight:"350px"}}
/>



<div>

<Link 
to="/menu"
className="btn btn-danger btn-lg me-3"
>

Order Now 🍴

</Link>


<Link
to="/contact"
className="btn btn-dark btn-lg"
>

Contact

</Link>


</div>




<div className="row mt-5">


<div className="col-md-4">

<div className="card p-4 shadow">

<h3>🚚 Fast Delivery</h3>

<p>Within 30 minutes</p>

</div>

</div>



<div className="col-md-4">

<div className="card p-4 shadow">

<h3>🍕 Fresh Food</h3>

<p>Made by chefs</p>

</div>

</div>




<div className="col-md-4">

<div className="card p-4 shadow">

<h3>⭐ Top Rated</h3>

<p>Best quality</p>

</div>

</div>



</div>


</div>

)

}


export default Home;