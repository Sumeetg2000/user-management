import { useDispatch, useSelector} from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { LOGOUT } from '../../Redux/actions/actionTypes';
import './HomePage.css'

export default function HomePage(){

    const userData=useSelector(state=>state.signUp);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    
    const logOutHandler=()=>{
        dispatch({
            type:LOGOUT,
        });
        localStorage.clear();
        navigate ('/SignUpPage',{replace:true});
        window.location.reload();
    }

    return(
        <div className="homePage">
            <div className='header'>
                <button className='logOut btn' onClick={logOutHandler}>Logout</button>
                <span className='userName'>{userData.userName}</span>
            </div>
            <div className="userData">
                 <img className='userImage' src={userData.userImage} alt='as'/>
                 <p className='greeting'>
                 Hello <span className='details'> {userData.userName}</span>,<br/>
                 you are registered with the email id :- <span className='details'>{userData.userEmail}</span><br/> 
                 and phone number :- <span className='details'>{userData.userPhoneNo}</span>
                 </p>
            </div>
        </div>
    );
}