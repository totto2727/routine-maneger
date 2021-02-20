import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Checkbox,
    Grid,
    makeStyles,
    Paper,
    Theme,
    Typography,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import React from "react";


type Name = { name: string };

type Memo = { memo?: string };

type IsComplete = { isComplete: boolean };

export type Work = Name & Memo & IsComplete;

export type WorkGroup = Work & { works?: Work[] };

export type Routine = Readonly<WorkGroup> & IsComplete;

const useStyle = makeStyles((theme:Theme)=>({
    name: {
        fontWeight: "bold",
        fontSize: "150%",
    },
    completed:{
        opacity:0.3
    }
}));

const InputCheckbox: React.FC<Readonly<IsComplete>> = ({ isComplete }) => {
    return <Checkbox checked={isComplete} size="small" />;
};

const NameSpan: React.FC<Readonly<Name>> = ({ name }) => {
    const classes = useStyle();
    return (
        <Typography component="span" className={classes.name}>
            {name}
        </Typography>
    );
};

const InfoP: React.FC<Readonly<Memo>> = ({ memo: info }) => {
    return info ? (
        <Accordion variant="outlined">
            <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography>Memo</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography component="p">{info}</Typography>
            </AccordionDetails>
        </Accordion>
    ) : (
        <></>
    );
};

export const WorkC: React.FC<Readonly<Work>> = ({ name, isComplete, memo }) => {
    const classes=useStyle();
    return (
    <Grid container spacing={2} alignItems="center" className={isComplete?classes.completed:""}>
        <Grid item xs="auto">
            <InputCheckbox isComplete={isComplete} />
        </Grid>
        <Grid item xs="auto">
            <NameSpan name={name} />
        </Grid>

        {memo ? (
            <Grid item xs={12}>
                <InfoP memo={memo} />
            </Grid>
        ) : (
            <></>
        )}
    </Grid>
)};

export const WorksC: React.FC<Readonly<{ works: Work[] }>> = ({ works }) => (
    <Accordion variant="outlined">
        <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography>Works</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Grid container spacing={1}>
                {works.map((work) => (
                    <Grid item xs={3}>
                        <WorkC {...work} />
                    </Grid>
                ))}
            </Grid>
        </AccordionDetails>
    </Accordion>
);

export const RoutineC: React.FC<Readonly<Routine>> = ({
    name,
    isComplete,
    memo,
    works,
}) => (
    <Paper variant="outlined">
        <Box m={1}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs="auto">
                    <WorkC {...{ name, isComplete, memo }} />
                </Grid>

                {works ? (
                    <Grid item xs={12}>
                        <WorksC works={works} />
                    </Grid>
                ) : (
                    <></>
                )}
            </Grid>
        </Box>
    </Paper>
);
