/*
// this class simulates the behavior of a stack using an array
// by following the LIFO (Last In First Out) principle

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
     // returns the size of the stack
     length(){
        return this.#data.length;
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


class Queue{
    #data = [];
    #stack1 = new Stack();
    #stack2 = new Stack();

    constructor(){ }
    enqueue(number){
        this.#stack1.push(number);
    }
    dequeue(){

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
        for(let i = 0; i < this.#stack1.length; i++){
            this.#stack2.push(this.#stack1.pop());
        }
        return this.#stack2.display();

    }
    // print the stack
    print(){
        console.log(this.#data);
    }
}

const queue = new Queue();
queue.enqueue(3);
queue.enqueue(4);
queue.display();


*/
// work in progress
