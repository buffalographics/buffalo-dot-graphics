import { Cloudinary } from '@cloudinary/url-gen'
import { v2 as cloudinary } from 'cloudinary'
export const cld = new Cloudinary({
  cloud: {
    cloudName: 'dotgarrett',
  },
})

export const test = () => {
  console.log(
    process.env.CLOUDINARY_SECRET,
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  )
}

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
  secure: true,
})

export const loadImages = async () => {
  // return await cloudinary.api.resources_by_asset_folder('buffalo-graphics')
  const asssets = await cloudinary.search
    .expression(
      'folder:buffalo-graphics/*', // add your folder
    )
    .sort_by('public_id', 'desc')
    .max_results(25)
    .execute()

  // const gal = asssets.map(p)

  return asssets.resources
}
