import React from 'react';

const DailyBlog = () => {
  return (
    <div className="min-h-screen bg-[#fdfcf0] font-sans text-gray-700">
      
      {/* 1. 상단 네비게이션 (여기가 메뉴 부분입니다!) */}
      <nav className="sticky top-0 z-50 bg-[#fdfcf0]/80 backdrop-blur-md border-b border-orange-100">
        <div className="max-w-3xl mx-auto px-6 h-16 flex justify-between items-center">
          <h1 className="text-xl font-serif font-medium text-orange-400 tracking-tighter">
            민아의 일기장
          </h1>
          <div className="flex space-x-8 text-sm font-medium text-gray-500">
            <a href="#" className="hover:text-pink-400 transition-colors">💕 데이트</a>
            <a href="#" className="hover:text-blue-400 transition-colors">🍕 친구들</a>
          </div>
        </div>
      </nav>

      {/* 2. 헤더 (블로그 대문) */}
      <header className="max-w-3xl mx-auto pt-20 pb-12 px-6 text-center">
        <p className="text-xs text-orange-300 uppercase tracking-[0.2em] mb-4">Everyday Moments</p>
        <h2 className="text-4xl font-serif font-light text-gray-800 mb-2">
          민아 일상의 기록
        </h2>
      </header>

      {/* 3. 메인 콘텐츠 */}
      <main className="max-w-2xl mx-auto px-6 pb-24">
        
        <div className="space-y-24">
          
          {/* 포스트 1: 데이트 기록 */}
          <article className="group cursor-pointer">
            <div className="overflow-hidden rounded-3xl mb-8 shadow-sm group-hover:shadow-md transition-all duration-500">
              <div className="w-full h-96 bg-pink-50 flex items-center justify-center text-6xl">
                🌸
              </div>
            </div>
            <div className="px-2">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] px-3 py-1 bg-pink-100 text-pink-500 rounded-full font-bold">DATE</span>
                <span className="text-xs text-gray-300 font-mono">2026. 04. 24</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-pink-400 transition">
                봄바람 불던 날, 한강 산책
              </h3>
              <p className="leading-relaxed text-gray-500">
                오랜만에 미세먼지도 없고 날씨가 너무 좋았다. 
                돗자리 펴고 앉아서 도란도란 이야기 나누던 시간...
              </p>
            </div>
          </article>

          {/* 포스트 2: 친구들과의 기록 */}
          <article className="group cursor-pointer">
            <div className="overflow-hidden rounded-3xl mb-8 shadow-sm group-hover:shadow-md transition-all duration-500">
              <div className="w-full h-96 bg-blue-50 flex items-center justify-center text-6xl">
                🍻
              </div>
            </div>
            <div className="px-2">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] px-3 py-1 bg-blue-100 text-blue-500 rounded-full font-bold">FRIENDS</span>
                <span className="text-xs text-gray-300 font-mono">2026. 04. 20</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition">
                고등학교 친구들, 10년 만의 모임
              </h3>
              <p className="leading-relaxed text-gray-500">
                다들 변한 게 하나도 없어서 더 신기했다. 
                그때 그 시절처럼 배가 찢어지게 웃었던 저녁 식사.
              </p>
            </div>
          </article>

        </div>
      </main>

      <footer className="py-12 border-t border-orange-50 text-center text-[10px] text-gray-300 tracking-[0.3em] uppercase">
        © 2026 My Private Diary
      </footer>
    </div>
  );
};

export default DailyBlog;