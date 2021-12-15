<template>
	<header class="header">
		<div class="top">
			<div class="logo">Calender</div>
			<img
				src="../assets/icon/search.svg"
				alt="검색버튼"
				class="serarchBtn"
				@click="searchToggle"
			/>
		</div>

		<div class="searchBox" v-if="toggle">
			<i class="fas fa-search"></i>
			<input type="text" placeholder="검색" />
		</div>

		<div class="changeBtnList">
			<div>
				<input type="radio" name="changeBtnList" id="dayBtn" checked />
				<label for="dayBtn">일</label>
			</div>
			<div>
				<input type="radio" name="changeBtnList" id="weekBtn" />
				<label for="weekBtn">주</label>
			</div>
			<div>
				<input
					type="radio"
					name="changeBtnList"
					id="monthBtn"
					checked
				/>
				<label for="monthBtn">월</label>
			</div>
			<div>
				<input type="radio" name="changeBtnList" id="yearBtn" />
				<label for="yearBtn">연도</label>
			</div>
		</div>
	</header>
</template>

<script>
	export default {
		data() {
			return {
				toggle: false,
			};
		},
		methods: {
			searchToggle() {
				this.toggle = !this.toggle;
			},
		},
	};
</script>

<style scoped>
	.header {
		width: 100%;
		border-bottom: 1px solid #ccc;
		background-color: #eee;
		user-select: none;
	}
	.header .top {
		position: relative;
	}
	.header .top .serarchBtn {
		position: absolute;
		top: 4px;
		right: 6px;
		cursor: pointer;
	}
	.header .logo {
		font-size: 16px;
		font-weight: 600;
		background-color: #e4b5b5;
		color: #fff;
		padding: 5px 10px;
	}
	.header .changeBtnList {
		width: 100%;
		display: flex;
		justify-content: center;
		background-color: #fff;
		border-radius: 3px;
		overflow: hidden;
	}
	.header .changeBtnList > div:first-child label {
		border-left: 1px solid #ccc;
	}
	.header .changeBtnList input {
		display: none;
	}
	.header .changeBtnList input:checked + label {
		background-color: #111;
		color: #fff;
	}
	.header .changeBtnList label {
		width: 60px;
		display: block;
		text-align: center;
		padding: 5px 10px;
		background-color: #fff;
		font-size: 14px;
		cursor: pointer;
	}
	.header .changeBtnList label {
		border-right: 1px solid #ccc;
	}
	.header .searchBox {
		position: relative;
		width: 100%;
		border-bottom: 1px solid #ccc;
	}
	.header .searchBox .fa-search {
		position: absolute;
		top: 4px;
		left: 4px;
	}
	.header .searchBox input {
		display: block;
		font-size: 14px;
		text-align: center;
		width: 100%;
		border: none;
		padding: 10px;
		background-color: #fff;
		border-radius: 3px;
	}
</style>
