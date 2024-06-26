/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface IERC1155SinglePortalInterface extends Interface {
  getFunction(
    nameOrSignature: "depositSingleERC1155Token" | "getInputBox"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "depositSingleERC1155Token",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getInputBox",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "depositSingleERC1155Token",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getInputBox",
    data: BytesLike
  ): Result;
}

export interface IERC1155SinglePortal extends BaseContract {
  connect(runner?: ContractRunner | null): IERC1155SinglePortal;
  waitForDeployment(): Promise<this>;

  interface: IERC1155SinglePortalInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  /**
   * Transfer an ERC-1155 token to a DApp and add an input to the DApp's input box to signal such operation. The caller must enable approval for the portal to manage all of their tokens beforehand, by calling the `setApprovalForAll` function in the token contract.
   * @param _baseLayerData Additional data to be interpreted by the base layer
   * @param _dapp The address of the DApp
   * @param _execLayerData Additional data to be interpreted by the execution layer
   * @param _token The ERC-1155 token contract
   * @param _tokenId The identifier of the token being transferred
   * @param _value Transfer amount
   */
  depositSingleERC1155Token: TypedContractMethod<
    [
      _token: AddressLike,
      _dapp: AddressLike,
      _tokenId: BigNumberish,
      _value: BigNumberish,
      _baseLayerData: BytesLike,
      _execLayerData: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  /**
   * Get the input box used by this input relay.
   */
  getInputBox: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "depositSingleERC1155Token"
  ): TypedContractMethod<
    [
      _token: AddressLike,
      _dapp: AddressLike,
      _tokenId: BigNumberish,
      _value: BigNumberish,
      _baseLayerData: BytesLike,
      _execLayerData: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getInputBox"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}
