<template>
	<div>
		<Monthly @dateClick="clickShowModal" />
		<Modal v-if="showModal" @close="showModal = false">
			<template v-slot:header>
				<div class="topInfo">
					<h1>{{ today }}</h1>
					<div class="selectDay">{{ findingTodaysDate() }}</div>
					<div class="selectDate">{{ dateChangeFormat() }}</div>
				</div>
			</template>
			<template v-slot:body>
				<ul>
					<li
						v-for="item in this.$store.state.WhereDateList"
						:key="item"
						style="border-bottom: 1px solid #ccc; padding: 10px 0"
					>
						<div>제목 : {{ item.title }}</div>
						<div>상태 : {{ item.state }}</div>
						<div>날짜: {{ item.startDate }}</div>
					</li>
				</ul>
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
				allDate: '',
				today: '',
				thisDate: [],
				todayWeek: '',
			};
		},
		methods: {
			clickShowModal(today, todayYear, todayMonth) {
				this.showModal = true;
				this.today = this.numExtraction(today);
				this.thisDate = [todayYear, todayMonth, +this.today];
				this.$store.dispatch(
					'FETCH_WHERE_DATE_LIST',
					this.dateChangeFormat()
				);
			},
			numExtraction(item) {
				//문자열을 제어하는 정규식 표현
				const regex = /[^0-9]/g;
				const result = item.replace(regex, '');
				return result;
			},
			dateChangeFormat() {
				return this.thisDate.join('-');
			},
			findingTodaysDate() {
				//클릭한요일찾기
				const year = this.thisDate[0];
				const month = this.thisDate[1] - 1;
				const today = this.thisDate[2];

				const day = new Date(year, month, today).getDay();
				const foramtDay = this.$store.state.DayFormat[day];
				return foramtDay + '요일';
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
