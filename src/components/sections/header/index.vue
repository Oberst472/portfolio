<template>
    <section class="section-header">
        <div class="wrap">
            <div class="section-header__content">
                <h1 class="section-header__title">Мое имя Александр</h1>
                <span class="section-header__subtitle">я фронтенд-разработчик</span>
                <UiBtn class="section-header__works-btn">Мои работы</UiBtn>
                <UiBtn class="section-header__about-btn" theme="transparent">Обо мне</UiBtn>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  methods: {
  }
}
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
            background-image: url('~@/assets/images/header-bg.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            mix-blend-mode: screen;
            pointer-events: none;
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
            font-weight: $weight--semi-bold;

            @include adaptiveFont(16px, 18px);
            line-height: 1.2;
        }
        &__works-btn {
            max-width: 283px;
            margin-top: 60px;

        }
        &__about-btn {
            max-width: 283px;
            margin-top: 25px;
        }
    }
</style>
