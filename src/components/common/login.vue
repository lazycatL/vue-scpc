<template>
    <div class="login">

    <Form ref="formInline" :model="formInline" :rules="ruleInline" :label-width="80">
         <h1>生产管理系统-登录</h1>
        <Form-item prop="user" >
            <Input type="text" v-model="formInline.user" placeholder="用户名">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </Form-item>
        <Form-item prop="password">
            <Input type="password" v-model="formInline.password" placeholder="密码">
                <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
        </Form-item>
         <Form-item>
            <Button type="primary" @click="handleSubmit('formCustom')" long>登录</Button>
        </Form-item>
    </Form>
    </div>
</template>
<style scoped>
    h1{
        margin-left:60px;
    }
    .login{
        width:350px;
        text-align: center;
        margin:0 auto;
    }
</style>
<script>
    export default {
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            }
        }
    }
</script>
