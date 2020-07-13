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
      <v-simple-table class="table">
        <thead class="table-header">
          <tr>
            <th v-for="(header, i) in headers" :key="i" :class="`table-column ${header.align}`">
              <span>{{ header.text }}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(item, i) in data">
            <tr :id="i" :key="i" class="item table-row">
              <td
                v-for="(header, id) in headers"
                :key="id"
                :class="`table-column ${header.align}`"
                :width="header.width"
              >
                <div class="clickable">
                  <span v-if="header.component">
                    <customComponent
                      :is="header.component.path"
                      v-bind="makeProps(header.component.props, item)"
                    />
                  </span>
                  <span
                    v-else-if="header.internalValue"
                    :style="{ width: header.width }"
                    class="d-inline-block text-truncate"
                  >{{ item[header.value] ? item[header.value][header.internalValue] : '' }}</span>
                  <span
                    v-else
                    :style="{ width: header.width }"
                    class="d-inline-block text-truncate"
                  >{{ item[header.value] }}</span>
                </div>
              </td>
            </tr>
          </template>
        </tbody>
      </v-simple-table>
    </v-card>
  </div>
</template>

<script>
import _ from "lodash";
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
    this.makeProps();
  },
  beforeMount() {
    this.getData();
    this.initComponents();
  },
  methods: {
    async getData() {
      const filter = {
        search: this.payload.keyword,
        limit: this.payload.limit
      };
      this.data = await this.$store.dispatch(this.request, { filter });
    },
    makeProps(props, item) {
      const obj = {};
      _.forEach(props, (propValue, propName) => {
        if (propValue !== undefined) {
          obj[propName] = propValue;
        } else if (propName in item) {
          obj[propName] = item[propName];
        } else {
          obj[propName] = item;
        }
      });
      return obj;
    },
    initComponents() {
      const vm = this;
      _.forEach(vm.headers, value => {
        if (value.component) {
          const instance = value.component.path;
          vm.$options.components[instance.name] = instance;
        }
      });
    }
  },
  watch: {
    search: {
      handler(e) {
        this.payload.keyword = e;
        this.payload.limit = 30;
        this.getData();
      }
    }
  }
};
</script>

<style lang="scss">
.table-column {
  &.start {
    text-align: start !important;
  }
  &.end {
    text-align: end !important;
  }
  &.center {
    text-align: center !important;
  }
}
</style>