import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative h-screen bg-gray-100 p-6">
      <Button
        className="bg-blue-600 text-white px-4 py-2 rounded-md"
        onClick={() => setIsOpen(true)}
      >
        Add Task
      </Button>

      {/* Sliding Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">New Task</h2>
          <button onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <div className="p-6">
          <input
            type="text"
            placeholder="Task Title"
            className="w-full p-2 border rounded mb-4"
          />
          <textarea
            placeholder="Task Description"
            className="w-full p-2 border rounded mb-4 h-24"
          />
          <Button className="bg-blue-600 text-white w-full">Save Task</Button>
        </div>
      </div>
    </div>
  );
}
