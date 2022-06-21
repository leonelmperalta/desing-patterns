export class ArticleMemento {
    private readonly _author: String;
    private readonly _text: String;

    public constructor(author: String, text: String) {
        this._author = author;
        this._text = text;
    }

    get author(): String {
        return this._author;
    }

    get text(): String {
        return this._text;
    }
}
