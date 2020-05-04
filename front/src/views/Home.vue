<template>
  <div class="home">
    <v-container>
      <v-row class="text-center">
        <v-col cols="12">
          <v-img
            :src="require('../assets/logo-serasa.png')"
            class="my-3"
            contain
            height="200"
          />
        </v-col>

        <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-3">
            Serasa
          </h1>

          <br>
          <br>
          <p class="subheading font-weight-regular">
            This page was made with Vue.js for
            <br>
            <a
              href="https://serasaconsumidor.com.br/"
              target="_blank"
            >Serasa Consumidor</a>
          </p>
        </v-col>

        <v-col
          class="mb-5"
          cols="12"
        >
          <h2 class="headline font-weight-bold mb-3">
            Ecosystem
          </h2>

          <v-row justify="center">
            <a
              v-for="(eco, i) in ecosystem"
              :key="i"
              :href="eco.href"
              class="subheading mx-3"
              target="_blank"
            >
              {{ eco.text }}
            </a>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data: () => ({
    ecosystem: [
      {
        text: 'vuejs',
        href: 'https://vuejs.org/',
      },
      {
        text: 'vuetify',
        href: 'https://github.com/vuetifyjs',
      },
      {
        text: 'github',
        href: 'https://github.com',
      },
      {
        text: 'mongodb',
        href: 'https://www.mongodb.com/',
      },
      {
        text: 'nodejs',
        href: 'https://nodejs.org/',
      }
    ]
  }),
  methods: {
    goToBlog() {
      this.$router.push({name: 'Blog'})
    }
  }
};
</script>
