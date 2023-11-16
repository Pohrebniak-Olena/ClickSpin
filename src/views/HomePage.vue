<template>
    <main>
        <section class="main-screen">
            <div class="container">
                <div class="content">
                    <div class="col">
                        <div class="logo">
                            <img src="../../logo.svg" alt="">
                        </div>
                        <h1>
                            Deposit 500,<br>
                            get 500 USDT<br>
                            <mark>as a gift </mark>
                        </h1>
                        <h3>
                            100% cashback for VIPs only
                        </h3>

                        <button class="btn btn-main" @click="openModal('setRegistration')">
                            Become a vip-player
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="ui-elements">
                <picture class="chip">
                    <img src="../assets/images/chip.svg" alt="bg">
                </picture>
                <picture class="sweet">
                    <img src="../assets/images/sweet.svg" alt="bg">
                </picture>
                <picture class="diamond">
                    <img src="../assets/images/diamond.png" alt="bg">
                </picture>
                <picture class="diamond2">
                    <img src="../assets/images/diamond2.png" alt="bg">
                </picture>
            </div>

            <div class="ui-elements">
                <picture class="glear">
                    <img src="../assets/images/glear.png" alt="bg">
                </picture>
                <picture class="glear2">
                    <img src="../assets/images/glear.png" alt="bg">
                </picture>
            </div>

            <div class="ui-bg">
                <div class="img-wrap">

               
                    <picture class="bg">
                        <img class="bg" src="../assets/images/girlbgx2.png" alt="bg">
                    </picture>
                    <picture class="elemnt">
                        <img class="elemnt" src="../assets/images/girlx2.png" alt="elemnt">
                        <!-- <img src="../assets/images/girlfull.png" alt=""> -->
                    </picture>
                    <!-- <picture>
                        <source
                            media="(min-width: 1024px)"
                            srcset="opera-fullshot.webp"
                            type="image/webp">
                        <source
                            media="(min-width: 1024px)"
                            srcset="opera-fullshot.jpg">
                        <source
                            srcset="opera-closeup.webp"
                            type="image/webp">
                        <img
                            src="opera-closeup.jpg" alt="The Oslo Opera House">
                    </picture> -->
                </div>
            </div>
        </section>
    </main>
</template>

<script>

export default {
    methods: {
        openModal(modal) {
            this.$store.commit(modal, true)
        } 
    },
}

</script>