import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Auth=({children, component})=>{
    const userStatus=JSON.parse(useSelector(state=>state.signUp.isLoggedIn));

    if(!userStatus){
        if(component==='/SignUpPage'){
            return <Navigate replace to={component} />
        }
        else{
            return children;
        }
    }
    else{
        if(component==='/Home'){
            return <Navigate replace to={component} />
        }
        else{
            return children;
        }        
    }
};

export default Auth;