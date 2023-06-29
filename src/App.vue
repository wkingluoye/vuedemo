<template>
  <div class="common-layout full-container">
    <el-container class="full-container">
      <el-header height="160px">
        <ToolHeader/>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <!--           MENU-->
          <el-row class="tac">
            <el-col :span="12">
              <el-menu
                  active-text-color="#ffd04b"
                  background-color="#545c64"
                  class="el-menu-vertical-demo full-container"
                  :default-active="this.$route.path"
                  text-color="#fff"
                  @open="handleOpen"
                  @close="handleClose"
                  @select="handleSelect"
                  router>
                <el-menu-item index="/">
                  <el-icon>
                    <Management/>
                  </el-icon>
                  <span>灵魂模拟器</span>
                </el-menu-item>
                <el-menu-item index="/question">
                  <el-icon>
                    <Search/>
                  </el-icon>
                  <span>答题器</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>
          <!--          Content-->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import ToolHeader from "@/components/ToolHeader";

export default {
  name: 'App',
  data() {
    return {
      selectedPath: '/',
    }
  },
  components: {
    ToolHeader,
  },
  methods: {
    handleOpen(key, keyPath) {
      this.showLog("handleOpen", key, keyPath)
    },
    handleClose(key, keyPath) {
      this.showLog("handleClose", key, keyPath)
    },
    handleSelect(key, keyPath) {
      this.showLog("handleSelect", key, keyPath)
    }
  },
  created(){
    this.showLog("主页面", "页面开始创建中")
  },
  mounted() {
    this.showLog("主页面", "Mounted")
    // let menu = this.menus.filter(e => e.url === path);
    // if (menu.length > 0) {
    //   this.addTab(menu[0].id, menu[0].name);
    // }
  },
  watch: {
    // editableTabsValue: {
    //   immediate: true,
    //   handler(val, oldVal) {
    //     console.log("watch editableTabsValue:", val, oldVal)
    //     console.log("watch cookie editableTabsValue:" + this.$cookies.get("editableTabsValue"))
    //     if (val && val != oldVal) {
    //       this.$cookies.set("editableTabsValue", val)
    //       console.log("Mounted set cookie editableTabsValue:", val)
    //     }
    //
    //   }
    // },
    // $route(){
    //   console.log("$route:", this.selectedPath)
    //   this.handleSelect(this.selectedPath,this.selectedPath)
    // }
  }
}
</script>

<style>
body {
  background: url("./assets/bt_bj.jpg");
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  margin: 0;
  padding: 0;
}

.full-container {
  height: 100%
}


/*MENU*/

.el-row {
  height: 100%;
  width: 100%;
  display: block;
}

.el-col-12 {
  max-width: 100%;
  height: 100%;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  height: 100%;
  margin-top: auto;
  margin-bottom: auto;
}
</style>
