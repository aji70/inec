// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Inec {
    
    address owner = msg.sender;
    uint ownerCount = 0;
    uint public _Peter_Obi ;
    uint public Atiku_Abubakar_PDP;
    uint public Bola_Tinubu_APC ;
    uint public one = 1;
   
    mapping(address => bool) hasVoted;
    function hasAddressVoted(address _voter) public view returns (bool) {
        return hasVoted[_voter];
    }

    function LP__Peter_Obi() public {
        require(!hasVoted[msg.sender], "You have voted");
        hasVoted[msg.sender] = true;
        _Peter_Obi += one;
                 
    }
    
     function PDP__Atiku_Abubakar() public {
        require(!hasVoted[msg.sender], "You have voted");
        hasVoted[msg.sender] = true;
          Atiku_Abubakar_PDP += one;
    }

     function APC__Bola_Tinubu() public {
        require(!hasVoted[msg.sender], "You have voted");
        hasVoted[msg.sender] = true;
         Bola_Tinubu_APC += one;
    }


}