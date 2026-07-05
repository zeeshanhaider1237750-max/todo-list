<h1>Project Title: TODO LIST</h1>

<hr>

<h2>Overview</h2>
<p>This site allows users to gather, rearrange, and enlist their todo lists with different functionalities available for the users.</p>

<hr>

<h2>Usage</h2>
<p>A user can add, remove, rearrange their todo list items.</p>
<p>In each todo list, they can set its priority. By default, priority is set to 50% for each new or default project.</p>
<p>Users can even take notes and mark important things in a checklist.</p>
<p>They can also set the details of a todo list in Description while enlisting important tasks in the Checklist, or take notes in the Notes section.</p>

<hr>

<h2>Features</h2>
<ul>
  <li>Creates multiple custom todo folders (One-to-Many Architecture).</li>
  <li>Add, edit, and delete task items with Titles, Descriptions, Due dates, Priorities, Notes, and Checklists.</li>
  <li>Automatically saves your projects and tasks to the browser using localStorage.</li>
  <li>Complete decoupling of underlying logical data arrays from DOM Manipulation.</li>
</ul>

<hr>

<h2>Tech Stacks</h2>
<ul>
  <li>Windows Subsystem for Linux Ubuntu (WSL2).</li>
  <li>JavaScript (ES6 Modules).</li>
  <li>CSS3.</li>
  <li>Node Package Manager (npm) & Webpack 5.</li>
</ul>

<hr>

<h2>Installation Process</h2>
<p>Clone the repository:</p>
<pre><code>git clone https://github.com</code></pre>

<p>Install Webpack 5, development server, and required loaders which will be downloaded from package.json:</p>
<pre><code>npm install</code></pre>

<p>Run the local Development Server:</p>
<pre><code>npm run start</code></pre>

<p>Build for production (that minifies JS bundlers in /dist):</p>
<pre><code>npm run build</code></pre>

<hr>

<h2>Project Structure</h2>
<pre><code>.
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
└── README.md                      # Platform architecture documentation</code></pre>

<hr>

<h2>Author/Contact</h2>
<ul>
  <li><b>Author:</b> Zeeshan Haider</li>
  <li><b>Email Address:</b> ZeeshanHaider.1237750@gmail.com</li>
</ul>

<hr>

<h2>License & Copyrights</h2>
<p>Copyright &copy; 2026 Zeeshan Haider</p>
<p>This project is open-source and licensed under the <b>MIT License</b>.</p>

<p><b>What this means for you:</b></p>
<ul>
  <li>You are 100% allowed to fork this repository.</li>
  <li>You are 100% allowed to download and run this project locally on your computer.</li>
  <li>You can use the code structure to help guide your own learning journey.</li>
</ul>
