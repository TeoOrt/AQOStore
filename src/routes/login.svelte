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

  const onSubmit = async (e) => {
    try {
      validateEmail(email);
      const data = {
        email,
        password,
      };
      await console.log(data);
    } catch (error) {
      error_display = error;
    }
  };
</script>

<div class="login">
  <form on:submit|preventDefault={onSubmit}>
    <div class="input-group">
      <h1>Create Username</h1>
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
        bind:value={password}
        required
      />
    </div>
    <button type="submit">Submit</button>
    <p style="color: red;">
      {error_display}
    </p>
  </form>
</div>

<style>
  * {
    box-sizing: border-box;
  }
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
  }
  form {
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
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
    margin-bottom: 5px;
  }
  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  button {
    padding: 10px 15px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  button:hover {
    background-color: #0056b3;
  }
</style>
