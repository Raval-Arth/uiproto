const selectSidenavItem = (el) => {
$(el.parentNode.querySelector(".active-sidenav-item")).removeClass(
"text-slate-900 bg-slate-100 active-sidenav-item"
);
$(el).addClass("text-slate-900 bg-slate-100 active-sidenav-item");
switchTab(el.id);

if ($(window).width() < 768) { $("#sidebar").removeClass("open"); $("#sidebar").removeClass("fixed"); } return
    $(el).text(); }; const sidebarComponent=()=> {
    return `
    <nav id="sidebar"
        class="sidebar noselect px-4 text-slate-500 my-2 md:my-4 py-2 h-screen md:h-[70vh] md:overflow-y-scroll bg-white rounded-r-lg shadow">
        <div>
            <div class="text-lg flex flex-col gap-1">
                <div>
                    <div
                        class="mb-2 pb-2 text-xl font-semibold text-slate-700 border-b flex items-center justify-between">
                        <h2 class="">Elements</h2>
                        <img onclick="collapseControl(this)" src="src/img/arrow.svg"
                            class="w-6 p-0.5 rounded-full bg-slate-100" alt="" style="transform: rotate(180deg);" />
                    </div>
                    <div id="collapse" class="">
                        <p id='accordionComponent' onclick="selectSidenavItem(this)"
                            class='sidenav-item px-2 py-1 text-slate-900 bg-slate-100 hover:bg-slate-100 hover:text-slate-900 rounded-lg active-sidenav-item'>
                            Accordion
                        </p>
                        <p onclick="selectSidenavItem(this)"
                            class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Avatars
                        </p>
                        <p onclick="selectSidenavItem(this)"
                            class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Dropdowns
                        </p>
                        <p onclick="selectSidenavItem(this)"
                            class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Badges
                        </p>
                        <p onclick="selectSidenavItem(this)"
                            class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Buttons
                        </p>
                        <p onclick="selectSidenavItem(this)"
                            class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Button
                            Groups
                        </p>
                    </div>
                </div>

                <div>

                    <div
                        class="mb-2 pb-2 text-xl font-semibold text-slate-700 border-b flex items-center justify-between">
                        <h2>Navigation</h2>
                        <img onclick="collapseControl(this)" src="src/img/arrow.svg"
                            class="w-6 p-0.5 rounded-full bg-slate-100" alt="" style="transform: rotate(180deg);" />
                    </div>

                    <div class="">
                        <p onclick="selectSidenavItem(this)"
                            class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Navbars
                        </p>
                        <p onclick="selectSidenavItem(this)"
                            class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Pagination
                        </p>
                        <p onclick="selectSidenavItem(this)"
                            class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Tabs</p>
                        <p onclick="selectSidenavItem(this)"
                            class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Vertical
                            Navigation
                        </p>
                        <p onclick="selectSidenavItem(this)"
                            class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Sidebar
                            Navigation
                        </p>
                        <p onclick="selectSidenavItem(this)"
                            class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>
                            Breadcrumbs
                        </p>
                        <p onclick="selectSidenavItem(this)"
                            class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Steps </p>
                        <p onclick="selectSidenavItem(this)"
                            class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Command
                            Palettes
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    `;
    };