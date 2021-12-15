<template>
	<div>
		<div class="mainTopContent">
			<h2>{{ `${todayYear}년 ${todayMonth}월` }}</h2>
			<div class="btnList">
				<button class="prevBtn" onclick="prevMonth()">&lt;</button>
				<button class="todayBtn" onclick="goToday()">오늘</button>
				<button class="nextBtn" onclick="nextMonth()">&gt;</button>
			</div>
		</div>
		<div class="calender">
			<div class="calender-week-day">
				<div>일</div>
				<div>월</div>
				<div>화</div>
				<div>수</div>
				<div>목</div>
				<div>금</div>
				<div>토</div>
			</div>
			<div class="calendar-days">
				<div v-for="item in dates" :key="item" v-html="item"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				test: 'test',
				date: new Date(),
				todayYear: '',
				todayMonth: '',
				dates: [],
			};
		},
		methods: {
			readCalender() {
				const todayYear = this.date.getFullYear();
				const todayMonth = this.date.getMonth() + 1;

				this.todayYear = todayYear;
				this.todayMonth = todayMonth;

				const prevLast = new Date(todayYear, todayMonth - 1, 0);
				const thisLast = new Date(todayYear, todayMonth, 0);

				const prevLastDay = prevLast.getDay();
				const prevLastDate = prevLast.getDate();

				const thisLastDay = thisLast.getDay();
				const thisLastDate = thisLast.getDate();

				const prevDates = [];
				const thisDates = [...Array(thisLastDate + 1).keys()].slice(1);
				const nextDates = [];

				if (prevLastDay !== 6) {
					for (let i = 0; i < prevLastDay + 1; i++) {
						prevDates.unshift(prevLastDate - i);
					}
				}

				for (let i = 0; i < 6 - thisLastDay; i++) {
					nextDates.push(i + 1);
				}

				const dates = prevDates.concat(thisDates, nextDates);

				const firstDate = dates.indexOf(1);
				const lastDate = dates.lastIndexOf(thisLastDate);

				dates.forEach((date, i) => {
					const dateState =
						i >= firstDate && i <= lastDate ? 'this' : 'other';
					dates[
						i
					] = `<div class="date"><span class="${dateState}"">${date}</span></div>`;
				});

				this.dates = dates;
			},
		},
		created() {
			this.readCalender();
		},
	};
</script>

<style scoped>
	.mainTopContent {
		width: 100%;
		padding: 20px;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}
	.mainTopContent h2 {
		font-size: 28px;
	}
	.mainTopContent .btnList {
		display: flex;
		align-items: center;
	}
	.mainTopContent .btnList button {
		background-color: #fff;
		border: 1px solid #ccc;
		border-radius: 3px;
		font-size: 14px;
		font-weight: 600;
		cursor: pointer;
	}
	.mainTopContent .btnList button:hover {
		background-color: #eee;
	}
	.mainTopContent .btnList .prevBtn,
	.mainTopContent .btnList .nextBtn {
		width: 28px;
		height: 28px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.mainTopContent .btnList .todayBtn {
		width: 50px;
		height: 28px;
		margin: 0 2px;
	}
	.calender {
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
	}
	.calender .calender-week-day {
		display: flex;
	}
	.calender .calender-week-day > div {
		text-align: right;
		padding: 6px 10px;
		border-right: 1px solid #ccc;
		background-color: #eee;
		width: 14.2857142857%;
		font-size: 15px;
		font-weight: 500;
	}
	.calender .calender-week-day > div:first-child {
		color: #f50608;
	}
	.calender .calender-week-day > div:last-child {
		border-right: none;
		color: #3976be;
	}
	.calender .calendar-days {
		display: flex;
		flex-wrap: wrap;
	}
	.calender .calendar-days > div {
		text-align: right;
		padding: 6px 10px;
		width: 14.2857142857%;
		min-height: 100px;
		border-bottom: 1px solid #ccc;
		border-right: 1px solid #ccc;
		font-size: 14px;
	}
	.calender .calendar-days > div:nth-child(7n) {
		border-right: none;
		color: #3976be;
	}
	.calender .calendar-days > div:nth-child(7n-6) {
		color: #f50608;
	}
	.calender .calendar-days > div .other {
		opacity: 0.3;
	}
	.calender .calendar-days > div .today {
		position: relative;
		color: #fff;
	}
	.calender .calendar-days > div .today::after {
		content: '';
		display: block;
		position: absolute;
		z-index: -1;
		top: -3px;
		left: -8px;
		width: 24px;
		height: 24px;
		background-color: #3976be;
		border-radius: 50%;
	}
</style>
