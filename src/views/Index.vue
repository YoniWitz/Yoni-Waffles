<template>
  <div class="index container">
    <div class="card" v-for="(waffle) in waffles" v-bind:key="waffle.id">
      <div class="card-content">
        <h2 class="indigo-text">{{waffle.title}}</h2>
        <ul class="ingredients">
          <li v-for="(ingredient,index) in waffle.ingredients" :key="index">
            <span class="chip">{{ingredient}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      waffles: [
        {
          title: "Yoni Brew",
          slug: "yoni-brew",
          ingredients: ["bananas", "coffee", "milk"],
          id: 1
        },
        {
          title: "Morning Mood",
          slug: "morning-mood",
          ingredients: ["mango", "lime", "juice"],
          id: 2
        }
      ]
    };
  }
};
</script>

<style  scoped>
.index{
  display:grid;
  grid-template-columns:1fr 1fr 1fr;
  grid-gap:30px;
  margin-top:60px;
}

.index h2{
  font-size:1.8em;
  text-align:center;
  margin-top : 0;
}
.index .ingredients{
  margin:30px auto;
}
.index .ingredients li{
  display:inline-block
}
</style>
