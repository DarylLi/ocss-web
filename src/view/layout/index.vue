<template>
  <div class="app-wrapper">
    <div class="mainFrame" v-if="curPath!='/chatPanel'&&curPath!='/'&&curPath!='/chatList'">
      <sideBar :class='{"extends":mode=="extends","sideShow":sideShow==true}'></sideBar>
    </div>
    <v-toolbar color="#ff6632" dark class="mx-auto" v-if="curPath=='/chatPanel'||curPath=='/chatList'||curPath=='/'">
      <v-card-title v-if="curPath!='/'" class="title font-weight-regular">{{curPath=='/chatList'?'会话列表':`与${curAgent.tenantId}聊天中`}}</v-card-title>
      <v-text-field class="agentChoose" v-if="curPath=='/chatList'" v-model='tenantId' flat @keyup.enter.native='selectAgent({
        tenantId:tenantId,
        contextId:"",
        status:0
      })' @click:prepend-inner='selectAgent({
        tenantId:tenantId,
        contextId:"",
        status:0
      })' label="输入客服ID" prepend-inner-icon="search" solo-inverted></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon @click='back(curPath)' v-if="curPath=='/chatPanel'">
        <v-icon>mdi-reply</v-icon>
      </v-btn>
      <v-btn icon @click='logout' v-if="curPath!='/'">
        <v-icon>mdi-exit-run</v-icon>
      </v-btn>
    </v-toolbar>
    <blockedUI v-if='!pageLoaded'></blockedUI>
    <App-main :class='{"sideShow":sideShow==true}'></App-main>
    <!-- <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}"> -->
    <!-- <div :class="{'sidebar-wrapper':true,'toggle':toggleFlag}" @mouseenter="sideHover" @mouseleave="sideLeave">
      <Sidebar class="sidebar-container"></Sidebar>
    </div> -->
    <!-- <Navbar @toggleSide='toggleSide'></Navbar> -->
    <!--     <div class="main-container" :class="{hover:hoverSide,'toggle':toggleFlag}">
      <App-main></App-main>
    </div>
    <transition name="fade" mode="out-in">
      <blockUI v-if="blocked"></blockUI>
    </transition>
    <devChecker></devChecker> -->
  </div>
</template>
<script>
import AppMain from './AppMain'
import sideBar from './sidebar'
import blockedUI from '../../components/blocked'
import store from 'store'
import { mapGetters } from 'vuex'
export default {
  name: 'layout',
  components: {
    AppMain,
    sideBar,
    blockedUI
  },
  data () {
    return {
      hoverSide: false,
      mobileFlag: false,
      toggleFlag: false,
      showChecker: false,
      fav: true,
      menu: false,
      message: false,
      hints: true,
      cur_linked: 0,
      tenantId: ''
    }
  },
  computed: {
    ...mapGetters(['admins', 'cruds', 'mode', 'sideShow', 'curUser', 'pageLoaded', 'curPath', 'curAgent'])
  },
  created () {},
  methods: {
    logout () {
      store.commit('SET_CURPATH', '/')
      store.commit('SET_SIDE_SHOW', false)
      store.commit('SET_PAGE_LOADED', true)
      store.commit('SET_USER', {})
      store.commit('SET_MESSAGE_LIST', [])
      this.$router.push('/')
    },
    linkUrl (url) {
      this.commonMethods.linkUrl(url)
      // this.$router.push(url)
    },
    toggleClass () {
      store.getters.mode === 'normal' ? store.commit('SET_MODE', 'extends') : store.commit('SET_MODE', 'normal')
    },
    toggleSide () {
      store.commit('SET_SIDE_SHOW', !store.getters.sideShow)
    },
    back (curPath) {
      this.linkUrl('/chatList')
    },
    selectAgent (data) {
      this.chooseAgent(data)
      this.tenantId = ''
    }
  }
}

</script>
<style rel="stylesheet/scss" lang="scss">
@import "src/styles/component.scss";

.app-wrapper {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;

  .mx-auto {
    @include fixedBar;

    .primary--text {
      caret-color: rgb(255, 102, 50) !important;
      color: rgb(255, 102, 50) !important;
    }

    .agentChoose {
      width:calc(100% - 80px);
      .v-input__slot {
        margin-bottom: 0px;
      }

    }

    .v-card__title {
      width: 130px !important;
      font-size: 18px !important;
      padding: 5px;
    }
  }

  button {
    text-transform: none !important;
  }

  .mainFrame {
    width: 100%;
    height: 64px;
    position: relative;

    .v-toolbar {
      z-index: 12;
    }

    .v-toolbar__content {
      .v-menu__content {
        right: 0px;
        left: auto !important;
      }
    }

    .toolbarSwitch {
      transform: rotate(-90deg);
    }

    .toolbarSwitch.sideShow {
      transform: rotate(0deg);
    }

    .slideControl {
      width: 100px;
      position: absolute;

      .v-btn {
        color: $lightblue;
      }

      .v-icon {
        color: $lightblue;
      }

      left: 50%;
      transform: translate(-50px, 0)
    }

    .slideControl.extendsMouse {
      .v-btn {
        color: white;
      }

      .v-icon {
        color: white;
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #7bc6ff, 0 0 30px #7bc6ff, 0 0 40px #7bc6ff, 0 0 50px #7bc6ff, 0 0 75px #7bc6ff
      }

      .v-btn__content {
        color: white !important;
      }

      .v-ripple__container {
        color: white !important;
        background-color: white !important;
        display: none;
      }
    }
  }

  .theme--light {
    .button-group {
      background-color: #f5f5f5;
    }
  }
}

</style>
