import { AuthButton } from "@/components/auth/AuthButton";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle2, ListTodo, Plus, Zap } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-6"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ListTodo className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold tracking-tight">TodoApp</span>
          </div>
          <AuthButton />
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Stay{" "}
            <span className="text-primary">Organized</span>
            <br />
            Get Things Done
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A simple, beautiful todo app that helps you manage your tasks efficiently. 
            Create, organize, and complete your todos with ease.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AuthButton 
              trigger={
                <Button size="lg" className="text-lg px-8 py-6">
                  Get Started Free
                </Button>
              }
            />
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Learn More
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Everything you need to stay productive
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple features that make a big difference in your daily workflow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center p-8 rounded-2xl bg-card border hover:shadow-lg transition-all"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Plus className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Easy Creation</h3>
            <p className="text-muted-foreground">
              Quickly add new todos with titles, descriptions, priorities, and due dates. 
              Simple and intuitive interface.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center p-8 rounded-2xl bg-card border hover:shadow-lg transition-all"
          >
            <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Track Progress</h3>
            <p className="text-muted-foreground">
              Mark todos as complete and track your progress. Filter by status 
              to focus on what matters most.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center p-8 rounded-2xl bg-card border hover:shadow-lg transition-all"
          >
            <div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Zap className="h-8 w-8 text-yellow-500" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Stay Organized</h3>
            <p className="text-muted-foreground">
              Set priorities, add due dates, and organize your tasks efficiently. 
              Never miss an important deadline again.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-primary/5 rounded-3xl p-16 border"
        >
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Ready to get organized?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who have transformed their productivity with TodoApp. 
            Start managing your tasks better today.
          </p>
          <AuthButton 
            trigger={
              <Button size="lg" className="text-lg px-8 py-6">
                Start Your Journey
              </Button>
            }
          />
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t">
        <div className="flex items-center justify-center text-muted-foreground">
          <p>&copy; 2024 TodoApp. Built with ❤️ for productivity.</p>
        </div>
      </footer>
    </div>
  );
}