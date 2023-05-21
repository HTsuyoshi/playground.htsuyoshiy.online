<template>
	<div id='list'>
<pre id='title'>
┌───────────────────────┐
│                       │
│   This page doesn't   │
│         exist         │
│                       │
│         Error         │
│          404          │
│                       │
└───────────────────────┘




─ ─── ⋆✦ <a href='/'>Return</a> ✦⋆ ─── ─
</pre>
	</div>
</template>

<style scoped>
#list {
	max-width: 600px;
	min-height: 100vh;
	margin: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;

	color: #eee;
	background-color: var(--background-color-child);

	box-shadow: #111 0px 0px 10px 10px;
}
#title {
	font-size: 1.2em;
}
code {
	background-color: #1a1a1a;
	border-radius: 0.2em;
	color: #eee;
	padding-left: 0.5em;
	padding-right: 0.5em;
}
a {
	text-decoration: none;
	color: #eee;
}
pre {
	font-family: 'Fira code', monospace, Monaco;
	line-height: 1.2;
	margin: 0;
}
</style>
