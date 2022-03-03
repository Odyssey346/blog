<!-- totally didn't steal all of this from Akis -->
<script context="module">
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
</script>

<script>
	export let posts;
	function sortByDate(a, b) {
		const dateA = a.date;
		const dateB = b.date;
		let comparison = 0;
		if (dateA > dateB) {
			comparison = 1;
		} else if (dateA < dateB) {
			comparison = -1;
		}
		return comparison * -1;
	}
	posts.sort(sortByDate);
	import IndexCard from "$lib/IndexCard.svelte";
</script>


<div class="flexContainerIndex">
	<div class="postarea">
		<h1 style="color: white;">Posts</h1>
		{#each posts as { slug, title, description, uploadedon }}
 	       <a href="posts/{slug}">
 	         {title} - {description} - uploaded {uploadedon}
 	         <br>
 	       </a>
		{/each}
	</div>

	<IndexCard />
</div>