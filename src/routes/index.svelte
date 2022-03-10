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
	import WelcomeCard from "$lib/WelcomeCard.svelte";
</script>


<div class="container">
	<div class="postarea">
		<h1>Posts</h1>
		{#each posts as { slug, title, description, uploadedon }}
 	       <a href="posts/{slug}">
 	         {title} - {description} - uploaded {uploadedon}
 	         <br>
 	       </a>
		{/each}
	</div>

	<WelcomeCard />
</div>

<style>
	h1 {
		color: white;
	}
	.postarea {
		margin-right: 16px;
	}
</style> 