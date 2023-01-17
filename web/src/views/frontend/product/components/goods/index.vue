<template>
    <div class="product-container">
        <img :src="GoodsImg" alt="" class="product-img" />
        <div class="product-detail">
            <p class="price">￥{{ info.price }}</p>
            <p class="describe">{{ info.describe }}</p>
            <div class="operation">
                <el-button type="danger"> 加入购物车 </el-button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from '@vue/runtime-core'
import { number } from 'echarts'
import GoodsImg from '/@/assets/product/product.jpg'
interface ProductProps {
    info: {
        url: string
        price: number
        describe: string
        count: number
    }
}
const props = defineProps<ProductProps>()
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
    .operation {
        margin-top: 10px;
        text-align: right;
    }
}
</style>
