<template>
    <div class="section-about__add-box">
        <div class="section-about__add-btn-box">
            <button class="section-about__add-btn section-about__add-btn-html" :class="{'section-about__add-btn--active': isActive === 'html'}" @click="isActive = 'html'">
               Html
            </button>
            <button class="section-about__add-btn section-about__add-btn-js" :class="{'section-about__add-btn--active': isActive === 'js'}" @click="isActive = 'js'">
              JS
            </button>
        </div>
        <div class="section-about__add-content-box">
            <transition name="top" mode="out-in">
                <div class="section-about__add-content" v-if="isActive === 'html'" key="html">
                    <p class="section-about__desc">
                        HTML и CSS знаю практически досконально. Из препроцессоров предпочитаю SCSS, также знаю LESS и Stylus. Понимаю и использую принципы методологии БЭМ

                    </p>
                </div>
                <div class="section-about__add-content" v-if="isActive === 'js'" key="js">
                    <p class="section-about__desc">
                        В основном работаю с Vue.js + Vue Router + Vuex.
                    </p>
                    <p class="section-about__desc">
                        Для SSR приложений предпочитаю <a title="Перейти на сайт" class="section-about__link" href="https://ru.nuxtjs.org/" target="_blank">Nuxt.js</a>.  Приходилось работать с
                        <a title="Перейти на сайт" class="section-about__link" href="https://quasar.dev/" target="_blank">Quasar</a>.  Поверхностно знаком с Angular и React, опыта коммерческой разработки с ними не было,
                        знакомился для общего развития.
                    </p>
                    <p class="section-about__desc">
                        Знаком с <a title="Перейти на сайт" class="section-about__link" href="https://nodejs.org/en/" target="_blank">Node.js</a>. Коммерческие проекты на нем не делал. Для себя писал бекенд на node.js +
                        <a title="Перейти на сайт" class="section-about__link" href="https://www.mongodb.com/" target="_blank">mongoDB</a>, так что поднять rest сервер или написать необходимую бекенд логику смогу.
                    </p>
                    <p class="section-about__desc">
                        При разработке использую git. Раньше активно работал с <a title="Перейти на сайт" class="section-about__link" href="https://gulpjs.com/" target="_blank">gulp</a>, в последнее время работаю с
                        <a title="Перейти на сайт" class="section-about__link" href="https://webpack.js.org/" target="_blank">webpack</a>
                    </p>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        isActive: 'html'
      }
    },
  }
</script>

<style scoped lang="scss">
.section-about {
    &__add-box {
        position: relative;
    }
    &__add-btn-box {
        width: 100%;
        bottom: 100%;
        left: -1px;
        display: flex;
        justify-content: flex-start;
        margin-bottom: $gutter / 2;
    }
    &__add-content-box {
        overflow: hidden;
    }
    &__content {
    }
    &__add-btn {
        margin-right: 10px;
        min-width: 120px;
        padding: 10px;
        background-color: #fff;
        font-size: 14px;
        color: $color--text-base;
        position: relative;
        border: 1px solid $color--text-light;
        cursor: pointer;
        transition-duration: 0.3s;
        &:hover {
            background-color: #6a737a;
            color: $color--text-light
        }
        &--active {
            background-color: transparent !important;
            color: $color--text-light;
            cursor: not-allowed;
            opacity: 0.6;

        }
    }
    &__desc {
        @include adaptiveFont(14px, 16px);
        color: #E4E4E4;
        text-align: left;
        margin-bottom: $gutter / 2;
    }
    &__link {
        color: #E4E4E4;
        text-decoration: underline;
        /*color: #2bba17;*/
        transition: color 0.3s ease;
        &:hover {
            color: $color--positive
        }
        &:active {
            opacity: 0.8;
        }
    }
}
</style>
