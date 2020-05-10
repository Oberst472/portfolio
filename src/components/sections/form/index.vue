<template>
    <section class="section-form">
        <div class="wrap">
            <h3 class="section-form__title">Есть вопросы?</h3>
            <span class="section-form__subtitle">напишите мне</span>
            <form class="section-form__form" method="POST" @submit.prevent="sendForm">
                <label class="section-form__label">
                    <input type="text" class="section-form__inp" :class="{'section-form__inp--active': form.name.length}" v-model.trim="form.name">
                    <span class="section-form__placeholder">Ваше имя</span>
                </label>
                <label class="section-form__label">
                    <input type="text" class="section-form__inp" :class="{'section-form__inp--active': form.contact.length}" v-model.trim="form.contact">
                    <span class="section-form__placeholder">Контактные данные</span>
                </label>
                <UiBtn class="section-form__btn" :loading="isLoading" :disabled="btnDisabled">Отправить</UiBtn>
            </form>
            <p class="section-form__add-text" v-if="!isShowError">
                Оставьте свой телефон, e-mail или аккаунт в цоц. сетях и я обязательно вам отвечу
            </p>
            <p class="section-form__add-text section-form__add-text--error" v-else>Что то пошло не так! Попробуйте отправить форму еще раз!</p>
        </div>
        <div class="section-form__thanks" v-if="isShowThanks">
            <div class="wrap">
                <p>Спасибо. <br> Я отвечу вам в ближайшее время!</p>
            </div>
        </div>
    </section>
</template>

<script>
  export default {
    data () {
      return {
        isLoading: false,
        form: {
          name: '',
          contact: ''
        },
        isShowThanks: false,
        isShowError: false
      }
    },
    computed: {
      btnDisabled () {
        return !this.form.name.length || !this.form.contact.length
      }
    },
    methods: {
      async sendForm () {
        this.isLoading = true
        try {
          let url = 'https://formspree.io/xvowppno'
          const resp = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.form)
          })
          resp.ok ? this.showThanks() : this.showError()
        } catch (e) {
          console.info(e)
          this.showError()
        }
        this.formReset()
      },
      showThanks () {
        this.isShowThanks = true
        this.isShowError = false
      },
      showError () {
        this.isShowThanks = false
        this.isShowError = true
      },
      formReset () {
        this.isLoading = false
        this.form.name = ''
        this.form.contact = ''
      }
    },
    watch: {
      form: {
        handler() {
            if((this.isShowError && this.form.name.length) || (this.isShowError && this.form.contact.length)) {
              this.isShowError = false
            }
        },
        deep: true
      }
    }
  }
</script>

<style scoped lang="scss">
    .section-form {
        background-color: #2B3742;
        padding: $gutter 0;
        position: relative;

        &__title {
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
            &--error {
                color: $color--negative
            }
        }

        &__thanks {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: #2B3742;
            color: $color--text-light;
            display: flex;
            -ms-flex-direction: column;
            align-items: center;

            p {
                @include adaptiveFont(16px, 36px);
                line-height: 1.2;
            }
        }

    }
</style>
