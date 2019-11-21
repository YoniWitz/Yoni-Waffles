<template>
  <div class="index container">
    <div class="card" v-for="(waffle) in waffles" v-bind:key="waffle.id">
      <div class="card-content">
        <i class="material-icons delete" v-on:click="deleteWaffle(waffle.id)">delete</i>
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
import db from "@/firebase/init";

export default {
  name: "index",

  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      waffles: []
    };
  },
  methods: {
    deleteWaffle(id) {
      this.waffles = this.waffles.filter(waffle => waffle.id != id);
    }
  },
  created() {
    db.collection("waffles")
      .get()
      .then(response => {
        response.forEach(doc => {
          let waffle = doc.data();
          waffle.id = doc.id;
          this.waffles.push(waffle)
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.index {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
}

.index h2 {
  font-size: 1.8em;
  text-align: center;
  margin-top: 0;
}
.index .ingredients {
  margin: 30px auto;
}
.index .ingredients li {
  display: inline-block;
}

.index .delete {
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
  color: #444;
  font-size: 1.4em;
}
</style>
