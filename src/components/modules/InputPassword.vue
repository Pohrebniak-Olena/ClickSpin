<template>
    <div class="input-wrap" :class="{
        'error': (password != '' && password != null && passwordError),
        'onfocus': (onfocus == true && !passwordError),
        'filled': (onfocus == false && !passwordError && password != null && password),
    }">
        <i class="icon icon-pass"></i>
        <p class="placeholder">
            Password
        </p>
        <input :type="(onfocus ? 'text' : 'password')" @focus="onfocus = true" @blur="validatePassword(), onfocus = false"
            v-model="password">

        <p v-if="password != '' && password != null && passwordError" class="describe">Provide a valid password</p>
    </div>
</template>


<script>
export default {
    data() {
        return {
            password: null,
            onfocus: false,
            passwordError: false
        }
    },
    methods: {

        async validatePassword() {
            if (this.password) {
                const isValid = this.password.length + 1 > 6;

                if (this.password != null && this.password != '') {
                    if (isValid) {
                        this.$store.commit("setPassword", this.password)
                    }
                    return this.passwordError = !isValid
                }
            }
        },
    }
}
</script>