<template>
  <div id="app" class='bg-light'>
    <app-navbar></app-navbar>
    <section >
      <app-intro></app-intro>
      <hr class="container d-none d-lg-block" style='margin-top: 150px; margin-bottom: 150px'>
      <app-gigs></app-gigs>
      <hr class="container d-none d-lg-block" style='margin-top: 150px; margin-bottom: 150px'>
      <app-skills></app-skills>
      <hr class="container d-none d-lg-block" style='margin-top: 150px; margin-bottom: 150px'>
      <app-forms></app-forms>
    </section>
    <app-footer></app-footer>
  </div>
</template>

<script>

export default {
  data() {
    return {

    }
  }
}
</script>

<style>
hr {
  margin-top: 150px;
  margin-bottom: 150px;
}

section {
  padding-top: 100px;
  padding-bottom: 70px;
}

</style>


