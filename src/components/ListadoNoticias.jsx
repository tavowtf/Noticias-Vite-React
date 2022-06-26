import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import useNoticias from '../hooks/useNoticias'
import Noticia from './Noticia'


const ListadoNoticias = () => {

    const {noticias, totalPaginas, handleChangePagina,pagina} = useNoticias()


    const numeroDePaginas = Math.ceil(totalPaginas / 20)



  return (
    <>
        <Typography
            textAlign='center'
            marginY={5}
            variant='h3'
            component={'h2'}
        >
            Últimas Noticias
        </Typography>

        <Stack 
            spacing={2}
            direction='row'
            justifyContent='end'
            alignItems='center'
            sx={{marginY: 5}}
        >
            <Pagination 
                count={numeroDePaginas} 
                color="primary" 
                onChange={handleChangePagina}
                page={pagina}
            />
        </Stack>

        <Grid container spacing={2}>
            {noticias.map(noticia => (
                <Noticia key={noticia.url} noticia={noticia} />
            ))}
        </Grid>

        <Stack 
            spacing={2}
            direction='row'
            justifyContent='center'
            alignItems='center'
            sx={{marginY: 5}}
        >
            <Pagination 
                count={numeroDePaginas} 
                color="primary" 
                onChange={handleChangePagina}
                page={pagina}
            />
        </Stack>
    </>
  )
}

export default ListadoNoticias