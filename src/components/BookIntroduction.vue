<template>
    <div>
        <p>{{content}}</p>
    </div>
</template>

<script>
export default {
    name: 'Bookintroduction',
    props: {
        content :{
            type : String,
            default : ''
        }
    },
};
</script>