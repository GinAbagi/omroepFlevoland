<template>
<v-container>
  <h1>
    Stories
  </h1>
  <v-text-field v-model="zoekOpdracht" label="Zoek naar stories"></v-text-field>
  <p> {{zoekOpdracht}} </p>

  <ul>
    <single-story v-for="(localStorie, index) in uitVoerZoekOpdracht" :localStorie="localStorie" :key="index"></single-story>
  </ul>


</v-container>

</template>

<script>
import db from '../../firebase'
import SingleStory from '../../components/SingleStory.vue';
export default {
  components: { SingleStory },
  name: 'StoriesView',
  data (){
    return{
      localStories: [],
      zoekOpdracht: '',
    }
  },
  created() {
    db.collection('stories').onSnapshot(res => {
      const changes = res.docChanges();
      changes.forEach(change => {
        console.log(change)
        if (change.type === 'added'){
          let story = {
            ...change.doc.data(),
            id: change.doc.id
          }
          if (story.tijd != null){
            story.tijd = new Date(story.tijd.seconds * 1000).toDateString();
          } else {
            story.tijd = 'no time published'
          }
          this.localStories.push(story)
        }else if (change.type === 'removed'){
          this.localStories = this.localStories.filter(x => x.id != change.doc.id)
        }
      });
    })
  },
  computed: {
    uitVoerZoekOpdracht() {
      if (this.zoekOpdracht != ''){
        return this.localStories.filter((x) => {
          return x.titel?.includes(this.zoekOpdracht) ||
          x.beschrijving?.includes(this.zoekOpdracht) ||
          x.inhoud?.includes(this.zoekOpdracht) ||
          x.tijd?.includes(this.zoekOpdracht)
        })
      } else return this.localStories
    }
  },
};
</script>
