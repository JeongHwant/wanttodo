class Planner:
    def __init__(self):
        self.tasks = {}

    def add_task(self, date, task):
        if date not in self.tasks:
            self.tasks[date] = []
        self.tasks[date].append({"task": task, "completed": False})

    def view_tasks(self, date):
        if date in self.tasks:
            print(f"Tasks for {date}:")
            for task in self.tasks[date]:
                status = "x" if task["completed"] else " "
                print(f"[{status}] {task['task']}")
        else:
            print(f"No tasks for {date}.")

    def mark_complete(self, date, task_num):
        if date in self.tasks and task_num < len(self.tasks[date]):
            self.tasks[date][task_num]["completed"] = True
            print(f"Marked task {task_num} as complete for {date}.")
        else:
            print("Invalid date or task number.")

planner = Planner()

while True:
    print("1. Add task")
    print("2. View tasks")
    print("3. Mark task as complete")
    print("4. Exit")
    choice = input("Enter your choice: ")

    if choice == "1":
        date = input("Enter date (YYYY-MM-DD): ")
        task = input("Enter task: ")
        planner.add_task(date, task)
        print("Task added.")

    elif choice == "2":
        date = input("Enter date (YYYY-MM-DD): ")
        planner.view_tasks(date)

    elif choice == "3":
        date = input("Enter date (YYYY-MM-DD): ")
        task_num = int(input("Enter task number: "))
        planner.mark_complete(date, task_num)

    elif choice == "4":
        break

    else:
        print("Invalid choice. Please try again.")
