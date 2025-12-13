import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogs } from "@/data/blogs";
import CodeBlock from "@/components/CodeBlock";
import CodeTabs from "@/components/CodeTabs";

type Props = {
  params: Promise<{
    id: string;
  }> | {
    id: string;
  };
};

export default async function BlogPage({ params }: Props) {

  const unwrappedParams = await params;

  // Fix potential type mismatch: params.id is string, b.id is number
  const requestedId = Number(unwrappedParams.id);
  const blog = blogs.find((b) => b.id === requestedId);

  if (!blog) {
    // Render a helpful debug view so it's clear what id was received and
    // which blog ids are available. This makes it easier to diagnose
    // routing mismatches without relying only on the Next 404 page.
    return (
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Add extra padding and scroll margin to fix "Back to blogs" hiding under header */}
        <div className="mb-6 pt-6 sm:pt-10" style={{ scrollMarginTop: "5rem" }}>
          <Link
            href="/#blogs"
            className="text-orange-500 font-medium inline-block"
            style={{ scrollMarginTop: "5rem" }}
          >
            ← Back to blogs
          </Link>
        </div>

        <h1 className="text-2xl font-bold mb-4">Blog not found</h1>
        <p className="mb-4">
          Requested id: <strong>{String(unwrappedParams.id)}</strong> (Number: <strong>{isNaN(requestedId) ? 'NaN' : requestedId}</strong>)
        </p>

        <div className="mb-4">
          <p className="font-medium">Full params object:</p>
          <pre className="bg-white dark:bg-slate-900 p-3 rounded text-sm">{JSON.stringify(unwrappedParams, null, 2)}</pre>
        </div>

        <div className="mb-4">
          <p className="font-medium">Available blog ids:</p>
          <ul className="list-disc pl-6">
            {blogs.map((b) => (
              <li key={b.id}>
                {b.id} — {b.title}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-sm text-muted-foreground">
          If you expected this page to exist, check the URL or try clicking a different blog card.
        </p>

        <div className="mt-6 p-3 bg-slate-50 dark:bg-slate-800 rounded">
          <p className="text-sm">
            If this page still appears, check the browser URL and the link that navigated here.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Add extra padding and scroll margin to fix "Back to blogs" hiding under header */}
      <div className="mb-6 pt-6 sm:pt-10" style={{ scrollMarginTop: "5rem" }}>
        <Link
          href="/#blogs"
          className="text-orange-500 font-medium inline-block"
          style={{ scrollMarginTop: "5rem" }}
        >
          ← Back to blogs
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      {/* Full-width hero image */}
      {blog.fullImage && (
        <div className="w-full mb-6">
          <Image src={blog.fullImage} alt={blog.title} width={1200} height={420} className="w-full h-auto rounded-lg object-cover" />
        </div>
      )}

      <article className="prose dark:prose-invert mb-8">
        <p>{blog.description}</p>
      </article>

      {/* Sections (Brute Force / Optimized etc.) */}
      {(() => {
        // Prepare code items once
        const codeItems = (blog.sections || [])
          .filter((s) => s.code)
          .map((s) => ({ title: s.title, code: s.code || "", language: s.language }))

        return (
          <>
            {blog.sections?.map((sec, idx) => (
              <section key={idx} className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">{sec.title}</h2>

                {sec.image && (
                  <div className="w-full mb-4">
                    <Image src={sec.image} alt={sec.title} width={700} height={260} className="w-full h-auto rounded-lg object-cover" />
                  </div>
                )}

                {sec.points && (
                  <ul className="list-disc pl-6 mb-4">
                    {sec.points.map((p, i) => (
                      <li key={i} className="mb-1">{p}</li>
                    ))}
                  </ul>
                )}

                {/* After the first (Brute Force) section, render the combined code tabs */}
                {idx === 0 && codeItems.length > 0 && (
                  <div className="mt-6">
                    <CodeTabs items={codeItems} />
                  </div>
                )}
              </section>
            ))}
          </>
        )
      })()}
    </main>
  );
}
