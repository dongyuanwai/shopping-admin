<template>
    <div>后台首页
        <el-button round class="w-[250px]" type="primary" @click="onSubmit">登录</el-button>
    </div>
</template>
<script  setup>
import { useUserStore } from "~/store/index"
import { getToken } from "~/composables/auth"
const onSubmit = () => {
    console.log("user",getToken())
}

</script>