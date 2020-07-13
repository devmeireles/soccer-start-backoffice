<template>
  <v-navigation-drawer v-model="drawer" app clipped>
    <v-list dense>
      <v-list-item v-for="item in items" :key="item.text" link :to="item.route">
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link>
        <v-list-item-action>
          <v-icon color="grey darken-1">mdi-cog</v-icon>
        </v-list-item-action>
        <v-list-item-title class="grey--text text--darken-1">Configurations</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "SideBar",
  props: {
    drawer: {
      type: Boolean,
      defined: true,
      default: false
    }
  },
  data: () => ({
    items: [
      { icon: "mdi-view-dashboard", text: "Dashboard", route: "/dashboard" },
      { icon: "mdi-earth", text: "Nations", route: "/nations" },
      { icon: "mdi-account-group", text: "Clubs", route: "/clubs" },
      { icon: "mdi-account", text: "Players", route: "/players" },
      { icon: "mdi-trophy", text: "Leagues", route: "/leagues" },
    ]
  })
};
</script>