import axios from "axios";

const API_KEY = "AIzaSyBQ_m_GXdE2oNUF04nsz5C8pc4GNOZYXtI";

async function createUser(email, password) {
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
}
