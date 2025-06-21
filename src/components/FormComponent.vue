<template>
	<section class="form">
		<div class="container">
			<form @submit.prevent="handleSubmit">
				<div class="form-row">
					<div class="form-row-item">
						<label for="first-name">
							First name
							<span class="gradient">*</span>
						</label>
						<div class="input-gradient">
							<input
								type="text"
								id="first-name"
								name="first-name"
								placeholder="Your first name"
								v-model="formData.firstName"
							/>
						</div>
					</div>
					<div class="form-row-item">
						<label for="last-name">
							Last name
							<span class="gradient">*</span>
						</label>
						<div class="input-gradient">
							<input
								type="text"
								id="last-name"
								name="last-name"
								placeholder="Your last name"
								v-model="formData.lastName"
							/>
						</div>
					</div>
				</div>
				<div class="form-row">
					<div class="form-row-item">
						<label for="email">
							E-mail
							<span class="gradient">*</span>
						</label>
						<div class="input-gradient">
							<input
								type="email"
								id="email"
								name="email"
								placeholder="Your e-mail"
								v-model="formData.email"
							/>
						</div>
					</div>
					<div class="form-row-item">
						<label for="country">
							Country
							<span class="gradient">*</span>
						</label>
						<div class="input-gradient">
							<input
								type="text"
								id="country"
								name="country"
								placeholder="Your country"
								v-model="formData.country"
							/>
						</div>
					</div>
				</div>
				<div class="form-row">
					<div class="form-row-item">
						<label for="phone-number">Phone number</label>
						<div class="input-gradient">
							<input
								type="tel"
								id="phone-number"
								name="phone-number"
								placeholder="Your phone number"
								v-model="formData.phoneNumber"
							/>
						</div>
					</div>
					<div class="form-row-item">
						<label for="subject">
							Subject
							<span class="gradient">*</span>
						</label>
						<div class="input-gradient">
							<select id="subject" name="subject" v-model="formData.subject">
								<option value="default" selected>Select</option>
								<option value="store-info">Store Information</option>
								<option value="brand-info">Brand Information</option>
								<option value="job-request">Job Request</option>
								<option value="data">Privacy Data Treatment</option>
								<option value="complaint">Complaint</option>
								<option value="other">Other</option>
							</select>
						</div>
					</div>
				</div>
				<div class="form-row">
					<div class="form-row-item">
						<label for="message">
							Message
							<span class="gradient">*</span>
						</label>
						<div class="input-gradient igm">
							<textarea
								id="message"
								name="message"
								placeholder="Your message"
								v-model="formData.message"
							/>
						</div>
					</div>
					<div class="form-row-item">
						<label for="submit" />
						<div class="input-gradient igs">
							<input type="submit" name="submit" defaultValue="Submit" />
						</div>
					</div>
				</div>
			</form>
		</div>
	</section>
</template>

<script>
export default {
	name: "FormComponent",
	data() {
		return {
			formData: {
				firstName: "",
				lastName: "",
				email: "",
				country: "",
				phoneNumber: "",
				subject: "default",
				message: "",
			},
		};
	},
	methods: {
		handleSubmit() {
			// Handle form submission here
			console.log("Form submitted:", this.formData);
			// You can send this.formData to your backend for processing
		},
	},
};
</script>

