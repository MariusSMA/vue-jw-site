<template>
	<section class="faq" id="faq">
		<div class="container">
			<p class="faq-description gradient">Get your answers</p>
			<h2 class="faq-title">
				Frequently Asked Questions
				<span class="gradient">.</span>
			</h2>
			<ul class="faq-accordion">
				<li
					v-for="(item, index) in faqItems"
					:key="index"
					:class="`faq-accordion-item-gradient ${
						activeIndex === index ? 'acc-active' : ''
					}`"
					@click="toggleAccordion(index)"
				>
					<div class="faq-accordion-item">
						<p class="faq-accordion-item-text">{{ item.question }}</p>
						<img src="@/assets/images/down-arrow.svg" alt="Down arrow" />
					</div>
					<div class="faq-accordion-item-answer" v-if="activeIndex === index">
						<p>{{ item.answer }}</p>
					</div>
				</li>
			</ul>
		</div>
	</section>
</template>

<script>
export default {
	name: "FAQ",
	data() {
		return {
			activeIndex: null,
			faqItems: [
				{
					question: "How can I check the status of my order?",
					answer:
						"You can check the status of your order here. You will find the shipping date and estimated delivery date at the bottom of the page.",
				},
				{
					question: "How do I find out when new items are launched?",
					answer:
						"You can find out when new products are launched by subscribing to our newsletter or by installing our mobile app.",
				},
				{
					question: "How do I submit a complaint?",
					answer:
						"You can submit a complaint or a reclamation by accessing our contact form where you can describe your issue and we will respond in maximum 48 hours.",
				},
				{
					question: "Where can I track the status of my order?",
					answer:
						"Once you have ordered a product through our platform, you'll receive an e-mail with your order ID, shipping information of your parcel, and a hyperlink where you can track the order in real time.",
				},
				{
					question: "What shipping carriers do you use?",
					answer:
						"We offer services of major carriers, including UPS, DHL, FedEx, Parcel2Go and many others. If you have a preferred carrier, you can select it in the order process.",
				},
			],
		};
	},
	methods: {
		toggleAccordion(index) {
			this.activeIndex = this.activeIndex === index ? null : index;
		},
	},
};
</script>
