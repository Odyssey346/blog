<script lang="ts">
	export let title;
	export let description;
	export let tags;
	export let uploadedon;
	import SvelteSeo from 'svelte-seo';
</script>

<SvelteSeo {title} {description}/>



<svelte:head>
	<title>{title} | Odyssey's blog</title>
</svelte:head>

<div class="container">
	<div class="card">
		<h1>Post details</h1>
		<span>Title:</span>
		{title}
		<br /><br />
		<span>Description:</span>
		{description}
		<br /><br />
		<span>Tags:</span>
		{tags}
		<br /><br />
		<span>Uploaded on:</span>
		{uploadedon}
	</div>

	<div class="mdsvex_content">
		<a href="/blog/">Click me to go the main page.</a>
		<slot />
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: row-reverse;
	}
	.mdsvex_content {
		color: white;
	}
	span {
		font-weight: bold;
	}
	@media only screen and (max-width: 600px) {
		.container {
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		.card {
			margin-bottom: 5vh;
		}
	}
</style>
