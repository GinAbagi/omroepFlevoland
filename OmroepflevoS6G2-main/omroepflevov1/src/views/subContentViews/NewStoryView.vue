<template>
  <v-container>
    <v-row justify="end">
      <v-col class="div__height" cols="8" style="padding: 24px;">
        <v-card class="StoryAanmaak">
          <h1 class="storyH1">Story</h1>
          <v-card class="titelStory" outlined>
            <h4>Titel</h4>
            <v-text-field v-model="titel" label="Voer hier een titel in" :rules="nameRules" :counter="40" required>
            </v-text-field>
          </v-card>
          <v-card class="omschrijvingStory" outlined>
            <h4>Omschrijving</h4>
            <v-text-field v-model="beschrijving" label="Omschrijf de story"></v-text-field>
          </v-card>
          <v-card class="contentStory" outlined>
            <h4>Content</h4>
            <v-textarea v-model="inhoud" label="Maak hier je story aan"></v-textarea>
          </v-card>
          <div class="optieButtons" outlined>
            <v-btn :disabled="checkTitel" @click="consoleLog" class="button__width">publiceer</v-btn>
            <v-btn :disabled="checkTitel" @click="saveAsConcept" class="button__width mx-4">concept</v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col cols="4">
        <div class="d-flex flex-column">
          <v-card class="my-2" style="padding: 12px;">
            <h1>Info</h1>
            <date-picker></date-picker>
          </v-card>
          <media-library></media-library>

          <!-- Gins stukje BEGIN -->
          <v-card class="my-2">
                      <div id="channels">
              <h1>Publication channels</h1>
              <h3>Social Media</h3>
              <div id="checkboxes">
                <input type="checkbox" value="twitter" id="twitter" v-model="checkedTwitter" />
                <v-icon>mdi-twitter</v-icon>
                <label for="twitter" id="twit">Twitter</label>
                <input type="checkbox" value="instagram" id="instagram" v-model="checkedInstagram" />
                <v-icon>mdi-instagram</v-icon>
                <label for="instagram">Instagram</label>
              <br>
              <input type="checkbox" value="linkedin" id="linkedin" v-model="checkedLinkedin" />
              <v-icon>mdi-linkedin</v-icon>
              <label for="linkedin">LinkedIn</label>
              <input type="checkbox" value="facebook" id="facebook" v-model="checkedFacebook" />
              <v-icon>mdi-facebook</v-icon>
              <label for="facebook">Facebook</label>
              <br>
              <input type="checkbox" value="youtube" id="youtube" v-model="checkedYoutube" />
              <v-icon>mdi-youtube</v-icon>
              <label for="youtube">Youtube</label>
            </div>
            <h3>Intern channels</h3>
            <div id="checkboxes">
              <input type="checkbox" value="television" id="television" v-model="checkedTelevision" />
                <v-icon>mdi-television</v-icon>

              <label for="television" id="tv">TV</label>



              <input type="checkbox" value="radio" id="radio" v-model="checkedRadio" />

              <v-icon>mdi-access-point</v-icon>

              <label for="radio">(visual) Radio</label>



              <br>



              <input type="checkbox" value="online" id="online" v-model="checkedOnline" />

              <v-icon>mdi-application-outline</v-icon>

              <label for="online">Online</label>

            </div>

            </div>

          </v-card>
          <!-- Gins stukje EINDE -->

        </div>
      </v-col>

      <!-- Snackbar -->
      <div class="text-center ma-2">
        <v-snackbar v-model="snackbar" :timeout="timeout">
          Story succesvol gepubliceerd

          <template v-slot:action="{ attrs }">
            <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
              Sluit
            </v-btn>
          </template>
        </v-snackbar>
      </div>
      <!-- Einde snackbar -->

    </v-row>
    <div id="channeltabs">
      <h1 v-if="checkedTwitter" class="socialtabs">
        <Twitter></Twitter>
      </h1>
      <br>
      <h1 v-if="checkedInstagram" class="socialtabs">
        <Instagram></Instagram>
      </h1>
      <br>
      <h1 v-if="checkedLinkedin" class="socialtabs">
        <Linkedin></Linkedin>
      </h1>
      <br>
      <h1 v-if="checkedFacebook" class="socialtabs">
        <Facebook></Facebook>
      </h1>
      <br>
      <h1 v-if="checkedYoutube" class="socialtabs">
        <Youtube></Youtube>
      </h1>
    </div>
  </v-container>
