// TODO: THIS IS THE DEFAULT DASHBOARD PAGE THAT THE USER WILL SEE AFTER AUTHENTICATION. ADD MAIN FUNCTIONALITY HERE.
// This is the entry point for users who have just signed in

import { TodoForm } from "@/components/todos/TodoForm";
import { TodoList } from "@/components/todos/TodoList";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserButton } from "@/components/auth/UserButton";
import { useAuth } from "@/hooks/use-auth";
import { Protected } from "@/lib/protected-page";
import { api } from "@/convex/_generated/api";
import { motion } from "framer-motion";
import { CheckCircle2, Circle, ListTodo, Plus } from "lucide-react";
import { useQuery } from "convex/react";
import { useState } from "react";

export default function Dashboard() {
  const { user } = useAuth();
  const [showForm, setShowForm] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  
  const allTodos = useQuery(api.todos.getTodos);
  const activeTodos = useQuery(api.todos.getTodosByStatus, { completed: false });
  const completedTodos = useQuery(api.todos.getTodosByStatus, { completed: true });

  const stats = {
    total: allTodos?.length || 0,
    active: activeTodos?.length || 0,
    completed: completedTodos?.length || 0,
  };

  return (
    <Protected>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-40"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ListTodo className="h-8 w-8 text-primary" />
                <div>
                  <h1 className="text-2xl font-bold tracking-tight">TodoApp</h1>
                  <p className="text-sm text-muted-foreground">
                    Welcome back, {user?.name || user?.email}
                  </p>
                </div>
              </div>
              <UserButton />
            </div>
          </div>
        </motion.header>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-card rounded-lg border"
              >
                <div className="flex items-center gap-3">
                  <ListTodo className="h-8 w-8 text-blue-500" />
                  <div>
                    <p className="text-2xl font-bold">{stats.total}</p>
                    <p className="text-sm text-muted-foreground">Total Todos</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-card rounded-lg border"
              >
                <div className="flex items-center gap-3">
                  <Circle className="h-8 w-8 text-yellow-500" />
                  <div>
                    <p className="text-2xl font-bold">{stats.active}</p>
                    <p className="text-sm text-muted-foreground">Active</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-card rounded-lg border"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-8 w-8 text-green-500" />
                  <div>
                    <p className="text-2xl font-bold">{stats.completed}</p>
                    <p className="text-sm text-muted-foreground">Completed</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Add Todo Button */}
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Your Todos</h2>
              <Button
                onClick={() => setShowForm(!showForm)}
                className="gap-2"
              >
                <Plus className="h-4 w-4" />
                Add Todo
              </Button>
            </div>

            {/* Todo Form */}
            {showForm && (
              <TodoForm onSuccess={() => setShowForm(false)} />
            )}

            {/* Todo Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all" className="gap-2">
                  <ListTodo className="h-4 w-4" />
                  All ({stats.total})
                </TabsTrigger>
                <TabsTrigger value="active" className="gap-2">
                  <Circle className="h-4 w-4" />
                  Active ({stats.active})
                </TabsTrigger>
                <TabsTrigger value="completed" className="gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Completed ({stats.completed})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-6">
                <TodoList filter="all" />
              </TabsContent>

              <TabsContent value="active" className="mt-6">
                <TodoList filter="active" />
              </TabsContent>

              <TabsContent value="completed" className="mt-6">
                <TodoList filter="completed" />
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </Protected>
  );
}