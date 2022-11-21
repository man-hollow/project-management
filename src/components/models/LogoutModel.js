import React from 'react';
import "./LogoutModel.css"

const LogoutModel = ({ setShowLogout, logout}) => {
    const handleLogout=()=>{
        setShowLogout(false)
        logout()
    }
    return (
        <div className='logout-model'>
            <i class="fa-light fa-triangle-exclamation"></i>
            <h1 className='LogOut'>Are you sure want to logOut</h1>
            <button className='Btn-yes' onClick={()=>handleLogout()}>yes</button>   
            <button className='Btn-no' onClick={()=>setShowLogout(false)}>no</button>
        </div>
    );
}

export default LogoutModel;
