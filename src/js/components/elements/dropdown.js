const dropdown = () => {
  random();
  $(".generateCanavas").html("");
  $(".titleCanavas").html(`
<h1 class="pb-2 mb-2 text-xl font-bold border-b">Dropdown</h1>
<p>Dropdowns are contextual overlays that may be toggled to display lists of links and other information. Toggle them by
    clicking on them. </p>
`);

  for (let index = 0; index < 22; index++) {
    color = array.pop();
    cup_item = cup_copy.pop();
    $(".generateCanavas").append(`
    <div class="w-full accordion">
    <div class="grid grid-cols-1 gap-4 text-${color}-900">
        <div class="flex items-center justify-between px-5 py-3 bg-white rounded-lg shadow">
            <div class="flex items-center gap-4">
                <div class="w-5 h-5 bg-${color}-50 rounded-full"></div>
                <div class="w-5 h-5 bg-${color}-100 rounded-full"></div>
                <div class="w-5 h-5 bg-${color}-300 rounded-full"></div>
                <div class="w-5 h-5 bg-${color}-900 rounded-full"></div>
            </div>
            <div onclick="copyToClipBoard(this)" class="text-${color}-900 px-2 bg-${color}-100 rounded-full">
                copy
            </div>
        </div>
        <div class="shadow-md h-min overflow-hidden bg-white rounded-lg shadow-${color}-200">
            <div class="px-5 py-3 ">
                <div class="flex items-center justify-between">
                    <span class="py-1 text-lg md:text-xl font-semibold">Occupation: </span>
                    <select class='bg-${color}-50 px-2 py-1 outline-none ring ring-${color}-300 rounded-md' name=""
                        id="">
                        <option value="">${
                          ranking_copy[
                            Math.floor(Math.random() * ranking_copy.length)
                          ]
                        }</option>
                        <option value="">${
                          ranking_copy[
                            Math.floor(Math.random() * ranking_copy.length)
                          ]
                        }</option>
                        <option value="">${
                          ranking_copy[
                            Math.floor(Math.random() * ranking_copy.length)
                          ]
                        }</option>
                        <option value="">${
                          ranking_copy[
                            Math.floor(Math.random() * ranking_copy.length)
                          ]
                        }</option>
                        <option value="">${
                          ranking_copy[
                            Math.floor(Math.random() * ranking_copy.length)
                          ]
                        }</option>
                        <option value="">${
                          ranking_copy[
                            Math.floor(Math.random() * ranking_copy.length)
                          ]
                        }</option>
                        <option value="">${
                          ranking_copy[
                            Math.floor(Math.random() * ranking_copy.length)
                          ]
                        }</option>
                        <option value="">${
                          ranking_copy[
                            Math.floor(Math.random() * ranking_copy.length)
                          ]
                        }</option>
                        <option value="">${
                          ranking_copy[
                            Math.floor(Math.random() * ranking_copy.length)
                          ]
                        }</option>
                    </select>
                </div>
                <p class="py-1 clamp">
                    ${cup_item}
                </p>
            </div>
        </div>
    </div>
    </div>
    `);
  }
};
