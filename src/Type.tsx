export type Name={name:string}

export type Info={info?:string}

export type IsComplete={isComplete:boolean}

export type Work = Name&Info&IsComplete;

export type WorkGroup = Work&{works:Work[]};

export type Routine = Work | WorkGroup;
