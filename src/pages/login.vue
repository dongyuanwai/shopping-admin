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
            <el-form ref="formRef" :model="form" :rules="rules" class="w-[250px]">
                <el-form-item prop="username">
                    <el-input v-model="form.username" placeholder="请输入用户名" >
                        <template #prefix>
                            <el-icon><User /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="form.password" type="password" placeholder="请输入密码" show-password>
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
import { ref,reactive } from 'vue'
import { User,Lock  } from '@element-plus/icons-vue'
import {login} from '~/api/manager.js'

const form = reactive({
    username:'',
    password:''
})
const rules = reactive({
  username: [
    { required: true, message: '用户名不能为空', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { min: 3, max: 16, message: '密码长度在3~16之间', trigger: 'blur' },
  ],
})

const formRef = ref(null)
const onSubmit = () => {
    formRef.value.validate((valid)=>{
        if(!valid){
            return false
        }
        console.log("验证通过了",valid)

        // 调用登录接口
        login(form.username,form.password).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log("失败了",err.response.data);
        })
    })
    
}
</script>

<style scoped>
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