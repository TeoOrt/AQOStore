<script lang="ts">
  import Balloon from "../assets/AQO(1).png";
  import CreateAccount from "./modal_libs/create_account.svelte";
  // import { push } from "svelte-spa-router";
  const aqo_balloons = "https://www.instagram.com/aqo.balloons/";
  
  let active:Boolean = false;
  let showModal:Boolean = true;

  const toggleButton =(active:Boolean) => {
    active = !active;
    console.log(active);
  };

</script>

<nav>
  <img src={Balloon} alt="Aqo_Balloons_Logo" class="Active" />

  <button on:click={()=>active =!active} class="toggle-button">
    <span class="bar" />
    <span class="bar" />
    <span class="bar" />
  </button>
  <div class="menu" class:active>
    <ul>
      <li><a href="#Gallery">Ballon Gallery</a></li>
      <li>Schedule an Event!</li>
      <li><a href={aqo_balloons}>Contact Us!</a></li>
      <button  on:click={()=>{showModal = !showModal;}}>Login</button>
    </ul>
  </div>
</nav>

<CreateAccount showModal={showModal}/>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Corben:wght@700&display=swap");

  nav {
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
    height: 25vh;
  }
  ul {
    display: flex;
    list-style: none;
  }

  li {
    display: block;
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

  .menu button {
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

  .toggle-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
    background-color: #fff;
    border: none;
  }
  .bar {
    height: 3px;
    width: 100%;
    background-color: #000;
    border-radius: 10px;
  }

  @media (max-width: 1000px) {
    .toggle-button {
      display: flex;
    }
    .menu {
      display: none;
      width: 100%;
    }
    nav {
      flex-direction: column;
      align-items: flex-start;
    }

    ul {
      width: 100%;
      flex-direction: column;
    }
    li {
      text-align: center;
      padding: 0.5rem 1rem;
    }
    .menu.active {
      display: flex;
    }
  }
</style>
