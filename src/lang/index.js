//i18n配置
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ElementUI from 'element-ui';
import enLocale from 'element-ui/lib/locale/lang/en'
import cnLocale from 'element-ui/lib/locale/lang/zh-CN'
import cn from './cn'
import en from './en'
import {getLocale} from '@tools/common'

Vue.use(VueI18n) ;


const messages = {
    cn:{
        ...cnLocale ,
        ...cn ,
    },
    en:{
        ...enLocale,
        ...en ,
    }
}

let locale = getLocale() ;

const i18n = new VueI18n({
    locale: locale,
    messages
})

Vue.use(ElementUI,{
    size:"medium" ,
    i18n: (key, value) => i18n.t(key, value)
});


export default i18n ;