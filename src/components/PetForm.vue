<template>
  <div>
    <b-row>
      <b-col md="8" offset-md="2" sm="10" offset-sm="1">
        <b-form
          @submit.prevent="handleSubmit"
          @reset.prevent="handleReset"
          autocomplete="off"
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
                  v-model="formPetType"
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
              <b-button type="submit" variant="primary">
                {{ petType ? "Update" : "Submit" }}
              </b-button>
            </b-col>
            <b-col class="text-left">
              <b-button type="reset" variant="danger">
                Reset
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
  props: {
    petData: {
      default() {
        return {
          name: "",
          breed: "",
          gender: null,
          age: 0,
          weight: 0,
          color: "",
          location: "",
          note: ""
        };
      }
    },
    petType: {
      default() {
        return null;
      },
      validator(value) {
        return ["cat", "dog"].indexOf(value) !== -1;
      }
    }
  },
  data() {
    return {
      submitBtnText: "",
      formOptions: {
        gender: ["Male", "Female"],
        species: [{ value: "cat", text: "Cat" }, { value: "dog", text: "Dog" }],
        locationList: ["Dhaka", "Khulna", "Jashore"]
      },
      formData: Object.assign({}, this.petData), // to avoid reactivity
      formPetType: this.petType
    };
  },
  methods: {
    handleSubmit() {
      // TODO - validate form

      this.$emit("form-submit", this.formData, this.formPetType);
      this.handleReset();
    },
    handleReset() {
      this.formData = Object.assign({}, this.petData);
      this.formPetType = this.petType;
    }
  }
};
</script>
