<template>
  <v-layout class='chatingList' row>
    <v-flex xs8 sm8>
      <v-card v-if='curUser.contextList&&curUser.contextList.length>0'>
        <!-- <v-toolbar color="#ff6632" dark class="mx-auto">
          <v-card-title class="title font-weight-regular">会话列表</v-card-title>
        </v-toolbar> -->
        <v-list two-line class="chatPanel">
          <template v-for="(item, index) in curUser.contextList">
            <v-subheader v-if="item.header" :key="item.header">
              {{ item.header}}
            </v-subheader>
            <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>
            <v-list-tile v-else :key="item.tenantId+index" avatar @click="chooseAgent(item)">
              <v-list-tile-avatar>
                <v-badge left color="red" v-if='messageUpdate[item.contextId]>0'>
                  <template v-slot:badge>
                    <span>{{messageUpdate[item.contextId]}}</span>
                  </template>
                </v-badge>
                <img :src="require('@/assets/out.png')">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>
                  <span class='agentId'>{{item.tenantId}}</span>
                  {{(item.chatMessage&&item.chatMessage.type!=='IMAGE'?`${item.chatMessage.content}`:'[图片]')}}
                </v-list-tile-title>
                <v-list-tile-sub-title v-html="formatDate(item.time)"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
      <div class="empty" v-else>
        <div>暂无内容</div>
        <v-icon>mdi-comment-outline</v-icon>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
import store from 'store';
import { mapGetters } from 'vuex';
import { actionStartChating } from '@/api'
import { getContext } from '@/api'
export default {
  data() {
    return {
      socket: null
    }
  },
  computed: {
    ...mapGetters(['curUser', 'curAgent']),
    messageUpdate() {
      return store.getters.messageUpdate
    }
  },
  updated() {
    // this.$nextTick(() => {
    //   getContext(this.curUser.userId).then(res => {
    //     if (res.object.length > 0) {
    //       store.commit('SET_USER', {
    //         nickname: this.curUser.nickname,
    //         userId: this.curUser.userId,
    //         contextList: res.object
    //       });
    //     }
    //   })
    // })
  },
  watch: {
    // messageUpdate(val) {
    // }
  },
  mounted() {
    // this.socket = actionStartChating({
    //    id: this.curUser.userId,
    //    nickname: this.curUser.nickname,
    //  });
    if (this.messageUpdate) getContext(this.curUser.userId).then(res => {
      // if (res.object.length > 0) {
        let chatList = res.object;
        let nameList = this.$_.uniq(chatList.map(e => e.tenantId));
        let result = [];
        nameList.forEach(e => {
          result.push(this.$_.sortBy(chatList.filter(item => item.tenantId == e), (sort) => {
            return sort.time
          })[0])
        })
        store.commit('SET_USER', {
          nickname: this.curUser.nickname,
          userId: this.curUser.userId,
          contextList: this.$_.sortBy(res.object, function(item) {
            return item.time;
          })
        });

        // store.commit('SET_MESSAGE_UPDATE', false)
      // }
    })
  }
}

</script>
<style lang="scss">
@import "src/styles/component.scss";

.app-main {
  .routerPanel.chatingList {
    padding-top: 0px;
    margin-top: 10px;
    display: flex;
    justify-content: center;

    .chatPanel {
      margin-top: 66px;
    }

    .v-list__tile {
      .v-badge__badge {
        left: -15px;
        top: -25px;
      }
    }

    .v-list__tile__title {
      font-size: 14px;

      .agentId {
        font-size: 16px;
        margin-right: 20px;
      }
    }

    .empty {
      height: 100%;
      display: flex;
      color: #333;
      font-size: 20px;
      align-items: center;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .v-icon {
        font-size: 30px !important;
      }
    }
  }

}

</style>
