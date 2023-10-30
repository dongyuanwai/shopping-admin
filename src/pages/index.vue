<template>
    <div>后台首页
        {{ store.user }}
    </div>
</template>
<script  setup>
import { reactive } from "vue";
import { useUserStore } from "~/store/index"
import { getToken } from "~/composables/auth"

const store = useUserStore()

</script>