</template>


<script>
  import DatePicker from '@/components/DatePicker.vue';
  import mediaLibrary from '@/components/mediaLibrary.vue';
  import Twitter from '../../components/Twitter.vue'
  import Instagram from '../../components/Instagram.vue'
  import Facebook from '../../components/Facebook.vue'
  import Youtube from '../../components/Youtube.vue'
  import Linkedin from '../../components/Linkedin.vue'
  import { Timestamp} from '@firebase/firestore';
  import db from '../../firebase'

  export default {
    name: 'NewStoryView',
    data() {
      return {
        inhoud: '',
        titel: '',
        beschrijving: '',
        snackbar: false,
        timeout: 2000,
        nameRules: [
          v => !!v || 'Titel is verplicht',
          v => v.length <= 40 || 'De titel mag niet groter dan veertig karakters zijn',
          v => v.length >= 10 || 'De titel moet groter dan tien karakters zijn',
        ],
        checkedChannels: [],
        checkedTwitter: '',
        checkedInstagram: '',
        checkedFacebook: '',
        checkedLinkedin: '',
        checkedYoutube: '',
        checkedTelevision: '',
        checkedRadio: '',
        checkedOnline: '',
        components: {
          mediaLibrary,
        }
      };
    },
    computed: {
      checkTitel() {
        console.log(this.titel)
        if (this.titel.length > 10 && this.titel.length <= 40) {
          return false
        } else return true
      }
    },
    components: {
      Twitter,
      Instagram,
      Facebook,
      Youtube,
      Linkedin,
      DatePicker,
      mediaLibrary
    },
    methods: {
      consoleLog() {
        console.log(this.inhoud);
        const story = {
          titel: this.titel,
          beschrijving: this.beschrijving,
          inhoud: this.inhoud,
          tijd: Timestamp.now(),
          concept: 'concept'
        }

        db.collection('stories').add(story)

        this.titel = ''
        this.beschrijving = ''
        this.inhoud = ''
        this.snackbar = true
      },

      saveAsConcept() {
        console.log('opgeslagen als concept')
        const story = {
          titel: this.titel,
          beschrijving: this.beschrijving,
          inhoud: this.inhoud,
          tijd: Timestamp.now(),
          concept: ''
        }

        db.collection('stories').add(story)

        this.titel = ''
        this.beschrijving = ''
        this.inhoud = ''
        this.snackbar = false
      }
    },
  };
</script>

<style scoped>
  .button__width {
    width: 100px;
  }

  #checkboxes input {
    display: inline-block;
    margin: 10px;
  }

  #checkboxes label {
    display: inline-block;
  }

  #twit {
    margin-right: 10px;
  }

  .socialtabs {
    margin: 50px;
    max-width: 100%;
    width: 500px;
  }

  #channeltabs {
    display: inline-flex;
    margin-left: 100px;
  }

  #tv {
    margin-right: 40px;
  }

  .v-icon {
    margin: 5px;
  }

  .StoryAanmaak {
    padding: 12px;
  }

  .storyH1 {
    padding-bottom: 24px;

  }

  .titelStory {
    padding: 12px;
    margin: 10px;
  }

  .omschrijvingStory {
    padding: 12px;
    margin: 10px;
  }

  .contentStory {
    padding: 12px;
    margin: 10px;
  }

  .optieButtons {
    padding: 12px;
    margin: 10px;
  }
</style>