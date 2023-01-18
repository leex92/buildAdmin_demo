import { defineStore } from 'pinia'
import { CartInfo } from './interface'
export const useCartInfo = defineStore('cartInfo', {
    state: (): CartInfo => {
        return {
            cartList: [],
        }
    },
})
