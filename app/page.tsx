import React from 'react';

const DailyBlog = () => {
  return (
    <div className="min-h-screen bg-[#fdfcf0] font-sans text-gray-700">
      {/* 초심플 헤더 */}
      <header className="max-w-3xl mx-auto pt-20 pb-10 px-6 text-center">
        <h1 className="text-3xl font-serif font-light tracking-widest text-orange-400 mb-2">
          선생님의 기록장
        </h1>
        <p className="text-sm text-gray-400 italic">아이들과 함께 걷는 매일의 조각들</p>
      </header>

      {/* 메인 콘텐츠 (세로 한 줄 레이아웃으로 일기 느낌 강조) */}
      <main className="max-w-2xl mx-auto px-6 pb-20">
        
        {/* 오늘을 기록하는 섹션 (고정된 글귀) */}
        <div className="mb-16 text-center italic text-lg text-gray-500 border-y border-orange-100 py-8">
          "오늘 우리 반 아이의 웃음소리가 <br/> 교실 창밖까지 번져나간 오후였다."
        </div>

        {/* 포스트 리스트 */}
        <div className="space-y-24">
          
          {/* 일상 글 1 */}
          <article className="group cursor-pointer">
            <div className="overflow-hidden rounded-3xl mb-6 shadow-sm group-hover:shadow-xl transition-shadow duration-500">
              {/* 실제 이미지가 들어갈 자리입니다 */}
              <div className="w-full h-80 bg-orange-100 flex items-center justify-center text-5xl">
                📸
              </div>
            </div>
            <div className="px-2">
              <div className="flex justify-between items-end mb-3">
                <h2 className="text-2xl font-bold group-hover:text-orange-400 transition">
                  첫 우유 급식 지도, 그리고 쏟아진 웃음
                </h2>
                <span className="text-xs text-gray-400 font-mono">2026. 04. 24</span>
              </div>
              <p className="leading-relaxed text-gray-500 mb-4">
                새학기가 시작되고 벌써 한 달. 오늘은 아이들과 처음으로 우유 급식을 지도했다. 
                작은 손으로 우유 팩을 뜯으려 낑낑대는 모습이 어찌나 귀엽던지...
              </p>
              <div className="flex gap-2">
                <span className="text-[10px] px-2 py-1 bg-white border border-orange-100 rounded-full text-orange-400">#학교생활</span>
                <span className="text-[10px] px-2 py-1 bg-white border border-orange-100 rounded-full text-orange-400">#첫기록</span>
              </div>
            </div>
          </article>

          {/* 일상 글 2 */}
          <article className="group cursor-pointer">
            <div className="overflow-hidden rounded-3xl mb-6 shadow-sm group-hover:shadow-xl transition-shadow duration-500">
              <div className="w-full h-80 bg-green-100 flex items-center justify-center text-5xl">
                🌿
              </div>
            </div>
            <div className="px-2">
              <div className="flex justify-between items-end mb-3">
                <h2 className="text-2xl font-bold group-hover:text-green-500 transition">
                  퇴근길, 교문 앞 벚꽃
                </h2>
                <span className="text-xs text-gray-400 font-mono">2026. 04. 20</span>
              </div>
              <p className="leading-relaxed text-gray-500 mb-4">
                업무가 조금 늦게 끝난 오늘. 지친 마음으로 교문을 나서는데 활짝 핀 벚꽃이 나를 반겨주었다.
                그래, 이 맛에 선생님 하는 거지.
              </p>
              <div className="flex gap-2">
                <span className="text-[10px] px-2 py-1 bg-white border border-green-100 rounded-full text-green-600">#퇴근길</span>
                <span className="text-[10px] px-2 py-1 bg-white border border-green-100 rounded-full text-green-600">#벚꽃</span>
              </div>
            </div>
          </article>

        </div>

        {/* 하단 페이징 (심플하게) */}
        <div className="mt-20 pt-10 border-t border-orange-100 text-center">
          <button className="text-sm text-gray-400 hover:text-orange-400 underline underline-offset-4">
            이전 기록들 읽어보기
          </button>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="pb-10 text-center text-[10px] text-gray-300 tracking-widest uppercase">
        Quietly Recording Daily Life
      </footer>
    </div>
  );
};

export default DailyBlog;