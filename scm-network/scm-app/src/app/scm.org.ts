import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace scm.org{
   export class CommodityType extends Asset {
      id: string;
      name: string;
   }
   export class Commodity extends Asset {
      type: CommodityType;
      serialNumber: string;
      owner: Organization;
   }
   export class Supply extends Asset {
      id: string;
      commodity: Commodity;
      from: Organization;
      to: Organization;
   }
   export class Organization extends Participant {
      id: string;
   }
   export class SupplyTrade extends Transaction {
      commodity: Commodity;
      from: Organization;
      to: Organization;
   }
// }
