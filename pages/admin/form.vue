<template>
  <div class="form-panel">
    <h3 class="mb-5 pt-3 pb-3 rounded-lg bg-gray-50">Create profile</h3>
    <form action="#" method="POST" @submit.prevent="checkForm">
      <div class="">
        <div class="">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3">
              <my-label for="first-name" title="First Name" />
              <input
                id="first-name"
                required
                type="text"
                class="form-input form-simple"
                v-model="profileForm.firstName"
              />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <my-label for="last-name" title="Last Name" />
              <input
                id="last-name"
                required
                type="text"
                class="form-input form-simple"
                v-model="profileForm.lastName"
              />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <my-label for="email-address" title="Email Address" />
              <input
                id="email-address"
                required
                type="text"
                class="form-input form-simple"
                v-model="profileForm.email"
              />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <my-label for="phone" title="Phone" />
              <input
                id="phone"
                type="text"
                required
                class="form-input form-simple"
                v-model="profileForm.phone"
              />
            </div>

            <div class="col-span-6 sm:col-span-3 lg:col-span-1">
              <my-label for="gender" title="Gender" />
              <select
                id="gender"
                class="form-input form-dropdown"
                required
                v-model="profileForm.gender"
              >
                <option value="1">Male</option>
                <option value="0">Female</option>
              </select>
            </div>

            <div class="col-span-6 sm:col-span-3 lg:col-span-1">
              <label for="city" class="block text-sm font-medium text-gray-700"
                >City</label
              >
              <input
                type="text"
                name="city"
                id="city"
                autocomplete="address-level2"
                required
                class="form-input form-simple"
                v-model="profileForm.city"
              />
            </div>

            <div class="col-span-6 sm:col-span-3 lg:col-span-1">
              <label
                for="region"
                class="block text-sm font-medium text-gray-700"
                >State / Province</label
              >
              <input
                type="text"
                name="region"
                id="region"
                required
                autocomplete="address-level1"
                class="form-input form-simple"
                v-model="profileForm.state"
              />
            </div>

            <div class="col-span-6 sm:col-span-3 lg:col-span-1">
              <label
                for="postal-code"
                class="block text-sm font-medium text-gray-700"
                >ZIP / Postal code</label
              >
              <input
                type="text"
                name="postal-code"
                id="postal-code"
                required
                autocomplete="postal-code"
                class="
                  mt-1
                  focus:ring-indigo-500 focus:border-indigo-500
                  block
                  w-full
                  shadow-sm
                  sm:text-sm
                  border-gray-300
                  rounded-md
                "
                v-model="profileForm.zipCode"
              />
            </div>
            <div class="col-span-6 sm:col-span-3 lg:col-span-2">
              <my-label for="country" title="Country" />
              <select
                id="country"
                class="form-input form-dropdown"
                required
                v-model="profileForm.country"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>
        </div>
        <div class="px-4 py-3 mt-4 rounded-lg bg-gray-50 text-right sm:px-6">
          <button type="submit" class="btn-submit">Save</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
export default {
  layout: "admin-template",
  data() {
    return {
      profileForm: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        gender: "1",
        country: "",
        city: "",
        state: "",
        zipCode: "",
      },
    };
  },

  methods: {
    checkForm() {
      // const {
      //   firstName,
      //   lastName,
      //   email,
      //   phone,
      //   gender,
      //   country,
      //   city,
      //   state,
      //   zipCode,
      // } = this.profileForm;

      alert(JSON.stringify(this.profileForm));
    },
  },
};
</script>
