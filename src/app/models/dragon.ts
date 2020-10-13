export class Dragon {
    id: number;
    createdAt: Date;
    name: string;
    type: string;
    histories: string;

    constructor() {
        this.createdAt = new Date();
    }
}