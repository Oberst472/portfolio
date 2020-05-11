<template>
    <section class="section-header">
        <div class="wrap">
            <div class="section-header__content">
                <h1 class="section-header__title">Мое имя Александр</h1>
                <span class="section-header__subtitle">я фронтенд-разработчик</span>
                <UiBtn class="section-header__works-btn" @click="goToComponent('#portfolio')">Последние работы</UiBtn>
                <UiBtn class="section-header__about-btn" theme="transparent" @click="goToComponent('#about')">Обо мне</UiBtn>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  methods: {
    goToComponent(elem) {
      const $target = document.querySelector(elem)
      $target.scrollIntoView({
        behavior: "smooth"
      })
    }
  }
}
</script>

<style lang="scss" scoped>
    .section-header {
        width: 100%;
        background-image: linear-gradient(123.28deg, #423B28 53.4%, #816F43 106.32%);

        position: relative;
        @include md() {
            height: 100vh;
        }

        &:before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-image: url('~@/assets/images/header-bg-6.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            mix-blend-mode: screen;
            pointer-events: none;
            opacity: 0.1;
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
            padding: 80px 0;
            @include md() {
                padding: 0;
            }
        }
        &__title {
            text-align: center;
            font-weight: $weight--bold;
            color: $color--snow;
            @include adaptiveFont(30px, 48px);
            line-height: 1.2;
            @include md() {
                text-align: left;
            }
        }
        &__subtitle {
            text-align: center;
            color: #d8d8d8;
            text-transform: lowercase;
            font-weight: $weight--semi-bold;

            @include adaptiveFont(16px, 18px);
            line-height: 1.2;
            @include md() {
                text-align: left;
            }
        }
        &__works-btn {
            text-transform: lowercase;
            margin-top: 30px;
            @include md() {
                margin-top: 60px;
                max-width: 283px;
            }

        }
        &__about-btn {
            text-transform: lowercase;
            margin-top: 25px;
            @include md() {
                max-width: 283px;
            }
        }
    }
</style>
