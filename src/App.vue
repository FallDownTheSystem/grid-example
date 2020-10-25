<template>
	<div class="grid layout">
		<header class="z-20 fixed flex justify-between items-center h-24 w-full bg-gray-900 bg-opacity-50">
			<span class="text-gray-100 ml-16 uppercase">
				Logo
			</span>
			<nav class="space-x-16 mr-16 uppercase">
				<a
					class="text-gray-300 hover:text-white transition-colors duration-300"
					href="#"
					v-for="link in links"
					:key="link"
				>
					{{ link }}
				</a>
			</nav>
		</header>
		<!-- First row: Hero screen -->
		<div class="hero-overlay flex justify-center items-center">
			<span class="text-7xl text-white uppercase">
				Plan your adventure
			</span>
		</div>
		<div class="hero">
		</div>
		<!-- Second row: New arrivals -->
		<div class="new">
		</div>
		<div class="new-img">
		</div>
		<!-- Third row: Categories -->
		<div class="cat1 overflow-hidden">
			<div class="cat1-bg h-full transform hover:scale-110 transition-transform duration-1000 ease-out">
			</div>
		</div>
		<div class="cat2 overflow-hidden">
			<div class="cat2-bg h-full transform hover:scale-110 transition-transform duration-1000 ease-out">
			</div>
		</div>
		<div class="cat3 overflow-hidden">
			<div class="cat3-bg h-full transform hover:scale-110 transition-transform duration-1000 ease-out">
			</div>
		</div>
		<!-- Fourth row: On sale -->
		<div class="sale bg-gray-900">
		</div>
		<!-- Fifth row: About us -->
		<div class="about z-20 flex justify-end items-center bg-black bg-opacity-70">
			<div class="text-gray-50 w-1/2 pr-16 prose prose-2xl">
				<h2 class="text-white uppercase">About us</h2>
				<p class="">
					I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
				</p>
			</div>
		</div>
		<div class="about-bg">
		</div>
		<!-- Sixth row: Contact -->
		<div class="contact bg-black">
		</div>
		<!-- Seventh row: Mailing list -->
		<div class="mailing-list bg-gray-900">
		</div>
		<!-- Seventh row: Footer -->
		<div class="footer bg-gray-800">
		</div>
	</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
	name: 'App',
	data() {
		return {
			links: ['Link', 'Link', 'Link', 'Link', 'Link'],
		};
	},
};
</script>

<style lang="postcss" scoped>
.layout {
	grid-template-areas:
		'hero   hero    hero    hero    hero    hero'
		'new    new     new     img     img     img'
		'cat1   cat1    cat2    cat2    cat3    cat3'
		'sale   sale    sale    sale    sale    sale'
		'about  about   about   about   about   about'
		'cntct  cntct   cntct    cntct  cntct   cntct'
		'mail   mail    mail     mail   mail    mail'
		'foot   foot    foot    foot    foot    foot';
	grid-template-columns: repeat(6, 1fr);
}

.hero {
	grid-area: hero;
	background-image: url('./assets/images/dog9.jpg');
	background-size: cover;
	background-position: center;
	height: 700px;
}

.hero-overlay {
	grid-area: hero;
	background-color: hsla(0, 0%, 0%, 0.5);
	z-index: 10;
}

.new {
	grid-area: new;
	background-color: black;
	height: 600px;
}

.new-img {
	grid-area: img;
	background-image: url('./assets/images/dog2.jpg');
	background-size: cover;
	background-position: center;
	height: 600px;
}

.cat1 {
	grid-area: cat1;
	height: 500px;
}

.cat1-bg {
	background-image: url('./assets/images/dog3.jpg');
	background-size: cover;
	background-position: center;
}

.cat2 {
	grid-area: cat2;
	height: 500px;
}

.cat2-bg {
	background-image: url('./assets/images/dog7.jpg');
	background-size: cover;
	background-position: center;
}

.cat3 {
	grid-area: cat3;
	height: 500px;
}

.cat3-bg {
	background-image: url('./assets/images/dog5.jpg');
	background-size: cover;
	background-position: center;
}

.sale {
	grid-area: sale;
	height: 600px;
}

.about-bg {
	grid-area: about;
	background-image: url('./assets/images/dog8.jpg');
	background-size: cover;
	background-position: center;
	height: 700px;
}

.about {
	grid-row: 5;
	grid-column: 1 / 4;
}

.contact {
	grid-area: cntct;
	height: 700px;
}

.mailing-list {
	grid-area: mail;
	height: 500px;
}

.footer {
	grid-area: foot;
	height: 300px;
}
</style>
