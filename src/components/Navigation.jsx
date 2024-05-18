import '../App.css'  

import { Link } from "react-router-dom"
import Image1 from './Image1'
import Image2 from './Image2'
import Image3 from './Image3'
import Image4 from './Image4'
import Image5 from './Image5'
import Image6 from './Image6'
import Image7 from './Image7'
import Image8 from './Image8'
import Image9 from './Image9'
import Image10 from './Image10'
import Image11 from './Image11'
import Image12 from './Image12'

function Navigation() {
  return (
    <div>
      <Link to='/Image1'>
        <figure >
          <Image1/>
          <figcaption>Árbol 1</figcaption>
        </figure>
      </Link>
      <Link to='/Image2'>
        <figure>
          <Image2 />
          <figcaption>Árbol 2</figcaption>
        </figure>
      </Link>
      <Link to='/Image3'>
        <figure>
          <Image3 />
          <figcaption>Campo 1</figcaption>
        </figure>
      </Link>
      <Link to='/Image4'>
        <figure>
          <Image4 />
          <figcaption>Campo 2</figcaption>
        </figure>
      </Link>
      <Link to='/Image5'>
        <figure>
          <Image5 />
          <figcaption>Campo 3</figcaption>
        </figure>
      </Link>
      <Link to='/Image6'>
        <figure>
          <Image6 />
          <figcaption>Cielo en la mañana</figcaption>
        </figure>
      </Link>
      <Link to='/Image7'>
        <figure>
          <Image7 />
          <figcaption>Cielo en la noche</figcaption>
        </figure>
      </Link>
      <Link to='/Image8'>
        <figure>
          <Image8 />
          <figcaption>Cielo en la tarde 1</figcaption>
        </figure>
      </Link>
      <Link to='/Image9'>
        <figure>
          <Image9 />
          <figcaption>Cielo en la tarde 2</figcaption>
        </figure>
      </Link>
      <Link to='/Image10'>
        <figure>
          <Image10 />
          <figcaption>Cielo en la tarde 3</figcaption>
        </figure>
      </Link>
      <Link to='/Image11'>
        <figure>
          <Image11 />
          <figcaption>Cielo en la tarde 4</figcaption>
        </figure>
      </Link>
      <Link to='/Image12'>
        <figure>
          <Image12 />
          <figcaption>Río</figcaption>
        </figure>
      </Link>

    </div>
  )
}

export default Navigation;
