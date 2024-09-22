/*
You have a browser of one tab where you start on the homepage and you can visit another url, get back in the history number of steps or move forward in the history number of steps.

Implement the BrowserHistory class:

BrowserHistory(string homepage) Initializes the object with the homepage of the browser.
void visit(string url) Visits url from the current page. It clears up all the forward history.

string back(int steps) Move steps back in history. If you can only return x steps in the history and steps > x, you will return only x steps. Return the current url after moving back in history at most steps.

string forward(int steps) Move steps forward in history. If you can only forward x steps in the history and steps > x, you will forward only x steps. Return the current url after forwarding in history at most steps.
*/

class HistoryNode {
  url: string;
  prev: HistoryNode | null;
  next: HistoryNode | null;

  constructor(url: string) {
    this.url = url;
    this.prev = null;
    this.next = null;
  }
}

export class BrowserHistory {
  #currentPage: HistoryNode;

  constructor(homepage: string) {
    this.#currentPage = new HistoryNode(homepage);
  }

  visit(url: string): void {
    const newPage = new HistoryNode(url);

    newPage.prev = this.#currentPage;
    this.#currentPage.next = newPage;
    this.#currentPage = newPage;
  }

  back(steps: number): string {
    let current = this.#currentPage;
    while (steps > 0 && current.prev) {
      current = current.prev;
      steps--;
    }

    this.#currentPage = current;
    return current.url;
  }

  forward(steps: number): string {
    let current = this.#currentPage;
    while (steps > 0 && current.next) {
      current = current.next;
      steps--;
    }

    this.#currentPage = current;
    return current.url;
  }
}
