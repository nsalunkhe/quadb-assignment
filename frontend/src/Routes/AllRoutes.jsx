import {Route,Routes} from "react-router-dom";
import Signup from "../Components/Signup";
import Login from "../Components/Login";
import User from "../Components/User";
import Info from "../Components/Info";

const AllRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<Signup/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/user" element={<User/>}></Route>
            <Route path="/info/:jobId" element={<Info/>}></Route>
        </Routes>
    )
}
export default AllRoutes;