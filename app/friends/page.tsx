// app/date/page.tsx (데이트 상세 페이지)
export default function DatePage() {
  return (
    <div className="min-h-screen bg-[#fdfcf0] p-10 font-sans">
      <div className="max-w-2xl mx-auto">
        <a href="/" className="text-orange-400 mb-8 block">← 돌아가기</a>
        <h1 className="text-3xl font-bold mb-6 text-gray-800">💕 친구들과 놀았던 기록</h1>
        <div className="bg-white p-8 rounded-3xl shadow-sm leading-relaxed text-gray-600">
          <p>여기에 오늘 데이트한 상세 내용을 적어보세요!</p>
          <p className="mt-4">예: 오늘은 맛있는 파스타를 먹고 한강을 걸었다...</p>
        </div>
      </div>
    </div>
  );
}