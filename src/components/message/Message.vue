<template>
  <div
    class="
      message-wrapper
      position-absolute
      top-0
      start-50
      translate-middle-x
      m-1
    "
  >
    <transition-group name="list" class="d-flex flex-row">
      <div
        class="card text-center shadow m-2"
        v-for="message in messages"
        :key="message.id"
      >
        <div class="card-header bg-info">Оповещение</div>
        <div class="card-body">
          <p class="card-text text-center">{{ message.text }}</p>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  computed: mapGetters(["messages"]),
  methods: mapActions([]),
};
</script>

<style>
.message-wrapper {
  width: auto;
  z-index: 1000;
}
.message-wrapper .card {
  width: 250px;
  z-index: 1000;
}

.list-enter-active,
.list-leave-active {
  opacity: 1;
  transition: all 0.5s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>