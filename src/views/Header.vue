<template>
    <div>
        <b-navbar toggleable="lg" variant="secondary">
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav class="header_region">
                <b-navbar-nav class="ml-auto">
                    <b-button v-if="!getIsAuthen" v-b-modal.register class="btn btn-sm size_button" type="button">メンバー登録</b-button>
                    <register></register>
                    <b-nav-item v-if="!getIsAuthen"> | </b-nav-item>
                    <b-button v-if="!getIsAuthen" v-b-modal.login class="btn btn-sm size_button" type="button">ログイン</b-button>
                    <login></login>
                    <b-button v-if="getIsAuthen" type="button">Logout</b-button>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <b-navbar toggleable="lg" variant="light" class="main-header">
            <b-navbar-brand href="#" class="title" ><b>総合ジャーナル</b></b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-nav-form class="mx-auto" >
                <b-form-input placeholder="検索内容の入力。。。" style="width: 400px;" class="btn-outline-warning"></b-form-input>
                <b-button class=" btn-outline-warning size_button" type="button" style="width: 80px; height: 100%">検索</b-button>
            </b-nav-form>
            <nav class="navbar navbar-light bcgrd-light">
                <form class="form-inline">
                    <label>文字サイズ</label>
                    <button class="btn btn-sm btn-outline-light size_button" type="button">小</button>
                    <button class="btn btn-sm btn-outline-light size_button" type="button">中</button>
                    <button class="btn btn-sm btn-outline-light size_button" type="button">大</button>
                </form>
            </nav>
        </b-navbar>
        <nav class="navbar navbar-expand-lg navbar-light bcgrd-light main-header">
            <a class="navbar-brand-text" href="#"> ホーム  </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse header_region" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li v-for="(value, index) in getCategory" :key="index" class="nav-item dropdown">
                        <b-nav-item-dropdown :value="value.id" :text=" value.name">
                            <p v-for="(child, index_x) in value.children" :key="index_x">
                                <b-dropdown-item :value="child.id" :text="child.name">{{child.name}}</b-dropdown-item>
                            </p>
                        </b-nav-item-dropdown >
                    </li>
                </ul>
            </div>
        </nav>
        <nav class="navbar navbar-expand-lg navbar-light bg-light main-header">
            <div class="collapse navbar-collapse header_region" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item dropdown">
                        <b-nav-item-dropdown text="親カテゴリ 1 ">
                            <b-dropdown-item href="#">子カテゴリ３</b-dropdown-item>
                            <b-dropdown-item href="#">子カテゴリ３</b-dropdown-item>
                            <b-dropdown-item href="#">子カテゴリ３</b-dropdown-item>
                            <b-dropdown-item href="#">子カテゴリ３</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </li>
                    <li class="nav-item dropdown">
                        <b-nav-item-dropdown text=" | 親カテゴリ 1 ">
                            <b-dropdown-item href="#">子カテゴリ３</b-dropdown-item>
                            <b-dropdown-item href="#">子カテゴリ３</b-dropdown-item>
                            <b-dropdown-item href="#">子カテゴリ３</b-dropdown-item>
                            <b-dropdown-item href="#">子カテゴリ３</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                </ul>
            </div>
        </nav>
        <hr>
        {{getRelease}}
    </div> 
    
</template>
<style lang="scss">
    @import './../assets/scss/header.scss';
</style>

<script>
import { LOAD_CATE, LOAD_RELEASE } from '../store/action_type';
import Register from './../components/register'
import Login from './../components/login'
import { log } from 'util';
import { mapGetters } from 'vuex'
export default {
    components: {
        Login,
        Register
    },
    computed: 
        mapGetters(['getIsAuthen', 'getCategory', 'getRelease']),

    created(){
        this.fun()
    },
    data() {
    },
    methods: {
        fun(){
            this.$store.dispatch(LOAD_CATE, LOAD_RELEASE).then((res) => {
                console.log(res);
            }).catch((error) => {
                console.log(error);                
            })
        }
    }
    
}
</script>
