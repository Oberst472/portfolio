<template>
    <div class="section-about">
        <div class="wrap">
            <div class="section-about__content">
                <div class="section-about__photo-box">
                    <div class="section-about__photo-sub-box">
                        <transition name="fade" mode="out-in">
                            <UiBtn class="section-about__btn" theme="transparent" @click="isActive = true" v-if="!isActive">Тут я</UiBtn>
                            <img class="section-about__photo" src="@/assets/images/photo.jpg" alt="Фото" v-else>
                        </transition>
                    </div>
                </div>
                <div class="section-about__desc-box">
                    <h2 class="section-about__title">Кто я?</h2>
                    <p class="section-about__desc">
                       Привет, меня зовут Александр, и я фронтенд-разработчик.
                    </p>
                    <p class="section-about__desc">
                        Мое погружение в веб началось в 2012 году после случайного знакомства с HTML и CSS. В итоге погрузился так глубоко что
                        мы уже 8 лет вместе=)
                    </p>
                    <h3 class="section-about__title">Что я умею?</h3>
                    <BlockAddInfo />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import BlockAddInfo from './add'
  export default {
    components: {
      BlockAddInfo
    },
    data () {
      return {
        isActive: false
      }
    },
  }
</script>

<style scoped lang="scss">
    .section-about {
        background-image: linear-gradient(112deg, #87846A 30%, #ACAA95 100%);
        background-repeat: no-repeat;
        width: 100%;

        &__content {
            padding-top: $gutter * 2;
            padding-bottom: $gutter * 2;
            display: grid;
            grid-template-columns: 350px 1fr;
            grid-gap: $gutter;
            min-height: 100vh;
            box-sizing: border-box;
        }
        &__photo-box {
            display: inline-flex;
            align-items: center;
        }
        &__photo-sub-box {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 0;
            padding-bottom: 100%;
            position: relative;
        }
        &__desc-box {
            flex-shrink: 0;
            display: inline-flex;
            flex-direction: column;
            justify-content: center;

        }
        &__btn {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
        }
        &__photo {
            object-fit: cover;
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            border-radius: 50%;
        }
        &__title {
            text-align: left;
            font-size: 48px;
            line-height: 1;
            color: $color--text-light;
            margin-bottom: $gutter;

        }
        &__desc {
            @include adaptiveFont(14px, 16px);
            color: #E4E4E4;
            text-align: left;
            margin-bottom: $gutter / 2;

        }

    }
</style>
