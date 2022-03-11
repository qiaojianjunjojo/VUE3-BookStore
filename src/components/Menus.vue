<template>
    <div class="menus">
        <ul>
            <li>
                <router-link to="/home">首页</router-link>
            </li>
            <li>
                <router-link to="/newBooks">新书</router-link>
            </li>
            <li>
                <a href="javascript:;">特价书</a>
            </li>
            <li>
                <a href="javascript:;">教材</a>
            </li>
            <li>
                <a href="javascript:;">视听教程</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Menus',
};
</script>

<style  scoped>
.menus ul{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border: 1px dotted grey;
    background-color: antiquewhite;
}

.menus ul>li{
    display: inline-block;
    margin: 10px;
    padding: 10px;
}
</style>