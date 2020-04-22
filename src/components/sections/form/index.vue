<template>
    <section class="section-form">
        <div class="wrap">
            <h3 class="section-form__title">Есть вопросы?</h3>
            <span class="section-form__subtitle">напишите мне</span>
            <form action="" class="section-form__form">
                <label class="section-form__label">
                    <input type="text" class="section-form__inp">
                    <span class="section-form__placeholder">Ваше имя</span>
                </label>
                <label class="section-form__label">
                    <input type="text" class="section-form__inp">
                    <span class="section-form__placeholder">Контактные данные</span>
                </label>
                <UiBtn class="section-form__btn">Отправить</UiBtn>
            </form>
            <p class="section-form__add-text">Оставьте свой телефон, e-mail или аккаунт в цоц. сетях и я обязательно вам отвечу</p>
        </div>
    </section>
</template>

<script>
    export default {

    }
</script>

<style scoped lang="scss">
.section-form {
    background-color: #2B3742;
    padding: $gutter 0;
    &__title {
        font-size: 36px;
        @include adaptiveFont(16px, 36px);
        line-height: 1.2;
        color: $color--text-light;


    }
    &__subtitle {
        @include adaptiveFont(12px, 24px);
        line-height: 1.2;
        color: #D8D8D8;
    }
    &__form {
        margin-top: $gutter;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: $gutter;
    }
    &__label {
        position: relative;
        display: block;
        overflow: hidden;
    }
    &__placeholder {
        position: absolute;
        top: 50%;
        font-size: 18px;
        color: #E1E1E1;
        transform: translateY(-50%);
        left: $gutter;
        transition-duration: 0.3s;
        pointer-events: none;
    }
    &__inp {
        border: 0;
        padding: 5px $gutter;
        box-sizing: border-box;
        width: 100%;
        display: block;
        outline: none;
        height: 82px;
        color: #E1E1E1;
        font-size: 14px;
        background-color: rgba(255, 255, 255, 0.3);
        &:focus {
            & ~ .section-form__placeholder {
                margin-top: -50px;
                opacity: 0;
            }
        }
        &--active {
            & ~ .section-form__placeholder {
                display: none;
            }
        }
    }
    &__btn {
        font-size: 14px;
        height: 82px !important;
    }
    &__add-text {
        @include adaptiveFont(12px, 16px);
        line-height: 1.2;
        color: #D8D8D8;
        margin-top: $gutter;
    }

}
</style>
