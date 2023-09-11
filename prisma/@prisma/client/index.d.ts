
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Owner
 * 
 */
export type Owner = $Result.DefaultSelection<Prisma.$OwnerPayload>
/**
 * Model Plant
 * 
 */
export type Plant = $Result.DefaultSelection<Prisma.$PlantPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const WaterFrequency: {
  DAYS: 'DAYS',
  WEEKS: 'WEEKS',
  MONTHS: 'MONTHS'
};

export type WaterFrequency = (typeof WaterFrequency)[keyof typeof WaterFrequency]


export const FertiliseFrequency: {
  DAYS: 'DAYS',
  WEEKS: 'WEEKS',
  MONTHS: 'MONTHS'
};

export type FertiliseFrequency = (typeof FertiliseFrequency)[keyof typeof FertiliseFrequency]


export const LightLevel: {
  HIGH: 'HIGH',
  MEDIUM: 'MEDIUM',
  LOW: 'LOW'
};

export type LightLevel = (typeof LightLevel)[keyof typeof LightLevel]

}

export type WaterFrequency = $Enums.WaterFrequency

export const WaterFrequency: typeof $Enums.WaterFrequency

export type FertiliseFrequency = $Enums.FertiliseFrequency

export const FertiliseFrequency: typeof $Enums.FertiliseFrequency

export type LightLevel = $Enums.LightLevel

