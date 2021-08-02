<template>
  <div class="recources container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
      <div class="col">
        <div class="card text-white m-2">
          <img
            src="../assets/2.jpg"
            class="card-img-top"
            alt="..."
            height="50%"
          />
          <div class="card-body additional">
            <h5 class="card-title">Флора и фауна</h5>
            <p class="card-text">
              Флора и фауна естественной среды. Например: живая природа,
              растительность, биология, экология, заболоченные территории и т.д.
            </p>
            <a href="#" class="btn btn-outline-light">Открыть каталог </a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card text-white m-2">
          <img
            src="../assets/2.jpg"
            class="card-img-top"
            alt="..."
            height="50%"
          />
          <div class="card-body additional">
            <h5 class="card-title">Флора и фауна</h5>
            <p class="card-text">
              Флора и фауна естественной среды. Например: живая природа,
              растительность, биология, экология, заболоченные территории и т.д.
            </p>
            <a href="#" class="btn btn-outline-light">Открыть каталог </a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card text-white m-2">
          <img
            src="../assets/2.jpg"
            class="card-img-top"
            alt="..."
            height="50%"
          />
          <div class="card-body additional">
            <h5 class="card-title">Флора и фауна</h5>
            <p class="card-text">
              Флора и фауна естественной среды. Например: живая природа,
              растительность, биология, экология, заболоченные территории и т.д.
            </p>
            <a href="#" class="btn btn-outline-light">Открыть каталог </a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card text-white m-2">
          <img
            src="../assets/2.jpg"
            class="card-img-top"
            alt="..."
            height="50%"
          />
          <div class="card-body additional">
            <h5 class="card-title">Флора и фауна</h5>
            <p class="card-text">
              Флора и фауна естественной среды. Например: живая природа,
              растительность, биология, экология, заболоченные территории и т.д.
            </p>
            <a href="#" class="btn btn-outline-light">Открыть каталог </a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card text-white m-2">
          <img
            src="../assets/2.jpg"
            class="card-img-top"
            alt="..."
            height="50%"
          />
          <div class="card-body additional">
            <h5 class="card-title">Флора и фауна</h5>
            <p class="card-text">
              Флора и фауна естественной среды. Например: живая природа,
              растительность, биология, экология, заболоченные территории и т.д.
            </p>
            <a href="#" class="btn btn-outline-light">Открыть каталог </a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card text-white m-2">
          <img
            src="../assets/2.jpg"
            class="card-img-top"
            alt="..."
            height="50%"
          />
          <div class="card-body additional">
            <h5 class="card-title">Флора и фауна</h5>
            <p class="card-text">
              Флора и фауна естественной среды. Например: живая природа,
              растительность, биология, экология, заболоченные территории и т.д.
            </p>
            <a href="#" class="btn btn-outline-light">Открыть каталог </a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card text-white m-2">
          <img
            src="../assets/2.jpg"
            class="card-img-top"
            alt="..."
            height="50%"
          />
          <div class="card-body additional">
            <h5 class="card-title">Флора и фауна</h5>
            <p class="card-text">
              Флора и фауна естественной среды. Например: живая природа,
              растительность, биология, экология, заболоченные территории и т.д.
            </p>
            <a href="#" class="btn btn-outline-light">Открыть каталог </a>
          </div>
        </div>
      </div>
      <!--  -->
    </div>

    <!--  -->
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
.card {
  border: 0;
}
.recources {
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>