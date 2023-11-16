<template>
    <div class="input-wrap" :class="{
        'error': (email != '' && email != null && emailError),
        'onfocus': (onfocus == true && !emailError),
        'filled': (onfocus == false && !emailError && email != null && emailError),
    }">
        <i class="icon icon-email"></i>
        <p class="placeholder">
            Email
        </p>
        <input type="text" @focus="onfocus = true" @blur="validateEmail()" v-model="email">

        <p v-if="email != '' && email != null && emailError" class="describe">Provide a valid password</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: null,
            onfocus: false,
            emailError: false
        }
    },
    methods: {

        validateEmail() {
            const isValid = !!String(this.email)
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );

            if (this.email != null && this.email != '') {
                if (isValid) {
                    this.$store.commit("setEmail", this.email)
                }
                return this.emailError = !isValid
            }
        },
    }
}
</script>