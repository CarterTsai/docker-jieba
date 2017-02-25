<script>
    import {
        actions
    } from '../store';

    export default {
        vuex: {
            actions: actions,
            getters: {
                user: ({
                    user
                }) => user,
                filterKey: ({
                    filterKey
                }) => filterKey
            }
        },
        methods: {
            onKeyup(e) {
                this.search(e.target.value);
            }
        }
    };
</script>

<template>
<div class="card">
    <header>
        <img class="avatar" width="40" height="40" :alt="user.name" :src="user.img">
        <label class="name">{{user.name}}</label>
    </header>
    <!--<footer>
        <input class="search" type="text" placeholder="search user..." @keyup="onKeyup | debounce 150">
    </footer>-->
</div>
</template>

<style scoped lang="less">
    .card {
        padding: 12px;
        border-bottom: solid 1px #24272C;
        header {
            text-align: center;
        }
        footer {
            margin-top: 10px;
        }
        .avatar,
        .name {
            vertical-align: middle;
            margin-top: 10px;
        }
        .avatar {
            border-radius: 2px;
        }
        .name {
            display: inline-block;
            font-size: 14px;
        }
    }
</style>