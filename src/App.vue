<template>
  <div id="app">
    <header>
      <SectionHeader/>
    </header>
      <main>
      <SectionPortfolio />
        <SectionAbout />
      <SectionForm />
      </main>
    <footer>
      <SectionFooter />
    </footer>
  </div>
</template>

<script>
import SectionHeader from '@/components/sections/header'
import SectionPortfolio from '@/components/sections/portfolio'
import SectionForm from '@/components/sections/form'
import SectionAbout from '@/components/sections/about'
import SectionFooter from '@/components/sections/footer'

export default {
  components: {
    SectionHeader,
    SectionPortfolio,
    SectionForm,
    SectionFooter,
    SectionAbout
  }
}
</script>

<style lang="scss">
</style>
