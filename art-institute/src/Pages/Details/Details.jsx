import './details.css'
import Header from '../../Components/Header/Header'
import {ShareOutlined, KeyboardBackspace} from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Details = () => {
    //declaring variable
    const navigate = useNavigate()

    //extracting the id of the image from the routes
    const {artId} = useParams()

    //Fetching the data saved in redux
    const data = useSelector((state) => state.arts.data)

    //Finding the correct single data from the data gotten back from redux
    const single_art_data = data?.data.find((art) => art.id === Number(artId))

  return (
    <div className='details__container'>
       <Header/>
        <div className='details__icons'>
            <IconButton onClick={()=>navigate('/')} sx={{color:'white'}}>
                <KeyboardBackspace/>
            </IconButton>
            <ShareOutlined/>
        </div>
        
        <div className='details__detail'>
            <div className='details__image__container'>
                <img className='details__image' src={`${data?.config.iiif_url}/${single_art_data?.image_id}/full/843,/0/default.jpg`} alt='img'/>
            </div>
            <div className='details__text__container'>

                <div className='details__text'>
                    <div>
                    <h2>{single_art_data?.title}</h2>
                        <p>Artist - {single_art_data?.artist_title}</p>
                        <p>Date Display - {single_art_data?.date_display}</p>
                        <p>Place Of Origin - {single_art_data?.place_of_origin}</p>
                        <p>Description - {single_art_data?.thumbnail?.alt_text}</p>
                    </div>
                    <div className='details__text__button'>
                    <div className='details__explore'>
                    <p>Explore Arts</p>           
                </div>
                    <p>Explore Arts</p>           
                </div> 
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Details