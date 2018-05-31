pragma solidity ^0.4.18;

contract SimpleStorage {
  uint storedData;

  function set(uint x) public {
    if (x == 5)
      revert();
    storedData = x;
  }

  function times(uint x) public view returns (uint) {
    return storedData * x;
  }

  function get() public view returns (uint) {
    return storedData;
  }
}
