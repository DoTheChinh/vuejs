<template>
    <div>
        <b-button v-on:click="setCount" name="Do The Chinh" variant="success">Click me</b-button>
        <span>count: {{count}}</span>
        <p>My name: {{name}}</p>
        <b-button  v-on:click="callApi" v-if="is_show" variant="danger">Call api</b-button>
        <b-button  variant="success">Show button call api</b-button>
        <div v-if="posts === ''" 
            v-bind:style="{

            }">
        Data not found</div>
        <div v-else>
            <ul>
                <li v-for="(item, index) in posts" :key="index">
                    {{item.title}}
                </li>
            </ul>
        </div>

        <input v-model="age">
        <p>{{age}}</p>
        <span v-if="messages.age != ''">{{messages.age}}</span>
    </div>
</template>
<script>
import axios from 'axios'

import {ACTION_LIST_POST} from './../store/action_type'
import {ACTION_COUNT} from './../store/action_type'


// import Vue from 'vue'
import lodash from 'lodash'
import { log } from 'util';
// import { COUNT } from '../store/mutation_type';
// import func from '../../vue-temp/vue-editor-bridge';
export default {
    name: "Head",
    props: {
        name: {
            type: String,
            required: false,
            default: "Chinh"
        }
    },
    data(){
        return {
            list: '',
            age: 0,
            messages: {
                age: ''
            },
            posts: []
        }
    },
    watch: {
        age: function () {
            this.debouncedCheckAge()
        }
    },
    computed: {
        is_show(){
            return this.$store.getters.getChecked
        },
        count(){
            return 0
        }
    },
    created: function () {
        this.debouncedCheckAge = lodash.debounce(this.checkAge, 500) 
    },
    methods: {
        setCount(){
             console.log(this.$store.dispatch(ACTION_COUNT))
            this.$store.dispatch(ACTION_COUNT).then(res => {
                console.log('aaa');
                
                console.log(this.$store.getters.getCount);
                
                this.count = this.$store.getters.getCount
            }).catch(err=>{
                console.log('asd');
                
            })

        },
        callApi(){
            localStorage.setItem('token', '111111111111111111111111111111111111111111111111111')
            this.$store.dispatch(ACTION_LIST_POST).then((rep) => {
                console.log(this.$store.getters.getPost);
                
                this.posts = this.$store.getters.getPost
            })
        },
        // showButton(){

        // },
        checkAge(){
            let api = 'https://jsonplaceholder.typicode.com/posts'
            axios.get(api).then(() => {
                let age_x = 19
                this.messages.age = (age_x == this.age) ? 'age error' : ''
            })
        }
    }    
}
</script>
