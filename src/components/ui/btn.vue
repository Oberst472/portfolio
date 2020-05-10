<template>
    <component
        :class="classes"
        :href="href"
        :to="to"
        :is="tag"
        @click="onClick"
        class="ui-btn"
        :target="this.href ? '_blank' : ''"
    >
       <slot />
    </component>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
  },
  props: {
    theme: {
      type: String,
      default: 'base'
    },
    small: {
      type: Boolean,
      default: false
    },
    borderNone: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    fill: Boolean,
    shadow: Boolean,
    stretch: Boolean,
    href: String,
    to: {
      type: Object,
      default: null
    }
  },
  computed: {
    classes () {
      return {
        [`ui-btn--theme-${this.theme}`]: true,
        'ui-btn--fill': this.fill,
        'ui-btn--size-default': !this.small,
        'ui-btn--size-small': this.small,
        'ui-btn--border-none': this.borderNone,
        'ui-btn--disabled': this.disabled,
        'ui-btn--loading': this.loading
      }
    },
    tag () {
      if (this.href) {
        return 'a'
      } else if (this.to) {
        return 'router-link'
      } else {
        return 'button'
      }
    }
  },
  methods: {
    onClick () {
      if (!this.disabled) {
        this.$emit('click')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    .ui-btn {
        background-color: transparent;
        border: 1px solid #D9D9D9;
        line-height: 0;
        transition-duration: 0.3s;
        @include sm() {
            cursor: pointer;
        }
        &:hover {
        }

        &:active {
            opacity: 0.8
        }

        &--theme {
            &-base {
                background-color: $color--snow;
                color: #7A761D;
                transition-property: background-color, color;
                @include md() {
                    &:hover {
                        background-color: #6a737a;
                        color: $color--snow
                    }
                }
            }
            &-transparent {
                background-color: transparent;
                color: $color--snow;
                transition-property: background-color, color;
                @include md() {
                    &:hover {
                        background-color: #6a737a;
                        color: $color--snow
                    }
                }
            }
        }
        &--size {
            &-default {
                height: 50px;
                padding: 15px;
                box-sizing: border-box;
                font-size: 18px;
                @include adaptiveFont(14px, 18px);
                @include md() {
                    height: 61px;
                }
            }
            &-small {
                height: 30px;
                padding: 5px;
                font-size: 14px;
            }
        }
        &--border-none {
            border: 0
        }

        &--loading {
            font-size: 0;
            position: relative;
            pointer-events: none;
            cursor: progress;
            opacity: 0.7;
            &:before {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-image: url('~@/assets/images/reload.svg');
                background-repeat: no-repeat;
                background-size: 40px;
                background-position: center;
                animation-name: rotate;
                animation-duration: 1s;
                animation-iteration-count: infinite;
                animation-timing-function: linear;
            }
        }
        &--disabled {
            opacity: 0.7;
            pointer-events: none;
        }
    }
    @keyframes rotate {
        to {
          transform: rotate(0deg);
        }
        from {
            transform: rotate(-360deg);
        }
    }
</style>
