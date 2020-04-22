<template>
    <section class="section-portfolio">
        <div class="wrap">
            <div class="section-portfolio__content">
                <h2 class="section-portfolio__title">Портфолио</h2>
                <BlockWorks />
            </div>
        </div>
    </section>
</template>

<script>
import BlockWorks from '@/components/blocks/works'
export default {
  components: {
    BlockWorks
  }
}
</script>

<style scoped lang="scss">
.section-portfolio {
    background-color: $color--bg;
    .wrap {}
    &__content {
        padding-top: 30px;
        height: 100vh;
    }
    &__title {
        @include adaptiveFont(20px, 48px);
        line-height: 58px;
        font-weight: $weight--bold;
        color: $color--text-dark

    }
}
</style>
