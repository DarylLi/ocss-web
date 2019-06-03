<template>
  <div class="chattingForm">
    <v-app id="inspire">
      <v-form onSubmit="return false;">
        <v-container>
          <v-layout row wrap justify-center>
            <v-flex xs12 sm12 md8>
              <v-btn class='uploadBtn' flat icon v-model="filename" :label="label" :required="required" @click.native="onFocus" :disabled="disabled" ref="fileTextField">
                <v-icon>mdi-folder</v-icon>
              </v-btn>
              <v-btn class='emojiBtn' flat icon v-model="filename" :label="label" :required="required" @click.native="chooseEmoji" :disabled="disabled" ref="fileTextField">
                <v-icon>{{showEmoji?'mdi-emoticon-cool':'mdi-emoticon-happy'}}</v-icon>
              </v-btn>
              <input type="file" :accept="accept" :multiple="false" :disabled="disabled" ref="fileInput" @change="onFileChange">
              <v-text-field v-model="message" append-outer-icon="mdi-send" :prepend-icon="icon" box clear-icon="mdi-close-circle" clearable label="输入内容" type="text" @click:append-outer="sendMessage(message)" @keyup.enter.native="sendMessage(message)" @click:prepend="changeAgent" @click:clear="clearMessage"></v-text-field>
            </v-flex>
          </v-layout>
          <v-fade-transition class="py-0" group tag="v-list">
            <VEmojiPicker key='312' v-if='showEmoji' :pack="pack" @select="selectEmoji" style='position:absolute;bottom:132px;left:10px;' />
          </v-fade-transition>
        </v-container>
        <!-- <transition name="fade" mode="out-in"> -->
        <!-- </transition> -->
      </v-form>
      <div>
      </div>
    </v-app>
  </div>
</template>
<script>
import store from 'store';
import { uploadImg } from '@/api'
import VEmojiPicker from 'v-emoji-picker';
import packData from 'v-emoji-picker/data/emojis.json';
export default {
  props: {
    value: {
      type: [Array, String]
    },
    accept: {
      type: String,
      default: "*"
    },
    label: {
      type: String,
      default: "Please choose..."
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean, // not yet possible because of data
      default: false
    }
  },
  data() {
    return {
      password: 'Password',
      pack: packData,
      filename: "",
      show: false,
      message: '',
      messageObj: {
        content: '',
        type: 'TEXT'
      },
      showEmoji: false,
      marker: true,
      iconIndex: 0,
      icons: [
        // 'mdi-emoticon',
        // 'mdi-emoticon-dead',
        // 'mdi-emoticon-cool'
        'mdi-access-point-network-off',
        'mdi-access-point-network'
        // 'mdi-emoticon-excited',
        // 'mdi-emoticon-happy',
        // 'mdi-emoticon-neutral',
        // 'mdi-emoticon-sad',
        // 'mdi-emoticon-tongue'
      ]
    }
  },
  created() {},
  mounted() {
    this.filename = this.value;
    void(!store.getters.curAgent.contextId ? (() => {
      store.commit('SET_AGENT', {
        tenantId: store.getters.curAgent.tenantId,
        contextId: '',
        status: store.getters.MessageList.length > 0 ? this.revert(store.getters.MessageList[store.getters.MessageList.length - 1].status) : 0
      })
    })() : '')
  },
  watch: {
    value(v) {
      this.filename = v;
    }
  },
  computed: {
    icon() {
      return this.icons[store.getters.curAgent.status]
    },
    rules() {
      const rules = [];
      const rule =
        v => (this.$_.trim(v) || '').indexOf(' ') < 0 ||
        'No spaces are allowed'
      rules.push(rule)
      return rules
    }
  },
  components: {
    VEmojiPicker
  },
  methods: {
    revert(val) {
      return val == 0 ? 1 : 0;
    },
    toggleMarker() {
      this.marker = !this.marker
    },
    sendMessage(message) {
      this.resetIcon()
      this.clearMessage()
      this.messageObj.content = message;
      void(this.$_.trim(message) ? this.$emit('sendMessage', this.messageObj) : '')
      this.messageObj.type = 'TEXT';
    },
    clearMessage() {
      this.message = ''
    },
    resetIcon() {
      this.iconIndex = 0
    },
    changeAgent() {
      store.getters.curAgent.status == 1 ? this.$emit('closeChat') : this.$emit('requestAgent');
      this.iconIndex === this.icons.length - 1 ?
        this.iconIndex = 0 :
        this.iconIndex++
    },
    getFormData(files) {
      const data = new FormData();
      [...files].forEach(file => {
        data.append('data', file, file.name); // currently only one file at a time
      });
      return data;
    },
    onFocus() {
      if (!this.disabled) {
        this.$refs.fileInput.click();
      }
    },
    chooseEmoji() {
      this.showEmoji = !this.showEmoji;
    },
    selectEmoji(emoji) {
      this.message += emoji.emoji;
      this.showEmoji = false;
    },
    onFileChange($event) {
      const files = $event.target.files || $event.dataTransfer.files;
      store.commit('SET_PAGE_LOADED', false)
      let formData = new FormData();
      for (var index in files) {
        formData.append('img', files[index]);
      }
      uploadImg(formData).then(res => {
        if (res.object.length > 0) {
          res.object.forEach(e => {
            this.messageObj.type = 'IMAGE';
            this.sendMessage(JSON.stringify(e))
            store.commit('SET_PAGE_LOADED', true)
          })
        }
      })
      // this.$emit('input', this.filename);
      // this.$emit('formData', form);
    }
  }
}

</script>
<style lang="scss">
@import "src/styles/mixin.scss";

.chattingForm {
  position: fixed;
  width: 100%;
  bottom: 0px;
  height:116px;
  .flex {
    position: relative;
  }

  .primary--text {
    caret-color: rgb(255, 102, 50) !important;
    color: rgb(255, 102, 50) !important;
  }

  .mdi-emoticon-cool,
  .mdi-access-point-network,
  .mdi-folder {
    color: rgb(255, 102, 50) !important;
  }

  .mdi-emoticon-dead,
  .mdi-access-point-network-off {
    color: rgba(0, 0, 0, .54) !important;
  }

  .v-text-field {
    margin-left: 60px;
    color: #fff;
  }

  .uploadBtn {
    position: absolute;
    top: 14px;
    left: -10px;
  }

  .emojiBtn {
    position: absolute;
    top: 14px;
    left: 22px;
    color: rgba(0, 0, 0, 0.54) !important;
  }

  input[type=file] {
    position: absolute;
    left: -99999px;
  }

  .theme--light.v-text-field>.v-input__control>.v-input__slot:before {
    background: #fff !important;
    border-color: #fff !important;
  }

  .theme--light.v-text-field--box:not(.v-input--is-focused)>.v-input__control>.v-input__slot:hover:before {
    background: rgb(255, 102, 50) !important;
    border-color: rgb(255, 102, 50) !important;
  }


  .fadeIn-enter-active,
  .fadeIn-leave-active {
    transition: all .3s ease;
  }

  .fadeIn-enter-active,
  .fadeIn-leave {
    opacity: 1;
  }

  .fadeIn-enter,
  .fadeIn-leave-active {
    opacity: 0;
  }

  #EmojiPicker {
    transition: all .3s;
  }
  .v-form{
    .container{
      position:relative;
    }
  }
}

</style>
