<template>
  <div class="block-area-container" v-if='loadingState'>
    <v-progress-circular :size="50" color="white" indeterminate></v-progress-circular>
  </div>
</template>
<script>
export default {
  props: { loadingState:false },
  data() {
    return {}
  },
  created() {},
  mounted() {

  },
  methods: {
    fckout() {
      alert('damn it!')
    }
  }
}

</script>
<style lang="scss">
@import "src/styles/mixin.scss";

.block-area-container {
  cursor: wait;
  width: 100%;
  height: 100%;
  background: rgba(32, 37, 45, 0.25) !important;
  position: absolute;
  top: 0px;
  z-index: 20000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  svg {
    width: 35px !important;
    height: 35px !important;
  }

  img {
    width: 35px !important;
    height: 35px !important;
  }

  .loading {
    color: #fff;
    animation: loading 1s linear infinite;
  }

  @keyframes loading {
    0% {
      transform: rotateZ(0deg)
    }

    100% {
      transform: rotateZ(-360deg)
    }
  }

  .loader-01 {
    border: .2em dotted currentcolor;
    border-radius: 50%;
    -webkit-animation: 1s loader-01 linear infinite;
    animation: 1s loader-01 linear infinite;
  }

  @-webkit-keyframes loader-01 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes loader-01 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  .box {
    display: inline-block;
    width: 200px;
    height: 200px;
    border: 0px solid #fff;
    border-radius: 3px;
    font-size: 30px;
    color: rgba(200, 200, 200, 0.5);
    padding: 1em;
    margin-bottom: .25em;
    vertical-align: top;
    -webkit-transition: .3s color, .3s border;
    transition: .3s color, .3s border;
  }

  .box:hover [class*="loader-"] {
    font-size: 70px;
    line-height: 200px;
  }

  [class*="loader-"] {
    display: inline-block;
    width: 1em;
    height: 1em;
    color: inherit;
    vertical-align: middle;
    pointer-events: none;
  }

  .loader-13:before,
  .loader-13:after,
  .loader-13 {
    font-size: 20px;
    border-radius: 50%;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation: loader-13 1.8s infinite ease-in-out;
    animation: loader-13 1.8s infinite ease-in-out;
  }

  .loader-13 {
    color: currentcolor;
    position: absolute;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
    top: 45%;
  }

  .loader-13:before {
    right: 100%;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  .loader-13:after {
    left: 100%;
  }

  .loader-13:before,
  .loader-13:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    width: inherit;
    height: inherit;
  }

  @-webkit-keyframes loader-13 {

    0%,
    80%,
    100% {
      box-shadow: 0 1em 0 -1em;
    }

    40% {
      box-shadow: 0 1em 0 -.2em;
    }
  }

  @keyframes loader-13 {

    0%,
    80%,
    100% {
      box-shadow: 0 1em 0 -1em;
    }

    40% {
      box-shadow: 0 1em 0 -.2em;
    }
  }
}

</style>
