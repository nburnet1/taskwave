import Task from "../Tasks/Task";

export class Wave {
    id: number | undefined;
    title: string ='';
    description: string ='';
    tasks: Task[] = new Array<Task>;
    isActive: boolean = false;
    startDate: Date | undefined;
    endDate: Date | undefined

    constructor(initializer? : any){
        if(!initializer) return;
        if (initializer.id) this.id = initializer.id;
        if (initializer.title) this.title = initializer.title;
        if (initializer.description) this.description = initializer.description;
        if (initializer.tasks) this.tasks = initializer.tasks;
        if (initializer.isActive) this.isActive = initializer.isActive;
        if (initializer.startDate) this.startDate = initializer.startDate;
        if (initializer.endDate) this.endDate = initializer.endDate;
    }
}
export default Wave;

