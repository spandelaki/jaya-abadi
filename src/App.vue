<template>

  <div class="md:flex flex-col md:flex-row min-h-screen w-full">
      <Sidebar :color="color"></Sidebar>
      <div class="px-10 w-full">
        <router-view/>
      </div>
  </div>

</template>

<style type="text/css">

*{
  font-family: "Gilroy"
}

input:focus, textarea:focus, select:focus{
  outline: none;
}

.pointer{
  cursor: pointer;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

/* width */
::-webkit-scrollbar {
  width: 3px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
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

