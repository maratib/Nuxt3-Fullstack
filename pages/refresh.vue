<template>
  <div>
    <button
      class="py-4 px-8 bg-teal-600 rounded-2xl text-gray-100"
      @click="submit"
    >
      Refresh token
    </button>
    <p v-if="error" class="p-4 text-2xl text-red-700">{{ error }}</p>
    <p v-if="success" class="p-4 text-2xl text-green-700">{{ success }}</p>

    <div class="border-t-2 border-t-gray-100 py-6">
      <h3 class="text-2xl text-teal-500 mb-6 font-bold">Tokens</h3>

      <p v-if="!getAccessToken" class="text-xl text-gray-500">
        You are not logged in.
      </p>
      <p v-if="getAccessToken" class="text-xl text-gray-500 break-all">
        You are logged in with access token: {{ getAccessToken }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { setAccessToken, getAccessToken } from "~~/auth";
import { ref } from "vue";

export default {
  setup() {
    const error = ref("");
    const success = ref("");
    const submit = async () => {
      try {
        error.value = "";
        const response = await axios.post("/api/user/refresh_token");
        console.log(response);

        const { data } = response;
        console.log(data.accessToken);
        setAccessToken(data.accessToken);
        success.value = "Access token generated. Go to / to see the token.";
      } catch (err) {
        error.value = err.response.data.message || err.message;
        setAccessToken("");
        console.log(err);
      }
    };
    return { submit, error, success, getAccessToken };
  },
};
</script>
