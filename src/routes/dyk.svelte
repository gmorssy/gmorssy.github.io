<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<script>
    import { dyk } from "../stores.js";
    import { fade } from "svelte/transition";

    let dykValue;
    let activeDyk;

    let backdrop = {width: 90, left: 5, showItems: true, chosenColor: '#f28cd9', colors: ['#f28cd9', '#8cf2b3', '#f2bc8c', '#d2f28c', '#8ce8f2']};

    dyk.subscribe((value) => {
    dykValue = value;
})
    // Start of animation
    function beginChange() {
        backdrop.width = 0;
        backdrop.left = 50;
        backdrop.showItems = false;

        setTimeout(changeDyk, 700);
        setTimeout(changeDyk2, 1050);
    }

    // End of animation 1
    function changeDyk() {
        activeDyk = dykValue[0];
        
        dykValue.push(dykValue[0]);
        dykValue.splice(0, 1);

        backdrop.width = 90;
        backdrop.left = 5;
        backdrop.chosenColor = backdrop.colors[Math.floor(Math.random()*backdrop.colors.length)]
    }

    // End of animation 2
    function changeDyk2() {
        backdrop.showItems = true;
    }

    changeDyk();
</script>

<!-- All Tailwind components are taken from: https://tailwindcss.com/docs -->
<div style="top: 10%; left: 10%; border-radius: 50px;" class="shadow-xl relative flex flex-col w-4/5 h-4/5 bg-[#dfdfdf]">
    <button id="dyk-btn" style="width: 50px; height: 50px; left: 70%" class="btn btn-primary shadow-xl mt-5 relative" on:click={beginChange} disabled={!backdrop.showItems}><i class="fa fa-undo"></i></button>
    
    <div id="backdrop" style="width: {backdrop.width}%; top: 3%; left: {backdrop.left}%; background-color: {backdrop.chosenColor};" class="rounded shadow-xl relative flex">
        {#if backdrop.showItems}
        <div id="info" style="top: 5%; left: 3%" class="relative" in:fade={{ duration: 100 }} out:fade={{ duration: 100 }}>
            <h1 id="title" style="text-align:center; font-weight: bold; margin-top: 20px;">{activeDyk.title}</h1>
            <p id="para" style="font-weight: bold; margin: 20px;">{activeDyk.desc}</p>
        </div>

        <div id="image" style="max-width: 45%; height: 90%; top: 5%;" class="relative" in:fade={{ duration: 100 }} out:fade={{ duration: 100 }}>
            <img src="{activeDyk.image}" alt="img" loading="lazy" style="max-height: 400px; margin: 10% 0">
        </div>
        {/if}
    </div>
</div>

<style>
    #backdrop {
        height: 80%;
        flex-direction: row;

        transition: width 0.5s, left 0.5s;
    }

    #info {
        width: 45%; 
        height: 90%; 
    }

    #title {
            font-size: 36px;
        }
    
    #para {
        font-size: 24px;
    }

    #image {
        left: 7%;
    }
    
    @media only screen and (max-width: 1210px) {
        #para {
            font-size: 20px;
        }
    }

    @media only screen and (max-width: 910px) {
        #title {
            font-size: 24px;
        }

        #para {
            font-size: 16px;
        }

        #backdrop {
            width: 70%;
        }
    }

    @media only screen and (max-width: 650px) {
        #title {
            font-size: 20px;
        }

        #para {
            font-size: 12px;
        }

        #backdrop {
            height: 70%;
        }
    }

    @media only screen and (max-width: 500px) {
        #backdrop {
            flex-direction: column; 
        }

        #info {
            width: 90%;
            height: 45%;
        }

        #image {
            left: 25%;
        }
    }

    @media only screen and (max-width: 350px) {
        #title {
            font-size: 16px;
        }

        #para {
            font-size: 8px;
        }
    }
</style>