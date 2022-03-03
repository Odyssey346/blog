const posts = import.meta.glob("./posts/*.md");
let body = [];
for (const path in posts) {
		body.push(posts[path]().then(({ metadata }) => metadata));
}
export async function load() {
	const posts = await Promise.all(body);
	return {
			props: {
				posts
			}
	};
}

export async function get() {
  const body = xml(posts)

  const headers = {
    'Cache-Control': 'max-age=0, s-maxage=3600',
    'Content-Type': 'application/xml',
  }
  return {
    headers,
    body,
  }
}

const xml =
  posts => `<rss xmlns:dc="https://purl.org/dc/elements/1.1/" xmlns:content="https://purl.org/rss/1.0/modules/content/" xmlns:atom="https://www.w3.org/2005/Atom" version="2.0">
  <channel>
    <title>Odyssey's blog</title>
    <link>https://odyssey346.github.io/blog</link>
    <description>Odyssey346's blog made using SvelteKit and mdsvex. I like to talk about personal problems and tech here.</description>
    ${posts
      .map(
        post =>
          `
        <item>
          <title>${post.title}</title>
          <description>A blog built with SvelteKit about tech and stuff!</description>
          <link>https://odyssey346.github.io/blog/posts/${post.slug}/</link>
          <pubDate>${new Date(post.uploadedon)}</pubDate>
          <content:encoded>${post.previewHtml} 
            <div style="margin-top: 50px; font-style: italic;">
              <strong>
                <a href="https://odyssey346.github.io/blog/posts/${post.slug}">
                  Keep reading
                </a>
              </strong>  
            </div>
          </content:encoded>
        </item>
      `
      )
      .join('')}
  </channel>
</rss>`