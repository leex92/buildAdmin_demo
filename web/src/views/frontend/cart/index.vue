<template>
    <div>
        <Header />
        <el-container class="container">
            <el-table ref="multipleTableRef" :data="cartInfo.cartList" style="width: 100%" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55" />
                <el-table-column label="商品信息">
                    <template #default="{ row }">
                        <div style="display: flex; justify-content: flex-start; align-items: left;flex-direction: column;">
                            <img :src="row.imgUrl" alt="" width="100"/>
                            <p>{{ row.describe }}</p>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="单价">
                    <template #default="{ row }">
                        <span>￥ {{ row.price }}</span>
                    </template>
                </el-table-column>
                <el-table-column property="count" label="数量" show-overflow-tooltip />
                <el-table-column  label="金额" show-overflow-tooltip>
                    <template #default="{ row }">
                        <span>￥{{ row.count * row.price }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作" show-overflow-tooltip>
                    <template #default="{ index }">
                        <el-button type="danger" @click="handleDel(index)"> 删除 </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-container>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import Header from '/@/layouts/frontend/components/header.vue'
import Footer from '/@/layouts/frontend/components/footer.vue'

import { onMounted, reactive } from 'vue'

import { ref } from 'vue'
import { ElTable } from 'element-plus'
import { useCartInfo } from '/@/stores/cart'

interface User {
    date: string
    name: string
    address: string
}
const cartInfo = useCartInfo()
const multipleTableRef = ref<InstanceType<typeof ElTable>>()
onMounted(() => {
    console.log('我是购物车页面')
})
const handleDel = (index: number) => {}
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
