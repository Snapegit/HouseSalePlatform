
<template>
	<div class="app-contain" :style='{"minHeight":"100vh","padding":"0 18%","margin":"20px auto 60px","color":"#666","background":"#fff","width":"100%","fontSize":"14px","position":"relative","height":"100%"}'>
		<div class="bread_view">
			<el-breadcrumb separator="/" class="breadcrumb">
				<el-breadcrumb-item class="first_breadcrumb" :to="{ path: '/' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item class="second_breadcrumb" v-for="(item,index) in breadList" :key="index">{{item.name}}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<el-form ref="formRef" :model="form" class="add_form" label-width="120px" :rules="rules">
			<el-row>
				<el-col :span="24">
					<el-form-item label="房屋名称" prop="fangwumingcheng">
						<el-input class="list_inp" v-model="form.fangwumingcheng" placeholder="房屋名称"
							 type="text" 							:readonly="!isAdd||disabledForm.fangwumingcheng?true:false" />
					</el-form-item>
				</el-col>

				<el-col :span="24">
					<el-form-item label="房屋图片" prop="fangwutupian">
						<uploads
							:disabled="!isAdd||disabledForm.fangwutupian?true:false"
							action="file/upload" 
							tip="请上传房屋图片" 
							:limit="3" 
							style="width: 100%;text-align: left;"
							:fileUrls="form.fangwutupian?form.fangwutupian:''" 
							@change="fangwutupianUploadSuccess">
						</uploads>
					</el-form-item>
				</el-col>
				<el-col :span="24">
					<el-form-item label="房屋类型" prop="fangwuleixing">
						<el-select
							class="list_sel"
							:disabled="!isAdd||disabledForm.fangwuleixing?true:false"
							v-model="form.fangwuleixing" 
							placeholder="请选择房屋类型"
							style="width:100%;"
							>
							<el-option v-for="(item,index) in fangwuleixingLists" :label="item"
								:value="item"
								>
							</el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :span="24">
					<el-form-item label="房源类型" prop="fangyuanleixing">
						<el-input class="list_inp" v-model="form.fangyuanleixing" placeholder="房源类型"
							 type="text" 							:readonly="!isAdd||disabledForm.fangyuanleixing?true:false" />
					</el-form-item>
				</el-col>

				<el-col :span="24">
					<el-form-item label="每平方价" prop="meipingfangjia">
						<el-input class="list_inp" v-model.number="form.meipingfangjia" placeholder="每平方价"
							 type="number" 							:readonly="!isAdd||disabledForm.meipingfangjia?true:false" />
					</el-form-item>
				</el-col>

				<el-col :span="24">
					<el-form-item label="房屋面积" prop="fangwumianji">
						<el-input class="list_inp" v-model.number="form.fangwumianji" placeholder="房屋面积"
							 type="number" 							:readonly="!isAdd||disabledForm.fangwumianji?true:false" />
					</el-form-item>
				</el-col>

				<el-col :span="24">
					<el-form-item label="销售价格" prop="xiaoshoujiage">
						<el-input class="list_inp" v-model="xiaoshoujiage" placeholder="销售价格" readonly></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="24">
					<el-form-item label="区域" prop="quyu">
						<el-input class="list_inp" v-model="form.quyu" placeholder="区域"
							 type="text" 							:readonly="!isAdd||disabledForm.quyu?true:false" />
					</el-form-item>
				</el-col>

				<el-col :span="24">
					<el-form-item label="房屋地址" prop="fangwudizhi">
						<el-input class="list_inp" v-model="form.fangwudizhi" placeholder="房屋地址"
							 type="text" 							:readonly="!isAdd||disabledForm.fangwudizhi?true:false" />
					</el-form-item>
				</el-col>

				<el-col :span="24">
					<el-form-item label="发布时间" prop="fabushijian">
						<el-date-picker
							class="list_date"
							v-model="form.fabushijian"
							format="YYYY-MM-DD HH:mm:ss"
							value-format="YYYY-MM-DD HH:mm:ss"
							type="datetime"
							style="width:100%;"
							:readonly="!isAdd||disabledForm.fabushijian?true:false"
							placeholder="请选择发布时间" />
					</el-form-item>
				</el-col>
				<el-col :span="24">
					<el-form-item label="卖家" prop="maijia">
						<el-input class="list_inp" v-model="form.maijia" placeholder="卖家"
							 type="text" 							:readonly="!isAdd||disabledForm.maijia?true:false" />
					</el-form-item>
				</el-col>

				<el-col :span="24">
					<el-form-item label="手机号码" prop="shoujihaoma">
						<el-input class="list_inp" v-model="form.shoujihaoma" placeholder="手机号码"
							 type="text" 							:readonly="!isAdd||disabledForm.shoujihaoma?true:false" />
					</el-form-item>
				</el-col>

				<el-col :span="24">
					<el-form-item label="房屋介绍" prop="fangwujieshao">
						<editor class="list_editor" :value="form.fangwujieshao" placeholder="请输入房屋介绍" :readonly="!isAdd||disabledForm.fangwujieshao?true:false"
							@change="(e)=>editorChange(e,'fangwujieshao')"></editor>
					</el-form-item>
				</el-col>
				<el-col :span="24">
					<el-form-item label="购买须知" prop="goumaixuzhi">
						<editor class="list_editor" :value="form.goumaixuzhi" placeholder="请输入购买须知" :readonly="!isAdd||disabledForm.goumaixuzhi?true:false"
							@change="(e)=>editorChange(e,'goumaixuzhi')"></editor>
					</el-form-item>
				</el-col>
			</el-row>
			<div class="formModel_btn_box">
				<el-button class="formModel_cancel" @click="backClick">取消</el-button>
				<el-button class="formModel_confirm" @click="save"
					type="success"
					>
					保存
				</el-button>
			</div>
		</el-form>
	</div>
