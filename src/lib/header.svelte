<script lang="ts">
  import Balloon from "../assets/AQO(1).png";
  // import { push } from "svelte-spa-router";
  const aqo_balloons = "https://www.instagram.com/aqo.balloons/";
</script>

<nav class="navbar">
  <img src={Balloon} alt="Aqo_Balloons_Logo" />
  <div class="menu">
    <ul>
      <li><a href="#Gallery">Ballon Gallery</a></li>
      <li>Schedule an Event!</li>
      <li><a href={aqo_balloons}>Contact Us!</a></li>
    </ul>
    <button>Login</button>
  </div>
</nav>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Corben:wght@700&display=swap");

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20x 20x;
  }

  .menu {
    display: flex;
    justify-content: center;
  }

  img {
    height: 200px;
    width: 200px;
  }
  ul {
    list-style: none;
  }

  li {
    display: inline-block;
    padding-top: 15px;
    padding: 15px 55px;
    cursor: pointer;
    font-family: "Corben", cursive;
    font-size: 33px;
    font-weight: 700;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  a:hover {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
  a.s-b9koqo5Bw7-F {
    color: #000;
  }

  button {
    color: #fff;
    background: #ffd33b;
    font-family: "Corben", cursive;
    font-size: 33px;
    padding: 13px 45px;
    margin: 10px 33px;
    border-radius: 20px;
    transition: background-color 0.1s ease;
    box-sizing: border-box;
    transition: all 0.25s ease;
    border: 0;
    cursor: pointer;
    box-shadow: 0 10px 20px -10px rgb(var(--vs-primary) / 50%);
  }
</style>
