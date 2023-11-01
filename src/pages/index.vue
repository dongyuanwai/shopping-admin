<template>
    <div>后台首页
        {{ userStore.userInfo }}
    </div>
</template>
<script  setup>
import { reactive } from "vue";
import { useUserStore, useFormInfo } from "~/store/index"
import { getToken } from "~/composables/auth"
import { storeToRefs } from 'pinia'

const userStore = useUserStore()



</script>