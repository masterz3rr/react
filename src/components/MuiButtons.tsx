import { Stack, Button, IconButton, Typography, ButtonGroup, ToggleButtonGroup, ToggleButton } from "@mui/material";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AirplayIcon from '@mui/icons-material/Airplay';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import React, { useState } from "react";

export const MuiButtons = () => {
    const [formats, setFormats] = useState<string[]>([])
    console.log({formats,})
    const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updateFormats: string[]) => {
        setFormats(updateFormats)
    }
  return (
    <Stack spacing ={4}>
        <Stack spacing={2} direction='row'>
            <Button variant="text" href='https://google.com'>button 1</Button>
            <Button variant="contained">button 1</Button>
            <Button variant="outlined">button 1</Button>
        </Stack>

        <Stack spacing={2} direction='row'>
            <Button variant='contained' color='primary'>primary</Button>
            <Button variant='outlined' color='secondary'>secondary</Button>
            <Button variant='contained' color='error'>error</Button>
            <Button variant='text' color='warning'>warning</Button>
            <Button variant='contained' color='info'>info</Button>
            <Button variant='outlined' color='success'>success</Button>
        </Stack>

        <Stack display='block' spacing={2} direction='row'>
            <Button variant='contained' size='small' color='primary'>primary</Button>
            <Button variant='contained' size='medium' color='primary'>primary</Button>
            <Button variant='contained' size='large' color='primary'>primary</Button>
        </Stack>

        <Stack display='block' spacing={2} direction='row'>
            <Button variant='contained' size='small' color='primary' startIcon={<AccountTreeIcon />} disableElevation>primary</Button>
            <Button variant='contained' size='medium' color='primary' endIcon={<AirplayIcon />}>primary</Button>
            <Button variant='contained' size='large' color='primary'>primary</Button>
            <IconButton aria-label="sample" color='success' size='small'><AirplayIcon/></IconButton>
        </Stack>

        <Stack display='block' spacing={2} direction='row'>
            <Button variant='contained' size='small' color='primary' startIcon={<AccountTreeIcon />} onClick={() =>alert('Hi')}>primary</Button>
        </Stack>

        <Typography variant="body2">Button Group</Typography>
        <Stack direction='row'>
            <ButtonGroup variant='contained' color='primary' size='small' aria-label='alignment button group'>
                <Button onClick={() =>alert('Left')} startIcon={<KeyboardArrowLeftIcon />}>Left</Button>
                <Button onClick={() =>alert('Center')} startIcon={<CenterFocusStrongIcon />}>Center</Button>
                <Button onClick={() =>alert('Right')} startIcon={<KeyboardArrowRightIcon />}>Right</Button>
            </ButtonGroup>
        </Stack>

        <Typography variant="body2">Toggle Group</Typography>
        <Stack direction='row'>
            <ToggleButtonGroup aria-label='text formatting' value={formats} onChange={handleFormatChange}>
                <ToggleButton value='bold' aria-label="bold">
                    <FormatBoldIcon/>
                    </ToggleButton>
                <ToggleButton value='Italic' aria-label="italic">
                    <FormatItalicIcon/>
                    </ToggleButton>
                <ToggleButton value='Underlined' aria-label="underline">
                    <FormatUnderlinedIcon/>
                    </ToggleButton>
            </ToggleButtonGroup>
        </Stack>

    </Stack>
  )
}
