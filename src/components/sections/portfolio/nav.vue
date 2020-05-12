<template>
    <ul class="block-works__nav">
        <li
            :class="[{'block-works__nav-item--active': index === activeBtn}, `block-works__nav-item--active-${index + 1}`]"
            :key="index"
            @click="openPortfolio(index)"
            class="block-works__nav-item"
            v-for="(item, index) in items"
        >
            {{ item.title }}
        </li>
        <i class="block-works__nav-line"></i>
    </ul>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array,
        default: () => {
        }
      }
    },
    data () {
      return {
        activeBtn: 0
      }
    },
    methods: {
      openPortfolio (index) {
        this.activeBtn = index
        this.$emit('click', index)
      }
    }
  }
</script>

<style scoped lang="scss">
    .block-works__nav {
        position: relative;
        display: grid;
        flex-wrap: wrap;
        margin: 0;
        padding: 0 0 20px 0;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 15px;

        &-line {
            display: none;
            @include md() {
                display: block;
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
                font-weight: $weight--bold;
                border-color: $color--primary;
                @include md() {
                    font-weight: $weight--regular;
                    border-color: #828282;
                }


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
</style>
