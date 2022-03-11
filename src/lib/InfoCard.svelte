<script lang="ts">
	export let title;
	export let description;
	export let tags;
	export let uploadedOn;
</script>

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
		{uploadedOn}
	</div>

	<div class="mdsvex_content">
		<a href="/blog/">Back to main page where all the posts are.</a>
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
		margin-right: 16px;
	}
	span {
		font-weight: bold;
	}
	@media only screen and (max-width: 600px) {
		.container {
			flex-direction: column;
			justify-content: center;
		}
		.card {
			margin-bottom: 5vh;
		}
	}
</style>
