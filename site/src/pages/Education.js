import React from 'react';

function Education() {
    return (
        <div className="flex justify-center items-center h-screen bg-black text-white">
            <div className="bg-black p-8 rounded-lg shadow-md border border-white">
                <h2 className="text-3xl font-semibold mb-4 text-center"><u>Education</u></h2>
                <div className="text-lg">
                    <h1><strong>Institute:</strong> Institute of Technology, Nirma University</h1>
                    <p><strong>Degree:</strong> Bachelor of Technology in Computer Science</p>
                    <p><strong>Location:</strong> Ahmedabad, Gujarat</p>
                    <p><strong>Duration:</strong> June 2022 – May 2026</p>
                </div>
                <hr className="my-6 border-t border-white" />
                <div className="text-lg">
                    <h3 className="text-lg font-semibold mb-2">Course Work:</h3>
                    <ul className="list-disc pl-6">
                        <li>Data Structures and Algorithms (DSA)</li>
                        <li>Object-Oriented Programming (OOP)</li>
                        <li>Database Management Systems (DBMS)</li>
                        <li>Operating Systems (OS)</li>
                        <li>Introduction to AI/ML</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Education;
