<template>
  <v-container>
    <v-row no-gutters>
      <v-col
        md="6">
          <p class="p_title">
              Aanmaak datum:</p>
      </v-col>
      <v-col
        cols="12"
        lg="6"
        md="6"
      >
        <v-menu
          ref="menu1"
          v-model="menu1"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="auto"
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="dateFormatted"
              label="Datum"
              persistent-hint
              prepend-icon="mdi-calendar"
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            no-title
            @input="menu1 = false"
          ></v-date-picker>
        </v-menu>
      </v-col>
    </v-row>
        <v-row no-gutters>
      <v-col
        md="6">
          <p class="p_title">
              Opleveringsdatum:</p>
      </v-col>
      <v-col 
        cols="12"
        lg="6"
        md="6"
      >
        <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="computedDateFormatted"
              label="Datum"
              persistent-hint
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date1"
            no-title
            @input="menu2 = false"
          ></v-date-picker>
        </v-menu>
      </v-col>
    </v-row>
    <v-row no-gutters>
        <v-col md="6">
          <p class="p_title">
              Persoon:</p>
        </v-col>
    </v-row>
        <v-row no-gutters>
        <v-col md="6">
          <p class="p_title">
              Status:</p>
        </v-col>
        <v-col md="6">
    <v-progress-circular class="v-progress-circular1"
      indeterminate
      color="red"
    ></v-progress-circular>
        </v-col>
    </v-row>
        <v-row no-gutters>
        <v-col md="6">
         <v-btn @click="consoleLog" class="button__width">publiceer</v-btn>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'DatePicker',
  data: vm => ({
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000))
    .toISOString().substr(0, 10),
    dateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
    date1: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000))
    .toISOString().substr(0, 10),
    dateFormatted1: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
    menu1: false,
    menu2: false,
    }),

    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      },
    },

    watch: {
      date (val) {
        this.dateFormatted = this.formatDate(this.date)
      },
    },

    methods: {
        consoleLog(){
            console.log(this.date)
        },
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${day}-${month}-${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [day, month, year] = date.split('/')
        return `${day}-${month}-${year}`
      },
    },

    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date1)
      },
    },
  }
</script>
<style scoped>
.p_title {
  padding: 0;
  padding-top: 20px;
}
.v-progress-circular1 {
  margin: 1rem;
  margin-left: 1rem;
}
</style>