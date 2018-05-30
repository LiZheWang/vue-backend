import Vue from "vue" ;
import { Message , Loading , Notification ,MessageBox  } from 'element-ui'
import {getI18n} from "@tools/common";

var loadingService = null ;
function loading(type,text){
	if( type == "show" ){
		loadingService = Loading.service({
			lock : true ,
			text : text || getI18n("dialog.loading")
		});
	}
	if( type == "hide" || type == "close" ){
		if(loadingService){
			loadingService.close();
			loadingService = null ;
		}
	}
}
//type success/warning/info/error
function alertBox(text,type){
	Message({
		showClose : true ,
		message : text ,
		type : type || 'success'
	});
}

//右上角的提示框  一般用于比较重要的提示
function systemMessage(text,title,type){
	Notification({
		title : title || getI18n("dialog.title") ,
		message : text ,
		type : type || 'error'
	});
}

function alert(message,cb,title,btnText){
	MessageBox.alert(message||'' ,title||getI18n("dialog.title"),{
		confirmButtonText : btnText || getI18n("dialog.successText") ,
		callback: action => {
			if( typeof cb == "function" ) cb(action);
		}
	});
}

function comRemove({title,message,successText=getI18n("dialog.successText"),cancelText=getI18n("dialog.cancelText"),success=null,cancel=null,type="warning"}){
	MessageBox.confirm(message||getI18n("dialog.comRemove"),title||getI18n("dialog.title"),{
		confirmButtonText: successText ,
        cancelButtonText: cancelText ,
        type : type 
	}).then(() => {
		success && success();
	}).catch(() => {
		cancel && cancel();
	});
}


if(!Vue.prototype.loading) Vue.prototype.loading = loading ;
if(!Vue.prototype.alertBox) Vue.prototype.alertBox = alertBox ;
if(!Vue.prototype.systemMessage) Vue.prototype.systemMessage = systemMessage ;
if(!Vue.prototype.alert) Vue.prototype.alert = alert ;
if(!Vue.prototype.comRemove) Vue.prototype.comRemove = comRemove ;
export default {
	loading ,
	alertBox ,
	systemMessage ,
	alert ,
	comRemove
}


