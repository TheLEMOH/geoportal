<template>
  <div class="container">
    <button
      class="btn btn-primary"
      v-if="!user"
      @click="UpdateShowLoginModal(true)"
    >
      Войти в систему
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import { mapMutations } from "vuex";
export default {
  computed: mapGetters(["user"]),
  methods: {
    ...mapActions([
      "CheckUser",
      "Logout",
      "DisplayMessage",
      "UpdateShowLoginModal",
    ]),
    ...mapMutations(["updateLogin", "updatePassword"]),
  },
};
</script>

<style>
</style>