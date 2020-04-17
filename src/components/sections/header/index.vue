<template>
    <section class="section-header">
        <div class="wrap">
            <div class="section-header__content">
                <h1 class="section-header__title">Мое имя Александр</h1>
                <h2 class="section-header__subtitle">Я программист из Одессы</h2>
            </div>
        </div>
    </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
    .section-header {
        width: 100%;
        background-image: linear-gradient(123.28deg, #423B28 53.4%, #816F43 106.32%);

        height: 100vh;
        position: relative;

        &:before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-image: url('/assets/images/header-bg.jpg');
            mix-blend-mode: screen;
            opacity: 0.2;
        }
        .wrap {
            height: 100%;
        }
        &__content {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
           justify-content: center;
        }
        &__title {
            text-align: left;
            font-weight: $weight--bold;
            color: $color--snow;
            @include adaptiveFont(20px, 48px);
            line-height: 1.2;
        }
        &__subtitle {
            text-align: left;
            color: #d8d8d8;
            text-transform: lowercase;

            @include adaptiveFont(16px, 18px);
            line-height: 1.2;
        }
    }
</style>
