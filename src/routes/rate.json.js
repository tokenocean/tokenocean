import wretch from "wretch";
const coinos = wretch().polyfills({ fetch }).url("https://coinos.io/api");
export async function get() {
  try {
    let { USD, CAD } = await coinos.url("/rates").get().json();
    return {
      body: { rateUSD: USD, rateCAD: CAD },
    };
  } catch (e) {
    console.log(e);
    return {
      body: {},
      status: 500,
    };
  }
}
