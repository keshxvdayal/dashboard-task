"use client"

import { useState } from "react"
import asset from "@/assets/image.png"
import Image from "next/image"
import TaskPanel from "@/components/addTask"
import {
    Bell,
    Calendar,
    CheckSquare,
    ChevronDown,
    FileText,
    Grid,
    Menu,
    Moon,
    Plus,
    RefreshCw,
    Search,
    Square,
    Star,
    StarIcon as StarFilled,
} from "lucide-react"
// import { cn } from "@/lib/utils"
import { cn } from "@/components/lib/utils"

interface Task {
    id: string
    text: string
    completed: boolean
    important: boolean
}

export default function TaskDashboard() {
    const [tasks, setTasks] = useState<Task[]>([
        { id: "1", text: "Buy groceries", completed: false, important: false },
        { id: "2", text: "Finish project report", completed: false, important: true },
        { id: "3", text: "Call the bank", completed: false, important: false },
        { id: "4", text: "Schedule dentist appointment", completed: false, important: false },
        { id: "5", text: "Plan weekend trip", completed: false, important: false },
        { id: "6", text: "Read a book", completed: true, important: false },
        { id: "7", text: "Clean the house", completed: true, important: false },
        { id: "8", text: "Prepare presentation", completed: true, important: false },
        { id: "9", text: "Update blog", completed: true, important: false },
    ])

    const [newTaskText, setNewTaskText] = useState("")
    const [isTaskPanelOpen, setIsTaskPanelOpen] = useState(false);

    const addTask = () => {
      setIsTaskPanelOpen(true); // Open panel when button is clicked
    };
  
    const closeTaskPanel = () => {
      setIsTaskPanelOpen(false); // Close panel
    };

    const pendingTasks = tasks.filter((task) => !task.completed)
    const completedTasks = tasks.filter((task) => task.completed)
    const pendingCount = pendingTasks.length
    const totalCount = tasks.length
    const completionPercentage = totalCount > 0 ? (completedTasks.length / totalCount) * 100 : 0

    const toggleTaskCompletion = (id: string) => {
        setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
    }

    const toggleTaskImportance = (id: string) => {
        setTasks(tasks.map((task) => (task.id === id ? { ...task, important: !task.important } : task)))
    }

    // const addTask = () => {
    //     if (newTaskText.trim()) {
    //         const newTask = {
    //             id: Date.now().toString(),
    //             text: newTaskText,
    //             completed: false,
    //             important: false,
    //         }
    //         setTasks([...tasks, newTask])
    //         setNewTaskText("")
    //     }
    // }

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200">
                <div className="p-4 flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-green-600 flex items-center justify-center text-white">
                        <span className="sr-only">Logo</span>
                        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path
                                d="M12 8H12.01"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <div className="text-lg font-semibold text-green-600">Dott</div>
                </div>

                <div className="p-4 border-b border-gray-200">
                    <div className="flex items-center justify-center mb-4">
                        <div className="w-20 h-20 rounded-full overflow-hidden">
                            <Image
                                src={asset}
                                alt="Profile"
                                width={80}
                                height={80}
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <h2 className="text-center font-semibold text-gray-800">Hey, ABCD</h2>
                </div>

                <nav className="p-2">
                    <ul className="space-y-1">
                        <li>
                            <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-md hover:bg-gray-100">
                                <FileText size={18} />
                                <span>All Tasks</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-md bg-green-50 text-green-700"
                            >
                                <Calendar size={18} className="text-green-600" />
                                <span>Today</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-md hover:bg-gray-100">
                                <Star size={18} />
                                <span>Important</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-md hover:bg-gray-100">
                                <FileText size={18} />
                                <span>Planned</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-md hover:bg-gray-100">
                                <FileText size={18} />
                                <span>Assigned to me</span>
                            </a>
                        </li>
                    </ul>

                    <div className="mt-6 px-3">
                        <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                            <Plus size={18} />
                            <span>Add list</span>
                        </button>
                    </div>
                </nav>

                <div className="p-4 mt-6">
                    <div className="bg-white rounded-md p-4 border border-gray-200">
                        <div className="flex justify-between items-center mb-2">
                            <div className="text-sm font-medium text-gray-700">Today Tasks</div>
                            <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-700">
                                i
                            </div>
                        </div>
                        <div className="text-2xl font-bold text-gray-800">{pendingCount}</div>

                        <div className="mt-4 relative">
                            <div className="w-full h-32 flex items-center justify-center">
                                <div className="relative w-24 h-24">
                                    <svg viewBox="0 0 100 100" className="w-full h-full">
                                        <circle cx="50" cy="50" r="40" fill="transparent" stroke="#e6e6e6" strokeWidth="15" />
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="40"
                                            fill="transparent"
                                            stroke="#2e7d32"
                                            strokeWidth="15"
                                            strokeDasharray={`${(2 * Math.PI * 40 * completionPercentage) / 100} ${2 * Math.PI * 40 * (1 - completionPercentage / 100)}`}
                                            strokeDashoffset={2 * Math.PI * 40 * 0.25}
                                            transform="rotate(-90 50 50)"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-white rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center gap-4 text-xs mt-2">
                                <div className="flex items-center gap-1">
                                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                                    <span>Pending</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                                    <span>Done</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="h-16 border-b border-gray-200 flex items-center justify-between px-4 bg-white">
                    <button className="p-2 rounded-md text-black hover:bg-gray-100">
                        <Menu size={20} />
                    </button>

                    <div className="flex items-center gap-4">
                        <button className="p-2 rounded-md text-black hover:bg-gray-100">
                            <Search size={20} />
                        </button>
                        <button className="p-2 rounded-md text-black hover:bg-gray-100">
                            <Grid size={20} />
                        </button>
                        <button className="p-2 rounded-md text-black hover:bg-gray-100">
                            <Moon size={20} />
                        </button>
                    </div>
                </header>

                {/* Task Content */}
                <main className="flex-1 overflow-auto p-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center mb-6">
                            <h1 className="text-lg font-medium text-gray-800">To Do</h1>
                            <ChevronDown size={18} className="ml-1" />
                        </div>

                        {/* Add Task */}
                        <div className="bg-white rounded-md border border-gray-200 p-4 mb-6">
                            <input
                                type="text"
                                placeholder="Add A Task"
                                className="w-full text-gray-700 outline-none mb-4"
                                value={newTaskText}
                                onChange={(e) => setNewTaskText(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && addTask()}
                            />

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <button className="text-gray-500 hover:text-gray-700">
                                        <Bell size={18} />
                                    </button>
                                    <button className="text-gray-500 hover:text-gray-700">
                                        <RefreshCw size={18} />
                                    </button>
                                    <button className="text-gray-500 hover:text-gray-700">
                                        <Calendar size={18} />
                                    </button>
                                </div>

                                <button
        className="px-4 py-2 bg-green-100 text-green-700 rounded-md hover:bg-green-200"
        onClick={addTask} // Trigger panel on click
      >
        ADD TASK
      </button>

      {/* Task Panel - Only show if isTaskPanelOpen is true */}
      {isTaskPanelOpen && <TaskPanel onClose={closeTaskPanel} />}
                            </div>
                        </div>

                        {/* Task List */}
                        <div className="space-y-4">
                            {/* Pending Tasks */}
                            <div className="space-y-1">
                                {pendingTasks.map((task) => (
                                    <div key={task.id} className="flex items-center justify-between py-3 border-b border-gray-200">
                                        <div className="flex items-center gap-3">
                                            <button
                                                className="text-gray-400 hover:text-gray-600"
                                                onClick={() => toggleTaskCompletion(task.id)}
                                            >
                                                {task.completed ? <CheckSquare size={20} /> : <Square size={20} />}
                                            </button>
                                            <span className={cn("text-gray-700", task.completed && "line-through text-gray-400")}>
                                                {task.text}
                                            </span>
                                        </div>
                                        <button
                                            className="text-gray-400 hover:text-yellow-500"
                                            onClick={() => toggleTaskImportance(task.id)}
                                        >
                                            {task.important ? (
                                                <StarFilled size={20} className="text-yellow-500 fill-yellow-500" />
                                            ) : (
                                                <Star size={20} />
                                            )}
                                        </button>
                                    </div>
                                ))}
                            </div>

                            {/* Completed Section */}
                            {completedTasks.length > 0 && (
                                <>
                                    <h2 className="font-medium text-gray-700 mt-6 mb-2">Completed</h2>
                                    <div className="space-y-1">
                                        {completedTasks.map((task) => (
                                            <div key={task.id} className="flex items-center justify-between py-3 border-b border-gray-200">
                                                <div className="flex items-center gap-3">
                                                    <button className="text-green-600" onClick={() => toggleTaskCompletion(task.id)}>
                                                        <CheckSquare size={20} className="fill-green-100" />
                                                    </button>
                                                    <span className="line-through text-gray-400">{task.text}</span>
                                                </div>
                                                <button
                                                    className="text-gray-400 hover:text-yellow-500"
                                                    onClick={() => toggleTaskImportance(task.id)}
                                                >
                                                    {task.important ? (
                                                        <StarFilled size={20} className="text-yellow-500 fill-yellow-500" />
                                                    ) : (
                                                        <Star size={20} />
                                                    )}
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

