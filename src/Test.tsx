import {RoutineC, WorkGroup } from "./Component/Routine";

export const testData:WorkGroup={
    name:"aaaaaaa",
    isComplete:false,
    memo:"testest",
    works:[
        { name: "aaa", isComplete: false },
        { name: "testttt", isComplete: true, memo: "nest1111111111111 11111111111111111111111" },
        {name:"dsahs",isComplete:true},
        {name:"hhzara",isComplete:false,memo:"gsgaht"},
        {name:"kfu",isComplete:true}
    ]
}

export const Test=()=><RoutineC {...testData}/>