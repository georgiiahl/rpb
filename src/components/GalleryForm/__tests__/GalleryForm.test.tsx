// @ts-nocheck
import { cleanup, act } from '@testing-library/react'
import { configure } from '@guinie/react'
import * as actions from './GalleryForm.actions'
import GalleryForm from '../GalleryForm'
import { Link } from 'react-router-dom'

const { wrapDriver, context } = configure()
const navigateToGalleryItem = actions.navigateToGalleryItem(context)
const makeSpy = () => {
    const calledWith = []
    const f = (...args) => calledWith.push(args)
    const getCalls = () => calledWith
    return [f, getCalls]
}
describe('navigation to gallery item', () => {
    afterEach(cleanup)
    it('navigates to galleryItem', async () => {

    })
})