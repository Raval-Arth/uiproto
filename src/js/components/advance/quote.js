const profile = () => {
  let profile = 0;
  let joke = 0;
  let joke_html = "";
  let color = "";
  color = Math.floor(Math.random() * primary.length);
  joke = Math.floor(Math.random() * joke_length);
  profile = Math.floor(Math.random() * profile_lenght);

  quote[joke] = quote[joke].replace(/(\n)/g, "<br>");
  joke_html = `
    <div class='mx-auto flex justify-center'>
      <div>
        <div class="my-5 flex flex-col gap-2">
          <div class='ml-20 w-fit joke px-4 py-2 text-lg font-medium h-fit bg-slate-200 rounded-xl'>
            <p class='joke py-2 text-lg font-medium rounded leading-7'>${quote[joke]}</p>
          </div>
          <div class='ml-14 w-4 h-4 joke px-4 py-2 text-lg font-medium bg-slate-200 rounded-xl'></div>
        </div>
        <img onclick="collapseControl(this)" src="src/img/profile/${profile}.svg"
          class="-mt-4 w-20 h-20 p-0.5 rounded-full" alt="" />
      </div>
    </div>
    `;

  $(".quoteCanavas").html(`${joke_html}`);
};
