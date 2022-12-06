<template>
  <div class="gridView">
                <v-layout column>
                  <v-flex xs12>
                    <div >
                      <v-layout>
                        <div class="item elevation-2">
                            <v-img :aspect-ratio="1/1" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
                            <div>image_colors_1</div>
                        </div>                
                        <div class="item elevation-2">
                            <v-img :aspect-ratio="1/1" src="https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"></v-img>
                            <div>image_coffee_1</div>
                        </div>
                        <div class="item elevation-2" v-on:click="component = 'img-view'">
                            <v-img :aspect-ratio="1/1" src="https://images.unsplash.com/photo-1615220368123-9bb8faf4221b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2315&q=80"></v-img>
                            <div>image_laptop</div>
                        </div>
                        <div class="item elevation-2">
                            <v-img :aspect-ratio="1/1" src="https://images.unsplash.com/photo-1531361171768-37170e369163?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80"></v-img>
                            <div>image_foodies</div>
                        </div>
                      </v-layout>
                    </div>
                    <div>
                      <v-layout>
                        <div class="item elevation-2">
                            <v-img :aspect-ratio="1/1" src="https://images.unsplash.com/photo-1558393383-f6f7f7f9ef1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"></v-img>
                            <div>image_statue</div>
                        </div>
                        <div class="item elevation-2">
                            <v-img :aspect-ratio="1/1" src="https://images.unsplash.com/photo-1558384699-d711f5329188?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"></v-img>
                            <div>image_church</div>
                        </div>
                        <div class="item elevation-2">
                            <v-img :aspect-ratio="1/1" src="https://images.unsplash.com/photo-1599556147785-480f85376373?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80"></v-img>
                            <div>image_COVID</div>
                        </div>
                        <div class="item elevation-2">
                            <v-img :aspect-ratio="1/1" src="https://images.unsplash.com/photo-1618865654957-00ea731bebf6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"></v-img>
                            <div>image_market_2</div>
                        </div>
                      </v-layout>
                    </div>
                    <div>
                      <v-layout>
                        <div class="item elevation-2">
                          <v-img :aspect-ratio="1/1" src="https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"></v-img>
                          <div>image_coding</div>
                        </div>
                        <div class="item elevation-2">
                          <v-img :aspect-ratio="1/1" src="https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"></v-img>
                          <div>image_code_3</div>
                        </div>
                        <div class="item elevation-2">
                          <v-img :aspect-ratio="1/1" src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80"></v-img>
                          <div>img_swag_cat</div>
                        </div>
                        <div class="item elevation-2">
                          <v-img :aspect-ratio="1/1" src="https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"></v-img>
                          <div>img_space_nasa</div>
                        </div>
                      </v-layout>
                    </div>
                    <div>
                      <v-layout>
                        <div class="item elevation-2">
                          <v-img :aspect-ratio="1/1" src="https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80"></v-img>
                          <div>img_arcade</div>
                        </div>
                        <div class="item elevation-2">
                          <v-img :aspect-ratio="1/1" src="https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80"></v-img>
                          <div>img_bali</div>
                        </div>
                        <div class="item elevation-2">
                          <v-img :aspect-ratio="1/1" src="https://images.unsplash.com/photo-1598743400863-0201c7e1445b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"></v-img>
                          <div>img_radio_air</div>
                        </div>
                        <div class="item elevation-2">
                          <v-img :aspect-ratio="1/1" src="https://images.unsplash.com/photo-1494449880320-18d3dae5d16e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"></v-img>
                          <div>img_newyork</div>
                        </div>
                      </v-layout>
                    </div>
                  </v-flex>
                    <component class="imgComp" :is="component"></component>
                </v-layout>
              </div>
</template>

<script>
import imgView from './imgView.vue';
export default {
    
    name: 'imgMediaLibrary',
    components: {
      'img-view': imgView,
    },
    data() {
        return {
          component: '',
        };
  },
}
</script>

<style>
    /* Media library grid view */
  .gridView {
    padding: 36px;
  }
  .item {
  min-height: 193px;
  min-width: 193px;
  margin: 24px;
}
.imgComp{
  position: absolute;
}

</style>