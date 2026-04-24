import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

// params를 받을 때 앞에 async를 꼭 붙여줘야 합니다!
export default async function Post({ params }: { params: Promise<{ id: string }> }) {
  // 주소창에서 'id'를 가져올 때까지 기다립니다.
  const { id } = await params;
  
  const postsDirectory = path.join(process.cwd(), 'posts');
  const fullPath = path.join(postsDirectory, `${id}.md`);

  // 파일이 진짜 있는지 먼저 확인하는 안전장치
  if (!fs.existsSync(fullPath)) {
    return (
      <div className="p-10 text-center">
        <p className="text-gray-500">글을 찾을 수 없습니다. (파일 이름: {id}.md)</p>
        <Link href="/" className="text-orange-400 mt-4 inline-block underline">메인으로 돌아가기</Link>
      </div>
    );
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return (
    <div className="min-h-screen bg-[#fdfcf0] p-10 font-sans">
      <article className="max-w-2xl mx-auto bg-white p-10 rounded-3xl shadow-sm">
        <Link href="/" className="text-orange-400 mb-8 inline-block">← 목록으로</Link>
        <header className="mb-10">
          <span className="text-sm text-gray-400">{data.date} · {data.category}</span>
          <h1 className="text-4xl font-bold text-gray-800 mt-2">{data.title}</h1>
        </header>
        {/* 글 본문 내용 */}
        <div className="prose prose-orange max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
          {content}
        </div>
      </article>
    </div>
  );
}