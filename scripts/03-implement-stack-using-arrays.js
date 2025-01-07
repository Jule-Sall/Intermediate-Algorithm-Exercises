class Stack
{
    // private field
    #data= [];

    // push a number to the top of the stack
    push(number){
        //this.data.unshift(number);
        for(let i = this.#data.length; i > 0; i--){  
          this.#data[i] = this.#data[i - 1];  
        }
        this.#data[0] = number;
    }
    // remove the top element from the stack
    pop(){
        const temp = this.#data[0];
        for(let i = 0; i < this.#data.length; i++){
            this.#data[i] = this.#data[i + 1];
        }
        this.#data = this.#data.slice(0, this.#data.length - 1);
        return temp;
    }
    // return the top element of the stack
    peek(){
        return this.#data[0];
    }
    // check if the stack is empty
    isEmpty(){
        return this.#data.length === 0;
    }
   // displays all the elements in the stack    
    display(){
        let str = "[";
        for(let i = 0; i < this.#data.length; i++){
            str += this.#data[i] + " ";
        }
        str += "]";
        return str; 
    }
    // print the stack
    print(){
        console.log(this.#data);
    }
}
