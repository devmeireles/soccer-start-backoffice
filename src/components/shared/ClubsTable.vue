<template>
  <v-card>
    <v-card-title>
      Clubs
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="data"
      :search="search"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      hide-default-footer
      @page-count="pageCount = $event"
      class="elevation-1"
    >
      <template v-slot:item.logo="{ item }">
        <v-row>
          <v-img :src="item.logo" max-width="25" />
        </v-row>
      </template>
      <template v-slot:item.country="{ item }">
        <Flag :country="item.country" />
      </template>
      <template v-slot:item.city="{ item }">
        <Flag :country="item.country" />
      </template>
      <template v-slot:item.city="{ item }">
        <span>{{ item.stadium.city }}</span>
      </template>
      <template v-slot:item.coach="{ item }">
        <span v-if="item.coach">{{ item.coach.name }}</span>
      </template>
    </v-data-table>
    <div class="text-xs-center pt-2 md4 lg4">
      <v-pagination v-model="page" :length="pageCount"></v-pagination>
    </div>
  </v-card>
</template>

<script>
import Flag from "@/components/shared/Flag";
export default {
  name: "ClubsTable",
  components: { Flag },
  props: {
    data: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data: () => ({
    search: "",
    itemsPerPage: 10,
    payload: {
      limit: 10
    },
    page: 1,
    pageCount: 0,
    headers: [
      {
        text: "#",
        value: "id",
        width: 75
      },
      {
        value: "logo",
        align: "start",
        width: 50
      },
      {
        text: "Name",
        value: "name",
        align: "start",
        width: 150
      },
      {
        text: "Country",
        value: "country",
        width: 20
      },
      {
        text: "City",
        value: "city",
        width: 75
      },
      {
        text: "Coach",
        value: "coach",
        width: 60
      }
    ]
  })
};
</script>