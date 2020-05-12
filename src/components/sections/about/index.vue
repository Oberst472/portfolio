<template>
    <div class="section-about" id="about">
        <div class="wrap">
            <div class="section-about__content">
                <div class="section-about__photo-box">
                    <div class="section-about__photo-sub-box">
                        <img alt="Фото" class="section-about__photo" src="@/assets/images/photo.jpg">
                    </div>
                    <p class="section-about__desc">
                        Привет, меня зовут Александр. <br> Я люблю web и я фронтенд-разработчик.
                    </p>
                </div>
                <div class="section-about__desc-box">
                    <h3 class="section-about__title">Что я умею?</h3>
                    <BlockAddInfo/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import BlockAddInfo from './add'

  export default {
    components: {
      BlockAddInfo
    },
    data () {
      return {
        isActive: false
      }
    },
  }
</script>

<style scoped lang="scss">
    .section-about {
        width: 100%;
        background-image: linear-gradient(112deg, #87846A 30%, #ACAA95 100%);
        background-repeat: no-repeat;

        &__content {
            box-sizing: border-box;
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: $gutter / 2;
            padding-top: $gutter;
            padding-bottom: $gutter;
            @include md() {
                grid-template-columns: 350px 1fr;
                grid-gap: $gutter;
                padding-top: $gutter * 2;
                padding-bottom: $gutter * 2;
            }

        }

        &__photo-box {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 0 $gutter * 2;
        }

        &__photo-sub-box {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 0;
            padding-bottom: 100%;
            @include md() {
                width: 100%;
            }
        }

        &__desc-box {
            flex-shrink: 0;
            display: inline-flex;
            flex-direction: column;
            justify-content: center;

        }

        &__btn {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
        }

        &__photo {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
            @include md() {
                border-radius: 50%;
            }
        }

        &__title {
            margin-top: $gutter;
            margin-bottom: $gutter / 2;
            font-size: 48px;
            line-height: 1;
            color: $color--text-light;
            text-align: center;

        }

        &__desc {
            @include adaptiveFont(14px, 16px);
            margin-top: $gutter / 2;
            margin-bottom: $gutter / 2;
            color: #E4E4E4;
            text-align: center;


        }

    }
</style>
