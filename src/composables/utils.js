import { ElNotification } from 'element-plus'
// 封装一个 toast
export const toast = (type="success",message)=>{
    ElNotification({
        type,
        message,
        duration: 2000,
    })
}