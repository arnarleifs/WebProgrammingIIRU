export class QueryBuilder {
  private _table: string | null = null;
  private _fields: string[] = [];
  private _conditions: string[] = [];
  private _order: { field: string; direction: string } | null = null;
  private _limit: number | null = null;

  from(table: string): this {
    if (!table) throw new Error("table name is required");
    this._table = table;
    return this;
  }

  select(...fields: string[]): this {
    this._fields = fields;
    return this;
  }

  where(condition: string): this {
    this._conditions.push(condition);
    return this;
  }

  orderBy(field: string, direction: string = "ASC"): this {
    const dir = direction.toUpperCase();
    if (dir !== "ASC" && dir !== "DESC") {
      throw new Error(`direction must be "ASC" or "DESC"`);
    }
    this._order = { field, direction: dir };
    return this;
  }

  limit(n: number): this {
    if (!Number.isInteger(n) || n <= 0) {
      throw new Error("limit must be a positive integer");
    }
    this._limit = n;
    return this;
  }

  build(): string {
    if (!this._table) throw new Error(".from() must be called before .build()");

    const select = this._fields.length > 0 ? this._fields.join(", ") : "*";
    let query = `SELECT ${select} FROM ${this._table}`;

    if (this._conditions.length > 0) {
      query += ` WHERE ${this._conditions.join(" AND ")}`;
    }

    if (this._order) {
      query += ` ORDER BY ${this._order.field} ${this._order.direction}`;
    }

    if (this._limit !== null) {
      query += ` LIMIT ${this._limit}`;
    }

    return query;
  }

  reset(): this {
    this._table = null;
    this._fields = [];
    this._conditions = [];
    this._order = null;
    this._limit = null;
    return this;
  }
}
