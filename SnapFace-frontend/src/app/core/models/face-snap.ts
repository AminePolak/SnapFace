import { SnapType } from "./snap-type.type";

export class FaceSnap {
    id: number;
    title!: string;
    description!: string;
    createdDate!: Date;
    snaps!: number;
    imageUrl!: string;
    location?: string;

    constructor(id: number, title: string, description: string, imageUrl: string, createdDate: Date, snaps: number) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.createdDate = createdDate;
        this.snaps = snaps;
    }

    // addSnap(): void {
    //     this.snaps++;
    // }

    // removeSnap(): void {
    //     this.snaps--;
    // }

    // snap(snapType: SnapType) {
    //     if (snapType === 'snap') {
    //         this.addSnap();
    //     } else if (snapType === "unsnap") {
    //         this.removeSnap();
    //     }
    // }

    // setLocation(location: string): void {
    //     this.location = location;
    // }

    // withLocation(location: string): FaceSnap {
    //     this.setLocation(location);
    //     return this;
    // }
}