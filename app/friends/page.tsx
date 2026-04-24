import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export default function DateCategoryPage() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const fileNames = fs.readdirSync(postsDirectory);

  // 모든 글을 가져와서 '데이트' 카테고리인 것만 필터링!
  const datePosts = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return { id, ...(data as { title: string; date: string; category: string }) };
  }).filter(post => post.category === '친구들'); // <-- 여기서 데이트만 골라요!

  return (
    <div className="min-h-screen bg-[#fdfcf0] p-10 font-sans">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-orange-400 mb-8 inline-block">← 메인으로</Link>
        <h1 className="text-3xl font-bold mb-10 text-pink-400 border-b-2 border-pink-100 pb-4">🌸 친구들 기록</h1>
        
        {datePosts.length > 0 ? (
          <div className="space-y-6">
            {datePosts.map((post) => (
              <Link href={`/posts/${post.id}`} key={post.id} className="block p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
                <span className="text-xs text-gray-300">{post.date}</span>
                <h3 className="text-xl font-bold text-gray-800">{post.title}</h3>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 italic text-center py-20">아직 등록된 친구들 기록이 없어요. 🌸</p>
        )}
      </div>
    </div>
  );
}