export class Node {
  constructor(public data: number, public next: Node | null) {}
}

function linkedList(data: number[]): Node | null {
  let next: Node | null = null;
  for (let i = data.length - 1; i >= 0; i--) {
    const node: Node = new Node(data[i], next === null ? null : next);
    next = node;
  }
  return next;
}

function reverseLinkedListIterative(node: Node | null) {
  let prev = null;
  let current = node;
  let next = null;
  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

function reverseLinkedListRecursive(node: Node | null): Node | null {
  if (node === null || node.next === null) {
    return node;
  }

  const newHead: Node | null = reverseLinkedListRecursive(node.next);
  node.next.next = node;
  node.next = null;

  return newHead;
}

const head = linkedList([1, 2, 3]);
console.log("head", JSON.stringify(head, null, 2));

const reversedLinkedList = reverseLinkedListRecursive(head);
console.log("reversed", reversedLinkedList);
