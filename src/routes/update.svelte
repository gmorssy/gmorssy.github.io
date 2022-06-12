<!-- All Tailwind components are taken from: https://tailwindcss.com/docs -->
<div class="hero h-screen bg-base-200 bg-green-100 left-100 bg-cover bg-center no-repeat bg-[url('/warden.jpg')]">
    <div class="flex flex-col">
        <h1 id="title" class="font-bold text-white text-center">Minecraft 1.19</h1>
        <p id="para" class="text-white text-center">Explore the <strong>brand</strong> new <strong>Ancient City.</strong></p>
        <div>
            <p id="para" class="text-white text-center">Read more about this update <a style="color: #7142ff;"  target="_blank" href="https://www.minecraft.net/en-us/article/the-wild-update-out-today-java">here</a>!</p>
        </div>
    </div>
</div>

<style>
    #title {
        font-size: 64px;
    }

    #para {
        font-size: 24px
    }

    @media only screen and (max-width: 480px) {
        #title {
            font-size: 36px;
        }

        #para {
            font-size: 12px
        }
    }
</style>