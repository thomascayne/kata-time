import { Observable, of } from 'rxjs';

export class RecentlyUsedList {
    private list: string[] = [];

    constructor() {}

    getList = () => this.list;

    setList(value: string[]) {
        if (!Array.isArray(value)) { return undefined; }
        this.dedupe(value);
    }
    
    addItem(item: string) {
        if (item.length === 0) { return;}

        this.removeDuplicates(item).pipe().subscribe(() => {
            this.list.unshift(item);
        }).unsubscribe()
    }

    dedupe = (list: string[]) =>  this.list = list.filter( (element, index, self) => {
        return index === self.indexOf(element);
    });

    getItem (index: number): string | null {
        if (index >= this.getList().length) { return null; }
        return this.list[index]
    }

    findByIndex(index: number): string {
        if (index >= this.list.length) { return '';}
        return this.list[index];
    }

    removeDuplicates(item: string): Observable<number> {
        const exist = this.list.indexOf(item);
        if (exist) { this.list.splice(exist, exist);}
        return of(exist)
    }
}