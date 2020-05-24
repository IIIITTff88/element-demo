<template>
  <el-container id="content">
    <el-aside width="200px" class="scrollStyle">
      <div class="top">
        <img src="../assets/images/logo.png" alt="" width="30" height="">&nbsp;&nbsp;&nbsp;测试平台
      </div>
      <el-menu  class="aside" router>
        <el-submenu :index="items.index" v-for="(items, index) in menu" :key="index" class="menu-item">
          <template slot="title"><i :class="items.icon"></i>{{items.title}}</template>
          <el-menu-item-group>
            <el-menu-item :index="item.index" v-for="(item, index) in items.children" :key="index">
              <i :class="item.icon"></i>
              {{item.title}}
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <span class="icon iconfont iconguangbo" style="margin-right: 30px; color: #ffb268;font-size: 18px;"></span>
        <el-dropdown @click="goView('/test1-2')">
          <i class="el-icon-setting" style="margin-right: 15px;font-size: 18px;"></i>
          <el-dropdown-menu slot="dropdown">
            <router-link to="/user">
              <el-dropdown-item>个人中心</el-dropdown-item>
            </router-link>
            <el-dropdown-item @click="goView('/test1-3')">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>

      <el-main class="scrollStyle">
        <router-view></router-view>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import menu from '../static/menu'
export default {
  name: 'layout.vue',
  data () {
    return {
      menu: menu
    }
  },
  created () {
    console.log(menu)
  },
  methods: {
    goView (path) {
      console.log(path)
      this.$router.push(path)
    }
  }
}
</script>
<style lang="scss">
  .el-header {
    /*background-color: red;*/
    border-bottom: 1px solid #C0C4CC;
    line-height: 60px;
    background: linear-gradient(to right, #555314, cyan);
  }
  .el-footer {
    border-top: 1px solid #ddd;
    line-height: 60px;
    text-align: center;
  }

  .el-aside {
    height: 100vh;
    border-right: 1px solid #C0C4CC;
    overflow-x: hidden;
    background: linear-gradient(to top, #555314, cyan);
    .top {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      font-weight: 500;
      vertical-align: middle;
    }
    /*background: #5cadff;*/
    .aside {
      font-size: 24px;
      border-right: none;
      background: none;
      >>> .el-menu,.el-menu--inline {
        background: none;
      }
      >>> .el-menu--inline {
        /*background: linear-gradient(to top, black, cyan);*/
      }
      .el-submenu .el-menu {
        background: none;
        font-size: 20px;
      }
      .el-menu-item.is-active {
        color: #fff;
        background: rebeccapurple;
      }
    }
  }
  #content {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    >>> .el-menu-item-group {
      background: none;
    }
  }

</style>
