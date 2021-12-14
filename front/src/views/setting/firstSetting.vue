<template>
	<div class="setting">
		<h1>금액 설정하기</h1>
		<h4>이번달에 소비할 목표 금액을 설정해주세요.</h4>
		<div class="settingBtnList">
			<button>
				<div class="icon"></div>
				<p>공과금 설정하기</p>
			</button>

			<button>
				<div class="icon"></div>
				<p>비상금 설정하기</p>
			</button>

			<button>
				<div class="icon"></div>
				<p>생활비 설정하기</p>
			</button>
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style scoped>
	.setting {
		position: relative;
		padding: 40px;
	}
	.setting::before {
		position: absolute;
		top: 0;
		left: 0;
		content: '';
		display: block;
		width: 100%;
		height: 30vh;
		background-color: #ddd;
	}
	.setting h1 {
		font-size: 30px;
		font-weight: 700;
	}
	.setting h4 {
		font-size: 17px;
		font-weight: 500;
		color: #444;
		margin-top: 6px;
	}
	.settingBtnList {
		display: flex;
		justify-content: space-between;
		margin-top: 30px;
	}
	.settingBtnList > button {
		display: block;
		width: calc(100% / 3 - 3%);
	}
	.settingBtnList > button .icon {
		width: 100%;
		height: 100px;
		border-radius: 1rem;
		margin-bottom: 4px;
		background-color: #bbb;
	}
	.settingBtnList > button p {
		font-size: 15px;
		font-weight: 500;
	}
</style>
