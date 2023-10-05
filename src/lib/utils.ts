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


export interface CloudinarySearch {
  totalCount: number
  time: number
  nextCursor: string
  resources: Resource[]
  rateLimitAllowed: number
  rateLimitResetAt: string
  rateLimitRemaining: number
}

export interface Resource {
  assetid: string
  publicid: string
  folder: string
  filename: string
  format: string
  version: number
  resourceType: string
  type: string
  createdAt: string
  uploadedAt: string
  bytes: number
  backupBytes: number
  width: number
  height: number
  aspectRatio: number
  pixels: number
  pages: number
  url: string
  secureurl: string
  status: string
  accessMode: string
  accessControl: null
  etag: string
  createdBy: EdBy
  uploadedBy: EdBy
}

export interface EdBy {
  accessKey: string
  customid: string
  externalid: string
}

export const loadImages = async (max: number | undefined) => {
  // return await cloudinary.api.resources_by_asset_folder('buffalo-graphics')
  const asssets = (await cloudinary.search
    .expression(
      'folder:buffalo-graphics-img/*', // add your folderå
    )
    .sort_by('public_id', 'desc')
    .max_results(max)
    .execute()) as Promise<CloudinarySearch>

  return asssets
}

// Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg


