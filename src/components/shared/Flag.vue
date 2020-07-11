<template>
  <span>
    <country-flag :country="getFlag(item.country)" />
  </span>
</template>

<script>
import CountryFlag from "vue-country-flag";
import FlagService from "@/services/FlagService";
export default {
  name: "Flag",
  components: { CountryFlag },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  created() {
    this.getFlag(this.item.country);
  },
  methods: {
    getFlag(country) {
      const flag = FlagService.getFlagSlug(country);
      return flag.alpha3 ? flag.alpha3 : "un";
    }
  }
};
</script>