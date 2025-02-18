# Design:

Design and develop home page --completed 
Design and develop login page for teacher student --completed 
Design and develop nav components for admin --completed 
Design and develop top nav for admin --completed 
Design and develop side messaging section which should be shown on side on dashboard section for admin --completed 
design and develop events section for admin and previous events are shown and create new even button on top of that section  the card should contain
design and develop Finances  section 
design and develop chats section with group sction interface

Implementations:

1. fix the logic of rendering components in dashboards because of multiple rendering issues
2. Create section for dashboard option in navbar for admin
3. Create section for chats option in navbar for admin
4. Create section for preveledges option in navbar for admin
5. Create section for profiles option in navbar for admin
6. Create section for Events option in navbar for admin
7. Create section for Finances option in navbar for admin
8. Create section for Settings option in navbar for admin 
9. The announcement option display all the announcements and a button for craeting announcements. On create announcement option  the option will awhich have a form which have form appear having announcement title input, announcement
10. The events options have it's usage  for creating events. the admin and teacher both have this option and it's used for craeting and arranging class tests
11. Dashboard option at admin navigation have to display all the events on side, a calendar on the center
12. Profiles option will display the sections containing small cards containing informations about users and their status like wheather it's a teacher or student with picture, and name onclicking this card this will display the entire information of this user in appearing card. This option also contain input field for searching user. the detailed card will show the student information about completion of homework, class attendance ratings(which is evaluated by admin), fees paid or not, any remaining assignment and what assignment he has skipped and ranking of the student 

13. chats option will display the group chats interface
14. the preveledges option will display the options like add new student, remove existing, update any student's information, 
15. Finances option will display payments and billings over the system wheather 


Approach:
the teacher have to collect students informations by using google forms and if the student has to be added then send that information of student to admin of dashboard
admin had preveledged to add that student using data entry form. then send the website's link as well as student's username , his password and his email to the gmail account of student. the student have to login to it's dashboard and see the entire classroom.
the backend route fetches data from postgres and then send it through response the context will fetch that data from route and show it throughout application

the admin dashboard have following options

1. Dashboard
2. Chat
3. Students
4. Teachers
5. Announcements

- on dashboard option the section will appear that have nore optiions like add new student, remove student or add or remove teacher
- on chat option the admin have to view public chats announcements
- the dashboard will also have announcement section which have the section that have options to create new announcement
- the students option have section that show all the students enrolled
- the teachers option have section that show all the teachers enrolled

------------------------------------------------------------------------------------------
objective-1:
first student have to fill form in the website . teacher has form link and he send it to the student to fill out that form
the form have following information
student name
student age
phonenumber
active email
account name
password for account
indivisual courses
create form to collect student information
implement functionality for each student to generate thier ID cards and download them


teacher also have to fill the form to be enrolled as faculty
Teacher name
Teacher age
phonenumber
active email
account name
password for account
indivisual courses that teacher has to taught
implement functionality for each teacher to generate thier ID cards and download them


-----------------------------------------------------------------------------
objective-2:
show the stored data in the dashboard
create three dashes , one for student, second for teacher and one for admin
implement strictly responsive grid layout all over the dashboard
implement logic for sidenav buttons , make links interactive and fix all the issues
create dashboards and implement strict responsiveness in it

 -----------------------------

objective-3:
implement strictly responsive design of the dashboard for each segment
decide and set preveledges for admin 
implement add student functionality
implement remove student functionality
implement view status functionality for students and teacher
create section for dashboard
create section for finances 
create section for group chating
create section for events and announcements
create settings section
create sections as needed
in the dashboard option inside the nav there is the view of 

-----------------------------------------------------------------------------

objective-4:
implement whole functionality of system for student side
student must be able to view all the courses he was enrolled in
He must be able to view all the messages and comments that are added to an assignment by others
student must be able to mark an homework as done
student must be able to 

the admin has the following preveledges:
it should be able to give instructions to all over the application
it should be able to view each and every activity in his dashboard


implement add student functionality
implement remove student functionality

implement functionality for teacher to give assignents to students
implement functionality for learning management

dashboard ui <i class="fa-solid fa-chart-line"></i>
chat <i class="fa-solid fa-comments"></i>
degree <i class="fa-solid fa-graduation-cap"></i>
teacher <i class="fa-solid fa-users"></i>
events <i class="fa-solid fa-calendar"></i>
chart <i class="fa-solid fa-chart-simple"></i>
food <i class="fa-solid fa-utensils"></i>

settings <i class="fa-solid fa-gear"></i>
add user <i class="fa-solid fa-user-plus"></i>
clock <i class="fa-solid fa-clock"></i>
folders <i class="fa-solid fa-folder-closed"></i>
search <i class="fa-solid fa-magnifying-glass"></i>
angles right <i class="fa-solid fa-angles-right"></i>
angle left <i class="fa-solid fa-angles-left"></i>
more options <i class="fa-solid fa-ellipsis-vertical"></i>
notification <i class="fa-solid fa-bell"></i>
messaging <i class="fa-solid fa-message"></i>


----------------------------------------grid layout------------------------------------


