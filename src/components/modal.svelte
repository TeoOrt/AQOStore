<script lang="ts">
export let showModal: boolean; // boolean

let dialog: any; // HTMLDialogElement

$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
    bind:this={dialog}
    on:close={() => (showModal = false)}
    on:click|self={() => dialog.close()}
    class= "bg-transparent"
    >

    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div on:click|stopPropagation
        class = "relative overflow-y-auto overflow-x-hidden  items-center w-full lg:inset-0 h-[calc(100%-1rem)] max-h-90"
        tabindex="-1"
        aria-hidden="true"  >
           <!-- Modal content -->
        <div class="relative p-4 w-full max-w-md max-h-full">


            <div class="relative bg-gray-50 rounded-lg shadow border-gray-100 p-4 mt-4 border">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-3 lg:p-5  
                py-2 px-3  text-white bg-yellow-400 rounded
                ">
                    <h3 class="text-xl font-semibold text-white ">
                        Sign in to our platform
                    </h3>

                    <!-- svelte-ignore a11y-autofocus -->
                    <button autofocus on:click={() => dialog.close() } type="button" class="end-2.5 text-white bg-transparent hover:bg-gray-400 hover:text-gray-400 rounded-lg text-sm w-8 h-12 ms-auto inline-flex justify-center items-center " data-modal-hide="authentication-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>



                <div class="p-4 lg:p-5">
                    <form class="space-y-4" action="#">
                        <div>
                            <label for="email" class="block text-gray-900 mb-2 text-sm font-medium text-label-600">Your email</label>
                            <input type="email" name="email" id="email" class="bg-yellow-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5" placeholder="name@company.com" required>
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" class="bg-yellow-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 " required>
                        </div>
                        <div class="flex justify-between">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-yellow-300 rounded bg-yellow-50 focus:ring-3 focus:ring-yellow-300" required>
                                </div>
                                <label for="remember" class="ms-2 text-sm font-medium text-gray-900">Remember me</label>
                            </div>
                            <a href="#hello" class="text-sm text-gray-900 hover:underline ">Lost Password?</a>
                        </div>
                        <button type="submit" class="w-full text-white bg-gray-900 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Login to your account</button>
                        <div class="text-sm font-medium text-gray-800">
                            Not registered? <a href="#world" class="text-gray-900 hover:underline ">Create account</a>
                        </div>
                    </form>
                </div>

            </div>
        </div>
        </div>
        </dialog>

<style>

</style>
