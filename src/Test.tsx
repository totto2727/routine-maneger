import {RoutineC, RoutineGroup, WorkGroup } from "./Component/Routine";

export const testData:RoutineGroup={
    name:"aaaaaaa",
    completed:false,
    memo:"testest",
    group:[
        { name: "aaa", completed: false },
        { name: "testttt", completed: true, memo: "nest1111111111111 11111111111111111111111" },
        {name:"dsahs",completed:true},
        {name:"hhzara",completed:false,memo:"gsgaht"},
        {name:"kfu",completed:true}
    ]
}

export const Test=()=><RoutineC {...testData}/>