<template>
    <div>
        this is page contact
        <b-button variant="success" v-on:click="change">Change checked</b-button>
        {{showChecked}}
        <footer-hoder></footer-hoder>
    </div>
</template>

<script>
import FooterHoder from './../components/Fooer'
import {CHANGE_X} from './../store/mutation_type'
export default {
    name: 'Contact',
    components: {FooterHoder},
    computed: {
        showChecked(){
            return this.$store.getters.getChecked
        }
    },
    methods: {
        change(){
            this.$store.commit(CHANGE_X, !this.$store.getters.getChecked)
        }
    }
}
</script>