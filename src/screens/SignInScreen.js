import React, { useRef } from 'react';
import './SignInScreen.css';
import { auth } from '../Firebase';  // Import the initialized auth instance
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function SignInScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

   

    const register = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);  // Handle successful registration
        }).catch((error) => {
            alert(error.message);  // Handle error
        });
    };

    const signIn = (e) => {
        e.preventDefault();
    
        signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser) => {
            console.log(authUser);  // Logs user credentials after successful sign-in
        })
        .catch((error) => {
            alert(error.message);  // Alerts the error message in case of a failure
        });
    };
    


    return (
        <div className="SignInScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder="Email" type="email" />
                <input ref={passwordRef} placeholder="Password" type="password" />
                <button type="submit" onClick={signIn}>Sign In</button>
                <h4>
                    <span className="SignupScreen_gray">New to Netflix?</span>
                    <span className="SignupScreen_link" onClick={register}>Sign Up now</span>
                </h4>
            </form>
        </div>
    );
}

export default SignInScreen;
