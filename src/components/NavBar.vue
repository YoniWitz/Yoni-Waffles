
<template>
  <div class="navbar">
    <nav class="nav-extended indogo darken-2">
      <div class="nav-content">
        <router-link to>
          <span class="nav-title">Yoni Waffles</span>
        </router-link>
        <a href class="btn-floating btn-larger halfway-fab pink">
          <router-link to>
            <i class="material-icons">add</i>
          </router-link>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar"
};
</script>

<style scoped>
.navbar nav {
    padding: 0 20px;
}
</style>