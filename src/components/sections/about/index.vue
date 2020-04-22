<template>
    <div class="section-about">
        <div class="wrap">
            <div class="section-about__content">
                <div class="section-about__photo-box">
                    <div class="section-about__photo-sub-box">
                        <transition name="fade" mode="out-in">
                            <UiBtn class="section-about__btn" theme="transparent" @click="isActive = true" v-if="!isActive">Посмотреть на меня</UiBtn>
                            <img class="section-about__photo" src="@/assets/images/photo.jpg" alt="Фото" v-else>
                        </transition>
                    </div>
                </div>
                <div class="section-about__desc-box">
                    <h2 class="section-about__title">Кто я?</h2>
                    <p class="section-about__desc">
                       Привет, меня зовут Александр, и я фронтенд-разработчик.
                        Погружние в веб разработку состоялось в 2012 году после случайного знакомства с HTML и CSS.
                       Мы полюбили друг друга с первого взгляда, прошло уже 8 лет, но мы до сих пор вместе и
                        ни разу об этом не пожалел=)
                    </p>
                    <h3 class="section-about__title">Что я умею?</h3>
                    <p class="section-about__desc">
                        HTML и CSS знаю практически досконально. Боевой препроцессор для разработки - SCSS, но при необходимости использую и LESS и Stylus.
                        JS на достаточно высоком уровне, при разработке использую фичи современных стандартов.
                    </p>
                    <p class="section-about__desc">
                        Для разработки SPA как оснофной фреймворк использую Vue.js в связке с Vue Router и Vuex.
                    </p>
                    <p class="section-about__desc">
                        SSR приложения разрабатываю на Nuxt.js. Поверхностно знаком с Angular и React, серьезные приложения на них не писал,
                        знакомился для общего развития.
                    </p>
                    <p class="section-about__desc">
                        Знаю Node.js но коммерческие проекты на нем не делал, так как позиционирую себя как фронт мастер. Для себя писал довольно сложный бекенд на node.js, так что если заставит нужда, поднять Rest сервер или написать какую то бекенд логику смогу.
                    </p>
                    <p class="section-about__desc">
                        Как любой уважающий себя разработчик знаком с Gulp (но довольно давно не использовал), Webpack (поэтому и не использую Gulp)
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
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
            @include adaptiveFont(14px, 18px);
            color: #E4E4E4;
            text-align: left;
            margin-bottom: $gutter / 2;

        }

    }
</style>
