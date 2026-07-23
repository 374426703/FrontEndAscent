<script setup>

import {
    Delete,
    Edit
} from '@element-plus/icons-vue'

'use strict'
const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom'
    },
    {
        date: '2016-05-02',
        name: 'Jerry'
    },
    {
        date: '2016-05-04',
        name: 'Mike'
    },
    {
        date: '2016-05-01',
        name: 'Kate'
    }
]
</script>

<template>
    <div class="table-example">
        <el-table :data="tableData" style="width: 100%; max-width: 600px">
            <el-table-column prop="date" label="日期" width="200" />
            <el-table-column prop="name" label="姓名" width="200" />
            <el-table-column label="操作" width="200" align="center">
                <div class="button-row">
                    <el-button type="primary" :icon="Edit" circle />
                    <el-button type="danger" :icon="Delete" circle />
                </div>
            </el-table-column>
        </el-table>
    </div>

</template>

<style scoped>
.table-example {
    display: flex;
    justify-content: center;
}
.button-row {
    display: flex;
    gap: 10px;       /* 按钮间隔 */
    justify-content: center;
}
</style>