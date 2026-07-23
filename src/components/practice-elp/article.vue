<script setup>

import {
    Delete,
    Edit
} from '@element-plus/icons-vue'

'use strict'
const tableData = [
    {
        title: '标题1',
        category: '实事',
        date: '2016-05-03',
        status: '已发布',
    },
    {
        title: '标题2',
        category: '实事',
        date: '2016-05-02',
        status: '已发布',
    },
    {
        title: '标题3',
        category: '实事',
        date: '2016-05-04',
        status: '已发布',
    },
    {
        title: '标题4',
        category: '实事',
        date: '2016-05-01',
        status: '已发布',
    },
    {
        title: '标题5',
        category: '实事',
        date: '2016-05-08',
        status: '已发布',
    }

]

import { ref } from 'vue'


const currentPage4 = ref(4)
const pageSize4 = ref(100)
const size = ref('default')
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val) => {
    console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
    console.log(`current page: ${val}`)
}
</script>

<template>
    <div class="table-example">
        <el-table :data="tableData" style="width: 100% ">
            <el-table-column prop="title" label="文章标题" />
            <el-table-column prop="category" label="分类" />
            <el-table-column prop="date" label="发布日期" />
            <el-table-column prop="status" label="状态" />
            <el-table-column label="操作" style="width: 100%">
                <div class="button-row">
                    <el-button type="primary" :icon="Edit" circle />
                    <el-button type="danger" :icon="Delete" circle />
                </div>
            </el-table-column>
        </el-table>
    </div>

    <div class="demo-pagination-block">
        <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4"
            :page-sizes="[100, 200, 300, 400]" :size="size" :disabled="disabled" :background="background"
            layout="total, sizes, prev, pager, next, jumper" :total="400" @size-change="handleSizeChange"
            @current-change="handleCurrentChange" />
    </div>

</template>

<style scoped>
.demo-pagination-block {
    display: flex;
    justify-content: flex-end;
    /* 子元素靠右 */
    margin-top: 16px;
    /* 可加上边距，和表格拉开距离 */
}
</style>