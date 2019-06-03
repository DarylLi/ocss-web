<template>
  <div class="block-container">
    <!-- <img src="../views/img/logo_flash.png" class="loading"></Icon> -->
    <!-- <Icon icon-name="sync" class="loading"></Icon> -->
    <!-- logo_flash.png -->
    <!-- <div class="loader-13"></div> -->
    <!-- <v-progress-circular :size="50" color="white" indeterminate></v-progress-circular> -->
    <div class="v-spinner">
      <div class="v-moon v-moon1" style="height: 60px; width: 60px; border-radius: 100%;">
        <div class="v-moon v-moon2" style="border-radius: 100%; width: 8.57143px; height: 8.57143px; background-color: #fff; top: 25.7143px;">
        </div>
        <div class="v-moon v-moon3" style="border-radius: 100%; width: 60px; height: 60px; border: 8.57143px solid #0078ff;">
        </div>
      </div>
    </div>
    <!--         <div class="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  created() {},
  mounted() {

  },
  methods: {}
}

</script>
<style lang="scss">
@import "src/styles/mixin.scss";

.block-container {
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
  .v-spinner{
  }
  .v-progress-circular {
    top: -10px;
    left: 150px;
  }

  @media(max-width: 768px) and (min-width:375px) {
    .v-progress-circular,.v-spinner{
      top: auto;
      left: auto;
    }
  }

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

  .v-spinner .v-moon1 {

    -webkit-animation: v-moonStretchDelay 0.6s 0s infinite linear;
    animation: v-moonStretchDelay 0.6s 0s infinite linear;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    position: relative;
  }

  .v-spinner .v-moon2 {
    -webkit-animation: v-moonStretchDelay 0.6s 0s infinite linear;
    animation: v-moonStretchDelay 0.6s 0s infinite linear;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    opacity: 0.8;
    position: absolute;
  }

  .v-spinner .v-moon3 {
    opacity: 0.1;
  }

  @-webkit-keyframes v-moonStretchDelay {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes v-moonStretchDelay {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
}

</style>
