import { Outlet } from "react-router";
import Signup from "./Signup";

const useAuth =()=>{
    const user = {loggIn : false}
    return user && user.loggIn
}

const ProductRouter = () => {

const IsAuth = useAuth();

  return IsAuth ? <Outlet/> : <Signup/>
}

export default ProductRouter