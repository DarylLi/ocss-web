<template>
  <div class="iconList">
    <template>
      <v-layout align-center>
        <!--         <v-item-group v-model="window" class="shrink mr-4" mandatory tag="v-flex">
          <v-item v-for="n in carouselPages" :key="n">
            <div slot-scope="{ active, toggle }">
              <v-btn :input-value="active" icon @click="toggle">
                <v-icon>mdi-record</v-icon>
              </v-btn>
            </div>
          </v-item>
        </v-item-group> -->
        <v-tabs v-model="window" fixed-tabs dark slider-color="white">
          <v-tab v-for="n in carouselPages" :key="n" ripple>
            {{ n }}
          </v-tab>
          <v-tab-item v-for="n in carouselPages" :key="n">
            <v-card flat>
              <v-flex>
                <v-layout row wrap>
                  <v-flex column v-for='(icon,i) in icons.slice((n-1)*onePagecount, n*onePagecount)' :key='i' xs3>
                    <v-layout column wrap>
                      <v-btn flat>
                        <v-icon>{{"mdi-"+icon.name}}</v-icon>
                      </v-btn>
                      <span>{{"mdi-"+icon.name}}</span>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-card>
          </v-tab-item>
        </v-tabs>
        <!--         <v-flex>
          <v-window v-model="window" class="elevation-1" vertical>
            <v-window-item v-for="n in carouselPages" :key="n">
              <v-card flat>
                <v-card-text>
                  <v-layout align-center mb-3>
                    <v-avatar color="grey" class="mr-3"></v-avatar>
                    <strong class="title">Title {{ n }}</strong>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>mdi-account</v-icon>
                    </v-btn>
                  </v-layout> -->
        <!-- <v-flex>
          <v-layout row wrap>
            <v-flex v-for='(icon,i) in icons' :key='i' xs3>
              <v-btn icon>
                <v-icon>{{"mdi-"+icon.name}}</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-flex> -->
        <!-- <v-flex>
                    <v-layout row wrap v-for="num in carouselPages">
                      <v-flex v-for='(icon,i) in icons.slice(num, num+onePagecount-1)' :key='i' xs3>
                        <v-btn icon>
                          <v-icon>{{"mdi-"+icon.name}}</v-icon>
                        </v-btn>
                      </v-flex>
                    </v-layout>
                  </v-flex> -->
        <!-- </v-card-text>
              </v-card>
            </v-window-item>
          </v-window>
        </v-flex> -->
      </v-layout>
    </template>
  </div>
</template>
<script>
import iconList from '../mock/icons';
export default {
  name: 'iconList',
  data() {
    return {
      window: 0,
      icons: [],
      onePagecount: 0,
      carouselPages: 0
    }
  },
  created() {
    this.icons = iconList.iconsList;
    let PanelHeight = document.getElementById("app").offsetHeight;
    let PanelWidth = document.getElementById("app").offsetWidth;
    let totIcon = this.icons.length;
    this.onePagecount = 4 * (parseInt((PanelHeight-172) / 64));
    this.carouselPages = parseInt(totIcon / this.onePagecount) + 1;
    // console.log(this.icons.length)
    // console.log(parseInt(totIcon/onePagecount)+1)

    // console.log(iconList.iconsList)
  }
}

</script>
<style lang="scss">
.iconList {
  .layout {
    width: 100%;

    .v-tabs {
      width: 100%;
    }
  }
}

</style>
