

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth/Auth_context";


const Dashboard = () => {
const{logout}=useAuth();
const nav=useNavigate()
const handleClick=()=>{
  logout();
  nav('/')
}

  return (
    <div>
      <h1>Only Users Should See This Page</h1>
      <button onClick={handleClick}>logout</button>
    </div>
  );
};

export default Dashboard;
