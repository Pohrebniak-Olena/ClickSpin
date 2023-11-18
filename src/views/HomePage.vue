<template>
    <main>
        <section class="main-screen">
            <div class="container">
                <div class="content">
                    <div class="col">
                        <div class="logo">
                            <img src="/logo.svg" alt="">
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
                <picture class="move chip" data-depth="15" >
                    <img src="../assets/images/chip.svg" alt="bg">
                </picture>
                <picture class="move sweet" data-depth="5" >
                    <img src="../assets/images/sweet.svg" alt="bg">
                </picture>
                <picture class="move diamond" data-depth="8">
                    <img src="../assets/images/diamond.png" alt="bg">
                </picture>
                <picture class="move diamond2" data-depth="6">
                    <img src="../assets/images/diamond2.png" alt="bg">
                </picture>
            </div>

            <div class="ui-elements">
                <picture class="move glear" data-depth="20">
                    <img src="../assets/images/glear.png" alt="bg">
                </picture>
                <picture class="move glear2" data-depth="15">
                    <img src="../assets/images/glear.png" alt="bg">
                </picture>
            </div>

            <div class="ui-bg">
                <div class="img-wrap">


                    <picture class="bg">
                        <img class="bg" src="../assets/images/girlbgx2.webp" alt="bg">
                    </picture>
                    <picture class="elemnt">
                        <img class="elemnt" src="../assets/images/girlx2.webp" alt="elemnt">
                    </picture>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import { gsap } from 'gsap'

export default {
    mounted() {
        document.addEventListener("mousemove", this.moveElements);

    },
    methods: {
        openModal(modal) {
            this.$store.commit(modal, true)
        },
        moveElements(e) {

            gsap.utils.toArray(".move").forEach(layer => {
                const depth = layer.dataset.depth;
                const moveX = ((e.pageX) - (window.innerWidth / 2));
                const moveY = ((e.pageY) - (window.innerHeight / 2));
                gsap.to(layer, {
                    x: moveX / depth,
                    y: moveY / depth
                });
            });
        }
    },
    destroyed() {
        document.removeEventListener("mousemove", this.moveElements);
    },
}

</script>