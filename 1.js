class Stack{
    constructor(){
        this.data = [];
        this.top = 0;
    }

    push(item){
        this.data[this.top] = item;
        this.top++;
    }

    length(){
        return this.top;
    }

    peek(){
        return this.data[this.top-1];
    }

    isEmpty(){
        return this.top === 0;
    }

    pop(){
        if(this.isEmpty())
            console.log("Underflow")
        else{
            this.top--;
            return this.data.pop();
        }
    }
}


function postfixEval(exp){
    let stack = new Stack();

    for(let i = 0; i<exp.length; ++i){
        let current = exp[i];
        if(!isNaN(current))
        {
            stack.push(Number(current));

        }
        else{
            let rhs = stack.pop();
            let lhs = stack.pop();
            if(rhs === "Underflow" || lhs === "Underflow")
                return "Fuck Off melon";
            switch(current)
            {
                case '+': stack.push(lhs+rhs); break;
                case '-': stack.push(lhs-rhs); break;
                case '*': stack.push(lhs*rhs); break;
                case '/': stack.push(lhs/rhs); break;
                case '%': stack.push(lhs%rhs); break;
            }
        }
    }


    return stack.pop()
}



console.log(postfixEval("54*62/+"))