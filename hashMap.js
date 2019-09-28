class HashMap {
    // initialize HashMap
    constructor(initialCapacity=8) {
        this.length = 0
        this._hashTable = []
        this._capacity = initialCapacity
        this._deleted = 0
    }

    get(key) {
        // define index from the findSlot method passing key
        const index = this._findSlot(key)
        // if the index value is undefined throw error
        if (this._hashTable[index] === undefined) {
            throw new Error('Key error')
        }
        // return the value of the index
        return this._hashTable[index].value
    }

    // adding value to hashTable (array) using hashMap
    set(key, value) {
        // define the load ratio based on HashMap length how many values have 
        // been marked as deleted + 1, divided by the capacity
        const loadRatio = (this.length + this._deleted + 1) / this._capacity
        
        // if the loadRatio is greater than the HashMap.MAX_LOAD_RATIO
        // resize to capacity * HashMap.SIZE_RATIO 
        if (loadRatio > this.MAX_LOAD_RATIO) {
            this._resize(this._capacity * this.SIZE_RATIO)
        }
        
        // declare index where we are going to store value
        const index = this._findSlot(key)
        // if index is not empty add 1 to the HashMap length
        if (!this._hashTable[index]) {
            this.length ++
        }
        // insert key/value into the index and mark deleted to false
        this._hashTable[index] = {
            key,
            value,
            DELETED: false
        }
    }

    _findSlot(key) {
        // define hash from the hashed string given to _hashString()
        const hash = HashMap._hashString(key)
        // define start from the remainder of hash and capacity
        const start = hash % this._capacity

        // create open addressing function that loops till it finds an empty slot
        // set i to = start and loop as long as i is
        // less than start and capacity combined
        for (let i = start; i < start + this._capacity; i++) {
            // define index from i remainder capacity
            const index = i % this._capacity
            //define slot from hashTable index
            const slot = this._hashTable[index]
            // if the index is empty or if it has the same key but
            // that key isn't marked as deleted, then stop loop and return index
            if (slot === undefined || (slot.key === key && !slot.DELETED)) { return index }
        }
    }

    // recreate hashTable to a larger size
    _resize(size) {
        // copy current hashTable slots to oldSlots
        const oldSlots = this._hashTable
        // define capacity from the size arg
        this._capacity = size
        // reset length to 0 and slots to empty array
        this.length = 0
        this._slots = []
        // loop through oldSlots with "slot" variable
        for (const slot of oldSlots) {
            // add only slots that are not empty
            if (slot !== undefined) {
                // add key and value
                this.set(slot.key, slot.value)
            }
        }
    }

    delete(key) {
        // define index from _findSlot method passing the key
        const index = this._findSlot(key)
        // define the slot from the index on the hashTable
        const slot = this._hashTable[index]
        // if there is no key at that slot throw error
        if (!slot) { throw new Error('Key error')}
        // set DELETE to true
        slot.DELETED = true
        // reduce hashTable length by 1
        this.length --
        // increment this._deleted by 1
        this._deleted ++
    }

    // converting string to ASCII
    static _hashString(string) {
        let hash = 5381
        for (let i = 0; i < string.length; i++) {
            hash = (hash << 5) + hash + string.charCodeAt(i)
            hash = hash & hash
        }
        return hash >>> 0
    }
}

module.exports = HashMap;