<template>
  <div class="recources d-flex">
    <div class="card text-white m-2" style="width: 18rem">
      <img src="../assets/2.jpg" class="card-img-top" alt="..." />
      <div class="card-body" style="background: #6b95c9">
        <h5 class="card-title">Флора и фауна</h5>
        <p class="card-text">
          Флора и фауна естественной среды. Например: живая природа,
          растительность, биология, экология, заболоченные территории и т.д.
        </p>
        <a href="#" class="btn btn-light">Открыть каталог </a>
      </div>
    </div>
    <div class="card text-white m-2" style="width: 18rem">
      <img src="../assets/2.jpg" class="card-img-top" alt="..." />
      <div class="card-body" style="background: #6b95c9">
        <h5 class="card-title">Флора и фауна</h5>
        <p class="card-text">
          Флора и фауна естественной среды. Например: живая природа,
          растительность, биология, экология, заболоченные территории и т.д.
        </p>
        <a href="#" class="btn btn-light">Открыть каталог </a>
      </div>
    </div>
    <div class="card text-white m-2" style="width: 18rem">
      <img src="../assets/2.jpg" class="card-img-top" alt="..." />
      <div class="card-body" style="background: #6b95c9">
        <h5 class="card-title">Флора и фауна</h5>
        <p class="card-text">
          Флора и фауна естественной среды. Например: живая природа,
          растительность, биология, экология, заболоченные территории и т.д.
        </p>
        <a href="#" class="btn btn-light" @click="Click()">Открыть каталог </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    Click() {
      console.log(this.$route.query);
      this.$router.push({ path: "resources", query: { id: "123" } });
    },
  },
};
</script>

<style>
</style>