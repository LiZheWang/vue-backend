import axios from 'axios'
import dialog from '@tools/dialog'
import qs from 'qs'
import {getI18n} from "@tools/common";

//设置post不然拿不到参数
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

const Ajax = axios.create({
  	//baseURL: "http://192.168.1.103", 
  	timeout: 5000 ,
  	responseType:'json',
  	params : {
  		_t : new Date().getTime()
  	},
	//上传进度回调
  	onUploadProgress:function(progressEvent){
  		
  	},
	//下载进度回调
  	onDownloadProgress:function(progressEvent){
  		
  	},
  	
});
//设置header
Ajax.defaults.headers.common["wlz_ajax"] = "true";  

//添加一个请求拦截器  
Ajax.interceptors.request.use(config => {
	dialog.loading("show") ;
	if(config.method  === 'post'){
    	config.data = qs.stringify(config.data);
  	}
  	return config;  
},err => { 
	dialog.loading("hide") ;
	dialog.systemMessage(getI18n("service.500Error") + '(request)') ;
  	return Promise.reject(err);  
}); 

//添加一个响应拦截器  
Ajax.interceptors.response.use(res => {
	
	
	dialog.loading("hide") ;
  	return res;  
},err => {  
	console.log('失败了') ;
	dialog.loading("hide") ;
    dialog.systemMessage(getI18n("service.500Error") + '(response)') ;
  	return Promise.reject(err);
}) ; 




export default Ajax ;