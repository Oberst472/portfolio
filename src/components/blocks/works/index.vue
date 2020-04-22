<template>
    <div class="block-works">
        <ul class="block-works__nav">
            <li
                :class="[{'block-works__nav-item--active': index === activeBtn}, `block-works__nav-item--active-${index + 1}`]"
                :key="index"
                @click="openPortfolio(index)"
                class="block-works__nav-item"
                v-for="(item, index) in key"
            >
                {{ item.title }}
            </li>
            <i class="block-works__nav-line"></i>
        </ul>
        <transition-group class="block-works__items" name="list" tag="div">
            <article :key="`item-${index}`" class="block-works__item" v-for="(item, index) in key[activeBtn].value">
                <div class="block-works__item-box">
                    <div class="block-works__item-img-box">
                        <img :src="require(`@/assets/images/portfolio/${item.preview}`)" alt="Превью сайта" class="block-works__item-img">
                    </div>
                    <div class="block-works__item-desc">
                        <span class="block-works__item-title">{{ item.title }}</span>
                        <span class="block-works__item-description">{{ item.description }}</span>
                        <a :href="item.link" class="block-works__item-link" rel="nofollow" target="_blank">Перейти на
                                                                                                           сайт</a>
                    </div>
                </div>
            </article>
        </transition-group>
    </div>
</template>

<script>
  import { portfolio } from '@/mocks/works.js'

  export default {
    data () {
      return {
        key: portfolio,
        activeBtn: 0
      }
    },
    methods: {
      openPortfolio (index) {
        this.activeBtn = index
      }
    }
  }
</script>

<style lang="scss" scoped>
    .block-works {
        &__nav {
            position: relative;
            display: grid;
            flex-wrap: wrap;
            margin: 0;
            padding: 0 0 20px 0;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 15px;

            &-line {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 25%;
                height: 5px;
                background-color: $color--primary;
                transition-timing-function: ease;
                transition-duration: 0.3s;
            }

            @include md() {
                cursor: pointer;
            }
            @include md() {
                margin-top: 20px;
                padding-top: 20px;
                border-top: 1px solid #cdcdcd;
                grid-template-columns: repeat(4, 1fr);
            }

            &-item {
                flex-shrink: 0;
                @include adaptiveFont(14px, 20px);
                padding: 5px;
                line-height: 1.2;
                color: #828282;
                border-bottom: 1px solid #828282;
                list-style: none;
                text-transform: lowercase;
                @include sm() {
                    color: #828282;
                }
                @include md() {
                    padding: 0;
                    border: 0;
                    transition: color, 0.3s, ease;
                    &:hover {
                        color: $color--primary
                    }
                }

                &--active.block-works__nav-item--active {
                    color: $color--primary;

                    &-1.block-works__nav-item--active {
                        cursor: not-allowed;

                        & ~ .block-works__nav-line {
                            left: 0;
                        }
                    }

                    &-2.block-works__nav-item--active {
                        cursor: not-allowed;

                        & ~ .block-works__nav-line {
                            left: 25%;
                        }
                    }

                    &-3.block-works__nav-item--active {
                        cursor: not-allowed;

                        & ~ .block-works__nav-line {
                            left: 50%;
                        }
                    }

                    &-4.block-works__nav-item--active {
                        cursor: not-allowed;

                        & ~ .block-works__nav-line {
                            left: 75%;
                        }
                    }
                }
            }
        }

        &__items {
            display: grid;
            margin-top: 40px;
            grid-template-columns: 1fr;
            grid-gap: $gutter;
            @include sm() {
                grid-template-columns: 1fr 1fr;
            }
            @include md() {
                grid-template-columns: 1fr 1fr 1fr;
            }
        }

        &__item {
            position: relative;
            display: flex;
            height: 0;
            padding-bottom: 60%;

            &-box {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                tab-index: 0;

                &:after {
                    content: '';
                    position: absolute;
                    bottom: 100%;
                    left: 0;
                    width: 100%;
                    height: 30px;
                    background-color: transparent;
                    pointer-events: none;
                }

                &:hover {
                    .block-works__item-desc {
                        margin-bottom: 0;
                        opacity: 1 !important;
                        transition-delay: 0s;
                        pointer-events: auto;
                    }

                    &:after {
                        pointer-events: auto;
                    }
                }


            }

            &-img-box {
                position: relative;
                width: 100%;
                max-width: 100%;
                height: 100%;
                overflow: hidden;
            }

            &-img {
                position: absolute;
                top: 0;
                left: 0;
                z-index: 2;
                width: 100%;
                max-width: 100%;
                height: 100%;
                -moz-transition-duration: 0.3s;
                object-fit: cover;
            }

            &-desc {
                position: absolute;
                bottom: calc(100% + 20px);
                z-index: 1;
                display: flex;
                flex-direction: column;
                margin-bottom: -40px;
                padding: $gutter / 2;
                font-size: 14px;
                opacity: 0;
                border-radius: 5px;
                background-color: #fff;
                transition-delay: 0.3s;
                transition-duration: 0.3s;
                text-align: left;
                pointer-events: none;

                &:before {
                    content: '';
                    position: absolute;
                    bottom: -10px;
                    left: 50%;
                    width: 20px;
                    height: 20px;
                    border-top-left-radius: 5px;
                    background-color: #fff;
                    transform: translateX(-50%) rotate(-135deg);
                }
            }

            &-title {
                font-size: 16px;
                color: $color--primary;
                font-weight: 500;
            }

            &-description {
                margin: 10px 0;
            }

            &-link {
                color: $color--primary;
                text-decoration: none;
                text-transform: lowercase;

                &:hover {
                    color: $color--accent
                }

                &:active {
                    opacity: 0.8;
                }
            }
        }
    }
</style>
