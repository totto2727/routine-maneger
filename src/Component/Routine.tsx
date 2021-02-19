import React from "react";

type Name = { name: string };

type Info = { info?: string };

type IsComplete = { isComplete: boolean };

export type Work = Name & Info & IsComplete;

export type WorkGroup = Work & { works?: Work[] };

const InputCheckbox: React.FC<Readonly<IsComplete>> = ({ isComplete }) => (
    <input type="checkbox" checked={isComplete} />
);

const NameSpan: React.FC<Readonly<Name>> = ({ name }) => <span>{name}</span>;

const InfoP: React.FC<Readonly<Info>> = ({ info }) =>
    info ? <p>{info}</p> : <></>;

export const RoutineC:React.FC<Readonly<WorkGroup>> = ({name,isComplete,info,works}) => (
    <div>
        <InputCheckbox isComplete={isComplete} />
        <NameSpan name={name} />
        {info ? <InfoP info={info} /> : <></>}
        {works ? <div>{works.map(RoutineC)}</div> : <></>}
    </div>
);
