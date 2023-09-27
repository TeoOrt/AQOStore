<script lang="ts">
  import Modal from "./modal.svelte";
  import Labels from "./labels.svelte";
  let showModal = false;
</script>

<button on:click={() => (showModal = true)}> show modal </button>

<Modal bind:showModal>
  <!-- <h2 slot="header">
    Create Account!
    <button> Login</button>
  </h2> -->

  <h2 slot="header">Register</h2>
  <ul class="box" slot="form">
    <form>
      <Labels />
      <Labels />
      <Labels />
      <!-- <div class="group">
        <label for="userName">Username</label>
        <input
          type="text"
          name="userName"
          id="userName"
          placeholder="type your username"
          required
          class="input"
        />
      </div> -->
      <div class="inputBox">
        <label for="userPassword">Password</label>
        <input
          type="password"
          name="userPassword"
          id="userPassword"
          placeholder="type your password"
          required
        />
      </div>
      <div class="inputBox">
        <label for="userConfirmPassword">Confirm Password</label>
        <input
          type="password"
          name="userPassword"
          id="userConfirmPassword"
          placeholder="confirm your password"
          required
        />
      </div>
      <button type="submit" name="" style="float: left;">Submit</button>
      <a class="button" href="login.html" style="float: left;">Login</a>
    </form>
  </ul>
</Modal>

<style>
  h2 {
    color: #fff;
  }

  .box button[type="submit"],
  a.button {
    font-family: sans-serif;
    background: #03a9f4;
    font-size: 11px;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-weight: 600;
    padding: 10px 20px;
    letter-spacing: 2px;
    outline: none;
    text-transform: uppercase;
    text-decoration: none;
    margin: 2px 10px 2px 0;
    display: inline-block;
  }

  .box {
    border-radius: 10px;
    margin: auto auto;
    padding: 40px;
  }
</style>
