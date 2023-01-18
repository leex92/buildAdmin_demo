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

#### 3.改项目使用pinia进行全局状态管理，需在stores下面创建cart.ts , product.ts两个文件，并定义原始数据类型，具体使用方法参考pinia官方
https://pinia.vuejs.org/zh/introduction.html

#### 4.开发使用vue3.0以及element-plus UI框架 参考文档
https://element-plus.gitee.io/zh-CN/component/button.html

https://vue3js.cn/