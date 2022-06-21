import {ArticleMemento} from "./ArticleMemento";

export class Caretaker {
    private states: ArticleMemento[] = [];
    public addMemento(memento: ArticleMemento): void {
        this.states.push(memento);
    }
    public getMemento(index: number): ArticleMemento {
        return this.states[index];
    }
}
