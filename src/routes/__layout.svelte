<script>
	import '../app.css';
	import Tabs from '$lib/tabs.svelte';
	import Content from '$lib/content.svelte';
</script>

<div style="width:100%;height:100vh;display:flex;display-align:center;justify-content:space-around">
	<Tabs />
	<Content />
</div>

<slot />
