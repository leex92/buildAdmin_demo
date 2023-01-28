buildAdmin frontend 开发购物车 demo 功能

#### 1.在 router static.ts 文件中创建对应 router 如下

```javascript
{
    // 购物中心
        path: '/product',
        name: 'product',
        component: () => import('/@/views/frontend/product/index.vue'),
        meta: {
        title: pageTitle('product'),
    },
    },
    {
    // 购物车
        path: '/cart',
        name: 'cart',
        component: () => import('/@/views/frontend/cart/index.vue'),
        meta: {
        title: pageTitle('cart'),
    },
}
```

#### 2.对应 frontend 下创建对应目录及文件 frontend/product/index.vue，rontend/cart/index.vue

#### 3.改项目使用 pinia 进行全局状态管理，需在 stores 下面创建 cart.ts , product.ts 两个文件，并定义原始数据类型，具体使用方法参考 pinia 官方

https://pinia.vuejs.org/zh/introduction.html

#### 4.开发使用 vue3.0 以及 element-plus UI 框架 参考文档

https://element-plus.gitee.io/zh-CN/component/button.html

https://vue3js.cn/

登录鉴权

```javascript
const userInfo = useUserInfo()

onMounted(() => {
    if (!userInfo.token)
        return router.push({
            path: '/user/login',
            query: {
                redirect: '/cart',
            },
        })
})
cart文件夹下搜索以上代码
```
