import Card from '@mui/material/Card';
import CardAction from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent  from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { useState } from 'react';


const Noticia = ({noticia}) => {

    const {urlToImage, url, title, description, source} = noticia;

  return (
    <Grid item xs={12} md={4}>
        <Card>
            <CardMedia
            component='img'
            alt={`Imagen de la noticias ${title}`}
            image={urlToImage ? urlToImage : 'https://via.placeholder.com/250'}
            height={250}
            />
            <CardContent height={250}>
                <Typography color="error" variant="body1">
                    {source.name}
                </Typography>
                <Typography component="div" variant="h5">
                    {title}
                </Typography>
                <Typography variant="body2">
                    {description}
                </Typography>
            </CardContent>


            <CardAction>
                <Link 
                    href={url} 
                    target='_blank'
                    rel='noopener noreferrer'
                    variant='button'
                    color='primary'
                    width={'100%'}
                    textAlign='center'
                    sx={{textDecoration: 'none'}}
                >
                    Ver noticia
                </Link>
            </CardAction>
        </Card>  
    </Grid>   
    
        
    
  
  )
}

export default Noticia