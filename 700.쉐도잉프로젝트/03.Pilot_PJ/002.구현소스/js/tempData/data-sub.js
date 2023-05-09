const subData = {

    banner:`
        <!-- 2-1. 배너영역 -->
        <section id="ban" class="page">
            <!-- Swiper -->
            <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                    <div v-for="v in $store.state.cnt" v-bind:key="v" class="swiper-slide">
                        <img v-bind:src="'./images/sub/'+$store.state.cat+'/banner/ban'+v+'.png'" alt="서브배너이미지" />
                    </div>
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-pagination"></div>
            </div>
        </section>
    `,
    cont1:``,
    cont2:``,
    cont3:``,

}; ////////////// subData //////////////////////

export default subData;