import Cookie from 'js-cookie' ;
//expires 单位:天

function get(key){
    return Cookie.getJSON(key) ;
}

function set(key,val,expires){
    if(expires){
        Cookie.set(key,val,{expires:expires});
    }else{
        Cookie.set(key,val);
    }
}

function del(key){
    Cookie.remove(key) ;
}

function clearAll(){
    Cookie.remove() ;
}

export default {
    get ,
    set ,
    del ,
    remove : del ,
    clearAll
}
