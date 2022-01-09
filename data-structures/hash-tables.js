class HashTable{
  constructor(size = 53){
    this.keyMap = new Array(size);
  }

  _hash(key){
    let total = 0;
    const WEIRD_PRIME = 31;

    for(let i = 0; i < Math.min(key.length, 100); i++){
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  // Added key value
  set(key, val){
    const index = this._hash(key);
    const element = this.keyMap[index];

    if(!element) this.keyMap[index] = [[key, val]];
    else this.keyMap[index].push([key, val]);

    return this;
  }

  // Returns a particular value matching the key
  get(key){
    const index = this._hash(key);
    const element = this.keyMap[index];

    if(element){
      if(element.length === 1) return this.keyMap[index][0][1];

      for(const ele of element){
        if(key === ele[0]) return ele[1];
      }
    }

    return undefined;
  }

  // Returns all the keys
  keys(){
    let keysArr = [];

    for(let i = 0; i < this.keyMap.length; i++){
      let element = this.keyMap[i];

      if(element){
        for(let j = 0; j < element.length; j++){
          if(!keysArr.includes(element[j][0])){
            keysArr.push(element[j][0]);
          }
        }
      }
    }

    return keysArr;
  }

  // Returns all the values
  values(){
    let valuesArr = [];

    for(let i = 0; i < this.keyMap.length; i++){
      let element = this.keyMap[i];

      if(element){
        for(let j = 0; j < element.length; j++){
          if(!valuesArr.includes(element[j][1])){
             valuesArr.push(element[j][1]);
          }
        }
      }
    }

    return valuesArr;
  }

}

const ht = new HashTable(10);
// console.log(ht._hash("pink"));
// console.log(ht._hash("red"));
// console.log(ht._hash("blue"));
// console.log(ht._hash("green"));
ht.set("red", "#red");
ht.set("pink", "#pink");
ht.set("green", "#green");
ht.set("blue", "#blue");
// ht.set("maroon", "#blue");
// ht.set("blue", "#orange");
console.log(ht.get('red'));
console.log(ht.get('orange'));
console.log(ht.get('pink'));
console.log(ht.get('green'));
console.log(ht.get('blue'));
console.log(ht.keys());
console.log(ht.values());
console.log(ht);

ht.keys().forEach((key) => console.log(ht.get(key)));