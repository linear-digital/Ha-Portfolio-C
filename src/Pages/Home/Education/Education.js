import React from "react";
import Lottie from "react-lottie";
import readingBook from "./reading-book.json";

const Education = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: readingBook,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <div className="pt-24 text-white" id="education">
            <div className="mb-12">
                <h1 className=" drop-shadow-md text-center text-5xl  tracking-tight font-extrabold  text-dark dark:text-white sm:leading-none">
                    My <span className="text-indigo-600 dark:text-indigo-500">Qualification</span>
                </h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
                <div className="">
                    <Lottie
                        options={defaultOptions}
                        height="70%"
                        width="90%"
                        className="mx-auto lg:mr-auto"
                    />
                </div>
                <div className="mx-auto lg:ml-auto">
                    {/* School */}
                    <div className="p-6 bg-[#161616]  bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg inline-block w-[300px] hover:shadow-primary duration-300 cursor-pointer">
                        <div className="text-right mb-4">
                            <h3 className="text-2xl font-semibold text-primary">
                                School
                            </h3>
                            <p className="text-sm text-white font-semibold">
                                Science
                            </p>
                        </div>
                        <p className="text-sm  text-right text-white">
                            Hazi Moazzem Ali Adasha High School
                        </p>
                        <p className="text-sm  text-right text-white">
                            Dhaka
                        </p>

                    </div>

                    {/* Collage */}
                    <div className="my-6 md:my-4 md:ml-[200px] p-6 bg-[#161616] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
                        <div className="text-right mb-4">
                            <h3 className="text-2xl font-semibold text-primary">
                                College
                            </h3>
                            <p className="text-sm text-white font-semibold">
                                Science
                            </p>
                        </div>
                        <p className="text-sm  text-right text-white">
                            Demra Ideal College
                        </p>
                        <p className="text-sm  text-right text-white">
                            Dhaka
                        </p>
                    </div>

                    {/* SSC */}
                    <div className="p-6 bg-[#161616] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
                        <div className="text-right mb-4">
                            <h3 className="text-2xl font-semibold text-primary">UniverSity</h3>
                            <p className="text-sm text-white font-semibold">Dept Of Computer Science & Engineering</p>
                        </div>
                        <p className="text-sm  text-right text-white">
                            University Of Scholars
                        </p>
                        <p className="text-sm  text-right text-white">
                            Dhaka
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
