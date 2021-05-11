<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-item to="/second-page" exact clickable class="background">
        <q-img
          src="../assets/page1/petraLogo.png"
          style=" 
            position: absolute; 
            top: 44px;
            left: 46px;
            width: 165px;
            height: 116px;"
        />
        <q-img
          src="../assets/page1/text-group.png"
          style="position: absolute; top:50%; left: 50%; transform: translate(-50%, -50%); width: 713px;
        height: 392px; z-index: 1;"
        />
      </q-item>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {};
</script>

<style scoped>
.background {
  height: 100vh;
  width: 100vw;
  background-image: url("../assets/page1/Layer-1.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
