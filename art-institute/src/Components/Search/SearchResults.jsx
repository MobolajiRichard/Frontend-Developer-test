
import { Grid } from "@mui/material"

const SearchResult = ({data, viewDetails}) => {
 
  return (
    <Grid  container spacing={4} position="center">
    {
        data?.data.map((d)=>(
            <Grid data-testid ='result-container'  key={d?.image_id} item sm={6} md={4} xs={12}>
            <div className='search__main__view' onClick={()=>viewDetails(d?.id)}>
                <div className='search__main__view__image__container'>
                    <img data-testid ='image' className='search__main__view__image' alt='img' loading='lazy' src={`${data?.config.iiif_url}/${d?.image_id}/full/843,/0/default.jpg`} />
                </div>         
                <h3 data-testid ='title'>{d?.title?.length > 25 ? d?.title.substr(0, 25) + '...' : d?.title}</h3>
                <p data-testid='display_date'>{d?.date_display?.length > 20 ? d?.date_display.substr(0, 20) : d?.date_display}</p>
                <p >{d?.place_of_origin?.length > 20 ? d?.place_of_origin.substr(0, 15) : d?.place_of_origin}</p>
            </div>
            </Grid>
        ))
    }            
</Grid>
   
  )
}

export default SearchResult