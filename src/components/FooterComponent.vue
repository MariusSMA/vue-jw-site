<template>
	<footer>
		<div class="container">
			<div class="footer-row">
				<div class="footer-col">
					<div class="footer-col-logo">
						<router-link to="/">
							<img
								src="@/assets/images/logo-darkblue.svg"
								alt="London Jewelry Logo"
							/>
						</router-link>
						<p class="footer-col-vision">
							Our vision is to offer the highest quality products to our
							customers and make their lives better.
						</p>
					</div>
				</div>
				<div class="footer-col">
					<div class="footer-col-item">
						<p class="footer-col-item-title">About</p>
						<div class="footer-col-item-subitems">
							<p class="footer-col-item-subitem">
								<router-link to="/about">About us</router-link>
							</p>
							<p class="footer-col-item-subitem">
								<router-link to="/">Features</router-link>
							</p>
							<p class="footer-col-item-subitem">
								<router-link to="/newsletter">Newsletter</router-link>
							</p>
						</div>
					</div>

					<div class="footer-col-item">
						<p class="footer-col-item-title">Company</p>
						<div class="footer-col-item-subitems">
							<p class="footer-col-item-subitem">
								<router-link to="/">How we work</router-link>
							</p>
							<p class="footer-col-item-subitem">
								<router-link to="/">Capital</router-link>
							</p>
							<p class="footer-col-item-subitem">
								<router-link to="/">Security</router-link>
							</p>
						</div>
					</div>

					<div class="footer-col-item">
						<p class="footer-col-item-title">Support</p>
						<div class="footer-col-item-subitems">
							<p class="footer-col-item-subitem">
								<router-link to="#faq">FAQs</router-link>
							</p>
							<p class="footer-col-item-subitem">
								<router-link to="/">Support center</router-link>
							</p>
							<p class="footer-col-item-subitem">
								<router-link to="/contact">Contact us</router-link>
							</p>
						</div>
					</div>

					<div class="footer-col-item">
						<p class="footer-col-item-title">Follow us</p>
						<div class="footer-col-item-subitems-icons">
							<a href="./">
								<img src="@/assets/images/instagram.svg" alt="Instagram Logo" />
							</a>
							<a href="./">
								<img src="@/assets/images/facebook.svg" alt="Facebook Logo" />
							</a>
							<a href="./">
								<img src="@/assets/images/tiktok.svg" alt="Tiktok Logo" />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="footer-row">
				<div class="footer-row-left">
					<p class="footer-row-left-copyright">
						© London Jewelry. All rights reserved
					</p>
				</div>
				<div class="footer-row-right">
					<p class="footer-row-right-terms">
						<router-link to="/">Terms & Agreements</router-link>
					</p>
					<p class="footer-row-right-policy">
						<router-link to="/">Privacy Policy</router-link>
					</p>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: "FooterComponent",
};
</script>

