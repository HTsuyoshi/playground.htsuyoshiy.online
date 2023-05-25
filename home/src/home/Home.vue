<template>
	<div id='list'>
<pre id='title' ref='title'>     ✦         ·    ⬤ 
         ╱╲      .     
      · ╱  ╲           
  ·    ╱    ╲  ╱╲  .   
     Welcome to my     
     ╱ Playground ╲    
  ╱╲╱              ╲   
 ╱      ▲ ╔═╗ ▲     ╲  
──────────╨─╨──────────</pre>
<pre>✦ ⋆ ─────── Projects ─────── ⋆ ✦</pre>
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
✦ ⋆ ──────── links ───────── ⋆ ✦
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
	padding-top: 2em;
	padding-bottom: 1em;
	font-size: 1.2em;
	letter-spacing: -0.5px; /* Increase character spacing */
	line-height: 1.2;
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
	padding-top: 2em;
	margin: 0;
	font-size: 1em;
}
a {
	text-decoration: none;
	color: #eee;
}
footer {
	margin-top: auto;
	padding-top: 1em;
	margin-bottom: 1em;
}
pre {
	font-family: 'Fira code', monospace;
	margin: 0;
}
</style>
