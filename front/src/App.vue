<template>
	<div class="wrap">
		<!-- <div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/login">로그인</router-link>
		</div> -->
		<router-view />
	</div>
</template>

<style>
	@import url(./assets/css/reset.css);
	#app {
		width: 100%;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid #ccc;
		background-color: #eee;
	}
	.wrap {
		width: 100%;
		height: 100%;
		max-width: 425px;
		max-height: 736px;
		margin: auto;
		background-color: #fff;
		box-shadow: 5px 10px 30px rgba(117, 117, 117, 0.1);
		overflow-y: auto;
		/* border-radius: 1rem; */
	}
</style>
