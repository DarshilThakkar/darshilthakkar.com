import React from 'react';

function Projects() {
    return (
        <div className="flex justify-center items-center h-screen bg-black text-white">
            <div className="bg-black p-8 rounded-lg shadow-md border border-white">
                <h2 className="text-3xl font-semibold mb-4 text-center"><u>Projects</u></h2>
                <div className="text-lg">
                    <h1><strong>SimStocks</strong></h1>
                    <p>SimStocks is a web application designed to simulate real-world stock market trading environments for educational purposes without the associated financial risks.</p>
                    <p><strong>Tech Stack:</strong> NodeJS, WebSockets, finnHub.io and polygon.io Market APIs.</p>
                </div>
                <hr className="my-6 border-t border-white" />
                <div className="text-lg">
                    <h1><strong>PostIt</strong></h1>
                    <p>PostIt is a robust web application designed to empower users to share their thoughts, ideas, and insights through articles while ensuring secure authentication and content management.</p>
                    <p><strong>Tech Stack:</strong> Django, Python, HTML, CSS.</p>
                </div>
                <hr className="my-6 border-t border-white" />
                <div className="text-lg">
                    <h1><strong>WebWhisper</strong></h1>
                    <p>WebWhisper is a real-time chat application that boasts an appealing user interface design and prioritizes user-friendliness for seamless communication experiences.</p>
                    <p><strong>Tech Stack:</strong> Spring Boot, Java, WebSockets.</p>
                </div>
            </div>
        </div>
    );
}

export default Projects;
