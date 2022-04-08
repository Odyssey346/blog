<script lang="ts">
	import "../global.css";
	import SvelteSeo from 'svelte-seo';
</script>

<SvelteSeo title="Odyssey's Blog" description="This blog is about me. Personal problems, tech, etc. You'll find it here."/>

<svelte:head>
	<title>Odyssey's Blog</title>
</svelte:head>

<main>
	<slot />
</main>
