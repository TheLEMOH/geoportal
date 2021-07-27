<template>
  <div class="about-control p-2">
    <VueEditor class="bg-light" v-model="about[0].body" v-if="about" />
    <div class="text-end">
      <button class="btn btn-secondary m-2" type="button">Отменить</button>
      <button class="btn btn-success m-2" type="button" @click="EditAbout">
        Сохранить
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import { VueEditor } from "vue2-editor";
export default {
  data() {
    return {
      text: null,
    };
  },
  components: { VueEditor },
  computed: mapGetters(["about"]),
  methods: mapActions(["EditAbout"]),
};
</script>

<style>

</style>