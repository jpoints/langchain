<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<h2 class="h2">AI Research</h2>
		<!-- Animated Logo -->
		<figure>
			<section class="img-bg" />
			<svg class="fill-white" viewBox="-6 0 30 20" focusable="false" aria-hidden="true">
					<title>Modern Campus CMS Logo</title>
					<path class="logo-primary-white" d="m14.13,18.76H3.47c-1.91,0-3.47-1.55-3.47-3.47V4.63C0,2.71,1.55,1.16,3.47,1.16h5.33c1.91,0,3.47,1.56,3.47,3.47h-1.6c0-1.03-.84-1.87-1.87-1.87H3.47c-1.03,0-1.87.84-1.87,1.87v10.67c0,1.03.84,1.87,1.87,1.87h10.67c1.03,0,1.87-.84,1.87-1.87v-5.33c0-1.03-.84-1.87-1.87-1.87s-1.87.84-1.87,1.87c0,1.91-1.55,3.47-3.47,3.47s-3.47-1.56-3.47-3.47v-2.67h1.6v2.67c0,1.03.84,1.87,1.87,1.87s1.87-.84,1.87-1.87c0-1.91,1.56-3.47,3.47-3.47s3.47,1.55,3.47,3.47v5.33c0,1.91-1.55,3.47-3.47,3.47Zm3.47-16.13c0-.81-.66-1.47-1.47-1.47s-1.47.66-1.47,1.47.66,1.47,1.47,1.47,1.47-.66,1.47-1.47Z"></path>
			</svg>
		</figure>
		<!-- / -->
		<div class="flex justify-center space-x-2">
			<a
				class="btn variant-filled"
				href="/llms"
			>
				Enter If You Dare
			</a>
		</div>
	</div>
</div>

<style lang="postcss">
	figure {
		@apply flex relative flex-col;
	}
	figure svg,	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
	}
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
			glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
