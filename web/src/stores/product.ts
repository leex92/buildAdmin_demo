import { defineStore } from 'pinia'
import { ProductInfo } from './interface'
export const useProductInfo = defineStore('productInfo', {
    state: (): ProductInfo => {
        return {
            productList: [
                {
                    id: 1,
                    imgUrl: '',
                    price: 333,
                    describe: 'JINIWU吾倪季2022铆钉乐福鞋 增高时尚厚底轻底 韩版牛皮套脚男鞋',
                    count: 9999,
                },
                {
                    id: 2,
                    imgUrl: '',
                    price: 222,
                    describe: '我是第二个商品',
                    count: 9999,
                },
                {
                    id: 3,
                    imgUrl: '',
                    price: 300,
                    describe: '我是第三个商品',
                    count: 9999,
                },
                {
                    id: 4,
                    imgUrl: '',
                    price: 300,
                    describe: '我是第四个商品',
                    count: 9999,
                },
            ],
        }
    },
})
