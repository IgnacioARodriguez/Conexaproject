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



export default function PhotosTable() {

    // const [count, setCount] = React.useState(0)
    const lstoken = localStorage.getItem("token");
    const [count, setCount] = React.useState(1)
    const [pages, setPages] = React.useState(1)
    const [photos, setPhotos] = React.useState([])
    // const rest = async () => {
    //     return setCount(count - 1)
    // }
    // const sum = async () => {
    //     return setCount(count + 1)
    // }

    const handleRestClick = async (e) => {
        if (count > 1) {
            return setCount(count - 1)
        }
    }

    const handleSumClick = async (e) => {
        if (count <= pages) {
            return setCount(count + 1)
        }
    }

    React.useEffect(() => {
        axios.get('http://localhost:3002/api/photos', {
            headers: {
                Authorization: "Bearer " + lstoken.split(':')[1].split('"')[1],
            },
        })
            .then((data) => setPages((data.data.length / 10)))
            .catch(e => console.log(e))

    }, [])

    React.useEffect(() => {
        axios.get(`http://localhost:3002/api/photos/${count}`, {
            headers: {
                Authorization: "Bearer " + lstoken.split(':')[1].split('"')[1],
            },
        })
            .then((data) => setPhotos(data.data))
            .catch(e => console.log(e))
    }, [count])

    return (
        <TableContainer className='photosTableContainer' component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className='rowCell'>Album Id</TableCell>
                        <TableCell className='rowCell' align="left">Id</TableCell>
                        <TableCell className='rowCell' align="left">Title</TableCell>
                        <TableCell className='rowCell' align="left">Url</TableCell>
                        <TableCell className='rowCell' align="left">Thumbnail Url</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {photos.map((row) => (
                        <TableRow
                            className='row'
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell className='celdasAlbumId' component="th" scope="row">
                                {row.albumId}
                            </TableCell>
                            <TableCell className='celdasId' align="left">{row.id}</TableCell>
                            <TableCell className='celdas' align="left">{row.title}</TableCell>
                            <TableCell className='celdas' align="left">{row.url}</TableCell>
                            <TableCell className='celdas' align="left">{row.thumbnailUrl}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className='pagination'>
                <Button className='paginationButtons' onClick={handleRestClick} >
                    <ArrowBackIosIcon />
                </Button>
                <Button className='paginationButtons' onClick={handleSumClick}>
                    <ArrowForwardIosIcon />
                </Button>
                <Typography>Page {count} of {pages}</Typography>
            </div>
        </TableContainer>
    );
}
