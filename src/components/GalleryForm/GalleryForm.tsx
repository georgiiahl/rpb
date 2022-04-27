import React, { Component, useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate} from 'react-router-dom'
import src from '../../src'
import { makeTestIdProps } from '@guinie/react-testid';

const GetGallery = (): JSX.Element => {
    const [imageList, setImageList] = useState<any []>([])
    const getImages = () => {
    
    fetch(src)
    .then(function(response){
      return response.json();
    })
    .then(function(myJson) {
      setImageList(myJson)
    });
    }

    useEffect(() => {
    getImages()
    }, [])

    return (
        <table>
           <tbody>
             {imageList && imageList.length > 0 && imageList.map((image) => (
              <tr key={image.id}>
              <td>
                    <Link to={`/getGalleryItem/${image.id}`} {...makeTestIdProps(`navigate-to-galleryItem-${image.id}`)}>
                    <img
                        src={image.thumbnailUrl} alt={image.title}  
                    />
                    </Link>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
            
      );
}

export default GetGallery;