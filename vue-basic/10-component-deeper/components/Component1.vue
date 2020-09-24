<template>

</template>
<script>
    var component1 = {
        props: ['content'],
        template: `
            <p>{{content}}</p>
        `
    }

    export default {
        components: {
            component1,
        },
        // ...
    }
</script>