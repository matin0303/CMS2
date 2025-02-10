import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import {useRoutes} from 'react-router-dom'
import routes from "./roures";
import "./output.css"

function App() {
  const router = useRoutes(routes)
  return (
    <div className=" w-full h-screen font-custom">
      <Sidebar/>
      <div className="felx-4 p-5 pr-57">
        <Header/>
        <div className="p-10">
          {router}
        </div>
        
      </div>
    </div>
  );
} 

export default App;
