import { spotifyData } from './spotifyData.js'
import { spotifyDataLarge } from './spotifyDataLarge.js'

console.log( spotifyData );
console.log( spotifyDataLarge );

const goodMorning = document.querySelector("#good-moring")

goodMorning.innerHTML ="This is emptines"
console.log( goodMorning.innerHTML);

goodMorning.innerHTML +=`
                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src=${ spotifyData[1].img } alt="...">
                        </div>
                        <div class="col-md-8 text-right">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
`