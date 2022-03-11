<template>
  <div class="addSubtractButton">
    <input type="number"  style="width:50px" v-model="quantity" />
    <div>
      <button class="add" @click="handleAdd">+</button>
      <button
        class="sub"
        @click="handleSubtract"
        :class="{ disabled : quantity ==0,actived :quantity > 0}"
      >-</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Addsubstractbuttob",

  data() {
    return {
      quantity: 0
    };
  },

  mounted() {},

  methods: {
    handleAdd() {
      this.quantity++;
      this.$emit("update-quantity", this.quantity);
    },
    handleSubtract() {
      this.quantity--;
      this.$emit("update-quantity", this.quantity);
    }
  }
};
</script>

<style  scoped>
.add,.sub {
  width: 35px;
}
.addSubtractButton {
  display: flex;
}
.disabled {
  pointer-events: none;
  color: gray;
  opacity: 0.9;
}
</style>