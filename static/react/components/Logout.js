import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
    '638797613324-33d5aohc3l45ot8kdcc4ctem8a7obj94.apps.googleusercontent.com';

function Logout() {
    const onSuccess = () => {
        console.log('Logout made successfully');
        alert('Logout made successfully');
    };

    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            ></GoogleLogout>
        </div>
    );
}

export default Logout;