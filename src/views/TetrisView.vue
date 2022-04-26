<template>
  <Game />
  <ComingSoon />
</template>

<script>
import Game from "@/components/tetris/GameComponent.vue";
import ComingSoon from "@/components/ComingSoon.vue";

export default {
  components: {
    Game,
    ComingSoon,
  },
};
</script>
