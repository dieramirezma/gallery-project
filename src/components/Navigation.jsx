import '../App.css'

import { Link } from 'react-router-dom'
import Image3 from './Image3'
import Image4 from './Image4'
import Image5 from './Image5'
import Image6 from './Image6'
import Image8 from './Image8'
import Image9 from './Image9'
import Image10 from './Image10'
import Image11 from './Image11'
import Image12 from './Image12'

const Navigation = () => {
  return (
    <div className='flex flex-wrap justify-center gap-4 w-2/5 text-center align-center'>
      <Link to='/Image3'>
        <figure className='card grow shrink-0'>
          <Image3 customStyle='rounded-lg' />
          <figcaption>Campo 1</figcaption>
        </figure>
      </Link>
      <Link to='/Image4'>
        <figure className='card grow shrink-0'>
          <Image4 customStyle='rounded-lg' />
          <figcaption>Campo 2</figcaption>
        </figure>
      </Link>
      <Link to='/Image5'>
        <figure className='card grow shrink-0'>
          <Image5 customStyle='rounded-lg' />
          <figcaption>Campo 3</figcaption>
        </figure>
      </Link>
      <Link to='/Image6'>
        <figure className='card grow shrink-0'>
          <Image6 customStyle='rounded-lg' />
          <figcaption>Cielo 1</figcaption>
        </figure>
      </Link>
      <Link to='/Image8'>
        <figure className='card grow shrink-0'>
          <Image8 customStyle='rounded-lg' />
          <figcaption>Cielo 2</figcaption>
        </figure>
      </Link>
      <Link to='/Image9'>
        <figure className='card grow shrink-0'>
          <Image9 customStyle='rounded-lg' />
          <figcaption>Cielo 3</figcaption>
        </figure>
      </Link>
      <Link to='/Image10'>
        <figure className='card grow shrink-0'>
          <Image10 customStyle='rounded-lg' />
          <figcaption>Cielo 4</figcaption>
        </figure>
      </Link>
      <Link to='/Image11'>
        <figure className='card grow shrink-0'>
          <Image11 customStyle='rounded-lg' />
          <figcaption>Cielo 5</figcaption>
        </figure>
      </Link>
      <Link to='/Image12'>
        <figure className='card grow shrink-0'>
          <Image12 customStyle='rounded-lg' />
          <figcaption>Río</figcaption>
        </figure>
      </Link>
    </div>
  )
}

export default Navigation
