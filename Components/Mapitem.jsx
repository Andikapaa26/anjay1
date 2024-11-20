import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'

const Mapitem = ({ judul, deskripsi, gambar, id }) => {
  // Membatasi deskripsi hanya 20 kata
  const limitedDeskripsi = deskripsi.split(" ").slice(0, 20).join(" ") + (deskripsi.split(" ").length > 20 ? "..." : "");

  return (
    <div className='max-w-[330px] sm:max-w[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]'>
        <Link href={`/maps/${id}`}>
            <Image src={gambar} alt='gambar' width={400} height={400} className='border-b border-black' />
        </Link>
        <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>Stok Karbon</p>
        <div className="p-5">
            <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{judul}</h5>
            <p className='mb-3 text-sm tracking-tight text-gray-700'>{limitedDeskripsi}</p>
            <Link href={`/maps/${id}`} className='inline-flex items-center py-2 font-semibold text-center'>
                Read More <Image src={assets.arrow} className='ml-2' alt='' width={12} />
            </Link>
        </div>
    </div>
  )
}

export default Mapitem