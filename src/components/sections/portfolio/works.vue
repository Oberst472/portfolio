<template>
    <div>
        <transition-group class="block-works__items" name="list" tag="div">
            <article :key="`item-${index}`" class="block-works__item" v-for="(item, index) in items[activePortfolioIndex].value">
                <div class="block-works__item-box">
                    <div class="block-works__item-img-box">
                        <img :src="require(`@/assets/images/portfolio/${item.preview}`)" alt="Превью сайта" class="block-works__item-img">
                    </div>
                    <div class="block-works__item-desc">
                        <span class="block-works__item-title">{{ item.title }}</span>
                        <span class="block-works__item-description">{{ item.description }}</span>
<!--                        <a :href="item.link" class="block-works__item-link" rel="nofollow" target="_blank">Перейти на сайт</a>-->
                        <div class="block-works__item-link-box">
                            <span>Cсылку нужно копировать и вставлять в адресную строку в ручную</span>
                            <span class="block-works__item-link-text">{{ item.link }}</span>
                        </div>
                    </div>
                </div>
            </article>
        </transition-group>
    </div>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array,
        default: () => {}
      },
      activePortfolioIndex: {
        type: [Number, String],
        default: 0
      }
    },
  }
</script>

<style scoped lang="scss">
    .block-works {
@include md() {
    display: flex;
}
        &__items {
            display: grid;
            margin-top: 15px;
            grid-template-columns: 1fr;
            grid-gap: $gutter;
            @include md() {
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 1fr;
            }
            @include lg() {
                margin-top: 40px;
                grid-template-columns: 1fr 1fr 1fr;
            }
        }

        &__item {
            height: max-content;
            align-self: start;
           //@include lg() {
               // position: relative;
               // display: flex;
               // height: 0;
               // padding-bottom: 60%;
            //}

            &-box {
                @include lg() {
                    position: relative;
                }
               //@include lg() {
                   //position: absolute;
                   //top: 0;
                  // left: 0;
                   //width: 100%;
                   //height: 100%;
                   //tab-index: 0;
               //}

                &:after {
                    @include lg() {
                        content: '';
                        position: absolute;
                        bottom: 100%;
                        left: 0;
                        width: 100%;
                        height: 30px;
                        background-color: transparent;
                        pointer-events: none;
                    }
                }

                &:hover {
                    .block-works__item-desc {
                        margin-bottom: 0;
                        opacity: 1 !important;
                        pointer-events: auto;
                    }
                    .block-works__item-img-box {
                        &:before {
                            opacity: 0.7;

                        }
                    }

                    &:after {
                        pointer-events: auto;
                    }
                }


            }

            &-img-box {
                position: relative;
                display: flex;
                height: 0;
                padding-bottom: 60%;
                @include lg() {
                    position: relative;
                    width: 100%;
                    max-width: 100%;
                    overflow: hidden;
                    &:before {
                        content: '';
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        background-color: rgba(0, 0, 0, 0.61);
                        z-index: 8;
                        opacity: 0;
                        transition-duration: 0.3s;
                    }
                }
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
                background-color: #fff;
                padding: $gutter / 2;
                text-align: left;
                @include lg() {
                    width: 100%;
                    box-sizing: border-box;
                    position: absolute;
                    bottom: calc(100% + 20px);
                    z-index: 10;
                    display: flex;
                    flex-direction: column;
                    margin-bottom: -40px;
                    font-size: 14px;
                    opacity: 0;
                    border-radius: 5px;
                    transition-duration: 0.3s;
                    text-align: left;
                    pointer-events: none;
                }

                &:before {
                    @include lg() {
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
            }

            &-title {
                display: block;
                font-size: 16px;
                color: $color--primary;
                font-weight: 500;
            }

            &-description {
                margin: 10px 0;
                display: block;
            }
            &-link-box {
                display: flex;
                flex-direction: column;

            }
            &-link-text {
                color: $color--primary;
                display: block;
                max-width: 100%;
                white-space: pre-line;
                word-break: break-all;
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
