import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import axios from 'axios';
import { Button, Typography } from '@mui/material';



export default function PostsTable() {

    const [posts, setPosts] = React.useState([])
    const lstoken = localStorage.getItem("token");

    React.useEffect(() => {
        axios.get(`http://localhost:3002/api/posts`, {
            headers: {
                Authorization: "Bearer " + lstoken.split(':')[1].split('"')[1],
            },
        })
            .then((data) => setPosts(data.data))
            .catch(e => console.log(e))
    }, [])


    return (
        <TableContainer className='photosTableContainer' component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead className='postsHead'>
                    <TableRow>
                        <TableCell className='rowCell'>Album Id</TableCell>
                        <TableCell className='rowCell' align="left">Id</TableCell>
                        <TableCell className='rowCell' align="left">Title</TableCell>
                        <TableCell className='rowCell' align="left">Url</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {posts.map((row) => (
                        <TableRow
                            className='row'
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell className='celdasAlbumId' component="th" scope="row">
                                {row.userId}
                            </TableCell>
                            <TableCell className='celdasId' align="left">{row.id}</TableCell>
                            <TableCell className='celdas' align="left">{row.title}</TableCell>
                            <TableCell className='celdas' align="left">{row.body}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