</template>
<script setup>
	import {
		ref,
		getCurrentInstance,
		watch,
		onUnmounted,
		onMounted,
		nextTick,
		computed
	} from 'vue';
	import {
		useRoute,
		useRouter
	} from 'vue-router';
	const context = getCurrentInstance()?.appContext.config.globalProperties;
	const route = useRoute()
	const router = useRouter()
	//基础信息
	const tableName = 'fangyuanxinxi'
	const formName = '房源信息'
	//基础信息
	const breadList = ref([{
		name: formName
	}])
	//获取唯一标识
	const getUUID =()=> {
      return new Date().getTime();
    }
	//form表单
	const form = ref({
		fangwumingcheng: '',
		fangwutupian: '',
		fangwuleixing: '',
		fangyuanleixing: '',
		meipingfangjia: '',
		fangwumianji: '',
		xiaoshoujiage: '',
		quyu: '',
		fangwudizhi: '',
		fangwujieshao: '',
		fabushijian: '',
		storeupnum: '0',
		clicktime: '',
		clicknum: '0',
		sfsh: '待审核',
		shhf: '',
		goumaixuzhi: '',
		maijia: '',
		shoujihaoma: '',
		userid: '',
	})
	const formRef = ref(null)
	const id = ref(0)
	const type = ref('')
	const disabledForm = ref({
		fangwumingcheng : false,
		fangwutupian : false,
		fangwuleixing : false,
		fangyuanleixing : false,
		meipingfangjia : false,
		fangwumianji : false,
		xiaoshoujiage : false,
		quyu : false,
		fangwudizhi : false,
		fangwujieshao : false,
		fabushijian : false,
		storeupnum : false,
		clicktime : false,
		clicknum : false,
		sfsh : false,
		shhf : false,
		goumaixuzhi : false,
		maijia : false,
		shoujihaoma : false,
		userid : false,
	})
	const isAdd = ref(false)
	//表单验证
	//匹配整数
	const validateIntNumber = (rule, value, callback) => {
		if (!value) {
			callback();
		} else if (!context?.$toolUtil.isIntNumer(value)) {
			callback(new Error("请输入整数"));
		} else {
			callback();
		}
	}
	//匹配数字
	const validateNumber = (rule, value, callback) => {
		if(!value){
			callback();
		} else if (!context?.$toolUtil.isNumber(value)) {
			callback(new Error("请输入数字"));
		} else {
			callback();
		}
	}
	//匹配手机号码
	const validateMobile = (rule, value, callback) => {
		if(!value){
			callback();
		} else if (!context?.$toolUtil.isMobile(value)) {
			callback(new Error("请输入正确的手机号码"));
		} else {
			callback();
		}
	}
	//匹配电话号码
	const validatePhone = (rule, value, callback) => {
		if(!value){
			callback();
		} else if (!context?.$toolUtil.isPhone(value)) {
			callback(new Error("请输入正确的电话号码"));
		} else {
			callback();
		}
	}
	//匹配邮箱
	const validateEmail = (rule, value, callback) => {
		if(!value){
			callback();
		} else if (!context?.$toolUtil.isEmail(value)) {
			callback(new Error("请输入正确的邮箱地址"));
		} else {
			callback();
		}
	}
	//匹配身份证
	const validateIdCard = (rule, value, callback) => {
		if(!value){
			callback();
		} else if (!context?.$toolUtil.checkIdCard(value)) {
			callback(new Error("请输入正确的身份证号码"));
		} else {
			callback();
		}
	}
	//匹配网站地址
	const validateUrl = (rule, value, callback) => {
		if(!value){
			callback();
		} else if (!context?.$toolUtil.isURL(value)) {
			callback(new Error("请输入正确的URL地址"));
		} else {
			callback();
		}
	}
	const rules = ref({
		fangwumingcheng: [
			{required: true,message: '请输入',trigger: 'blur'}, 
		],
		fangwutupian: [
		],
		fangwuleixing: [
			{required: true,message: '请输入',trigger: 'blur'}, 
		],
		fangyuanleixing: [
		],
		meipingfangjia: [
			{ validator: validateNumber, trigger: 'blur' },
		],
		fangwumianji: [
			{ validator: validateNumber, trigger: 'blur' },
		],
		xiaoshoujiage: [
			{required: true,message: '请输入',trigger: 'blur'}, 
			{ validator: validateNumber, trigger: 'blur' },
		],
		quyu: [
		],
		fangwudizhi: [
		],
		fangwujieshao: [
		],
		fabushijian: [
		],
		storeupnum: [
			{ validator: validateIntNumber, trigger: 'blur' },
		],
		clicktime: [
		],
		clicknum: [
			{ validator: validateIntNumber, trigger: 'blur' },
		],
		sfsh: [
		],
		shhf: [
		],
		goumaixuzhi: [
		],
		maijia: [
		],
		shoujihaoma: [
		],
		userid: [
			{required: true,message: '请输入',trigger: 'blur'}, 
		],
	})
	//房屋图片上传回调
	const fangwutupianUploadSuccess=(e)=>{
		form.value.fangwutupian = e
	}
	//房屋类型列表
	const fangwuleixingLists = ref([])
	const xiaoshoujiage =computed(()=>{
		let c = form.value
		let a = c.meipingfangjia*c.fangwumianji
		form.value.xiaoshoujiage = a?a.toFixed(2):0
		return a?a.toFixed(2):0
	})
	//methods

	//methods
	//获取info
	const getInfo = ()=>{
		context?.$http({
			url: `${tableName}/info/${id.value}`,
			method: 'get'
		}).then(res => {
			let reg=new RegExp('../../../file','g')
			res.data.data.fangwujieshao = res.data.data.fangwujieshao.replace(reg,'../../../cl74265180/file');
			res.data.data.goumaixuzhi = res.data.data.goumaixuzhi.replace(reg,'../../../cl74265180/file');
			form.value = res.data.data
		})
	}
	const crossRow = ref('')
	const crossTable = ref('')
	const crossTips = ref('')
	const crossColumnName = ref('')
	const crossColumnValue = ref('')
	//初始化
	const init = (formId=null,formType='add',formNames='',row=null,table=null,statusColumnName=null,tips=null,statusColumnValue=null) => {
			form.value.fabushijian = context?.$toolUtil.getCurDateTime()
		if(formId){
			id.value = formId
			type.value = formType
		}
		if(formType == 'add'){
			isAdd.value = true
		}else if(formType == 'info'){
			isAdd.value = false
			getInfo()
		}else if(formType == 'edit'){
			isAdd.value = true
			getInfo()
		}
		else if(formType == 'cross'){
			isAdd.value = true
			// getInfo()
			for(let x in row){
				if(x=='fangwumingcheng'){
					form.value.fangwumingcheng = row[x];
					disabledForm.value.fangwumingcheng = true;
					continue;
				}
				if(x=='fangwutupian'){
					form.value.fangwutupian = row[x];
					disabledForm.value.fangwutupian = true;
					continue;
				}
				if(x=='fangwuleixing'){
					form.value.fangwuleixing = row[x];
					disabledForm.value.fangwuleixing = true;
					continue;
				}
				if(x=='fangyuanleixing'){
					form.value.fangyuanleixing = row[x];
					disabledForm.value.fangyuanleixing = true;
					continue;
				}
				if(x=='meipingfangjia'){
					form.value.meipingfangjia = row[x];
					disabledForm.value.meipingfangjia = true;
					continue;
				}
				if(x=='fangwumianji'){
					form.value.fangwumianji = row[x];
					disabledForm.value.fangwumianji = true;
					continue;
				}
				if(x=='xiaoshoujiage'){
					form.value.xiaoshoujiage = row[x];
					disabledForm.value.xiaoshoujiage = true;
					continue;
				}
				if(x=='quyu'){
					form.value.quyu = row[x];
					disabledForm.value.quyu = true;
					continue;
				}
				if(x=='fangwudizhi'){
					form.value.fangwudizhi = row[x];
					disabledForm.value.fangwudizhi = true;
					continue;
				}
				if(x=='fangwujieshao'){
					form.value.fangwujieshao = row[x];
					disabledForm.value.fangwujieshao = true;
					continue;
				}
				if(x=='fabushijian'){
					form.value.fabushijian = row[x];
					disabledForm.value.fabushijian = true;
					continue;
				}
				if(x=='storeupnum'){
					form.value.storeupnum = row[x];
					disabledForm.value.storeupnum = true;
					continue;
				}
				if(x=='clicktime'){
					form.value.clicktime = row[x];
					disabledForm.value.clicktime = true;
					continue;
				}
				if(x=='clicknum'){
					form.value.clicknum = row[x];
					disabledForm.value.clicknum = true;
					continue;
				}
				if(x=='goumaixuzhi'){
					form.value.goumaixuzhi = row[x];
					disabledForm.value.goumaixuzhi = true;
					continue;
				}
				if(x=='maijia'){
					form.value.maijia = row[x];
					disabledForm.value.maijia = true;
					continue;
				}
				if(x=='shoujihaoma'){
					form.value.shoujihaoma = row[x];
					disabledForm.value.shoujihaoma = true;
					continue;
				}
				if(x=='userid'){
					form.value.userid = row[x];
					disabledForm.value.userid = true;
					continue;
				}
			}
			if(row){
				crossRow.value = row
			}
			if(table){
				crossTable.value = table
			}
			if(tips){
				crossTips.value = tips
			}
			if(statusColumnName){
				crossColumnName.value = statusColumnName
			}
			if(statusColumnValue){
				crossColumnValue.value = statusColumnValue
			}
			form.value.storeupnum='0'
			form.value.clicknum='0'
			form.value.sfsh='待审核'
		}
		context?.$http({
			url: `${context?.$toolUtil.storageGet('frontSessionTable')}/session`,
			method: 'get'
		}).then(res => {
			var json = res.data.data
			if(json.hasOwnProperty('yonghuming') && context?.$toolUtil.storageGet("frontRole")!="管理员"){
				form.value.maijia = json.yonghuming
				disabledForm.value.maijia = true;
			}
			if(json.hasOwnProperty('shoujihaoma') && context?.$toolUtil.storageGet("frontRole")!="管理员"){
				form.value.shoujihaoma = json.shoujihaoma
				disabledForm.value.shoujihaoma = true;
			}
		})
		context?.$http({
			url: `option/fangwuleixing/fangwuleixing`,
			method: 'get'
		}).then(res=>{
			fangwuleixingLists.value = res.data.data
		})
	}
	//初始化
	//取消
	const backClick = () => {
		history.back()
	}
	//富文本数据回调
	const editorChange = (e,name) =>{
		form.value[name] = e
	}
	//提交
	const save=()=>{
		if(form.value.fangwutupian!=null) {
			form.value.fangwutupian = form.value.fangwutupian.replace(new RegExp(context?.$config.url,"g"),"");
		}
		var table = crossTable.value
		var objcross = JSON.parse(JSON.stringify(crossRow.value))
		let crossUserId = ''
		let crossRefId = ''
		let crossOptNum = ''
		if(type.value == 'cross'){
			if(crossColumnName.value!=''){
				if(!crossColumnName.value.startsWith('[')){
					for(let o in objcross){
						if(o == crossColumnName.value){
							objcross[o] = crossColumnValue.value
						}
					}
					//修改跨表数据
					changeCrossData(objcross)
				}else{
					crossUserId = context?.$toolUtil.storageGet('userid')
					crossRefId = objcross['id']
					crossOptNum = crossColumnName.value.replace(/\[/,"").replace(/\]/,"")
				}
			}
		}
		formRef.value.validate((valid)=>{
			if(valid){
				if(crossUserId&&crossRefId){
					form.value.crossuserid = crossUserId
					form.value.crossrefid = crossRefId
					let params = {
						page: 1,
						limit: 1000, 
						crossuserid:form.value.crossuserid,
						crossrefid:form.value.crossrefid,
					}
					context?.$http({
						url: `${tableName}/page`,
						method: 'get', 
						params: params 
					}).then(res=>{
						if(res.data.data.total>=crossOptNum){
							context?.$toolUtil.message(`${crossTips.value}`,'error')
							return false
						}else{
							context?.$http({
								url: `${tableName}/${!form.value.id ? "save" : "update"}`,
								method: 'post', 
								data: form.value 
							}).then(res=>{
								context?.$toolUtil.message(`操作成功`,'success',()=>{
									history.back()
								})
							})
						}
					})
				}else{
					context?.$http({
						url: `${tableName}/${!form.value.id ? "save" : "update"}`,
						method: 'post', 
						data: form.value 
					}).then(res=>{
						context?.$toolUtil.message(`操作成功`,'success',()=>{
							history.back()
						})
					})
				}
			}
		})
	}
	//修改跨表数据
	const changeCrossData=(row)=>{
		context?.$http({
			url: `${crossTable.value}/update`,
			method: 'post',
			data: row
		}).then(res=>{})
	}
	onMounted(()=>{
		type.value = route.query.type?route.query.type:'add'
		let row = null
		let table = null
		let statusColumnName = null
		let tips = null
		let statusColumnValue = null
		if(type.value == 'cross'){
			row = context?.$toolUtil.storageGet('crossObj')?JSON.parse(context?.$toolUtil.storageGet('crossObj')):{}
			table = context?.$toolUtil.storageGet('crossTable')
			statusColumnName = context?.$toolUtil.storageGet('crossStatusColumnName')
			tips = context?.$toolUtil.storageGet('crossTips')
			statusColumnValue = context?.$toolUtil.storageGet('crossStatusColumnValue')
		}
		init(route.query.id?route.query.id:null, type.value,'', row, table, statusColumnName, tips, statusColumnValue)
	})
	
