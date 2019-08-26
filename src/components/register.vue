<template>
    <b-modal id="register" title="新規メンバー登録" hide-footer size="lg">
        <b-alert show variant="danger" v-model="register_fail">Register failed</b-alert>
        <form>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-3 col-form-label">メールアドレス</label>
                <b-form-group
                    id="fieldset-email"
                    label-for="input-1"
                    :invalid-feedback="invalidFeedbackEmail"
                    :valid-feedback="validFeedbackEmail"
                    :state="state_email"
                    class="col-sm-7"
                    >
                    <b-form-input id="input-email" v-model="form.email" :state="state_email" trim></b-form-input>
                </b-form-group>
            </div>
            <div class="form-group row">
                <label for="inputPassword" class="col-sm-3 col-form-label">パスワード</label>
                <b-form-group
                    id="fieldset-password"
                    label-for="input-1"
                    :invalid-feedback="invalidFeedbackPassword"
                    :valid-feedback="validFeedbackPassword"
                    :state="state_password"
                    class="col-sm-7"
                    >
                    <b-form-input id="input-password" v-model="form.password" :state="state_password" type="password" trim></b-form-input>
                </b-form-group>
            </div>
            <div class="form-group row date isEmailValid()">
                <label for="inputBirthday" class="col-sm-3 col-form-label">生年月日</label>
                 <b-form-group
                    id="fieldset-birthday"
                    label-for="input-1"
                    :invalid-feedback="invalidFeedbackBirthday"
                    :valid-feedback="validFeedbackBirthday"
                    :state="state_birthday"
                    class="col-sm-7"
                    >
                    <datepicker :bootstrap-styling="true" :format="customFormatter" :state="state_birthday" id="input-birthday" v-model="form.birthday"></datepicker>
                </b-form-group>
            </div>
            <div class="form-group row">
                <label for="inputBirthday" class="col-sm-3 col-form-label">性別</label>
                <div class="col-sm-7">
                    <div class="form-check form-check-inline">
                        <label class="form-check-label" for="inlineRadio1">男 </label>
                        <input class="form-check-input radio" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked>
                    </div>
                    <div class="form-check form-check-inline">
                        <label class="form-check-label" for="inlineRadio1">女 </label>
                        <input class="form-check-input radio" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                    </div>
                </div>
            </div>
            <div class="form-group row" style="text-align: right; display: list-item;">
                <button type="button" class="btn btn-primary" @click="Register">登録</button>
                <button type="button" class="btn btn-secondary" style="margin-left: 2%; margin-right: 5%;" @click.prevent="$bvModal.hide('register')">キャンセル</button>
            </div>
        </form>
    </b-modal>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import moment from 'moment'
import {REGISTER} from './../store/action_type'
import { LOAD_PARENT_CATE } from '../store/mutation_type';
export default {
    components: {
        Datepicker,
    },
    computed: {
        state_password(){
            return (this.form.password.length >= 6 && this.form.password.length <= 72) ? true : false
        },
        state_birthday() {
            return this.form.birthday.length >= 6 ? true : false
        },
        state_email() {
            return this.form.email.length >= 10 ? true : false
        },
        invalidFeedbackEmail() {
            // console.log(isEmailValid);
            
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
        invalidFeedbackBirthday() {
            if (this.form.birthday.length > 9) {
                return 'qua lon '
            } else if (this.form.birthday.length < 4) {
                return '生年月日を入力してください。'
            } else {
                return ''
            }
        },
        validFeedbackBirthday() {
            return this.state_birthday === true ? '' : ''
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
        customFormatter(date) {
            return moment(date).format('YYYY年MM月DD日');
        },
        isEmailValid() {
            var reg = /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/
            return (this.email == "")? "" : (reg.test(this.email)) ? true : false;
        },
        Register(){  
            this.$store.dispatch(REGISTER, this.form).then((res) => {
               this.hide_popup(true);
            }).catch((error) => {
            //    this.hide_popup(true);
                this.register_status(true);
            })
        },
        hide_popup(status){
            if(status){
                this.$bvModal.hide('register');
            }
        },
        register_status(status){
            this.register_fail =  status
        },
        
    },
    data() {
        return {
            form: {
                birthday: '',
                password: '',
                email: '',
                sex: ''
            },
        register_fail: false,
        }
    },
}
</script>