<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <DataTable
          title="Clubs"
          request="Data/Clubs/getClubs"
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
        value: "logo",
        align: "start",
        sortable: false,
        width: 50,
        component: {
          path: require("@/components/shared/ClubAvatar").default,
          props: {
            size: 25,
            item: undefined
          }
        }
      },
      {
        text: "Name",
        value: "name",
        align: "start",
        width: 150
      },
      {
        value: "logo",
        align: "start",
        sortable: false,
        width: 20,
        component: {
          path: require("@/components/shared/Flag").default,
          props: {
            size: "normal",
            item: undefined
          }
        }
      },
      {
        text: "City",
        value: "stadium",
        internalValue: "city",
        sortable: false,
        width: 75
      },
      {
        text: "Coach",
        value: "coach",
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