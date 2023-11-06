import { Branch } from "./branch";

export class AccountBranch {
    constructor(
        public accountNumber=0,
        public branch=new Branch()
    ){}
}
