<script lang="ts">
    export let title;
    export let description;
    export let tags;
    export let uploadedon;
</script>

<svelte:head>
    <title>{title} | Odyssey's blog</title>
</svelte:head>

<div class="flexContainerIndex">
    <div class="DescCard">
            <h1 id="h1WithoutMargin">Post details</h1>
            Title: { title }
            <br>
            Description: { description }
            <br>
            Tags: { tags }
            <br>
            Uploaded on: {uploadedon}
    </div>

    <div class="mdsvex_content">
        <a href="/index.html">Back to main page where all the posts are</a>
        <slot></slot>
    </div>
</div>