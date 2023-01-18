import { defineStore } from 'pinia'
import { ProductInfo } from './interface'
export const useProductInfo = defineStore('productInfo', {
    state: (): ProductInfo => {
        return {
            productList: [
                {
                    id: 1,
                    imgUrl: 'https://img.alicdn.com/bao/uploaded/i2/3327042818/O1CN01SIfcv01WggtwWBYoY_!!3327042818.jpg_80x80.jpg',
                    price: 333,
                    describe: 'JINIWU吾倪季2022铆钉乐福鞋 增高时尚厚底轻底 韩版牛皮套脚男鞋',
                    count: 9999,
                },
                {
                    id: 2,
                    imgUrl: 'https://img.alicdn.com/bao/uploaded/i2/3327042818/O1CN01SIfcv01WggtwWBYoY_!!3327042818.jpg_80x80.jpg',
                    price: 222,
                    describe: '我是第二个商品',
                    count: 9999,
                },
                {
                    id: 3,
                    imgUrl: 'https://img.alicdn.com/bao/uploaded/i2/3327042818/O1CN01SIfcv01WggtwWBYoY_!!3327042818.jpg_80x80.jpg',
                    price: 300,
                    describe: '我是第三个商品',
                    count: 9999,
                },
                {
                    id: 4,
                    imgUrl: 'https://img.alicdn.com/bao/uploaded/i2/3327042818/O1CN01SIfcv01WggtwWBYoY_!!3327042818.jpg_80x80.jpg',
                    price: 300,
                    describe: '我是第四个商品',
                    count: 9999,
                },
            ],
        }
    },
})
