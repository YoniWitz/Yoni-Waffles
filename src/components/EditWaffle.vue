<template>
  <div class="edit-waffle container">
    <form v-on:reset="resetFields" v-on:submit.prevent="saveWaffle">
      <h2>Edit A Waffle</h2>

      <div class="form-row">
        <div class="form-field title">
          <label for="title">Waffle Title</label>
          <input type="text" id="title" v-model.trim="title" />
        </div>
        <div class="form-field add-ingredient">
          <label for="ingredient">Add Ingredient (press tab to add)</label>
          <input
            type="text"
            id="ingredients"
            v-on:keydown.tab.prevent="addIngredient"
            v-model.trim="ingredient"
          />
        </div>
        <div v-for="(ingredient, index) in ingredients" v-bind:key="index" class="form-field">
          <label for="ingredient">Ingredient {{index | indexPlus}}</label>
          <input type="text" :id="index" v-model.trim="ingredients[index]" />
          <i class="material-icons delete" v-on:click="deleteIngredient(ingredient)">delete</i>
        </div>
      </div>
      <p v-if="feedback" class="red-text">{{feedback}}</p>
      <div class="form-field action-buttons">
        <button type="reset" class="reset">Reset</button>
        <button type="submit" v-bind:disabled="!formIsValid">Save Waffle</button>
      </div>
    </form>
  </div>
</template>

<script>
import db from "@/firebase/init";
import slugify from "slugify";
export default {
  name: "editWaffle",

  data() {
    return {
      slug: this.$route.params.waffle_slug,
      ingredient: "",
      feedback: "",
      title: "",
      ingredients: []
    };
  },
  created() {
    db.collection("waffles")
      .where("slug", "==", this.slug)
      .get()
      .then(response => {
        response.forEach(doc => {
          this.title = doc.data().title;
          this.ingredients = doc.data().ingredients;
          this.id = doc.id;
        });
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    saveWaffle() {
      this.slug = slugify(this.title, {
        replacement: "-",
        remove: /[$*_+~.()'"!\-:@]/g,
        lower: true
      });
      db.collection("waffles")
        .doc(this.id)
        .update({
          title: this.title,
          ingredients: this.ingredients,
          slug: this.slug
        })
        .then(this.$router.push({ name: "index" }))
        .catch(err => {
          console.log(err);
        });
      this.resetFields();
    },
    resetFields() {
      this.title = "";
      this.ingredients = [];
      this.ingredient = "";
      this.feedback = "";
    },
    addIngredient() {
      if (this.ingredient) {
        this.ingredients.push(this.ingredient);
        this.ingredient = "";
        this.feedback = "";
      } else {
        this.feedback = "must enter ingredient value";
      }
    },
    deleteIngredient(ingredientToRemove) {
      this.ingredients = this.ingredients.filter(
        ingredient => ingredient !== ingredientToRemove
      );
    }
  },
  computed: {
    formIsValid() {
      return this.title && this.ingredients.length > 0;
    }
  },
  filters: {
    indexPlus(index) {
      return index + 1;
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  padding: 1.86rem 20%;
}

input,
textarea,
select {
  padding: 0.71rem;
  margin-right: 1.21rem;
  background-color: #ffffff;
  border: solid 1px #979797;
}

textarea {
  height: 5.2rem;
}

label {
  margin-bottom: 0.71rem;
  font-weight: bold;
}

legend {
  margin-bottom: 0.71rem;
  font-weight: bold;
}

.invalid {
  border: 1px solid #fa4359;
}

.form-row {
  margin-bottom: 2.14rem;
}

.form-row.vertical {
  flex-direction: column;
}

.form-row > * {
  flex: 1;
}

.form-field {
  flex-direction: column;
  position: relative;
  margin: 20px auto;
}
button {
  cursor: pointer;
  padding: 0.85rem 2.29rem;
  border-radius: 4px;
  margin-right: 1.36rem;
  background-color: #4c7ef3;
  font-size: 1.14rem;
  color: #ffffff;
  transition: 0.25s;
}

button:hover {
  background-color: #1e5df1;
}

button.reset {
  background-color: #e85b49;
}

button.reset:hover {
  background-color: #ea2e16;
}
.edit-waffle {
  margin-top: 60px;
  padding: 20px;
}

.edit-waffle h2 {
  font-size: 2em;
  margin: 20px auto;
}

.action-buttons {
  display: inline-block;
}
.delete {
  position: absolute;
  top: 4px;
  bottom: 16px;
  cursor: pointer;
  color: #aaa;
  font-size: 1.4em;
}
</style>