<template>
  <div class="articles-control w-100">
    <ControlPanel
      :Add="AddArticle"
      :Save="SaveArticles"
      :Cancel="CancelArticles"
      :loaded="articlesLoaded"
    />
    <div class="row">
      <div class="col-md-auto">
        <Table
          :tableHead="'Название статьи'"
          :objects="articles"
          :selected="selectedArticle"
          :SelectFunc="SelectArticle"
          :DeleteFunc="DeleteArticle"
          :CopyUrl="CopyUrlArticle"
        />
      </div>
      <div class="col-md" v-if="selectedArticle != null">
        <EditingArticle />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import Table from "./articles/Table.vue";
import ControlPanel from "./patterns/Panel.vue";
import EditingArticle from "./articles/Editing.vue";
export default {
  components: { ControlPanel, Table, EditingArticle },
  methods: mapActions([
    "AddArticle",
    "SaveArticles",
    "CancelArticles",
    "SelectArticle",
    "DeleteArticle",
    "CopyUrlArticle",
  ]),
  computed: mapGetters(["articles", "selectedArticle", "articlesLoaded"]),
};
</script>

<style>

</style>