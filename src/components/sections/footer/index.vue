<template>
    <section class="section-footer">
        <div class="wrap">
            <div class="section-footer__content">
                <span class="section-footer__copyr">&copy; 2020</span>
                <span class="section-footer__love">
                    i +  <img class="section-footer__icon" src="@/assets/images/code.svg" alt="Сердце"> =
                    <img class="section-footer__icon section-footer__icon-heart" src="@/assets/images/heart.svg" alt="Сердце">
                </span>
            </div>
        </div>
    </section>
</template>

<script>
  export default {}
</script>

<style scoped lang="scss">
    .section-footer {
        background-image: linear-gradient(112.72deg, #87846A 17.66%, #ACAA95 98.41%);;

        &__content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 60px;
            color: $color--text-light;
            @include md() {
                height: 80px;
            }
        }

        &__copyr {
            font-size: 16px;
            font-weight: 300;
        }

        &__love {
            display: inline-flex;
            font-size: 18px;
            font-weight: 300;
        }

        &__icon {
            width: 16px;
            margin: 0 5px;

            &-heart {
                animation-name: heart;
                animation-duration: 2s;
                animation-iteration-count: infinite;
            }
        }
    }
</style>
