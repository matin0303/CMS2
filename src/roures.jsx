import Products from "./Components/Products/Products";
import Users from "./Components/Users/Users"
import Comments from "./Components/Comments/Comments"
import Orders from "./Components/Orders/Orders"
import Offs from "./Components/Offs/Offs"


const routes=[
    {path:"/Products" , element:<Products/>},
    {path:"/Comments" ,element:<Comments/>},
    {path:"/Users", element:<Users/>},
    {path:"/Orders" ,element:<Orders/>},
    {path:"/Offs" , element:<Offs/>}
]
export default routes