<!-- All Tailwind components are taken from: https://tailwindcss.com/docs -->
<div style="max-width: 80%; margin: 50px auto;" class="shadow-xl relative h-4/5 bg-[#54d9e8] flex flex-col rounded-3xl">
    <div class="relative w-3/5 flex flex-row">
        <h1 class="m-5 text-5xl font-bold">About</h1>
        <div style="width: 90px; height: 90px;" class="relative mt-3.5">
            <a href="https://www.minecraft.net" target="_blank">
                <img src="/about.png" alt="blockForPage" loading="lazy" title="Visit the official Minecraft page">
            </a>
        </div>
    </div>
    <p id="main-text" class="m-5"><strong>Minecraft</strong> is a video game, created by Mojang Studios. The game was originally created by Markus "Notch" Persson, in the Java programming language. After multiple early private testing versions, it was first publicly released in May 2009 before fully releasing in November 2011, with Notch stepping down and Jens "Jeb" Bergensten taking over the development. Since then, Minecraft has been ported to several other platforms, and is the best-selling video game of all time, with over 238 million copies sold and nearly 140 million monthly active users as of 2021.</p>
</div>
<p class="text-center m-5"><strong>Important:</strong> NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG.</p>


<style>
    img {
        transform: scale(0.9);

        transition: transform 0.3s
    }

    img:hover {
        transform: scale(1);
    }

    #main-text {
        font-size: 24px;
    }

    @media only screen and (max-width: 1500px) {
        #main-text {
            font-size: 18px;
        }
    }

    @media only screen and (max-width: 780px) {
        #main-text {
            font-size: 14px;
        }
    }

    @media only screen and (max-width: 510px) {
        #main-text {
            font-size: 10px;
        }
    }

    @media only screen and (max-width: 350px) {
        #main-text {
            font-size: 8px;
        }
    }
</style>