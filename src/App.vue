
<template>

  <Registration v-if="registration"/>
  <RouterView />
</template>

<script>

import { mapState } from "vuex";
import Registration from './components/dialogs/Registration.vue'

export default {
    components: {
        Registration
    },
    computed: {
        ...mapState(['registration']),
    },
}

</script>