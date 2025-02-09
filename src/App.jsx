import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import { Route,Routes} from 'react-router-dom'
import Products from "./Components/Products/Products";
import Users from "./Components/Users/Users"
import Comments from "./Components/Comments/Comments"
import Orders from "./Components/Orders/Orders"
import Offs from "./Components/Offs/Offs"
import "./output.css"

function App() {
  return (
    <div className=" w-full h-screen font-custom">
      <Sidebar/>
      <div className="felx-4 p-5 pr-57">
        <Header/>
        <Routes>
          <Route path="/Products" element={<Products/>}/>
          <Route path="/Comments" element={<Comments/>}/>
          <Route path="/Users" element={<Users/>}/>
          <Route path="/Orders" element={<Orders/>}/>
          <Route path="/Offs" element={<Offs/>}/>
        </Routes>
      </div>
    </div>
  );
} 

export default App;
