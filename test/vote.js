const {expect} = require("chai"); // Mocha-framework, chai-library
const { ethers } = require("hardhat");

describe("Inec Contract", function(){
    let Inec;
    let inec;
    let votersStatus;
    let owner;


    beforeEach(async function(){
        [owner, addr1, addr2,...addrs] = await ethers.getSigners();

        Inec = await ethers.getContractFactory("Inec");
        inec = await Inec.deploy();
        votersStatus = await inec.hasAddressVoted(owner);
    });

    describe('deployment', function(){
        it('should check the voters Status', async function(){
            expect(await inec.hasAddressVoted(owner)).to.equal(votersStatus);
        })

        it('should respond you have voted if voterStatus is true', async function(){
            expect(await inec.hasAddressVoted(owner)).to.not.equal(true).to.be.revertedWith("You have already voted");
            
        })
    })

    describe('voting', function(){
        it('should vote for peter obi', async function(){
            
            initialObiVote = await inec._Peter_Obi();
            one = await inec.one();
            await inec.LP__Peter_Obi();
            expect((initialObiVote + (one))).to.equal(( one ))
            expect(await inec.hasAddressVoted(owner)).to.equal(true);
        })
        
        it('should vote for Atiku', async function(){
            
            initialAtikuVote = await inec.Atiku_Abubakar_PDP();
            one = await inec.one();
            await inec.PDP__Atiku_Abubakar();
            expect((initialAtikuVote + (one))).to.equal(( one ))
            expect(await inec.hasAddressVoted(owner)).to.equal(true);
        })

        it('should vote for Tinubu', async function(){
            
            initialTinubuVote = await inec.Bola_Tinubu_APC();
            one = await inec.one();
            await inec.APC__Bola_Tinubu();
            expect((initialTinubuVote + (one))).to.equal(( one ))
            expect(await inec.hasAddressVoted(owner)).to.equal(true);
        })
        
    })

})