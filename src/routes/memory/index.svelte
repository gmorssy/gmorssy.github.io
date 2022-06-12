<script>
    import { fly, fade } from "svelte/transition";

    let width = 4;
    let height = 4;

    let images = ['/memo/apple.png','/memo/diamond.png','/memo/cooked_porkchop.png','/memo/ender_pearl.png','/memo/flint_and_steel.png','/memo/golden_pickaxe.png','/memo/green_dye.png','/memo/ink_sac.png'];

    let cards = [];
    let cardsplit = [];
    let foundCards = [];

    let getPath1 = [];
    let getPath2 = [];

    let attempts = 10;
    let points = 0;

    // Randomize the order of memory in a list
    function randomMemo() { 
        let types = ["1", "2", "3", "4", "5", "6", "7", "8"];

        types.push(...types);

        for (let j = 0; j < width*height; j++) {
            let randInt = Math.floor(Math.random() * (16-j));
            cards.push(types[randInt]);
            types.splice(randInt, 1);
                
        }

        for (let i = 0; i < height; i++) {
            cardsplit.push([]);
            
            for (let j = 0; j < width; j++) {
                cardsplit[cardsplit.length-1].push([cards[0],false,false,true]);
                
                cards.splice(0, 1);
            }
        }
    }    
    randomMemo();
</script>

<!-- All Tailwind components are taken from: https://tailwindcss.com/docs -->
<div class="justify-center self-center flex flex-row">
    <div class="w-100 h-10 justify-center self-center content-center bg-secondary shadow-xl rounded" style="margin: 15px;">
        
        <p id="attempts" class="relative" style="bottom: 15px">Health: {attempts}</p>
    </div>
    <div class="w-100 h-10 justify-center self-center content-center bg-purple-300 shadow-xl rounded" style="margin: 15px;" on:click={() => { location.reload(); /* https://www.w3schools.com/jsref/met_loc_reload.asp */ }}>
        <button id="attempts" class="relative" style="bottom: 15px">Restart</button>
    </div>
</div>

{#if attempts == 0}
<div class="fixed bg-[#ff9090f0] z-50" style="top: 40%; padding: 10px 44%;" in:fade={{ duration: 100 }}>
    <p id="attempts" class="h-2.5" style="width: 200px; margin-bottom: 30px;" in:fly={{ duration: 500, x: 1000 }}>Game Over</p>
</div>
{/if}

{#if points == 16}
<div class="fixed bg-[#09ff90f0] z-50" style="top: 40%; padding: 10px 44%;" in:fade={{ duration: 100 }}>
    <p id="attempts" class="h-2.5" style="width: 200px; margin-bottom: 30px;" in:fly={{ duration: 500, x: 1000 }}>Amazing</p>
</div>
{/if}

<div id="backdrop" class="h-4/5 shadow-xl justify-center self-center bg-green-200 rounded-3xl flex flex-col">
    {#each cardsplit as heightY}
    <div class="justify-center self-center flex flex-row m-2.5 h-1/5">
        {#each heightY as widthX}
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="swap swap-flip m-2.5 card {widthX[0]}" on:click={() => {
                setTimeout(() => {
                    let num1 = cardsplit.indexOf(heightY);
                    let num2 = heightY.indexOf(widthX);

                    // Check if card is not found when clicked
                    if (cardsplit[num1][num2][3]) {
                        if (!cardsplit[num1][num2][1]) {
                            foundCards.push(widthX[0]);
                            cardsplit[num1][num2][2] = true;
                            getPath1.push(num1);
                            getPath2.push(num2);
                        }

                        cardsplit[num1][num2][1] = true;

                        // check if two cards are flipped
                        if (foundCards.length >= 2) {
                            for (let i = 0; i < 4; i++) {
                                for (let j = 0; j < 4; j++) {
                                    cardsplit[i][j][1] = true;
                                }
                            }

                            setTimeout(() => {
                                // If both cards you turn are the same
                                if (foundCards[0] == foundCards[1]) {
                                    for (let i = 0; i< getPath1.length; i++) {
                                        cardsplit[getPath1[i]][getPath2[i]][3] = false;
                                    }
                                }

                                else {
                                    attempts--;
                                }
 
                                points = 0;

                                for (let i = 0; i < 4; i++) {
                                    for (let j = 0; j < 4; j++) {
                                        if (cardsplit[i][j][3]) {
                                            cardsplit[i][j][1] = false;
                                            cardsplit[i][j][2] = false;
                                        }

                                        else {
                                            // Count how many cards have been found
                                            points++;
                                        }
                                    }
                                }

                                foundCards = [];
                                getPath1 = [];
                                getPath2 = [];

                                if (attempts <= 0) {
                                    for (let i = 0; i < 4; i++) {
                                    for (let j = 0; j < 4; j++) {
                                        if (cardsplit[i][j][3]) {
                                            cardsplit[i][j][1] = true;
                                            cardsplit[i][j][2] = true;
                                        }
                                    }
                                }
                                }
                            }, 1000);
                        }
                    }
                }, 1);
            }}>
  
                <!-- this hidden checkbox controls the state -->
                    <input id="flip-input" type="checkbox" checked={widthX[2]} disabled={widthX[1]}/>
                {#if widthX[3]}
                    <div id="card-turn" class="swap-on bg-base-30 shadow-xl bg-primary">
                        <img src="{images[widthX[0]-1]}" alt="memoryImage" loading="lazy" class="w-full h-full" style="image-rendering: pixelated">
                    </div>
                {/if}

                {#if !widthX[3]}
                    <div id="card-turn" class="swap-on bg-base-30 shadow-xl bg-green-500">
                        <img src="{images[widthX[0]-1]}" alt="memoryImage" loading="lazy" class="w-full h-full" style="image-rendering: pixelated">
                    </div>
                {/if}
                <div id="card-turn" class="swap-off bg-base-30 shadow-xl bg-primary"/>
            </label>
        {/each}
    </div>
    {/each}
</div>

<style>
    #attempts {
        margin-top:20px; 
        font-size: 20px;
        text-align: center;
        font-weight: bold;
    }

    #backdrop {
        width: 30%;
    }

    .card {
        width: 20%;
    }

    #card-turn {
        width: 80px;
        height: 80px;
    }

    @media only screen and (max-width: 1230px) {
        #backdrop {
            width: 70%;
        }
    }

    @media only screen and (max-width: 580px) {
        #backdrop {
            width: 95%;
        }
    }

    @media only screen and (max-width: 410px) {
        #backdrop {
            width: 95%;
        }

        #card-turn {
        width: 50px;
        height: 50px;
        }
    }
</style>