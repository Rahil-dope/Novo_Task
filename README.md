# NovaTasks - Advanced Task Manager

A modern, feature-rich task management application with calendar view, recurring tasks, notifications, themes, and optional sync capabilities.

## ✨ Features

### Core Features
- ✅ **Task Management**: Create, edit, delete, and organize tasks
- ✅ **Kanban Board**: Drag and drop tasks between columns (Pending, In-Process, Completed)
- ✅ **List View**: View all tasks in a detailed list format
- ✅ **Calendar View**: Visual calendar showing tasks by deadline
- ✅ **Search & Filter**: Search tasks by title, description, tags, or category
- ✅ **Advanced Sorting**: Sort by deadline, priority, creation date, title, or category
- ✅ **Priority Filtering**: Filter tasks by priority level (Critical, High, Medium, Low)

### Advanced Features
- 🔄 **Recurring Tasks**: Set tasks to repeat daily, weekly, monthly, or yearly
- 🔔 **Notifications**: Get notified about upcoming deadlines and overdue tasks
- 🎨 **Multiple Themes**: Choose from 6 beautiful themes (Dark, Light, Blue, Green, Purple, Orange)
- 🎨 **Task Colors**: Assign colors to tasks for better organization
- 📅 **Calendar Integration**: View tasks in a monthly calendar format
- ☁️ **Sync Capabilities**: 
  - Export/Import tasks as JSON
  - Optional remote database sync
  - Google Calendar sync (coming soon)

### UI/UX Features
- 🎯 **Responsive Design**: Works on desktop, tablet, and mobile devices
- ⚡ **Smooth Animations**: Beautiful transitions and hover effects
- ⌨️ **Keyboard Shortcuts**:
  - `n` - Create new task
  - `c` - Switch to calendar view
  - `Escape` - Close modal
- 📊 **Progress Tracking**: Visual progress ring showing completion percentage
- 📈 **Statistics**: View total tasks, completed tasks, and overdue tasks

## 🚀 Quick Start

### Option 1: Simple (No Installation)
1. Open `index.html` in your browser
2. Start managing tasks!

### Option 2: Development Server (Recommended)

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   This will start a local server at `http://localhost:3000`

3. **Open in Browser**
   Navigate to the URL shown in your terminal

## 📦 NPM Scripts

- `npm run dev` - Start development server with live reload
- `npm run serve` - Alternative command to start development server
- `npm start` - Start the optional sync server (requires configuration)

## 🌐 Deployment

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed deployment instructions for:
- Netlify (Recommended)
- Vercel
- GitHub Pages
- Static hosting services

**Quick Deploy to Netlify:**
1. Push code to GitHub
2. Connect repository to Netlify
3. Deploy automatically (uses `netlify.toml` configuration)

## 📁 Project Structure

```
task_manager-main/
├── index.html              # Main HTML file
├── css/
│   ├── styles.css         # Main styles
│   └── themes.css         # Theme definitions
├── js/
│   ├── main.js            # Main application logic
│   ├── taskManager.js     # Task CRUD operations
│   ├── calendar.js        # Calendar view functionality
│   ├── notifications.js   # Notification system
│   ├── recurring.js       # Recurring tasks logic
│   ├── sync.js            # Sync functionality (optional)
│   └── utils.js           # Utility functions
├── server/
│   └── sync-server.js     # Optional sync server
├── package.json           # Dependencies and scripts
├── netlify.toml           # Netlify configuration
├── README.md              # This file
└── DEPLOYMENT_GUIDE.md    # Deployment instructions
```

## 📖 Usage Guide

### Creating Tasks
1. Click **"+ New Task"** or press `n`
2. Fill in:
   - **Title** (required)
   - Description
   - Category
   - Priority (Low, Medium, High, Critical)
   - Status (Pending, In-Process, Completed)
   - Deadline
   - Tags (comma-separated)
3. Optionally:
   - Enable recurring task
   - Choose a color
4. Click **"Save Task"**

### Managing Tasks
- **Edit**: Click on any task card or use the edit button
- **Delete**: Click the delete button (🗑️)
- **Change Status**: Drag and drop between columns in board view
- **Complete**: Check the checkbox in list view

### Recurring Tasks
1. Check **"Recurring Task"** when creating/editing
2. Select type: Daily, Weekly, Monthly, or Yearly
3. Set interval (e.g., every 2 days)
4. When completed, next occurrence is auto-created

### Views
- **Board View**: Kanban-style columns
- **List View**: Detailed list with checkboxes
- **Calendar View**: Monthly calendar with tasks

### Filters & Search
- Use the search bar to find tasks
- Click filter chips for quick filters (Today, This Week, Overdue, Recurring)
- Filter by category or priority
- Sort by deadline, priority, created date, title, or category

### Export/Import
- **Export**: Click "Export" to download tasks as JSON
- **Import**: Click "Import" and select a JSON file
- Great for backups or transferring between devices

### Themes
1. Click the theme button (🎨)
2. Choose from 6 themes
3. Selection is saved automatically

### Notifications
- Automatic notifications for:
  - Tasks due within 1 hour
  - Overdue tasks
- Click bell icon (🔔) to view all
- Auto-dismiss after 5 seconds

## 💾 Data Storage

All data is stored locally in your browser's **localStorage**. No data is sent to external servers unless you configure optional remote sync.

**Storage Keys:**
- `novatasks.tasks.v2` - Task data
- `novatasks.notifications.v1` - Notifications
- `novatasks.sync.v1` - Sync settings
- `novatasks.theme` - Selected theme

## ☁️ Optional Sync Server

The sync server is **completely optional**. The app works perfectly without it.

To enable sync:
1. See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for setup instructions
2. Configure Supabase or your own backend
3. Set environment variables
4. Run `npm start`

## 🌐 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Opera (latest)

## 🛠️ Troubleshooting

### Tasks not saving
- Check browser console for errors
- Ensure localStorage is enabled
- Try clearing browser cache and refreshing

### Features not working
- Ensure JavaScript is enabled
- Check browser console for errors
- Try in a different browser
- Clear cache and hard refresh (Ctrl+Shift+R)

### Sync not working
- Sync is optional - app works without it
- Check if sync server is running
- Verify environment variables
- Check browser console for API errors

## 🎯 Future Enhancements

Potential features for future versions:
- ✨ Task templates
- 📋 Subtasks and checklists
- 🔗 Task dependencies
- ⏱️ Time tracking
- 👥 Collaboration features
- 📱 Mobile app (iOS/Android)
- 🔌 Offline PWA support
- 🔄 Full Google Calendar integration

## 👨‍💻 Developer

Created by **Rahil Hussain**
- [LinkedIn](https://www.linkedin.com/in/rahil-hussain-a54348291)

## 📄 License

This project is open source and available for personal and educational use.

---

**Enjoy managing your tasks with NovaTasks!** 🚀

For detailed deployment instructions, see [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
