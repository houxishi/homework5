<template>
  <header class="u-header">
    <div class="u-header--left">
      头部
    </div>
  </header>
</template>

<script>
// import { mapState, mapActions } from 'vuex'

export default {
  name: 'index',
  data () {
    return {
      // breadcrumbs: []
    }
  },
  watch: {
    // $route (val) {
    //   this.breadcrumbs = this.getBreadcrumbs(val.path, this.menus)
    // }
  },
  mounted () {
    // this.breadcrumbs = this.getBreadcrumbs(this.$route.path, this.menus)
  },
  methods: {
    // ...mapActions(['LOGOUT']),
    // getBreadcrumbs (path, menus) {
    //   if (!menus) {
    //     return
    //   }
    //   const length = menus.length
    //   const breadcrumbs = []
    //   for (let i = 0; i < length; i++) {
    //     if (menus[i].children && menus[i].children.length) {
    //       const items = this.getBreadcrumbs(path, menus[i].children)
    //       if (items && items.length) {
    //         breadcrumbs.push({
    //           title: menus[i].title,
    //           icon: menus[i].icon
    //         }, ...items)
    //         return breadcrumbs
    //       }
    //     } else {
    //       if (menus[i].path === path) {
    //         return [{
    //           title: menus[i].title,
    //           icon: menus[i].icon
    //         }]
    //       }
    //     }
    //   }
    //   return null
    // },
    // my () {
    //   this.$router.push('/admin/profile')
    // },
    // logout () {
    //   sessionStorage.clear()
    //   this.LOGOUT()
    //   this.$router.push('/')
    // }
  },
  computed: {
    // ...mapState({
    //   profile: state => state.profile,
    //   menus: state => state.layout.menus
    // })
  }
}
</script>
