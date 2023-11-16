<template>
  <dialog class="registration">
    <div class="dialog-close" @click="closeModal()"></div>
    <div class="dialog-wrap">
      <button class="btn-close" @click="closeModal()">
      </button>
      <div class="dialog-content">
        <div class="col col-desktop col-img">
          <img src="../../assets/images/girlfull.png" alt="bg">
        </div>
        <div class="col col-mobile">

        </div>
        <div class="col col-content">
          <div class="col-registration">
            <p class="dialog-header">
              Registration
            </p>

            <form class="form">

              <fieldset>
                <InputEmail />
                <InputPassword />
              </fieldset>

              <div class="input-checkbox">
                <input type="checkbox" name="" id="agree" @click="switchCheck()" v-model="policy">
                <label for="agree">
                  By checking this box when registering on this site, the user confirms that he is over 18 years of age
                  and has read, understood and accepted the <a href="" target="_blank">Terms and Conditions</a>.
                </label>
              </div>

              <button class="btn btn-submit" type="submit" @click.prevent="sendData()" :disabled="!password || !email">
                Create an account
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  </dialog>
</template>

<script>
import { mapState } from 'vuex'
import InputEmail from '../modules/InputEmail.vue';
import InputPassword from '../modules/InputPassword.vue';

export default {
  data() {
    return {
      policy: false,
    }
  },
  components: {
    InputEmail,
    InputPassword
  },
  computed:
    mapState(['email', 'password', 'policy']),

  methods: {
    closeModal() {
      this.$store.commit("setRegistration", false)
    },
    switchCheck(){
      this.$store.commit("setPolicy", this.policy)
    },
    sendData() {
      const userData = {
        email: this.email,
        password: this.password,
        policy: this.policy,
      }
      console.table(userData);
    }
  },
  watch: {

  }
}
</script>