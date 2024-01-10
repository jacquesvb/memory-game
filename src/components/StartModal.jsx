/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Dialog, Button, Typography } from '@mui/material';
import { StyledDialogTitle, StyledDialogContent, StyledDialogActions } from './StartModal.styled';
import DeckSizeSelect from './DeckSizeSelect';
import { GAME_STATUS } from '../constants';

const DialogTitle = ((props) => {
    const { children, ...other } = props;
    return (
        <StyledDialogTitle disabletypography="true" {...other}>
            <Typography variant="h6">{children}</Typography>
        </StyledDialogTitle>
    );
});

export default function StartModal(props) {
    const { gameStatus, getPlayDeckSize, cardQuantity } = props;
    const [open, setOpen] = useState(false);
    const [playDeckSize, setPlayDeckSize] = useState(props);

    useEffect(() => {
        setPlayDeckSize(2);
    }, []);

    useEffect(() => {
        if (gameStatus === GAME_STATUS.SHUFFLING) {
            setOpen(true);
        }
    }, [gameStatus]);

    const deck = () => {
        return cardQuantity * 2;
    };

    const handleChange = (event, newValue) => {
        setPlayDeckSize(newValue);
    }

    const handleClose = () => {
        getPlayDeckSize(playDeckSize);
        setOpen(false);
    };

    return (
        <div>
            <Dialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Choose the number of cards for game
                </DialogTitle>
                <StyledDialogContent dividers>
                    <DeckSizeSelect handleChange={ handleChange } deck={ deck } />
                </StyledDialogContent>
                <StyledDialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Start
                    </Button>
                </StyledDialogActions>
            </Dialog>
        </div>
    );
}