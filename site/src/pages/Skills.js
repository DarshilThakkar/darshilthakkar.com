import React from 'react';

function Skills() {
    return (
        <div className="flex justify-center items-center h-screen bg-black text-white">
            <div className="bg-black p-8 rounded-lg shadow-md border border-white">
                <h2 className="text-3xl font-semibold mb-4 text-center"><u>Skills</u></h2>
                <div className="text-lg">
                    <h3><strong>Languages:</strong></h3>
                    <p>C++, C, Java, Javascript, PHP, Python, HTML/CSS, SQL</p>
                </div>
                <hr className="my-6 border-t border-white" />
                <div className="text-lg">
                    <h3><strong>Technologies/Frameworks:</strong></h3>
                    <p>Spring Boot, Django, React, Node.js, Next.js, Typescript, GitHub</p>
                </div>
                <hr className="my-6 border-t border-white" />
                <div className="text-lg">
                    <h3><strong>Other Skills:</strong></h3>
                    <p>Data Structures, Algorithms, Object Oriented Programming, Database Management, Operating Systems, MongoDB, Competitive Programming, Mathematics, Leadership</p>
                </div>
            </div>
        </div>
    );
}

export default Skills;
