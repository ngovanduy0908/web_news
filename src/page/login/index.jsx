import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumb";
import Category from "../../components/list/Category";
import { auth, provider, providerFB } from "./config";
import { signInWithPopup, signOut } from "firebase/auth";
const UserAuth = () => {
  const [user, setUser] = useState();
  const handleLogin = () => {
    signInWithPopup(auth, provider).then((data) => {
      setUser(data.user);
    });
  };

  const handleLoginWithFB = () => {
    signInWithPopup(auth, providerFB).then((data) => {
      setUser(data.user);
    });
  };
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser(null);
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <div className="bg-white">
      <div className="">
        <div className="pt-4">
          <Breadcrumbs title={"Thành Viên"} />
        </div>

        <div className="grid grid-cols-4 gap-4 p-4">
          <div className="col-span-3">
            <Outlet />
            {/* <div>login with google</div>
            <div>
              <button onClick={handleLogin}>Login Google</button>
            </div>
            {user && <div>Tao có khiên : {user.displayName}</div>}
            <div>
              <button onClick={handleLogout}>Logout Google</button>
            </div>
            <div>
              <h3 className="font-bold">Login with facebook</h3>
              <button onClick={handleLoginWithFB}>Login Facebook</button>
            </div> */}
          </div>

          <div>
            <Category />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAuth;
