
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model alembic_version
 * 
 */
export type alembic_version = $Result.DefaultSelection<Prisma.$alembic_versionPayload>
/**
 * Model check_in
 * 
 */
export type check_in = $Result.DefaultSelection<Prisma.$check_inPayload>
/**
 * Model diet
 * 
 */
export type diet = $Result.DefaultSelection<Prisma.$dietPayload>
/**
 * Model habit_plan
 * 
 */
export type habit_plan = $Result.DefaultSelection<Prisma.$habit_planPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Alembic_versions
 * const alembic_versions = await prisma.alembic_version.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Alembic_versions
   * const alembic_versions = await prisma.alembic_version.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.alembic_version`: Exposes CRUD operations for the **alembic_version** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alembic_versions
    * const alembic_versions = await prisma.alembic_version.findMany()
    * ```
    */
  get alembic_version(): Prisma.alembic_versionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.check_in`: Exposes CRUD operations for the **check_in** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Check_ins
    * const check_ins = await prisma.check_in.findMany()
    * ```
    */
  get check_in(): Prisma.check_inDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.diet`: Exposes CRUD operations for the **diet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Diets
    * const diets = await prisma.diet.findMany()
    * ```
    */
  get diet(): Prisma.dietDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.habit_plan`: Exposes CRUD operations for the **habit_plan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Habit_plans
    * const habit_plans = await prisma.habit_plan.findMany()
    * ```
    */
  get habit_plan(): Prisma.habit_planDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    alembic_version: 'alembic_version',
    check_in: 'check_in',
    diet: 'diet',
    habit_plan: 'habit_plan',
    user: 'user'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "alembic_version" | "check_in" | "diet" | "habit_plan" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      alembic_version: {
        payload: Prisma.$alembic_versionPayload<ExtArgs>
        fields: Prisma.alembic_versionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.alembic_versionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alembic_versionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.alembic_versionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alembic_versionPayload>
          }
          findFirst: {
            args: Prisma.alembic_versionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alembic_versionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.alembic_versionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alembic_versionPayload>
          }
          findMany: {
            args: Prisma.alembic_versionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alembic_versionPayload>[]
          }
          create: {
            args: Prisma.alembic_versionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alembic_versionPayload>
          }
          createMany: {
            args: Prisma.alembic_versionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.alembic_versionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alembic_versionPayload>[]
          }
          delete: {
            args: Prisma.alembic_versionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alembic_versionPayload>
          }
          update: {
            args: Prisma.alembic_versionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alembic_versionPayload>
          }
          deleteMany: {
            args: Prisma.alembic_versionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.alembic_versionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.alembic_versionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alembic_versionPayload>[]
          }
          upsert: {
            args: Prisma.alembic_versionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alembic_versionPayload>
          }
          aggregate: {
            args: Prisma.Alembic_versionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlembic_version>
          }
          groupBy: {
            args: Prisma.alembic_versionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Alembic_versionGroupByOutputType>[]
          }
          count: {
            args: Prisma.alembic_versionCountArgs<ExtArgs>
            result: $Utils.Optional<Alembic_versionCountAggregateOutputType> | number
          }
        }
      }
      check_in: {
        payload: Prisma.$check_inPayload<ExtArgs>
        fields: Prisma.check_inFieldRefs
        operations: {
          findUnique: {
            args: Prisma.check_inFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$check_inPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.check_inFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$check_inPayload>
          }
          findFirst: {
            args: Prisma.check_inFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$check_inPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.check_inFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$check_inPayload>
          }
          findMany: {
            args: Prisma.check_inFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$check_inPayload>[]
          }
          create: {
            args: Prisma.check_inCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$check_inPayload>
          }
          createMany: {
            args: Prisma.check_inCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.check_inCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$check_inPayload>[]
          }
          delete: {
            args: Prisma.check_inDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$check_inPayload>
          }
          update: {
            args: Prisma.check_inUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$check_inPayload>
          }
          deleteMany: {
            args: Prisma.check_inDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.check_inUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.check_inUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$check_inPayload>[]
          }
          upsert: {
            args: Prisma.check_inUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$check_inPayload>
          }
          aggregate: {
            args: Prisma.Check_inAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCheck_in>
          }
          groupBy: {
            args: Prisma.check_inGroupByArgs<ExtArgs>
            result: $Utils.Optional<Check_inGroupByOutputType>[]
          }
          count: {
            args: Prisma.check_inCountArgs<ExtArgs>
            result: $Utils.Optional<Check_inCountAggregateOutputType> | number
          }
        }
      }
      diet: {
        payload: Prisma.$dietPayload<ExtArgs>
        fields: Prisma.dietFieldRefs
        operations: {
          findUnique: {
            args: Prisma.dietFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dietPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.dietFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dietPayload>
          }
          findFirst: {
            args: Prisma.dietFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dietPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.dietFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dietPayload>
          }
          findMany: {
            args: Prisma.dietFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dietPayload>[]
          }
          create: {
            args: Prisma.dietCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dietPayload>
          }
          createMany: {
            args: Prisma.dietCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.dietCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dietPayload>[]
          }
          delete: {
            args: Prisma.dietDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dietPayload>
          }
          update: {
            args: Prisma.dietUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dietPayload>
          }
          deleteMany: {
            args: Prisma.dietDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.dietUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.dietUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dietPayload>[]
          }
          upsert: {
            args: Prisma.dietUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dietPayload>
          }
          aggregate: {
            args: Prisma.DietAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiet>
          }
          groupBy: {
            args: Prisma.dietGroupByArgs<ExtArgs>
            result: $Utils.Optional<DietGroupByOutputType>[]
          }
          count: {
            args: Prisma.dietCountArgs<ExtArgs>
            result: $Utils.Optional<DietCountAggregateOutputType> | number
          }
        }
      }
      habit_plan: {
        payload: Prisma.$habit_planPayload<ExtArgs>
        fields: Prisma.habit_planFieldRefs
        operations: {
          findUnique: {
            args: Prisma.habit_planFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$habit_planPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.habit_planFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$habit_planPayload>
          }
          findFirst: {
            args: Prisma.habit_planFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$habit_planPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.habit_planFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$habit_planPayload>
          }
          findMany: {
            args: Prisma.habit_planFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$habit_planPayload>[]
          }
          create: {
            args: Prisma.habit_planCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$habit_planPayload>
          }
          createMany: {
            args: Prisma.habit_planCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.habit_planCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$habit_planPayload>[]
          }
          delete: {
            args: Prisma.habit_planDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$habit_planPayload>
          }
          update: {
            args: Prisma.habit_planUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$habit_planPayload>
          }
          deleteMany: {
            args: Prisma.habit_planDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.habit_planUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.habit_planUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$habit_planPayload>[]
          }
          upsert: {
            args: Prisma.habit_planUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$habit_planPayload>
          }
          aggregate: {
            args: Prisma.Habit_planAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHabit_plan>
          }
          groupBy: {
            args: Prisma.habit_planGroupByArgs<ExtArgs>
            result: $Utils.Optional<Habit_planGroupByOutputType>[]
          }
          count: {
            args: Prisma.habit_planCountArgs<ExtArgs>
            result: $Utils.Optional<Habit_planCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    alembic_version?: alembic_versionOmit
    check_in?: check_inOmit
    diet?: dietOmit
    habit_plan?: habit_planOmit
    user?: userOmit
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
   * Count Type Habit_planCountOutputType
   */

  export type Habit_planCountOutputType = {
    check_in: number
  }

  export type Habit_planCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    check_in?: boolean | Habit_planCountOutputTypeCountCheck_inArgs
  }

  // Custom InputTypes
  /**
   * Habit_planCountOutputType without action
   */
  export type Habit_planCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit_planCountOutputType
     */
    select?: Habit_planCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Habit_planCountOutputType without action
   */
  export type Habit_planCountOutputTypeCountCheck_inArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: check_inWhereInput
  }


  /**
   * Models
   */

  /**
   * Model alembic_version
   */

  export type AggregateAlembic_version = {
    _count: Alembic_versionCountAggregateOutputType | null
    _min: Alembic_versionMinAggregateOutputType | null
    _max: Alembic_versionMaxAggregateOutputType | null
  }

  export type Alembic_versionMinAggregateOutputType = {
    version_num: string | null
  }

  export type Alembic_versionMaxAggregateOutputType = {
    version_num: string | null
  }

  export type Alembic_versionCountAggregateOutputType = {
    version_num: number
    _all: number
  }


  export type Alembic_versionMinAggregateInputType = {
    version_num?: true
  }

  export type Alembic_versionMaxAggregateInputType = {
    version_num?: true
  }

  export type Alembic_versionCountAggregateInputType = {
    version_num?: true
    _all?: true
  }

  export type Alembic_versionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which alembic_version to aggregate.
     */
    where?: alembic_versionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alembic_versions to fetch.
     */
    orderBy?: alembic_versionOrderByWithRelationInput | alembic_versionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: alembic_versionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alembic_versions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alembic_versions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned alembic_versions
    **/
    _count?: true | Alembic_versionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Alembic_versionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Alembic_versionMaxAggregateInputType
  }

  export type GetAlembic_versionAggregateType<T extends Alembic_versionAggregateArgs> = {
        [P in keyof T & keyof AggregateAlembic_version]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlembic_version[P]>
      : GetScalarType<T[P], AggregateAlembic_version[P]>
  }




  export type alembic_versionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: alembic_versionWhereInput
    orderBy?: alembic_versionOrderByWithAggregationInput | alembic_versionOrderByWithAggregationInput[]
    by: Alembic_versionScalarFieldEnum[] | Alembic_versionScalarFieldEnum
    having?: alembic_versionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Alembic_versionCountAggregateInputType | true
    _min?: Alembic_versionMinAggregateInputType
    _max?: Alembic_versionMaxAggregateInputType
  }

  export type Alembic_versionGroupByOutputType = {
    version_num: string
    _count: Alembic_versionCountAggregateOutputType | null
    _min: Alembic_versionMinAggregateOutputType | null
    _max: Alembic_versionMaxAggregateOutputType | null
  }

  type GetAlembic_versionGroupByPayload<T extends alembic_versionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Alembic_versionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Alembic_versionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Alembic_versionGroupByOutputType[P]>
            : GetScalarType<T[P], Alembic_versionGroupByOutputType[P]>
        }
      >
    >


  export type alembic_versionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    version_num?: boolean
  }, ExtArgs["result"]["alembic_version"]>

  export type alembic_versionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    version_num?: boolean
  }, ExtArgs["result"]["alembic_version"]>

  export type alembic_versionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    version_num?: boolean
  }, ExtArgs["result"]["alembic_version"]>

  export type alembic_versionSelectScalar = {
    version_num?: boolean
  }

  export type alembic_versionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"version_num", ExtArgs["result"]["alembic_version"]>

  export type $alembic_versionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "alembic_version"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      version_num: string
    }, ExtArgs["result"]["alembic_version"]>
    composites: {}
  }

  type alembic_versionGetPayload<S extends boolean | null | undefined | alembic_versionDefaultArgs> = $Result.GetResult<Prisma.$alembic_versionPayload, S>

  type alembic_versionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<alembic_versionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Alembic_versionCountAggregateInputType | true
    }

  export interface alembic_versionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['alembic_version'], meta: { name: 'alembic_version' } }
    /**
     * Find zero or one Alembic_version that matches the filter.
     * @param {alembic_versionFindUniqueArgs} args - Arguments to find a Alembic_version
     * @example
     * // Get one Alembic_version
     * const alembic_version = await prisma.alembic_version.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends alembic_versionFindUniqueArgs>(args: SelectSubset<T, alembic_versionFindUniqueArgs<ExtArgs>>): Prisma__alembic_versionClient<$Result.GetResult<Prisma.$alembic_versionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alembic_version that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {alembic_versionFindUniqueOrThrowArgs} args - Arguments to find a Alembic_version
     * @example
     * // Get one Alembic_version
     * const alembic_version = await prisma.alembic_version.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends alembic_versionFindUniqueOrThrowArgs>(args: SelectSubset<T, alembic_versionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__alembic_versionClient<$Result.GetResult<Prisma.$alembic_versionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alembic_version that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alembic_versionFindFirstArgs} args - Arguments to find a Alembic_version
     * @example
     * // Get one Alembic_version
     * const alembic_version = await prisma.alembic_version.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends alembic_versionFindFirstArgs>(args?: SelectSubset<T, alembic_versionFindFirstArgs<ExtArgs>>): Prisma__alembic_versionClient<$Result.GetResult<Prisma.$alembic_versionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alembic_version that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alembic_versionFindFirstOrThrowArgs} args - Arguments to find a Alembic_version
     * @example
     * // Get one Alembic_version
     * const alembic_version = await prisma.alembic_version.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends alembic_versionFindFirstOrThrowArgs>(args?: SelectSubset<T, alembic_versionFindFirstOrThrowArgs<ExtArgs>>): Prisma__alembic_versionClient<$Result.GetResult<Prisma.$alembic_versionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alembic_versions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alembic_versionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alembic_versions
     * const alembic_versions = await prisma.alembic_version.findMany()
     * 
     * // Get first 10 Alembic_versions
     * const alembic_versions = await prisma.alembic_version.findMany({ take: 10 })
     * 
     * // Only select the `version_num`
     * const alembic_versionWithVersion_numOnly = await prisma.alembic_version.findMany({ select: { version_num: true } })
     * 
     */
    findMany<T extends alembic_versionFindManyArgs>(args?: SelectSubset<T, alembic_versionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alembic_versionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alembic_version.
     * @param {alembic_versionCreateArgs} args - Arguments to create a Alembic_version.
     * @example
     * // Create one Alembic_version
     * const Alembic_version = await prisma.alembic_version.create({
     *   data: {
     *     // ... data to create a Alembic_version
     *   }
     * })
     * 
     */
    create<T extends alembic_versionCreateArgs>(args: SelectSubset<T, alembic_versionCreateArgs<ExtArgs>>): Prisma__alembic_versionClient<$Result.GetResult<Prisma.$alembic_versionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alembic_versions.
     * @param {alembic_versionCreateManyArgs} args - Arguments to create many Alembic_versions.
     * @example
     * // Create many Alembic_versions
     * const alembic_version = await prisma.alembic_version.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends alembic_versionCreateManyArgs>(args?: SelectSubset<T, alembic_versionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alembic_versions and returns the data saved in the database.
     * @param {alembic_versionCreateManyAndReturnArgs} args - Arguments to create many Alembic_versions.
     * @example
     * // Create many Alembic_versions
     * const alembic_version = await prisma.alembic_version.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alembic_versions and only return the `version_num`
     * const alembic_versionWithVersion_numOnly = await prisma.alembic_version.createManyAndReturn({
     *   select: { version_num: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends alembic_versionCreateManyAndReturnArgs>(args?: SelectSubset<T, alembic_versionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alembic_versionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Alembic_version.
     * @param {alembic_versionDeleteArgs} args - Arguments to delete one Alembic_version.
     * @example
     * // Delete one Alembic_version
     * const Alembic_version = await prisma.alembic_version.delete({
     *   where: {
     *     // ... filter to delete one Alembic_version
     *   }
     * })
     * 
     */
    delete<T extends alembic_versionDeleteArgs>(args: SelectSubset<T, alembic_versionDeleteArgs<ExtArgs>>): Prisma__alembic_versionClient<$Result.GetResult<Prisma.$alembic_versionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alembic_version.
     * @param {alembic_versionUpdateArgs} args - Arguments to update one Alembic_version.
     * @example
     * // Update one Alembic_version
     * const alembic_version = await prisma.alembic_version.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends alembic_versionUpdateArgs>(args: SelectSubset<T, alembic_versionUpdateArgs<ExtArgs>>): Prisma__alembic_versionClient<$Result.GetResult<Prisma.$alembic_versionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alembic_versions.
     * @param {alembic_versionDeleteManyArgs} args - Arguments to filter Alembic_versions to delete.
     * @example
     * // Delete a few Alembic_versions
     * const { count } = await prisma.alembic_version.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends alembic_versionDeleteManyArgs>(args?: SelectSubset<T, alembic_versionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alembic_versions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alembic_versionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alembic_versions
     * const alembic_version = await prisma.alembic_version.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends alembic_versionUpdateManyArgs>(args: SelectSubset<T, alembic_versionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alembic_versions and returns the data updated in the database.
     * @param {alembic_versionUpdateManyAndReturnArgs} args - Arguments to update many Alembic_versions.
     * @example
     * // Update many Alembic_versions
     * const alembic_version = await prisma.alembic_version.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alembic_versions and only return the `version_num`
     * const alembic_versionWithVersion_numOnly = await prisma.alembic_version.updateManyAndReturn({
     *   select: { version_num: true },
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
    updateManyAndReturn<T extends alembic_versionUpdateManyAndReturnArgs>(args: SelectSubset<T, alembic_versionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alembic_versionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Alembic_version.
     * @param {alembic_versionUpsertArgs} args - Arguments to update or create a Alembic_version.
     * @example
     * // Update or create a Alembic_version
     * const alembic_version = await prisma.alembic_version.upsert({
     *   create: {
     *     // ... data to create a Alembic_version
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alembic_version we want to update
     *   }
     * })
     */
    upsert<T extends alembic_versionUpsertArgs>(args: SelectSubset<T, alembic_versionUpsertArgs<ExtArgs>>): Prisma__alembic_versionClient<$Result.GetResult<Prisma.$alembic_versionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alembic_versions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alembic_versionCountArgs} args - Arguments to filter Alembic_versions to count.
     * @example
     * // Count the number of Alembic_versions
     * const count = await prisma.alembic_version.count({
     *   where: {
     *     // ... the filter for the Alembic_versions we want to count
     *   }
     * })
    **/
    count<T extends alembic_versionCountArgs>(
      args?: Subset<T, alembic_versionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Alembic_versionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alembic_version.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Alembic_versionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Alembic_versionAggregateArgs>(args: Subset<T, Alembic_versionAggregateArgs>): Prisma.PrismaPromise<GetAlembic_versionAggregateType<T>>

    /**
     * Group by Alembic_version.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alembic_versionGroupByArgs} args - Group by arguments.
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
      T extends alembic_versionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: alembic_versionGroupByArgs['orderBy'] }
        : { orderBy?: alembic_versionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, alembic_versionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlembic_versionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the alembic_version model
   */
  readonly fields: alembic_versionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for alembic_version.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__alembic_versionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the alembic_version model
   */
  interface alembic_versionFieldRefs {
    readonly version_num: FieldRef<"alembic_version", 'String'>
  }
    

  // Custom InputTypes
  /**
   * alembic_version findUnique
   */
  export type alembic_versionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alembic_version
     */
    select?: alembic_versionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alembic_version
     */
    omit?: alembic_versionOmit<ExtArgs> | null
    /**
     * Filter, which alembic_version to fetch.
     */
    where: alembic_versionWhereUniqueInput
  }

  /**
   * alembic_version findUniqueOrThrow
   */
  export type alembic_versionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alembic_version
     */
    select?: alembic_versionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alembic_version
     */
    omit?: alembic_versionOmit<ExtArgs> | null
    /**
     * Filter, which alembic_version to fetch.
     */
    where: alembic_versionWhereUniqueInput
  }

  /**
   * alembic_version findFirst
   */
  export type alembic_versionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alembic_version
     */
    select?: alembic_versionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alembic_version
     */
    omit?: alembic_versionOmit<ExtArgs> | null
    /**
     * Filter, which alembic_version to fetch.
     */
    where?: alembic_versionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alembic_versions to fetch.
     */
    orderBy?: alembic_versionOrderByWithRelationInput | alembic_versionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for alembic_versions.
     */
    cursor?: alembic_versionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alembic_versions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alembic_versions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of alembic_versions.
     */
    distinct?: Alembic_versionScalarFieldEnum | Alembic_versionScalarFieldEnum[]
  }

  /**
   * alembic_version findFirstOrThrow
   */
  export type alembic_versionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alembic_version
     */
    select?: alembic_versionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alembic_version
     */
    omit?: alembic_versionOmit<ExtArgs> | null
    /**
     * Filter, which alembic_version to fetch.
     */
    where?: alembic_versionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alembic_versions to fetch.
     */
    orderBy?: alembic_versionOrderByWithRelationInput | alembic_versionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for alembic_versions.
     */
    cursor?: alembic_versionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alembic_versions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alembic_versions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of alembic_versions.
     */
    distinct?: Alembic_versionScalarFieldEnum | Alembic_versionScalarFieldEnum[]
  }

  /**
   * alembic_version findMany
   */
  export type alembic_versionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alembic_version
     */
    select?: alembic_versionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alembic_version
     */
    omit?: alembic_versionOmit<ExtArgs> | null
    /**
     * Filter, which alembic_versions to fetch.
     */
    where?: alembic_versionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alembic_versions to fetch.
     */
    orderBy?: alembic_versionOrderByWithRelationInput | alembic_versionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing alembic_versions.
     */
    cursor?: alembic_versionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alembic_versions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alembic_versions.
     */
    skip?: number
    distinct?: Alembic_versionScalarFieldEnum | Alembic_versionScalarFieldEnum[]
  }

  /**
   * alembic_version create
   */
  export type alembic_versionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alembic_version
     */
    select?: alembic_versionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alembic_version
     */
    omit?: alembic_versionOmit<ExtArgs> | null
    /**
     * The data needed to create a alembic_version.
     */
    data: XOR<alembic_versionCreateInput, alembic_versionUncheckedCreateInput>
  }

  /**
   * alembic_version createMany
   */
  export type alembic_versionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many alembic_versions.
     */
    data: alembic_versionCreateManyInput | alembic_versionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * alembic_version createManyAndReturn
   */
  export type alembic_versionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alembic_version
     */
    select?: alembic_versionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the alembic_version
     */
    omit?: alembic_versionOmit<ExtArgs> | null
    /**
     * The data used to create many alembic_versions.
     */
    data: alembic_versionCreateManyInput | alembic_versionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * alembic_version update
   */
  export type alembic_versionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alembic_version
     */
    select?: alembic_versionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alembic_version
     */
    omit?: alembic_versionOmit<ExtArgs> | null
    /**
     * The data needed to update a alembic_version.
     */
    data: XOR<alembic_versionUpdateInput, alembic_versionUncheckedUpdateInput>
    /**
     * Choose, which alembic_version to update.
     */
    where: alembic_versionWhereUniqueInput
  }

  /**
   * alembic_version updateMany
   */
  export type alembic_versionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update alembic_versions.
     */
    data: XOR<alembic_versionUpdateManyMutationInput, alembic_versionUncheckedUpdateManyInput>
    /**
     * Filter which alembic_versions to update
     */
    where?: alembic_versionWhereInput
    /**
     * Limit how many alembic_versions to update.
     */
    limit?: number
  }

  /**
   * alembic_version updateManyAndReturn
   */
  export type alembic_versionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alembic_version
     */
    select?: alembic_versionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the alembic_version
     */
    omit?: alembic_versionOmit<ExtArgs> | null
    /**
     * The data used to update alembic_versions.
     */
    data: XOR<alembic_versionUpdateManyMutationInput, alembic_versionUncheckedUpdateManyInput>
    /**
     * Filter which alembic_versions to update
     */
    where?: alembic_versionWhereInput
    /**
     * Limit how many alembic_versions to update.
     */
    limit?: number
  }

  /**
   * alembic_version upsert
   */
  export type alembic_versionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alembic_version
     */
    select?: alembic_versionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alembic_version
     */
    omit?: alembic_versionOmit<ExtArgs> | null
    /**
     * The filter to search for the alembic_version to update in case it exists.
     */
    where: alembic_versionWhereUniqueInput
    /**
     * In case the alembic_version found by the `where` argument doesn't exist, create a new alembic_version with this data.
     */
    create: XOR<alembic_versionCreateInput, alembic_versionUncheckedCreateInput>
    /**
     * In case the alembic_version was found with the provided `where` argument, update it with this data.
     */
    update: XOR<alembic_versionUpdateInput, alembic_versionUncheckedUpdateInput>
  }

  /**
   * alembic_version delete
   */
  export type alembic_versionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alembic_version
     */
    select?: alembic_versionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alembic_version
     */
    omit?: alembic_versionOmit<ExtArgs> | null
    /**
     * Filter which alembic_version to delete.
     */
    where: alembic_versionWhereUniqueInput
  }

  /**
   * alembic_version deleteMany
   */
  export type alembic_versionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which alembic_versions to delete
     */
    where?: alembic_versionWhereInput
    /**
     * Limit how many alembic_versions to delete.
     */
    limit?: number
  }

  /**
   * alembic_version without action
   */
  export type alembic_versionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alembic_version
     */
    select?: alembic_versionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alembic_version
     */
    omit?: alembic_versionOmit<ExtArgs> | null
  }


  /**
   * Model check_in
   */

  export type AggregateCheck_in = {
    _count: Check_inCountAggregateOutputType | null
    _avg: Check_inAvgAggregateOutputType | null
    _sum: Check_inSumAggregateOutputType | null
    _min: Check_inMinAggregateOutputType | null
    _max: Check_inMaxAggregateOutputType | null
  }

  export type Check_inAvgAggregateOutputType = {
    id: number | null
    habit_plan_id: number | null
  }

  export type Check_inSumAggregateOutputType = {
    id: number | null
    habit_plan_id: number | null
  }

  export type Check_inMinAggregateOutputType = {
    id: number | null
    userId: string | null
    date: Date | null
    status: boolean | null
    habit_plan_id: number | null
  }

  export type Check_inMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    date: Date | null
    status: boolean | null
    habit_plan_id: number | null
  }

  export type Check_inCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    status: number
    habit_plan_id: number
    _all: number
  }


  export type Check_inAvgAggregateInputType = {
    id?: true
    habit_plan_id?: true
  }

  export type Check_inSumAggregateInputType = {
    id?: true
    habit_plan_id?: true
  }

  export type Check_inMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    status?: true
    habit_plan_id?: true
  }

  export type Check_inMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    status?: true
    habit_plan_id?: true
  }

  export type Check_inCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    status?: true
    habit_plan_id?: true
    _all?: true
  }

  export type Check_inAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which check_in to aggregate.
     */
    where?: check_inWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of check_ins to fetch.
     */
    orderBy?: check_inOrderByWithRelationInput | check_inOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: check_inWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` check_ins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` check_ins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned check_ins
    **/
    _count?: true | Check_inCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Check_inAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Check_inSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Check_inMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Check_inMaxAggregateInputType
  }

  export type GetCheck_inAggregateType<T extends Check_inAggregateArgs> = {
        [P in keyof T & keyof AggregateCheck_in]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCheck_in[P]>
      : GetScalarType<T[P], AggregateCheck_in[P]>
  }




  export type check_inGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: check_inWhereInput
    orderBy?: check_inOrderByWithAggregationInput | check_inOrderByWithAggregationInput[]
    by: Check_inScalarFieldEnum[] | Check_inScalarFieldEnum
    having?: check_inScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Check_inCountAggregateInputType | true
    _avg?: Check_inAvgAggregateInputType
    _sum?: Check_inSumAggregateInputType
    _min?: Check_inMinAggregateInputType
    _max?: Check_inMaxAggregateInputType
  }

  export type Check_inGroupByOutputType = {
    id: number
    userId: string | null
    date: Date | null
    status: boolean | null
    habit_plan_id: number
    _count: Check_inCountAggregateOutputType | null
    _avg: Check_inAvgAggregateOutputType | null
    _sum: Check_inSumAggregateOutputType | null
    _min: Check_inMinAggregateOutputType | null
    _max: Check_inMaxAggregateOutputType | null
  }

  type GetCheck_inGroupByPayload<T extends check_inGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Check_inGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Check_inGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Check_inGroupByOutputType[P]>
            : GetScalarType<T[P], Check_inGroupByOutputType[P]>
        }
      >
    >


  export type check_inSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    status?: boolean
    habit_plan_id?: boolean
    habit_plan?: boolean | habit_planDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["check_in"]>

  export type check_inSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    status?: boolean
    habit_plan_id?: boolean
    habit_plan?: boolean | habit_planDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["check_in"]>

  export type check_inSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    status?: boolean
    habit_plan_id?: boolean
    habit_plan?: boolean | habit_planDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["check_in"]>

  export type check_inSelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    status?: boolean
    habit_plan_id?: boolean
  }

  export type check_inOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "date" | "status" | "habit_plan_id", ExtArgs["result"]["check_in"]>
  export type check_inInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit_plan?: boolean | habit_planDefaultArgs<ExtArgs>
  }
  export type check_inIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit_plan?: boolean | habit_planDefaultArgs<ExtArgs>
  }
  export type check_inIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit_plan?: boolean | habit_planDefaultArgs<ExtArgs>
  }

  export type $check_inPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "check_in"
    objects: {
      habit_plan: Prisma.$habit_planPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string | null
      date: Date | null
      status: boolean | null
      habit_plan_id: number
    }, ExtArgs["result"]["check_in"]>
    composites: {}
  }

  type check_inGetPayload<S extends boolean | null | undefined | check_inDefaultArgs> = $Result.GetResult<Prisma.$check_inPayload, S>

  type check_inCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<check_inFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Check_inCountAggregateInputType | true
    }

  export interface check_inDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['check_in'], meta: { name: 'check_in' } }
    /**
     * Find zero or one Check_in that matches the filter.
     * @param {check_inFindUniqueArgs} args - Arguments to find a Check_in
     * @example
     * // Get one Check_in
     * const check_in = await prisma.check_in.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends check_inFindUniqueArgs>(args: SelectSubset<T, check_inFindUniqueArgs<ExtArgs>>): Prisma__check_inClient<$Result.GetResult<Prisma.$check_inPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Check_in that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {check_inFindUniqueOrThrowArgs} args - Arguments to find a Check_in
     * @example
     * // Get one Check_in
     * const check_in = await prisma.check_in.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends check_inFindUniqueOrThrowArgs>(args: SelectSubset<T, check_inFindUniqueOrThrowArgs<ExtArgs>>): Prisma__check_inClient<$Result.GetResult<Prisma.$check_inPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Check_in that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {check_inFindFirstArgs} args - Arguments to find a Check_in
     * @example
     * // Get one Check_in
     * const check_in = await prisma.check_in.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends check_inFindFirstArgs>(args?: SelectSubset<T, check_inFindFirstArgs<ExtArgs>>): Prisma__check_inClient<$Result.GetResult<Prisma.$check_inPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Check_in that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {check_inFindFirstOrThrowArgs} args - Arguments to find a Check_in
     * @example
     * // Get one Check_in
     * const check_in = await prisma.check_in.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends check_inFindFirstOrThrowArgs>(args?: SelectSubset<T, check_inFindFirstOrThrowArgs<ExtArgs>>): Prisma__check_inClient<$Result.GetResult<Prisma.$check_inPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Check_ins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {check_inFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Check_ins
     * const check_ins = await prisma.check_in.findMany()
     * 
     * // Get first 10 Check_ins
     * const check_ins = await prisma.check_in.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const check_inWithIdOnly = await prisma.check_in.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends check_inFindManyArgs>(args?: SelectSubset<T, check_inFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$check_inPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Check_in.
     * @param {check_inCreateArgs} args - Arguments to create a Check_in.
     * @example
     * // Create one Check_in
     * const Check_in = await prisma.check_in.create({
     *   data: {
     *     // ... data to create a Check_in
     *   }
     * })
     * 
     */
    create<T extends check_inCreateArgs>(args: SelectSubset<T, check_inCreateArgs<ExtArgs>>): Prisma__check_inClient<$Result.GetResult<Prisma.$check_inPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Check_ins.
     * @param {check_inCreateManyArgs} args - Arguments to create many Check_ins.
     * @example
     * // Create many Check_ins
     * const check_in = await prisma.check_in.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends check_inCreateManyArgs>(args?: SelectSubset<T, check_inCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Check_ins and returns the data saved in the database.
     * @param {check_inCreateManyAndReturnArgs} args - Arguments to create many Check_ins.
     * @example
     * // Create many Check_ins
     * const check_in = await prisma.check_in.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Check_ins and only return the `id`
     * const check_inWithIdOnly = await prisma.check_in.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends check_inCreateManyAndReturnArgs>(args?: SelectSubset<T, check_inCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$check_inPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Check_in.
     * @param {check_inDeleteArgs} args - Arguments to delete one Check_in.
     * @example
     * // Delete one Check_in
     * const Check_in = await prisma.check_in.delete({
     *   where: {
     *     // ... filter to delete one Check_in
     *   }
     * })
     * 
     */
    delete<T extends check_inDeleteArgs>(args: SelectSubset<T, check_inDeleteArgs<ExtArgs>>): Prisma__check_inClient<$Result.GetResult<Prisma.$check_inPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Check_in.
     * @param {check_inUpdateArgs} args - Arguments to update one Check_in.
     * @example
     * // Update one Check_in
     * const check_in = await prisma.check_in.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends check_inUpdateArgs>(args: SelectSubset<T, check_inUpdateArgs<ExtArgs>>): Prisma__check_inClient<$Result.GetResult<Prisma.$check_inPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Check_ins.
     * @param {check_inDeleteManyArgs} args - Arguments to filter Check_ins to delete.
     * @example
     * // Delete a few Check_ins
     * const { count } = await prisma.check_in.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends check_inDeleteManyArgs>(args?: SelectSubset<T, check_inDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Check_ins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {check_inUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Check_ins
     * const check_in = await prisma.check_in.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends check_inUpdateManyArgs>(args: SelectSubset<T, check_inUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Check_ins and returns the data updated in the database.
     * @param {check_inUpdateManyAndReturnArgs} args - Arguments to update many Check_ins.
     * @example
     * // Update many Check_ins
     * const check_in = await prisma.check_in.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Check_ins and only return the `id`
     * const check_inWithIdOnly = await prisma.check_in.updateManyAndReturn({
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
    updateManyAndReturn<T extends check_inUpdateManyAndReturnArgs>(args: SelectSubset<T, check_inUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$check_inPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Check_in.
     * @param {check_inUpsertArgs} args - Arguments to update or create a Check_in.
     * @example
     * // Update or create a Check_in
     * const check_in = await prisma.check_in.upsert({
     *   create: {
     *     // ... data to create a Check_in
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Check_in we want to update
     *   }
     * })
     */
    upsert<T extends check_inUpsertArgs>(args: SelectSubset<T, check_inUpsertArgs<ExtArgs>>): Prisma__check_inClient<$Result.GetResult<Prisma.$check_inPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Check_ins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {check_inCountArgs} args - Arguments to filter Check_ins to count.
     * @example
     * // Count the number of Check_ins
     * const count = await prisma.check_in.count({
     *   where: {
     *     // ... the filter for the Check_ins we want to count
     *   }
     * })
    **/
    count<T extends check_inCountArgs>(
      args?: Subset<T, check_inCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Check_inCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Check_in.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Check_inAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Check_inAggregateArgs>(args: Subset<T, Check_inAggregateArgs>): Prisma.PrismaPromise<GetCheck_inAggregateType<T>>

    /**
     * Group by Check_in.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {check_inGroupByArgs} args - Group by arguments.
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
      T extends check_inGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: check_inGroupByArgs['orderBy'] }
        : { orderBy?: check_inGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, check_inGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCheck_inGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the check_in model
   */
  readonly fields: check_inFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for check_in.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__check_inClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    habit_plan<T extends habit_planDefaultArgs<ExtArgs> = {}>(args?: Subset<T, habit_planDefaultArgs<ExtArgs>>): Prisma__habit_planClient<$Result.GetResult<Prisma.$habit_planPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the check_in model
   */
  interface check_inFieldRefs {
    readonly id: FieldRef<"check_in", 'Int'>
    readonly userId: FieldRef<"check_in", 'String'>
    readonly date: FieldRef<"check_in", 'DateTime'>
    readonly status: FieldRef<"check_in", 'Boolean'>
    readonly habit_plan_id: FieldRef<"check_in", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * check_in findUnique
   */
  export type check_inFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the check_in
     */
    select?: check_inSelect<ExtArgs> | null
    /**
     * Omit specific fields from the check_in
     */
    omit?: check_inOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: check_inInclude<ExtArgs> | null
    /**
     * Filter, which check_in to fetch.
     */
    where: check_inWhereUniqueInput
  }

  /**
   * check_in findUniqueOrThrow
   */
  export type check_inFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the check_in
     */
    select?: check_inSelect<ExtArgs> | null
    /**
     * Omit specific fields from the check_in
     */
    omit?: check_inOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: check_inInclude<ExtArgs> | null
    /**
     * Filter, which check_in to fetch.
     */
    where: check_inWhereUniqueInput
  }

  /**
   * check_in findFirst
   */
  export type check_inFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the check_in
     */
    select?: check_inSelect<ExtArgs> | null
    /**
     * Omit specific fields from the check_in
     */
    omit?: check_inOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: check_inInclude<ExtArgs> | null
    /**
     * Filter, which check_in to fetch.
     */
    where?: check_inWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of check_ins to fetch.
     */
    orderBy?: check_inOrderByWithRelationInput | check_inOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for check_ins.
     */
    cursor?: check_inWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` check_ins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` check_ins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of check_ins.
     */
    distinct?: Check_inScalarFieldEnum | Check_inScalarFieldEnum[]
  }

  /**
   * check_in findFirstOrThrow
   */
  export type check_inFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the check_in
     */
    select?: check_inSelect<ExtArgs> | null
    /**
     * Omit specific fields from the check_in
     */
    omit?: check_inOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: check_inInclude<ExtArgs> | null
    /**
     * Filter, which check_in to fetch.
     */
    where?: check_inWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of check_ins to fetch.
     */
    orderBy?: check_inOrderByWithRelationInput | check_inOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for check_ins.
     */
    cursor?: check_inWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` check_ins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` check_ins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of check_ins.
     */
    distinct?: Check_inScalarFieldEnum | Check_inScalarFieldEnum[]
  }

  /**
   * check_in findMany
   */
  export type check_inFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the check_in
     */
    select?: check_inSelect<ExtArgs> | null
    /**
     * Omit specific fields from the check_in
     */
    omit?: check_inOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: check_inInclude<ExtArgs> | null
    /**
     * Filter, which check_ins to fetch.
     */
    where?: check_inWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of check_ins to fetch.
     */
    orderBy?: check_inOrderByWithRelationInput | check_inOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing check_ins.
     */
    cursor?: check_inWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` check_ins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` check_ins.
     */
    skip?: number
    distinct?: Check_inScalarFieldEnum | Check_inScalarFieldEnum[]
  }

  /**
   * check_in create
   */
  export type check_inCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the check_in
     */
    select?: check_inSelect<ExtArgs> | null
    /**
     * Omit specific fields from the check_in
     */
    omit?: check_inOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: check_inInclude<ExtArgs> | null
    /**
     * The data needed to create a check_in.
     */
    data: XOR<check_inCreateInput, check_inUncheckedCreateInput>
  }

  /**
   * check_in createMany
   */
  export type check_inCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many check_ins.
     */
    data: check_inCreateManyInput | check_inCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * check_in createManyAndReturn
   */
  export type check_inCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the check_in
     */
    select?: check_inSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the check_in
     */
    omit?: check_inOmit<ExtArgs> | null
    /**
     * The data used to create many check_ins.
     */
    data: check_inCreateManyInput | check_inCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: check_inIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * check_in update
   */
  export type check_inUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the check_in
     */
    select?: check_inSelect<ExtArgs> | null
    /**
     * Omit specific fields from the check_in
     */
    omit?: check_inOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: check_inInclude<ExtArgs> | null
    /**
     * The data needed to update a check_in.
     */
    data: XOR<check_inUpdateInput, check_inUncheckedUpdateInput>
    /**
     * Choose, which check_in to update.
     */
    where: check_inWhereUniqueInput
  }

  /**
   * check_in updateMany
   */
  export type check_inUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update check_ins.
     */
    data: XOR<check_inUpdateManyMutationInput, check_inUncheckedUpdateManyInput>
    /**
     * Filter which check_ins to update
     */
    where?: check_inWhereInput
    /**
     * Limit how many check_ins to update.
     */
    limit?: number
  }

  /**
   * check_in updateManyAndReturn
   */
  export type check_inUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the check_in
     */
    select?: check_inSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the check_in
     */
    omit?: check_inOmit<ExtArgs> | null
    /**
     * The data used to update check_ins.
     */
    data: XOR<check_inUpdateManyMutationInput, check_inUncheckedUpdateManyInput>
    /**
     * Filter which check_ins to update
     */
    where?: check_inWhereInput
    /**
     * Limit how many check_ins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: check_inIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * check_in upsert
   */
  export type check_inUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the check_in
     */
    select?: check_inSelect<ExtArgs> | null
    /**
     * Omit specific fields from the check_in
     */
    omit?: check_inOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: check_inInclude<ExtArgs> | null
    /**
     * The filter to search for the check_in to update in case it exists.
     */
    where: check_inWhereUniqueInput
    /**
     * In case the check_in found by the `where` argument doesn't exist, create a new check_in with this data.
     */
    create: XOR<check_inCreateInput, check_inUncheckedCreateInput>
    /**
     * In case the check_in was found with the provided `where` argument, update it with this data.
     */
    update: XOR<check_inUpdateInput, check_inUncheckedUpdateInput>
  }

  /**
   * check_in delete
   */
  export type check_inDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the check_in
     */
    select?: check_inSelect<ExtArgs> | null
    /**
     * Omit specific fields from the check_in
     */
    omit?: check_inOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: check_inInclude<ExtArgs> | null
    /**
     * Filter which check_in to delete.
     */
    where: check_inWhereUniqueInput
  }

  /**
   * check_in deleteMany
   */
  export type check_inDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which check_ins to delete
     */
    where?: check_inWhereInput
    /**
     * Limit how many check_ins to delete.
     */
    limit?: number
  }

  /**
   * check_in without action
   */
  export type check_inDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the check_in
     */
    select?: check_inSelect<ExtArgs> | null
    /**
     * Omit specific fields from the check_in
     */
    omit?: check_inOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: check_inInclude<ExtArgs> | null
  }


  /**
   * Model diet
   */

  export type AggregateDiet = {
    _count: DietCountAggregateOutputType | null
    _avg: DietAvgAggregateOutputType | null
    _sum: DietSumAggregateOutputType | null
    _min: DietMinAggregateOutputType | null
    _max: DietMaxAggregateOutputType | null
  }

  export type DietAvgAggregateOutputType = {
    id: number | null
    carbs: number | null
    fat: number | null
    protein: number | null
    calories: number | null
    vitamin_a: number | null
    vitamin_b: number | null
    vitamin_c: number | null
    vitamin_d: number | null
    vitamin_e: number | null
    vitamin_k: number | null
    calcium: number | null
    magnesium: number | null
    potassium: number | null
    sodium: number | null
    iron: number | null
    zinc: number | null
    selenium: number | null
    phosphorus: number | null
    iodine: number | null
    copper: number | null
    manganese: number | null
    chromium: number | null
  }

  export type DietSumAggregateOutputType = {
    id: number | null
    carbs: number | null
    fat: number | null
    protein: number | null
    calories: number | null
    vitamin_a: number | null
    vitamin_b: number | null
    vitamin_c: number | null
    vitamin_d: number | null
    vitamin_e: number | null
    vitamin_k: number | null
    calcium: number | null
    magnesium: number | null
    potassium: number | null
    sodium: number | null
    iron: number | null
    zinc: number | null
    selenium: number | null
    phosphorus: number | null
    iodine: number | null
    copper: number | null
    manganese: number | null
    chromium: number | null
  }

  export type DietMinAggregateOutputType = {
    id: number | null
    name: string | null
    consumed_at: Date | null
    carbs: number | null
    fat: number | null
    protein: number | null
    calories: number | null
    vitamin_a: number | null
    vitamin_b: number | null
    vitamin_c: number | null
    vitamin_d: number | null
    vitamin_e: number | null
    vitamin_k: number | null
    calcium: number | null
    magnesium: number | null
    potassium: number | null
    sodium: number | null
    iron: number | null
    zinc: number | null
    selenium: number | null
    phosphorus: number | null
    iodine: number | null
    copper: number | null
    manganese: number | null
    chromium: number | null
  }

  export type DietMaxAggregateOutputType = {
    id: number | null
    name: string | null
    consumed_at: Date | null
    carbs: number | null
    fat: number | null
    protein: number | null
    calories: number | null
    vitamin_a: number | null
    vitamin_b: number | null
    vitamin_c: number | null
    vitamin_d: number | null
    vitamin_e: number | null
    vitamin_k: number | null
    calcium: number | null
    magnesium: number | null
    potassium: number | null
    sodium: number | null
    iron: number | null
    zinc: number | null
    selenium: number | null
    phosphorus: number | null
    iodine: number | null
    copper: number | null
    manganese: number | null
    chromium: number | null
  }

  export type DietCountAggregateOutputType = {
    id: number
    name: number
    consumed_at: number
    carbs: number
    fat: number
    protein: number
    calories: number
    vitamin_a: number
    vitamin_b: number
    vitamin_c: number
    vitamin_d: number
    vitamin_e: number
    vitamin_k: number
    calcium: number
    magnesium: number
    potassium: number
    sodium: number
    iron: number
    zinc: number
    selenium: number
    phosphorus: number
    iodine: number
    copper: number
    manganese: number
    chromium: number
    _all: number
  }


  export type DietAvgAggregateInputType = {
    id?: true
    carbs?: true
    fat?: true
    protein?: true
    calories?: true
    vitamin_a?: true
    vitamin_b?: true
    vitamin_c?: true
    vitamin_d?: true
    vitamin_e?: true
    vitamin_k?: true
    calcium?: true
    magnesium?: true
    potassium?: true
    sodium?: true
    iron?: true
    zinc?: true
    selenium?: true
    phosphorus?: true
    iodine?: true
    copper?: true
    manganese?: true
    chromium?: true
  }

  export type DietSumAggregateInputType = {
    id?: true
    carbs?: true
    fat?: true
    protein?: true
    calories?: true
    vitamin_a?: true
    vitamin_b?: true
    vitamin_c?: true
    vitamin_d?: true
    vitamin_e?: true
    vitamin_k?: true
    calcium?: true
    magnesium?: true
    potassium?: true
    sodium?: true
    iron?: true
    zinc?: true
    selenium?: true
    phosphorus?: true
    iodine?: true
    copper?: true
    manganese?: true
    chromium?: true
  }

  export type DietMinAggregateInputType = {
    id?: true
    name?: true
    consumed_at?: true
    carbs?: true
    fat?: true
    protein?: true
    calories?: true
    vitamin_a?: true
    vitamin_b?: true
    vitamin_c?: true
    vitamin_d?: true
    vitamin_e?: true
    vitamin_k?: true
    calcium?: true
    magnesium?: true
    potassium?: true
    sodium?: true
    iron?: true
    zinc?: true
    selenium?: true
    phosphorus?: true
    iodine?: true
    copper?: true
    manganese?: true
    chromium?: true
  }

  export type DietMaxAggregateInputType = {
    id?: true
    name?: true
    consumed_at?: true
    carbs?: true
    fat?: true
    protein?: true
    calories?: true
    vitamin_a?: true
    vitamin_b?: true
    vitamin_c?: true
    vitamin_d?: true
    vitamin_e?: true
    vitamin_k?: true
    calcium?: true
    magnesium?: true
    potassium?: true
    sodium?: true
    iron?: true
    zinc?: true
    selenium?: true
    phosphorus?: true
    iodine?: true
    copper?: true
    manganese?: true
    chromium?: true
  }

  export type DietCountAggregateInputType = {
    id?: true
    name?: true
    consumed_at?: true
    carbs?: true
    fat?: true
    protein?: true
    calories?: true
    vitamin_a?: true
    vitamin_b?: true
    vitamin_c?: true
    vitamin_d?: true
    vitamin_e?: true
    vitamin_k?: true
    calcium?: true
    magnesium?: true
    potassium?: true
    sodium?: true
    iron?: true
    zinc?: true
    selenium?: true
    phosphorus?: true
    iodine?: true
    copper?: true
    manganese?: true
    chromium?: true
    _all?: true
  }

  export type DietAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which diet to aggregate.
     */
    where?: dietWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of diets to fetch.
     */
    orderBy?: dietOrderByWithRelationInput | dietOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dietWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` diets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` diets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned diets
    **/
    _count?: true | DietCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DietAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DietSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DietMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DietMaxAggregateInputType
  }

  export type GetDietAggregateType<T extends DietAggregateArgs> = {
        [P in keyof T & keyof AggregateDiet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiet[P]>
      : GetScalarType<T[P], AggregateDiet[P]>
  }




  export type dietGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dietWhereInput
    orderBy?: dietOrderByWithAggregationInput | dietOrderByWithAggregationInput[]
    by: DietScalarFieldEnum[] | DietScalarFieldEnum
    having?: dietScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DietCountAggregateInputType | true
    _avg?: DietAvgAggregateInputType
    _sum?: DietSumAggregateInputType
    _min?: DietMinAggregateInputType
    _max?: DietMaxAggregateInputType
  }

  export type DietGroupByOutputType = {
    id: number
    name: string | null
    consumed_at: Date | null
    carbs: number | null
    fat: number | null
    protein: number | null
    calories: number | null
    vitamin_a: number | null
    vitamin_b: number | null
    vitamin_c: number | null
    vitamin_d: number | null
    vitamin_e: number | null
    vitamin_k: number | null
    calcium: number | null
    magnesium: number | null
    potassium: number | null
    sodium: number | null
    iron: number | null
    zinc: number | null
    selenium: number | null
    phosphorus: number | null
    iodine: number | null
    copper: number | null
    manganese: number | null
    chromium: number | null
    _count: DietCountAggregateOutputType | null
    _avg: DietAvgAggregateOutputType | null
    _sum: DietSumAggregateOutputType | null
    _min: DietMinAggregateOutputType | null
    _max: DietMaxAggregateOutputType | null
  }

  type GetDietGroupByPayload<T extends dietGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DietGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DietGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DietGroupByOutputType[P]>
            : GetScalarType<T[P], DietGroupByOutputType[P]>
        }
      >
    >


  export type dietSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    consumed_at?: boolean
    carbs?: boolean
    fat?: boolean
    protein?: boolean
    calories?: boolean
    vitamin_a?: boolean
    vitamin_b?: boolean
    vitamin_c?: boolean
    vitamin_d?: boolean
    vitamin_e?: boolean
    vitamin_k?: boolean
    calcium?: boolean
    magnesium?: boolean
    potassium?: boolean
    sodium?: boolean
    iron?: boolean
    zinc?: boolean
    selenium?: boolean
    phosphorus?: boolean
    iodine?: boolean
    copper?: boolean
    manganese?: boolean
    chromium?: boolean
  }, ExtArgs["result"]["diet"]>

  export type dietSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    consumed_at?: boolean
    carbs?: boolean
    fat?: boolean
    protein?: boolean
    calories?: boolean
    vitamin_a?: boolean
    vitamin_b?: boolean
    vitamin_c?: boolean
    vitamin_d?: boolean
    vitamin_e?: boolean
    vitamin_k?: boolean
    calcium?: boolean
    magnesium?: boolean
    potassium?: boolean
    sodium?: boolean
    iron?: boolean
    zinc?: boolean
    selenium?: boolean
    phosphorus?: boolean
    iodine?: boolean
    copper?: boolean
    manganese?: boolean
    chromium?: boolean
  }, ExtArgs["result"]["diet"]>

  export type dietSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    consumed_at?: boolean
    carbs?: boolean
    fat?: boolean
    protein?: boolean
    calories?: boolean
    vitamin_a?: boolean
    vitamin_b?: boolean
    vitamin_c?: boolean
    vitamin_d?: boolean
    vitamin_e?: boolean
    vitamin_k?: boolean
    calcium?: boolean
    magnesium?: boolean
    potassium?: boolean
    sodium?: boolean
    iron?: boolean
    zinc?: boolean
    selenium?: boolean
    phosphorus?: boolean
    iodine?: boolean
    copper?: boolean
    manganese?: boolean
    chromium?: boolean
  }, ExtArgs["result"]["diet"]>

  export type dietSelectScalar = {
    id?: boolean
    name?: boolean
    consumed_at?: boolean
    carbs?: boolean
    fat?: boolean
    protein?: boolean
    calories?: boolean
    vitamin_a?: boolean
    vitamin_b?: boolean
    vitamin_c?: boolean
    vitamin_d?: boolean
    vitamin_e?: boolean
    vitamin_k?: boolean
    calcium?: boolean
    magnesium?: boolean
    potassium?: boolean
    sodium?: boolean
    iron?: boolean
    zinc?: boolean
    selenium?: boolean
    phosphorus?: boolean
    iodine?: boolean
    copper?: boolean
    manganese?: boolean
    chromium?: boolean
  }

  export type dietOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "consumed_at" | "carbs" | "fat" | "protein" | "calories" | "vitamin_a" | "vitamin_b" | "vitamin_c" | "vitamin_d" | "vitamin_e" | "vitamin_k" | "calcium" | "magnesium" | "potassium" | "sodium" | "iron" | "zinc" | "selenium" | "phosphorus" | "iodine" | "copper" | "manganese" | "chromium", ExtArgs["result"]["diet"]>

  export type $dietPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "diet"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      consumed_at: Date | null
      carbs: number | null
      fat: number | null
      protein: number | null
      calories: number | null
      vitamin_a: number | null
      vitamin_b: number | null
      vitamin_c: number | null
      vitamin_d: number | null
      vitamin_e: number | null
      vitamin_k: number | null
      calcium: number | null
      magnesium: number | null
      potassium: number | null
      sodium: number | null
      iron: number | null
      zinc: number | null
      selenium: number | null
      phosphorus: number | null
      iodine: number | null
      copper: number | null
      manganese: number | null
      chromium: number | null
    }, ExtArgs["result"]["diet"]>
    composites: {}
  }

  type dietGetPayload<S extends boolean | null | undefined | dietDefaultArgs> = $Result.GetResult<Prisma.$dietPayload, S>

  type dietCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<dietFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DietCountAggregateInputType | true
    }

  export interface dietDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['diet'], meta: { name: 'diet' } }
    /**
     * Find zero or one Diet that matches the filter.
     * @param {dietFindUniqueArgs} args - Arguments to find a Diet
     * @example
     * // Get one Diet
     * const diet = await prisma.diet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends dietFindUniqueArgs>(args: SelectSubset<T, dietFindUniqueArgs<ExtArgs>>): Prisma__dietClient<$Result.GetResult<Prisma.$dietPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Diet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {dietFindUniqueOrThrowArgs} args - Arguments to find a Diet
     * @example
     * // Get one Diet
     * const diet = await prisma.diet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends dietFindUniqueOrThrowArgs>(args: SelectSubset<T, dietFindUniqueOrThrowArgs<ExtArgs>>): Prisma__dietClient<$Result.GetResult<Prisma.$dietPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dietFindFirstArgs} args - Arguments to find a Diet
     * @example
     * // Get one Diet
     * const diet = await prisma.diet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends dietFindFirstArgs>(args?: SelectSubset<T, dietFindFirstArgs<ExtArgs>>): Prisma__dietClient<$Result.GetResult<Prisma.$dietPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dietFindFirstOrThrowArgs} args - Arguments to find a Diet
     * @example
     * // Get one Diet
     * const diet = await prisma.diet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends dietFindFirstOrThrowArgs>(args?: SelectSubset<T, dietFindFirstOrThrowArgs<ExtArgs>>): Prisma__dietClient<$Result.GetResult<Prisma.$dietPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Diets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dietFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Diets
     * const diets = await prisma.diet.findMany()
     * 
     * // Get first 10 Diets
     * const diets = await prisma.diet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dietWithIdOnly = await prisma.diet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends dietFindManyArgs>(args?: SelectSubset<T, dietFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dietPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Diet.
     * @param {dietCreateArgs} args - Arguments to create a Diet.
     * @example
     * // Create one Diet
     * const Diet = await prisma.diet.create({
     *   data: {
     *     // ... data to create a Diet
     *   }
     * })
     * 
     */
    create<T extends dietCreateArgs>(args: SelectSubset<T, dietCreateArgs<ExtArgs>>): Prisma__dietClient<$Result.GetResult<Prisma.$dietPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Diets.
     * @param {dietCreateManyArgs} args - Arguments to create many Diets.
     * @example
     * // Create many Diets
     * const diet = await prisma.diet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends dietCreateManyArgs>(args?: SelectSubset<T, dietCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Diets and returns the data saved in the database.
     * @param {dietCreateManyAndReturnArgs} args - Arguments to create many Diets.
     * @example
     * // Create many Diets
     * const diet = await prisma.diet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Diets and only return the `id`
     * const dietWithIdOnly = await prisma.diet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends dietCreateManyAndReturnArgs>(args?: SelectSubset<T, dietCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dietPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Diet.
     * @param {dietDeleteArgs} args - Arguments to delete one Diet.
     * @example
     * // Delete one Diet
     * const Diet = await prisma.diet.delete({
     *   where: {
     *     // ... filter to delete one Diet
     *   }
     * })
     * 
     */
    delete<T extends dietDeleteArgs>(args: SelectSubset<T, dietDeleteArgs<ExtArgs>>): Prisma__dietClient<$Result.GetResult<Prisma.$dietPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Diet.
     * @param {dietUpdateArgs} args - Arguments to update one Diet.
     * @example
     * // Update one Diet
     * const diet = await prisma.diet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends dietUpdateArgs>(args: SelectSubset<T, dietUpdateArgs<ExtArgs>>): Prisma__dietClient<$Result.GetResult<Prisma.$dietPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Diets.
     * @param {dietDeleteManyArgs} args - Arguments to filter Diets to delete.
     * @example
     * // Delete a few Diets
     * const { count } = await prisma.diet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends dietDeleteManyArgs>(args?: SelectSubset<T, dietDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dietUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Diets
     * const diet = await prisma.diet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends dietUpdateManyArgs>(args: SelectSubset<T, dietUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diets and returns the data updated in the database.
     * @param {dietUpdateManyAndReturnArgs} args - Arguments to update many Diets.
     * @example
     * // Update many Diets
     * const diet = await prisma.diet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Diets and only return the `id`
     * const dietWithIdOnly = await prisma.diet.updateManyAndReturn({
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
    updateManyAndReturn<T extends dietUpdateManyAndReturnArgs>(args: SelectSubset<T, dietUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dietPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Diet.
     * @param {dietUpsertArgs} args - Arguments to update or create a Diet.
     * @example
     * // Update or create a Diet
     * const diet = await prisma.diet.upsert({
     *   create: {
     *     // ... data to create a Diet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Diet we want to update
     *   }
     * })
     */
    upsert<T extends dietUpsertArgs>(args: SelectSubset<T, dietUpsertArgs<ExtArgs>>): Prisma__dietClient<$Result.GetResult<Prisma.$dietPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Diets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dietCountArgs} args - Arguments to filter Diets to count.
     * @example
     * // Count the number of Diets
     * const count = await prisma.diet.count({
     *   where: {
     *     // ... the filter for the Diets we want to count
     *   }
     * })
    **/
    count<T extends dietCountArgs>(
      args?: Subset<T, dietCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DietCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Diet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DietAggregateArgs>(args: Subset<T, DietAggregateArgs>): Prisma.PrismaPromise<GetDietAggregateType<T>>

    /**
     * Group by Diet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dietGroupByArgs} args - Group by arguments.
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
      T extends dietGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: dietGroupByArgs['orderBy'] }
        : { orderBy?: dietGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, dietGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDietGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the diet model
   */
  readonly fields: dietFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for diet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__dietClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the diet model
   */
  interface dietFieldRefs {
    readonly id: FieldRef<"diet", 'Int'>
    readonly name: FieldRef<"diet", 'String'>
    readonly consumed_at: FieldRef<"diet", 'DateTime'>
    readonly carbs: FieldRef<"diet", 'Float'>
    readonly fat: FieldRef<"diet", 'Float'>
    readonly protein: FieldRef<"diet", 'Float'>
    readonly calories: FieldRef<"diet", 'Float'>
    readonly vitamin_a: FieldRef<"diet", 'Float'>
    readonly vitamin_b: FieldRef<"diet", 'Float'>
    readonly vitamin_c: FieldRef<"diet", 'Float'>
    readonly vitamin_d: FieldRef<"diet", 'Float'>
    readonly vitamin_e: FieldRef<"diet", 'Float'>
    readonly vitamin_k: FieldRef<"diet", 'Float'>
    readonly calcium: FieldRef<"diet", 'Float'>
    readonly magnesium: FieldRef<"diet", 'Float'>
    readonly potassium: FieldRef<"diet", 'Float'>
    readonly sodium: FieldRef<"diet", 'Float'>
    readonly iron: FieldRef<"diet", 'Float'>
    readonly zinc: FieldRef<"diet", 'Float'>
    readonly selenium: FieldRef<"diet", 'Float'>
    readonly phosphorus: FieldRef<"diet", 'Float'>
    readonly iodine: FieldRef<"diet", 'Float'>
    readonly copper: FieldRef<"diet", 'Float'>
    readonly manganese: FieldRef<"diet", 'Float'>
    readonly chromium: FieldRef<"diet", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * diet findUnique
   */
  export type dietFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diet
     */
    select?: dietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diet
     */
    omit?: dietOmit<ExtArgs> | null
    /**
     * Filter, which diet to fetch.
     */
    where: dietWhereUniqueInput
  }

  /**
   * diet findUniqueOrThrow
   */
  export type dietFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diet
     */
    select?: dietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diet
     */
    omit?: dietOmit<ExtArgs> | null
    /**
     * Filter, which diet to fetch.
     */
    where: dietWhereUniqueInput
  }

  /**
   * diet findFirst
   */
  export type dietFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diet
     */
    select?: dietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diet
     */
    omit?: dietOmit<ExtArgs> | null
    /**
     * Filter, which diet to fetch.
     */
    where?: dietWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of diets to fetch.
     */
    orderBy?: dietOrderByWithRelationInput | dietOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for diets.
     */
    cursor?: dietWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` diets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` diets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of diets.
     */
    distinct?: DietScalarFieldEnum | DietScalarFieldEnum[]
  }

  /**
   * diet findFirstOrThrow
   */
  export type dietFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diet
     */
    select?: dietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diet
     */
    omit?: dietOmit<ExtArgs> | null
    /**
     * Filter, which diet to fetch.
     */
    where?: dietWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of diets to fetch.
     */
    orderBy?: dietOrderByWithRelationInput | dietOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for diets.
     */
    cursor?: dietWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` diets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` diets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of diets.
     */
    distinct?: DietScalarFieldEnum | DietScalarFieldEnum[]
  }

  /**
   * diet findMany
   */
  export type dietFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diet
     */
    select?: dietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diet
     */
    omit?: dietOmit<ExtArgs> | null
    /**
     * Filter, which diets to fetch.
     */
    where?: dietWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of diets to fetch.
     */
    orderBy?: dietOrderByWithRelationInput | dietOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing diets.
     */
    cursor?: dietWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` diets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` diets.
     */
    skip?: number
    distinct?: DietScalarFieldEnum | DietScalarFieldEnum[]
  }

  /**
   * diet create
   */
  export type dietCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diet
     */
    select?: dietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diet
     */
    omit?: dietOmit<ExtArgs> | null
    /**
     * The data needed to create a diet.
     */
    data?: XOR<dietCreateInput, dietUncheckedCreateInput>
  }

  /**
   * diet createMany
   */
  export type dietCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many diets.
     */
    data: dietCreateManyInput | dietCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * diet createManyAndReturn
   */
  export type dietCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diet
     */
    select?: dietSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the diet
     */
    omit?: dietOmit<ExtArgs> | null
    /**
     * The data used to create many diets.
     */
    data: dietCreateManyInput | dietCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * diet update
   */
  export type dietUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diet
     */
    select?: dietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diet
     */
    omit?: dietOmit<ExtArgs> | null
    /**
     * The data needed to update a diet.
     */
    data: XOR<dietUpdateInput, dietUncheckedUpdateInput>
    /**
     * Choose, which diet to update.
     */
    where: dietWhereUniqueInput
  }

  /**
   * diet updateMany
   */
  export type dietUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update diets.
     */
    data: XOR<dietUpdateManyMutationInput, dietUncheckedUpdateManyInput>
    /**
     * Filter which diets to update
     */
    where?: dietWhereInput
    /**
     * Limit how many diets to update.
     */
    limit?: number
  }

  /**
   * diet updateManyAndReturn
   */
  export type dietUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diet
     */
    select?: dietSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the diet
     */
    omit?: dietOmit<ExtArgs> | null
    /**
     * The data used to update diets.
     */
    data: XOR<dietUpdateManyMutationInput, dietUncheckedUpdateManyInput>
    /**
     * Filter which diets to update
     */
    where?: dietWhereInput
    /**
     * Limit how many diets to update.
     */
    limit?: number
  }

  /**
   * diet upsert
   */
  export type dietUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diet
     */
    select?: dietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diet
     */
    omit?: dietOmit<ExtArgs> | null
    /**
     * The filter to search for the diet to update in case it exists.
     */
    where: dietWhereUniqueInput
    /**
     * In case the diet found by the `where` argument doesn't exist, create a new diet with this data.
     */
    create: XOR<dietCreateInput, dietUncheckedCreateInput>
    /**
     * In case the diet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dietUpdateInput, dietUncheckedUpdateInput>
  }

  /**
   * diet delete
   */
  export type dietDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diet
     */
    select?: dietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diet
     */
    omit?: dietOmit<ExtArgs> | null
    /**
     * Filter which diet to delete.
     */
    where: dietWhereUniqueInput
  }

  /**
   * diet deleteMany
   */
  export type dietDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which diets to delete
     */
    where?: dietWhereInput
    /**
     * Limit how many diets to delete.
     */
    limit?: number
  }

  /**
   * diet without action
   */
  export type dietDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diet
     */
    select?: dietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diet
     */
    omit?: dietOmit<ExtArgs> | null
  }


  /**
   * Model habit_plan
   */

  export type AggregateHabit_plan = {
    _count: Habit_planCountAggregateOutputType | null
    _avg: Habit_planAvgAggregateOutputType | null
    _sum: Habit_planSumAggregateOutputType | null
    _min: Habit_planMinAggregateOutputType | null
    _max: Habit_planMaxAggregateOutputType | null
  }

  export type Habit_planAvgAggregateOutputType = {
    id: number | null
    duration: number | null
  }

  export type Habit_planSumAggregateOutputType = {
    id: number | null
    duration: number | null
  }

  export type Habit_planMinAggregateOutputType = {
    id: number | null
    created_at: Date | null
    goal: string | null
    duration: number | null
    action: string | null
    userId: string | null
    completed: boolean | null
  }

  export type Habit_planMaxAggregateOutputType = {
    id: number | null
    created_at: Date | null
    goal: string | null
    duration: number | null
    action: string | null
    userId: string | null
    completed: boolean | null
  }

  export type Habit_planCountAggregateOutputType = {
    id: number
    created_at: number
    goal: number
    duration: number
    action: number
    userId: number
    completed: number
    _all: number
  }


  export type Habit_planAvgAggregateInputType = {
    id?: true
    duration?: true
  }

  export type Habit_planSumAggregateInputType = {
    id?: true
    duration?: true
  }

  export type Habit_planMinAggregateInputType = {
    id?: true
    created_at?: true
    goal?: true
    duration?: true
    action?: true
    userId?: true
    completed?: true
  }

  export type Habit_planMaxAggregateInputType = {
    id?: true
    created_at?: true
    goal?: true
    duration?: true
    action?: true
    userId?: true
    completed?: true
  }

  export type Habit_planCountAggregateInputType = {
    id?: true
    created_at?: true
    goal?: true
    duration?: true
    action?: true
    userId?: true
    completed?: true
    _all?: true
  }

  export type Habit_planAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which habit_plan to aggregate.
     */
    where?: habit_planWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of habit_plans to fetch.
     */
    orderBy?: habit_planOrderByWithRelationInput | habit_planOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: habit_planWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` habit_plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` habit_plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned habit_plans
    **/
    _count?: true | Habit_planCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Habit_planAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Habit_planSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Habit_planMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Habit_planMaxAggregateInputType
  }

  export type GetHabit_planAggregateType<T extends Habit_planAggregateArgs> = {
        [P in keyof T & keyof AggregateHabit_plan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHabit_plan[P]>
      : GetScalarType<T[P], AggregateHabit_plan[P]>
  }




  export type habit_planGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: habit_planWhereInput
    orderBy?: habit_planOrderByWithAggregationInput | habit_planOrderByWithAggregationInput[]
    by: Habit_planScalarFieldEnum[] | Habit_planScalarFieldEnum
    having?: habit_planScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Habit_planCountAggregateInputType | true
    _avg?: Habit_planAvgAggregateInputType
    _sum?: Habit_planSumAggregateInputType
    _min?: Habit_planMinAggregateInputType
    _max?: Habit_planMaxAggregateInputType
  }

  export type Habit_planGroupByOutputType = {
    id: number
    created_at: Date | null
    goal: string | null
    duration: number | null
    action: string | null
    userId: string | null
    completed: boolean | null
    _count: Habit_planCountAggregateOutputType | null
    _avg: Habit_planAvgAggregateOutputType | null
    _sum: Habit_planSumAggregateOutputType | null
    _min: Habit_planMinAggregateOutputType | null
    _max: Habit_planMaxAggregateOutputType | null
  }

  type GetHabit_planGroupByPayload<T extends habit_planGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Habit_planGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Habit_planGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Habit_planGroupByOutputType[P]>
            : GetScalarType<T[P], Habit_planGroupByOutputType[P]>
        }
      >
    >


  export type habit_planSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    goal?: boolean
    duration?: boolean
    action?: boolean
    userId?: boolean
    completed?: boolean
    check_in?: boolean | habit_plan$check_inArgs<ExtArgs>
    _count?: boolean | Habit_planCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habit_plan"]>

  export type habit_planSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    goal?: boolean
    duration?: boolean
    action?: boolean
    userId?: boolean
    completed?: boolean
  }, ExtArgs["result"]["habit_plan"]>

  export type habit_planSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    goal?: boolean
    duration?: boolean
    action?: boolean
    userId?: boolean
    completed?: boolean
  }, ExtArgs["result"]["habit_plan"]>

  export type habit_planSelectScalar = {
    id?: boolean
    created_at?: boolean
    goal?: boolean
    duration?: boolean
    action?: boolean
    userId?: boolean
    completed?: boolean
  }

  export type habit_planOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "goal" | "duration" | "action" | "userId" | "completed", ExtArgs["result"]["habit_plan"]>
  export type habit_planInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    check_in?: boolean | habit_plan$check_inArgs<ExtArgs>
    _count?: boolean | Habit_planCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type habit_planIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type habit_planIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $habit_planPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "habit_plan"
    objects: {
      check_in: Prisma.$check_inPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      created_at: Date | null
      goal: string | null
      duration: number | null
      action: string | null
      userId: string | null
      completed: boolean | null
    }, ExtArgs["result"]["habit_plan"]>
    composites: {}
  }

  type habit_planGetPayload<S extends boolean | null | undefined | habit_planDefaultArgs> = $Result.GetResult<Prisma.$habit_planPayload, S>

  type habit_planCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<habit_planFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Habit_planCountAggregateInputType | true
    }

  export interface habit_planDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['habit_plan'], meta: { name: 'habit_plan' } }
    /**
     * Find zero or one Habit_plan that matches the filter.
     * @param {habit_planFindUniqueArgs} args - Arguments to find a Habit_plan
     * @example
     * // Get one Habit_plan
     * const habit_plan = await prisma.habit_plan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends habit_planFindUniqueArgs>(args: SelectSubset<T, habit_planFindUniqueArgs<ExtArgs>>): Prisma__habit_planClient<$Result.GetResult<Prisma.$habit_planPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Habit_plan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {habit_planFindUniqueOrThrowArgs} args - Arguments to find a Habit_plan
     * @example
     * // Get one Habit_plan
     * const habit_plan = await prisma.habit_plan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends habit_planFindUniqueOrThrowArgs>(args: SelectSubset<T, habit_planFindUniqueOrThrowArgs<ExtArgs>>): Prisma__habit_planClient<$Result.GetResult<Prisma.$habit_planPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Habit_plan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {habit_planFindFirstArgs} args - Arguments to find a Habit_plan
     * @example
     * // Get one Habit_plan
     * const habit_plan = await prisma.habit_plan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends habit_planFindFirstArgs>(args?: SelectSubset<T, habit_planFindFirstArgs<ExtArgs>>): Prisma__habit_planClient<$Result.GetResult<Prisma.$habit_planPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Habit_plan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {habit_planFindFirstOrThrowArgs} args - Arguments to find a Habit_plan
     * @example
     * // Get one Habit_plan
     * const habit_plan = await prisma.habit_plan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends habit_planFindFirstOrThrowArgs>(args?: SelectSubset<T, habit_planFindFirstOrThrowArgs<ExtArgs>>): Prisma__habit_planClient<$Result.GetResult<Prisma.$habit_planPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Habit_plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {habit_planFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Habit_plans
     * const habit_plans = await prisma.habit_plan.findMany()
     * 
     * // Get first 10 Habit_plans
     * const habit_plans = await prisma.habit_plan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const habit_planWithIdOnly = await prisma.habit_plan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends habit_planFindManyArgs>(args?: SelectSubset<T, habit_planFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$habit_planPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Habit_plan.
     * @param {habit_planCreateArgs} args - Arguments to create a Habit_plan.
     * @example
     * // Create one Habit_plan
     * const Habit_plan = await prisma.habit_plan.create({
     *   data: {
     *     // ... data to create a Habit_plan
     *   }
     * })
     * 
     */
    create<T extends habit_planCreateArgs>(args: SelectSubset<T, habit_planCreateArgs<ExtArgs>>): Prisma__habit_planClient<$Result.GetResult<Prisma.$habit_planPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Habit_plans.
     * @param {habit_planCreateManyArgs} args - Arguments to create many Habit_plans.
     * @example
     * // Create many Habit_plans
     * const habit_plan = await prisma.habit_plan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends habit_planCreateManyArgs>(args?: SelectSubset<T, habit_planCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Habit_plans and returns the data saved in the database.
     * @param {habit_planCreateManyAndReturnArgs} args - Arguments to create many Habit_plans.
     * @example
     * // Create many Habit_plans
     * const habit_plan = await prisma.habit_plan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Habit_plans and only return the `id`
     * const habit_planWithIdOnly = await prisma.habit_plan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends habit_planCreateManyAndReturnArgs>(args?: SelectSubset<T, habit_planCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$habit_planPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Habit_plan.
     * @param {habit_planDeleteArgs} args - Arguments to delete one Habit_plan.
     * @example
     * // Delete one Habit_plan
     * const Habit_plan = await prisma.habit_plan.delete({
     *   where: {
     *     // ... filter to delete one Habit_plan
     *   }
     * })
     * 
     */
    delete<T extends habit_planDeleteArgs>(args: SelectSubset<T, habit_planDeleteArgs<ExtArgs>>): Prisma__habit_planClient<$Result.GetResult<Prisma.$habit_planPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Habit_plan.
     * @param {habit_planUpdateArgs} args - Arguments to update one Habit_plan.
     * @example
     * // Update one Habit_plan
     * const habit_plan = await prisma.habit_plan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends habit_planUpdateArgs>(args: SelectSubset<T, habit_planUpdateArgs<ExtArgs>>): Prisma__habit_planClient<$Result.GetResult<Prisma.$habit_planPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Habit_plans.
     * @param {habit_planDeleteManyArgs} args - Arguments to filter Habit_plans to delete.
     * @example
     * // Delete a few Habit_plans
     * const { count } = await prisma.habit_plan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends habit_planDeleteManyArgs>(args?: SelectSubset<T, habit_planDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Habit_plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {habit_planUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Habit_plans
     * const habit_plan = await prisma.habit_plan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends habit_planUpdateManyArgs>(args: SelectSubset<T, habit_planUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Habit_plans and returns the data updated in the database.
     * @param {habit_planUpdateManyAndReturnArgs} args - Arguments to update many Habit_plans.
     * @example
     * // Update many Habit_plans
     * const habit_plan = await prisma.habit_plan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Habit_plans and only return the `id`
     * const habit_planWithIdOnly = await prisma.habit_plan.updateManyAndReturn({
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
    updateManyAndReturn<T extends habit_planUpdateManyAndReturnArgs>(args: SelectSubset<T, habit_planUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$habit_planPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Habit_plan.
     * @param {habit_planUpsertArgs} args - Arguments to update or create a Habit_plan.
     * @example
     * // Update or create a Habit_plan
     * const habit_plan = await prisma.habit_plan.upsert({
     *   create: {
     *     // ... data to create a Habit_plan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Habit_plan we want to update
     *   }
     * })
     */
    upsert<T extends habit_planUpsertArgs>(args: SelectSubset<T, habit_planUpsertArgs<ExtArgs>>): Prisma__habit_planClient<$Result.GetResult<Prisma.$habit_planPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Habit_plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {habit_planCountArgs} args - Arguments to filter Habit_plans to count.
     * @example
     * // Count the number of Habit_plans
     * const count = await prisma.habit_plan.count({
     *   where: {
     *     // ... the filter for the Habit_plans we want to count
     *   }
     * })
    **/
    count<T extends habit_planCountArgs>(
      args?: Subset<T, habit_planCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Habit_planCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Habit_plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Habit_planAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Habit_planAggregateArgs>(args: Subset<T, Habit_planAggregateArgs>): Prisma.PrismaPromise<GetHabit_planAggregateType<T>>

    /**
     * Group by Habit_plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {habit_planGroupByArgs} args - Group by arguments.
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
      T extends habit_planGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: habit_planGroupByArgs['orderBy'] }
        : { orderBy?: habit_planGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, habit_planGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabit_planGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the habit_plan model
   */
  readonly fields: habit_planFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for habit_plan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__habit_planClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    check_in<T extends habit_plan$check_inArgs<ExtArgs> = {}>(args?: Subset<T, habit_plan$check_inArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$check_inPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the habit_plan model
   */
  interface habit_planFieldRefs {
    readonly id: FieldRef<"habit_plan", 'Int'>
    readonly created_at: FieldRef<"habit_plan", 'DateTime'>
    readonly goal: FieldRef<"habit_plan", 'String'>
    readonly duration: FieldRef<"habit_plan", 'Int'>
    readonly action: FieldRef<"habit_plan", 'String'>
    readonly userId: FieldRef<"habit_plan", 'String'>
    readonly completed: FieldRef<"habit_plan", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * habit_plan findUnique
   */
  export type habit_planFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the habit_plan
     */
    select?: habit_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the habit_plan
     */
    omit?: habit_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: habit_planInclude<ExtArgs> | null
    /**
     * Filter, which habit_plan to fetch.
     */
    where: habit_planWhereUniqueInput
  }

  /**
   * habit_plan findUniqueOrThrow
   */
  export type habit_planFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the habit_plan
     */
    select?: habit_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the habit_plan
     */
    omit?: habit_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: habit_planInclude<ExtArgs> | null
    /**
     * Filter, which habit_plan to fetch.
     */
    where: habit_planWhereUniqueInput
  }

  /**
   * habit_plan findFirst
   */
  export type habit_planFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the habit_plan
     */
    select?: habit_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the habit_plan
     */
    omit?: habit_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: habit_planInclude<ExtArgs> | null
    /**
     * Filter, which habit_plan to fetch.
     */
    where?: habit_planWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of habit_plans to fetch.
     */
    orderBy?: habit_planOrderByWithRelationInput | habit_planOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for habit_plans.
     */
    cursor?: habit_planWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` habit_plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` habit_plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of habit_plans.
     */
    distinct?: Habit_planScalarFieldEnum | Habit_planScalarFieldEnum[]
  }

  /**
   * habit_plan findFirstOrThrow
   */
  export type habit_planFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the habit_plan
     */
    select?: habit_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the habit_plan
     */
    omit?: habit_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: habit_planInclude<ExtArgs> | null
    /**
     * Filter, which habit_plan to fetch.
     */
    where?: habit_planWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of habit_plans to fetch.
     */
    orderBy?: habit_planOrderByWithRelationInput | habit_planOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for habit_plans.
     */
    cursor?: habit_planWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` habit_plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` habit_plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of habit_plans.
     */
    distinct?: Habit_planScalarFieldEnum | Habit_planScalarFieldEnum[]
  }

  /**
   * habit_plan findMany
   */
  export type habit_planFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the habit_plan
     */
    select?: habit_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the habit_plan
     */
    omit?: habit_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: habit_planInclude<ExtArgs> | null
    /**
     * Filter, which habit_plans to fetch.
     */
    where?: habit_planWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of habit_plans to fetch.
     */
    orderBy?: habit_planOrderByWithRelationInput | habit_planOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing habit_plans.
     */
    cursor?: habit_planWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` habit_plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` habit_plans.
     */
    skip?: number
    distinct?: Habit_planScalarFieldEnum | Habit_planScalarFieldEnum[]
  }

  /**
   * habit_plan create
   */
  export type habit_planCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the habit_plan
     */
    select?: habit_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the habit_plan
     */
    omit?: habit_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: habit_planInclude<ExtArgs> | null
    /**
     * The data needed to create a habit_plan.
     */
    data?: XOR<habit_planCreateInput, habit_planUncheckedCreateInput>
  }

  /**
   * habit_plan createMany
   */
  export type habit_planCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many habit_plans.
     */
    data: habit_planCreateManyInput | habit_planCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * habit_plan createManyAndReturn
   */
  export type habit_planCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the habit_plan
     */
    select?: habit_planSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the habit_plan
     */
    omit?: habit_planOmit<ExtArgs> | null
    /**
     * The data used to create many habit_plans.
     */
    data: habit_planCreateManyInput | habit_planCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * habit_plan update
   */
  export type habit_planUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the habit_plan
     */
    select?: habit_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the habit_plan
     */
    omit?: habit_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: habit_planInclude<ExtArgs> | null
    /**
     * The data needed to update a habit_plan.
     */
    data: XOR<habit_planUpdateInput, habit_planUncheckedUpdateInput>
    /**
     * Choose, which habit_plan to update.
     */
    where: habit_planWhereUniqueInput
  }

  /**
   * habit_plan updateMany
   */
  export type habit_planUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update habit_plans.
     */
    data: XOR<habit_planUpdateManyMutationInput, habit_planUncheckedUpdateManyInput>
    /**
     * Filter which habit_plans to update
     */
    where?: habit_planWhereInput
    /**
     * Limit how many habit_plans to update.
     */
    limit?: number
  }

  /**
   * habit_plan updateManyAndReturn
   */
  export type habit_planUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the habit_plan
     */
    select?: habit_planSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the habit_plan
     */
    omit?: habit_planOmit<ExtArgs> | null
    /**
     * The data used to update habit_plans.
     */
    data: XOR<habit_planUpdateManyMutationInput, habit_planUncheckedUpdateManyInput>
    /**
     * Filter which habit_plans to update
     */
    where?: habit_planWhereInput
    /**
     * Limit how many habit_plans to update.
     */
    limit?: number
  }

  /**
   * habit_plan upsert
   */
  export type habit_planUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the habit_plan
     */
    select?: habit_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the habit_plan
     */
    omit?: habit_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: habit_planInclude<ExtArgs> | null
    /**
     * The filter to search for the habit_plan to update in case it exists.
     */
    where: habit_planWhereUniqueInput
    /**
     * In case the habit_plan found by the `where` argument doesn't exist, create a new habit_plan with this data.
     */
    create: XOR<habit_planCreateInput, habit_planUncheckedCreateInput>
    /**
     * In case the habit_plan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<habit_planUpdateInput, habit_planUncheckedUpdateInput>
  }

  /**
   * habit_plan delete
   */
  export type habit_planDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the habit_plan
     */
    select?: habit_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the habit_plan
     */
    omit?: habit_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: habit_planInclude<ExtArgs> | null
    /**
     * Filter which habit_plan to delete.
     */
    where: habit_planWhereUniqueInput
  }

  /**
   * habit_plan deleteMany
   */
  export type habit_planDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which habit_plans to delete
     */
    where?: habit_planWhereInput
    /**
     * Limit how many habit_plans to delete.
     */
    limit?: number
  }

  /**
   * habit_plan.check_in
   */
  export type habit_plan$check_inArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the check_in
     */
    select?: check_inSelect<ExtArgs> | null
    /**
     * Omit specific fields from the check_in
     */
    omit?: check_inOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: check_inInclude<ExtArgs> | null
    where?: check_inWhereInput
    orderBy?: check_inOrderByWithRelationInput | check_inOrderByWithRelationInput[]
    cursor?: check_inWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Check_inScalarFieldEnum | Check_inScalarFieldEnum[]
  }

  /**
   * habit_plan without action
   */
  export type habit_planDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the habit_plan
     */
    select?: habit_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the habit_plan
     */
    omit?: habit_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: habit_planInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    userId: string | null
    pushSubscription: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    pushSubscription: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    userId: number
    pushSubscription: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    userId?: true
    pushSubscription?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    userId?: true
    pushSubscription?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    userId?: true
    pushSubscription?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    userId: string | null
    pushSubscription: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    pushSubscription?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    pushSubscription?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    pushSubscription?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    userId?: boolean
    pushSubscription?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "pushSubscription", ExtArgs["result"]["user"]>

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string | null
      pushSubscription: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly userId: FieldRef<"user", 'String'>
    readonly pushSubscription: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data?: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
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


  export const Alembic_versionScalarFieldEnum: {
    version_num: 'version_num'
  };

  export type Alembic_versionScalarFieldEnum = (typeof Alembic_versionScalarFieldEnum)[keyof typeof Alembic_versionScalarFieldEnum]


  export const Check_inScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    status: 'status',
    habit_plan_id: 'habit_plan_id'
  };

  export type Check_inScalarFieldEnum = (typeof Check_inScalarFieldEnum)[keyof typeof Check_inScalarFieldEnum]


  export const DietScalarFieldEnum: {
    id: 'id',
    name: 'name',
    consumed_at: 'consumed_at',
    carbs: 'carbs',
    fat: 'fat',
    protein: 'protein',
    calories: 'calories',
    vitamin_a: 'vitamin_a',
    vitamin_b: 'vitamin_b',
    vitamin_c: 'vitamin_c',
    vitamin_d: 'vitamin_d',
    vitamin_e: 'vitamin_e',
    vitamin_k: 'vitamin_k',
    calcium: 'calcium',
    magnesium: 'magnesium',
    potassium: 'potassium',
    sodium: 'sodium',
    iron: 'iron',
    zinc: 'zinc',
    selenium: 'selenium',
    phosphorus: 'phosphorus',
    iodine: 'iodine',
    copper: 'copper',
    manganese: 'manganese',
    chromium: 'chromium'
  };

  export type DietScalarFieldEnum = (typeof DietScalarFieldEnum)[keyof typeof DietScalarFieldEnum]


  export const Habit_planScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    goal: 'goal',
    duration: 'duration',
    action: 'action',
    userId: 'userId',
    completed: 'completed'
  };

  export type Habit_planScalarFieldEnum = (typeof Habit_planScalarFieldEnum)[keyof typeof Habit_planScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    pushSubscription: 'pushSubscription'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type alembic_versionWhereInput = {
    AND?: alembic_versionWhereInput | alembic_versionWhereInput[]
    OR?: alembic_versionWhereInput[]
    NOT?: alembic_versionWhereInput | alembic_versionWhereInput[]
    version_num?: StringFilter<"alembic_version"> | string
  }

  export type alembic_versionOrderByWithRelationInput = {
    version_num?: SortOrder
  }

  export type alembic_versionWhereUniqueInput = Prisma.AtLeast<{
    version_num?: string
    AND?: alembic_versionWhereInput | alembic_versionWhereInput[]
    OR?: alembic_versionWhereInput[]
    NOT?: alembic_versionWhereInput | alembic_versionWhereInput[]
  }, "version_num">

  export type alembic_versionOrderByWithAggregationInput = {
    version_num?: SortOrder
    _count?: alembic_versionCountOrderByAggregateInput
    _max?: alembic_versionMaxOrderByAggregateInput
    _min?: alembic_versionMinOrderByAggregateInput
  }

  export type alembic_versionScalarWhereWithAggregatesInput = {
    AND?: alembic_versionScalarWhereWithAggregatesInput | alembic_versionScalarWhereWithAggregatesInput[]
    OR?: alembic_versionScalarWhereWithAggregatesInput[]
    NOT?: alembic_versionScalarWhereWithAggregatesInput | alembic_versionScalarWhereWithAggregatesInput[]
    version_num?: StringWithAggregatesFilter<"alembic_version"> | string
  }

  export type check_inWhereInput = {
    AND?: check_inWhereInput | check_inWhereInput[]
    OR?: check_inWhereInput[]
    NOT?: check_inWhereInput | check_inWhereInput[]
    id?: IntFilter<"check_in"> | number
    userId?: StringNullableFilter<"check_in"> | string | null
    date?: DateTimeNullableFilter<"check_in"> | Date | string | null
    status?: BoolNullableFilter<"check_in"> | boolean | null
    habit_plan_id?: IntFilter<"check_in"> | number
    habit_plan?: XOR<Habit_planScalarRelationFilter, habit_planWhereInput>
  }

  export type check_inOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    habit_plan_id?: SortOrder
    habit_plan?: habit_planOrderByWithRelationInput
  }

  export type check_inWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: check_inWhereInput | check_inWhereInput[]
    OR?: check_inWhereInput[]
    NOT?: check_inWhereInput | check_inWhereInput[]
    userId?: StringNullableFilter<"check_in"> | string | null
    date?: DateTimeNullableFilter<"check_in"> | Date | string | null
    status?: BoolNullableFilter<"check_in"> | boolean | null
    habit_plan_id?: IntFilter<"check_in"> | number
    habit_plan?: XOR<Habit_planScalarRelationFilter, habit_planWhereInput>
  }, "id">

  export type check_inOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    habit_plan_id?: SortOrder
    _count?: check_inCountOrderByAggregateInput
    _avg?: check_inAvgOrderByAggregateInput
    _max?: check_inMaxOrderByAggregateInput
    _min?: check_inMinOrderByAggregateInput
    _sum?: check_inSumOrderByAggregateInput
  }

  export type check_inScalarWhereWithAggregatesInput = {
    AND?: check_inScalarWhereWithAggregatesInput | check_inScalarWhereWithAggregatesInput[]
    OR?: check_inScalarWhereWithAggregatesInput[]
    NOT?: check_inScalarWhereWithAggregatesInput | check_inScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"check_in"> | number
    userId?: StringNullableWithAggregatesFilter<"check_in"> | string | null
    date?: DateTimeNullableWithAggregatesFilter<"check_in"> | Date | string | null
    status?: BoolNullableWithAggregatesFilter<"check_in"> | boolean | null
    habit_plan_id?: IntWithAggregatesFilter<"check_in"> | number
  }

  export type dietWhereInput = {
    AND?: dietWhereInput | dietWhereInput[]
    OR?: dietWhereInput[]
    NOT?: dietWhereInput | dietWhereInput[]
    id?: IntFilter<"diet"> | number
    name?: StringNullableFilter<"diet"> | string | null
    consumed_at?: DateTimeNullableFilter<"diet"> | Date | string | null
    carbs?: FloatNullableFilter<"diet"> | number | null
    fat?: FloatNullableFilter<"diet"> | number | null
    protein?: FloatNullableFilter<"diet"> | number | null
    calories?: FloatNullableFilter<"diet"> | number | null
    vitamin_a?: FloatNullableFilter<"diet"> | number | null
    vitamin_b?: FloatNullableFilter<"diet"> | number | null
    vitamin_c?: FloatNullableFilter<"diet"> | number | null
    vitamin_d?: FloatNullableFilter<"diet"> | number | null
    vitamin_e?: FloatNullableFilter<"diet"> | number | null
    vitamin_k?: FloatNullableFilter<"diet"> | number | null
    calcium?: FloatNullableFilter<"diet"> | number | null
    magnesium?: FloatNullableFilter<"diet"> | number | null
    potassium?: FloatNullableFilter<"diet"> | number | null
    sodium?: FloatNullableFilter<"diet"> | number | null
    iron?: FloatNullableFilter<"diet"> | number | null
    zinc?: FloatNullableFilter<"diet"> | number | null
    selenium?: FloatNullableFilter<"diet"> | number | null
    phosphorus?: FloatNullableFilter<"diet"> | number | null
    iodine?: FloatNullableFilter<"diet"> | number | null
    copper?: FloatNullableFilter<"diet"> | number | null
    manganese?: FloatNullableFilter<"diet"> | number | null
    chromium?: FloatNullableFilter<"diet"> | number | null
  }

  export type dietOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    consumed_at?: SortOrderInput | SortOrder
    carbs?: SortOrderInput | SortOrder
    fat?: SortOrderInput | SortOrder
    protein?: SortOrderInput | SortOrder
    calories?: SortOrderInput | SortOrder
    vitamin_a?: SortOrderInput | SortOrder
    vitamin_b?: SortOrderInput | SortOrder
    vitamin_c?: SortOrderInput | SortOrder
    vitamin_d?: SortOrderInput | SortOrder
    vitamin_e?: SortOrderInput | SortOrder
    vitamin_k?: SortOrderInput | SortOrder
    calcium?: SortOrderInput | SortOrder
    magnesium?: SortOrderInput | SortOrder
    potassium?: SortOrderInput | SortOrder
    sodium?: SortOrderInput | SortOrder
    iron?: SortOrderInput | SortOrder
    zinc?: SortOrderInput | SortOrder
    selenium?: SortOrderInput | SortOrder
    phosphorus?: SortOrderInput | SortOrder
    iodine?: SortOrderInput | SortOrder
    copper?: SortOrderInput | SortOrder
    manganese?: SortOrderInput | SortOrder
    chromium?: SortOrderInput | SortOrder
  }

  export type dietWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: dietWhereInput | dietWhereInput[]
    OR?: dietWhereInput[]
    NOT?: dietWhereInput | dietWhereInput[]
    name?: StringNullableFilter<"diet"> | string | null
    consumed_at?: DateTimeNullableFilter<"diet"> | Date | string | null
    carbs?: FloatNullableFilter<"diet"> | number | null
    fat?: FloatNullableFilter<"diet"> | number | null
    protein?: FloatNullableFilter<"diet"> | number | null
    calories?: FloatNullableFilter<"diet"> | number | null
    vitamin_a?: FloatNullableFilter<"diet"> | number | null
    vitamin_b?: FloatNullableFilter<"diet"> | number | null
    vitamin_c?: FloatNullableFilter<"diet"> | number | null
    vitamin_d?: FloatNullableFilter<"diet"> | number | null
    vitamin_e?: FloatNullableFilter<"diet"> | number | null
    vitamin_k?: FloatNullableFilter<"diet"> | number | null
    calcium?: FloatNullableFilter<"diet"> | number | null
    magnesium?: FloatNullableFilter<"diet"> | number | null
    potassium?: FloatNullableFilter<"diet"> | number | null
    sodium?: FloatNullableFilter<"diet"> | number | null
    iron?: FloatNullableFilter<"diet"> | number | null
    zinc?: FloatNullableFilter<"diet"> | number | null
    selenium?: FloatNullableFilter<"diet"> | number | null
    phosphorus?: FloatNullableFilter<"diet"> | number | null
    iodine?: FloatNullableFilter<"diet"> | number | null
    copper?: FloatNullableFilter<"diet"> | number | null
    manganese?: FloatNullableFilter<"diet"> | number | null
    chromium?: FloatNullableFilter<"diet"> | number | null
  }, "id">

  export type dietOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    consumed_at?: SortOrderInput | SortOrder
    carbs?: SortOrderInput | SortOrder
    fat?: SortOrderInput | SortOrder
    protein?: SortOrderInput | SortOrder
    calories?: SortOrderInput | SortOrder
    vitamin_a?: SortOrderInput | SortOrder
    vitamin_b?: SortOrderInput | SortOrder
    vitamin_c?: SortOrderInput | SortOrder
    vitamin_d?: SortOrderInput | SortOrder
    vitamin_e?: SortOrderInput | SortOrder
    vitamin_k?: SortOrderInput | SortOrder
    calcium?: SortOrderInput | SortOrder
    magnesium?: SortOrderInput | SortOrder
    potassium?: SortOrderInput | SortOrder
    sodium?: SortOrderInput | SortOrder
    iron?: SortOrderInput | SortOrder
    zinc?: SortOrderInput | SortOrder
    selenium?: SortOrderInput | SortOrder
    phosphorus?: SortOrderInput | SortOrder
    iodine?: SortOrderInput | SortOrder
    copper?: SortOrderInput | SortOrder
    manganese?: SortOrderInput | SortOrder
    chromium?: SortOrderInput | SortOrder
    _count?: dietCountOrderByAggregateInput
    _avg?: dietAvgOrderByAggregateInput
    _max?: dietMaxOrderByAggregateInput
    _min?: dietMinOrderByAggregateInput
    _sum?: dietSumOrderByAggregateInput
  }

  export type dietScalarWhereWithAggregatesInput = {
    AND?: dietScalarWhereWithAggregatesInput | dietScalarWhereWithAggregatesInput[]
    OR?: dietScalarWhereWithAggregatesInput[]
    NOT?: dietScalarWhereWithAggregatesInput | dietScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"diet"> | number
    name?: StringNullableWithAggregatesFilter<"diet"> | string | null
    consumed_at?: DateTimeNullableWithAggregatesFilter<"diet"> | Date | string | null
    carbs?: FloatNullableWithAggregatesFilter<"diet"> | number | null
    fat?: FloatNullableWithAggregatesFilter<"diet"> | number | null
    protein?: FloatNullableWithAggregatesFilter<"diet"> | number | null
    calories?: FloatNullableWithAggregatesFilter<"diet"> | number | null
    vitamin_a?: FloatNullableWithAggregatesFilter<"diet"> | number | null
    vitamin_b?: FloatNullableWithAggregatesFilter<"diet"> | number | null
    vitamin_c?: FloatNullableWithAggregatesFilter<"diet"> | number | null
    vitamin_d?: FloatNullableWithAggregatesFilter<"diet"> | number | null
    vitamin_e?: FloatNullableWithAggregatesFilter<"diet"> | number | null
    vitamin_k?: FloatNullableWithAggregatesFilter<"diet"> | number | null
    calcium?: FloatNullableWithAggregatesFilter<"diet"> | number | null
    magnesium?: FloatNullableWithAggregatesFilter<"diet"> | number | null
    potassium?: FloatNullableWithAggregatesFilter<"diet"> | number | null
    sodium?: FloatNullableWithAggregatesFilter<"diet"> | number | null
    iron?: FloatNullableWithAggregatesFilter<"diet"> | number | null
    zinc?: FloatNullableWithAggregatesFilter<"diet"> | number | null
    selenium?: FloatNullableWithAggregatesFilter<"diet"> | number | null
    phosphorus?: FloatNullableWithAggregatesFilter<"diet"> | number | null
    iodine?: FloatNullableWithAggregatesFilter<"diet"> | number | null
    copper?: FloatNullableWithAggregatesFilter<"diet"> | number | null
    manganese?: FloatNullableWithAggregatesFilter<"diet"> | number | null
    chromium?: FloatNullableWithAggregatesFilter<"diet"> | number | null
  }

  export type habit_planWhereInput = {
    AND?: habit_planWhereInput | habit_planWhereInput[]
    OR?: habit_planWhereInput[]
    NOT?: habit_planWhereInput | habit_planWhereInput[]
    id?: IntFilter<"habit_plan"> | number
    created_at?: DateTimeNullableFilter<"habit_plan"> | Date | string | null
    goal?: StringNullableFilter<"habit_plan"> | string | null
    duration?: IntNullableFilter<"habit_plan"> | number | null
    action?: StringNullableFilter<"habit_plan"> | string | null
    userId?: StringNullableFilter<"habit_plan"> | string | null
    completed?: BoolNullableFilter<"habit_plan"> | boolean | null
    check_in?: Check_inListRelationFilter
  }

  export type habit_planOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    goal?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    action?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    completed?: SortOrderInput | SortOrder
    check_in?: check_inOrderByRelationAggregateInput
  }

  export type habit_planWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: habit_planWhereInput | habit_planWhereInput[]
    OR?: habit_planWhereInput[]
    NOT?: habit_planWhereInput | habit_planWhereInput[]
    created_at?: DateTimeNullableFilter<"habit_plan"> | Date | string | null
    goal?: StringNullableFilter<"habit_plan"> | string | null
    duration?: IntNullableFilter<"habit_plan"> | number | null
    action?: StringNullableFilter<"habit_plan"> | string | null
    userId?: StringNullableFilter<"habit_plan"> | string | null
    completed?: BoolNullableFilter<"habit_plan"> | boolean | null
    check_in?: Check_inListRelationFilter
  }, "id">

  export type habit_planOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    goal?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    action?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    completed?: SortOrderInput | SortOrder
    _count?: habit_planCountOrderByAggregateInput
    _avg?: habit_planAvgOrderByAggregateInput
    _max?: habit_planMaxOrderByAggregateInput
    _min?: habit_planMinOrderByAggregateInput
    _sum?: habit_planSumOrderByAggregateInput
  }

  export type habit_planScalarWhereWithAggregatesInput = {
    AND?: habit_planScalarWhereWithAggregatesInput | habit_planScalarWhereWithAggregatesInput[]
    OR?: habit_planScalarWhereWithAggregatesInput[]
    NOT?: habit_planScalarWhereWithAggregatesInput | habit_planScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"habit_plan"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"habit_plan"> | Date | string | null
    goal?: StringNullableWithAggregatesFilter<"habit_plan"> | string | null
    duration?: IntNullableWithAggregatesFilter<"habit_plan"> | number | null
    action?: StringNullableWithAggregatesFilter<"habit_plan"> | string | null
    userId?: StringNullableWithAggregatesFilter<"habit_plan"> | string | null
    completed?: BoolNullableWithAggregatesFilter<"habit_plan"> | boolean | null
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    userId?: StringNullableFilter<"user"> | string | null
    pushSubscription?: StringNullableFilter<"user"> | string | null
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    pushSubscription?: SortOrderInput | SortOrder
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    userId?: StringNullableFilter<"user"> | string | null
    pushSubscription?: StringNullableFilter<"user"> | string | null
  }, "id">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    pushSubscription?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    userId?: StringNullableWithAggregatesFilter<"user"> | string | null
    pushSubscription?: StringNullableWithAggregatesFilter<"user"> | string | null
  }

  export type alembic_versionCreateInput = {
    version_num: string
  }

  export type alembic_versionUncheckedCreateInput = {
    version_num: string
  }

  export type alembic_versionUpdateInput = {
    version_num?: StringFieldUpdateOperationsInput | string
  }

  export type alembic_versionUncheckedUpdateInput = {
    version_num?: StringFieldUpdateOperationsInput | string
  }

  export type alembic_versionCreateManyInput = {
    version_num: string
  }

  export type alembic_versionUpdateManyMutationInput = {
    version_num?: StringFieldUpdateOperationsInput | string
  }

  export type alembic_versionUncheckedUpdateManyInput = {
    version_num?: StringFieldUpdateOperationsInput | string
  }

  export type check_inCreateInput = {
    userId?: string | null
    date?: Date | string | null
    status?: boolean | null
    habit_plan: habit_planCreateNestedOneWithoutCheck_inInput
  }

  export type check_inUncheckedCreateInput = {
    id?: number
    userId?: string | null
    date?: Date | string | null
    status?: boolean | null
    habit_plan_id: number
  }

  export type check_inUpdateInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    habit_plan?: habit_planUpdateOneRequiredWithoutCheck_inNestedInput
  }

  export type check_inUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    habit_plan_id?: IntFieldUpdateOperationsInput | number
  }

  export type check_inCreateManyInput = {
    id?: number
    userId?: string | null
    date?: Date | string | null
    status?: boolean | null
    habit_plan_id: number
  }

  export type check_inUpdateManyMutationInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type check_inUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    habit_plan_id?: IntFieldUpdateOperationsInput | number
  }

  export type dietCreateInput = {
    name?: string | null
    consumed_at?: Date | string | null
    carbs?: number | null
    fat?: number | null
    protein?: number | null
    calories?: number | null
    vitamin_a?: number | null
    vitamin_b?: number | null
    vitamin_c?: number | null
    vitamin_d?: number | null
    vitamin_e?: number | null
    vitamin_k?: number | null
    calcium?: number | null
    magnesium?: number | null
    potassium?: number | null
    sodium?: number | null
    iron?: number | null
    zinc?: number | null
    selenium?: number | null
    phosphorus?: number | null
    iodine?: number | null
    copper?: number | null
    manganese?: number | null
    chromium?: number | null
  }

  export type dietUncheckedCreateInput = {
    id?: number
    name?: string | null
    consumed_at?: Date | string | null
    carbs?: number | null
    fat?: number | null
    protein?: number | null
    calories?: number | null
    vitamin_a?: number | null
    vitamin_b?: number | null
    vitamin_c?: number | null
    vitamin_d?: number | null
    vitamin_e?: number | null
    vitamin_k?: number | null
    calcium?: number | null
    magnesium?: number | null
    potassium?: number | null
    sodium?: number | null
    iron?: number | null
    zinc?: number | null
    selenium?: number | null
    phosphorus?: number | null
    iodine?: number | null
    copper?: number | null
    manganese?: number | null
    chromium?: number | null
  }

  export type dietUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    consumed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carbs?: NullableFloatFieldUpdateOperationsInput | number | null
    fat?: NullableFloatFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    vitamin_a?: NullableFloatFieldUpdateOperationsInput | number | null
    vitamin_b?: NullableFloatFieldUpdateOperationsInput | number | null
    vitamin_c?: NullableFloatFieldUpdateOperationsInput | number | null
    vitamin_d?: NullableFloatFieldUpdateOperationsInput | number | null
    vitamin_e?: NullableFloatFieldUpdateOperationsInput | number | null
    vitamin_k?: NullableFloatFieldUpdateOperationsInput | number | null
    calcium?: NullableFloatFieldUpdateOperationsInput | number | null
    magnesium?: NullableFloatFieldUpdateOperationsInput | number | null
    potassium?: NullableFloatFieldUpdateOperationsInput | number | null
    sodium?: NullableFloatFieldUpdateOperationsInput | number | null
    iron?: NullableFloatFieldUpdateOperationsInput | number | null
    zinc?: NullableFloatFieldUpdateOperationsInput | number | null
    selenium?: NullableFloatFieldUpdateOperationsInput | number | null
    phosphorus?: NullableFloatFieldUpdateOperationsInput | number | null
    iodine?: NullableFloatFieldUpdateOperationsInput | number | null
    copper?: NullableFloatFieldUpdateOperationsInput | number | null
    manganese?: NullableFloatFieldUpdateOperationsInput | number | null
    chromium?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type dietUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    consumed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carbs?: NullableFloatFieldUpdateOperationsInput | number | null
    fat?: NullableFloatFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    vitamin_a?: NullableFloatFieldUpdateOperationsInput | number | null
    vitamin_b?: NullableFloatFieldUpdateOperationsInput | number | null
    vitamin_c?: NullableFloatFieldUpdateOperationsInput | number | null
    vitamin_d?: NullableFloatFieldUpdateOperationsInput | number | null
    vitamin_e?: NullableFloatFieldUpdateOperationsInput | number | null
    vitamin_k?: NullableFloatFieldUpdateOperationsInput | number | null
    calcium?: NullableFloatFieldUpdateOperationsInput | number | null
    magnesium?: NullableFloatFieldUpdateOperationsInput | number | null
    potassium?: NullableFloatFieldUpdateOperationsInput | number | null
    sodium?: NullableFloatFieldUpdateOperationsInput | number | null
    iron?: NullableFloatFieldUpdateOperationsInput | number | null
    zinc?: NullableFloatFieldUpdateOperationsInput | number | null
    selenium?: NullableFloatFieldUpdateOperationsInput | number | null
    phosphorus?: NullableFloatFieldUpdateOperationsInput | number | null
    iodine?: NullableFloatFieldUpdateOperationsInput | number | null
    copper?: NullableFloatFieldUpdateOperationsInput | number | null
    manganese?: NullableFloatFieldUpdateOperationsInput | number | null
    chromium?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type dietCreateManyInput = {
    id?: number
    name?: string | null
    consumed_at?: Date | string | null
    carbs?: number | null
    fat?: number | null
    protein?: number | null
    calories?: number | null
    vitamin_a?: number | null
    vitamin_b?: number | null
    vitamin_c?: number | null
    vitamin_d?: number | null
    vitamin_e?: number | null
    vitamin_k?: number | null
    calcium?: number | null
    magnesium?: number | null
    potassium?: number | null
    sodium?: number | null
    iron?: number | null
    zinc?: number | null
    selenium?: number | null
    phosphorus?: number | null
    iodine?: number | null
    copper?: number | null
    manganese?: number | null
    chromium?: number | null
  }

  export type dietUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    consumed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carbs?: NullableFloatFieldUpdateOperationsInput | number | null
    fat?: NullableFloatFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    vitamin_a?: NullableFloatFieldUpdateOperationsInput | number | null
    vitamin_b?: NullableFloatFieldUpdateOperationsInput | number | null
    vitamin_c?: NullableFloatFieldUpdateOperationsInput | number | null
    vitamin_d?: NullableFloatFieldUpdateOperationsInput | number | null
    vitamin_e?: NullableFloatFieldUpdateOperationsInput | number | null
    vitamin_k?: NullableFloatFieldUpdateOperationsInput | number | null
    calcium?: NullableFloatFieldUpdateOperationsInput | number | null
    magnesium?: NullableFloatFieldUpdateOperationsInput | number | null
    potassium?: NullableFloatFieldUpdateOperationsInput | number | null
    sodium?: NullableFloatFieldUpdateOperationsInput | number | null
    iron?: NullableFloatFieldUpdateOperationsInput | number | null
    zinc?: NullableFloatFieldUpdateOperationsInput | number | null
    selenium?: NullableFloatFieldUpdateOperationsInput | number | null
    phosphorus?: NullableFloatFieldUpdateOperationsInput | number | null
    iodine?: NullableFloatFieldUpdateOperationsInput | number | null
    copper?: NullableFloatFieldUpdateOperationsInput | number | null
    manganese?: NullableFloatFieldUpdateOperationsInput | number | null
    chromium?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type dietUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    consumed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carbs?: NullableFloatFieldUpdateOperationsInput | number | null
    fat?: NullableFloatFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    vitamin_a?: NullableFloatFieldUpdateOperationsInput | number | null
    vitamin_b?: NullableFloatFieldUpdateOperationsInput | number | null
    vitamin_c?: NullableFloatFieldUpdateOperationsInput | number | null
    vitamin_d?: NullableFloatFieldUpdateOperationsInput | number | null
    vitamin_e?: NullableFloatFieldUpdateOperationsInput | number | null
    vitamin_k?: NullableFloatFieldUpdateOperationsInput | number | null
    calcium?: NullableFloatFieldUpdateOperationsInput | number | null
    magnesium?: NullableFloatFieldUpdateOperationsInput | number | null
    potassium?: NullableFloatFieldUpdateOperationsInput | number | null
    sodium?: NullableFloatFieldUpdateOperationsInput | number | null
    iron?: NullableFloatFieldUpdateOperationsInput | number | null
    zinc?: NullableFloatFieldUpdateOperationsInput | number | null
    selenium?: NullableFloatFieldUpdateOperationsInput | number | null
    phosphorus?: NullableFloatFieldUpdateOperationsInput | number | null
    iodine?: NullableFloatFieldUpdateOperationsInput | number | null
    copper?: NullableFloatFieldUpdateOperationsInput | number | null
    manganese?: NullableFloatFieldUpdateOperationsInput | number | null
    chromium?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type habit_planCreateInput = {
    created_at?: Date | string | null
    goal?: string | null
    duration?: number | null
    action?: string | null
    userId?: string | null
    completed?: boolean | null
    check_in?: check_inCreateNestedManyWithoutHabit_planInput
  }

  export type habit_planUncheckedCreateInput = {
    id?: number
    created_at?: Date | string | null
    goal?: string | null
    duration?: number | null
    action?: string | null
    userId?: string | null
    completed?: boolean | null
    check_in?: check_inUncheckedCreateNestedManyWithoutHabit_planInput
  }

  export type habit_planUpdateInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    check_in?: check_inUpdateManyWithoutHabit_planNestedInput
  }

  export type habit_planUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    check_in?: check_inUncheckedUpdateManyWithoutHabit_planNestedInput
  }

  export type habit_planCreateManyInput = {
    id?: number
    created_at?: Date | string | null
    goal?: string | null
    duration?: number | null
    action?: string | null
    userId?: string | null
    completed?: boolean | null
  }

  export type habit_planUpdateManyMutationInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type habit_planUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type userCreateInput = {
    userId?: string | null
    pushSubscription?: string | null
  }

  export type userUncheckedCreateInput = {
    id?: number
    userId?: string | null
    pushSubscription?: string | null
  }

  export type userUpdateInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    pushSubscription?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    pushSubscription?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userCreateManyInput = {
    id?: number
    userId?: string | null
    pushSubscription?: string | null
  }

  export type userUpdateManyMutationInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    pushSubscription?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    pushSubscription?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type alembic_versionCountOrderByAggregateInput = {
    version_num?: SortOrder
  }

  export type alembic_versionMaxOrderByAggregateInput = {
    version_num?: SortOrder
  }

  export type alembic_versionMinOrderByAggregateInput = {
    version_num?: SortOrder
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type Habit_planScalarRelationFilter = {
    is?: habit_planWhereInput
    isNot?: habit_planWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type check_inCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    habit_plan_id?: SortOrder
  }

  export type check_inAvgOrderByAggregateInput = {
    id?: SortOrder
    habit_plan_id?: SortOrder
  }

  export type check_inMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    habit_plan_id?: SortOrder
  }

  export type check_inMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    habit_plan_id?: SortOrder
  }

  export type check_inSumOrderByAggregateInput = {
    id?: SortOrder
    habit_plan_id?: SortOrder
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type dietCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    consumed_at?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    protein?: SortOrder
    calories?: SortOrder
    vitamin_a?: SortOrder
    vitamin_b?: SortOrder
    vitamin_c?: SortOrder
    vitamin_d?: SortOrder
    vitamin_e?: SortOrder
    vitamin_k?: SortOrder
    calcium?: SortOrder
    magnesium?: SortOrder
    potassium?: SortOrder
    sodium?: SortOrder
    iron?: SortOrder
    zinc?: SortOrder
    selenium?: SortOrder
    phosphorus?: SortOrder
    iodine?: SortOrder
    copper?: SortOrder
    manganese?: SortOrder
    chromium?: SortOrder
  }

  export type dietAvgOrderByAggregateInput = {
    id?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    protein?: SortOrder
    calories?: SortOrder
    vitamin_a?: SortOrder
    vitamin_b?: SortOrder
    vitamin_c?: SortOrder
    vitamin_d?: SortOrder
    vitamin_e?: SortOrder
    vitamin_k?: SortOrder
    calcium?: SortOrder
    magnesium?: SortOrder
    potassium?: SortOrder
    sodium?: SortOrder
    iron?: SortOrder
    zinc?: SortOrder
    selenium?: SortOrder
    phosphorus?: SortOrder
    iodine?: SortOrder
    copper?: SortOrder
    manganese?: SortOrder
    chromium?: SortOrder
  }

  export type dietMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    consumed_at?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    protein?: SortOrder
    calories?: SortOrder
    vitamin_a?: SortOrder
    vitamin_b?: SortOrder
    vitamin_c?: SortOrder
    vitamin_d?: SortOrder
    vitamin_e?: SortOrder
    vitamin_k?: SortOrder
    calcium?: SortOrder
    magnesium?: SortOrder
    potassium?: SortOrder
    sodium?: SortOrder
    iron?: SortOrder
    zinc?: SortOrder
    selenium?: SortOrder
    phosphorus?: SortOrder
    iodine?: SortOrder
    copper?: SortOrder
    manganese?: SortOrder
    chromium?: SortOrder
  }

  export type dietMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    consumed_at?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    protein?: SortOrder
    calories?: SortOrder
    vitamin_a?: SortOrder
    vitamin_b?: SortOrder
    vitamin_c?: SortOrder
    vitamin_d?: SortOrder
    vitamin_e?: SortOrder
    vitamin_k?: SortOrder
    calcium?: SortOrder
    magnesium?: SortOrder
    potassium?: SortOrder
    sodium?: SortOrder
    iron?: SortOrder
    zinc?: SortOrder
    selenium?: SortOrder
    phosphorus?: SortOrder
    iodine?: SortOrder
    copper?: SortOrder
    manganese?: SortOrder
    chromium?: SortOrder
  }

  export type dietSumOrderByAggregateInput = {
    id?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    protein?: SortOrder
    calories?: SortOrder
    vitamin_a?: SortOrder
    vitamin_b?: SortOrder
    vitamin_c?: SortOrder
    vitamin_d?: SortOrder
    vitamin_e?: SortOrder
    vitamin_k?: SortOrder
    calcium?: SortOrder
    magnesium?: SortOrder
    potassium?: SortOrder
    sodium?: SortOrder
    iron?: SortOrder
    zinc?: SortOrder
    selenium?: SortOrder
    phosphorus?: SortOrder
    iodine?: SortOrder
    copper?: SortOrder
    manganese?: SortOrder
    chromium?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Check_inListRelationFilter = {
    every?: check_inWhereInput
    some?: check_inWhereInput
    none?: check_inWhereInput
  }

  export type check_inOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type habit_planCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    goal?: SortOrder
    duration?: SortOrder
    action?: SortOrder
    userId?: SortOrder
    completed?: SortOrder
  }

  export type habit_planAvgOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
  }

  export type habit_planMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    goal?: SortOrder
    duration?: SortOrder
    action?: SortOrder
    userId?: SortOrder
    completed?: SortOrder
  }

  export type habit_planMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    goal?: SortOrder
    duration?: SortOrder
    action?: SortOrder
    userId?: SortOrder
    completed?: SortOrder
  }

  export type habit_planSumOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pushSubscription?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pushSubscription?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pushSubscription?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type habit_planCreateNestedOneWithoutCheck_inInput = {
    create?: XOR<habit_planCreateWithoutCheck_inInput, habit_planUncheckedCreateWithoutCheck_inInput>
    connectOrCreate?: habit_planCreateOrConnectWithoutCheck_inInput
    connect?: habit_planWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type habit_planUpdateOneRequiredWithoutCheck_inNestedInput = {
    create?: XOR<habit_planCreateWithoutCheck_inInput, habit_planUncheckedCreateWithoutCheck_inInput>
    connectOrCreate?: habit_planCreateOrConnectWithoutCheck_inInput
    upsert?: habit_planUpsertWithoutCheck_inInput
    connect?: habit_planWhereUniqueInput
    update?: XOR<XOR<habit_planUpdateToOneWithWhereWithoutCheck_inInput, habit_planUpdateWithoutCheck_inInput>, habit_planUncheckedUpdateWithoutCheck_inInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type check_inCreateNestedManyWithoutHabit_planInput = {
    create?: XOR<check_inCreateWithoutHabit_planInput, check_inUncheckedCreateWithoutHabit_planInput> | check_inCreateWithoutHabit_planInput[] | check_inUncheckedCreateWithoutHabit_planInput[]
    connectOrCreate?: check_inCreateOrConnectWithoutHabit_planInput | check_inCreateOrConnectWithoutHabit_planInput[]
    createMany?: check_inCreateManyHabit_planInputEnvelope
    connect?: check_inWhereUniqueInput | check_inWhereUniqueInput[]
  }

  export type check_inUncheckedCreateNestedManyWithoutHabit_planInput = {
    create?: XOR<check_inCreateWithoutHabit_planInput, check_inUncheckedCreateWithoutHabit_planInput> | check_inCreateWithoutHabit_planInput[] | check_inUncheckedCreateWithoutHabit_planInput[]
    connectOrCreate?: check_inCreateOrConnectWithoutHabit_planInput | check_inCreateOrConnectWithoutHabit_planInput[]
    createMany?: check_inCreateManyHabit_planInputEnvelope
    connect?: check_inWhereUniqueInput | check_inWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type check_inUpdateManyWithoutHabit_planNestedInput = {
    create?: XOR<check_inCreateWithoutHabit_planInput, check_inUncheckedCreateWithoutHabit_planInput> | check_inCreateWithoutHabit_planInput[] | check_inUncheckedCreateWithoutHabit_planInput[]
    connectOrCreate?: check_inCreateOrConnectWithoutHabit_planInput | check_inCreateOrConnectWithoutHabit_planInput[]
    upsert?: check_inUpsertWithWhereUniqueWithoutHabit_planInput | check_inUpsertWithWhereUniqueWithoutHabit_planInput[]
    createMany?: check_inCreateManyHabit_planInputEnvelope
    set?: check_inWhereUniqueInput | check_inWhereUniqueInput[]
    disconnect?: check_inWhereUniqueInput | check_inWhereUniqueInput[]
    delete?: check_inWhereUniqueInput | check_inWhereUniqueInput[]
    connect?: check_inWhereUniqueInput | check_inWhereUniqueInput[]
    update?: check_inUpdateWithWhereUniqueWithoutHabit_planInput | check_inUpdateWithWhereUniqueWithoutHabit_planInput[]
    updateMany?: check_inUpdateManyWithWhereWithoutHabit_planInput | check_inUpdateManyWithWhereWithoutHabit_planInput[]
    deleteMany?: check_inScalarWhereInput | check_inScalarWhereInput[]
  }

  export type check_inUncheckedUpdateManyWithoutHabit_planNestedInput = {
    create?: XOR<check_inCreateWithoutHabit_planInput, check_inUncheckedCreateWithoutHabit_planInput> | check_inCreateWithoutHabit_planInput[] | check_inUncheckedCreateWithoutHabit_planInput[]
    connectOrCreate?: check_inCreateOrConnectWithoutHabit_planInput | check_inCreateOrConnectWithoutHabit_planInput[]
    upsert?: check_inUpsertWithWhereUniqueWithoutHabit_planInput | check_inUpsertWithWhereUniqueWithoutHabit_planInput[]
    createMany?: check_inCreateManyHabit_planInputEnvelope
    set?: check_inWhereUniqueInput | check_inWhereUniqueInput[]
    disconnect?: check_inWhereUniqueInput | check_inWhereUniqueInput[]
    delete?: check_inWhereUniqueInput | check_inWhereUniqueInput[]
    connect?: check_inWhereUniqueInput | check_inWhereUniqueInput[]
    update?: check_inUpdateWithWhereUniqueWithoutHabit_planInput | check_inUpdateWithWhereUniqueWithoutHabit_planInput[]
    updateMany?: check_inUpdateManyWithWhereWithoutHabit_planInput | check_inUpdateManyWithWhereWithoutHabit_planInput[]
    deleteMany?: check_inScalarWhereInput | check_inScalarWhereInput[]
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type habit_planCreateWithoutCheck_inInput = {
    created_at?: Date | string | null
    goal?: string | null
    duration?: number | null
    action?: string | null
    userId?: string | null
    completed?: boolean | null
  }

  export type habit_planUncheckedCreateWithoutCheck_inInput = {
    id?: number
    created_at?: Date | string | null
    goal?: string | null
    duration?: number | null
    action?: string | null
    userId?: string | null
    completed?: boolean | null
  }

  export type habit_planCreateOrConnectWithoutCheck_inInput = {
    where: habit_planWhereUniqueInput
    create: XOR<habit_planCreateWithoutCheck_inInput, habit_planUncheckedCreateWithoutCheck_inInput>
  }

  export type habit_planUpsertWithoutCheck_inInput = {
    update: XOR<habit_planUpdateWithoutCheck_inInput, habit_planUncheckedUpdateWithoutCheck_inInput>
    create: XOR<habit_planCreateWithoutCheck_inInput, habit_planUncheckedCreateWithoutCheck_inInput>
    where?: habit_planWhereInput
  }

  export type habit_planUpdateToOneWithWhereWithoutCheck_inInput = {
    where?: habit_planWhereInput
    data: XOR<habit_planUpdateWithoutCheck_inInput, habit_planUncheckedUpdateWithoutCheck_inInput>
  }

  export type habit_planUpdateWithoutCheck_inInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type habit_planUncheckedUpdateWithoutCheck_inInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type check_inCreateWithoutHabit_planInput = {
    userId?: string | null
    date?: Date | string | null
    status?: boolean | null
  }

  export type check_inUncheckedCreateWithoutHabit_planInput = {
    id?: number
    userId?: string | null
    date?: Date | string | null
    status?: boolean | null
  }

  export type check_inCreateOrConnectWithoutHabit_planInput = {
    where: check_inWhereUniqueInput
    create: XOR<check_inCreateWithoutHabit_planInput, check_inUncheckedCreateWithoutHabit_planInput>
  }

  export type check_inCreateManyHabit_planInputEnvelope = {
    data: check_inCreateManyHabit_planInput | check_inCreateManyHabit_planInput[]
    skipDuplicates?: boolean
  }

  export type check_inUpsertWithWhereUniqueWithoutHabit_planInput = {
    where: check_inWhereUniqueInput
    update: XOR<check_inUpdateWithoutHabit_planInput, check_inUncheckedUpdateWithoutHabit_planInput>
    create: XOR<check_inCreateWithoutHabit_planInput, check_inUncheckedCreateWithoutHabit_planInput>
  }

  export type check_inUpdateWithWhereUniqueWithoutHabit_planInput = {
    where: check_inWhereUniqueInput
    data: XOR<check_inUpdateWithoutHabit_planInput, check_inUncheckedUpdateWithoutHabit_planInput>
  }

  export type check_inUpdateManyWithWhereWithoutHabit_planInput = {
    where: check_inScalarWhereInput
    data: XOR<check_inUpdateManyMutationInput, check_inUncheckedUpdateManyWithoutHabit_planInput>
  }

  export type check_inScalarWhereInput = {
    AND?: check_inScalarWhereInput | check_inScalarWhereInput[]
    OR?: check_inScalarWhereInput[]
    NOT?: check_inScalarWhereInput | check_inScalarWhereInput[]
    id?: IntFilter<"check_in"> | number
    userId?: StringNullableFilter<"check_in"> | string | null
    date?: DateTimeNullableFilter<"check_in"> | Date | string | null
    status?: BoolNullableFilter<"check_in"> | boolean | null
    habit_plan_id?: IntFilter<"check_in"> | number
  }

  export type check_inCreateManyHabit_planInput = {
    id?: number
    userId?: string | null
    date?: Date | string | null
    status?: boolean | null
  }

  export type check_inUpdateWithoutHabit_planInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type check_inUncheckedUpdateWithoutHabit_planInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type check_inUncheckedUpdateManyWithoutHabit_planInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
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