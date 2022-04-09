import wretch from "wretch";
const coinos = wretch().polyfills({ fetch }).url("https://coinos.io/api");
export async function get() {
  try {
    let { USD } = await coinos.url("/rates").get().json();
    return {
      body: { rate: USD },
    };
  } catch (e) {
    console.log(e);
    return {
      body: {},
      status: 500,
    };
  }
}
