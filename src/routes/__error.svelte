<!-- ERROR PAGE DISPLAYED WHEN ENDPOINTS DONT EXIST -->
<script context="module">
    export const load = ({ error, status }) => {
        return {
            props: {
                title: `${status}: ${error.message}`,
            },
        };
    };
</script>

<script>
    export let title;
</script>

<!-- All Tailwind components are taken from: https://tailwindcss.com/docs -->
<div class="error">
    <div style="height: 400px;" class="bg-cover bg-center no-repeat bg-[url('/home/about.png')]">
        <h1 style="top: 70%" class="relative">{title}</h1>
        <a href="/">    
            <button class="btn btn-primary shadow-xl relative w-3/5" style="top: 80%; left: 20%;">Return to main page</button>
        </a>
    </div>
</div>

<style>
    .error {
        height: 100vh;
        display: grid;
        gap: var(--spacing-32);
        place-content: center;
        place-items: center;
        font-size: 36px;
        font-weight: bold;
    }
</style>
