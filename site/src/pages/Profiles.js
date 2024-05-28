import React from 'react';

function Profiles() {
    return (
        <div className="flex justify-center items-center h-screen bg-black text-white">
            <div className="bg-black p-8 rounded-lg shadow-md border border-white">
                <h2 className="text-3xl font-semibold mb-4 text-center"><u>Profiles</u></h2>
                <div className="text-lg flex justify-center items-center">
                    <div className="mr-8">
                        <img src="../codeforces.png" alt="Codeforces" className="h-32 w-32 mb-4" />
                        <h3><strong>Codeforces</strong></h3>
                        <p>Handle: Lihs_RAD</p>
                        <p>Max-Rating: 1517 (Specialist)</p>
                    </div>
                    <div className="mr-8">
                        <img src="../leetcode.png" alt="Leetcode" className="h-32 w-32 mb-4" />
                        <h3><strong>Leetcode</strong></h3>
                        <p>Handle: Darshil_Thakkar</p>
                        <p>Max-Rating: 1930 (Knight)</p>
                    </div>
                    <div>
                        <img src="../codechef.jpeg" alt="CodeChef" className="h-32 w-32 mb-4" />
                        <h3><strong>CodeChef</strong></h3>
                        <p>Handle: doraemon_2510</p>
                        <p>Max-Rating: 1770 (3-Star)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profiles;
