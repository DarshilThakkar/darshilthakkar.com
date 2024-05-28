import React from 'react';

function Experience() {
    return (
        <div className="flex justify-center items-center h-screen bg-black text-white">
            <div className="bg-black p-8 rounded-lg shadow-md border border-white">
                <h2 className="text-3xl font-semibold mb-4 text-center"><u>Experience</u></h2>
                <div className="text-lg">
                    <h1><strong>Organization:</strong> CodeAdda Programming Club, Nirma University</h1>
                    <p><strong>Position:</strong> Club Director</p>
                    <p><strong>Duration:</strong> November 2023 – Present</p>
                </div>
                <hr className="my-6 border-t border-white" />
                <div className="text-lg">
                    <h3 className="text-lg font-semibold mb-2">Responsibilities:</h3>
                    <ul className="list-disc pl-6">
                        <li>Organized various contests and events</li>
                        <li>Tested contests written by other club members</li>
                        <li>Guided juniors in competitive programming</li>
                        <li>Mentored in Data Structures and Algorithms topics</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Experience;
