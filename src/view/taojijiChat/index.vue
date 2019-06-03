<template>
  <v-app class="formLogin">
    <v-layout>
      <v-flex xs12>
        <v-card>
          <!-- <div> {{ card_text }} </div> -->
          <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px">
          </v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">登录</h3>
            </div>
          </v-card-title>
          <v-form v-model="valid" ref="form">
            <v-container>
              <v-flex xs12 md12>
                <v-text-field v-model="userId" :rules="idRules" label="用户id" required></v-text-field>
              </v-flex>
              <v-flex xs12 md12>
                <v-text-field v-model="nickname" :rules="nameRules" label="昵称" required></v-text-field>
              </v-flex>
              <v-btn color="#ff6632" style='color:#fff' @click='login'>
                登录
              </v-btn>
              <!-- <v-btn color="warning">
              Reset Validation
            </v-btn> -->
            </v-container>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-app>
</template>
<script>
import { getContext } from '@/api'
import store from 'store';
export default {
  data() {
    return {
      userId: '',
      nickname: '',
      valid: false,
      idRules: [
        v => !!v || '请输入用户id',
      ],
      nameRules: [
        v => !!v || '请输入用户昵称',
      ],
      socket: null
    }
  },
  created() {},
  mounted() {
    void(this.socketAgent ? (() => {
      this.socketAgent.socket.disconnect();
    })() : '')
  },
  methods: {
    login() {
      // this.$validator.validateAll()
      this.$refs.form.validate()
      if (this.valid) getContext(this.userId)
        .then(res => {
          void(res.object ? (() => {
            let chatList = res.object;
            let nameList = this.$_.uniq(chatList.map(e => e.tenantId));
            let result = [];
            nameList.forEach(e => {
              result.push(this.$_.sortBy(chatList.filter(item => item.tenantId == e), (sort) => {
                return sort.time
              })[0])
            })
            // this.$_.sortBy(res.object, function(item) {
            //    return item.time;
            //   });
            store.commit('SET_USER', {
              nickname: this.nickname,
              userId: this.userId,
              contextList: res.object
            });
            this.$router.push('chatList');
            console.log(this.socketAgent.rendered,'asdasd')
            !this.socketAgent.rendered?this.socketAgent.init({
              id: store.getters.curUser.userId,
              nickname: store.getters.curUser.nickname,
            }):''
          })() : "")
        })
    }
  }
}

</script>
<style lang="scss">
@import "src/styles/mixin.scss";

.formLogin {
  margin-top: 65px;

  .application--wrap {
    width: calc(80% - 40px);
    max-width: 800px;
  }

  @media(max-width: 768px) and (min-width:375px) {
    .application--wrap {
      width: 100%;
    }
  }
}

@media(max-width: 768px) and (min-width:375px) {
  .formLogin {
    margin-top: 45px;
  }
}

</style>
