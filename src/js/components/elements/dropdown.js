const dropdownController = (el) => {
$(el.parentNode.parentNode.querySelector('[role="dropdown"]')).toggle(
["hidden","collapse"]
);
};

const dropdownSelectController = (el) => {
console.log($(el).attr("data-dropdown-item"));
console.log(
$($(el).parent().parent().parent().children()[1]).toggle(["hidden","collapse"])
);
};

const dropdown = () => {
random();
$(".generateCanavas").html("");
$(".generateCanavas").removeClass(
"md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
);
// $(".generateCanavas").removeClass('grid-cols-1');
$(".titleCanavas").html(`
<h1 class="pb-2 mb-2 text-xl font-bold border-b">${
  emojis[Math.floor(Math.random() * emojis.length)]
  } Dropdown</h1>
<p>Dropdowns are contextual overlays that may be toggled to display lists of links and other information. Toggle them by
  clicking on them. </p>
`);

for (let index = 0; index < array_length; index++) { color=array.pop(); cup_item=cup_copy.pop();
  $(".generateCanavas").append(` <div class="w-full accordion">
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
    <div class="h-[15rem] overflow-hidden bg-white rounded-lg border">
      <div class="px-5 py-3 grid md:grid-cols-2">
        <div class="relative">
          <div>
            <button type="button" onclick="dropdownController(this)"
              class="inline-flex justify-center rounded-md border border-${color}-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-${color}-700 hover:bg-${color}-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-${color}-100 focus:ring-${color}-500"
              id="menu-button" aria-expanded="true" aria-haspopup="true">
              Options
              <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </button>
          </div>

          <div
            class="origin-top-right overflow-hidden absolute left-0 mt-2 w-56 rounded-lg shadow shadow-${color}-400/20 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="dropdown" aria-orientation="vertical" aria-labelledby="dropdown-button" tabindex="-1">
            <div class="py-1" role="none">
              <!-- Active: "bg-${color}-100 text-${color}-900", Not Active: "text-${color}-700" -->
              <a href='#' data-dropdown-item="${
                names[Math.floor(Math.random() * names.length)]
              }" onclick='dropdownSelectController(this)'
                class="mx-2 my-1 rounded-lg text-${color}-900  hover:bg-${color}-100/90 block px-4 py-2 text-sm"
                role="dropdownitem" tabindex="-1" id="dropdown-item-0">${
                names[Math.floor(Math.random() * names.length)]
                }</a>
              <a href='#' data-dropdown-item="${
                names[Math.floor(Math.random() * names.length)]
              }" onclick='dropdownSelectController(this)'
                class="mx-2 my-1 rounded-lg text-${color}-900  hover:bg-${color}-100/90 block px-4 py-2 text-sm"
                role="dropdownitem" tabindex="-1" id="dropdown-item-0">${
                names[Math.floor(Math.random() * names.length)]
                }</a>
              <a href='#' data-dropdown-item="${
                names[Math.floor(Math.random() * names.length)]
              }" onclick='dropdownSelectController(this)'
                class="mx-2 my-1 rounded-lg text-${color}-900  hover:bg-${color}-100/90 block px-4 py-2 text-sm"
                role="dropdownitem" tabindex="-1" id="dropdown-item-0">${
                names[Math.floor(Math.random() * names.length)]
                }</a>
              <a href='#' data-dropdown-item="${
                names[Math.floor(Math.random() * names.length)]
              }" onclick='dropdownSelectController(this)'
                class="mx-2 my-1 rounded-lg text-${color}-900  hover:bg-${color}-100/90 block px-4 py-2 text-sm"
                role="dropdownitem" tabindex="-1" id="dropdown-item-0">${
                names[Math.floor(Math.random() * names.length)]
                }</a>
              </form>
            </div>
          </div>
        </div>
        <div class="relative">
          <div>
            <button type="button" onclick="dropdownController(this)"
              class="inline-flex justify-center rounded-md border border-${color}-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-${color}-700 hover:bg-${color}-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-${color}-100 focus:ring-${color}-500"
              id="menu-button" aria-expanded="true" aria-haspopup="true">
              Options
              <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </button>
          </div>

          <div
            class="origin-top-right absolute left-0 mt-2 w-56 rounded-lg shadow shadow-${color}-400/20 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="dropdown" aria-orientation="vertical" aria-labelledby="dropdown-button" tabindex="-1">
            <div class="py-1" role="none">
              <!-- Active: "bg-${color}-100 text-${color}-900", Not Active: "text-${color}-700" -->
              <a href='#' data-dropdown-item="${
                names[Math.floor(Math.random() * names.length)]
              }" onclick='dropdownSelectController(this)'
                class="mx-2 my-1 rounded-lg text-${color}-900  hover:bg-${color}-100/90 block px-4 py-2 text-sm"
                role="dropdownitem" tabindex="-1" id="dropdown-item-0">${
                names[Math.floor(Math.random() * names.length)]
                }</a>
              <a href='#' data-dropdown-item="${
                names[Math.floor(Math.random() * names.length)]
              }" onclick='dropdownSelectController(this)'
                class="mx-2 my-1 rounded-lg text-${color}-900  hover:bg-${color}-100/90 block px-4 py-2 text-sm"
                role="dropdownitem" tabindex="-1" id="dropdown-item-0">${
                names[Math.floor(Math.random() * names.length)]
                }</a>
              <a href='#' data-dropdown-item="${
                names[Math.floor(Math.random() * names.length)]
              }" onclick='dropdownSelectController(this)'
                class="mx-2 my-1 rounded-lg text-${color}-900  hover:bg-${color}-100/90 block px-4 py-2 text-sm"
                role="dropdownitem" tabindex="-1" id="dropdown-item-0">${
                names[Math.floor(Math.random() * names.length)]
                }</a>
              <a href='#' data-dropdown-item="${
                names[Math.floor(Math.random() * names.length)]
              }" onclick='dropdownSelectController(this)'
                class="mx-2 my-1 rounded-lg text-${color}-900  hover:bg-${color}-100/90 block px-4 py-2 text-sm"
                role="dropdownitem" tabindex="-1" id="dropdown-item-0">${
                names[Math.floor(Math.random() * names.length)]
                }</a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `);
  }
  };