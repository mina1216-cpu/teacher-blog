import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export default function Home() {
  // 1. posts 폴더에서 파일 목록 읽어오기
  const postsDirectory = path.join(process.cwd(), 'posts');
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, ''); // 파일명에서 .md 제거 (주소로 사용)
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // 2. 마크다운의 윗부분(제목, 날짜 등) 분석하기
    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as { title: string; date: string; category: string }),
    };
  });

  return (
    <div className="min-h-screen bg-[#fdfcf0] font-sans text-gray-700">
      {/* 상단 네비게이션 */}
      <nav className="sticky top-0 z-50 bg-[#fdfcf0]/80 backdrop-blur-md border-b border-orange-100">
        <div className="max-w-3xl mx-auto px-6 h-16 flex justify-between items-center">
          <Link href="/" className="text-xl font-serif font-medium text-orange-400">나의 기록장</Link>
          <div className="flex space-x-8 text-sm font-medium text-gray-500">
            <Link href="/date" className="hover:text-pink-400 transition-colors">💕 데이트</Link>
            <Link href="/friends" className="hover:text-blue-400 transition-colors">🍕 친구들</Link>
          </div>
        </div>
      </nav>

      <header className="max-w-3xl mx-auto pt-20 pb-12 px-6 text-center">
        <h2 className="text-4xl font-serif font-light text-gray-800 mb-2">일상의 기록</h2>
        <p className="text-sm text-gray-400">메모장에 쓴 글들이 자동으로 올라옵니다</p>
      </header>

      {/* 3. 글 목록 출력 부분 */}
      <main className="max-w-2xl mx-auto px-6 pb-24">
        <div className="space-y-12">
          {allPostsData.map(({ id, title, date, category }) => (
            <article key={id} className="group border-b border-orange-50 pb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] px-2 py-1 bg-orange-100 text-orange-500 rounded-full font-bold uppercase">{category}</span>
                <span className="text-xs text-gray-300 font-mono">{date}</span>
              </div>
              <Link href={`/posts/${id}`}>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-orange-400 transition cursor-pointer">
                  {title}
                </h3>
              </Link>
              <p className="text-gray-500 text-sm italic">클릭해서 읽기 →</p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}