</script>
<style lang="scss" scoped>
	// 面包屑盒子
	.bread_view {
		border: 1px solid #ddd;
		border-radius: 0px;
		padding: 12px 20px;
		margin: 10px auto 10px;
		background: #f9f9f9;
		width: 100%;
		position: relative;
		:deep(.breadcrumb) {
			font-size: 14px;
			line-height: 1;
			.el-breadcrumb__separator {
				margin: 0 9px;
				color: #ccc;
				font-weight: 500;
			}
			.first_breadcrumb {
				.el-breadcrumb__inner {
					color: #333;
					display: inline-block;
				}
			}
			.second_breadcrumb {
				.el-breadcrumb__inner {
					color: #999;
					display: inline-block;
				}
			}
		}
	}
	// 表单
	.add_form{
		border: 1px solid #0058ab20;
		border-radius: 0px;
		padding: 30px 7%;
		background: #0058ab02;
		// form item
		:deep(.el-form-item) {
			border: 0px solid #eee;
			padding: 0 0 20px;
			margin: 0 0 20px 0;
			background: none;
			display: flex;
			border-color: #0058ab20;
			border-width: 0 0 1px;
			border-style: dashed;
			//label
			.el-form-item__label {
			 color: inherit;
			 background: none;
			 font-weight: 500;
			 display: block;
			 width: auto;
			 font-size: inherit;
			 text-align: right;
			 min-width: 150px;
			}
			// 内容盒子
			.el-form-item__content {
				display: flex;
				width: calc(100% - 150px);
				justify-content: flex-start;
				align-items: center;
				flex-wrap: wrap;
				// 输入框
				.list_inp {
					border: 1px solid #0058ab30;
					padding: 0 10px;
					width: auto;
					line-height: 36px;
					box-sizing: border-box;
					min-width: 350px;
					height: 36px;
					//去掉默认样式
					.el-input__wrapper{
						border: none;
						box-shadow: none;
						background: none;
						border-radius: 0;
						height: 100%;
						padding: 0;
					}
					.is-focus {
						box-shadow: none !important;
					}
				}
				//日期选择器
				.list_date {
					border: 1px solid #0058ab30;
					border-radius: 0;
					background: #fff;
					width: auto;
					line-height: 36px;
					box-sizing: border-box;
					min-width: 300px;
					//去掉默认样式
					.el-input__wrapper{
						border: none;
						box-shadow: none;
						background: none;
						border-radius: 0;
						height: 100%;
					}
				}
				// 下拉框
				.list_sel {
					border: 1px solid #0058ab30;
					border-radius: 0;
					padding: 0 10px;
					background: #fff;
					width: auto;
					line-height: 36px;
					box-sizing: border-box;
					min-width: 300px;
					//去掉默认样式
					.select-trigger{
						height: 100%;
						.el-input{
							height: 100%;
							.el-input__wrapper{
								border: none;
								box-shadow: none;
								background: none;
								border-radius: 0;
								height: 100%;
								padding: 0;
							}
							.is-focus {
								box-shadow: none !important;
							}
						}
					}
				}
				// 富文本
				.list_editor {
					background-color: #fff;
					border-radius: 0;
					padding: 0;
					margin: 0 0 20px;
					width: 99%;
					border-color: #eee;
					border-width: 0;
					border-style: solid;
					height: auto;
				}
				//图片上传样式
				.el-upload-list  {
					//提示语
					.el-upload__tip {
						margin: 7px 0 0;
						color: #999;
						display: flex;
						font-size: 14px;
						justify-content: flex-start;
						align-items: center;
					}
					//外部盒子
					.el-upload--picture-card {
						border: 1px solid #0058ab30;
						cursor: pointer;
						border-radius: 0px;
						background: #fff;
						width: 120px;
						line-height: 90px;
						text-align: center;
						height: 80px;
						//图标
						.el-icon{
							color: #0058ab50;
							font-size: 32px;
						}
					}
					.el-upload-list__item {
						border: 1px solid #0058ab30;
						cursor: pointer;
						border-radius: 0px;
						background: #fff;
						width: 120px;
						line-height: 90px;
						text-align: center;
						height: 80px;
					}
				}
			}
		}
	}
	// 按钮盒子
	.formModel_btn_box {
		padding: 0 150px;
		margin: 0 0 20px;
		display: flex;
		width: 100%;
		align-items: center;
		.formModel_cancel {
			border: 0;
			cursor: pointer;
			border-radius: 0px;
			padding: 0 24px;
			margin: 0 20px 0 0;
			outline: none;
			color: #333;
			background: #0058ab10;
			width: auto;
			font-size: 14px;
			height: 36px;
		}
		.formModel_cancel:hover {
		}
		
		.formModel_confirm {
			border: 0;
			cursor: pointer;
			border-radius: 0px;
			padding: 0 24px;
			margin: 0 20px 0 0;
			outline: none;
			color: #333;
			background: #0058ab30;
			width: auto;
			font-size: 14px;
			height: 36px;
		}
		.formModel_confirm:hover {
		}
	}
</style>