/* eslint-disable */
<template>

  <v-container class="my-5">
    <v-layout row wrap>
      <v-flex>
        <v-card>
          <h4>Linkedin</h4>
          <h6>Titel</h6>
          <v-text-field v-model="titel" label="voeg titel toe">
          {{ titel }}</v-text-field>
          <h6>Content</h6>
          <v-textarea v-model="inhoud" label="Maak hier je story aan">
            {{ inhoud }}</v-textarea>
          <v-btn @click="consoleLog" class="button__width">publiceer</v-btn>
          <h6>Preview</h6>
          <v-card class="mx-auto" color="#0a66c2" dark max-width="400">
            <v-card-title>
              <v-icon large left>
                mdi-linkedin
              </v-icon>
              <span class="text-h6 font-weight-light">Linkedin</span>
            </v-card-title>

            <v-card-text class="text-h5 font-weight-bold">
               {{ titel }}
            </v-card-text>
            <v-card-text class="text-h6 ">
              {{ inhoud }}
            </v-card-text>

            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img class="elevation-6" alt=""
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light">
                  </v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>Omroep <br> Flevoland</v-list-item-title>
                </v-list-item-content>

                <v-row allign="center" justify="end">
                  <v-icon class="mr-1">
                    mdi-heart
                  </v-icon>
                  <span class="subheading mr-2">256</span>
                  <span class="mr-1">·</span>
                  <v-icon class="mr-1">
                    mdi-share-variant
                  </v-icon>
                  <span class="subheading">45</span>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
  import db from '../firebase'
  export default {
    name: 'Linkedin',
    data() {
      return {
        inhoud: '',
        titel: '',
        beschrijving: '',
        titel: ''
      };
    },
    methods: {
      consoleLog() {
        console.log(this.inhoud);
        const story = {
          inhoud: this.inhoud,
          channel: "Linkedin",
          titel: this.titel
        }

        db.collection('stories').add(story)
        
        this.inhoud = ''
        this.channel = ''
        this.titel = ''
      },
    },
  }
</script>
<style scoped>
.mx-auto{
  margin: 20px;
}
h6{
  padding:5px;
}
</style>