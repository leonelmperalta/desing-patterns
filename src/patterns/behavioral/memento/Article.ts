import {ArticleMemento} from "./ArticleMemento";

export class Article {
    private _author: String;
    private _text: String;

    public constructor(author: String, text: String) {
        this._author = author;
        this._text = text;
    }

    public createMemento(): ArticleMemento {
        return new ArticleMemento(this.author, this.text);
    }

    public restoreMemento(memento: ArticleMemento): void {
        this._author = memento.author;
        this._text = memento.text;
    }

    get author(): String {
        return this._author;
    }

    set author(value: String) {
        this._author = value;
    }

    get text(): String {
        return this._text;
    }

    set text(value: String) {
        this._text = value;
    }
}
