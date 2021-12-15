<template>
	<div class="modal">
		<div class="modal-mask">
			<div class="modal-wrapper">
				<div class="modal-container">
					<div class="modal-default-button" @click="$emit('close')">
						X
					</div>
					<div class="modal-header">
						<slot name="header">헤더</slot>
					</div>

					<div class="modal-body">
						<slot name="body">바디</slot>
					</div>

					<div class="modal-footer">
						<slot name="footer"> footer </slot>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style>
	.modal {
		width: 100%;
		height: 100vh;
		max-width: 425px;
		max-height: 736px;
		background-color: rgba(0, 0, 0, 0.4);
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.modal .modal-wrapper {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 88%;
		height: 450px;
		transform: translate(-50%, -50%);
		background-color: #fff;
		border-radius: 10px;
	}
	.modal-default-button {
		position: absolute;
		top: -34px;
		left: 50%;
		transform: translateX(-50%);
		width: 26px;
		height: 26px;
		font-size: 16px;
		font-weight: 600;
		border-radius: 50%;
		background-color: rgba(255, 255, 255, 0.8);
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.modal-header {
		padding: 20px 16px 10px 16px;
		border-bottom: 1px solid #ccc;
	}
	.modal-body {
		padding: 16px;
		height: 370px;
		overflow-y: auto;
	}
	.modal-footer {
		position: absolute;
		bottom: 15px;
		right: 18px;
	}
</style>
