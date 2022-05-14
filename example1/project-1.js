app.logDomain({ 
    id: "Domain 1", 
    title: "Domain 1 Title", 
    desc: "Domain 1 Description",
    budget: 10   // monthly budgeted task "effort" (hours, points, pomodoros) to be completed within this domain 
});

app.logTask({
    id: "task1",
    title: "The first task",
    desc: "Description...",
    importance: 3,
    status: 0,
    domain: "Domain 1",
    /*
    // Task Dates
    createdDate: "",
    deadline: "",
    plannedStartDate: ""
    plannedEndDate: "",
    startDate: "",  // actual start date
    endDate: "",    // actual end date
    */
    /*
    // Missing: Estimates and / or time used on task.
    */
});

app.processLogs();
