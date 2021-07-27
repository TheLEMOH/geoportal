<template>
  <div
    class="legend position-absolute top-0 end-0 m-2 text-end"
    style="width: 200px"
  >
    <button
      class="btn legend-button link mb-0"
      data-bs-toggle="collapse"
      href="#collapseExample"
      role="button"
      aria-expanded="false"
      aria-controls="collapseExample"
    >
      Легенда
    </button>
    <div class="collapse me-1 p-0" id="collapseExample">
      <div class="card card-body">
        Some placeholder content for the collapse component. This panel is
        hidden by default but revealed when the user activates the relevant
        trigger.
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.legend {
  z-index: 1;
}

.legend-button {
  background: #12355f;
  color: white;
}

/* .legend-button:hover {
  color: white;
} */
</style>