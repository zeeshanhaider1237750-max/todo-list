<h1>Project Title: TODO LIST</h1>

<hr>

<h2>Overview</h2>
<p>This Site allows users to Gather, Rearrange, and Enlist their <br> Todo List with different functionalities available for the users.</p>

<hr>

<h2>Usage</h2>
<p>A user can add, remove, rearrange their todo list items. <br>
In each todo list, they can set it's pirority and by default <br> pirority is set to 50% to each new or default project.
Users can even take notes and mark important things in checklist. <br>
They also can set the details of a todo list in Description while enlisting important <br> tasks in Checklist or take something in Notes section.</p>

<hr>

<h2>Features</h2>
<p>
* Creates Multiple custom todo folders(One to many Architecture). <br>
* Add, Edit and delete task items with Titles, Descriptions, Due-date, Pirority, Notes and Checklist. <br>
* Automatically saves your projects and tasks to browser using localStorage.
* Complete decoupling of underlying logical data arrays from DOM Manipulation.
</p>

<hr>

<h2>Tech Stacks</h2>
<p>
* Windows Subsystem for Linux Ubuntu(WSL2).
* Javascript (ES6 Modules).
* CSS3
* Node Package Manager(npm), webpack5.
</p>

<hr>

<h2>Installation Process</h2>
<p>
* Clone The repository 
 ```git clone <repository-name>
 ```
* Install Webpack5, development server and required loaders which will be downloaded from package.json.
 ``` npm install
 ```
* Run the local Development Server
  ``` npm run start
  ```
*Build for production(that Minifies JS Bundlers in /dist).
 ``` npm run build
 ```
</p>

<hr>

<h2>Project Structure</h2>
<p>
```text
├── dist/                          # Production assets (Automated by Webpack)
│   ├── index.html                 # Main entry template with bundle auto-injected
│   ├── main.js                    # Compiled application logic bundle
│   └── style.css                  # Extracted and minified CSS for ALL pages
├── src/                           # Active developer source directory
│   ├── pages/                     # Separated page style structures from design sketches
│   │   ├── main_page/
│   │   │   └── main.css           # Left sidebar & structural layout styling
│   │   ├── home_page/
│   │   │   └── home.css           # Greeting interface hero styles
│   │   ├── project_page/
│   │   │   └── projectView.css    # Main todo list grid/flex container styles
│   │   └── contribute_page/
│   │       └── contribute.css     # Contribution tab specific layouts
│   ├── modules/                   # Core application engine logic
│   │   ├── main.js                # Primary application interface hub
│   │   ├── project.js             # One-to-Many project tracking logic arrays
│   │   ├── storage.js             # Browser localStorage synchronization state
│   │   └── domController.js       # Dynamic DOM injector (Swaps sketches via events)
│   ├── index.html                 # Single parent HTML layout framework
│   ├── index.css                  # Main global styling variables and CSS resets
│   └── index.js                   # Application root gateway & styling aggregator
├── .gitignore                     # Blocks node_modules/ from uploading to GitHub
├── eslint.config.js               # Code syntax optimization quality rules
├── package-lock.json              # Auto-locked structural package dependency tree
├── package.json                   # Build scripts, version variables, and manifests
├── webpack.config.js              # Compilation rules for loaders and asset bundlers
└── README.md                      # Platform architecture documentation
```

</p>

<hr>

<h2>Author/Contact</h2>
<p>
* Author: Zeeshan Haider
* Email-Address: ZeeshanHaider.1237750@gmail.com.
</p>

<hr>

<h2>License & Copyrights</h2>
<p>
+ Copyrights &copy; 2026 Zeeshan Haider 

This Project is opened-source and licensed under the MIT License.

What this means for you:
* You are 100% allowed to fork this repository.
* You are 100% allowed to download and run this project locally on your computer.
* You can use the code structure to help guide you your own learning journey.
</p>