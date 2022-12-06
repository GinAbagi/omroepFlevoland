<template>
  <div>
    <li>
      <v-card>
        <h2>{{ localStorie.titel }}</h2>
        <h3 :class="localStorie.concept">CONCEPT</h3>
        <h3>{{ localStorie.beschrijving }}</h3>
        <p>{{ localStorie.inhoud }}</p>
        <p>{{ localStorie.tijd }}</p>
        <p>{{ localStorie.id }}</p>
        <v-btn color="primary" @click="dialog = true"> Edit story </v-btn>
        <v-btn @click="deleteData" class="mx-4" color="error">
          Delete story
        </v-btn>
        <!-- story editor BEGIN -->
        <v-dialog
          v-model="dialog"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <v-card>
            <v-toolbar dark color="primary">
              <v-btn icon dark @click="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>{{ localStorie.titel }}</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn dark text @click="editData"> Opslaan </v-btn>
              </v-toolbar-items>
            </v-toolbar>
            <h4>Titel</h4>
            <v-text-field
              v-model="localStorie.titel"
              label="Voer hier een titel in"
            ></v-text-field>
            <h4>Omschrijving</h4>
            <v-text-field
              v-model="localStorie.beschrijving"
              label="Omschrijf de story"
            ></v-text-field>
            <h4>Content</h4>
            <v-textarea
              v-model="localStorie.inhoud"
              label="Maak hier je story aan"
            ></v-textarea>
          </v-card>
        </v-dialog>

        <!-- story editor EINDE -->
      </v-card>
    </li>
  </div>
</template>

<script>
import db from "../firebase";
export default {
  name: "singleStory",
  props: {
    localStorie: {
      type: Object,
      default: () => {},
    },
    
  },
  data() {
    return {
      dialog: false,
      inhoud: "",
      titel: "",
      beschrijving: "",
    };
  },
  methods: {
    editData() {
      console.log(this.localStorie.titel);
      const story = {
        titel: this.localStorie.titel,
        beschrijving: this.localStorie.beschrijving,
        inhoud: this.localStorie.inhoud,
      };

      db.collection("stories").doc(this.localStorie.id).update(story);
    },
    deleteData() {
      db.collection("stories")
        .doc(this.localStorie.id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    },
  },
};
</script>
<style scoped>
.concept {
  display: none;
}
</style>
