<template>
	<div>
		<Monthly @dateClick="clickShowModal" />
		<Modal v-if="showModal" @close="showModal = false">
			<template v-slot:header>
				<div class="topInfo">
					<h1>15</h1>
					<div class="selectDay">수요일</div>
					<div class="selectDate">2021-12-15</div>
				</div>
			</template>
			<template v-slot:body>
				<p>A paragraph for the main content.</p>
				<p>And another one.</p>
				<p>And another one.</p>
				<p>And another one.</p>
				<p>And another one.</p>
				<p>And another one.</p>
				<p>And another one.</p>
				<p>And another one.</p>
				<p>And another one.</p>
				<p>And another one.</p>
				<p>And another one.</p>
				<p>And another one.</p>
				<p>And another one.</p>
			</template>
			<template v-slot:footer>
				<button class="addBtn">추가하기</button>
			</template>
		</Modal>
	</div>
</template>

<script>
	import Monthly from '../components/calender/Monthly.vue';
	import Modal from '../components/ModalView.vue';
	export default {
		components: {
			Monthly,
			Modal,
		},
		data() {
			return {
				showModal: false,
			};
		},
		methods: {
			clickShowModal() {
				this.showModal = true;
			},
		},
	};
</script>

<style scoped>
	.addBtn {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: sandybrown;
		color: #fff;
		font-size: 14px;
		font-weight: 600;
		padding: 6px 10px;
		border-radius: 3px;
		transition: 0.3s;
		cursor: pointer;
	}
	.addBtn:hover {
		background-color: salmon;
	}
	.topInfo {
		display: flex;
		align-items: flex-end;
		line-height: 1.1;
	}
	.topInfo h1 {
		font-size: 26px;
		font-weight: 800;
	}
	.topInfo .selectDay {
		font-size: 13px;
		font-weight: 500;
		text-align: center;
		padding: 4px 8px;
		border-radius: 3px;
		background-color: seagreen;
		color: #fff;
		margin: 0 6px;
	}
	.topInfo .selectDate {
		font-size: 14px;
		font-weight: 500;
	}
</style>
