import { ref, computed } from "vue";

const state = ref({ accessToken: "" });

function setAccessToken(accessToken: string) {
  console.log("ACCESS: ", accessToken);

  state.value.accessToken = accessToken;
}

const getAccessToken = computed(() => state.value.accessToken);

export { setAccessToken, getAccessToken };
