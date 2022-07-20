const selectSidenavItem = (el) => {
  $(el.parentNode.querySelector(".active-sidenav-item")).removeClass(
    "text-slate-900 bg-slate-100 active-sidenav-item"
  );
  $(el).addClass("text-slate-900 bg-slate-100 active-sidenav-item");
  switchTab(el.id);

  if ($(window).width() < 768) {
    $("#sidebar").removeClass("open");
    $("#sidebar").removeClass("fixed");
  }

  return $(el).text();
};

const sidebarComponent = () => {
  return `
<nav id="sidebar"
    class="sidebar noselect px-4 text-slate-500 my-2 md:my-4 py-2 h-screen md:h-[70vh] md:overflow-y-scroll bg-white rounded-r-lg shadow">
    <h2 class="mb-2 pb-2 text-xl font-semibold text-center text-slate-700 border-b">Component</h2>
    <div class="text-lg flex flex-col gap-1">

        <p id='accordionComponent' onclick="selectSidenavItem(this)"
            class='sidenav-item px-2 py-1 text-slate-900 bg-slate-100 hover:bg-slate-100 hover:text-slate-900 rounded-lg active-sidenav-item'>
            Accordion
        </p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>AccordionActions</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>AccordionDetails</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>AccordionSummary</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Alert</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>AlertTitle</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>AppBar</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Autocomplete</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Avatar</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>AvatarGroup</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Backdrop</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Badge</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>BottomNavigation</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>BottomNavigationAction</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Box</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Breadcrumbs</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Button</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>ButtonBase</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>ButtonGroup</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Card</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>CardActionArea</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>CardActions</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>CardContent</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>CardHeader</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>CardMedia</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Checkbox</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Chip</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>CircularProgress</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Collapse</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Container</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>CssBaseline</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Dialog</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>DialogActions</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>DialogContent</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>DialogContentText</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>DialogTitle</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Divider</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Drawer</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Fab</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Fade</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>FilledInput</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>FormControl</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>FormControlLabel</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>FormGroup</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>FormHelperText</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>FormLabel</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>GlobalStyles</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Grid</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Grow</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Hidden</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Icon</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>IconButton</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>ImageList</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>ImageListItem</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>ImageListItemBar</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Input</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>InputAdornment</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>InputBase</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>InputLabel</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>LinearProgress</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Link</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>List</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>ListItem</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>ListItemAvatar</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>ListItemButton</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>ListItemIcon</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>ListItemSecondaryAction</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>ListItemText</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>ListSubheader</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>LoadingButton</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Masonry</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Menu</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>MenuItem</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>MenuList</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>MobileStepper</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Modal</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>NativeSelect</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>OutlinedInput</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Pagination</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>PaginationItem</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Paper</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Popover</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Popper</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Radio</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>RadioGroup</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Rating</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>ScopedCssBaseline</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Select</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Skeleton</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Slide</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Slider</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Snackbar</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>SnackbarContent</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>SpeedDial</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>SpeedDialAction</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>SpeedDialIcon</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Stack</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Step</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>StepButton</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>StepConnector</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>StepContent</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>StepIcon</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>StepLabel</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Stepper</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>SvgIcon</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>SwipeableDrawer</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Switch</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Tab</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>TabContext</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Table</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>TableBody</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>TableCell</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>TableContainer</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>TableFooter</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>TableHead</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>TablePagination</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>TableRow</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>TableSortLabel</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>TabList</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>TabPanel</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Tabs</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>TabScrollButton</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>TextField</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Timeline</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>TimelineConnector</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>TimelineContent</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>TimelineDot</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>TimelineItem</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>TimelineOppositeContent</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>TimelineSeparator</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>ToggleButton</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>ToggleButtonGroup</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Toolbar</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Tooltip</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>TreeItem</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>TreeView</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Typography</p>
        <p onclick="selectSidenavItem(this)" class='sidenav-item px-2 py-1 hover:bg-slate-100 hover:text-slate-900 rounded-lg'>Zoom</p>
    </div>
    <h2>Pages</h2>
</nav>
`;
};
