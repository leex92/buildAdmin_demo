<template>
    <div class="product-container">
        <img :src="info.imgUrl" alt="" class="product-img" />
        <div class="product-detail">
            <p class="price">￥{{ info.price }}</p>
            <p class="describe">{{ info.describe }}</p>
            <p class="count">剩余数量：{{ info.count }}</p>
            <div class="operation">
                <el-button type="danger" :disabled="info.count === 0" @click="handleJoin">
                    {{ info.count === 0 ? '补货中' : '加入购物车' }}
                </el-button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from '@vue/runtime-core'
import GoodsImg from '/@/assets/product/product.jpg'
import { useCartInfo } from '/@/stores/cart'
import { useProductInfo } from '/@/stores/product'

interface ProductProps {
    info: {
        id: number
        imgUrl: string
        price: number
        describe: string
        count: number
    }
}
const props = defineProps<ProductProps>()
const cartInfo = useCartInfo()
const productInfo = useProductInfo()
const handleJoin = () => {
    console.log('123123123123')
    const index = cartInfo.cartList.findIndex((item) => item.id === props.info.id)
    if (index >= 0) {
        cartInfo.cartList[index].count++
    } else {
        cartInfo.cartList.push({ ...props.info, count: 1, imgUrl: props.info.imgUrl })
    }
    const productIndex = productInfo.productList.findIndex((item) => item.id === props.info.id)
    productInfo.productList[productIndex].count--
}
onMounted(() => {
    console.log(props)
})
</script>

<style lang="scss" scoped>
.product-container {
    margin-right: 20px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 250px;
    height: max-content;
    padding-bottom: 10px;
    border: 1px solid lightgrey;
    .price {
        color: red;
        font-size: 20px;
    }
    .product-detail {
        width: 100%;
        padding: 10px;
    }
    .product-img {
        width: 250px;
        height: 250px;
        display: block;
    }
    .describe {
        margin-top: 10px;
        width: 100%;
    }
    .count {
        margin-top: 10px;
        color: lightgrey;
    }
    .operation {
        margin-top: 10px;
        text-align: right;
    }
}
</style>
