<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar background="bg-primary-700">
			<svelte:fragment slot="lead">
			<a href="/">
			<figure class="w-48">
				<section class="img-bg" />
				<svg class="fill-white" viewBox="0 0 95.8 18.76" focusable="false" aria-hidden="true">
						<title>Modern Campus CMS Logo</title>
						<path class="logo-primary-white" d="m14.13,18.76H3.47c-1.91,0-3.47-1.55-3.47-3.47V4.63C0,2.71,1.55,1.16,3.47,1.16h5.33c1.91,0,3.47,1.56,3.47,3.47h-1.6c0-1.03-.84-1.87-1.87-1.87H3.47c-1.03,0-1.87.84-1.87,1.87v10.67c0,1.03.84,1.87,1.87,1.87h10.67c1.03,0,1.87-.84,1.87-1.87v-5.33c0-1.03-.84-1.87-1.87-1.87s-1.87.84-1.87,1.87c0,1.91-1.55,3.47-3.47,3.47s-3.47-1.56-3.47-3.47v-2.67h1.6v2.67c0,1.03.84,1.87,1.87,1.87s1.87-.84,1.87-1.87c0-1.91,1.56-3.47,3.47-3.47s3.47,1.55,3.47,3.47v5.33c0,1.91-1.55,3.47-3.47,3.47Zm3.47-16.13c0-.81-.66-1.47-1.47-1.47s-1.47.66-1.47,1.47.66,1.47,1.47,1.47,1.47-.66,1.47-1.47Z"></path>
						<path class="logo-primary-white" d="m50.35,14.25l-1.12-.28c-.49-.11-.98-.39-.98-.91,0-.59.49-1.06,1.22-1.06.6,0,1.21.39,1.22.98h1.37c0-1.53-1.34-2.22-2.62-2.22-1.53,0-2.61.99-2.61,2.25s.73,1.84,2,2.18l1.04.24c.6.13,1.04.42,1.04.99,0,.62-.57,1.09-1.53,1.09s-1.5-.54-1.52-1.19h-1.32c.07,1.56,1.47,2.43,2.84,2.43,1.58,0,2.95-.9,2.95-2.31,0-.86-.41-1.81-1.99-2.2"></path>
						<path class="logo-primary-white" d="m24.8,14.75c0-2.41,1.91-3.99,4.09-3.99,1.19,0,2.23.47,2.9,1.2l-.9.93c-.47-.49-1.16-.8-1.96-.8-1.5,0-2.7,1.09-2.7,2.65s1.2,2.67,2.7,2.67c.8,0,1.48-.31,1.96-.8l.9.93c-.67.75-1.71,1.2-2.9,1.2-2.18,0-4.09-1.6-4.09-4.01"></path>
						<path class="logo-primary-white" d="m41.73,10.76c-1.05,0-1.98.5-2.56,1.28-.59-.78-1.52-1.28-2.57-1.28-1.78,0-3.22,1.44-3.22,3.22v4.78h1.31v-4.78c0-1.05.86-1.91,1.91-1.91s1.91.86,1.91,1.91v4.78h1.31v-4.78h0c0-1.05.86-1.91,1.91-1.91s1.91.86,1.91,1.91v4.78h1.31v-4.78c0-1.78-1.44-3.22-3.22-3.22Z"></path>
						<path class="logo-primary-white" d="m54.55,11.01h-.47v1.35h-.26v-1.35h-.47v-.25h1.21v.25Zm1.82-.25v1.6h-.26v-1.14l-.52.83h-.03l-.52-.83v1.14h-.26v-1.6h.26l.54.86.54-.86h.26Z"></path>
						<path class="logo-primary-white" d="m52.92,2.19c-.21-.07-.44-.12-.67-.12-1.11,0-2.01.9-2.01,2.01v2.99h.82v-2.99c0-.66.53-1.19,1.19-1.19.25,0,.48.08.67.21v-.91Z"></path>
						<path class="logo-primary-white" d="m35.27,2.08c-1.35,0-2.48.99-2.48,2.49s1.13,2.51,2.48,2.51,2.49-1,2.49-2.51-1.14-2.49-2.49-2.49m0,4.16c-.87,0-1.59-.68-1.59-1.67s.72-1.66,1.59-1.66,1.61.68,1.61,1.66-.73,1.67-1.61,1.67"></path>
						<path class="logo-primary-white" d="m46.88,2.08c-1.35,0-2.44.98-2.44,2.48s1.09,2.52,2.44,2.52c.92,0,1.77-.45,2.18-1.27l-.76-.3c-.28.48-.8.74-1.38.74-.81,0-1.43-.44-1.56-1.28h3.87c.01-.13.02-.26.02-.4,0-1.51-1.01-2.48-2.36-2.48m-1.52,2.12c.14-.86.71-1.28,1.52-1.28s1.37.47,1.48,1.28h-2.99Z"></path>
						<path class="logo-primary-white" d="m42.56,0v2.96c-.22-.39-.79-.84-1.68-.84-1.43,0-2.36,1.14-2.36,2.47s.92,2.48,2.48,2.48c1.37,0,2.44-1.01,2.44-2.48V0h-.88Zm-1.6,6.25c-.86,0-1.54-.72-1.54-1.65s.69-1.65,1.54-1.65c.78,0,1.6.63,1.6,1.65s-.76,1.65-1.6,1.65"></path>
						<path class="logo-primary-white" d="m57.7,4.09v2.99h-.82v-2.99c0-.66-.53-1.19-1.2-1.19s-1.19.53-1.19,1.19v2.99h-.82v-2.99c0-1.11.9-2.01,2.01-2.01s2.01.9,2.01,2.01Z"></path>
						<path class="logo-primary-white" d="m30.02,2.08c-.66,0-1.24.31-1.6.8-.37-.49-.95-.8-1.6-.8-1.11,0-2.01.9-2.01,2.01v2.99h.82v-2.99c0-.66.53-1.19,1.19-1.19s1.2.53,1.2,1.19v2.99h.82v-2.99h0c0-.66.53-1.19,1.19-1.19s1.2.53,1.2,1.19v2.99h.82v-2.99c0-1.11-.9-2.01-2.01-2.01Z"></path>
						<path class="logo-primary-white" d="m94.56,4.25l-.7-.17c-.31-.07-.61-.25-.61-.57,0-.37.31-.66.76-.66.38,0,.75.24.76.61h.86c0-.96-.84-1.39-1.64-1.39-.96,0-1.63.62-1.63,1.41s.46,1.15,1.25,1.36l.65.15c.38.08.65.26.65.62,0,.39-.36.68-.96.68s-.94-.34-.95-.74h-.83c.04.98.92,1.52,1.77,1.52.99,0,1.84-.56,1.84-1.45,0-.54-.25-1.13-1.24-1.38"></path>
						<path class="logo-primary-white" d="m71.18,7.08h.85s0-2.5,0-2.5c0-1.61-1.2-2.5-2.48-2.5-1.35,0-2.48.99-2.48,2.5s1.06,2.5,2.42,2.5c.66,0,1.41-.3,1.68-.87l.02.87Zm-.02-2.5c0,.98-.73,1.67-1.61,1.67s-1.59-.69-1.59-1.67.72-1.66,1.59-1.66,1.61.67,1.61,1.66"></path>
						<path class="logo-primary-white" d="m82.14,9.14v-2.95c.22.39.79.84,1.68.84,1.43,0,2.35-1.15,2.35-2.48s-.92-2.47-2.47-2.47c-1.36,0-2.43.99-2.43,2.47v4.59h.88Zm1.6-6.23c.86,0,1.54.7,1.54,1.64s-.68,1.65-1.54,1.65c-.78,0-1.6-.64-1.6-1.65s.76-1.64,1.6-1.64"></path>
						<path class="logo-primary-white" d="m61.94,4.57c0-1.51,1.19-2.49,2.56-2.49.74,0,1.39.3,1.81.75l-.56.58c-.3-.3-.72-.5-1.22-.5-.94,0-1.69.68-1.69,1.66s.75,1.67,1.69,1.67c.5,0,.93-.19,1.22-.5l.56.58c-.42.47-1.07.75-1.81.75-1.36,0-2.56-1-2.56-2.51"></path>
						<path class="logo-primary-white" d="m91.19,5.06v-2.99h-.82v2.99c0,.66-.53,1.19-1.2,1.19s-1.19-.53-1.19-1.19v-2.99h-.82v2.99c0,1.11.9,2.01,2.01,2.01s2.01-.9,2.01-2.01Z"></path>
						<path class="logo-primary-white" d="m78.25,2.08c-.66,0-1.24.31-1.6.8-.37-.49-.95-.8-1.6-.8-1.11,0-2.01.9-2.01,2.01v2.99h.82v-2.99c0-.66.53-1.19,1.19-1.19s1.2.53,1.2,1.19v2.99h.82v-2.99h0c0-.66.53-1.19,1.19-1.19s1.2.53,1.2,1.19v2.99h.82v-2.99c0-1.11-.9-2.01-2.01-2.01Z"></path>
				</svg>
				</figure>
				</a>
				</svelte:fragment>
			<svelte:fragment slot="trail">
				<a class="mx-5 hover:bg-secondary-500 p-3" href="/openai">Open AI</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
