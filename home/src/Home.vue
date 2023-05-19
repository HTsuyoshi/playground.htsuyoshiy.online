<script setup lang='ts'>
	import { Ref, ref, onMounted} from 'vue'

	function format(text: string[]): string {
		const chars: {
			horizontal: string;
			vertical: string;
			up_left: string;
			up_right: string;
			down_left: string;
			down_right: string;
		} = {
			horizontal: '\u2500',
			vertical: '\u2502',
			up_left: '\u250C',
			up_right: '\u2510',
			down_left: '\u2514',
			down_right: '\u2518'
		};

		const max_length = text.reduce((max, str) => {
			return Math.max(max, str.length);
		}, 0) + 6;

		let title_text_formatted: string = chars.up_left + chars.horizontal.repeat(max_length) + chars.up_right + '\n';
		for (let t of text) {
			title_text_formatted += chars.vertical + ' '.repeat((max_length - t.length) & 1) + ' '.repeat((max_length - t.length)/2) + t + ' '.repeat((max_length - t.length)/2) + chars.vertical + '\n';
		}
		title_text_formatted += chars.down_left + chars.horizontal.repeat(max_length) + chars.down_right + '\n';

		return title_text_formatted;
	}

	const title: Ref<HTMLElement | null> = ref(null);
	const title_text = format(['', 'Welcome to my', 'Playground', '']);

	onMounted(() => {
		if (title.value) title.value.innerText = title_text;
	});
</script>

<template>
	<div id='list'>
<pre id='title' ref='title'>┌───────────────────────┐
│                       │
│     Welcome to my     │
│       Playground      │
│                       │
└───────────────────────┘
</pre>
<pre>
✦⋆ ─────── Projects ─────── ⋆✦
</pre>
		<ul>
			<li>
				<a href='/canvas'>Pure canvas projects</a>
				<p class='description'>
					Projects using the <code>&lt;canvas&gt;</code> element to simulate physics
				</p>
			</li>
			<li>
				<a href='/flashcards'>Flashcards</a>
				<p class='description'>
					Simple web application game that consumes <a href='https://kanjiapi.dev/' target='_blank'>kanjiapi</a>
				</p>
			</li>
		</ul>
		<footer>
<pre>
✦⋆ ──────── links ───────── ⋆✦
</pre>
			<div id='links'>
				<a href='https://github.com/HTsuyoshi'>
					<font-awesome-icon :icon="['fab', 'github']" />
					Github
				</a>
				<a href='https://doombringerazurai.itch.io'>
					<font-awesome-icon :icon="['fab', 'itch-io']" />
					Itch.io
				</a>
			</div>
		</footer>
	</div>
</template>

<style scoped>
#list {
	max-width: 600px;
	min-height: 100vh;
	margin: auto;
	display: flex;
	flex-direction: column;

	color: #eee;
	background-color: var(--background-color-child);

	box-shadow: #111 0px 0px 10px 10px;
}
#title {
	padding-top: 3em;
	padding-bottom: 2em;
	font-size: 1.2em;
}
#links a {
	display: block;
	padding-top: 0.5em;
}
.description {
	max-width: 20em;
	padding-top: 1em;
	margin: auto;
	font-size: 1em;
	color: #aaa;
}
code {
	background-color: #1a1a1a;
	border-radius: 0.2em;
	color: #eee;
	padding-left: 0.5em;
	padding-right: 0.5em;
}
ul {
	list-style: none;
	padding: 0;
	margin: 0;
}
li {
	padding-top: 3em;
	margin: 0;
	font-size: 1em;
}
a {
	text-decoration: none;
	color: #eee;
}
footer {
	margin-top: auto;
	margin-bottom: 1em;
}
pre {
	font-family: 'Fira code', monospace, Monaco;
	line-height: 1.2;
	margin: 0;
}
</style>
