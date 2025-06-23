"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
    const [data, setData] = useState({});

    const fetchData = async () => {
        const res = await fetch("https://api.chucknorris.io/jokes/random");
        const data = await res.json();
        setData(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const changeJoke = async () => {
        fetchData();
    };

    return (
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-900 min-h-screen">
            <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-8 max-w-3xl mx-auto">
                <div className="flex flex-col md:flex-row justify-center items-center mb-8 text-center">
                    {data.icon_url && (
                        <Image
                            src={data.icon_url}
                            alt="Chuck Norris Icon"
                            className="rounded-lg mb-4 md:mb-0 md:mr-4"
                            width={80}
                            height={80}
                            priority
                        />
                    )}
                    <h1 className="font-bold text-4xl sm:text-5xl p-4 rounded-xl text-white">
                        Chuck Norris Joke
                    </h1>
                </div>
                <div className="p-4 sm:p-6 w-full font-[Faustina] text-lg sm:text-2xl text-white">
                    {data.value ? (
                        <p>{data.value}</p>
                    ) : (
                        <p className="text-center">Loading...</p>
                    )}
                </div>
                <div className="w-full mt-6">
                    <button
                        className="bg-white text-emerald-900 font-bold px-6 py-3 rounded-lg hover:bg-emerald-100 transition-colors duration-300 w-full"
                        onClick={changeJoke}
                    >
                        Another One
                    </button>
                </div>
            </div>
        </div>
    );
}
