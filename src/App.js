import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./Login";
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from 'firebase/auth';

function App() {
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
                // User logged in
                dispatch({
                    type: "SET_USER",
                    user: authUser,
                });
            } else {
                // Logged out
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
            }
        });

        return () => {
            // Cleanup operations go here
            unsubscribe();
        };
    }, [dispatch]);

    console.log(user);

    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
