/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  CartesiMathV2,
  CartesiMathV2Interface,
} from "../../../../@cartesi/util/contracts/CartesiMathV2";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_num",
        type: "uint256",
      },
    ],
    name: "clz",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_num",
        type: "uint256",
      },
    ],
    name: "ctz",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_num",
        type: "uint256",
      },
    ],
    name: "getLog2Floor",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_num",
        type: "uint256",
      },
    ],
    name: "getLog2TableTimes1M",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_num",
        type: "uint256",
      },
    ],
    name: "isPowerOf2",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_num",
        type: "uint256",
      },
    ],
    name: "log2ApproxTimes1M",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6107e261003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061006c5760003560e01c806306c8e54b14610071578063296e7af81461009b57806330244f7a146100bc57806332ef283b146100cf578063d82ae4b1146100e2578063e3581b6814610105575b600080fd5b61008461007f366004610568565b610118565b60405160ff90911681526020015b60405180910390f35b6100ae6100a9366004610568565b610189565b604051908152602001610092565b6100ae6100ca366004610568565b6102b5565b6100ae6100dd366004610568565b6103f5565b6100f56100f0366004610568565b6104a6565b6040519015158152602001610092565b6100ae610113366004610568565b6104cc565b60008160000361016f5760405162461bcd60e51b815260206004820152601860248201527f6c6f67206f66207a65726f20697320756e646566696e6564000000000000000060448201526064015b60405180910390fd5b610178826102b5565b6101839060ff610597565b92915050565b60008160000361019c5750610100919050565b6000826fffffffffffffffffffffffffffffffff166000036101cd576101c38160806105aa565b9050608083901c92505b8267ffffffffffffffff166000036101f4576101ea8160406105aa565b9050604083901c92505b8263ffffffff166000036102175761020d8160206105aa565b9050602083901c92505b8261ffff166000036102385761022e8160106105aa565b9050601083901c92505b8260ff166000036102585761024e8160086105aa565b9050600883901c92505b82600f166000036102785761026e8160046105aa565b9050600483901c92505b826003166000036102985761028e8160026105aa565b9050600283901c92505b82600116600003610183576102ae8160016105aa565b9392505050565b6000816000036102c85750610100919050565b6000826fffffffffffffffffffffffffffffffff19166000036102fa576102f08160806105aa565b9050608083901b92505b826001600160c01b031916600003610321576103178160406105aa565b9050604083901b92505b826001600160e01b0319166000036103485761033e8160206105aa565b9050602083901b92505b826001600160f01b03191660000361036f576103658160106105aa565b9050601083901b92505b826001600160f81b0319166000036103965761038c8160086105aa565b9050600883901b92505b82600f60fc1b166000036103b9576103af8160046105aa565b9050600483901b92505b82600360fe1b166000036103dc576103d28160026105aa565b9050600283901b92505b82600160ff1b16600003610183576102ae8160016105aa565b600080805b60038160ff16101561049c576000604051806101a00160405280610180815260200161062d610180913960ff8316610433600188610597565b61043e9060036105bd565b61044891906105aa565b81518110610458576104586105d4565b01602001516001600160f81b03191690506104748260086105ea565b60ff16816001600160e81b031916901c831792505080806104949061060d565b9150506103fa565b5060e81c92915050565b6000816000036104b857506000919050565b6104c3600183610597565b90911615919050565b60008082116105155760405162461bcd60e51b81526020600482015260156024820152744e756d6265722063616e6e6f74206265207a65726f60581b6044820152606401610166565b6000826001036105285750600092915050565b608083111561054857600192831c9261054190826105aa565b9050610528565b610551836103f5565b61055e620f4240836105bd565b6102ae91906105aa565b60006020828403121561057a57600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b8181038181111561018357610183610581565b8082018082111561018357610183610581565b808202811582820484141761018357610183610581565b634e487b7160e01b600052603260045260246000fd5b60ff818116838216029081169081811461060657610606610581565b5092915050565b600060ff821660ff810361062357610623610581565b6001019291505056fe0000000f4240182f421e8480236e082771822ad63a2dc6c0305e8532b04834c96736b3c23876d73a187a3b9d4a3d09003e5ea63fa0c540d17741f28843057d440ba745062945f60246dc1047b917488dc7495aba4a207c4adf8a4b98544c4b404cf8aa4da0e64e44434ee3054f7d6d5013b750a61a5134c851bff05247bd52cc58534de753cc8d54486954c19c55384255ac75561e50568de956fb575766b057d00758376f589cfa5900ba5962bc59c3135a21ca5a7ef15ada945b34bf5b8d805be4df5c3aea5c8fa95ce3265d356c5d86835dd6735e25455e73005ebfad5f0b525f55f75f9fa25fe85a60302460770860bd0a61023061467f6189fd61ccae620e98624fbf62902762cfd5630ecd634d12638aa963c7966403dc643f7f647a8264b4e864eeb56527ec6560906598a365d029660724663d9766738566a8f066ddda6712476746386779af67acaf67df3a6811526842fa68743268a4fc68d55c6905536934e169640a6992cf69c13169ef326a1cd46a4a186a76ff6aa38c6acfc0a2646970667358221220f497263f8f1ae561086920e2bf0686c67269bdc77778dc272e17ac2504217a0964736f6c63430008130033";

type CartesiMathV2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CartesiMathV2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CartesiMathV2__factory extends ContractFactory {
  constructor(...args: CartesiMathV2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      CartesiMathV2 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): CartesiMathV2__factory {
    return super.connect(runner) as CartesiMathV2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CartesiMathV2Interface {
    return new Interface(_abi) as CartesiMathV2Interface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): CartesiMathV2 {
    return new Contract(address, _abi, runner) as unknown as CartesiMathV2;
  }
}
