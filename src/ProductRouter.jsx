import { Outlet } from "react-router";
import Signup from "./Signup";

const useAuth =()=>{
    const user = {loggIn : true}
    return user && user.loggIn
}

const ProductRouter = () => {

const IsAuth = useAuth();

  return IsAuth ? <Outlet/> : <Signup/>
}

export default ProductRouter

//once Productrouter olustuzoruy sonra useAuth foksizonu 
//burada dikkat etmemiy gereken user loggin esiteyip onu false  veya true zpauyoruz
//return ile user ve user loggin grilmisse devam zoksa cik
//sonrra IsAuth olusruzoruy buna yukarifdaki UseAuth esileyio kontrol edizory
//return zapip IsAuth False ise Outlet otomatik olarak zapiyotr yoksa Signup kalir
//bundan sonra App gerekli router kisminda icerisine yazilir