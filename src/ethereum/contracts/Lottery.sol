pragma solidity ^0.8.0;

contract crowedFunding{
    address public manager;
    address[] public members;
    Campain[] listOfProject;

    constructor (){
        manager = msg.sender;
    }
    
    struct Campain{
        address Creator;
        string Name;
        string Description;
        uint256 RequiredAmount;
        uint256 ReceiveAmount;
    }

    function createProject(string memory Name, string memory Description, uint256 RequiredAmount) public checkCreatorType {
        RequiredAmount = RequiredAmount * 1 ether;
        uint256 ReceiveAmount = 0 * 1 ether;
        Campain memory project = Campain(msg.sender, Name, Description, RequiredAmount, ReceiveAmount);
        listOfProject.push(project);
        members.push(msg.sender);
    }
    
    function viewProjects() public view returns(Campain[] memory){
        return listOfProject;
    }
    
    function viewAllCreators() public view returns(address[] memory){
        return members;
    }
    
    function contributeCampain(address campainAddress) payable public contribution {
        for(uint i = 0; i < listOfProject.length; i++){
            if(listOfProject[i].Creator == campainAddress){
                require((listOfProject[i].ReceiveAmount + msg.value) * 1 ether <= listOfProject[i].RequiredAmount, "Required amount limit exceeds");
                payable(listOfProject[i].Creator).transfer(msg.value);
                listOfProject[i].ReceiveAmount += msg.value;
            }
        }
    }

    



    
    modifier contribution(){
        require(msg.value >= 1 ether, "Your contribution must be 1 or more ethers");
        _;
    }
    
    modifier checkCreatorType(){
        require(msg.sender != manager, "Manager can not create Campain");
        _;
    }
}