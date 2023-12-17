<script lang="ts">
import Modal from "./modal.svelte";
let showModal :boolean= false;


const aqo_balloons = "https://www.instagram.com/aqo.balloons/";
let isMenuOpen:boolean = false;
function toggleMenu() {
    isMenuOpen = !isMenuOpen;
}

function toggleModal(){
    showModal = true;
}
</script>

<nav class="bg-white border-gray-200 ">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://aqoballoons.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://aqo-balloon-gallery.s3.amazonaws.com/AQO(1).png" alt="Flowbite Logo" style="height: 24vh;" />
        </a>
        <div class="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
            <button on:click={toggleModal} type="button" class="text-white bg-yellow-400 hover:bg-yellow-600 focus:ring-4 focus:outline-none
             focus:ring-yellow-400 font-semibold rounded-lg text-lg px-4 py-2 text-center  
             lg:text-2xl
             ">
                Login
              </button>

            
            <button on:click={toggleMenu}  type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-cta" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                        </button>
                        </div>
                        <div class="items-center justify-between  w-full lg:flex lg:w-auto lg:order-1 {isMenuOpen ? 'block' :'hidden'}" id="navbar-cta">
                            <ul class="flex flex-col font-medium text-md  p-4 lg:p-10 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white lg:text-3xl">
                                <li>
                                    <a href="#home" class="block py-2 px-3 lg:p-0 text-white bg-yellow-400 rounded lg:bg-transparent lg:text-gray-900 " aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a href={aqo_balloons} class="block py-2 px-3 lg:p-0 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent  ">About</a>
                                </li>
                                <li>
                                    <a href="#services" class="block py-2 px-3 lg:p-0 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent  ">Services</a>
                                </li>
                                <li>
                                    <a href="#contact" class="block py-2 px-3 lg:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent ">Contact</a>
                                </li>
                            </ul>
                        </div>
                        </div>

                        <Modal bind:showModal/>
                    </nav>

  
