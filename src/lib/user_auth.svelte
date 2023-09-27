<script lang="ts">
  let email = "";
  let password = "";
  let error_display = "";

  const validateEmail = (email: string) => {
    const regex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (regex.test(email) === false) {
      throw new Error("Please enter valid email address");
    }
  };

  const onSubmit = async (e: any) => {
    try {
      validateEmail(email);
      const data = {
        email,
        password,
      };
      await console.log(data);
    } catch (error: any) {
      error_display = error;
    }
  };
</script>

<div class="login">
  <form on:submit|preventDefault={onSubmit}>
    <h1>SIGN UP</h1>
    <h2>LOGIN</h2>
    <div class="input-group">
      <label for="email">Email</label>
      <input
        placeholder="Enter your email"
        type="text"
        id="email"
        name="email"
        bind:value={email}
        required
      />
    </div>
    <div class="input-group">
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        bind:value={password}
        required
      />
    </div>
    <p class="PasswordHints">
      Must be 8 or more characters and contain at least 1 number and 1 special
      character
    </p>
    <button type="submit">Submit</button>
    <p style="color: red;">
      {error_display}
    </p>
  </form>
</div>

<style>
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Mooli;
  }
  form {
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #e6e1c5;
    display: flex;
    flex-direction: column;
    width: 300px;
  }
  .input-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }
  label {
    font-family: Mooli;
    margin-bottom: 5px;
    font-size: 23px;
    font-weight: 800;
  }
  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  button {
    padding: 10px 15px;
    background-color: #fc6dab;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  button:hover {
    background-color: #c04cfd;
  }
  .PasswordHints {
    font-size: 10px;
    color: #707078;
  }
</style>
