import { sequence } from '@guinie/common'
export const navigateToGalleryItem = (context: { click: any} ) => (params: any) => {
    const { click } = context
    return sequence (
        click(`navigate-to-galleryItem-${params.id}`)
    )}