<template>
    <b-modal ref="modal-login" id="login" title="ログイン" hide-footer size="lg" >
        <b-alert show variant="danger" v-model="login_fail">Login failed</b-alert>
        <form>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-3 col-form-label">メールアドレス</label>
                <b-form-group
                    id="fieldset-email"
                    label-for="input-1"
                    class="col-sm-7"
                    :invalid-feedback="invalidFeedbackEmail"
                    :valid-feedback="validFeedbackEmail"
                    :state="state_email"
                    >
                    <b-form-input id="input-email" v-model="form.email" type="email" :state="state_email" required autofocus trim></b-form-input>
                </b-form-group>
            </div>
            <div class="form-group row">
                <label for="inputPassword" class="col-sm-3 col-form-label">パスワード</label>
                <b-form-group
                    id="fieldset-password"
                    label-for="input-1"
                    class="col-sm-7"
                    :invalid-feedback="invalidFeedbackPassword"
                    :valid-feedback="validFeedbackPassword"
                    :state="state_password"
                    >
                    <b-form-input id="input-password" v-model="form.password" type="password" :state="state_password" required autofocus trim></b-form-input>
                </b-form-group>
            </div>
            <div class="form-group row" style="text-align: right; display: list-item;">
                <button type="button" @click="Login_x" class="btn btn-primary">ログイン</button>
                <button type="button" class="btn btn-secondary" @click.prevent="hide_popup(true)" style="margin-left: 2%; margin-right: 5%;">キャンセル</button>
            </div>
        </form>
    </b-modal>
</template>

<script>
import {LOGIN} from './../store/action_type'
export default {
    computed: {
        state_password(){
            return (this.form.password.length >= 6 && this.form.password.length <= 72) ? true : false
        },
        state_email() {
            return this.form.email.length >= 10 ? true : false
        },
        invalidFeedbackEmail() {        
            if (this.form.email.length > 10) {
                return ''
            } else if (this.form.email.length < 4) {
                return 'メールアドレスを入力してください。'
            } else if ( this.isEmailValid()
                )
                {
                    return 'メールformatを入力してください。'
                }
            else {
                return 'メールアドレスを入力してください。'
            }
        },
        validFeedbackEmail() {
            return this.state_email === true ? '' : ''
        },
        invalidFeedbackPassword() {
            if (this.form.password.length >= 10) {
                return 'パスワードは７２文字以下の有効です。'
            } else if (this.form.password.length < 6) {
                return 'パスワードを入力してください。'
            } else {
                return ''
            }
        },
        validFeedbackPassword() {
            return this.state_password === true ? '' : ''
        }
    },
    methods: {
        isEmailValid() {
            var reg = /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/
            return (this.form.email == "")? "" : (reg.test(this.form.email)) ? true : false;
        },
        Login_x(){
            this.$store.dispatch(LOGIN, this.form).then((res) => {
               this.hide_popup(true);
               
            }).catch((error) => {
                this.login_status(true)
            })
        },
        hide_popup(status){
            if(status){
                this.$bvModal.hide('login')
            }
        },
        login_status(status){
            this.login_fail =  status
        }
    },
    data() {
        return {
            form: {
                password: '',
                email: '',             
            },
            login_fail: false
        }
    }
}
</script>