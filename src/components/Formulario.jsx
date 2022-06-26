import { FormControl, InputLabel, Select, MenuItem} from '@mui/material'

import useNoticias from '../hooks/useNoticias'


const CATEGORIAS = [
    'general',
    'business',
    'entertainment',
    'health',
    'science',
    'sports',
    'technology'
]

const Formulario = () => {

const {categoria, setCategoria, handleChangeCategoria} = useNoticias()  

  return (
    <FormControl fullWidth>
        <InputLabel sx={{marginBot: 5}}>Categoría</InputLabel>
        <Select
            value={categoria}
            onChange={ handleChangeCategoria } 
            sx={{marginTop: 2}}
        >    
            {CATEGORIAS.map(categoria => (
                <MenuItem key={categoria} value={categoria}>
                    {
                    //capitalizar la primera letra de cada palabra
                    categoria.charAt(0).toUpperCase() + categoria.slice(1)
                    
                    }

                </MenuItem>
            ))}
        </Select>
    
    </FormControl>
  )
}

export default Formulario