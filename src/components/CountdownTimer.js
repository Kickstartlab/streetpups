import React, { useState, useRef, useEffect } from "react";

const CountDownTimer = () => {
    const Ref = useRef(null);

    // State to hold the timer value
    const [timer, setTimer] = useState("00:00:00:00");

    // Function to calculate time remaining
    const getTimeRemaining = (endtime) => {
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));
        return {
            total,
            days,
            hours,
            minutes,
            seconds,
        };
    };

    // Function to update the timer
    const startTimer = (endtime) => {
        const { total, days, hours, minutes, seconds } = getTimeRemaining(endtime);
        if (total >= 0) {
            setTimer(
                `${days > 9 ? days : "0" + days}:${hours > 9 ? hours : "0" + hours
                }:${minutes > 9 ? minutes : "0" + minutes}:${seconds > 9 ? seconds : "0" + seconds
                }`
            );
        } else {
            setTimer("00:00:00:00");
        }
    };

    // Function to clear the timer and start it
    const clearTimer = (endtime) => {
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(endtime);
        }, 1000);
        Ref.current = id;
    };

    const getDeadTime = () => {
        const storedDeadline = localStorage.getItem("countdown-deadline");
        const targetDate = new Date("2025-02-14T23:59:59");

        if (storedDeadline) {
            const storedDate = new Date(storedDeadline);
            if (storedDate.getTime() !== targetDate.getTime()) {
                localStorage.setItem("countdown-deadline", targetDate.toISOString());
                return targetDate;
            }
            return storedDate;
        } else {
            localStorage.setItem("countdown-deadline", targetDate.toISOString());
            return targetDate;
        }
    };

    useEffect(() => {
        clearTimer(getDeadTime());
        return () => {
            if (Ref.current) clearInterval(Ref.current); // Cleanup on unmount
        };
    }, []);

    return (
        <div className="font-slackey text-blue-100 text-center m-auto">
            <div className="flex items-center justify-center md:gap-x-6 gap-x-3">
                {timer.split(":").map((value, index) => (
                    <div className="text-center" key={index}>
                        <h3 className="md:text-6xl text-3xl m-0">{value}</h3>
                        <span className="md:text-2xl mt-3 block">
                            {["Days", "Hours", "Minutes", "Seconds"][index]}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CountDownTimer;
