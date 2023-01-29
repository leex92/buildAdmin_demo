<template>
    <div>
        <Header />
        <el-container class="container">
            <el-main class="main">
                <div class="main-container">
                    <template :key="item.id" v-for="item in product.list">
                        <Goods :info="item" />
                    </template>
                </div>
            </el-main>
        </el-container>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import Header from '/@/layouts/frontend/components/header.vue'
import Footer from '/@/layouts/frontend/components/footer.vue'
import Goods from './components/goods/index.vue'
import { onMounted, reactive } from 'vue'
import { useProductInfo } from '/@/stores/product'
import { getProduct } from '/@/api/frontend/user'

const productInfo = useProductInfo()
const product: { list: Array<any> } = reactive({
    list: [],
})
onMounted(() => {
    getProduct().then((res) => {
        product.list = res.data
    })
    console.log('我是商品页面 ', productInfo.productList)
})
</script>

<style scoped lang="scss">
.container {
    padding: 60px;
    .main-container {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        align-items: center;
    }
}
.header {
    background-color: lightgrey !important;
    box-shadow: none !important;
    position: fixed;
    width: 100%;
    :deep(.header-logo) {
        span {
            padding-left: 4px;
            color: var(--el-color-white);
        }
    }
    :deep(.frontend-header-menu) {
        background: transparent;
        .el-menu-item,
        .el-sub-menu .el-sub-menu__title {
            color: var(--el-color-white);
            &.is-active {
                color: var(--el-color-white) !important;
            }
            &:hover {
                background-color: transparent;
                color: var(--el-menu-hover-text-color);
            }
        }
    }
    :deep(.theme-switch) {
        display: none;
    }
}
.footer {
    color: var(--el-text-color-secondary);
    background-color: transparent !important;
    position: fixed;
    bottom: 0;
}

@media screen and (max-width: 1024px) {
    .container {
        .main {
            height: unset;
        }
    }
    .main-container {
        width: 90% !important;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center !important;
        .main-right {
            padding-top: 50px;
        }
    }
}
@media screen and (max-width: 375px) {
    .main-right img {
        width: 300px !important;
    }
}
</style>
