export class Task {
    id: number | undefined;
    title: string ='';
    description: string ='';
    status: string = '';

    constructor(initializer? : any){
        if(!initializer) return;
        if (initializer.id) this.id = initializer.id;
        if (initializer.title) this.title = initializer.title;
        if (initializer.description) this.description = initializer.description;
        if (initializer.status) this.status = initializer.status;
    }
}

export default Task;