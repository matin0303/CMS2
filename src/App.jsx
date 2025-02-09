import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import "./output.css"

function App() {
  return (
    <div className=" w-full h-screen font-custom">
      <Sidebar/>
      <div className="felx-4 p-5 pr-57">
        <Header/>
        {/* Router */}
      </div>
    </div>
  );
} 

export default App;
