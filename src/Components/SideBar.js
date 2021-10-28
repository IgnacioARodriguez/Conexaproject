import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ConexaLogo from '../Components/ConexaLogo.png'
import ClearIcon from '@mui/icons-material/Clear';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Switch, Route, useHistory } from "react-router-dom";


export default function SideBar() {
    const history = useHistory();
    const [selected, setSelected] = React.useState('posts')
    return (
        <div className='sidebar'>

            {selected === 'posts' ? <div className='bigPosts'>Posts {<ArrowForwardIosIcon />}</div> : <div onClick={() => {
                history.push('/posts')
                return setSelected('posts')
            }} className='littlePosts'>Posts</div>}

            {selected === 'photos' ? <div className='bigPhotos'>Photos {<ArrowForwardIosIcon />} </div> : <div onClick={() => {
                history.push('/photos')
                setSelected('photos')
            }} className='littlePhotos'>Photos</div>}
        </div >
    )
}