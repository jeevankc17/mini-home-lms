interface Config {
  GOOGLE_AUTH_CLIENT_ID: string;
  STRIPE_PUBLISHABLE_KEY: string;
  API_BASE_URL: string;
}

const CONFIG_KEYS: Config = {
  GOOGLE_AUTH_CLIENT_ID: "445218352675-3fu6pe5aj47qmf95p7tkto1ks7dslt7k.apps.googleusercontent.com",
  STRIPE_PUBLISHABLE_KEY: "pk_test_51OqyO8JTNlB05od79OBxEGi126hRzJaS74kc7Hxz6qefHWz5DJh9eQB5x1hou4eMiS7llQlFCVuh3qSIP20gY2Ur00VIrwYBxw",
  API_BASE_URL: "http://localhost:4000",
};

export default CONFIG_KEYS;
