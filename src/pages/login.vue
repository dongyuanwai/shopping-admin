<template>
    <el-row class="login-container">
        <el-col :lg="16" :md="12" class="left">
            <div>
                <div class="tip">
                    欢迎光临
                </div>
                <div class="text-gray-400">此网页是Dong Yuanwai的后台管理网站</div>
            </div>
        </el-col>
        <el-col :lg="8" :md="12" class="right">
            <h2 class=" font-bold text-3xl text-gray-800">欢迎回来</h2>
            <div class="right-tip">
                <span class="line"></span>
                <span>账号密码登录</span>
                <span class="line"></span>
            </div>
            <el-form :model="form" >
                <el-form-item >
                    <el-input v-model="form.username" placeholder="请输入用户名" >
                        <template #prefix>
                            <el-icon><User /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item >
                    <el-input v-model="form.password" placeholder="请输入密码">
                        <template #prefix>
                            <el-icon><Lock /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                
                <el-form-item>
                    <el-button round class="w-[250px]" type="primary" @click="onSubmit">登录</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>

<script setup>
import { reactive } from 'vue'
import { User,Lock  } from '@element-plus/icons-vue'
// do not use same name with ref
const form = reactive({
    username:'',
    password:''
})

const onSubmit = () => {
    console.log('submit!')
}
</script>

<style>
.login-container{
    @apply min-h-screen bg-indigo-500;
}
.left{
    @apply flex items-center justify-center;
}
.left .tip{
    @apply text-light-50 text-5xl mb-4 font-bold;
}
.right{
    @apply bg-light-50 flex items-center justify-center flex-col;
}
.right .right-tip{
    @apply flex items-center justify-center my-5 text-gray-500 space-x-2;
}
.line{
    @apply h-[1px] w-16 bg-gray-200;
}
</style>