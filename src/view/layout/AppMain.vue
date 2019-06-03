<template>
  <div class="app-main">
    <transition name="move" mode="out-in">
      <router-view class="routerPanel"></router-view>
    </transition>
    <div v-if="curPath!='/chatPanel'" class="footer" style="width:100%;margin:0 auto;height:60px;z-index:8;background:#fff !important;color:#666;padding:auto;text-align:center;">
      <div style="display:flex;align-self:flex-end;width:100%;height:100%;justify-content:center;align-items:center;">Copyright 2017-2028 </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AppMain',
  props: {
    modeLayout: {
      default: 1
    },
  },
  computed: {
    ...mapGetters(['curPath']),
    key() {
      return this.$route.name !== undefined ?
        this.$route.name + +new Date() :
        this.$route + +new Date()
    }
  },
  watch: {
    '$route'(to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },
  components: {}
}

</script>
<style rel="stylesheet/scss" lang="scss">
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  display: none;
  transition: opacity 3s;
}

.app-main {
  background: #fafafa;
  margin-left: 0px;
  margin-right: 0px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  transition: all .3s;
  height: 100%;

  .routerPanel {
    padding-top: 10px;
    flex: 1;

    overflow-y: auto;
    width: 100%;

    #app {
      justify-content: normal;
      align-items: normal;
    }
  }

  button {
    text-transform: none;
  }

  .application--wrap {
    min-height: auto !important;
  }
}

.app-main.sideShow {
  margin-left: 300px;
}

@media(max-width: 768px) and (min-width:375px) {
  .app-main.sideShow {
    margin-left: 0px;
  }
}

.app-main .move-leave-active {
  transition: all .1s;
}

.app-main .move-enter-active {
  transition: all .3s;
}


.app-main .move-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.app-main .move-leave-to {
  transform: translateX(90px);
  /** transform-style: preserve-3d;
    -webkit-transform: perspective(1000px) rotateX(0deg) rotateY(45deg);
    transform: perspective(1000px) rotateX(0deg) rotateY(45deg);**/
}

</style>
