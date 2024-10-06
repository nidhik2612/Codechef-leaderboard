import React from 'react';

export default function Leaderboard() {
  return (
    <div className="bg-[#DCE3F3] min-h-screen flex items-center justify-center">
      <div className="rounded-3xl w-full max-w-5xl overflow-hidden">
        <div className="p-6 flex justify-between items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <h1 className="text-3xl font-semibold">Leaderboard</h1>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full overflow-hidden">
            <button className="px-6 py-2 bg-blue-600 text-white font-medium">Organisation</button>
            <button className="px-6 py-2 bg-white text-gray-700 font-medium">Department</button>
          </div>
        </div>
        
        {/* Adjusting Winner's Podium */}
        <div className="flex justify-center mb-8">
          <div className="flex items-end space-x-4">
            <div className="text-center">
              <div className="w-24 h-28 bg-[#4A6FA1] rounded-t-2xl flex flex-col justify-end items-center pb-2">
                <img src="/jackson.png" alt="Jackson" className="w-16 h-16 rounded-full" />
                <p className="text-white font-semibold mt-2">Jackson</p>
                <p className="text-white font-bold text-xl">1847</p>
              </div>
              <div className="bg-[#4A6FA1] text-white text-sm py-1 px-3 rounded-b-lg">2</div>
            </div>
            <div className="text-center relative">
            {/* Crown Adjustment */}
              <img src="/crown.png" alt="Crown" className="w-8 h-8 absolute -top-10 left-1/2 transform -translate-x-1/2" />
              <div className="w-28 h-36 bg-[#4A6FA1] rounded-t-2xl flex flex-col justify-end items-center pb-2">
                <img src="/eiden.png" alt="Eiden" className="w-20 h-22 rounded-full" />
                  <p className="text-white font-semibold mt-2">Eiden</p>
                  <p className="text-white font-bold text-2xl">2430</p>
              </div>
            <div className="bg-[#4A6FA1] text-white text-sm py-1 px-3 rounded-b-lg">1</div>
          </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-[#4A6FA1] rounded-t-2xl flex flex-col justify-end items-center pb-2">
                <img src="/emma.png" alt="Emma Aria" className="w-16 h-16 rounded-full" />
                <p className="text-white font-semibold mt-2">Emma Aria</p>
                <p className="text-white font-bold text-xl">1674</p>
              </div>
              <div className="bg-[#4A6FA1] text-white text-sm py-1 px-3 rounded-b-lg">3</div>
            </div>
          </div>
        </div>
        
        {/* Adjusting Background and Font for the Ranking Section */}
        <div className="bg-[#4A6FA1] rounded-3xl mx-6 p-6">
          {[
            { rank: 3, name: 'Sebastian', score: 1124 },
            { rank: 4, name: 'Jason', score: 875 },
            { rank: 5, name: 'Natalie', score: 774 },
            { rank: 6, name: 'Serenity', score: 723 },
            { rank: 7, name: 'Hannah', score: 559 },
          ].map((item) => (
            <div key={item.rank} className="flex items-center justify-between mb-4 last:mb-0">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#4A6FA1] font-bold">#{item.rank}</span>
                </div>
                <span className="text-white font-medium">{item.name}</span>
              </div>
              <span className="text-white font-bold">{item.score}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
