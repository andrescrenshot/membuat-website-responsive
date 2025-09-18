

export const Navbar = () => {
  return (
    <div className="navbar fixed w-full transition-all">
        <div className="container mx-auto px-4 bg-slate-200">
            <div className="navbar-box flex item-center justify-between">
            <div className="logo">
                <h1 className="text-2xl font-bold">
                  HOME</h1>
            </div>
                <ul className="flex gap-1">
                    <li>
                      <a href="#" className="font-medium opacity-75">
                        Beranda</a>
                    </li>
                </ul>
                <ul>
                    <li>
                      <a href="#"  className="font-medium opacity-75">
                        Tentang kami</a>
                    </li>
                </ul>
                <ul>
                    <li>
                      <a href="#"  className="font-medium opacity-75">
                        Layanan</a>
                    </li>
                </ul>
                <ul>
                    <li>
                      <a href="#"  className="font-medium opacity-75">
                        Proyek</a>
                    </li>
                </ul>
                <div className="social">
                  <a href="#" className="bg-sky-300 px-5 py-2 rounded-full text-white font-bold hover:bg-sky-500"> Social Media</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;
