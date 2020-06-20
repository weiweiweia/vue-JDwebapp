import fetch from './fetch'  // fetch实际上一个axios实例（promise对象）


//注册接口
export function rigiste(data){
    return fetch({
        data,
        method:'POST',
        url: '/user/regist'
    })
}

//登录接口
export function login(data){
    return fetch({
        data,
        url:'/user/login',
        method:'POST'
    })
}

//获取首页商品列表接口
export function getHomeList(params){
    return fetch({
        params,
        url:'/jd/getHotGoodList',
        method:'GET'
    })
}

//获取商品详情页数据
export function getDetail(params){
    return fetch({
        params,
        url:'/jd/getGoodDetail',
        method:'GET'
    })
}

//添加到购物车
export function addToCart(data){
    return fetch({
        data,
        method:'POST',
        url:'/jd/addToCart'
    })
}

//获取购物车数据
export function getCart(params){
    return fetch({
        params,
        method:'GET',
        url:'/jd/getCartList'
    })
}

export default {
    rigiste,
    login,
    getHomeList,
    getDetail,
    addToCart,
    getCart
}