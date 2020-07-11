<template>
  <v-app id="inspire">
    
    <SideBar :drawer="drawer"/>
    <v-app-bar
      app
      clipped-left
      color="teal darken-4"
      dense
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-icon
        class="mx-4"
        large
      >
        mdi-soccer
      </v-icon>
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">Soccer Crawler</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-row
        align="center"
        style="max-width: 650px"
      >
        <v-text-field
          :append-icon-cb="() => {}"
          placeholder="Search..."
          single-line
          append-icon="mdi-magnify"
          color="white"
          hide-details
        ></v-text-field>
      </v-row>
    </v-app-bar>

    <v-main>
      <v-container class="fill-height">
        <v-row
          justify="center"
          align="center"
        >
          <router-view/>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from '@/components/navigation/SideBar';
  export default {
    props: {
      source: String,
    },
    components: { SideBar },
    data: () => ({
      drawer: true,
    }),
    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>