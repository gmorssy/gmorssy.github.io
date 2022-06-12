<script>
  import "../app.css";
  import { theme, THEMES } from "$lib/stores/theme";
  import { items } from "../stores.js";

  let itemsValue;

  const toggleTheme = () => {
    $theme = $theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
  };

  items.subscribe((value) => {
    itemsValue = value;
})
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
</svelte:head>

<!-- All Tailwind components are taken from: https://tailwindcss.com/docs -->
<main>
  <div class="h-screen drawer w-full">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="flex flex-col drawer-content">
      <!-- Navbar -->
      <div class="w-full navbar bg-base-300 sticky top-0 z-50 justify-center">
          <div class="flex-none lg:hidden">
            <label for="my-drawer-3" class="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-6 h-6 stroke-current"
                ><path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                /></svg
              >
            </label>
          </div>

            <div class="flex-none hidden lg:block indicator-center">
              <ul class="menu menu-horizontal">
                <!-- Navbar menu content here -->
                {#each itemsValue as items}
                  <li><a href="{items.id}">{items.name}</a></li>
                {/each}
              </ul>
          </div>
      </div>
      <!-- Page content here -->

      <slot />
    </div>
    <div class="drawer-side">
      <label for="my-drawer-3" class="drawer-overlay" />
      <ul id="side" class="p-4 overflow-y-auto menu w-80 bg-base-100">
        <!-- Sidebar content here -->
        {#each itemsValue as items}
              <li><a href="{items.id}">{items.name}</a></li>
        {/each}
      </ul>
    </div>
  </div>
</main>

<style>
  #side {
    max-width: 65%;
  }
</style>
