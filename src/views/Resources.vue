<template>
  <div class="recources container mt-3">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
      <div class="col">
        <div class="card text-white">
          <img
            src="../assets/sosna.png"
            class="card-img-top"
            height="50%"
            alt="..."
          />
          <div class="card-body additional">
            <h5 class="card-title">Флора Енисея</h5>
            <p class="card-text">
              Флора естественной среды. Например: живая природа, растительность,
              биология, экология, заболоченные территории и т.д.
            </p>
          </div>
          <div class="card-footer additional">
            <button class="btn btn-outline-light me-2" @click="Click">
              Открыть карту
            </button>
            <a href="#" class="btn btn-outline-light">Подробнее </a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card text-white">
          <img
            src="../assets/sosna.png"
            class="card-img-top"
            height="50%"
            alt="..."
          />
          <div class="card-body additional">
            <h5 class="card-title">Фауна Енисея</h5>
            <p class="card-text">Например...</p>
          </div>
          <div class="card-footer additional">
            <button class="btn btn-outline-light me-2" @click="Click">
              Открыть карту
            </button>
            <a href="#" class="btn btn-outline-light">Подробнее </a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card text-white">
          <img
            src="../assets/sosna.png"
            class="card-img-top"
            height="50%"
            alt="..."
          />
          <div class="card-body additional">
            <h5 class="card-title">Населенные пункты</h5>
            <p class="card-text">Например...</p>
          </div>
          <div class="card-footer additional">
            <button class="btn btn-outline-light me-2" @click="Click">
              Открыть карту
            </button>
            <a href="#" class="btn btn-outline-light">Подробнее </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    Click() {
      this.$router.push({
        path: "/map",
        query: { opened: "sosna" },
      });
    },
  },
};
</script>

<style>
.card {
  border: 0;
  height: 450px;
}
.recources {
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>