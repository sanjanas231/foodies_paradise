 import { Link } from "react-router-dom";

function Navbar(){

return(

<nav className="navbar navbar-dark bg-dark px-5 py-3">

<div className="container">


<h3 className="text-white">
🍔 Foodie's Paradise
</h3>


<div>

<Link 
className="btn btn-outline-light mx-2"
to="/"
>
Home
</Link>


<Link 
className="btn btn-outline-light mx-2"
to="/menu"
>
Menu
</Link>


<Link 
className="btn btn-outline-light mx-2"
to="/contact"
>
Contact
</Link>


</div>


</div>

</nav>

)

}

export default Navbar;