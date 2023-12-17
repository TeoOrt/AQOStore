<script lang="ts">
   let counter:number = 0;
</script>




<div class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 flex justify-center">

    <button  on:focus on:mouseover={() => {counter+=1}} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"> Click Me to Add 1 </button>

    <p class="text-lg font-medium"> {counter}</p>
</div>

