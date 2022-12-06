<template>
    <v-container fluid class="imgViewContainer">
        <v-layout row>
            <v-flex grow pa-1>
                <h1>Attachment details</h1>
                <div class="imgBig">
                    <v-img :aspect-ratio="16/9" src="https://images.unsplash.com/photo-1615220368123-9bb8faf4221b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2315&q=80"></v-img>
                    <div class="space"></div>
                    <v-btn>Edit image</v-btn>
                </div>
            </v-flex>
            <v-flex class="rightSide" pa-1>
                <div id="twoBlocks" column>
                    <div class="imgDetails">
                        <v-card>
                            <v-list>
                                <v-list-item>
                                    Uploaded on:    16-04-2022
                                </v-list-item>
                                <v-list-item>
                                    Uploaded by:    Mira.janssen@gmail.com
                                </v-list-item>
                                <v-list-item>
                                    Uploaded to:    Manual
                                </v-list-item>
                                <v-list-item>
                                    Filename:       img_laptop
                                </v-list-item>
                                <v-list-item>
                                    Filetype:       Image/jpg
                                </v-list-item>
                                <v-list-item>
                                    Filesize:       273 KB
                                </v-list-item>
                                <v-list-item>
                                    Dimensions:     2262 x 1180 pixels
                                </v-list-item>
                                <v-list-item>
                                    Source:         ANP
                                </v-list-item>
                            </v-list>
                        </v-card>
                    </div>
                    <div class="space">
                        <v-spacer></v-spacer>
                    </div>
                    <v-spacer></v-spacer>
                    <v-list class="imgInput">
                        <v-list-item>
                            <label>Title</label>
                            <input type="text" value="Laptop image">
                        </v-list-item>
                        <v-list-item>
                            <label>Description</label>
                            <input type="text">
                        </v-list-item>
                        <v-list-item>
                            <label>File URL</label>
                            <input type="text" value="https://www.unsplash.com/1234">    
                            <v-icon small>mdi-file-multiple</v-icon>                       
                        </v-list-item>
                    </v-list>
                    <div class="useImg">
                        <v-btn @click="items.push({newItem})"> Use image</v-btn>
                    </div>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'imgView',
    data() {
        return {
        
    };
  },
  methods: {
      plaats(){
          console.log(e)
      }
  }
}
</script>

<style scoped>
body{
    background: white;
}
.imgBig{
    width: 706px;
    height: 410px;
    display: flex;
    flex-direction: column;
    align-content: center;
    padding: 10px 10px 10px 0;
   
}
.imgDetails{
    width: 350px;
}

.rightSide {
    width: 100vh;
    height: 100vh;
    display: flex;
    align-items: flex-start;
}

.imgViewContainer{
    background: white;
}
#twoBlock{
    display: flex;
    justify-content: space-between;
}
input{
    display: block;
    margin-left: 50px;
    margin-right: 10px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 5px;
    color: #555;

}
.space{
    height: 10px;
}

button{
    margin: 15px;
}
</style>