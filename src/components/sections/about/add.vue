<template>
    <div class="section-about__add-box">
        <div class="section-about__add-btn-box">
            <button class="section-about__add-btn section-about__add-btn-html" :class="{'section-about__add-btn--active': isActive === 'html'}" @click="isActive = 'html'">
                Html
            </button>
            <button class="section-about__add-btn section-about__add-btn-js" :class="{'section-about__add-btn--active': isActive === 'js'}" @click="isActive = 'js'">
                JS
            </button>
            <span :class="{'section-about__add-btn-box-line--js': isActive === 'js'}" class="section-about__add-btn-box-line"></span>
        </div>
        <div class="section-about__add-content-box">
            <transition name="top" mode="out-in">
                <div class="section-about__add-content" v-if="isActive === 'html'" key="html">
                    <p class="section-about__desc">
                        HTML и CSS знаю очень хорошо. Вестаю кроссбраузерно (если речь не идет о старых IE) и адаптивно.
                    </p>
                    <p class="section-about__desc">
                        Являюсь приверженцем секты mobile-first. Из препроцессоров предпочитаю SCSS, также знаю LESS и
                        Stylus. Понимаю и использую принципы методологии БЭМ
                    </p>
                </div>
                <div class="section-about__add-content" v-if="isActive === 'js'" key="js">
                    <p class="section-about__desc">
                        В основном работаю с Vue.js + Vue Router + Vuex.
                    </p>
                    <p class="section-about__desc">
                        Для SSR приложений предпочитаю
                        <a class="section-about__link" href="https://ru.nuxtjs.org/" target="_blank" title="Перейти на сайт">Nuxt.js</a>.
                        Приходилось работать с
                        <a class="section-about__link" href="https://quasar.dev/" target="_blank" title="Перейти на сайт">Quasar</a>.
                        Поверхностно знаком с Angular и React, опыта коммерческой разработки с ними не было,
                        знакомился для общего развития.
                    </p>
                    <p class="section-about__desc">
                        Знаком с
                        <a class="section-about__link" href="https://nodejs.org/en/" target="_blank" title="Перейти на сайт">Node.js</a>.
                        Коммерческие проекты на нем не делал. Для себя писал бекенд на node.js +
                        <a class="section-about__link" href="https://www.mongodb.com/" target="_blank" title="Перейти на сайт">mongoDB</a>,
                        так что поднять rest сервер или написать необходимую бекенд логику смогу.
                    </p>
                    <p class="section-about__desc">
                        При разработке использую git. Раньше активно работал с
                        <a class="section-about__link" href="https://gulpjs.com/" target="_blank" title="Перейти на сайт">gulp</a>,
                        в последнее время работаю с
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
            position: relative;
            left: -1px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: $gutter / 3;
            width: 100%;
            margin-bottom: $gutter / 2;

            &-line {
                position: absolute;
                bottom: 0;
                left: 0;
                width: calc(50% - 10px);
                height: 3px;
                background-color: #fff;
                transition-duration: 0.3s;

                &--js {
                    left: 50%;
                }
            }
        }

        &__add-content-box {
            overflow: hidden;
            @include md() {
                min-height: 240px;
            }
        }

        &__add-btn {
            position: relative;
            padding: 10px 0;
            font-size: 16px;
            color: $color--snow;
            border: 0;
            background-color: transparent;
            cursor: pointer;
            transition-duration: 0.3s;
            &:hover {
                @include md() {
                    color: $color--positive
                }
            }

            &--active {
                pointer-events: none;

            }
        }

        &__desc {
            @include adaptiveFont(14px, 16px);
            margin-bottom: $gutter / 2;
            color: #E4E4E4;
            text-align: left;

            &:last-child {
                margin-bottom: 0;
            }
        }

        &__link {
            color: #E4E4E4;
            transition: color 0.3s ease;
            text-decoration: underline;

            &:hover {
                color: $color--positive
            }

            &:active {
                opacity: 0.8;
            }
        }
    }
</style>
