/* eslint-disable react/prop-types */
import { AppBar, Toolbar, Button } from '@mui/material';
import { StyledHeader, StyledTitle } from './Header.styled';

const Header = ({ handleClick }) => {
    return (
        <StyledHeader>
            <AppBar position="static">
                <Toolbar>
                    <StyledTitle variant="h6">
                        Match 2 Memory Game
                    </StyledTitle>
                    <Button color="inherit" onClick={handleClick}>Quit</Button>
                </Toolbar>
            </AppBar>
        </StyledHeader>
    )
};

export default Header;
