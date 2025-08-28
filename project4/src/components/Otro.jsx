import { useCatImage } from '../hooks/useCatImage.js'

export function Otro () {
  const { imageURL } = useCatImage({ fact: 'cat' })
  console.log(imageURL)

  return (
    <>
      {imageURL && <img src={imageURL} />}
    </>
  )
}