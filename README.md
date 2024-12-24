# Task Manager

A simple and modern Task Manager application built with React, designed to allow users to add, complete, and delete tasks efficiently.

## Features

- **Add Tasks**: Users can input tasks through a form and add them to the task list.
- **Mark as Complete**: Tasks can be marked as completed using a checkbox.
- **Delete Tasks**: Users can delete individual tasks from the list.
- **Responsive Design**: The application is styled with modern and minimal CSS, ensuring it looks great on all devices.

---

## Project Structure

```
Task-Manager/
|-- public/
    |-- index.html
|-- src/
|   |-- TaskInput.js
|   |-- TaskList.js
|   |-- index.js
|   |-- App.js
|   |-- App.css
|-- README.md
|-- package.json
```

### Components
- **TaskInput**: Handles task input and submission.
- **TaskList**: Displays tasks with options to mark as completed or delete.
- **TaskManager**: The main component integrating TaskInput and TaskList.

---

## Getting Started

### Prerequisites
- Node.js installed on your machine.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/MercySpectures/Task-Manager/task-manager.git
   ```
2. Navigate to the project directory:
   ```bash
   cd task-manager
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application
To start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`.

---

## Usage
1. Enter a task in the input field and click the "Add" button to add it to the list.
2. Use the checkbox to mark a task as completed.
3. Click the "Delete" button to remove a task from the list.

---

## Technologies Used
- **React**: Frontend framework.
- **CSS**: Styling for a clean and modern interface.

---

## Future Improvements
- Add persistent storage with localStorage or a backend.
- Implement drag-and-drop functionality to reorder tasks.
- Add priority levels to tasks.

---

## License
This project is licensed under the MIT License.

---

## Contributing
Contributions are welcome! Feel free to submit a pull request or open an issue.

---

## Contact
For questions or support, reach out to:
- **Name**: Aman Shrivas
- **Email**: huntethan144@gmail.com
- **GitHub**: [MercySpectures](https://github.com/MercySpectures)

