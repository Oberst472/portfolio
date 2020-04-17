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
        font-size: 18px;
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
                height: 61px;
                background-color: $color--snow;
                color: #7A761D;
                transition-property: background-color, color;
                &:hover {
                    background-color: #6a737a;
                    color: $color--snow
                }
            }
            &-transparent {
                height: 61px;
                background-color: transparent;
                color: $color--snow;
                transition-property: background-color, color;
                &:hover {
                    background-color: #6a737a;
                    color: $color--snow
                }
            }
        }

        &.is-disabled {
            opacity: 0.3;
            pointer-events: none;
        }
    }
</style>
