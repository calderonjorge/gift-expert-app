import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from '../componets/GifGridItem.js'


export const GifGrid = ({ category }) => {

  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className='animate__animated animate__fadeIn' >{category}</h3>

      {/* Solo aplica en el true */}
      {loading && <p className='animate__animated animate__flash'>Cargando...</p>}
      <div className="containerGif">
        {
          images.map(img =>
            <GifGridItem
              key={img.id}
              {...img} //Aqui se mandan las propiedades del img, se mandan como una propiedad independiente
            />
          )
        }
      </div>

    </>
  )
}
