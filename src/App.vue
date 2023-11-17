
<template>
    <Registration v-if="registration" />
    <RouterView />
</template>

<script>

import { mapState } from "vuex";
import Registration from './components/dialogs/Registration.vue'

export default {
    components: {
        Registration
    },
    mounted() {
        document.getElementsByTagName('html')[0].style.overflow = 'visible';
    },
    computed: {
        ...mapState(['registration']),
    },
    watch: {
        registration: function (a) {
            const el = document.getElementsByTagName('html')[0]
            if (a == true) {
                el.style.overflow = 'hidden';
            }
            else el.style.overflow = 'visible';
        }
    }
}

</script>