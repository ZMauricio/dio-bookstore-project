export class Book {
    id: string;
    name: string;
    price: number;
    quantity: number;
    category: string;
    img: string;

    constructor()
    constructor(id?: string, name?: string,
                price?: number, quantity?: number,
                category?: string, img?: string) {

        this.id = id || '';
        this.name = name || '';
        this.price = price || 0;
        this.quantity = quantity || 0;
        this.category = category || '';
        this.img = img || '';
    }
}