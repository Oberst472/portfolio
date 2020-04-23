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
    fill: Boolean,
    shadow: Boolean,
    stretch: Boolean,
    disabled: Boolean,
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
        'ui-btn--disabled': this.disabled
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
                &:hover {
                    background-color: #6a737a;
                    color: $color--snow
                }
            }
            &-transparent {
                background-color: transparent;
                color: $color--snow;
                transition-property: background-color, color;
                &:hover {
                    background-color: #6a737a;
                    color: $color--snow
                }
            }
        }
        &--size {
            &-default {
                height: 61px;
                padding: 15px;
                box-sizing: border-box;
                font-size: 18px;
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

        &.is-disabled {
            opacity: 0.3;
            pointer-events: none;
        }
    }
</style>
