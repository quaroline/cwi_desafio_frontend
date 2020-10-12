export class Dragon {
    id: number;
    createdAt: Date;
    name: string;
    type: string;
    histories: any[];

    constructor() {
        this.createdAt = new Date();
        this.histories = [];
    }
}