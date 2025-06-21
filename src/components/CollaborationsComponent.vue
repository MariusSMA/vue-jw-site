<template>
	<section class="collaborations">
		<div class="container">
			<h2 class="collaborations-title">Collaborations</h2>
			<table>
				<thead align="center">
					<tr>
						<th>Brand</th>
						<th>No. of products</th>
						<th>Collections</th>
						<th>Years of supply</th>
					</tr>
				</thead>
				<tbody align="center">
					<tr v-for="(brand, index) in brands" :key="index">
						<td>{{ brand.name }}</td>
						<td>{{ brand.products }}</td>
						<td>{{ brand.collections }}</td>
						<td>{{ brand.years }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
</template>

<script>
export default {
	name: "CollaborationsComponent",
	data() {
		return {
			brands: [
				{ name: "David Yurman", products: 79, collections: 8, years: 5 },
				{ name: "Links of London", products: 40, collections: 3, years: 6 },
				{ name: "Bvulgari", products: 66, collections: 5, years: 4 },
				{ name: "Cartier", products: 108, collections: 12, years: 8 },
				{ name: "Tiffany & Co.", products: 29, collections: 4, years: 10 },
				{ name: "Swarovski", products: 44, collections: 7, years: 3 },
			],
		};
	},
};
</script>

