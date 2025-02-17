import React, { useState, useEffect } from 'react';
import Logo from '../../assets/img/resized.png';
import './ComingSoon.css';
import Rocket from '../../assets/img/png-clipart-rocket-flat-design-rocket-3d-computer-graphics-grey-removebg-preview.png';
import {Link} from "react-router-dom";

const ComingSoon = () => {
    // Set the initial time values for 18 days, 15 hours, 30 minutes, and 50 seconds
    const initialTime = {
        days: 18,
        hours: 15,
        minutes: 30,
        seconds: 50,
    };

    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        const countdown = setInterval(() => {
            setTimeLeft((prevTime) => {
                let { days, hours, minutes, seconds } = prevTime;

                // Decrease seconds
                if (seconds > 0) {
                    seconds -= 1;
                } else {
                    // When seconds reach zero, reset and decrease minutes
                    if (minutes > 0) {
                        minutes -= 1;
                        seconds = 59;
                    } else {
                        // When minutes reach zero, reset and decrease hours
                        if (hours > 0) {
                            hours -= 1;
                            minutes = 59;
                            seconds = 59;
                        } else {
                            // When hours reach zero, reset and decrease days
                            if (days > 0) {
                                days -= 1;
                                hours = 23;
                                minutes = 59;
                                seconds = 59;
                            } else {
                                // When the countdown reaches zero, stop the interval
                                clearInterval(countdown);
                                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
                            }
                        }
                    }
                }

                return { days, hours, minutes, seconds };
            });
        }, 1000); // Update every second

        return () => clearInterval(countdown); // Cleanup on component unmount
    }, []);

    return (
        <div className="coming_soon_container">
            <img src={Logo} alt="Logo" className="logo" /> {/* Adjust width to 8rem (128px) */}
            <div className="content">
                <p>Hope you are ready?</p>
                <h1>We're <span>Launching</span> Soon</h1>
                <div className="launch-time">
                    <div>
                        <p id="days">{timeLeft.days}</p>
                        <span>Days</span>
                    </div>
                    <div>
                        <p id="hours">{timeLeft.hours}</p>
                        <span>Hours</span>
                    </div>
                    <div>
                        <p id="minutes">{timeLeft.minutes}</p>
                        <span>Minutes</span>
                    </div>
                    <div>
                        <p id="seconds">{timeLeft.seconds}</p>
                        <span>Seconds</span>
                    </div>
                </div>
                <Link to="/whitepaper">
                    <button type="button">Download whitepaper</button>
                </Link>
            </div>
            <img src={Rocket} alt="Rocket" className='rocket-man' />
        </div>
    );
};

export default ComingSoon;
