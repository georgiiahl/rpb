// mycomponent.js
import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { getById } from '../GalleryForm/api';
import { makeTestIdProps } from '@guinie/react-testid';
import { BrowserRouter as Router, Route, Routes, Link, Navigate} from 'react-router-dom'

const GetGalleryItem = (): JSX.Element => {
    const params = useParams()
    const [currentImage, setCurrentImage] = useState<any>()
    const getCurrentImage = () => {
    
    getById(params.id)
    .then(function(myJson) {
      setCurrentImage(myJson)
      console.log(myJson)
    });
    }

    useEffect(() => {
    getCurrentImage()
    }, [])

  return currentImage && (
    <table>
     <tbody>
         <tr>
            <td>
                <img
                    {...makeTestIdProps(`gallery-item-${currentImage.id}`)}
                    src={currentImage.url}
                    alt={currentImage.title}
                    height={300}
                    width={300}
                />
            </td>
            <td>
                <p> Title: {currentImage.title} </p>
                <p> Album: {currentImage.albumId}</p>
                <p> ID: {currentImage.id}</p>
            </td>
            <td> 
                <Link to='/'>
                <button>
                  Back to Gallery
                </button>
                </Link> 
            </td>
         </tr>
     </tbody>
    </table>
    
  )
}

export default GetGalleryItem;