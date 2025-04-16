import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Input from './components/Input/Input';
import Rank from './components/Rank/Rank';
import Image from './components/Image/Image';
import SignIn from './signIn/SignIn';
import Register from './Register/Register';
import Result from './components/Result/Result';
import { AnimatedBackground } from 'animated-backgrounds';

function App() {
    const [input, setInput] = useState('');
    const [url, setUrl] = useState('');
    const [route, setRoute] = useState('home');
    const [user, setUser] = useState({
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: '',
    });
    const [food, setFood] = useState('');
    const [probability, setProbability] = useState('');

    // Loads user data into state
    const loadUser = (data) => {
        setUser(data);
    };

    // Updates the input state when the user types a new image URL.
    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    // Triggers when the user clicks the "Submit" button
    // - Sends image URL to the backend for analysis
    // - Updates the user's entry count
    // - Updates the detected food and probability state
    const onButtonPress = () => {
        console.log('Click');
        setUrl(input);

        fetch(`${import.meta.env.VITE_API_URL}/analyze`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                image: input,
            }),
        })
            .then((response) => {
                if (response) {
                    fetch(`${import.meta.env.VITE_API_URL}/image`, {
                        method: 'put',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            id: user.id,
                        }),
                    })
                        .then((response) => response.json())
                        .then((entries) => {
                            setUser((prevUser) => ({
                                ...prevUser,
                                entries: entries,
                            }));
                        });
                }
                return response.json();
            })
            .then((data) => {
                setFood(data.outputs[0].data.concepts[0].name);
                setProbability(data.outputs[0].data.concepts[0].value);
            });
    };

    // Handles navigation between pages
    // Resets result-related states when navigating
    const onRouteChange = (route) => {
        setRoute(route);
        // Reset image values
        setUrl('');
        setFood('');
        setProbability('');
    };

    let content;
    if (route === 'signin') {
        // Show the sign-in form
        content = <SignIn onRouteChange={onRouteChange} loadUser={loadUser} />;
    } else if (route === 'register') {
        // Show the registration form
        content = (
            <Register onRouteChange={onRouteChange} loadUser={loadUser} />
        );
    } else if (route === 'home') {
        // Show the main home page: logo, navigation, input, and results
        content = (
            <>
                <Navigation onRouteChange={onRouteChange} />
                <Logo />
                <Rank name={user.name} entries={user.entries} />
                <Input
                    onInputChange={onInputChange}
                    onButtonPress={onButtonPress}
                />
                <Result food={food} probability={probability} />
                <Image url={url} />
                <footer
                    style={{
                        fontSize: '0.8rem',
                        marginTop: '2rem',
                        textAlign: 'center',
                    }}
                >
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://icons8.com/icon/114889/food"
                    >
                        Food
                    </a>{' '}
                    Icon from{' '}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://icons8.com"
                    >
                        Icons8
                    </a>
                </footer>
            </>
        );
    }

    return (
        <div className="App">
            <AnimatedBackground
                animationName="gradientWave"
                // animationName="particleNetwork"
                blendMode="normal"
                options={{
                    duration: 8000,
                }}
            />
            {content}
        </div>
    );
}

export default App;
