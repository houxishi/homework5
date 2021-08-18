<template>
    <div class="u-menu">
      <el-menu style="width: 100%" v-for="v in menus" :key="v.name" :router="true" :default-active="v.path">
        <el-menu-item :index="v.path" v-if="!v.children || v.children.length === 0">
        {{v.meta.title}}
        </el-menu-item>
        <el-submenu :index="v.path" v-else>
          <span slot="title">
            <span>{{v.meta.title}}</span>
          </span>
          <el-menu-item :index="v.path+'/'+ w.path" :key="w.name" v-for="w in v.children">
            <i class="u-menu-icon" :class="w.meta.icon"></i>
            {{w.meta.title}}
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
</template>

<script>

// import menus from '../../../../config/menus'
// import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import asyncRouter  from '../router/dynamic.js'

export default {
  name: 'index',
  watch: {

  },
  data () {

    return {
      menus: asyncRouter,
    }
  },
  methods: {

  },
  computed: {

  }
}
</script>
