import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const DisplayError = () => {
    const {logOut} = useContext(AuthContext);
    const error = useRouteError();

    const handleLogOut = () => {
        logOut()
          .then(() => {
            toast("Logout Successful!", {
              icon: "👍",
              style: {
                borderRadius: "10px",
                background: "#19D3AE",
                color: "#fff",
              },
            });
          })
          .catch((error) => {
            console.log(error.message);
          });
      };



    return (
        <div>
            <p className='text-red-500 '> something went wrong!!!</p>
            <p className='text-red-400'>{error.statusText || error.message}</p>
            <h4 className='text-4xl'>please <button onClick={handleLogOut}>LogOut</button> and Log back in</h4>
        </div>
    );
};

export default DisplayError;