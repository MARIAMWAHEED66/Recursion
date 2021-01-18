class TreeNode {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }

  insert(data) {
    // if the data value is less than the value of the node
    if (data <= this.data) {
      // We go left since the value is less than
      // If a left node does not exist, the new node goes here
      // Otherwise we recursively call the insert method on the left node
      if (this.left === null) {
        this.left = new TreeNode(data);
      } else {
        this.left.insert(data);
      }
      // Otherwise the data value is greater than the value of the node
    } else {
      // Same process is followed but to the right.
      if (this.right === null) {
        this.right = new TreeNode(data);
      } else {
        this.right.insert(data);
      }
    }
  }
}
