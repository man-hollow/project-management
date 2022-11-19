import React from 'react';

const LogoutModel = ({ setShowLogout, logout}) => {
    const handleLogout=()=>{
        setShowLogout(false)
        logout()
    }
    return (
        <div className='logout-model'>
            <h1>Are you sure want to logOut</h1>
            <button onClick={()=>handleLogout()}>yes</button>
            <button onClick={()=>setShowLogout(false)}>no</button>
        </div>
    );
}

export default LogoutModel;
