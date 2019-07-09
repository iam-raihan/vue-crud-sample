<template>
  <div class="home">
    <h1>Adopt a new best friend!</h1>

    <b-row>
      <b-col>
        <button @click="togglePetForm" class="btn btn-primary">
          Add New Pet
        </button>
      </b-col>
    </b-row>

    <b-row class="mt-4">
      <b-col md="8" offset-md="2" sm="10" offset-sm="1">
        <b-form
          @submit.prevent="onSubmit"
          @reset.prevent="onReset"
          v-if="showPetForm"
        >
          <b-form-row>
            <b-col md="5" offset-md="1" sm="6">
              <!-- name -->
              <b-form-group label="Pet's Name:" class="text-left">
                <b-form-input
                  type="text"
                  v-model="formData.name"
                  required
                  placeholder="Enter Name"
                />
              </b-form-group>
            </b-col>
            <b-col md="5" sm="6">
              <!-- breed -->
              <b-form-group label="Pet's Breed:" class="text-left">
                <b-form-input
                  type="text"
                  v-model="formData.breed"
                  placeholder="Enter Breed"
                />
              </b-form-group>
            </b-col>
          </b-form-row>

          <b-form-row>
            <b-col md="5" offset-md="1" sm="6">
              <!-- type -->
              <b-form-group label="Select Species:" class="text-left">
                <b-form-select
                  :options="formOptions.species"
                  required
                  v-model="formData.species"
                >
                  <template slot="first">
                    <option :value="null" disabled>
                      -- Select an option --
                    </option>
                  </template>
                </b-form-select>
              </b-form-group>
            </b-col>
            <b-col md="5" sm="6">
              <!-- gender -->
              <b-form-group label="Select Gender:" class="text-left">
                <b-form-select
                  :options="formOptions.gender"
                  required
                  v-model="formData.gender"
                >
                  <template slot="first">
                    <option :value="null" disabled>
                      -- Select an option --
                    </option>
                  </template>
                </b-form-select>
              </b-form-group>
            </b-col>
          </b-form-row>

          <b-form-row>
            <b-col md="5" offset-md="1" sm="6">
              <!-- age -->
              <b-form-group label="Enter Age:" class="text-left">
                <b-form-input
                  type="number"
                  v-model="formData.age"
                  required
                  placeholder="Enter age"
                />
              </b-form-group>
            </b-col>
            <b-col md="5" sm="6">
              <!-- weight -->
              <b-form-group label="Enter Weight:" class="text-left">
                <b-form-input
                  type="number"
                  v-model="formData.weight"
                  required
                  placeholder="Enter Weight"
                />
              </b-form-group>
            </b-col>
          </b-form-row>

          <b-form-row>
            <b-col md="5" offset-md="1" sm="6">
              <!-- color -->
              <b-form-group label="Pet's Color:" class="text-left">
                <b-form-input
                  type="text"
                  v-model="formData.color"
                  placeholder="Enter Color"
                />
              </b-form-group>
            </b-col>
            <b-col md="5" sm="6">
              <!-- location -->
              <b-form-group label="Pet's Location:" class="text-left">
                <b-form-input
                  type="text"
                  v-model="formData.location"
                  required
                  placeholder="Enter Location"
                  list="location-input-list"
                />
                <b-form-datalist
                  id="location-input-list"
                  :options="formOptions.locationList"
                />
              </b-form-group>
            </b-col>
          </b-form-row>

          <b-form-row>
            <b-col md="10" offset-md="1">
              <b-form-group label="Special Note:" class="text-left">
                <b-form-textarea
                  v-model="formData.note"
                  placeholder="Enter some note..."
                ></b-form-textarea>
              </b-form-group>
            </b-col>
          </b-form-row>

          <b-form-row>
            <b-col class="text-right">
              <b-button type="reset" variant="danger">
                Reset
              </b-button>
            </b-col>
            <b-col class="text-left">
              <b-button type="submit" variant="primary">
                Submit
              </b-button>
            </b-col>
          </b-form-row>
        </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      showPetForm: true,
      formOptions: {
        gender: [
          { value: "male", text: "Male" },
          { value: "femmale", text: "Female" }
        ],
        species: [{ value: "cat", text: "Cat" }, { value: "dog", text: "Dog" }],
        locationList: ["Dhaka", "Khulna", "Jashore"]
      },
      formData: {
        name: "",
        breed: "",
        species: null,
        gender: null,
        age: 0,
        weight: 0,
        color: "",
        location: "",
        note: ""
      }
    };
  },
  methods: {
    // ...mapActions(["addPet"]),
    togglePetForm() {
      this.showPetForm = !this.showPetForm;
    },
    onSubmit() {
      // TODO - validate form
      // this.addPet(this.formData);
      this.onReset();
    },
    onReset() {
      this.formData = {
        name: "",
        breed: "",
        species: null,
        gender: null,
        age: 0,
        weight: 0,
        color: "",
        location: "",
        note: ""
      };
    }
  }
};
</script>
