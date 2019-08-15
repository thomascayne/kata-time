import { RecentlyUsedList } from './used.list.kata';

describe('Recently Used List', () => {

    it("Should check if used list exists", () => {
        const checkList = new RecentlyUsedList();
        expect(checkList.getList()).toBeDefined();
    })
    
    it("Should check if used list is empty", () => {
        const checkList = new RecentlyUsedList();
        expect(checkList.getList().length).toBe(0);
    })

    it("Should be able to add an item", () => {
        const checkList = new RecentlyUsedList();
        const item = "Banana"
        checkList.addItem(item);
        expect(checkList.getItem(0)).toEqual(item);
    })

    it("Should add new item at beginnnig of list", () => {
        const checkList = new RecentlyUsedList();
        const item1 = "Mango"
        const item2 = "Banana"
        checkList.addItem(item1);
        checkList.addItem(item2);
        expect(checkList.getItem(0)).toEqual(item2);
    })

    it("Should not be able to find item outside of index", () => {
        const checkList = new RecentlyUsedList();
        checkList.setList(['Banana', 'Mango', 'Apple'])
        expect(checkList.findByIndex(3)).toBe('');
    })

    it("Should look up item by index, starting at zero", () => {
        const item = 'Banana'
        const checkList = new RecentlyUsedList();
        checkList.setList([item])
        expect(checkList.findByIndex(0)).toBe(item);
    })

    it("Should move duplicate item to front of list", () => {
        const item = 'Watermelon';
        const checkList = new RecentlyUsedList();
        checkList.setList(['Banana', 'Mango', 'Watermelon', 'Banana']);
        checkList.addItem(item);
        expect(checkList.findByIndex(0)).toEqual(item);
    })

    it("Should not contain duplicate items", () => {
        const checkList = new RecentlyUsedList();
        checkList.setList(['Banana', 'Mango', 'Apple']);
        checkList.addItem('Apple')
        const timesFound = checkList.getList().filter(function(x){
             return x === 'Apple'; }).length;
        expect(timesFound).toBe(1);
    })
})