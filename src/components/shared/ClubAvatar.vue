<template>
  <v-img :src="item.logo" :max-width="size" />
</template>

<script>
export default {
  name: "ClubAvatar",
  props: {
    item: {
      type: Object,
      required: true,
      default: () => {}
    },
    size: {
      type: Number,
      required: false,
      default: 50,
    }
  },
};
</script>