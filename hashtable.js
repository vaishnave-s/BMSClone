export class HashTable {
    storage = [];
    storageLimit = null;

    constructor(_storageLimit) {
        this.storageLimit = _storageLimit;
    }

    hash(str, max) {
        var hash = 0;
        for (var i = 0; i < str.length; i++) {
            hash += str.charCodeAt(i);
        }
        return hash % max;
    }


    print() {
        console.log(this.storage);

    }
    keyExists(key) {
        var index = this.hash(key, this.storageLimit);
        if (this.storage[index] === undefined) {
            return false;
        }
        else {
            for (var i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    return true;
                }
            }
            return false;
        }

    }
    insert(key, value) {
        if (!this.keyExists(key)) {

            var index = this.hash(key, this.storageLimit);
            if (this.storage[index] === undefined) {
                this.storage[index] = [[key, value]];

            }
            else {
                this.storage[index].push([key, value]);
            }
        }
        else {
            console.log("Insert failed. This key exists!");
        }
    }
    update(key, value) {
        if (this.keyExists(key)) {
            var index = this.hash(key, this.storageLimit);
            for (var i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    this.storage[index][i][1] = value;
                }
            }

        }
        else {
            console.log("Update failed. This key doesn't exist!");

        }
    }
    delete(key) {
        if (this.keyExists(key)) {
            var index = this.hash(key, this.storageLimit);
            if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
                delete this.storage[index]
            }
            else {
                for (var i = 0; i < this.storage[index].length; i++) {
                    if (this.storage[index][i][0] === key) {
                        delete this.storage[index][i];

                    }
                }
            }

        }
        else {
            console.log("Delete failed. This key doesn't exist!");

        }
    }

    lookup(key) {
        if (this.keyExists(key)) {
            var index = this.hash(key, this.storageLimit);
            for (var i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    return this.storage[index][i][1];

                }
            }
        }

    }
    keyCount() {
        if (this.storage==[]) {
            return null


        }
        else{
            var count=0;
            for (var i = 0; i < this.storage.length; i++) {
                    if(this.storage[i]!==undefined){
                        // console.log(this.storage[i]);
                        for (var j = 0; j < this.storage[i].length; j++) {
                            // console.log(this.storage[i][j][0]);
                            count++;
                        }
                    }
                }
                return count;
            }
        }
        
        getKeys() {
            if (this.storage==[]) {
                return null
    
    
            }
            else{
                var keys=[];
                for (var i = 0; i < this.storage.length; i++) {
                        if(this.storage[i]!==undefined){
                            // console.log(this.storage[i]);
                            for (var j = 0; j < this.storage[i].length; j++) {
                                // console.log(this.storage[i][j][0]);
                                keys.push(this.storage[i][j][0]);
                            }
                        }
                    }
                   return keys;

                }
            }

    }


