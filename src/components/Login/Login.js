import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import login from '../resources/login.jpg';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser);
            storeAuthToken();
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
                history.replace(from);
            }).catch(function (error) {
                // Handle error
            });
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="row d-flex align-items-center mx-5">
                <div className="col-md-4 my-5 offset-1">
                    <h1>Login Now</h1>
                    <button className="btn btn-primary" onClick={handleGoogleSignIn}>Google Sign in</button>
                </div>
                <div className="col-md-6">
                <img src={login} alt="" className="img-fluid" />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;