### **CSS Grid: A Comprehensive Guide**

---

### **Introduction to CSS Grid**

CSS Grid is a powerful layout system introduced in CSS3 that allows developers to create complex, responsive, and grid-based designs with ease. It’s a two-dimensional system, meaning it can handle layouts in both rows and columns simultaneously. This makes CSS Grid an essential tool for modern web design.

---

### **Why Use CSS Grid?**

- **Two-Dimensional Layout**: Handles rows and columns effortlessly.
- **Responsive by Design**: Easily adapts to different screen sizes with minimal code.
- **Eliminates Float Issues**: No need for hacks like floats or clearfix.
- **Precise Alignment**: Place and align items anywhere within the grid.

---

### **Key Concepts of CSS Grid**

#### **Grid Container**
A container where the grid layout is applied.

```css
.container {
  display: grid; /* Enables grid layout */
}
```

#### **Grid Items**
The child elements of a grid container. They are automatically arranged into rows and columns.

---

### **Common CSS Grid Properties**

#### **Grid Container Properties**

1. **`display: grid`**  
   Defines the container as a grid.

2. **`grid-template-columns` and `grid-template-rows`**  
   Specifies the size and number of rows and columns.

   ```css
   .container {
     display: grid;
     grid-template-columns: 1fr 2fr;
     grid-template-rows: 100px auto;
   }
   ```

3. **`gap`**  
   Adds spacing between grid rows and columns.

   ```css
   .container {
     gap: 10px;
   }
   ```

4. **`grid-auto-rows` and `grid-auto-columns`**  
   Defines the default size of rows or columns added implicitly.

   ```css
   .container {
     grid-auto-rows: 150px;
   }
   ```

5. **`justify-items` and `align-items`**  
   Aligns grid items horizontally and vertically within their cells.

   ```css
   .container {
     justify-items: center;
     align-items: center;
   }
   ```

---

#### **Grid Item Properties**

1. **`grid-column` and `grid-row`**  
   Specifies the start and end positions for a grid item.

   ```css
   .item {
     grid-column: 1 / 3; /* Spans from column 1 to 3 */
     grid-row: 2 / 4; /* Spans from row 2 to 4 */
   }
   ```

2. **`justify-self` and `align-self`**  
   Aligns a specific grid item horizontally or vertically.

   ```css
   .item {
     justify-self: start;
     align-self: end;
   }
   ```

---

### **Examples of CSS Grid**

#### **1. Basic Grid Layout**

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
    gap: 10px;
  }
  .item {
    background: lightblue;
    padding: 20px;
    text-align: center;
  }
</style>
```

---

#### **2. Responsive Layout**

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 10px;
  }
  .item {
    background: lightcoral;
    padding: 20px;
    text-align: center;
  }
</style>
```

---

#### **3. Advanced Grid with Named Areas**

```html
<div class="container">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Content</div>
  <div class="footer">Footer</div>
</div>

<style>
  .container {
    display: grid;
    grid-template-areas:
      "header header"
      "sidebar content"
      "footer footer";
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto 1fr auto;
    gap: 10px;
  }
  .header {
    grid-area: header;
    background: lightgreen;
  }
  .sidebar {
    grid-area: sidebar;
    background: lightblue;
  }
  .content {
    grid-area: content;
    background: lightcoral;
  }
  .footer {
    grid-area: footer;
    background: lightgoldenrodyellow;
  }
</style>
```

---

### **10 Practice Questions**

1. Create a simple grid layout with two columns and three rows.
2. Build a responsive grid using `auto-fit` and `minmax`.
3. Align all grid items to the center of their cells.
4. Create a card layout with three columns that stack vertically on smaller screens.
5. Use `grid-area` to build a website layout with a header, sidebar, content, and footer.
6. Add spacing between grid items using the `gap` property.
7. Create a gallery layout with 4 equal-sized columns.
8. Create a layout where one item spans across two columns.
9. Use `grid-auto-rows` to set the height of implicit rows.
10. Build a navigation bar with items equally spaced using CSS Grid.

---

### **Solutions**

#### **1. Two Columns, Three Rows**

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 100px);
}
```

---

#### **2. Responsive Grid**

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
```

---

#### **3. Center Alignment**

```css
.container {
  display: grid;
  justify-items: center;
  align-items: center;
}
```

---

#### **4. Responsive Card Layout**

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

---

#### **5. Website Layout with `grid-area`**

```css
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto 1fr auto;
}
```

---

#### **6. Add Spacing with `gap`**

```css
.container {
  display: grid;
  gap: 20px;
}
```

---

CSS Grid is a versatile and powerful tool for web layouts. Mastering its properties will make your designs more elegant and maintainable. Let me know if you'd like deeper insights on any specific topic!





```ruby 
my-next-app/
├── app/              # New directory for app-based routing
├── public/            # Static assets
├── styles/            # CSS or SCSS files
├── pages/             # Legacy file-based routing (optional)
├── components/        # Reusable components
├── node_modules/      # Dependencies
├── package.json       # Project metadata
└── next.config.js     # Next.js configuration
```