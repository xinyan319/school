<template>
	<div class="hello">
		<div class="zhuce">
			<div class="top">
				<div v-bind:class="{biaoti : flag==0}" @click="you">游客登陆</div>
				<div v-bind:class="{biaoti : flag==1}" @click="she">社团登陆</div>
				<div v-bind:class="{biaoti : flag==2}" @click="guan">管理员登陆</div>
			</div>
			<div class="middle" v-show="flag==0">
				<el-button type="primary" round>随便逛逛</el-button>
			</div>
			<div class="middle" v-show="flag==1"> 
				<div>
					<el-row>
						<el-col :span="7">
							<span class="st">社团账号</span>
						</el-col>
						<el-col :span="17">
							<el-input placeholder="请输入社团账号" v-model="stname"></el-input>
						</el-col>
					</el-row>
					<el-col :span="7">
						<span class="st">社团密码</span>
					</el-col>
					<el-col :span="17">
						<el-input placeholder="请输入社团密码" v-model="stcode"></el-input>
					</el-col>
					</el-row>
					<div style="text-align: center;margin-top: 20px;">
						<el-button type="primary" round style="margin-top: 20px;" @click="stSubmit">确认登陆</el-button>
						<el-button type="primary" round @click="stzhuce" style="margin-top: 20px;">社团注册</el-button>
					</div>
				</div>
			</div>
			<div class="middle" v-show="flag==2">
				<div>
					<el-row>
						<el-col :span="7">
							<span class="st">管理员账号</span>
						</el-col>
						<el-col :span="17">
							<el-input placeholder="请输入管理员账号" v-model="glname"></el-input>
						</el-col>
					</el-row>
					<el-col :span="7">
						<span class="st">管理员密码</span>
					</el-col>
					<el-col :span="17">
						<el-input placeholder="请输入管理员密码" v-model="glcode"></el-input>
					</el-col>
					</el-row>
					<div style="text-align: center;">
						<el-button type="primary" round style="margin-top: 20px;">确认登陆</el-button>
					</div>
				</div>
			</div>
			<div class="middle1" v-show="flag==3">
				<div>
					<el-row>
						<el-col :span="8">
							<span class="st">社团名称</span>
						</el-col>
						<el-col :span="16">
							<el-input placeholder="社团名称" v-model="zcname"></el-input>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="8">
							<span class="st">社团登录名称</span>
						</el-col>
						<el-col :span="16">
							<el-input placeholder="社团登录名称" v-model="zcname2"></el-input>
						</el-col>
					</el-row>
					<el-col :span="8">
						<span class="st">登录密码</span>
					</el-col>
					<el-col :span="16">
						<el-input placeholder="请输入登录密码密码" v-model="zccode"></el-input>
					</el-col>
					</el-row>
					<div style="text-align: center;margin-top: 20px;">
						<el-button type="primary" round @click="savecode" style="margin-top: 20px;">保存</el-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				flag: 0,
				stname: '',
				stcode: '',
				glname: '',
				glcode: '',
				zcname: '',
				zcname2: '',
				zccode: '',
			}
		},
		watch:{
			flag(val){
				console.log(val)
			}
		},
		methods: {
			you() {
				this.flag = 0
			},
			she() {
				this.flag = 1
			},
			guan() {
				this.flag = 2
			},
			stzhuce() {
				this.flag = 3
			},
			savecode() {
				this.flag = 1
			},
			stSubmit() {
				var url = this.HOST + "/api/login/register?";
				this.$axios.get(url,{
					params:{            
					        username : this.stname,
					        password : this.stcode
					    }
				}).then(res=>{
					console.log(res)
					if(res.ret == 0){
						//代表成功
						this.$router.push({path:'/shetuan'})
					}else{
						alert(res.msg)
					}
				})
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	* {
		padding: 0;
		margin: 0;
	}

	.el-row {
		margin-bottom: 20px;

		&:last-child {
			margin-bottom: 0;
		}
	}

	.el-col {
		border-radius: 4px;
	}

	.hello {
		background-image: url(../assets/1.jpg.jpg);
		width: 100%;
		height: 100%;
		position: fixed;
		background-size: 100% 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.biaoti {
		border-bottom: 4px solid #409eff;
	}

	.zhuce {
		height: 280px;
		width: 390px;
		border: 1px solid white;
		background: white;
		/* opacity: 0.7; */
		border-radius: 40px;
		padding: 20px;
	}

	.top {
		width: 100%;
		height: 40px;
		display: flex;
		justify-content: space-around;
	}

	.middle {
		height: 200px;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.middle1 {
		height: 240px;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

	}

	.st {
		vertical-align: -webkit-baseline-middle;
	}
</style>
