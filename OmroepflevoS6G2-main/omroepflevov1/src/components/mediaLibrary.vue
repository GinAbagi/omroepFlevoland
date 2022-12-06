<template>
  <div>
    <!-- Media blok -->
    <v-card class="my-2" id="mediaLibrary" outlined>
      <h1 class="mediaH1">Media</h1>
      <div class="thumbnail">
        <h3 class="mediaH3">Thumbnail</h3>
        <div class="thumbUpload">
          <v-icon large>mdi-upload</v-icon>
          <p>Select from Media Library</p>
        </div>
        <br>
        <div class="addBtn" @click="dialog = true">
          <v-icon>mdi-plus</v-icon>
        </div>
      </div>

      <div class="thumbnail">
        <h3 class="mediaH3">Content</h3>
        <div class="thumbUpload">
          <v-icon large>mdi-upload</v-icon>
          <p>Select from Media Library</p>
        </div>
        <br>
        <div class="addBtn">
          <v-icon>mdi-plus</v-icon>
        </div>
      </div>
    </v-card>

    <!-- story editor BEGIN -->
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <!-- toolbar -->
        <v-toolbar>
          <v-btn icon @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title> Media Library </v-toolbar-title>
          <v-spacer></v-spacer>

          <v-toolbar-items>

            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <input class="form-control" type="text" placeholder="Search" aria-label="Search" />
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-btn elevation="2" plain raised rounded>Bulk selection</v-btn>

            <v-btn icon>
              <v-icon>mdi-view-grid-outline</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-view-list-outline</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-filter-variant</v-icon>
            </v-btn>

          </v-toolbar-items>
        </v-toolbar>

        <!-- inhoud Media Library -->
        <v-container fluid class="libraryContent">
          <v-layout row>
            <!-- side nav media library -->
            <v-flex shrink pa-1>
              <v-navigation-drawer>
                <v-list dense nav>
                  <v-btn color="grey">
                    Upload
                    <v-icon right dark>mdi-plus</v-icon>
                  </v-btn>
                  <v-list-item-title class="text-h6">
                    Files
                  </v-list-item-title>
                  <v-list-item v-on:click="component = 'files-media-library'">
                    All files
                  </v-list-item>
                  <v-list-item v-on:click="component = 'img-media-library'">
                    Images
                  </v-list-item>
                  <v-list-item :to="'/StoryView/listsview'">
                    Videos
                  </v-list-item>
                  <v-list-item :to="'/StoryView/listsview'">
                    Documents
                  </v-list-item>
                  <v-list-item :to="'/StoryView/listsview'">
                    Audio
                  </v-list-item>
                  <v-list-item :to="'/StoryView/listsview'">
                    Raw footage
                  </v-list-item>
                  <v-list-item :to="'/StoryView/listsview'">
                    Other files
                  </v-list-item>
                  <v-spacer></v-spacer>
                  <v-divider class="py-1"></v-divider>
                  <v-list-item color="grey" :to="'/StoryView/listsview'">
                    Folders
                    <v-spacer></v-spacer>
                    <v-icon right>mdi-plus</v-icon>
                  </v-list-item>
                  <v-divider class="py-1"></v-divider>
                </v-list>
              </v-navigation-drawer>
            </v-flex>
            <!-- Grid view van files -->
            <v-flex grow pa-1>
                <component :is="component"></component>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>

    <!-- story editor EINDE -->
  </div>
</template>

<script>
  import imgMediaLibrary from './imgMediaLibrary.vue';
  import filesMediaLibrary from './filesMediaLibrary.vue';
  import imgView from './imgView.vue';
  
  export default {
    components: {
      'img-media-library': imgMediaLibrary,
      'files-media-library': filesMediaLibrary,
      'img-view': imgView

    },
    name: 'mediaLibrary',

    data() {
      return {
        component: 'files-media-library',
        dialog: false,
        items: [{
            title: 'Dashboard',
            icon: 'mdi-view-dashboard'
          },
          {
            title: 'Photos',
            icon: 'mdi-image'
          },
          {
            title: 'About',
            icon: 'mdi-help-box'
          },
        ],
        right: null,
      };
    },
    
  }
</script>

<style>
  /* Media blok */
  #mediaLibrary {
    padding: 12px;
  }

  .mediaH1 {
    margin-bottom: 10px;
  }

  .mediaH3 {
    margin-bottom: 10px;
  }

  .thumbUpload {
    width: 297px;
    height: 130px;
    padding: 50px;
    background: #F8F8F8;
    display: flex;
    flex-direction: column;
    margin: 15px;
    justify-content: center;
  }

  .thumbUpload,
  v-icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .thumbUpload p {
    text-align: center;
    margin: 5px;
  }

  .addBtn {
    width: 60px;
    height: 34px;
    background: #F8F8F8;
    display: inline;
    padding: 15px;
    margin: 15px;
  }

  .thumbnail {
    margin-bottom: 60px;
  }

  /* Media library grid view */
  .gridView {
    padding: 36px;
  }

  .item {
    min-height: 193px;
    min-width: 193px;
    margin: 24px;
  }
  input{
    
    border: 1px solid #ddd;
    border-radius: 5px;
    color: #555;

}
</style>