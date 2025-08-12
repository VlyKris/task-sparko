import { api } from "@/convex/_generated/api";
import { motion } from "framer-motion";
import { CheckCircle2, Circle, ListTodo } from "lucide-react";
import { useQuery } from "convex/react";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
  filter: "all" | "active" | "completed";
}

export function TodoList({ filter }: TodoListProps) {
  const allTodos = useQuery(api.todos.getTodos);
  const activeTodos = useQuery(api.todos.getTodosByStatus, { completed: false });
  const completedTodos = useQuery(api.todos.getTodosByStatus, { completed: true });

  const getTodos = () => {
    switch (filter) {
      case "active": return activeTodos;
      case "completed": return completedTodos;
      default: return allTodos;
    }
  };

  const todos = getTodos();

  if (todos === undefined) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (todos.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-12"
      >
        <div className="mb-4">
          {filter === "all" && <ListTodo className="h-12 w-12 mx-auto text-muted-foreground" />}
          {filter === "active" && <Circle className="h-12 w-12 mx-auto text-muted-foreground" />}
          {filter === "completed" && <CheckCircle2 className="h-12 w-12 mx-auto text-muted-foreground" />}
        </div>
        <h3 className="text-lg font-medium text-muted-foreground mb-2">
          {filter === "all" && "No todos yet"}
          {filter === "active" && "No active todos"}
          {filter === "completed" && "No completed todos"}
        </h3>
        <p className="text-sm text-muted-foreground">
          {filter === "all" && "Create your first todo to get started!"}
          {filter === "active" && "All caught up! No pending tasks."}
          {filter === "completed" && "Complete some todos to see them here."}
        </p>
      </motion.div>
    );
  }

  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </div>
  );
}
