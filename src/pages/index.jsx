import React from "react";

const Home = () => {
    return (
        <main className="">
            <h2 className="text-yellow-400 text-xl"># Australia’s No.1</h2>
            <h1 className="text-4xl font-bold mt-2">
                PTE, IELTS & NAATI CCL <br /> Coaching Institute
            </h1>
            <p className="text-gray-400 mt-4">
                Join 10,000+ satisfied students in achieving their desired Test Scores.
                Helped many students, now it's your turn!
            </p>
            <div className="mt-6 flex justify-center space-x-4">
                <button className="bg-gradient-to-r from-yellow-400 to-red-500 text-black px-6 py-3 rounded">
                    Get a Callback
                </button>
                <button className="border border-yellow-400 px-6 py-3 rounded">
                    Watch Free Lessons
                </button>
            </div>
        </main>
    );
};

export default Home;
