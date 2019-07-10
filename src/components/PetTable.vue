<template>
  <div>
    <u>
      <h1>{{ type }} for Adoption</h1>
    </u>

    <!-- table -->
    <b-table
      outlined
      responsive
      hover
      selectable
      select-mode="single"
      :items="items"
      :fields="tableFields"
      @row-clicked="onRowClicked"
    >
      <template slot="table-caption">
        Note: Click on any to see details.
      </template>
    </b-table>

    <!-- details modal -->
    <b-modal v-model="showDetails" title="Cat Details:">
      <b-table :items="[selectedItem]" :fields="modalFields" stacked></b-table>

      <div slot="modal-footer" class="w-100">
        <b-button
          variant="danger"
          size="sm"
          class="float-left"
          @click="onDeleteClicked"
        >
          Delete
        </b-button>

        <div class="float-right">
          <b-button
            variant="primary"
            size="sm"
            class="mr-2"
            @click="onUpdateClicked"
          >
            Update
          </b-button>

          <b-button variant="secondary" size="sm" @click="showDetails = false">
            Close
          </b-button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: ["type", "items"],
  data() {
    return {
      selectedItem: Object,
      showDetails: false,
      tableFields: ["name", "breed", "gender", "age", "location"],
      modalFields: [
        "name",
        "breed",
        "gender",
        "age",
        "location",
        "color",
        "weight",
        "note"
      ]
    };
  },
  methods: {
    onRowClicked(data) {
      this.selectedItem = data;
      this.showDetails = true;
    },
    onUpdateClicked() {
      this.showDetails = false;
      this.$router.push({
        name: "pet-edit",
        params: {
          type: this.type.toLowerCase(),
          id: this.selectedItem.id
        }
      });
    },
    onDeleteClicked() {
      this.showDetails = false;

      this.$bvModal
        .msgBoxConfirm(
          `Please confirm that you want to delete "${this.selectedItem.name}"`,
          {
            title: "Confirmation",
            size: "sm",
            buttonSize: "sm",
            okVariant: "danger",
            okTitle: "YES",
            cancelTitle: "NO",
            footerClass: "p-2",
            hideHeaderClose: false,
            centered: true
          }
        )
        .then(value => {
          if (value === true)
            this.$store.dispatch("deleteItem", {
              data: this.selectedItem,
              type: this.type.toLowerCase()
            });
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
