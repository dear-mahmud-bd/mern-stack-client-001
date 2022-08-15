import React from 'react';

const Service = () => {
    return (
        <section className="container mx-auto p-10 md:py-20 px-0 md:p-20 md:px-0 antialiased">
            <section className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-40 md:gap-20">
                <article className="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group" style={{ backgroundImage: "url(https://images.pexels.com/photos/3299386/pexels-photo-3299386.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900)" }} >
                    <div className="bg-black bg-opacity-20 min-h-150 px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300">
                        <h1 className="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                            On A Day Like Today
                        </h1>
                        <div className="w-16 h-2 bg-yellow-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                        </div>
                        <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae!
                        </p>
                    </div>
                </article>

                <article className="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group" style={{ backgroundImage: "url(https://images.pexels.com/photos/3325720/pexels-photo-3325720.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)" }} >
                    <div className="bg-black bg-opacity-20 min-h-150 px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300">
                        <h1 className="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                            On A Day Like Today
                        </h1>
                        <div className="w-16 h-2 bg-orange-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                        </div>
                        <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae!
                        </p>
                    </div>
                </article>

                <article className="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group" style={{ backgroundImage: "url(https://images.pexels.com/photos/3304855/pexels-photo-3304855.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)" }} >
                    <div className="bg-black bg-opacity-20 min-h-150 px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300">
                        <h1 className="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                            On A Day Like Today
                        </h1>
                        <div className="w-16 h-2 bg-red-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                        </div>
                        <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae!
                        </p>
                    </div>
                </article>
            </section>
        </section>
    );
};

export default Service;