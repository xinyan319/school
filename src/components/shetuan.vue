<template>
	<div>
		<div class="topbar"></div>
		<div class="cardbox">

			<el-row type="flex" justify="space-around">
				<el-card :body-style="{ padding: '0px' }">
					<img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
					<div style="padding: 14px;">
						<span>摆点查询</span>
						<div class="bottom clearfix">
							<el-button type="text" class="button" @click="gosq()">点击查询</el-button>
						</div>
					</div>
				</el-card>
				<el-card :body-style="{ padding: '0px' }">
					<img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
					<div style="padding: 14px;">
						<span>申请摆点</span>
						<div class="bottom clearfix">
							<el-button type="text" class="button" @click="goCheck()">点击申请</el-button>
						</div>
					</div>
				</el-card>

			</el-row>

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			gosq() {
				this.$router.push({
					path: '/application'
				})
			},
			goCheck() {
				this.$router.push({
					path: '/application'
				})
			}
		}

	}
</script>

<style>
	.cardbox {
		margin-top: 50px;
		width: 100%;
	}

	.topbar {
		width: 100%;
		/* position: fixed; */
		height: 60px;
		background-color: antiquewhite;
	}

	.time {
		font-size: 13px;
		color: #999;
	}

	.bottom {
		margin-top: 13px;
		line-height: 12px;
	}

	.button {
		padding: 0;
		float: right;
	}

	.image {
		width: 100%;
		display: block;
	}

	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}

	.clearfix:after {
		clear: both
	}
</style>
