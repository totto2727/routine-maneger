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
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import React from 'react';
import { theme } from '../Theme';

type Name = { name: string };

type Memo = { memo?: string };

type Completed = { completed: boolean };

export type Group<T extends Work> = T & { group: T[] };

export type Work = Name & Memo;

export type WorkGroup = Group<Work>;

export type Routine = Readonly<Work & Completed>;

export type RoutineGroup = Readonly<Group<Routine>>;

export type ExtendedTypeFromWork = Work | Routine | WorkGroup | RoutineGroup;

const useStyle = makeStyles((theme: Theme) => ({
    completed: {
        opacity: 0.3,
    },
    paper: {
        background: theme.palette.secondary.main,
    },
    accordionSummary: {
        background: theme.palette.secondary.dark,
    },
    typographyLarge:{
        fontSize:"125%"
    },
    name:{
        fontWeight:"bold",
        fontSize:"130%"
    },
    accordionDetails:{
        background:theme.palette.background.default
    }
}));

const InputCheckbox: React.FC<Readonly<Completed>> = ({ completed }) => (
    <Checkbox checked={completed} size='small' />
);

const NameSpan: React.FC<Readonly<Name>> = ({ name }) => {
    const classes=useStyle(theme);
    return (
    <Typography component='span' className={classes.name}>{name}</Typography>
)};
const MemoP: React.FC<Readonly<Memo>> = ({ memo: info }) => {
    const classes = useStyle(theme);
    return info ? (
        <Accordion variant='outlined'>
            <AccordionSummary
                expandIcon={<ExpandMore />}
                className={classes.accordionSummary}
            >
                <Typography className={classes.typographyLarge}>Memo</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails}>
                <Typography>{info}</Typography>
            </AccordionDetails>
        </Accordion>
    ) : (
        <></>
    );
};

export const WorkC: React.FC<Readonly<ExtendedTypeFromWork>> = (props) => {
    const classes = useStyle(theme);
    const completed: boolean | null =
        'completed' in props ? props.completed : null;
    return (
        <Grid
            container
            spacing={2}
            alignItems='center'
            className={completed === true ? classes.completed : ''}
        >
            {completed !== null ? (
                <Grid item xs='auto'>
                    <InputCheckbox completed={completed} />
                </Grid>
            ) : (
                <></>
            )}
            <Grid item xs='auto'>
                <NameSpan name={props.name} />
            </Grid>

            {props.memo ? (
                <Grid item xs={12}>
                    <MemoP memo={props.memo} />
                </Grid>
            ) : (
                <></>
            )}
        </Grid>
    );
};

export const GroupsC: React.FC<Readonly<Group<Work|Routine>>> = (props) => {
    const classes=useStyle(theme);
    return (
    <Accordion variant='outlined'>
        <AccordionSummary expandIcon={<ExpandMore />} className={classes.accordionSummary}>
            <Typography className={classes.typographyLarge}>{"completed" in props?"Routines":"Works"}</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
            <Grid container spacing={1}>
                {props.group.map((g) => (
                    <Grid item xs={3}>
                        <WorkC {...g} />
                    </Grid>
                ))}
            </Grid>
        </AccordionDetails>
    </Accordion>
);}

export const RoutineC: React.FC<Readonly<ExtendedTypeFromWork>> = (props) => {
    const classes = useStyle(theme);
    return (
        <Paper variant='outlined' className={classes.paper}>
            <Box m={1}>
                <Grid container spacing={2} alignItems='center'>
                    <Grid item xs={12}>
                        <WorkC {...props} />
                    </Grid>

                    {'group' in props ? (
                        <Grid item xs={12}>
                            <GroupsC {...props}/>
                        </Grid>
                    ) : (
                        <></>
                    )}
                </Grid>
            </Box>
        </Paper>
    );
};
