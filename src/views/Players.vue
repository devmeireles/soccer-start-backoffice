<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <DataTable
          title="Players"
          request="Data/Players/getPlayers"
          :payload="payload"
          :headers="headers"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DataTable from "@/components/shared/DataTable";

export default {
  name: "Clubs",
  components: { DataTable },
  data: () => ({
    payload: {
      limit: 20,
      keyword: ""
    },
    headers: [
      {
        text: "#",
        value: "id",
        align: "start",
        width: 75
      },
      {
        text: "Name",
        value: "name",
        align: "start",
        width: 150
      },
      {
        text: "Club",
        value: "club",
        internalValue: "name",
        align: "start",
        sortable: false,
        width: 50
      },
      {
        text: "Actions",
        value: undefined,
        sortable: false,
        align: "end",
        width: 30
      }
    ]
  })
};
</script>