const inorder = (arg) => {
  // base case
  if (arg.length <= 1) {
    arg.length && console.log(arg[0]);
    return;
  }
  // Left, Node, Right
  let middle = Math.floor(arg.length / 2);
  inorder(arg.slice(0, middle));
  console.log(arg[middle]);
  inorder(arg.slice(middle + 1, arg.length));
};

console.log(inorder([1, 2, 3, 4, 5]));
