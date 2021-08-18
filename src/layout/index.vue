<template>
  <div class="box">
    <div class="aside">
      <Leftnav></Leftnav>
    </div>
    <div class="right">
      <div class="header"><Header></Header></div>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script>

import Header from './Header.vue'
import Leftnav from './Leftnav.vue'
// import asyncRouter  from '../router/dynamic.js'

// import { mapGetters } from 'vuex'

export default {
  name: 'Layout',
  components: {
    Leftnav,
    Header
  },
  data(){
  },
  methods: {
  }
}
</script>

<style scoped>
.box {
    position: absolute;
    display: flex;
    width: 100%;
    min-height: 100%;
}

.aside {
    width: 260px;
    /* border: 1px solid black; */
    margin-right: 5px;
    padding-top: 70px;
    text-align: center;
}

/* input{
  height: 30px;
  width: 100px;
  margin-top: 30px;
}

.two{
  margin-bottom: 70px;
} */

.right {
    display: flex;
    width: 100%;
    flex-direction: column;
}

.header {
    border: 1px solid black;
    height: 80px;
    margin-bottom: 5px;
}

main {
    border: 1px solid black;
    min-height: 90%;
    text-align: center;
}
</style>
