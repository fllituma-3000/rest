
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Producto
 * 
 */
export type Producto = $Result.DefaultSelection<Prisma.$ProductoPayload>
/**
 * Model pedido_producto
 * 
 */
export type pedido_producto = $Result.DefaultSelection<Prisma.$pedido_productoPayload>
/**
 * Model pedido
 * 
 */
export type pedido = $Result.DefaultSelection<Prisma.$pedidoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Productos
 * const productos = await prisma.producto.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Productos
   * const productos = await prisma.producto.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.producto`: Exposes CRUD operations for the **Producto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos
    * const productos = await prisma.producto.findMany()
    * ```
    */
  get producto(): Prisma.ProductoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedido_producto`: Exposes CRUD operations for the **pedido_producto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedido_productos
    * const pedido_productos = await prisma.pedido_producto.findMany()
    * ```
    */
  get pedido_producto(): Prisma.pedido_productoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedido`: Exposes CRUD operations for the **pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedido.findMany()
    * ```
    */
  get pedido(): Prisma.pedidoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Producto: 'Producto',
    pedido_producto: 'pedido_producto',
    pedido: 'pedido'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "producto" | "pedido_producto" | "pedido"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Producto: {
        payload: Prisma.$ProductoPayload<ExtArgs>
        fields: Prisma.ProductoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findFirst: {
            args: Prisma.ProductoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findMany: {
            args: Prisma.ProductoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          create: {
            args: Prisma.ProductoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          createMany: {
            args: Prisma.ProductoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          delete: {
            args: Prisma.ProductoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          update: {
            args: Prisma.ProductoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          deleteMany: {
            args: Prisma.ProductoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          upsert: {
            args: Prisma.ProductoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          aggregate: {
            args: Prisma.ProductoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducto>
          }
          groupBy: {
            args: Prisma.ProductoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductoCountArgs<ExtArgs>
            result: $Utils.Optional<ProductoCountAggregateOutputType> | number
          }
        }
      }
      pedido_producto: {
        payload: Prisma.$pedido_productoPayload<ExtArgs>
        fields: Prisma.pedido_productoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pedido_productoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_productoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pedido_productoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_productoPayload>
          }
          findFirst: {
            args: Prisma.pedido_productoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_productoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pedido_productoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_productoPayload>
          }
          findMany: {
            args: Prisma.pedido_productoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_productoPayload>[]
          }
          create: {
            args: Prisma.pedido_productoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_productoPayload>
          }
          createMany: {
            args: Prisma.pedido_productoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pedido_productoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_productoPayload>[]
          }
          delete: {
            args: Prisma.pedido_productoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_productoPayload>
          }
          update: {
            args: Prisma.pedido_productoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_productoPayload>
          }
          deleteMany: {
            args: Prisma.pedido_productoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pedido_productoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pedido_productoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_productoPayload>[]
          }
          upsert: {
            args: Prisma.pedido_productoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_productoPayload>
          }
          aggregate: {
            args: Prisma.Pedido_productoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido_producto>
          }
          groupBy: {
            args: Prisma.pedido_productoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Pedido_productoGroupByOutputType>[]
          }
          count: {
            args: Prisma.pedido_productoCountArgs<ExtArgs>
            result: $Utils.Optional<Pedido_productoCountAggregateOutputType> | number
          }
        }
      }
      pedido: {
        payload: Prisma.$pedidoPayload<ExtArgs>
        fields: Prisma.pedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          findFirst: {
            args: Prisma.pedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          findMany: {
            args: Prisma.pedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>[]
          }
          create: {
            args: Prisma.pedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          createMany: {
            args: Prisma.pedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pedidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>[]
          }
          delete: {
            args: Prisma.pedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          update: {
            args: Prisma.pedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          deleteMany: {
            args: Prisma.pedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pedidoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>[]
          }
          upsert: {
            args: Prisma.pedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          aggregate: {
            args: Prisma.PedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido>
          }
          groupBy: {
            args: Prisma.pedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.pedidoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    producto?: ProductoOmit
    pedido_producto?: pedido_productoOmit
    pedido?: pedidoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProductoCountOutputType
   */

  export type ProductoCountOutputType = {
    pedidos: number
  }

  export type ProductoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | ProductoCountOutputTypeCountPedidosArgs
  }

  // Custom InputTypes
  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoCountOutputType
     */
    select?: ProductoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedido_productoWhereInput
  }


  /**
   * Count Type PedidoCountOutputType
   */

  export type PedidoCountOutputType = {
    productos: number
  }

  export type PedidoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | PedidoCountOutputTypeCountProductosArgs
  }

  // Custom InputTypes
  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoCountOutputType
     */
    select?: PedidoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountProductosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedido_productoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Producto
   */

  export type AggregateProducto = {
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  export type ProductoAvgAggregateOutputType = {
    id: number | null
    precio: number | null
    stock: number | null
  }

  export type ProductoSumAggregateOutputType = {
    id: number | null
    precio: number | null
    stock: number | null
  }

  export type ProductoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    precio: number | null
    stock: number | null
    disponible: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    precio: number | null
    stock: number | null
    disponible: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductoCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    precio: number
    stock: number
    disponible: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductoAvgAggregateInputType = {
    id?: true
    precio?: true
    stock?: true
  }

  export type ProductoSumAggregateInputType = {
    id?: true
    precio?: true
    stock?: true
  }

  export type ProductoMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    stock?: true
    disponible?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductoMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    stock?: true
    disponible?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductoCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    stock?: true
    disponible?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Producto to aggregate.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Productos
    **/
    _count?: true | ProductoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductoMaxAggregateInputType
  }

  export type GetProductoAggregateType<T extends ProductoAggregateArgs> = {
        [P in keyof T & keyof AggregateProducto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducto[P]>
      : GetScalarType<T[P], AggregateProducto[P]>
  }




  export type ProductoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoWhereInput
    orderBy?: ProductoOrderByWithAggregationInput | ProductoOrderByWithAggregationInput[]
    by: ProductoScalarFieldEnum[] | ProductoScalarFieldEnum
    having?: ProductoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductoCountAggregateInputType | true
    _avg?: ProductoAvgAggregateInputType
    _sum?: ProductoSumAggregateInputType
    _min?: ProductoMinAggregateInputType
    _max?: ProductoMaxAggregateInputType
  }

  export type ProductoGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string | null
    precio: number
    stock: number
    disponible: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  type GetProductoGroupByPayload<T extends ProductoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductoGroupByOutputType[P]>
            : GetScalarType<T[P], ProductoGroupByOutputType[P]>
        }
      >
    >


  export type ProductoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    stock?: boolean
    disponible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pedidos?: boolean | Producto$pedidosArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producto"]>

  export type ProductoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    stock?: boolean
    disponible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["producto"]>

  export type ProductoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    stock?: boolean
    disponible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["producto"]>

  export type ProductoSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    stock?: boolean
    disponible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "precio" | "stock" | "disponible" | "createdAt" | "updatedAt", ExtArgs["result"]["producto"]>
  export type ProductoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | Producto$pedidosArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Producto"
    objects: {
      pedidos: Prisma.$pedido_productoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string | null
      precio: number
      stock: number
      disponible: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["producto"]>
    composites: {}
  }

  type ProductoGetPayload<S extends boolean | null | undefined | ProductoDefaultArgs> = $Result.GetResult<Prisma.$ProductoPayload, S>

  type ProductoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductoCountAggregateInputType | true
    }

  export interface ProductoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Producto'], meta: { name: 'Producto' } }
    /**
     * Find zero or one Producto that matches the filter.
     * @param {ProductoFindUniqueArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductoFindUniqueArgs>(args: SelectSubset<T, ProductoFindUniqueArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Producto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductoFindUniqueOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductoFindFirstArgs>(args?: SelectSubset<T, ProductoFindFirstArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos
     * const productos = await prisma.producto.findMany()
     * 
     * // Get first 10 Productos
     * const productos = await prisma.producto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productoWithIdOnly = await prisma.producto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductoFindManyArgs>(args?: SelectSubset<T, ProductoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Producto.
     * @param {ProductoCreateArgs} args - Arguments to create a Producto.
     * @example
     * // Create one Producto
     * const Producto = await prisma.producto.create({
     *   data: {
     *     // ... data to create a Producto
     *   }
     * })
     * 
     */
    create<T extends ProductoCreateArgs>(args: SelectSubset<T, ProductoCreateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productos.
     * @param {ProductoCreateManyArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const producto = await prisma.producto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductoCreateManyArgs>(args?: SelectSubset<T, ProductoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Productos and returns the data saved in the database.
     * @param {ProductoCreateManyAndReturnArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const producto = await prisma.producto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Productos and only return the `id`
     * const productoWithIdOnly = await prisma.producto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Producto.
     * @param {ProductoDeleteArgs} args - Arguments to delete one Producto.
     * @example
     * // Delete one Producto
     * const Producto = await prisma.producto.delete({
     *   where: {
     *     // ... filter to delete one Producto
     *   }
     * })
     * 
     */
    delete<T extends ProductoDeleteArgs>(args: SelectSubset<T, ProductoDeleteArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Producto.
     * @param {ProductoUpdateArgs} args - Arguments to update one Producto.
     * @example
     * // Update one Producto
     * const producto = await prisma.producto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductoUpdateArgs>(args: SelectSubset<T, ProductoUpdateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productos.
     * @param {ProductoDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.producto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductoDeleteManyArgs>(args?: SelectSubset<T, ProductoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos
     * const producto = await prisma.producto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductoUpdateManyArgs>(args: SelectSubset<T, ProductoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos and returns the data updated in the database.
     * @param {ProductoUpdateManyAndReturnArgs} args - Arguments to update many Productos.
     * @example
     * // Update many Productos
     * const producto = await prisma.producto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Productos and only return the `id`
     * const productoWithIdOnly = await prisma.producto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Producto.
     * @param {ProductoUpsertArgs} args - Arguments to update or create a Producto.
     * @example
     * // Update or create a Producto
     * const producto = await prisma.producto.upsert({
     *   create: {
     *     // ... data to create a Producto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Producto we want to update
     *   }
     * })
     */
    upsert<T extends ProductoUpsertArgs>(args: SelectSubset<T, ProductoUpsertArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.producto.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
    **/
    count<T extends ProductoCountArgs>(
      args?: Subset<T, ProductoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductoAggregateArgs>(args: Subset<T, ProductoAggregateArgs>): Prisma.PrismaPromise<GetProductoAggregateType<T>>

    /**
     * Group by Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductoGroupByArgs['orderBy'] }
        : { orderBy?: ProductoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Producto model
   */
  readonly fields: ProductoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Producto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedidos<T extends Producto$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, Producto$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedido_productoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Producto model
   */
  interface ProductoFieldRefs {
    readonly id: FieldRef<"Producto", 'Int'>
    readonly nombre: FieldRef<"Producto", 'String'>
    readonly descripcion: FieldRef<"Producto", 'String'>
    readonly precio: FieldRef<"Producto", 'Float'>
    readonly stock: FieldRef<"Producto", 'Int'>
    readonly disponible: FieldRef<"Producto", 'Boolean'>
    readonly createdAt: FieldRef<"Producto", 'DateTime'>
    readonly updatedAt: FieldRef<"Producto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Producto findUnique
   */
  export type ProductoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findUniqueOrThrow
   */
  export type ProductoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findFirst
   */
  export type ProductoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findFirstOrThrow
   */
  export type ProductoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findMany
   */
  export type ProductoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto create
   */
  export type ProductoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to create a Producto.
     */
    data: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
  }

  /**
   * Producto createMany
   */
  export type ProductoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Productos.
     */
    data: ProductoCreateManyInput | ProductoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Producto createManyAndReturn
   */
  export type ProductoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * The data used to create many Productos.
     */
    data: ProductoCreateManyInput | ProductoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Producto update
   */
  export type ProductoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to update a Producto.
     */
    data: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
    /**
     * Choose, which Producto to update.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto updateMany
   */
  export type ProductoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Productos.
     */
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyInput>
    /**
     * Filter which Productos to update
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to update.
     */
    limit?: number
  }

  /**
   * Producto updateManyAndReturn
   */
  export type ProductoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * The data used to update Productos.
     */
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyInput>
    /**
     * Filter which Productos to update
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to update.
     */
    limit?: number
  }

  /**
   * Producto upsert
   */
  export type ProductoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The filter to search for the Producto to update in case it exists.
     */
    where: ProductoWhereUniqueInput
    /**
     * In case the Producto found by the `where` argument doesn't exist, create a new Producto with this data.
     */
    create: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
    /**
     * In case the Producto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
  }

  /**
   * Producto delete
   */
  export type ProductoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter which Producto to delete.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto deleteMany
   */
  export type ProductoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Productos to delete
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to delete.
     */
    limit?: number
  }

  /**
   * Producto.pedidos
   */
  export type Producto$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_producto
     */
    select?: pedido_productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_producto
     */
    omit?: pedido_productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_productoInclude<ExtArgs> | null
    where?: pedido_productoWhereInput
    orderBy?: pedido_productoOrderByWithRelationInput | pedido_productoOrderByWithRelationInput[]
    cursor?: pedido_productoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Pedido_productoScalarFieldEnum | Pedido_productoScalarFieldEnum[]
  }

  /**
   * Producto without action
   */
  export type ProductoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
  }


  /**
   * Model pedido_producto
   */

  export type AggregatePedido_producto = {
    _count: Pedido_productoCountAggregateOutputType | null
    _avg: Pedido_productoAvgAggregateOutputType | null
    _sum: Pedido_productoSumAggregateOutputType | null
    _min: Pedido_productoMinAggregateOutputType | null
    _max: Pedido_productoMaxAggregateOutputType | null
  }

  export type Pedido_productoAvgAggregateOutputType = {
    id: number | null
    idpedido: number | null
    idproducto: number | null
  }

  export type Pedido_productoSumAggregateOutputType = {
    id: number | null
    idpedido: number | null
    idproducto: number | null
  }

  export type Pedido_productoMinAggregateOutputType = {
    id: number | null
    idpedido: number | null
    idproducto: number | null
  }

  export type Pedido_productoMaxAggregateOutputType = {
    id: number | null
    idpedido: number | null
    idproducto: number | null
  }

  export type Pedido_productoCountAggregateOutputType = {
    id: number
    idpedido: number
    idproducto: number
    _all: number
  }


  export type Pedido_productoAvgAggregateInputType = {
    id?: true
    idpedido?: true
    idproducto?: true
  }

  export type Pedido_productoSumAggregateInputType = {
    id?: true
    idpedido?: true
    idproducto?: true
  }

  export type Pedido_productoMinAggregateInputType = {
    id?: true
    idpedido?: true
    idproducto?: true
  }

  export type Pedido_productoMaxAggregateInputType = {
    id?: true
    idpedido?: true
    idproducto?: true
  }

  export type Pedido_productoCountAggregateInputType = {
    id?: true
    idpedido?: true
    idproducto?: true
    _all?: true
  }

  export type Pedido_productoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pedido_producto to aggregate.
     */
    where?: pedido_productoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedido_productos to fetch.
     */
    orderBy?: pedido_productoOrderByWithRelationInput | pedido_productoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pedido_productoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedido_productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedido_productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pedido_productos
    **/
    _count?: true | Pedido_productoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Pedido_productoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Pedido_productoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Pedido_productoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Pedido_productoMaxAggregateInputType
  }

  export type GetPedido_productoAggregateType<T extends Pedido_productoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido_producto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido_producto[P]>
      : GetScalarType<T[P], AggregatePedido_producto[P]>
  }




  export type pedido_productoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedido_productoWhereInput
    orderBy?: pedido_productoOrderByWithAggregationInput | pedido_productoOrderByWithAggregationInput[]
    by: Pedido_productoScalarFieldEnum[] | Pedido_productoScalarFieldEnum
    having?: pedido_productoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Pedido_productoCountAggregateInputType | true
    _avg?: Pedido_productoAvgAggregateInputType
    _sum?: Pedido_productoSumAggregateInputType
    _min?: Pedido_productoMinAggregateInputType
    _max?: Pedido_productoMaxAggregateInputType
  }

  export type Pedido_productoGroupByOutputType = {
    id: number
    idpedido: number
    idproducto: number
    _count: Pedido_productoCountAggregateOutputType | null
    _avg: Pedido_productoAvgAggregateOutputType | null
    _sum: Pedido_productoSumAggregateOutputType | null
    _min: Pedido_productoMinAggregateOutputType | null
    _max: Pedido_productoMaxAggregateOutputType | null
  }

  type GetPedido_productoGroupByPayload<T extends pedido_productoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Pedido_productoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Pedido_productoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Pedido_productoGroupByOutputType[P]>
            : GetScalarType<T[P], Pedido_productoGroupByOutputType[P]>
        }
      >
    >


  export type pedido_productoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idpedido?: boolean
    idproducto?: boolean
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido_producto"]>

  export type pedido_productoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idpedido?: boolean
    idproducto?: boolean
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido_producto"]>

  export type pedido_productoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idpedido?: boolean
    idproducto?: boolean
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido_producto"]>

  export type pedido_productoSelectScalar = {
    id?: boolean
    idpedido?: boolean
    idproducto?: boolean
  }

  export type pedido_productoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idpedido" | "idproducto", ExtArgs["result"]["pedido_producto"]>
  export type pedido_productoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }
  export type pedido_productoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }
  export type pedido_productoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }

  export type $pedido_productoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pedido_producto"
    objects: {
      pedido: Prisma.$pedidoPayload<ExtArgs>
      producto: Prisma.$ProductoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idpedido: number
      idproducto: number
    }, ExtArgs["result"]["pedido_producto"]>
    composites: {}
  }

  type pedido_productoGetPayload<S extends boolean | null | undefined | pedido_productoDefaultArgs> = $Result.GetResult<Prisma.$pedido_productoPayload, S>

  type pedido_productoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pedido_productoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Pedido_productoCountAggregateInputType | true
    }

  export interface pedido_productoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pedido_producto'], meta: { name: 'pedido_producto' } }
    /**
     * Find zero or one Pedido_producto that matches the filter.
     * @param {pedido_productoFindUniqueArgs} args - Arguments to find a Pedido_producto
     * @example
     * // Get one Pedido_producto
     * const pedido_producto = await prisma.pedido_producto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pedido_productoFindUniqueArgs>(args: SelectSubset<T, pedido_productoFindUniqueArgs<ExtArgs>>): Prisma__pedido_productoClient<$Result.GetResult<Prisma.$pedido_productoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedido_producto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pedido_productoFindUniqueOrThrowArgs} args - Arguments to find a Pedido_producto
     * @example
     * // Get one Pedido_producto
     * const pedido_producto = await prisma.pedido_producto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pedido_productoFindUniqueOrThrowArgs>(args: SelectSubset<T, pedido_productoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pedido_productoClient<$Result.GetResult<Prisma.$pedido_productoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido_producto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedido_productoFindFirstArgs} args - Arguments to find a Pedido_producto
     * @example
     * // Get one Pedido_producto
     * const pedido_producto = await prisma.pedido_producto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pedido_productoFindFirstArgs>(args?: SelectSubset<T, pedido_productoFindFirstArgs<ExtArgs>>): Prisma__pedido_productoClient<$Result.GetResult<Prisma.$pedido_productoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido_producto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedido_productoFindFirstOrThrowArgs} args - Arguments to find a Pedido_producto
     * @example
     * // Get one Pedido_producto
     * const pedido_producto = await prisma.pedido_producto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pedido_productoFindFirstOrThrowArgs>(args?: SelectSubset<T, pedido_productoFindFirstOrThrowArgs<ExtArgs>>): Prisma__pedido_productoClient<$Result.GetResult<Prisma.$pedido_productoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedido_productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedido_productoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedido_productos
     * const pedido_productos = await prisma.pedido_producto.findMany()
     * 
     * // Get first 10 Pedido_productos
     * const pedido_productos = await prisma.pedido_producto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedido_productoWithIdOnly = await prisma.pedido_producto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pedido_productoFindManyArgs>(args?: SelectSubset<T, pedido_productoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedido_productoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedido_producto.
     * @param {pedido_productoCreateArgs} args - Arguments to create a Pedido_producto.
     * @example
     * // Create one Pedido_producto
     * const Pedido_producto = await prisma.pedido_producto.create({
     *   data: {
     *     // ... data to create a Pedido_producto
     *   }
     * })
     * 
     */
    create<T extends pedido_productoCreateArgs>(args: SelectSubset<T, pedido_productoCreateArgs<ExtArgs>>): Prisma__pedido_productoClient<$Result.GetResult<Prisma.$pedido_productoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedido_productos.
     * @param {pedido_productoCreateManyArgs} args - Arguments to create many Pedido_productos.
     * @example
     * // Create many Pedido_productos
     * const pedido_producto = await prisma.pedido_producto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pedido_productoCreateManyArgs>(args?: SelectSubset<T, pedido_productoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pedido_productos and returns the data saved in the database.
     * @param {pedido_productoCreateManyAndReturnArgs} args - Arguments to create many Pedido_productos.
     * @example
     * // Create many Pedido_productos
     * const pedido_producto = await prisma.pedido_producto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pedido_productos and only return the `id`
     * const pedido_productoWithIdOnly = await prisma.pedido_producto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pedido_productoCreateManyAndReturnArgs>(args?: SelectSubset<T, pedido_productoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedido_productoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pedido_producto.
     * @param {pedido_productoDeleteArgs} args - Arguments to delete one Pedido_producto.
     * @example
     * // Delete one Pedido_producto
     * const Pedido_producto = await prisma.pedido_producto.delete({
     *   where: {
     *     // ... filter to delete one Pedido_producto
     *   }
     * })
     * 
     */
    delete<T extends pedido_productoDeleteArgs>(args: SelectSubset<T, pedido_productoDeleteArgs<ExtArgs>>): Prisma__pedido_productoClient<$Result.GetResult<Prisma.$pedido_productoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedido_producto.
     * @param {pedido_productoUpdateArgs} args - Arguments to update one Pedido_producto.
     * @example
     * // Update one Pedido_producto
     * const pedido_producto = await prisma.pedido_producto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pedido_productoUpdateArgs>(args: SelectSubset<T, pedido_productoUpdateArgs<ExtArgs>>): Prisma__pedido_productoClient<$Result.GetResult<Prisma.$pedido_productoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedido_productos.
     * @param {pedido_productoDeleteManyArgs} args - Arguments to filter Pedido_productos to delete.
     * @example
     * // Delete a few Pedido_productos
     * const { count } = await prisma.pedido_producto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pedido_productoDeleteManyArgs>(args?: SelectSubset<T, pedido_productoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedido_productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedido_productoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedido_productos
     * const pedido_producto = await prisma.pedido_producto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pedido_productoUpdateManyArgs>(args: SelectSubset<T, pedido_productoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedido_productos and returns the data updated in the database.
     * @param {pedido_productoUpdateManyAndReturnArgs} args - Arguments to update many Pedido_productos.
     * @example
     * // Update many Pedido_productos
     * const pedido_producto = await prisma.pedido_producto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pedido_productos and only return the `id`
     * const pedido_productoWithIdOnly = await prisma.pedido_producto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends pedido_productoUpdateManyAndReturnArgs>(args: SelectSubset<T, pedido_productoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedido_productoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pedido_producto.
     * @param {pedido_productoUpsertArgs} args - Arguments to update or create a Pedido_producto.
     * @example
     * // Update or create a Pedido_producto
     * const pedido_producto = await prisma.pedido_producto.upsert({
     *   create: {
     *     // ... data to create a Pedido_producto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido_producto we want to update
     *   }
     * })
     */
    upsert<T extends pedido_productoUpsertArgs>(args: SelectSubset<T, pedido_productoUpsertArgs<ExtArgs>>): Prisma__pedido_productoClient<$Result.GetResult<Prisma.$pedido_productoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedido_productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedido_productoCountArgs} args - Arguments to filter Pedido_productos to count.
     * @example
     * // Count the number of Pedido_productos
     * const count = await prisma.pedido_producto.count({
     *   where: {
     *     // ... the filter for the Pedido_productos we want to count
     *   }
     * })
    **/
    count<T extends pedido_productoCountArgs>(
      args?: Subset<T, pedido_productoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Pedido_productoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido_producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pedido_productoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Pedido_productoAggregateArgs>(args: Subset<T, Pedido_productoAggregateArgs>): Prisma.PrismaPromise<GetPedido_productoAggregateType<T>>

    /**
     * Group by Pedido_producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedido_productoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends pedido_productoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pedido_productoGroupByArgs['orderBy'] }
        : { orderBy?: pedido_productoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, pedido_productoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedido_productoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pedido_producto model
   */
  readonly fields: pedido_productoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pedido_producto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pedido_productoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends pedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pedidoDefaultArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoDefaultArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the pedido_producto model
   */
  interface pedido_productoFieldRefs {
    readonly id: FieldRef<"pedido_producto", 'Int'>
    readonly idpedido: FieldRef<"pedido_producto", 'Int'>
    readonly idproducto: FieldRef<"pedido_producto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * pedido_producto findUnique
   */
  export type pedido_productoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_producto
     */
    select?: pedido_productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_producto
     */
    omit?: pedido_productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_productoInclude<ExtArgs> | null
    /**
     * Filter, which pedido_producto to fetch.
     */
    where: pedido_productoWhereUniqueInput
  }

  /**
   * pedido_producto findUniqueOrThrow
   */
  export type pedido_productoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_producto
     */
    select?: pedido_productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_producto
     */
    omit?: pedido_productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_productoInclude<ExtArgs> | null
    /**
     * Filter, which pedido_producto to fetch.
     */
    where: pedido_productoWhereUniqueInput
  }

  /**
   * pedido_producto findFirst
   */
  export type pedido_productoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_producto
     */
    select?: pedido_productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_producto
     */
    omit?: pedido_productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_productoInclude<ExtArgs> | null
    /**
     * Filter, which pedido_producto to fetch.
     */
    where?: pedido_productoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedido_productos to fetch.
     */
    orderBy?: pedido_productoOrderByWithRelationInput | pedido_productoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pedido_productos.
     */
    cursor?: pedido_productoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedido_productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedido_productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pedido_productos.
     */
    distinct?: Pedido_productoScalarFieldEnum | Pedido_productoScalarFieldEnum[]
  }

  /**
   * pedido_producto findFirstOrThrow
   */
  export type pedido_productoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_producto
     */
    select?: pedido_productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_producto
     */
    omit?: pedido_productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_productoInclude<ExtArgs> | null
    /**
     * Filter, which pedido_producto to fetch.
     */
    where?: pedido_productoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedido_productos to fetch.
     */
    orderBy?: pedido_productoOrderByWithRelationInput | pedido_productoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pedido_productos.
     */
    cursor?: pedido_productoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedido_productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedido_productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pedido_productos.
     */
    distinct?: Pedido_productoScalarFieldEnum | Pedido_productoScalarFieldEnum[]
  }

  /**
   * pedido_producto findMany
   */
  export type pedido_productoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_producto
     */
    select?: pedido_productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_producto
     */
    omit?: pedido_productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_productoInclude<ExtArgs> | null
    /**
     * Filter, which pedido_productos to fetch.
     */
    where?: pedido_productoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedido_productos to fetch.
     */
    orderBy?: pedido_productoOrderByWithRelationInput | pedido_productoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pedido_productos.
     */
    cursor?: pedido_productoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedido_productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedido_productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pedido_productos.
     */
    distinct?: Pedido_productoScalarFieldEnum | Pedido_productoScalarFieldEnum[]
  }

  /**
   * pedido_producto create
   */
  export type pedido_productoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_producto
     */
    select?: pedido_productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_producto
     */
    omit?: pedido_productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_productoInclude<ExtArgs> | null
    /**
     * The data needed to create a pedido_producto.
     */
    data: XOR<pedido_productoCreateInput, pedido_productoUncheckedCreateInput>
  }

  /**
   * pedido_producto createMany
   */
  export type pedido_productoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pedido_productos.
     */
    data: pedido_productoCreateManyInput | pedido_productoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pedido_producto createManyAndReturn
   */
  export type pedido_productoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_producto
     */
    select?: pedido_productoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_producto
     */
    omit?: pedido_productoOmit<ExtArgs> | null
    /**
     * The data used to create many pedido_productos.
     */
    data: pedido_productoCreateManyInput | pedido_productoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_productoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pedido_producto update
   */
  export type pedido_productoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_producto
     */
    select?: pedido_productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_producto
     */
    omit?: pedido_productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_productoInclude<ExtArgs> | null
    /**
     * The data needed to update a pedido_producto.
     */
    data: XOR<pedido_productoUpdateInput, pedido_productoUncheckedUpdateInput>
    /**
     * Choose, which pedido_producto to update.
     */
    where: pedido_productoWhereUniqueInput
  }

  /**
   * pedido_producto updateMany
   */
  export type pedido_productoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pedido_productos.
     */
    data: XOR<pedido_productoUpdateManyMutationInput, pedido_productoUncheckedUpdateManyInput>
    /**
     * Filter which pedido_productos to update
     */
    where?: pedido_productoWhereInput
    /**
     * Limit how many pedido_productos to update.
     */
    limit?: number
  }

  /**
   * pedido_producto updateManyAndReturn
   */
  export type pedido_productoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_producto
     */
    select?: pedido_productoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_producto
     */
    omit?: pedido_productoOmit<ExtArgs> | null
    /**
     * The data used to update pedido_productos.
     */
    data: XOR<pedido_productoUpdateManyMutationInput, pedido_productoUncheckedUpdateManyInput>
    /**
     * Filter which pedido_productos to update
     */
    where?: pedido_productoWhereInput
    /**
     * Limit how many pedido_productos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_productoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * pedido_producto upsert
   */
  export type pedido_productoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_producto
     */
    select?: pedido_productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_producto
     */
    omit?: pedido_productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_productoInclude<ExtArgs> | null
    /**
     * The filter to search for the pedido_producto to update in case it exists.
     */
    where: pedido_productoWhereUniqueInput
    /**
     * In case the pedido_producto found by the `where` argument doesn't exist, create a new pedido_producto with this data.
     */
    create: XOR<pedido_productoCreateInput, pedido_productoUncheckedCreateInput>
    /**
     * In case the pedido_producto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pedido_productoUpdateInput, pedido_productoUncheckedUpdateInput>
  }

  /**
   * pedido_producto delete
   */
  export type pedido_productoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_producto
     */
    select?: pedido_productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_producto
     */
    omit?: pedido_productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_productoInclude<ExtArgs> | null
    /**
     * Filter which pedido_producto to delete.
     */
    where: pedido_productoWhereUniqueInput
  }

  /**
   * pedido_producto deleteMany
   */
  export type pedido_productoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pedido_productos to delete
     */
    where?: pedido_productoWhereInput
    /**
     * Limit how many pedido_productos to delete.
     */
    limit?: number
  }

  /**
   * pedido_producto without action
   */
  export type pedido_productoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_producto
     */
    select?: pedido_productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_producto
     */
    omit?: pedido_productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_productoInclude<ExtArgs> | null
  }


  /**
   * Model pedido
   */

  export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  export type PedidoAvgAggregateOutputType = {
    id: number | null
    cantidad: number | null
  }

  export type PedidoSumAggregateOutputType = {
    id: number | null
    cantidad: number | null
  }

  export type PedidoMinAggregateOutputType = {
    id: number | null
    estado: string | null
    cantidad: number | null
  }

  export type PedidoMaxAggregateOutputType = {
    id: number | null
    estado: string | null
    cantidad: number | null
  }

  export type PedidoCountAggregateOutputType = {
    id: number
    estado: number
    cantidad: number
    _all: number
  }


  export type PedidoAvgAggregateInputType = {
    id?: true
    cantidad?: true
  }

  export type PedidoSumAggregateInputType = {
    id?: true
    cantidad?: true
  }

  export type PedidoMinAggregateInputType = {
    id?: true
    estado?: true
    cantidad?: true
  }

  export type PedidoMaxAggregateInputType = {
    id?: true
    estado?: true
    cantidad?: true
  }

  export type PedidoCountAggregateInputType = {
    id?: true
    estado?: true
    cantidad?: true
    _all?: true
  }

  export type PedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pedido to aggregate.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pedidos
    **/
    _count?: true | PedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType
  }

  export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido[P]>
      : GetScalarType<T[P], AggregatePedido[P]>
  }




  export type pedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedidoWhereInput
    orderBy?: pedidoOrderByWithAggregationInput | pedidoOrderByWithAggregationInput[]
    by: PedidoScalarFieldEnum[] | PedidoScalarFieldEnum
    having?: pedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoCountAggregateInputType | true
    _avg?: PedidoAvgAggregateInputType
    _sum?: PedidoSumAggregateInputType
    _min?: PedidoMinAggregateInputType
    _max?: PedidoMaxAggregateInputType
  }

  export type PedidoGroupByOutputType = {
    id: number
    estado: string
    cantidad: number
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  type GetPedidoGroupByPayload<T extends pedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoGroupByOutputType[P]>
        }
      >
    >


  export type pedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    estado?: boolean
    cantidad?: boolean
    productos?: boolean | pedido$productosArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type pedidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    estado?: boolean
    cantidad?: boolean
  }, ExtArgs["result"]["pedido"]>

  export type pedidoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    estado?: boolean
    cantidad?: boolean
  }, ExtArgs["result"]["pedido"]>

  export type pedidoSelectScalar = {
    id?: boolean
    estado?: boolean
    cantidad?: boolean
  }

  export type pedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "estado" | "cantidad", ExtArgs["result"]["pedido"]>
  export type pedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | pedido$productosArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type pedidoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type pedidoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $pedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pedido"
    objects: {
      productos: Prisma.$pedido_productoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      estado: string
      cantidad: number
    }, ExtArgs["result"]["pedido"]>
    composites: {}
  }

  type pedidoGetPayload<S extends boolean | null | undefined | pedidoDefaultArgs> = $Result.GetResult<Prisma.$pedidoPayload, S>

  type pedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoCountAggregateInputType | true
    }

  export interface pedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pedido'], meta: { name: 'pedido' } }
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {pedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pedidoFindUniqueArgs>(args: SelectSubset<T, pedidoFindUniqueArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pedidoFindUniqueOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, pedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pedidoFindFirstArgs>(args?: SelectSubset<T, pedidoFindFirstArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoFindFirstOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, pedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedidoWithIdOnly = await prisma.pedido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pedidoFindManyArgs>(args?: SelectSubset<T, pedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedido.
     * @param {pedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     * 
     */
    create<T extends pedidoCreateArgs>(args: SelectSubset<T, pedidoCreateArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedidos.
     * @param {pedidoCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pedidoCreateManyArgs>(args?: SelectSubset<T, pedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pedidos and returns the data saved in the database.
     * @param {pedidoCreateManyAndReturnArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pedidoCreateManyAndReturnArgs>(args?: SelectSubset<T, pedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pedido.
     * @param {pedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     * 
     */
    delete<T extends pedidoDeleteArgs>(args: SelectSubset<T, pedidoDeleteArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedido.
     * @param {pedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pedidoUpdateArgs>(args: SelectSubset<T, pedidoUpdateArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedidos.
     * @param {pedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pedidoDeleteManyArgs>(args?: SelectSubset<T, pedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pedidoUpdateManyArgs>(args: SelectSubset<T, pedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos and returns the data updated in the database.
     * @param {pedidoUpdateManyAndReturnArgs} args - Arguments to update many Pedidos.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends pedidoUpdateManyAndReturnArgs>(args: SelectSubset<T, pedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pedido.
     * @param {pedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
     */
    upsert<T extends pedidoUpsertArgs>(args: SelectSubset<T, pedidoUpsertArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends pedidoCountArgs>(
      args?: Subset<T, pedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PedidoAggregateArgs>(args: Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>

    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends pedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pedidoGroupByArgs['orderBy'] }
        : { orderBy?: pedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, pedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pedido model
   */
  readonly fields: pedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productos<T extends pedido$productosArgs<ExtArgs> = {}>(args?: Subset<T, pedido$productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedido_productoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the pedido model
   */
  interface pedidoFieldRefs {
    readonly id: FieldRef<"pedido", 'Int'>
    readonly estado: FieldRef<"pedido", 'String'>
    readonly cantidad: FieldRef<"pedido", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * pedido findUnique
   */
  export type pedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido findUniqueOrThrow
   */
  export type pedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido findFirst
   */
  export type pedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pedidos.
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * pedido findFirstOrThrow
   */
  export type pedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pedidos.
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * pedido findMany
   */
  export type pedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedidos to fetch.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pedidos.
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * pedido create
   */
  export type pedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a pedido.
     */
    data: XOR<pedidoCreateInput, pedidoUncheckedCreateInput>
  }

  /**
   * pedido createMany
   */
  export type pedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pedidos.
     */
    data: pedidoCreateManyInput | pedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pedido createManyAndReturn
   */
  export type pedidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * The data used to create many pedidos.
     */
    data: pedidoCreateManyInput | pedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pedido update
   */
  export type pedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a pedido.
     */
    data: XOR<pedidoUpdateInput, pedidoUncheckedUpdateInput>
    /**
     * Choose, which pedido to update.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido updateMany
   */
  export type pedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pedidos.
     */
    data: XOR<pedidoUpdateManyMutationInput, pedidoUncheckedUpdateManyInput>
    /**
     * Filter which pedidos to update
     */
    where?: pedidoWhereInput
    /**
     * Limit how many pedidos to update.
     */
    limit?: number
  }

  /**
   * pedido updateManyAndReturn
   */
  export type pedidoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * The data used to update pedidos.
     */
    data: XOR<pedidoUpdateManyMutationInput, pedidoUncheckedUpdateManyInput>
    /**
     * Filter which pedidos to update
     */
    where?: pedidoWhereInput
    /**
     * Limit how many pedidos to update.
     */
    limit?: number
  }

  /**
   * pedido upsert
   */
  export type pedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the pedido to update in case it exists.
     */
    where: pedidoWhereUniqueInput
    /**
     * In case the pedido found by the `where` argument doesn't exist, create a new pedido with this data.
     */
    create: XOR<pedidoCreateInput, pedidoUncheckedCreateInput>
    /**
     * In case the pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pedidoUpdateInput, pedidoUncheckedUpdateInput>
  }

  /**
   * pedido delete
   */
  export type pedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter which pedido to delete.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido deleteMany
   */
  export type pedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pedidos to delete
     */
    where?: pedidoWhereInput
    /**
     * Limit how many pedidos to delete.
     */
    limit?: number
  }

  /**
   * pedido.productos
   */
  export type pedido$productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_producto
     */
    select?: pedido_productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_producto
     */
    omit?: pedido_productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_productoInclude<ExtArgs> | null
    where?: pedido_productoWhereInput
    orderBy?: pedido_productoOrderByWithRelationInput | pedido_productoOrderByWithRelationInput[]
    cursor?: pedido_productoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Pedido_productoScalarFieldEnum | Pedido_productoScalarFieldEnum[]
  }

  /**
   * pedido without action
   */
  export type pedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProductoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    precio: 'precio',
    stock: 'stock',
    disponible: 'disponible',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductoScalarFieldEnum = (typeof ProductoScalarFieldEnum)[keyof typeof ProductoScalarFieldEnum]


  export const Pedido_productoScalarFieldEnum: {
    id: 'id',
    idpedido: 'idpedido',
    idproducto: 'idproducto'
  };

  export type Pedido_productoScalarFieldEnum = (typeof Pedido_productoScalarFieldEnum)[keyof typeof Pedido_productoScalarFieldEnum]


  export const PedidoScalarFieldEnum: {
    id: 'id',
    estado: 'estado',
    cantidad: 'cantidad'
  };

  export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type ProductoWhereInput = {
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    id?: IntFilter<"Producto"> | number
    nombre?: StringFilter<"Producto"> | string
    descripcion?: StringNullableFilter<"Producto"> | string | null
    precio?: FloatFilter<"Producto"> | number
    stock?: IntFilter<"Producto"> | number
    disponible?: BoolFilter<"Producto"> | boolean
    createdAt?: DateTimeFilter<"Producto"> | Date | string
    updatedAt?: DateTimeFilter<"Producto"> | Date | string
    pedidos?: Pedido_productoListRelationFilter
  }

  export type ProductoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    precio?: SortOrder
    stock?: SortOrder
    disponible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pedidos?: pedido_productoOrderByRelationAggregateInput
  }

  export type ProductoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    descripcion?: StringNullableFilter<"Producto"> | string | null
    precio?: FloatFilter<"Producto"> | number
    stock?: IntFilter<"Producto"> | number
    disponible?: BoolFilter<"Producto"> | boolean
    createdAt?: DateTimeFilter<"Producto"> | Date | string
    updatedAt?: DateTimeFilter<"Producto"> | Date | string
    pedidos?: Pedido_productoListRelationFilter
  }, "id" | "nombre">

  export type ProductoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    precio?: SortOrder
    stock?: SortOrder
    disponible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductoCountOrderByAggregateInput
    _avg?: ProductoAvgOrderByAggregateInput
    _max?: ProductoMaxOrderByAggregateInput
    _min?: ProductoMinOrderByAggregateInput
    _sum?: ProductoSumOrderByAggregateInput
  }

  export type ProductoScalarWhereWithAggregatesInput = {
    AND?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    OR?: ProductoScalarWhereWithAggregatesInput[]
    NOT?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Producto"> | number
    nombre?: StringWithAggregatesFilter<"Producto"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Producto"> | string | null
    precio?: FloatWithAggregatesFilter<"Producto"> | number
    stock?: IntWithAggregatesFilter<"Producto"> | number
    disponible?: BoolWithAggregatesFilter<"Producto"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Producto"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Producto"> | Date | string
  }

  export type pedido_productoWhereInput = {
    AND?: pedido_productoWhereInput | pedido_productoWhereInput[]
    OR?: pedido_productoWhereInput[]
    NOT?: pedido_productoWhereInput | pedido_productoWhereInput[]
    id?: IntFilter<"pedido_producto"> | number
    idpedido?: IntFilter<"pedido_producto"> | number
    idproducto?: IntFilter<"pedido_producto"> | number
    pedido?: XOR<PedidoScalarRelationFilter, pedidoWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }

  export type pedido_productoOrderByWithRelationInput = {
    id?: SortOrder
    idpedido?: SortOrder
    idproducto?: SortOrder
    pedido?: pedidoOrderByWithRelationInput
    producto?: ProductoOrderByWithRelationInput
  }

  export type pedido_productoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: pedido_productoWhereInput | pedido_productoWhereInput[]
    OR?: pedido_productoWhereInput[]
    NOT?: pedido_productoWhereInput | pedido_productoWhereInput[]
    idpedido?: IntFilter<"pedido_producto"> | number
    idproducto?: IntFilter<"pedido_producto"> | number
    pedido?: XOR<PedidoScalarRelationFilter, pedidoWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }, "id" | "id">

  export type pedido_productoOrderByWithAggregationInput = {
    id?: SortOrder
    idpedido?: SortOrder
    idproducto?: SortOrder
    _count?: pedido_productoCountOrderByAggregateInput
    _avg?: pedido_productoAvgOrderByAggregateInput
    _max?: pedido_productoMaxOrderByAggregateInput
    _min?: pedido_productoMinOrderByAggregateInput
    _sum?: pedido_productoSumOrderByAggregateInput
  }

  export type pedido_productoScalarWhereWithAggregatesInput = {
    AND?: pedido_productoScalarWhereWithAggregatesInput | pedido_productoScalarWhereWithAggregatesInput[]
    OR?: pedido_productoScalarWhereWithAggregatesInput[]
    NOT?: pedido_productoScalarWhereWithAggregatesInput | pedido_productoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"pedido_producto"> | number
    idpedido?: IntWithAggregatesFilter<"pedido_producto"> | number
    idproducto?: IntWithAggregatesFilter<"pedido_producto"> | number
  }

  export type pedidoWhereInput = {
    AND?: pedidoWhereInput | pedidoWhereInput[]
    OR?: pedidoWhereInput[]
    NOT?: pedidoWhereInput | pedidoWhereInput[]
    id?: IntFilter<"pedido"> | number
    estado?: StringFilter<"pedido"> | string
    cantidad?: IntFilter<"pedido"> | number
    productos?: Pedido_productoListRelationFilter
  }

  export type pedidoOrderByWithRelationInput = {
    id?: SortOrder
    estado?: SortOrder
    cantidad?: SortOrder
    productos?: pedido_productoOrderByRelationAggregateInput
  }

  export type pedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: pedidoWhereInput | pedidoWhereInput[]
    OR?: pedidoWhereInput[]
    NOT?: pedidoWhereInput | pedidoWhereInput[]
    estado?: StringFilter<"pedido"> | string
    cantidad?: IntFilter<"pedido"> | number
    productos?: Pedido_productoListRelationFilter
  }, "id" | "id">

  export type pedidoOrderByWithAggregationInput = {
    id?: SortOrder
    estado?: SortOrder
    cantidad?: SortOrder
    _count?: pedidoCountOrderByAggregateInput
    _avg?: pedidoAvgOrderByAggregateInput
    _max?: pedidoMaxOrderByAggregateInput
    _min?: pedidoMinOrderByAggregateInput
    _sum?: pedidoSumOrderByAggregateInput
  }

  export type pedidoScalarWhereWithAggregatesInput = {
    AND?: pedidoScalarWhereWithAggregatesInput | pedidoScalarWhereWithAggregatesInput[]
    OR?: pedidoScalarWhereWithAggregatesInput[]
    NOT?: pedidoScalarWhereWithAggregatesInput | pedidoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"pedido"> | number
    estado?: StringWithAggregatesFilter<"pedido"> | string
    cantidad?: IntWithAggregatesFilter<"pedido"> | number
  }

  export type ProductoCreateInput = {
    nombre: string
    descripcion?: string | null
    precio: number
    stock?: number
    disponible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    pedidos?: pedido_productoCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    precio: number
    stock?: number
    disponible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    pedidos?: pedido_productoUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    disponible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedidos?: pedido_productoUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    disponible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedidos?: pedido_productoUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoCreateManyInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    precio: number
    stock?: number
    disponible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    disponible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    disponible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pedido_productoCreateInput = {
    pedido: pedidoCreateNestedOneWithoutProductosInput
    producto: ProductoCreateNestedOneWithoutPedidosInput
  }

  export type pedido_productoUncheckedCreateInput = {
    id?: number
    idpedido: number
    idproducto: number
  }

  export type pedido_productoUpdateInput = {
    pedido?: pedidoUpdateOneRequiredWithoutProductosNestedInput
    producto?: ProductoUpdateOneRequiredWithoutPedidosNestedInput
  }

  export type pedido_productoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idpedido?: IntFieldUpdateOperationsInput | number
    idproducto?: IntFieldUpdateOperationsInput | number
  }

  export type pedido_productoCreateManyInput = {
    id?: number
    idpedido: number
    idproducto: number
  }

  export type pedido_productoUpdateManyMutationInput = {

  }

  export type pedido_productoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idpedido?: IntFieldUpdateOperationsInput | number
    idproducto?: IntFieldUpdateOperationsInput | number
  }

  export type pedidoCreateInput = {
    estado: string
    cantidad: number
    productos?: pedido_productoCreateNestedManyWithoutPedidoInput
  }

  export type pedidoUncheckedCreateInput = {
    id?: number
    estado: string
    cantidad: number
    productos?: pedido_productoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type pedidoUpdateInput = {
    estado?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    productos?: pedido_productoUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    productos?: pedido_productoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoCreateManyInput = {
    id?: number
    estado: string
    cantidad: number
  }

  export type pedidoUpdateManyMutationInput = {
    estado?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type pedidoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Pedido_productoListRelationFilter = {
    every?: pedido_productoWhereInput
    some?: pedido_productoWhereInput
    none?: pedido_productoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type pedido_productoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    disponible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductoAvgOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
  }

  export type ProductoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    disponible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    disponible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductoSumOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PedidoScalarRelationFilter = {
    is?: pedidoWhereInput
    isNot?: pedidoWhereInput
  }

  export type ProductoScalarRelationFilter = {
    is?: ProductoWhereInput
    isNot?: ProductoWhereInput
  }

  export type pedido_productoCountOrderByAggregateInput = {
    id?: SortOrder
    idpedido?: SortOrder
    idproducto?: SortOrder
  }

  export type pedido_productoAvgOrderByAggregateInput = {
    id?: SortOrder
    idpedido?: SortOrder
    idproducto?: SortOrder
  }

  export type pedido_productoMaxOrderByAggregateInput = {
    id?: SortOrder
    idpedido?: SortOrder
    idproducto?: SortOrder
  }

  export type pedido_productoMinOrderByAggregateInput = {
    id?: SortOrder
    idpedido?: SortOrder
    idproducto?: SortOrder
  }

  export type pedido_productoSumOrderByAggregateInput = {
    id?: SortOrder
    idpedido?: SortOrder
    idproducto?: SortOrder
  }

  export type pedidoCountOrderByAggregateInput = {
    id?: SortOrder
    estado?: SortOrder
    cantidad?: SortOrder
  }

  export type pedidoAvgOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
  }

  export type pedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    estado?: SortOrder
    cantidad?: SortOrder
  }

  export type pedidoMinOrderByAggregateInput = {
    id?: SortOrder
    estado?: SortOrder
    cantidad?: SortOrder
  }

  export type pedidoSumOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
  }

  export type pedido_productoCreateNestedManyWithoutProductoInput = {
    create?: XOR<pedido_productoCreateWithoutProductoInput, pedido_productoUncheckedCreateWithoutProductoInput> | pedido_productoCreateWithoutProductoInput[] | pedido_productoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: pedido_productoCreateOrConnectWithoutProductoInput | pedido_productoCreateOrConnectWithoutProductoInput[]
    createMany?: pedido_productoCreateManyProductoInputEnvelope
    connect?: pedido_productoWhereUniqueInput | pedido_productoWhereUniqueInput[]
  }

  export type pedido_productoUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<pedido_productoCreateWithoutProductoInput, pedido_productoUncheckedCreateWithoutProductoInput> | pedido_productoCreateWithoutProductoInput[] | pedido_productoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: pedido_productoCreateOrConnectWithoutProductoInput | pedido_productoCreateOrConnectWithoutProductoInput[]
    createMany?: pedido_productoCreateManyProductoInputEnvelope
    connect?: pedido_productoWhereUniqueInput | pedido_productoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type pedido_productoUpdateManyWithoutProductoNestedInput = {
    create?: XOR<pedido_productoCreateWithoutProductoInput, pedido_productoUncheckedCreateWithoutProductoInput> | pedido_productoCreateWithoutProductoInput[] | pedido_productoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: pedido_productoCreateOrConnectWithoutProductoInput | pedido_productoCreateOrConnectWithoutProductoInput[]
    upsert?: pedido_productoUpsertWithWhereUniqueWithoutProductoInput | pedido_productoUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: pedido_productoCreateManyProductoInputEnvelope
    set?: pedido_productoWhereUniqueInput | pedido_productoWhereUniqueInput[]
    disconnect?: pedido_productoWhereUniqueInput | pedido_productoWhereUniqueInput[]
    delete?: pedido_productoWhereUniqueInput | pedido_productoWhereUniqueInput[]
    connect?: pedido_productoWhereUniqueInput | pedido_productoWhereUniqueInput[]
    update?: pedido_productoUpdateWithWhereUniqueWithoutProductoInput | pedido_productoUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: pedido_productoUpdateManyWithWhereWithoutProductoInput | pedido_productoUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: pedido_productoScalarWhereInput | pedido_productoScalarWhereInput[]
  }

  export type pedido_productoUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<pedido_productoCreateWithoutProductoInput, pedido_productoUncheckedCreateWithoutProductoInput> | pedido_productoCreateWithoutProductoInput[] | pedido_productoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: pedido_productoCreateOrConnectWithoutProductoInput | pedido_productoCreateOrConnectWithoutProductoInput[]
    upsert?: pedido_productoUpsertWithWhereUniqueWithoutProductoInput | pedido_productoUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: pedido_productoCreateManyProductoInputEnvelope
    set?: pedido_productoWhereUniqueInput | pedido_productoWhereUniqueInput[]
    disconnect?: pedido_productoWhereUniqueInput | pedido_productoWhereUniqueInput[]
    delete?: pedido_productoWhereUniqueInput | pedido_productoWhereUniqueInput[]
    connect?: pedido_productoWhereUniqueInput | pedido_productoWhereUniqueInput[]
    update?: pedido_productoUpdateWithWhereUniqueWithoutProductoInput | pedido_productoUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: pedido_productoUpdateManyWithWhereWithoutProductoInput | pedido_productoUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: pedido_productoScalarWhereInput | pedido_productoScalarWhereInput[]
  }

  export type pedidoCreateNestedOneWithoutProductosInput = {
    create?: XOR<pedidoCreateWithoutProductosInput, pedidoUncheckedCreateWithoutProductosInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutProductosInput
    connect?: pedidoWhereUniqueInput
  }

  export type ProductoCreateNestedOneWithoutPedidosInput = {
    create?: XOR<ProductoCreateWithoutPedidosInput, ProductoUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutPedidosInput
    connect?: ProductoWhereUniqueInput
  }

  export type pedidoUpdateOneRequiredWithoutProductosNestedInput = {
    create?: XOR<pedidoCreateWithoutProductosInput, pedidoUncheckedCreateWithoutProductosInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutProductosInput
    upsert?: pedidoUpsertWithoutProductosInput
    connect?: pedidoWhereUniqueInput
    update?: XOR<XOR<pedidoUpdateToOneWithWhereWithoutProductosInput, pedidoUpdateWithoutProductosInput>, pedidoUncheckedUpdateWithoutProductosInput>
  }

  export type ProductoUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: XOR<ProductoCreateWithoutPedidosInput, ProductoUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutPedidosInput
    upsert?: ProductoUpsertWithoutPedidosInput
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutPedidosInput, ProductoUpdateWithoutPedidosInput>, ProductoUncheckedUpdateWithoutPedidosInput>
  }

  export type pedido_productoCreateNestedManyWithoutPedidoInput = {
    create?: XOR<pedido_productoCreateWithoutPedidoInput, pedido_productoUncheckedCreateWithoutPedidoInput> | pedido_productoCreateWithoutPedidoInput[] | pedido_productoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: pedido_productoCreateOrConnectWithoutPedidoInput | pedido_productoCreateOrConnectWithoutPedidoInput[]
    createMany?: pedido_productoCreateManyPedidoInputEnvelope
    connect?: pedido_productoWhereUniqueInput | pedido_productoWhereUniqueInput[]
  }

  export type pedido_productoUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<pedido_productoCreateWithoutPedidoInput, pedido_productoUncheckedCreateWithoutPedidoInput> | pedido_productoCreateWithoutPedidoInput[] | pedido_productoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: pedido_productoCreateOrConnectWithoutPedidoInput | pedido_productoCreateOrConnectWithoutPedidoInput[]
    createMany?: pedido_productoCreateManyPedidoInputEnvelope
    connect?: pedido_productoWhereUniqueInput | pedido_productoWhereUniqueInput[]
  }

  export type pedido_productoUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<pedido_productoCreateWithoutPedidoInput, pedido_productoUncheckedCreateWithoutPedidoInput> | pedido_productoCreateWithoutPedidoInput[] | pedido_productoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: pedido_productoCreateOrConnectWithoutPedidoInput | pedido_productoCreateOrConnectWithoutPedidoInput[]
    upsert?: pedido_productoUpsertWithWhereUniqueWithoutPedidoInput | pedido_productoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: pedido_productoCreateManyPedidoInputEnvelope
    set?: pedido_productoWhereUniqueInput | pedido_productoWhereUniqueInput[]
    disconnect?: pedido_productoWhereUniqueInput | pedido_productoWhereUniqueInput[]
    delete?: pedido_productoWhereUniqueInput | pedido_productoWhereUniqueInput[]
    connect?: pedido_productoWhereUniqueInput | pedido_productoWhereUniqueInput[]
    update?: pedido_productoUpdateWithWhereUniqueWithoutPedidoInput | pedido_productoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: pedido_productoUpdateManyWithWhereWithoutPedidoInput | pedido_productoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: pedido_productoScalarWhereInput | pedido_productoScalarWhereInput[]
  }

  export type pedido_productoUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<pedido_productoCreateWithoutPedidoInput, pedido_productoUncheckedCreateWithoutPedidoInput> | pedido_productoCreateWithoutPedidoInput[] | pedido_productoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: pedido_productoCreateOrConnectWithoutPedidoInput | pedido_productoCreateOrConnectWithoutPedidoInput[]
    upsert?: pedido_productoUpsertWithWhereUniqueWithoutPedidoInput | pedido_productoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: pedido_productoCreateManyPedidoInputEnvelope
    set?: pedido_productoWhereUniqueInput | pedido_productoWhereUniqueInput[]
    disconnect?: pedido_productoWhereUniqueInput | pedido_productoWhereUniqueInput[]
    delete?: pedido_productoWhereUniqueInput | pedido_productoWhereUniqueInput[]
    connect?: pedido_productoWhereUniqueInput | pedido_productoWhereUniqueInput[]
    update?: pedido_productoUpdateWithWhereUniqueWithoutPedidoInput | pedido_productoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: pedido_productoUpdateManyWithWhereWithoutPedidoInput | pedido_productoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: pedido_productoScalarWhereInput | pedido_productoScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type pedido_productoCreateWithoutProductoInput = {
    pedido: pedidoCreateNestedOneWithoutProductosInput
  }

  export type pedido_productoUncheckedCreateWithoutProductoInput = {
    id?: number
    idpedido: number
  }

  export type pedido_productoCreateOrConnectWithoutProductoInput = {
    where: pedido_productoWhereUniqueInput
    create: XOR<pedido_productoCreateWithoutProductoInput, pedido_productoUncheckedCreateWithoutProductoInput>
  }

  export type pedido_productoCreateManyProductoInputEnvelope = {
    data: pedido_productoCreateManyProductoInput | pedido_productoCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type pedido_productoUpsertWithWhereUniqueWithoutProductoInput = {
    where: pedido_productoWhereUniqueInput
    update: XOR<pedido_productoUpdateWithoutProductoInput, pedido_productoUncheckedUpdateWithoutProductoInput>
    create: XOR<pedido_productoCreateWithoutProductoInput, pedido_productoUncheckedCreateWithoutProductoInput>
  }

  export type pedido_productoUpdateWithWhereUniqueWithoutProductoInput = {
    where: pedido_productoWhereUniqueInput
    data: XOR<pedido_productoUpdateWithoutProductoInput, pedido_productoUncheckedUpdateWithoutProductoInput>
  }

  export type pedido_productoUpdateManyWithWhereWithoutProductoInput = {
    where: pedido_productoScalarWhereInput
    data: XOR<pedido_productoUpdateManyMutationInput, pedido_productoUncheckedUpdateManyWithoutProductoInput>
  }

  export type pedido_productoScalarWhereInput = {
    AND?: pedido_productoScalarWhereInput | pedido_productoScalarWhereInput[]
    OR?: pedido_productoScalarWhereInput[]
    NOT?: pedido_productoScalarWhereInput | pedido_productoScalarWhereInput[]
    id?: IntFilter<"pedido_producto"> | number
    idpedido?: IntFilter<"pedido_producto"> | number
    idproducto?: IntFilter<"pedido_producto"> | number
  }

  export type pedidoCreateWithoutProductosInput = {
    estado: string
    cantidad: number
  }

  export type pedidoUncheckedCreateWithoutProductosInput = {
    id?: number
    estado: string
    cantidad: number
  }

  export type pedidoCreateOrConnectWithoutProductosInput = {
    where: pedidoWhereUniqueInput
    create: XOR<pedidoCreateWithoutProductosInput, pedidoUncheckedCreateWithoutProductosInput>
  }

  export type ProductoCreateWithoutPedidosInput = {
    nombre: string
    descripcion?: string | null
    precio: number
    stock?: number
    disponible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductoUncheckedCreateWithoutPedidosInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    precio: number
    stock?: number
    disponible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductoCreateOrConnectWithoutPedidosInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutPedidosInput, ProductoUncheckedCreateWithoutPedidosInput>
  }

  export type pedidoUpsertWithoutProductosInput = {
    update: XOR<pedidoUpdateWithoutProductosInput, pedidoUncheckedUpdateWithoutProductosInput>
    create: XOR<pedidoCreateWithoutProductosInput, pedidoUncheckedCreateWithoutProductosInput>
    where?: pedidoWhereInput
  }

  export type pedidoUpdateToOneWithWhereWithoutProductosInput = {
    where?: pedidoWhereInput
    data: XOR<pedidoUpdateWithoutProductosInput, pedidoUncheckedUpdateWithoutProductosInput>
  }

  export type pedidoUpdateWithoutProductosInput = {
    estado?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type pedidoUncheckedUpdateWithoutProductosInput = {
    id?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type ProductoUpsertWithoutPedidosInput = {
    update: XOR<ProductoUpdateWithoutPedidosInput, ProductoUncheckedUpdateWithoutPedidosInput>
    create: XOR<ProductoCreateWithoutPedidosInput, ProductoUncheckedCreateWithoutPedidosInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutPedidosInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutPedidosInput, ProductoUncheckedUpdateWithoutPedidosInput>
  }

  export type ProductoUpdateWithoutPedidosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    disponible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductoUncheckedUpdateWithoutPedidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    disponible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pedido_productoCreateWithoutPedidoInput = {
    producto: ProductoCreateNestedOneWithoutPedidosInput
  }

  export type pedido_productoUncheckedCreateWithoutPedidoInput = {
    id?: number
    idproducto: number
  }

  export type pedido_productoCreateOrConnectWithoutPedidoInput = {
    where: pedido_productoWhereUniqueInput
    create: XOR<pedido_productoCreateWithoutPedidoInput, pedido_productoUncheckedCreateWithoutPedidoInput>
  }

  export type pedido_productoCreateManyPedidoInputEnvelope = {
    data: pedido_productoCreateManyPedidoInput | pedido_productoCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type pedido_productoUpsertWithWhereUniqueWithoutPedidoInput = {
    where: pedido_productoWhereUniqueInput
    update: XOR<pedido_productoUpdateWithoutPedidoInput, pedido_productoUncheckedUpdateWithoutPedidoInput>
    create: XOR<pedido_productoCreateWithoutPedidoInput, pedido_productoUncheckedCreateWithoutPedidoInput>
  }

  export type pedido_productoUpdateWithWhereUniqueWithoutPedidoInput = {
    where: pedido_productoWhereUniqueInput
    data: XOR<pedido_productoUpdateWithoutPedidoInput, pedido_productoUncheckedUpdateWithoutPedidoInput>
  }

  export type pedido_productoUpdateManyWithWhereWithoutPedidoInput = {
    where: pedido_productoScalarWhereInput
    data: XOR<pedido_productoUpdateManyMutationInput, pedido_productoUncheckedUpdateManyWithoutPedidoInput>
  }

  export type pedido_productoCreateManyProductoInput = {
    id?: number
    idpedido: number
  }

  export type pedido_productoUpdateWithoutProductoInput = {
    pedido?: pedidoUpdateOneRequiredWithoutProductosNestedInput
  }

  export type pedido_productoUncheckedUpdateWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    idpedido?: IntFieldUpdateOperationsInput | number
  }

  export type pedido_productoUncheckedUpdateManyWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    idpedido?: IntFieldUpdateOperationsInput | number
  }

  export type pedido_productoCreateManyPedidoInput = {
    id?: number
    idproducto: number
  }

  export type pedido_productoUpdateWithoutPedidoInput = {
    producto?: ProductoUpdateOneRequiredWithoutPedidosNestedInput
  }

  export type pedido_productoUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    idproducto?: IntFieldUpdateOperationsInput | number
  }

  export type pedido_productoUncheckedUpdateManyWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    idproducto?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}