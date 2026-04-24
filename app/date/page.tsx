import React from 'react';

// 'export default'가 꼭 있어야 합니다! 이게 "내가 이 페이지 주인이다"라는 선언이에요.
export default function DatePage() {
  return (
    <div className="min-h-screen bg-[#fdfcf0] p-10 font-sans text-gray-700">
      <div className="max-w-2xl mx-auto">
        {/* 홈으로 돌아가는 버튼 */}
        <a href="/" className="text-orange-400 mb-8 inline-block hover:underline">
          ← 메인으로 돌아가기
        </a>
        
        <h1 className="text-3xl font-bold mb-6 text-gray-800">💕 데이트 기록</h1>
        
        <div className="bg-white p-8 rounded-3xl shadow-sm leading-relaxed border border-orange-50">
          <p className="mb-4">오늘의 데이트는 어땠나요? 😊</p>
          <p className="text-gray-500">
            여기에 선생님의 소중한 추억을 한 줄 한 줄 기록해 보세요.
            파일을 수정하고 저장하면 바로 반영됩니다!
          </p>
        </div>
      </div>
    </div>
  );
}