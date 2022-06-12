<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<script>
    let totalGoDown = ['about', 'memory', 'dyk', 'update'];
    let goDown = 'memory';
    let timeOutID;

    // Original state of "loop"
    function resetLoop() {
        totalGoDown = (goDown == 'memory') ? ['memory', 'dyk', 'update', 'about'] : ['about', 'memory', 'dyk', 'update'];
        goDown = 'memory';
    }
</script>

<!-- All Tailwind components are taken from: https://tailwindcss.com/docs -->
<div class="overflow-x-hidden scroll-smooth">
    <div class="hero min-h-screen bg-cover bg-center no-repeat bg-[url('/homebackground.jpg')]">
        <div class="h-300">
            <a href="#{goDown}">    
                <button id="index-btn" class="btn btn-accent fixed z-50 bottom-12 right-12" on:click={() => {
                    if (timeOutID != undefined) {
                        clearTimeout(timeOutID);
                    }
                    
                    // Make rotation of items
                    totalGoDown.push(totalGoDown[0]);
                    totalGoDown.splice(0, 1);
                    
                    goDown = totalGoDown[0];

                    // Resets the rotation if button is not clicked after 5 seconds
                    timeOutID = setTimeout(resetLoop, 5000);
                }}><i class="fa fa-arrow-down" style='font-size:24px'></i></button>
            </a>
            <div class="w-1000 h-200 bg-primary shadow-2xl p-2.5 m-2.5">
                <p class="text-5xl font-bold text-white text-center" style="font-size: 56px">Cave Page</p>
            </div>
            <div class="w-50 h-50 bg-secondary">
                <p class="font-bold text-white text-center" style="font-size: 20px">A Minecraft Fan Page</p>
            </div>
        </div>
    </div>


    <div class="bg-base-200 flex flex-col gap-20 py-20" style="z-index: -1">
        <a href="/memory" style="width: 70%;">
            <div id="memory" style="height: 400px; border-radius: 0px 50px 50px 0px;" class="shadow-xl bg-cover bg-center no-repeat bg-[url('/home/memory.png')]">
                <p id="title" class="text-center font-bold m-2.5">Memory</p>
            </div>
        </a>

        <a href="/dyk" class="relative" style="left: 30%; width: 70%;">
            <div id="dyk" style="height: 400px; border-radius: 50px 0px 0px 50px;" class="shadow-xl bg-cover bg-center no-repeat bg-[url('/home/dyk.png')]">
                <p id="title" class="text-center font-bold m-2.5">Did you know?</p>
            </div>
        </a>

        <a href="/update" style="width: 70%;">
            <div id="update" style="height: 400px; border-radius: 0px 50px 50px 0px;" class="shadow-xl bg-cover bg-center no-repeat bg-[url('/home/update.png')]">
                <p id="title" class="text-center font-bold m-2.5">Update</p>
            </div>
        </a>

        <a href="/about" class="relative" style="left: 30%; width: 70%;">
            <div id="about" style="height: 400px; border-radius: 50px 0px 0px 50px;" class="shadow-xl bg-cover bg-center no-repeat bg-[url('/home/about.png')]">
                <p id="title" class="text-center font-bold m-2.5">About</p>
            </div>
        </a>
    

    
    </div>
</div>

<style>
    #memory {
        background-color: #d2d2d2;

        transition: background-color 0.7s, transform 0.7s;
    }

    #memory:hover {
        background-color: #ff7a4e;
        transform: scale(1.01);
    }

    #dyk {
        background-color: #d2d2d2;

        transition: background-color 0.7s, transform 0.7s;
    }

    #dyk:hover {
        background-color: #b0ff85;
        transform: scale(1.01);
    }

    #update {
        background-color: #d2d2d2;

        transition: background-color 0.7s, transform 0.7s;
    }

    #update:hover {
        background-color: #85a2ff;
        transform: scale(1.01);
    }

    #about {
        background-color: #d2d2d2;

        transition: background-color 0.7s, transform 0.7s;
    }

    #about:hover {
        background-color: #e5ff85;
        transform: scale(1.01);
    }

    #title {
        font-size: 60px;
    }

    @media only screen and (max-width: 400px) {
        #title {
            font-size: 46px;
        }
    }
</style>