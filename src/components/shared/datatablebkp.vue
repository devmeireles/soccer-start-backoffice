<template>
  <div class="custom-data-table">
    <v-card>
      <v-card-title>
        {{ title }}
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
        :items="data"
        :search="search"
        :headers="headers"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        hide-default-footer
        @page-count="pageCount = $event"
        class="elevation-1"
      ></v-data-table>
      <div class="text-xs-center pt-2 md4 lg4">
        <v-pagination v-model="page" :length="pageCount"></v-pagination>
      </div>
    </v-card>
  </div>
</template>

<script>
// import Flag from "@/components/shared/Flag";
export default {
  name: "DataTable",
  components: {},
  props: {
    title: {
      type: String,
      required: false,
      default: ""
    },
    payload: {
      type: Object,
      required: true
    },
    request: {
      type: String,
      required: true
    },
    headers: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    data: [],
    search: "",
    pageCount: 0,
    page: 1,
    itemsPerPage: 10
  }),
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const filter = {
        search: this.payload.keyword,
        limit: this.payload.limit
      };
      this.data = await this.$store.dispatch(this.request, {filter});
    }
  },
  watch: {
    search: {
      handler(e) {
        this.payload.keyword = e;
        this.payload.limit = 300;
        this.getData();
      }
    }
  }
};
</script>