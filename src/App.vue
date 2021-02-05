<template>

  <div class="md:flex flex-col md:flex-row min-h-screen w-full">
      <Sidebar :color="color"></Sidebar>
      <div class="px-8">
        <router-view/>
      </div>
  </div>

</template>

<style type="text/css">

*{
  font-family: "Gilroy"
}

.pointer{
  cursor: pointer;
}

</style>

<script>
import Sidebar from "./components/sidebar.vue";

export default {
  data(){
    return{
      color : {
        primary : "#43c079"
      },
    }
  },
  components : {
    Sidebar
  }
}

</script>