export const LightLevel: typeof $Enums.LightLevel

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Owners
 * const owners = await prisma.owner.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Owners
   * const owners = await prisma.owner.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.owner`: Exposes CRUD operations for the **Owner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Owners
    * const owners = await prisma.owner.findMany()
    * ```
    */
  get owner(): Prisma.OwnerDelegate<ExtArgs>;

  /**
   * `prisma.plant`: Exposes CRUD operations for the **Plant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plants
    * const plants = await prisma.plant.findMany()
    * ```
    */
  get plant(): Prisma.PlantDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 5.2.0
   * Query Engine version: 2804dc98259d2ea960602aca6b8e7fdc03c1758f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
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
      (Without<T, U> & U) | (Without<U, T> & T)
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Owner: 'Owner',
    Plant: 'Plant'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'owner' | 'plant'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Owner: {
        payload: Prisma.$OwnerPayload<ExtArgs>
        fields: Prisma.OwnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OwnerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OwnerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          findFirst: {
            args: Prisma.OwnerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OwnerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          findMany: {
            args: Prisma.OwnerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>[]
          }
          create: {
            args: Prisma.OwnerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          createMany: {
            args: Prisma.OwnerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OwnerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          update: {
            args: Prisma.OwnerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          deleteMany: {
            args: Prisma.OwnerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OwnerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OwnerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          aggregate: {
            args: Prisma.OwnerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOwner>
          }
          groupBy: {
            args: Prisma.OwnerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OwnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.OwnerCountArgs<ExtArgs>,
            result: $Utils.Optional<OwnerCountAggregateOutputType> | number
          }
        }
      }
      Plant: {
        payload: Prisma.$PlantPayload<ExtArgs>
        fields: Prisma.PlantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlantFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlantFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlantPayload>
          }
          findFirst: {
            args: Prisma.PlantFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlantFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlantPayload>
          }
          findMany: {
            args: Prisma.PlantFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlantPayload>[]
          }
          create: {
            args: Prisma.PlantCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlantPayload>
          }
          createMany: {
            args: Prisma.PlantCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PlantDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlantPayload>
          }
          update: {
            args: Prisma.PlantUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlantPayload>
          }
          deleteMany: {
            args: Prisma.PlantDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PlantUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PlantUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlantPayload>
          }
          aggregate: {
            args: Prisma.PlantAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePlant>
          }
          groupBy: {
            args: Prisma.PlantGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PlantGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlantCountArgs<ExtArgs>,
            result: $Utils.Optional<PlantCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'update'
    | 'updateMany'
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type OwnerCountOutputType
   */

  export type OwnerCountOutputType = {
    plants: number
  }

  export type OwnerCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    plants?: boolean | OwnerCountOutputTypeCountPlantsArgs
  }

  // Custom InputTypes

  /**
   * OwnerCountOutputType without action
   */
  export type OwnerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerCountOutputType
     */
    select?: OwnerCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * OwnerCountOutputType without action
   */
  export type OwnerCountOutputTypeCountPlantsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PlantWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Owner
   */

  export type AggregateOwner = {
    _count: OwnerCountAggregateOutputType | null
    _min: OwnerMinAggregateOutputType | null
    _max: OwnerMaxAggregateOutputType | null
  }

  export type OwnerMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OwnerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OwnerCountAggregateOutputType = {
    id: number
    name: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OwnerMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OwnerMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OwnerCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OwnerAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Owner to aggregate.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Owners
    **/
    _count?: true | OwnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OwnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OwnerMaxAggregateInputType
  }

  export type GetOwnerAggregateType<T extends OwnerAggregateArgs> = {
        [P in keyof T & keyof AggregateOwner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOwner[P]>
      : GetScalarType<T[P], AggregateOwner[P]>
  }




  export type OwnerGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: OwnerWhereInput
    orderBy?: OwnerOrderByWithAggregationInput | OwnerOrderByWithAggregationInput[]
    by: OwnerScalarFieldEnum[] | OwnerScalarFieldEnum
    having?: OwnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OwnerCountAggregateInputType | true
    _min?: OwnerMinAggregateInputType
    _max?: OwnerMaxAggregateInputType
  }

  export type OwnerGroupByOutputType = {
    id: string
    name: string
    email: string
    createdAt: Date
    updatedAt: Date | null
    _count: OwnerCountAggregateOutputType | null
    _min: OwnerMinAggregateOutputType | null
    _max: OwnerMaxAggregateOutputType | null
  }

  type GetOwnerGroupByPayload<T extends OwnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OwnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OwnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OwnerGroupByOutputType[P]>
            : GetScalarType<T[P], OwnerGroupByOutputType[P]>
        }
      >
    >


  export type OwnerSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plants?: boolean | Owner$plantsArgs<ExtArgs>
    _count?: boolean | OwnerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["owner"]>

  export type OwnerSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OwnerInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    plants?: boolean | Owner$plantsArgs<ExtArgs>
    _count?: boolean | OwnerCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $OwnerPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Owner"
    objects: {
      plants: Prisma.$PlantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      name: string
      email: string
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["owner"]>
    composites: {}
  }


  type OwnerGetPayload<S extends boolean | null | undefined | OwnerDefaultArgs> = $Result.GetResult<Prisma.$OwnerPayload, S>

  type OwnerCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<OwnerFindManyArgs, 'select' | 'include'> & {
      select?: OwnerCountAggregateInputType | true
    }

  export interface OwnerDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Owner'], meta: { name: 'Owner' } }
    /**
     * Find zero or one Owner that matches the filter.
     * @param {OwnerFindUniqueArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OwnerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OwnerFindUniqueArgs<ExtArgs>>
    ): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Owner that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OwnerFindUniqueOrThrowArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OwnerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OwnerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Owner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindFirstArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OwnerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OwnerFindFirstArgs<ExtArgs>>
    ): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Owner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindFirstOrThrowArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OwnerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OwnerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Owners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Owners
     * const owners = await prisma.owner.findMany()
     * 
     * // Get first 10 Owners
     * const owners = await prisma.owner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ownerWithIdOnly = await prisma.owner.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OwnerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OwnerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Owner.
     * @param {OwnerCreateArgs} args - Arguments to create a Owner.
     * @example
     * // Create one Owner
     * const Owner = await prisma.owner.create({
     *   data: {
     *     // ... data to create a Owner
     *   }
     * })
     * 
    **/
    create<T extends OwnerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OwnerCreateArgs<ExtArgs>>
    ): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Owners.
     *     @param {OwnerCreateManyArgs} args - Arguments to create many Owners.
     *     @example
     *     // Create many Owners
     *     const owner = await prisma.owner.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OwnerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OwnerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Owner.
     * @param {OwnerDeleteArgs} args - Arguments to delete one Owner.
     * @example
     * // Delete one Owner
     * const Owner = await prisma.owner.delete({
     *   where: {
     *     // ... filter to delete one Owner
     *   }
     * })
     * 
    **/
    delete<T extends OwnerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OwnerDeleteArgs<ExtArgs>>
    ): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Owner.
     * @param {OwnerUpdateArgs} args - Arguments to update one Owner.
     * @example
     * // Update one Owner
     * const owner = await prisma.owner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OwnerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OwnerUpdateArgs<ExtArgs>>
    ): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Owners.
     * @param {OwnerDeleteManyArgs} args - Arguments to filter Owners to delete.
     * @example
     * // Delete a few Owners
     * const { count } = await prisma.owner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OwnerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OwnerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Owners
     * const owner = await prisma.owner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OwnerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OwnerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Owner.
     * @param {OwnerUpsertArgs} args - Arguments to update or create a Owner.
     * @example
     * // Update or create a Owner
     * const owner = await prisma.owner.upsert({
     *   create: {
     *     // ... data to create a Owner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Owner we want to update
     *   }
     * })
    **/
    upsert<T extends OwnerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OwnerUpsertArgs<ExtArgs>>
    ): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerCountArgs} args - Arguments to filter Owners to count.
     * @example
     * // Count the number of Owners
     * const count = await prisma.owner.count({
     *   where: {
     *     // ... the filter for the Owners we want to count
     *   }
     * })
    **/
    count<T extends OwnerCountArgs>(
      args?: Subset<T, OwnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OwnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OwnerAggregateArgs>(args: Subset<T, OwnerAggregateArgs>): Prisma.PrismaPromise<GetOwnerAggregateType<T>>

    /**
     * Group by Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerGroupByArgs} args - Group by arguments.
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
      T extends OwnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OwnerGroupByArgs['orderBy'] }
        : { orderBy?: OwnerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OwnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOwnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Owner model
   */
  readonly fields: OwnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Owner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OwnerClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    plants<T extends Owner$plantsArgs<ExtArgs> = {}>(args?: Subset<T, Owner$plantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Owner model
   */ 
  interface OwnerFieldRefs {
    readonly id: FieldRef<"Owner", 'String'>
    readonly name: FieldRef<"Owner", 'String'>
    readonly email: FieldRef<"Owner", 'String'>
    readonly createdAt: FieldRef<"Owner", 'DateTime'>
    readonly updatedAt: FieldRef<"Owner", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Owner findUnique
   */
  export type OwnerFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where: OwnerWhereUniqueInput
  }


  /**
   * Owner findUniqueOrThrow
   */
  export type OwnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where: OwnerWhereUniqueInput
  }


  /**
   * Owner findFirst
   */
  export type OwnerFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Owners.
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Owners.
     */
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }


  /**
   * Owner findFirstOrThrow
   */
  export type OwnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Owners.
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Owners.
     */
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }


  /**
   * Owner findMany
   */
  export type OwnerFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owners to fetch.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Owners.
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }


  /**
   * Owner create
   */
  export type OwnerCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * The data needed to create a Owner.
     */
    data: XOR<OwnerCreateInput, OwnerUncheckedCreateInput>
  }


  /**
   * Owner createMany
   */
  export type OwnerCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Owners.
     */
    data: OwnerCreateManyInput | OwnerCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Owner update
   */
  export type OwnerUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * The data needed to update a Owner.
     */
    data: XOR<OwnerUpdateInput, OwnerUncheckedUpdateInput>
    /**
     * Choose, which Owner to update.
     */
    where: OwnerWhereUniqueInput
  }


  /**
   * Owner updateMany
   */
  export type OwnerUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Owners.
     */
    data: XOR<OwnerUpdateManyMutationInput, OwnerUncheckedUpdateManyInput>
    /**
     * Filter which Owners to update
     */
    where?: OwnerWhereInput
  }


  /**
   * Owner upsert
   */
  export type OwnerUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * The filter to search for the Owner to update in case it exists.
     */
    where: OwnerWhereUniqueInput
    /**
     * In case the Owner found by the `where` argument doesn't exist, create a new Owner with this data.
     */
    create: XOR<OwnerCreateInput, OwnerUncheckedCreateInput>
    /**
     * In case the Owner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OwnerUpdateInput, OwnerUncheckedUpdateInput>
  }


  /**
   * Owner delete
   */
  export type OwnerDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter which Owner to delete.
     */
    where: OwnerWhereUniqueInput
  }


  /**
   * Owner deleteMany
   */
  export type OwnerDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Owners to delete
     */
    where?: OwnerWhereInput
  }


  /**
   * Owner.plants
   */
  export type Owner$plantsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlantInclude<ExtArgs> | null
    where?: PlantWhereInput
    orderBy?: PlantOrderByWithRelationInput | PlantOrderByWithRelationInput[]
    cursor?: PlantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlantScalarFieldEnum | PlantScalarFieldEnum[]
  }


  /**
   * Owner without action
   */
  export type OwnerDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OwnerInclude<ExtArgs> | null
  }



  /**
   * Model Plant
   */

  export type AggregatePlant = {
    _count: PlantCountAggregateOutputType | null
    _min: PlantMinAggregateOutputType | null
    _max: PlantMaxAggregateOutputType | null
  }

  export type PlantMinAggregateOutputType = {
    id: string | null
    name: string | null
    waterFrequency: $Enums.WaterFrequency | null
    fertiliseFrequency: $Enums.FertiliseFrequency | null
    lightLevel: $Enums.LightLevel | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    waterFrequency: $Enums.WaterFrequency | null
    fertiliseFrequency: $Enums.FertiliseFrequency | null
    lightLevel: $Enums.LightLevel | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlantCountAggregateOutputType = {
    id: number
    name: number
    waterFrequency: number
    fertiliseFrequency: number
    lightLevel: number
    ownerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlantMinAggregateInputType = {
    id?: true
    name?: true
    waterFrequency?: true
    fertiliseFrequency?: true
    lightLevel?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlantMaxAggregateInputType = {
    id?: true
    name?: true
    waterFrequency?: true
    fertiliseFrequency?: true
    lightLevel?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlantCountAggregateInputType = {
    id?: true
    name?: true
    waterFrequency?: true
    fertiliseFrequency?: true
    lightLevel?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlantAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plant to aggregate.
     */
    where?: PlantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plants to fetch.
     */
    orderBy?: PlantOrderByWithRelationInput | PlantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plants
    **/
    _count?: true | PlantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlantMaxAggregateInputType
  }

  export type GetPlantAggregateType<T extends PlantAggregateArgs> = {
        [P in keyof T & keyof AggregatePlant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlant[P]>
      : GetScalarType<T[P], AggregatePlant[P]>
  }




  export type PlantGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PlantWhereInput
    orderBy?: PlantOrderByWithAggregationInput | PlantOrderByWithAggregationInput[]
    by: PlantScalarFieldEnum[] | PlantScalarFieldEnum
    having?: PlantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlantCountAggregateInputType | true
    _min?: PlantMinAggregateInputType
    _max?: PlantMaxAggregateInputType
  }

  export type PlantGroupByOutputType = {
    id: string
    name: string
    waterFrequency: $Enums.WaterFrequency
    fertiliseFrequency: $Enums.FertiliseFrequency
    lightLevel: $Enums.LightLevel
    ownerId: string
    createdAt: Date
    updatedAt: Date | null
    _count: PlantCountAggregateOutputType | null
    _min: PlantMinAggregateOutputType | null
    _max: PlantMaxAggregateOutputType | null
  }

  type GetPlantGroupByPayload<T extends PlantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlantGroupByOutputType[P]>
            : GetScalarType<T[P], PlantGroupByOutputType[P]>
        }
      >
    >


  export type PlantSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    waterFrequency?: boolean
    fertiliseFrequency?: boolean
    lightLevel?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plant"]>

  export type PlantSelectScalar = {
    id?: boolean
    name?: boolean
    waterFrequency?: boolean
    fertiliseFrequency?: boolean
    lightLevel?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlantInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }


  export type $PlantPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Plant"
    objects: {
      owner: Prisma.$OwnerPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: string
      name: string
      waterFrequency: $Enums.WaterFrequency
      fertiliseFrequency: $Enums.FertiliseFrequency
      lightLevel: $Enums.LightLevel
      ownerId: string
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["plant"]>
    composites: {}
  }


  type PlantGetPayload<S extends boolean | null | undefined | PlantDefaultArgs> = $Result.GetResult<Prisma.$PlantPayload, S>

  type PlantCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PlantFindManyArgs, 'select' | 'include'> & {
      select?: PlantCountAggregateInputType | true
    }

  export interface PlantDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plant'], meta: { name: 'Plant' } }
    /**
     * Find zero or one Plant that matches the filter.
     * @param {PlantFindUniqueArgs} args - Arguments to find a Plant
     * @example
     * // Get one Plant
     * const plant = await prisma.plant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PlantFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PlantFindUniqueArgs<ExtArgs>>
    ): Prisma__PlantClient<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Plant that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PlantFindUniqueOrThrowArgs} args - Arguments to find a Plant
     * @example
     * // Get one Plant
     * const plant = await prisma.plant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PlantFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlantFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PlantClient<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Plant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantFindFirstArgs} args - Arguments to find a Plant
     * @example
     * // Get one Plant
     * const plant = await prisma.plant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PlantFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PlantFindFirstArgs<ExtArgs>>
    ): Prisma__PlantClient<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Plant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantFindFirstOrThrowArgs} args - Arguments to find a Plant
     * @example
     * // Get one Plant
     * const plant = await prisma.plant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PlantFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlantFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PlantClient<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Plants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plants
     * const plants = await prisma.plant.findMany()
     * 
     * // Get first 10 Plants
     * const plants = await prisma.plant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const plantWithIdOnly = await prisma.plant.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PlantFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlantFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Plant.
     * @param {PlantCreateArgs} args - Arguments to create a Plant.
     * @example
     * // Create one Plant
     * const Plant = await prisma.plant.create({
     *   data: {
     *     // ... data to create a Plant
     *   }
     * })
     * 
    **/
    create<T extends PlantCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PlantCreateArgs<ExtArgs>>
    ): Prisma__PlantClient<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Plants.
     *     @param {PlantCreateManyArgs} args - Arguments to create many Plants.
     *     @example
     *     // Create many Plants
     *     const plant = await prisma.plant.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PlantCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlantCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Plant.
     * @param {PlantDeleteArgs} args - Arguments to delete one Plant.
     * @example
     * // Delete one Plant
     * const Plant = await prisma.plant.delete({
     *   where: {
     *     // ... filter to delete one Plant
     *   }
     * })
     * 
    **/
    delete<T extends PlantDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PlantDeleteArgs<ExtArgs>>
    ): Prisma__PlantClient<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Plant.
     * @param {PlantUpdateArgs} args - Arguments to update one Plant.
     * @example
     * // Update one Plant
     * const plant = await prisma.plant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PlantUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PlantUpdateArgs<ExtArgs>>
    ): Prisma__PlantClient<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Plants.
     * @param {PlantDeleteManyArgs} args - Arguments to filter Plants to delete.
     * @example
     * // Delete a few Plants
     * const { count } = await prisma.plant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PlantDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlantDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plants
     * const plant = await prisma.plant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PlantUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PlantUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Plant.
     * @param {PlantUpsertArgs} args - Arguments to update or create a Plant.
     * @example
     * // Update or create a Plant
     * const plant = await prisma.plant.upsert({
     *   create: {
     *     // ... data to create a Plant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plant we want to update
     *   }
     * })
    **/
    upsert<T extends PlantUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PlantUpsertArgs<ExtArgs>>
    ): Prisma__PlantClient<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Plants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantCountArgs} args - Arguments to filter Plants to count.
     * @example
     * // Count the number of Plants
     * const count = await prisma.plant.count({
     *   where: {
     *     // ... the filter for the Plants we want to count
     *   }
     * })
    **/
    count<T extends PlantCountArgs>(
      args?: Subset<T, PlantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlantAggregateArgs>(args: Subset<T, PlantAggregateArgs>): Prisma.PrismaPromise<GetPlantAggregateType<T>>

    /**
     * Group by Plant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantGroupByArgs} args - Group by arguments.
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
      T extends PlantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlantGroupByArgs['orderBy'] }
        : { orderBy?: PlantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plant model
   */
  readonly fields: PlantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlantClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    owner<T extends OwnerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OwnerDefaultArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Plant model
   */ 
  interface PlantFieldRefs {
    readonly id: FieldRef<"Plant", 'String'>
    readonly name: FieldRef<"Plant", 'String'>
    readonly waterFrequency: FieldRef<"Plant", 'WaterFrequency'>
    readonly fertiliseFrequency: FieldRef<"Plant", 'FertiliseFrequency'>
    readonly lightLevel: FieldRef<"Plant", 'LightLevel'>
    readonly ownerId: FieldRef<"Plant", 'String'>
    readonly createdAt: FieldRef<"Plant", 'DateTime'>
    readonly updatedAt: FieldRef<"Plant", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Plant findUnique
   */
  export type PlantFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlantInclude<ExtArgs> | null
    /**
     * Filter, which Plant to fetch.
     */
    where: PlantWhereUniqueInput
  }


  /**
   * Plant findUniqueOrThrow
   */
  export type PlantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlantInclude<ExtArgs> | null
    /**
     * Filter, which Plant to fetch.
     */
    where: PlantWhereUniqueInput
  }


  /**
   * Plant findFirst
   */
  export type PlantFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlantInclude<ExtArgs> | null
    /**
     * Filter, which Plant to fetch.
     */
    where?: PlantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plants to fetch.
     */
    orderBy?: PlantOrderByWithRelationInput | PlantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plants.
     */
    cursor?: PlantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plants.
     */
    distinct?: PlantScalarFieldEnum | PlantScalarFieldEnum[]
  }


  /**
   * Plant findFirstOrThrow
   */
  export type PlantFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlantInclude<ExtArgs> | null
    /**
     * Filter, which Plant to fetch.
     */
    where?: PlantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plants to fetch.
     */
    orderBy?: PlantOrderByWithRelationInput | PlantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plants.
     */
    cursor?: PlantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plants.
     */
    distinct?: PlantScalarFieldEnum | PlantScalarFieldEnum[]
  }


  /**
   * Plant findMany
   */
  export type PlantFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlantInclude<ExtArgs> | null
    /**
     * Filter, which Plants to fetch.
     */
    where?: PlantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plants to fetch.
     */
    orderBy?: PlantOrderByWithRelationInput | PlantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plants.
     */
    cursor?: PlantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plants.
     */
    skip?: number
    distinct?: PlantScalarFieldEnum | PlantScalarFieldEnum[]
  }


  /**
   * Plant create
   */
  export type PlantCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlantInclude<ExtArgs> | null
    /**
     * The data needed to create a Plant.
     */
    data: XOR<PlantCreateInput, PlantUncheckedCreateInput>
  }


  /**
   * Plant createMany
   */
  export type PlantCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plants.
     */
    data: PlantCreateManyInput | PlantCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Plant update
   */
  export type PlantUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlantInclude<ExtArgs> | null
    /**
     * The data needed to update a Plant.
     */
    data: XOR<PlantUpdateInput, PlantUncheckedUpdateInput>
    /**
     * Choose, which Plant to update.
     */
    where: PlantWhereUniqueInput
  }


  /**
   * Plant updateMany
   */
  export type PlantUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plants.
     */
    data: XOR<PlantUpdateManyMutationInput, PlantUncheckedUpdateManyInput>
    /**
     * Filter which Plants to update
     */
    where?: PlantWhereInput
  }


  /**
   * Plant upsert
   */
  export type PlantUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlantInclude<ExtArgs> | null
    /**
     * The filter to search for the Plant to update in case it exists.
     */
    where: PlantWhereUniqueInput
    /**
     * In case the Plant found by the `where` argument doesn't exist, create a new Plant with this data.
     */
    create: XOR<PlantCreateInput, PlantUncheckedCreateInput>
    /**
     * In case the Plant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlantUpdateInput, PlantUncheckedUpdateInput>
  }


  /**
   * Plant delete
   */
  export type PlantDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlantInclude<ExtArgs> | null
    /**
     * Filter which Plant to delete.
     */
    where: PlantWhereUniqueInput
  }


  /**
   * Plant deleteMany
   */
  export type PlantDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plants to delete
     */
    where?: PlantWhereInput
  }


  /**
   * Plant without action
   */
  export type PlantDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlantInclude<ExtArgs> | null
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


  export const OwnerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OwnerScalarFieldEnum = (typeof OwnerScalarFieldEnum)[keyof typeof OwnerScalarFieldEnum]


  export const PlantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    waterFrequency: 'waterFrequency',
    fertiliseFrequency: 'fertiliseFrequency',
    lightLevel: 'lightLevel',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlantScalarFieldEnum = (typeof PlantScalarFieldEnum)[keyof typeof PlantScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'WaterFrequency'
   */
  export type EnumWaterFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WaterFrequency'>
    


  /**
   * Reference to a field of type 'WaterFrequency[]'
   */
  export type ListEnumWaterFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WaterFrequency[]'>
    


  /**
   * Reference to a field of type 'FertiliseFrequency'
   */
  export type EnumFertiliseFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FertiliseFrequency'>
    


  /**
   * Reference to a field of type 'FertiliseFrequency[]'
   */
  export type ListEnumFertiliseFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FertiliseFrequency[]'>
    


  /**
   * Reference to a field of type 'LightLevel'
   */
  export type EnumLightLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LightLevel'>
    


  /**
   * Reference to a field of type 'LightLevel[]'
   */
  export type ListEnumLightLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LightLevel[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type OwnerWhereInput = {
    AND?: OwnerWhereInput | OwnerWhereInput[]
    OR?: OwnerWhereInput[]
    NOT?: OwnerWhereInput | OwnerWhereInput[]
    id?: StringFilter<"Owner"> | string
    name?: StringFilter<"Owner"> | string
    email?: StringFilter<"Owner"> | string
    createdAt?: DateTimeFilter<"Owner"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Owner"> | Date | string | null
    plants?: PlantListRelationFilter
  }

  export type OwnerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    plants?: PlantOrderByRelationAggregateInput
  }

  export type OwnerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: OwnerWhereInput | OwnerWhereInput[]
    OR?: OwnerWhereInput[]
    NOT?: OwnerWhereInput | OwnerWhereInput[]
    name?: StringFilter<"Owner"> | string
    createdAt?: DateTimeFilter<"Owner"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Owner"> | Date | string | null
    plants?: PlantListRelationFilter
  }, "id" | "email">

  export type OwnerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: OwnerCountOrderByAggregateInput
    _max?: OwnerMaxOrderByAggregateInput
    _min?: OwnerMinOrderByAggregateInput
  }

  export type OwnerScalarWhereWithAggregatesInput = {
    AND?: OwnerScalarWhereWithAggregatesInput | OwnerScalarWhereWithAggregatesInput[]
    OR?: OwnerScalarWhereWithAggregatesInput[]
    NOT?: OwnerScalarWhereWithAggregatesInput | OwnerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Owner"> | string
    name?: StringWithAggregatesFilter<"Owner"> | string
    email?: StringWithAggregatesFilter<"Owner"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Owner"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Owner"> | Date | string | null
  }

  export type PlantWhereInput = {
    AND?: PlantWhereInput | PlantWhereInput[]
    OR?: PlantWhereInput[]
    NOT?: PlantWhereInput | PlantWhereInput[]
    id?: StringFilter<"Plant"> | string
    name?: StringFilter<"Plant"> | string
    waterFrequency?: EnumWaterFrequencyFilter<"Plant"> | $Enums.WaterFrequency
    fertiliseFrequency?: EnumFertiliseFrequencyFilter<"Plant"> | $Enums.FertiliseFrequency
    lightLevel?: EnumLightLevelFilter<"Plant"> | $Enums.LightLevel
    ownerId?: StringFilter<"Plant"> | string
    createdAt?: DateTimeFilter<"Plant"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Plant"> | Date | string | null
    owner?: XOR<OwnerRelationFilter, OwnerWhereInput>
  }

  export type PlantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    waterFrequency?: SortOrder
    fertiliseFrequency?: SortOrder
    lightLevel?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    owner?: OwnerOrderByWithRelationInput
  }

  export type PlantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlantWhereInput | PlantWhereInput[]
    OR?: PlantWhereInput[]
    NOT?: PlantWhereInput | PlantWhereInput[]
    name?: StringFilter<"Plant"> | string
    waterFrequency?: EnumWaterFrequencyFilter<"Plant"> | $Enums.WaterFrequency
    fertiliseFrequency?: EnumFertiliseFrequencyFilter<"Plant"> | $Enums.FertiliseFrequency
    lightLevel?: EnumLightLevelFilter<"Plant"> | $Enums.LightLevel
    ownerId?: StringFilter<"Plant"> | string
    createdAt?: DateTimeFilter<"Plant"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Plant"> | Date | string | null
    owner?: XOR<OwnerRelationFilter, OwnerWhereInput>
  }, "id">

  export type PlantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    waterFrequency?: SortOrder
    fertiliseFrequency?: SortOrder
    lightLevel?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: PlantCountOrderByAggregateInput
    _max?: PlantMaxOrderByAggregateInput
    _min?: PlantMinOrderByAggregateInput
  }

  export type PlantScalarWhereWithAggregatesInput = {
    AND?: PlantScalarWhereWithAggregatesInput | PlantScalarWhereWithAggregatesInput[]
    OR?: PlantScalarWhereWithAggregatesInput[]
    NOT?: PlantScalarWhereWithAggregatesInput | PlantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Plant"> | string
    name?: StringWithAggregatesFilter<"Plant"> | string
    waterFrequency?: EnumWaterFrequencyWithAggregatesFilter<"Plant"> | $Enums.WaterFrequency
    fertiliseFrequency?: EnumFertiliseFrequencyWithAggregatesFilter<"Plant"> | $Enums.FertiliseFrequency
    lightLevel?: EnumLightLevelWithAggregatesFilter<"Plant"> | $Enums.LightLevel
    ownerId?: StringWithAggregatesFilter<"Plant"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Plant"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Plant"> | Date | string | null
  }

  export type OwnerCreateInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    plants?: PlantCreateNestedManyWithoutOwnerInput
  }

  export type OwnerUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    plants?: PlantUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type OwnerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plants?: PlantUpdateManyWithoutOwnerNestedInput
  }

  export type OwnerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plants?: PlantUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type OwnerCreateManyInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type OwnerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OwnerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PlantCreateInput = {
    id?: string
    name: string
    waterFrequency: $Enums.WaterFrequency
    fertiliseFrequency: $Enums.FertiliseFrequency
    lightLevel: $Enums.LightLevel
    createdAt?: Date | string
    updatedAt?: Date | string | null
    owner: OwnerCreateNestedOneWithoutPlantsInput
  }

  export type PlantUncheckedCreateInput = {
    id?: string
    name: string
    waterFrequency: $Enums.WaterFrequency
    fertiliseFrequency: $Enums.FertiliseFrequency
    lightLevel: $Enums.LightLevel
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PlantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    waterFrequency?: EnumWaterFrequencyFieldUpdateOperationsInput | $Enums.WaterFrequency
    fertiliseFrequency?: EnumFertiliseFrequencyFieldUpdateOperationsInput | $Enums.FertiliseFrequency
    lightLevel?: EnumLightLevelFieldUpdateOperationsInput | $Enums.LightLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: OwnerUpdateOneRequiredWithoutPlantsNestedInput
  }

  export type PlantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    waterFrequency?: EnumWaterFrequencyFieldUpdateOperationsInput | $Enums.WaterFrequency
    fertiliseFrequency?: EnumFertiliseFrequencyFieldUpdateOperationsInput | $Enums.FertiliseFrequency
    lightLevel?: EnumLightLevelFieldUpdateOperationsInput | $Enums.LightLevel
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PlantCreateManyInput = {
    id?: string
    name: string
    waterFrequency: $Enums.WaterFrequency
    fertiliseFrequency: $Enums.FertiliseFrequency
    lightLevel: $Enums.LightLevel
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PlantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    waterFrequency?: EnumWaterFrequencyFieldUpdateOperationsInput | $Enums.WaterFrequency
    fertiliseFrequency?: EnumFertiliseFrequencyFieldUpdateOperationsInput | $Enums.FertiliseFrequency
    lightLevel?: EnumLightLevelFieldUpdateOperationsInput | $Enums.LightLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PlantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    waterFrequency?: EnumWaterFrequencyFieldUpdateOperationsInput | $Enums.WaterFrequency
    fertiliseFrequency?: EnumFertiliseFrequencyFieldUpdateOperationsInput | $Enums.FertiliseFrequency
    lightLevel?: EnumLightLevelFieldUpdateOperationsInput | $Enums.LightLevel
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PlantListRelationFilter = {
    every?: PlantWhereInput
    some?: PlantWhereInput
    none?: PlantWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PlantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OwnerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OwnerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OwnerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumWaterFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.WaterFrequency | EnumWaterFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.WaterFrequency[] | ListEnumWaterFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.WaterFrequency[] | ListEnumWaterFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumWaterFrequencyFilter<$PrismaModel> | $Enums.WaterFrequency
  }

  export type EnumFertiliseFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.FertiliseFrequency | EnumFertiliseFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.FertiliseFrequency[] | ListEnumFertiliseFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.FertiliseFrequency[] | ListEnumFertiliseFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumFertiliseFrequencyFilter<$PrismaModel> | $Enums.FertiliseFrequency
  }

  export type EnumLightLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.LightLevel | EnumLightLevelFieldRefInput<$PrismaModel>
    in?: $Enums.LightLevel[] | ListEnumLightLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.LightLevel[] | ListEnumLightLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLightLevelFilter<$PrismaModel> | $Enums.LightLevel
  }

  export type OwnerRelationFilter = {
    is?: OwnerWhereInput
    isNot?: OwnerWhereInput
  }

  export type PlantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    waterFrequency?: SortOrder
    fertiliseFrequency?: SortOrder
    lightLevel?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    waterFrequency?: SortOrder
    fertiliseFrequency?: SortOrder
    lightLevel?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    waterFrequency?: SortOrder
    fertiliseFrequency?: SortOrder
    lightLevel?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumWaterFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WaterFrequency | EnumWaterFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.WaterFrequency[] | ListEnumWaterFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.WaterFrequency[] | ListEnumWaterFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumWaterFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.WaterFrequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWaterFrequencyFilter<$PrismaModel>
    _max?: NestedEnumWaterFrequencyFilter<$PrismaModel>
  }

  export type EnumFertiliseFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FertiliseFrequency | EnumFertiliseFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.FertiliseFrequency[] | ListEnumFertiliseFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.FertiliseFrequency[] | ListEnumFertiliseFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumFertiliseFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.FertiliseFrequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFertiliseFrequencyFilter<$PrismaModel>
    _max?: NestedEnumFertiliseFrequencyFilter<$PrismaModel>
  }

  export type EnumLightLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LightLevel | EnumLightLevelFieldRefInput<$PrismaModel>
    in?: $Enums.LightLevel[] | ListEnumLightLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.LightLevel[] | ListEnumLightLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLightLevelWithAggregatesFilter<$PrismaModel> | $Enums.LightLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLightLevelFilter<$PrismaModel>
    _max?: NestedEnumLightLevelFilter<$PrismaModel>
  }

  export type PlantCreateNestedManyWithoutOwnerInput = {
    create?: XOR<PlantCreateWithoutOwnerInput, PlantUncheckedCreateWithoutOwnerInput> | PlantCreateWithoutOwnerInput[] | PlantUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PlantCreateOrConnectWithoutOwnerInput | PlantCreateOrConnectWithoutOwnerInput[]
    createMany?: PlantCreateManyOwnerInputEnvelope
    connect?: PlantWhereUniqueInput | PlantWhereUniqueInput[]
  }

  export type PlantUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<PlantCreateWithoutOwnerInput, PlantUncheckedCreateWithoutOwnerInput> | PlantCreateWithoutOwnerInput[] | PlantUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PlantCreateOrConnectWithoutOwnerInput | PlantCreateOrConnectWithoutOwnerInput[]
    createMany?: PlantCreateManyOwnerInputEnvelope
    connect?: PlantWhereUniqueInput | PlantWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PlantUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<PlantCreateWithoutOwnerInput, PlantUncheckedCreateWithoutOwnerInput> | PlantCreateWithoutOwnerInput[] | PlantUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PlantCreateOrConnectWithoutOwnerInput | PlantCreateOrConnectWithoutOwnerInput[]
    upsert?: PlantUpsertWithWhereUniqueWithoutOwnerInput | PlantUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: PlantCreateManyOwnerInputEnvelope
    set?: PlantWhereUniqueInput | PlantWhereUniqueInput[]
    disconnect?: PlantWhereUniqueInput | PlantWhereUniqueInput[]
    delete?: PlantWhereUniqueInput | PlantWhereUniqueInput[]
    connect?: PlantWhereUniqueInput | PlantWhereUniqueInput[]
    update?: PlantUpdateWithWhereUniqueWithoutOwnerInput | PlantUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: PlantUpdateManyWithWhereWithoutOwnerInput | PlantUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: PlantScalarWhereInput | PlantScalarWhereInput[]
  }

  export type PlantUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<PlantCreateWithoutOwnerInput, PlantUncheckedCreateWithoutOwnerInput> | PlantCreateWithoutOwnerInput[] | PlantUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PlantCreateOrConnectWithoutOwnerInput | PlantCreateOrConnectWithoutOwnerInput[]
    upsert?: PlantUpsertWithWhereUniqueWithoutOwnerInput | PlantUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: PlantCreateManyOwnerInputEnvelope
    set?: PlantWhereUniqueInput | PlantWhereUniqueInput[]
    disconnect?: PlantWhereUniqueInput | PlantWhereUniqueInput[]
    delete?: PlantWhereUniqueInput | PlantWhereUniqueInput[]
    connect?: PlantWhereUniqueInput | PlantWhereUniqueInput[]
    update?: PlantUpdateWithWhereUniqueWithoutOwnerInput | PlantUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: PlantUpdateManyWithWhereWithoutOwnerInput | PlantUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: PlantScalarWhereInput | PlantScalarWhereInput[]
  }

  export type OwnerCreateNestedOneWithoutPlantsInput = {
    create?: XOR<OwnerCreateWithoutPlantsInput, OwnerUncheckedCreateWithoutPlantsInput>
    connectOrCreate?: OwnerCreateOrConnectWithoutPlantsInput
    connect?: OwnerWhereUniqueInput
  }

  export type EnumWaterFrequencyFieldUpdateOperationsInput = {
    set?: $Enums.WaterFrequency
  }

  export type EnumFertiliseFrequencyFieldUpdateOperationsInput = {
    set?: $Enums.FertiliseFrequency
  }

  export type EnumLightLevelFieldUpdateOperationsInput = {
    set?: $Enums.LightLevel
  }

  export type OwnerUpdateOneRequiredWithoutPlantsNestedInput = {
    create?: XOR<OwnerCreateWithoutPlantsInput, OwnerUncheckedCreateWithoutPlantsInput>
    connectOrCreate?: OwnerCreateOrConnectWithoutPlantsInput
    upsert?: OwnerUpsertWithoutPlantsInput
    connect?: OwnerWhereUniqueInput
    update?: XOR<XOR<OwnerUpdateToOneWithWhereWithoutPlantsInput, OwnerUpdateWithoutPlantsInput>, OwnerUncheckedUpdateWithoutPlantsInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedEnumWaterFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.WaterFrequency | EnumWaterFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.WaterFrequency[] | ListEnumWaterFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.WaterFrequency[] | ListEnumWaterFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumWaterFrequencyFilter<$PrismaModel> | $Enums.WaterFrequency
  }

  export type NestedEnumFertiliseFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.FertiliseFrequency | EnumFertiliseFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.FertiliseFrequency[] | ListEnumFertiliseFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.FertiliseFrequency[] | ListEnumFertiliseFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumFertiliseFrequencyFilter<$PrismaModel> | $Enums.FertiliseFrequency
  }

  export type NestedEnumLightLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.LightLevel | EnumLightLevelFieldRefInput<$PrismaModel>
    in?: $Enums.LightLevel[] | ListEnumLightLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.LightLevel[] | ListEnumLightLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLightLevelFilter<$PrismaModel> | $Enums.LightLevel
  }

  export type NestedEnumWaterFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WaterFrequency | EnumWaterFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.WaterFrequency[] | ListEnumWaterFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.WaterFrequency[] | ListEnumWaterFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumWaterFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.WaterFrequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWaterFrequencyFilter<$PrismaModel>
    _max?: NestedEnumWaterFrequencyFilter<$PrismaModel>
  }

  export type NestedEnumFertiliseFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FertiliseFrequency | EnumFertiliseFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.FertiliseFrequency[] | ListEnumFertiliseFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.FertiliseFrequency[] | ListEnumFertiliseFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumFertiliseFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.FertiliseFrequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFertiliseFrequencyFilter<$PrismaModel>
    _max?: NestedEnumFertiliseFrequencyFilter<$PrismaModel>
  }

  export type NestedEnumLightLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LightLevel | EnumLightLevelFieldRefInput<$PrismaModel>
    in?: $Enums.LightLevel[] | ListEnumLightLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.LightLevel[] | ListEnumLightLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLightLevelWithAggregatesFilter<$PrismaModel> | $Enums.LightLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLightLevelFilter<$PrismaModel>
    _max?: NestedEnumLightLevelFilter<$PrismaModel>
  }

  export type PlantCreateWithoutOwnerInput = {
    id?: string
    name: string
    waterFrequency: $Enums.WaterFrequency
    fertiliseFrequency: $Enums.FertiliseFrequency
    lightLevel: $Enums.LightLevel
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PlantUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    waterFrequency: $Enums.WaterFrequency
    fertiliseFrequency: $Enums.FertiliseFrequency
    lightLevel: $Enums.LightLevel
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PlantCreateOrConnectWithoutOwnerInput = {
    where: PlantWhereUniqueInput
    create: XOR<PlantCreateWithoutOwnerInput, PlantUncheckedCreateWithoutOwnerInput>
  }

  export type PlantCreateManyOwnerInputEnvelope = {
    data: PlantCreateManyOwnerInput | PlantCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type PlantUpsertWithWhereUniqueWithoutOwnerInput = {
    where: PlantWhereUniqueInput
    update: XOR<PlantUpdateWithoutOwnerInput, PlantUncheckedUpdateWithoutOwnerInput>
    create: XOR<PlantCreateWithoutOwnerInput, PlantUncheckedCreateWithoutOwnerInput>
  }

  export type PlantUpdateWithWhereUniqueWithoutOwnerInput = {
    where: PlantWhereUniqueInput
    data: XOR<PlantUpdateWithoutOwnerInput, PlantUncheckedUpdateWithoutOwnerInput>
  }

  export type PlantUpdateManyWithWhereWithoutOwnerInput = {
    where: PlantScalarWhereInput
    data: XOR<PlantUpdateManyMutationInput, PlantUncheckedUpdateManyWithoutOwnerInput>
  }

  export type PlantScalarWhereInput = {
    AND?: PlantScalarWhereInput | PlantScalarWhereInput[]
    OR?: PlantScalarWhereInput[]
    NOT?: PlantScalarWhereInput | PlantScalarWhereInput[]
    id?: StringFilter<"Plant"> | string
    name?: StringFilter<"Plant"> | string
    waterFrequency?: EnumWaterFrequencyFilter<"Plant"> | $Enums.WaterFrequency
    fertiliseFrequency?: EnumFertiliseFrequencyFilter<"Plant"> | $Enums.FertiliseFrequency
    lightLevel?: EnumLightLevelFilter<"Plant"> | $Enums.LightLevel
    ownerId?: StringFilter<"Plant"> | string
    createdAt?: DateTimeFilter<"Plant"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Plant"> | Date | string | null
  }

  export type OwnerCreateWithoutPlantsInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type OwnerUncheckedCreateWithoutPlantsInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type OwnerCreateOrConnectWithoutPlantsInput = {
    where: OwnerWhereUniqueInput
    create: XOR<OwnerCreateWithoutPlantsInput, OwnerUncheckedCreateWithoutPlantsInput>
  }

  export type OwnerUpsertWithoutPlantsInput = {
    update: XOR<OwnerUpdateWithoutPlantsInput, OwnerUncheckedUpdateWithoutPlantsInput>
    create: XOR<OwnerCreateWithoutPlantsInput, OwnerUncheckedCreateWithoutPlantsInput>
    where?: OwnerWhereInput
  }

  export type OwnerUpdateToOneWithWhereWithoutPlantsInput = {
    where?: OwnerWhereInput
    data: XOR<OwnerUpdateWithoutPlantsInput, OwnerUncheckedUpdateWithoutPlantsInput>
  }

  export type OwnerUpdateWithoutPlantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OwnerUncheckedUpdateWithoutPlantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PlantCreateManyOwnerInput = {
    id?: string
    name: string
    waterFrequency: $Enums.WaterFrequency
    fertiliseFrequency: $Enums.FertiliseFrequency
    lightLevel: $Enums.LightLevel
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PlantUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    waterFrequency?: EnumWaterFrequencyFieldUpdateOperationsInput | $Enums.WaterFrequency
    fertiliseFrequency?: EnumFertiliseFrequencyFieldUpdateOperationsInput | $Enums.FertiliseFrequency
    lightLevel?: EnumLightLevelFieldUpdateOperationsInput | $Enums.LightLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PlantUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    waterFrequency?: EnumWaterFrequencyFieldUpdateOperationsInput | $Enums.WaterFrequency
    fertiliseFrequency?: EnumFertiliseFrequencyFieldUpdateOperationsInput | $Enums.FertiliseFrequency
    lightLevel?: EnumLightLevelFieldUpdateOperationsInput | $Enums.LightLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PlantUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    waterFrequency?: EnumWaterFrequencyFieldUpdateOperationsInput | $Enums.WaterFrequency
    fertiliseFrequency?: EnumFertiliseFrequencyFieldUpdateOperationsInput | $Enums.FertiliseFrequency
    lightLevel?: EnumLightLevelFieldUpdateOperationsInput | $Enums.LightLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use OwnerCountOutputTypeDefaultArgs instead
     */
    export type OwnerCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = OwnerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OwnerDefaultArgs instead
     */
    export type OwnerArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = OwnerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlantDefaultArgs instead
     */
    export type PlantArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = PlantDefaultArgs<ExtArgs>

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