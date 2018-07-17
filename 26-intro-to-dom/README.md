#Document Object Model vs. HTML
- Tree of Nodes

### DOM nodes, parent child sibling relationships
- traversing nodes to selector the desired node

### Selectors and how to use them

| Selector name                   | Return shape   | Return type    | Live? | Reference             | forEach? |
| ------------------------------- | -------------- | -------------- | ----- | --------------------- | -------- |
| `document.getElementById()`        | Single element | Element        | N/A   | https://goo.gl/8cHGoy | N/A      |
| `element.getElementsByClassName()` | Collection     | HTMLCollection | Yes   | https://goo.gl/qcAhcp | No       |
| `element.getElementsByTagName()`   | Collection     | HTMLCollection | Yes   | https://goo.gl/QHozSh | No       |
| `element.querySelector()`          | Single element | Element        | N/A   | https://goo.gl/6Pqbcc | N/A      |
| `element.querySelectorAll()`       | Collection     | NodeList       | Node  | https://goo.gl/vTfXza | Yes      |

### Grabbing and Manipulating DOM elements
- Twitter
- content
- css styling
- [DIY](https://en.wikipedia.org/wiki/Document_Object_Model)
- innerHTML vs. innerText

### NodeList vs HTMLCollection??
- NodeList works with .forEach()
- Array.from()

### CRUD
- createElement()
- appendChild()
- removeChild()
- innerHTML


### Customer HTML attributes (metadata)
- [HTMLElement.dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)
