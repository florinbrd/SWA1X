import {AsyncSubject} from "rxjs";
import {addItem} from "./addItem";

const subject = new AsyncSubject();

subject.subscribe({
    next: data => addItem('Observer 1: ' + data),
    error: error => addItem(error),
    complete: () => addItem('Observer 1 Completed')
});

let i = 1;
const interval = setInterval(() => subject.next(i++), 100);

setTimeout(()=> {
    const observer2 = subject.subscribe(
        data => addItem('Observer 2: ' + data),
    )
    subject.complete()
}, 500);
