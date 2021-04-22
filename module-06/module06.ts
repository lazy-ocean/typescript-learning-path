/*  Module 6: DGenerics in TypeScript
    Lab Start */

/*  DataStore is a utility function that can store up to 10 string values in an array. 
    Rewrite the DataStore class so the array can store items of any type.

    TODO: Add and apply a type variable. */

class DataStore<T> {
  private _data: Array<T> = new Array(10);

  AddOrUpdate(index: number, item: T) {
    if (index >= 0 && index < 10) {
      this._data[index] = item;
    } else {
      console.log("Index is greater than 10");
    }
  }
  GetData(index: number) {
    if (index >= 0 && index < 10) {
      return this._data[index];
    } else {
      return;
    }
  }
}
// TODO Add type 'string'.
let cities = new DataStore<string>();
cities.AddOrUpdate(0, "Mumbai");
cities.AddOrUpdate(1, "Chicago");
cities.AddOrUpdate(11, "London"); // item not added
console.log(cities.GetData(1)); // returns 'Chicago'
console.log(cities.GetData(12)); // returns 'undefined'

// TODO Test items as numbers.
let ids = new DataStore<number>();
ids.AddOrUpdate(0, 12345);
ids.AddOrUpdate(1, 12350);
console.log(ids.GetData(0)); // returns 12345
console.log(ids.GetData(1)); // returns 12350

// TODO Test items as objects.
let cities3 = new DataStore<object>();
cities3.AddOrUpdate(0, { city: "Moscow", country: "Russia" });
cities3.AddOrUpdate(1, { city: "Paris", country: "France" });
console.log(cities3.GetData(0)); // returns { city: "Moscow", country: 'Russia' }
console.log(cities3.GetData(1)); // return { city: "Paris", country: 'France' }
