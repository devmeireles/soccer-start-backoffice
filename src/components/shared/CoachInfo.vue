<template>
  <span>{{ item.coach ? item.coach.name : '' }}</span>
</template>

<script>
export default {
  name: "CoachInfo",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
};
</script>