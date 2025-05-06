## Components overview :

### Sidebar :
The main component used in this this project for navigation aspect . It contains logo , profile option for logged in account and have options of diferent categories like some belongs to **Main menu** and usually settings belongs to **Accounts** . 

The options in the nav have a hover effect which also changes the color of the component having svg icon in it . Refer [this](../public/icons/sidebar/) for all the icons in options .

The toogling effect of this sidebar is controlled by a zustand state [check this](../src/stores/SidebarVisibility.ts)

Check the code [here](../src/components/Sidebar)

### Topnav :
a primary component and second nav contain a menu icon for toogling nav .