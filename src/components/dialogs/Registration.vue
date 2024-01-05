<template>
  <dialog class="registration">
    <div class="dialog-close" @click="closeModal()"></div>
    <div class="dialog-wrap">
      <button class="btn-close" @click="closeModal()">
      </button>
      <div class="dialog-content">
        <div class="col col-desktop col-img">

        </div>
        <div class="col col-mobile">

          <div class="content">
            <div class="col">
              <div class="logo">
                <img src="/logo.svg" alt="">
              </div>
              <p>Deposit 500, get 500 USDT as a gift</p>
              <p class="mark">100% cashback for VIPs only</p>
            </div>
          </div>
        </div>
        <div class="col col-content">
          <div class="col-registration">
            <p class="dialog-header">
              Registration
            </p>

            <div v-for="(pet, index) in pets">

              pet name: {{ pet.name }}
              
            </div>

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

            <div class="col another-way">
              <p>Or register with:</p>
              <div class="btns-wrap">
                <button class="btn">
                  <i class="icon icon-metamsk"></i>
                </button>
                <button class="btn">
                  <i class="icon icon-apple"></i>
                </button>
                <button class="btn">
                  <i class="icon icon-facebook"></i>
                </button>
                <button class="btn">
                  <i class="icon icon-google"></i>
                </button>
              </div>
            </div>
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
import axios from 'axios';

export default {
  data() {
    return {
      policy: false,
      pets: '',
    }
  },
  components: {
    InputEmail,
    InputPassword
  },
  computed:
    mapState(['email', 'password', 'policy']),
  mounted() {
    // ------------ https://www.npmjs.com/package/axios --------------
    // axios
    //   .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    //   .then(response => (this.info = response));

    // axios({
    //   method: 'get',
    //   url: 'https://petstore.swagger.io/v2/pet/findByStatus?status=available',
    //   responseType: 'stream'
    // })
    //   .then(function (response) {
    //     response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
    //   });

    axios.get('https://petstore.swagger.io/v2/pet/findByStatus?status=available')
    .then(response => {
        // Handle response
        this.pets = response.data
        console.log(response.data);
    })
    .catch(err => {
        // Handle errors
        console.error(err);
    });
  },
  methods: {
    closeModal() {
      this.$store.commit("setRegistration", false)
    },
    switchCheck() {
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

}
</script>