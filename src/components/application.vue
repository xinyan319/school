<template>
	<div class="body">
		<div class="tbody">
			
			<!-- 个人信息 -->
			<div class="info" v-if="active==1">
				<el-form ref="form" :model="form" label-width="80px">
					<el-form-item label="活动名称">
						<el-input v-model="form.name"  placeholder="请输入活动名称"></el-input>
					</el-form-item>
					<el-form-item label="联系方式">
						<el-input v-model="form.name" placeholder="请输入负责人联系方式"></el-input>
					</el-form-item>
					<el-form-item label="活动性质">
						<el-select v-model="form.region" placeholder="请选择活动区域">
							<el-option label="娱乐" value="shanghai"></el-option>
							<el-option label="学习" value="beijing"></el-option>
						</el-select>
					</el-form-item>
					 <el-form-item label="活动简介" >
					    <el-input type="textarea" v-model="form.desc" placeholder="请输入活动简介"></el-input>
					  </el-form-item>
				</el-form>
			</div>
			<div class="info" v-if="active==2">
				<el-form ref="form" :model="form" label-width="80px">
					<el-form-item label="活动时间">
						<el-select v-model="form.region" placeholder="请选择活动时间">
							<el-option label="8:00-12:00" value="shanghai"></el-option>
							<el-option label="14:00-17:00" value="beijing"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="活动地点">
						<el-select v-model="form.region" placeholder="请选择活动地点">
							<el-option label="北山" value="shanghai"></el-option>
							<el-option label="南山" value="beijing"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="摆点人数">
						<el-select v-model="form.region" placeholder="请选择摆点人数">
							<el-option label="1" value="shanghai"></el-option>
							<el-option label="2" value="beijing"></el-option>
						</el-select>
					</el-form-item>
				</el-form>
			</div>
			<div class="info" v-if="active==3">
				<el-form ref="form" :model="form" label-width="80px">
					<el-form-item label="所需物资">
						<el-input v-model="form.name"  placeholder="请输入所需物资"></el-input>
					</el-form-item>
					<el-form-item label="备注">
						<el-input v-model="form.name"  placeholder="如有备注请填写"></el-input>
					</el-form-item>
				</el-form>
				<!-- <div style="margin-bottom: 20px;">可选择图片宣传：</div> -->
				<!-- <el-upload
				  class="upload-demo"
				  drag
				  action="https://jsonplaceholder.typicode.com/posts/"
				  multiple>
				  <i class="el-icon-upload"></i>
				  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
				  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
				</el-upload> -->
			</div>
			<el-steps :active="active" finish-status="success">
				<el-step title="个人信息"></el-step>
				<el-step title="时间地点"></el-step>
				<el-step title="宣传图片"></el-step>
			</el-steps>
			<el-button style="margin-top: 12px;" @click="next">下一步</el-button>
			<el-button style="margin-top: 12px;" @click="pre" v-if="active>1">上一步</el-button>
		</div>
	</div>
</template>
<style>
	.body{
		display: flex;
		    justify-content: center;
		}
	.tbody {
		width: 50%;
		margin-top: 50px;
	}
</style>
<script>
	export default {

		data() {
			return {
				active: 1,
				 form: {
				          name: '',
				          region: '',
				          date1: '',
				          date2: '',
				          delivery: false,
				          type: [],
				          resource: '',
				          desc: ''
				        }
			};
		},

		methods: {
			next() {
				if (this.active++ > 3) this.active = 1;
			},
			pre() {
				if (this.active-- < 2) this.active = 1;
			}
		}
	}
</script>
