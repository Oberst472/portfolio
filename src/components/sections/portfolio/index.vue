<template>
    <section class="section-portfolio" id="portfolio">
        <div class="wrap">
            <div class="section-portfolio__content">
                <h2 class="section-portfolio__title">Последние работы</h2>
                <div class="section-portfolio__works">
                    <BlockNav :items="portfolio" @click="openPortfolio"/>
                    <BlockWorks :items="portfolio" :activePortfolioIndex="activePortfolioIndex"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  import { portfolio } from '@/mocks/works.js'
  import BlockNav from './nav'
  import BlockWorks from './works'

  export default {
    components: {
      BlockNav,
      BlockWorks
    },
    data () {
      return {
        portfolio,
        activePortfolioIndex: 0
      }
    },
    methods: {
      openPortfolio (index) {
        this.activePortfolioIndex = index
      }
    }
  }
</script>

<style scoped lang="scss">
    .section-portfolio {
        background-color: $color--bg;

        &__content {
            padding: 30px 0 40px 0;
            @include lg() {
                min-height: 100vh;
            }
            @include lg() {
                padding: 30px 0 0 0;
            }
        }

        &__title {
            @include adaptiveFont(30px, 48px);
            line-height: 1;
            padding-bottom: 30px;
            font-weight: $weight--bold;
            color: $color--text-dark;
            @include md() {
                padding-bottom: 0;
                line-height: 58px;
            }

        }
    }
</style>
