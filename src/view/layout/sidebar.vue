<template>
  <div class="sidePanel">
    <v-navigation-drawer stateless value="true">
      <v-list>
        <v-list-group prepend-icon="account_circle" v-for='(menu, i) in menuList' :key='i' @click="handleLinked(menu.rootName+'-'+i)" :class='{"delArrow":menu.rootChild.length==0,"activeRoot":selected_Link.indexOf(menu.rootName+"-"+i)>-1}'>
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title :class="{'rootTitle':true,'linkedItem':selected_Link.indexOf(menu.rootName+'-'+i)>-1}">{{menu.rootName}}</v-list-tile-title>
            </v-list-tile>
          </template>
          <v-list-group no-action sub-group value="true" v-if="menu.rootChild.length>0" v-for='(child, j) in menu.rootChild' :key='j' @click="handleLinked(menu.rootName+'-'+i+'-'+child.rootName+'-'+j)" :class='{"delArrow":child.rootChild.length==0}'>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title :class="{'secondTitle':true,'linkedItem':selected_Link.indexOf(menu.rootName+'-'+i+'-'+child.rootName+'-'+j)>-1||(selected_Link[0]?selected_Link[0].split(menu.rootName+'-'+i+'-'+child.rootName+'-'+j).length>1:false)}">{{child.rootName}}</v-list-tile-title>
              </v-list-tile>
            </template>
            <!-- <v-list-tile v-for="(admin, i) in admins" :key="i" @click="i%2==0?linkUrl('echarts'):linkUrl('dataTable')"> -->
            <v-list-tile v-if="child.rootChild.length>0" ripple v-for="(childDeep, k) in child.rootChild" :key="k" @click="handleLinked(menu.rootName+'-'+i+'-'+child.rootName+'-'+j+'-'+childDeep.rootName+'-'+k,childDeep.href)" :class="{'linkedItem':selected_Link.indexOf(menu.rootName+'-'+i+'-'+child.rootName+'-'+j+'-'+childDeep.rootName+'-'+k) > -1}">
              <!-- <v-list-tile-title v-text="admin" :class="{'list_Active':list_Active==i}"></v-list-tile-title> -->
              <v-list-tile-title v-text="childDeep.rootName"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon>account_circle</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list-group>
        <!--  <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile>
        <v-list-group prepend-icon="account_circle">
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>Users</v-list-tile-title>
            </v-list-tile>
          </template>
          <v-list-group no-action sub-group value="true">
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>Admin</v-list-tile-title>
              </v-list-tile>
            </template>
            <v-list-tile v-for="(admin, i) in admins" :key="i" @click="sayHi(i)">
              <v-list-tile-title v-text="admin" v-if="selected.indexOf(i) > -1" style='color:red'></v-list-tile-title>
              <v-list-tile-title v-text="admin" v-else></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="admin[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
          <v-list-group sub-group no-action>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>Actions</v-list-tile-title>
              </v-list-tile>
            </template>
            <v-list-tile v-for="(crud, i) in cruds" :key="i" @click="">
              <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="crud[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list-group> -->
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
/* eslint-disable */
import { mapGetters } from 'vuex'
import store from 'store';
export default {
  name: 'sideBar',
  data() {
    return {
      list_Active: 0,
      selected: [1],
      selectedList: {},
      menuList: []
    }
  },
  computed: {
    ...mapGetters(['admins', 'cruds', 'mode','selected_Link'])
  },
  created() {
    this.menuList = [{
      rootName: 'Home',
      href:'',
      rootChild: []
    }, {
      rootName: 'developMenu',
      href:'',
      rootChild: [{
        rootName: 'demoList',
        href:'',
        rootChild: [{
          rootName: 'demo',
          href:'demo',
          rootChild: []
        }, {
          rootName: 'form',
          href:'form',
          rootChild: []
        }, {
          rootName: 'lazyLoad',
          href:'lazyLoad',
          rootChild: []
        }, {
          rootName: 'iconsList',
          href:'iconList',
          rootChild: []
        }]
      }, {
        rootName: 'Actions',
        href:'',
        rootChild: [{
          rootName: 'devPanel',
          href:'devPanel',
          rootChild: []
        }, {
          // rootName: 'taoShence',
          // href:'taoShence',
          rootName: 'two',
          href:'',
          rootChild: []
        }, {
          rootName: 'three',
          href:'',
          rootChild: []
        }, {
          rootName: 'four',
          href:'',
          rootChild: []
        }]
      }, {
        rootName: 'Empty',
        href:'',
        rootChild: []
      }]
    }]
    this.selectedList = {

    }
  },
  methods: {
    handleLinked(name, href) {
      // event.preventDefault()
      store.commit('SET_SELECTED_NAV','')
      this.activeHref(name, href)
    }    
    // sayHi(activeIndex, rootName) {
    //   // this.list_Active = index;
    //   const i = this.selected_Link.indexOf(activeIndex)
    //   // if (i > -1) {
    //   //   this.selected.splice(i, 1)
    //   // } else {
    //   // store.commit('SET_SELECTED_LINK', [])
    //   store.commit('SET_SELECTED_LINK', [activeIndex])
    //   // this.selected.push(index)
    //   // }
    //   rootName ? this.linkUrl(rootName) : this.linkUrl('dataTable')
    // }
    // linkUrl(url) {
    //   alert('')
    //   this.linkUrl(url);
    // }
  },
}

</script>
<style lang="scss">
@import "src/styles/component.scss";
.sidePanel {
  z-index:100;
  @include sidePanel($lightblue)
}
.extends {
  top: 265px;
}

.sidePanel.sideShow {
  transition:all .3s;
  z-index:100;
  left: 0px;
}

</style>
