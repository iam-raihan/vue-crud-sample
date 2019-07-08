<template>
  <div>
    <u>
      <h1>{{ type }} for Adoption</h1>
    </u>
    <b-table
      outlined
      responsive
      hover
      selectable
      select-mode="single"
      :items="items"
      :fields="fields"
      @row-clicked="onRowClicked"
    >
      <!-- <template slot="name" slot-scope="data">
        <router-link :to="`/${type.toLowerCase()}/${data.index}/view`">
          {{ data.value }}
        </router-link>
      </template> -->
      <template slot="table-caption">
        Note: Click on any to see details.
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: ["type", "items"],
  data() {
    return {
      fields: ["name", "breed", "gender", "age", "color", "weight", "location"]
    };
  },
  methods: {
    onRowClicked(data, index) {
      this.$router.push({
        name: "pet",
        params: { type: this.type.toLowerCase(), id: index }
      });
    }
  }
};
</script>
